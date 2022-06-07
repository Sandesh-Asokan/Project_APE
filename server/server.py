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
    # data = request.get_json()

    # uploads=data['ans']

    return {
        "recognized_text": [recogText.replace('\n', ' ')],
        # "uploads" : uploads
    }
    # value = request.args.get('key')
    

if __name__ == "__main__":
    app.run(debug=True)

# @app.route("/add", methods=["POST"], strict_slashes=False)
# def add_articles():
    # title = request.json['title']
    # body = request.json['body']

    # article = Articles(
    #     title=title,
    #     body=body
    #     )

    # db.session.add(article)
    # db.session.commit()

    # return article_schema.jsonify(article)


    # total=len(info.split())
# print(total)
# print("------------------------------------------")
# print("SCANNED ANSWER")
# print(info)
# print("------------------------------------------")
# sentence=TextBlob(info)
# spellCorrected=sentence.correct()
# print("Spell Corrected Sentence:-")
# print(spellCorrected.lower())
# print("------------------------------------------")
# print("Grammar Corrected Sentence is:-")
# #The below two Commented caused error
# grammarCorrected = GingerIt().parse(spellCorrected)
# print(grammarCorrected['result'])
# for k in keywords:
#     if(info.count(k)!=0):
#         # mark+=1/len(keywords)
#         count+=1
# mark=round(count/len(keywords),1)
# file = open("result.txt","w")
# file.write(info)
# file.close()
# print("------------------------------------------")
# print("Keypoints expected:")
# # for k in keywords:
# #    print(k)
# print(keywords)
# print("Evaluation Successful, your mark is ", end=" ")
# print(mark*total, end="/")
# print(total)



# #Check if the Words are recognised Correctly
# #Check if the sentence has some meaning
# #Correct the sentence for wrong spellings
# #Check for Grammatical Correction
# #Check if the sentence is similar to the Answer Key sentence
# #Provide marks# total=len(info.split())
# print(total)
# print("------------------------------------------")
# print("SCANNED ANSWER")
# print(info)
# print("------------------------------------------")
# sentence=TextBlob(info)
# spellCorrected=sentence.correct()
# print("Spell Corrected Sentence:-")
# print(spellCorrected.lower())
# print("------------------------------------------")
# print("Grammar Corrected Sentence is:-")
# #The below two Commented caused error
# grammarCorrected = GingerIt().parse(spellCorrected)
# print(grammarCorrected['result'])
# for k in keywords:
#     if(info.count(k)!=0):
#         # mark+=1/len(keywords)
#         count+=1
# mark=round(count/len(keywords),1)
# file = open("result.txt","w")
# file.write(info)
# file.close()
# print("------------------------------------------")
# print("Keypoints expected:")
# # for k in keywords:
# #    print(k)
# print(keywords)
# print("Evaluation Successful, your mark is ", end=" ")
# print(mark*total, end="/")
# print(total)



# #Check if the Words are recognised Correctly
# #Check if the sentence has some meaning
# #Correct the sentence for wrong spellings
# #Check for Grammatical Correction
# #Check if the sentence is similar to the Answer Key sentence
# #Provide marks