from fastapi import FastAPI, Query
from transformers import pipeline
import torch 
app = FastAPI()



pipe = pipeline("text-classification", model="lewisnjue/spam-detection")

@app.get("/")
async def process_input(text: str = Query(...)):
    
    results = pipe(text)
    results = results[0]
    if (results['label']) == 'LABEL_1':
        return {"messange":"spam"}
    
    return {"messange":"not spam"}
