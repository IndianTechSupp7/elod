import os



imgs = [i for i in os.listdir("./") if i.split(".")[-1] in ["jpg", "png"]]
for i, path in enumerate(imgs):
    os.rename(path, f"t_{i}.jpg")
    imgs[i] = f"t_{i}.jpg"

#imgs = [i for i in os.listdir("./") if i.split(".")[-1] in ["jpg", "png"]]
for i, path in enumerate(imgs):
    os.rename(path, f"{i}.jpg")
