# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class Product(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    image_id = scrapy.Field()
    style = scrapy.Field()
    color = scrapy.Field()
    pttrn_type = scrapy.Field()
    neckline = scrapy.Field()
    length = scrapy.Field()
    sleeve_length = scrapy.Field()
    sleeve_type = scrapy.Field()
    season = scrapy.Field()
    material = scrapy.Field()
    fabric = scrapy.Field()
    sheer = scrapy.Field()
    fit_type = scrapy.Field()
    placket_type = scrapy.Field()
    price = scrapy.Field()
    avg_rating = scrapy.Field()
    no_of_reviews = scrapy.Field()
    date_of_firstrev = scrapy.Field()

    
        
