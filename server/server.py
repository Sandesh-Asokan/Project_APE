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

uploads=["capto.png" , "filename.png" , "filename.jpg"]
recogText=' '
for i in range(len(uploads)):
    info = recText(uploads[i])
    recogText += info 

#  Members API Route
@app.route("/recognised", methods=['GET','POST'])
def members():
    data = request.get_json()

    upload=data['ans']
    keys = data['keys']

    return {
        "recognized_text": [recogText.replace('\n', ' ')],
        "upload" : upload,
        "keys" : keys
    }
    

if __name__ == "__main__":
    app.run(debug=True)