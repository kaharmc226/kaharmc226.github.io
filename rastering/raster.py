import numpy as np
import rasterio

with rasterio.open('DEMNAS_DSM_SULAWESI_KENDARI_2024_TILE.lyr') as src:
    # Create memory map
    elevation = src.read(1, masked=True)  # masked=True handles NoData values
    
    # Sample every 10th row/column
    sampled_data = elevation[::10, ::10]
    
    # Or extract specific area of interest
    window = rasterio.windows.Window(1000, 1000, 500, 500)  # col_off, row_off, width, height
    area_of_interest = src.read(1, window=window)