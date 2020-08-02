from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from typing import List

from data_loader import style_trends, color_model1, color_model2, fashion_data
from data_models import Styles, StyleList, StyleTrend, Trend, Color, Product
from functions import get_top_n_products
from settings import APP_NAME, STATIC

app = FastAPI()
app.mount(STATIC, StaticFiles(directory="static"), name="static")

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
  
  top_k = get_top_n_products(cluster1, cluster2, 10, fashion_data)
  return top_k
