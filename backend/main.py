from fastapi import FastAPI

from data_loader import style_trends
from data_models import Styles, StyleList, StyleTrend, Trend

app = FastAPI()

@app.get('/')
def index():
  return {'message': 'welcome to fashion-ai api!'}

@app.get('/styles', response_model=StyleList)
def get_style_types():
  return StyleList(styles=list(style_trends.keys()))

@app.get('/styles/{style_type}', response_model=StyleTrend)
def get_style_trend(style_type: Styles):
  return StyleTrend(style=style_type.value,
                    trend=Trend(history=style_trends[style_type.value]['history'],
                                forecast=style_trends[style_type.value]['forecast']))
