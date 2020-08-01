import cv2
from typing import List
from sklearn.cluster import KMeans
import numpy as np
import warnings

import color_filter

def getPalette(file: str, k: int = 6, threshold: float = 0.5) -> List[List[int]]:
    file = cv2.imread(file, cv2.IMREAD_UNCHANGED)
    file = cv2.cvtColor(file, cv2.COLOR_BGRA2RGBA)
    colors = file.reshape((file.shape[0] * file.shape[1]), 4)
    file = None
    
    colors = color_filter.transparent_filter(colors, threshold)[:,:3]
    if colors.size <= k:
        warnings.warn(f"{file} does not have enough opaque pixels. Try running with lesser alpha threshold.")
        return colors.tolist()

    clusters = KMeans(n_clusters=k, random_state=0).fit(colors[:,:3]).cluster_centers_
    return np.round(clusters).tolist()


if __name__ == "__main__":
    from pprint import pprint
    import sys
    file = sys.argv[1]
    k = int(sys.argv[2])
    pprint(getPalette(file, k))

