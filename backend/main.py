from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from typing import List
from datetime import datetime, timedelta

from data_loader import style_trends, color_model1, color_model2, color_cluster, fashion_data
from data_models import Styles, StyleList, StyleTrend, Trend, Color, Product, ProductDetails
from functions import get_top_n_products
from settings import APP_NAME, STATIC


app = FastAPI()
app.mount(STATIC, StaticFiles(directory="static"), name="static")
three_months = timedelta(weeks=3 * 4)


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3000/admin/coloranalysis"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def index():
  return {'message': f'welcome to {APP_NAME}!'}


@app.get('/styles', response_model=StyleList)
def get_style_types():
  return StyleList(styles=list(style_trends.keys()))


@app.get('/styles/{style_type}', response_model=StyleTrend)
def get_style_trend(style_type: Styles):
  return StyleTrend(style=style_type.value,
                    trend=Trend(history=style_trends[style_type.value]['history'],
                                forecast=style_trends[style_type.value]['forecast']))


@app.post('/color', response_model=List[Product])
def color_prediction(color1: Color, color2: Color):
  cluster1 = int(color_model1.predict([[color1.r, color1.g, color1.b]]))
  cluster2 = int(color_model2[cluster1].predict([[color2.r, color2.g, color2.b]]))
  
  top_k = get_top_n_products(cluster1, cluster2, 10, color_cluster)
  return top_k


@app.get('/trending', response_model=List[ProductDetails])
def trending_products():
  top_last_3_months = sorted([item for item in fashion_data if
                              datetime.strptime(item['date_of_firstrev'],
                                                '%Y-%m-%d') + three_months >= datetime.now()],
                             key=lambda d: d['avg_rating'], reverse=True)[:15]
  return [ProductDetails(image=f"{STATIC}/{item['image_id']}.png",
                         pattern=item['pttrn_type'],
                         avg_rating=item['avg_rating'],
                         price=item['price'],
                         date_of_firstrev=item['date_of_firstrev'])
          for item in top_last_3_months]


@app.get('/lagging', response_model=List[ProductDetails])
def lagging_products():
  lag_last_3_months = sorted([item for item in fashion_data if
                              datetime.strptime(item['date_of_firstrev'],
                                                '%Y-%m-%d') + three_months >= datetime.now()],
                             key=lambda d: d['avg_rating'])[:15]
  return [ProductDetails(image=f"{STATIC}/{item['image_id']}.png",
                         pattern=item['pttrn_type'],
                         avg_rating=item['avg_rating'],
                         price=item['price'],
                         date_of_firstrev=item['date_of_firstrev'])
          for item in lag_last_3_months]
