#cython: language_level=3, boundscheck=False, wraparound=False, initializedcheck=False, cdivision=True, infer_types=True

cimport numpy as cnp
cimport cython as ccy

import numpy as np
import cython as cy

# colors -> List[List[unsigned char]]
cdef size_t _filtered_size(unsigned char[:,:] colors, size_t size, double threshold):
    cdef size_t j = 0
    cdef double alpha = 0.0

    for i in range(size):
        alpha = colors[i][3] / 255.0
        if alpha >= threshold:
            j += 1
    return j

# colors -> List[List[unsigned char]]
cdef void _transparent_filter(unsigned char[:,:] colors, unsigned char[:,:] result, size_t size, double threshold):
    cdef size_t j = 0
    cdef double alpha = 0.0

    for i in range(size):
        alpha = colors[i][3] / 255.0
        if alpha >= threshold:
            result[j] = colors[i].copy()
            j += 1

cpdef transparent_filter(colors, threshold):
    cdef size_t new_size = _filtered_size(colors, colors.shape[0], threshold)
    result = np.empty((new_size, 4), dtype=colors.dtype)
    _transparent_filter(colors, result, colors.shape[0], threshold)
    return result

