import os
from PIL import Image

######################################################################################

# ez a script leveszi a terhet a weboldalról a képek sorbarendezéséhez a galériában

# - átnevezi a képeket a hozzájuk rendelt index alapján, így a képeket
#   csak be kell töltenie a weboldalnak, és nem kell sorrendbe rendeznie

#   (a handleImages func az EquipemtPage -en belul ugyan ezt eredményezi) 
#   (viszont ezt a scriptet elég csak egyzser lefuttatni ha új kép kerül a galériába )

######################################################################################



# megkeresi az adott könyvtárban a képeket
imgs = [i for i in os.listdir("./") if i.split(".")[-1] in ["jpg", "png"]]

## ujraalitja a képek neveit --csak tesztéshez

# for i, path in enumerate(imgs):
#     os.rename(path, f"asdasd_{i}.jpg")


# atnavazi az osszes kepet hogy mindegyiknek legyen egy egyedi elhagyhato erteke
for i, path in enumerate(imgs):
    os.rename(path, f"t_{i}.jpg")
    imgs[i] = f"t_{i}.jpg"

# a galériában a képek width -je
IMG_WIDTH = 300

# kulcs a képek szortirozásához
def key(x):
    w,h = Image.open(x).size
    ratio = IMG_WIDTH/w
    return (h*ratio)


simages = sorted(imgs, key=key) # a képeket a magasságuk alapján hejezi sorrendbe

# a képek két részre végása, ez azért kell hogy a nagyobb és kissebb magaságú képek felváltva legyenek listázva a galériában 
l = len(simages)//2
mn, mx = sorted((simages[:l], simages[l:]), key=lambda x: len(x))
l_img = []
for i, _ in enumerate(mx):
    l_img.append(mx[i])
    if i < len(mn):
        l_img.append(mn[-i])



# átnevezi a képeket a galéria indexe alapján 
imgs = [i for i in os.listdir("./") if i.split(".")[-1] in ["jpg", "png"]]
for i, path in enumerate(l_img):
    os.rename(path, f"{i}.jpg")
