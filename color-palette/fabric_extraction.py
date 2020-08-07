import tensorflow as tf
import cv2
import numpy as np
import os
from tqdm import tqdm

from tensorflow.compat.v1 import ConfigProto
from tensorflow.compat.v1 import InteractiveSession
config = ConfigProto()
config.gpu_options.allow_growth = True
session = InteractiveSession(config=config)

model = tf.keras.models.load_model('topwears.h5')

def generate(filename, output_dir='/'):
    file = cv2.imread(filename)
    file = tf.image.resize_with_pad(file, 512, 512)
    rgb = file.numpy()
    file = np.expand_dims(file, axis=0) / 255.
    seq = model.predict(file)
    seq = seq[3][0,:,:,0]
    seq = np.expand_dims(seq, axis=-1)
    c1x = rgb*seq
    c2x = rgb*(1-seq)
    cfx = c1x + c2x
    rgbs = np.concatenate((cfx, seq*255.), axis=-1)
    cv2.imwrite(os.path.join(output_dir, os.path.basename(filename)), rgbs)

if __name__ == "__main__":
    files = os.listdir("pics/")
    OUTPUT = "output"
    for i in tqdm(range(len(files)), desc="Extracting fashion"):
        generate(os.path.join('pics', files[i]), OUTPUT)

