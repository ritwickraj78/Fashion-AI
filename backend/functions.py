from typing import Dict, List
from data_models import Product, Color
from settings import STATIC

def get_top_n_products(cluster1: int, cluster2: int, n: int, fashion_data: Dict) -> List[Product]:
  assert n >= 0, "n must be positive"
  
  results = []
  for k, v in fashion_data.items():
    if v['cluster_C1'] is None or v['cluster_C2'] is None:
      continue
    
    if int(v['cluster_C1']) == cluster1 and int(v['cluster_C2']) == cluster2:
      results.append(Product(image=create_url(STATIC, v['image_id']),
                             pattern=v['pttrn_type'],
                             avg_rating=v['avg_rating'],
                             n_reviews=v['no_of_reviews'],
                             color1=Color(r=v['R1'], g=v['G1'], b=v['B1']),
                             color2=Color(r=v['R2'], g=v['G2'], b=v['B2']),
                             color3=Color(r=v['Color_3'][0], g=v['Color_3'][1], b=v['Color_3'][2]),
                             trend=v['Trend']))
  return sorted(results, key=lambda p: p.trend, reverse=True)[:n]

def create_url(*args):
  return '/'.join(s.strip('/') for s in args)
