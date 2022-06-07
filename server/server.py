from flask import Flask,request

try:
    from PIL import Image
except ImportError:
    import Image
import urllib.request

import pytesseract
from textblob import TextBlob
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

app = Flask(__name__)

#Text recognition Function
def recText(url):
    # urllib.request.urlretrieve(url, "filename.jpg")
    text = pytesseract.image_to_string(Image.open(url))
    return text

# count=0
# keywords=["AUTOMATED", "EVALUATION","MAYA ANGELOU"]

# uploads=["capto.png" , "filename.png" , "filename.jpg"]


#  Members API Route
@app.route("/recognised", methods=['GET','POST'])
def members():
    data = request.get_json()

    upload=data['answer']
    keys = data['keywords']

    recogText=' '
    for i in range(len(upload)):
        info = recText(upload[i])
        recogText += info 

    # total=len(recogText.split())
    count = 0
    for k in keys.split(','):
        if(recogText.count(k)!=0):
        # mark+=1/len(keywords)
            count+=1
    mark=round(count/len(keys.split(',')),1)
    marks = mark * 5

    return {
        "recognized_text": recogText.replace('\n',''),
        "upload" : upload,
        "keys" : keys.split(','),
        "marks" : marks
    }
    

if __name__ == "__main__":
    app.run(debug=True)