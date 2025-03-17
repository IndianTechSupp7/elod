# ez a script csak egy kis segítség hogy a galérába a képeket egyszerűbb legyen beimportálni
from encodings import ptcp154
import enum
import os

imgs = [i for i in os.listdir("./") if i.split(".")[-1] in ["jpg", "png"]]
for i, path in enumerate(imgs):
    os.rename(path, f"t_{i}.jpg")
    imgs[i] = f"t_{i}.jpg"

#imgs = [i for i in os.listdir("./") if i.split(".")[-1] in ["jpg", "png"]]
for i, path in enumerate(imgs):
    os.rename(path, f"{i}.jpg")
