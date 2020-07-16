import scrapy
from scrapy_splash import SplashRequest
from urllib.parse import urljoin
import base64
from scrape_Shein.items import Product
from scrapy.exceptions import CloseSpider
from lxml import html
import os.path


class Shein_Spider(scrapy.Spider):
    name = "shein_spider"
    i = 1
    def start_requests(self):
        urls = [
            'https://www.shein.in/pdsearch/tops/?scici=Search~~HotSearch~~1~~tops~~~~0~~0&srh_type=6',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    
    def parse(self, response):

        # follow links to get metadata for each product
        for href in response.xpath(".//div[@class = 'j-switch-color-wrap']/div/a/@href"):
            url = response.urljoin(href.get())
            lua_script = ''' 
            function main(splash, args)
                splash.private_mode_enabled = false
                splash:set_user_agent('Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:24.0) Gecko/20100101 Firefox/24.0')
                assert(splash:go(args.url))
                assert(splash:wait(1.5))
                assert(splash:runjs("document.querySelector('.common-reviews__select-wrap >div:last-child >div >ul >li:last-of-type').click()"))
                assert(splash:wait(1.5))
                local image = splash:select('.product-intro__main')
                splash:set_viewport_full()
                
                return {
                    html = splash:html(),
                    image = image:png(),
                }
            end
            '''
            yield SplashRequest(url = url, callback = self.parse_product, endpoint= 'execute', args= {'lua_source': lua_script})

        # follow pagination links
        for href in response.xpath(".//li[@class='page-next']/a"):
            yield response.follow(href, self.parse)

    def parse_product(self, response):

        #save the screenshot of the product returned by splash
        folder_path = '/home/archit/Desktop/Shein/scrape_Shein/scrape_Shein/pics'
        product_image = base64.b64decode(response.data['image'])
        file_name = os.path.join(folder_path,'{}.png'.format(self.i))
        with open(file_name, 'wb') as f:
            f.write(product_image)
        
        # grab the metadata for the particular product
        res = html.fromstring(response.data['html'])
        desc_key = res.xpath(".//div[@class ='product-intro__description-table-item']/div[@class='key']/text()")
        desc_val = res.xpath(".//div[@class ='product-intro__description-table-item']/div[@class='val']/text()")
        item = Product(pttrn_type = "NULL", sleeve_type = "NULL")
        item['image_id'] = self.i
        for key in range(len(desc_key)):
            if desc_key[key]=='Style:':
                item['style'] = desc_val[key]
            if desc_key[key]=='Color:':
                item['color'] = desc_val[key]
            if desc_key[key]=='Pattern Type:':
                item['pttrn_type'] = desc_val[key]
            if desc_key[key] == 'Neckline:':
                item['neckline'] = desc_val[key]
            if desc_key[key] == 'Length':
                item['length'] = desc_val[key]
            if desc_key[key] == 'Sleeve Length:':
                item['sleeve_length'] = desc_val[key]
            if desc_key[key] == 'Sleeve Type:': 
                item['sleeve_type'] = desc_val[key]
            if desc_key[key] == 'Season:':
                item['season'] = desc_val[key]
            if desc_key[key] == 'Material:':
                item['material'] = desc_val[key]
            if desc_key[key] == 'Fabric:':
                item['fabric'] = desc_val[key]
            if desc_key[key] == 'Sheer:':
                item['sheer'] = desc_val[key]
            if desc_key[key] == 'Fit Type:':
                item['fit_type'] = desc_val[key]
            if desc_key[key] == 'Placket Type:':
                item['placket_type'] = desc_val[key]
        item['price'] = res.xpath(".//div[@class='product-intro__head-price']/span/text()")
        item['avg_rating'] = res.xpath(".//div[@class='ave-rate']/text()")
        item['no_of_reviews'] = str(res.xpath(".//span[@class='common-reviews__tab-item_active']/text()"))
        item['date_of_firstrev'] = res.xpath(".//div[@class='date']/text()")[0]

        self.i +=1
        
        yield item
        