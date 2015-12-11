from utils import *
import csv

plants = {}

with open('nuke_plants.csv', 'rb') as f:
    reader = csv.reader(f)
    for row in reader:
        loc = get_lat_lng(row[3])
        plants[row[0]] = [loc['lat'], loc['lng'], row[5]]

print plants

with open('nuke_clean.csv', 'wb') as out:
    writer = csv.writer(out)
    for i in plants.keys():
        writer.writerow([i] + plants[i])

