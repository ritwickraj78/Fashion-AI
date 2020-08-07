# Instructions
## Generating transparent color filter
```bash
python color_filter_setup.py build_ext --inplace
```

## For using it in python code
```python
import numpy as np
import color_filter
colors = np.array([[144,25,67,130], [127,210,244,255], [248,188,31,69]], dtype=np.uint8)
filtered_colors = color_filter.transparent_filter(colors, threshold=0.5)
```

