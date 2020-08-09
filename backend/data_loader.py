import json
import joblib
import os

from settings import DATASETS, MODELS

with open(os.path.join(DATASETS, "style_trends.json")) as fp:
  style_trends = json.load(fp)

color_model1 = joblib.load(os.path.join(MODELS, "color1_model.sav"))
color_model2 = [joblib.load(os.path.join(MODELS, "color20_model.sav")),
                joblib.load(os.path.join(MODELS, "color21_model.sav")),
                joblib.load(os.path.join(MODELS, "color22_model.sav")),
                joblib.load(os.path.join(MODELS, "color23_model.sav")),
                joblib.load(os.path.join(MODELS, "color24_model.sav")),
                joblib.load(os.path.join(MODELS, "color25_model.sav"))]

with open(os.path.join(DATASETS, "ColorCluster.json")) as fp:
  fashion_data = json.load(fp)
