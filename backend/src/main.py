from fastapi import FastAPI, Query
from transformers import pipeline
import torch 
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()



pipe = pipeline("text-classification", model="lewisnjue/spam-detection")

# Allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to specific origins if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def process_input(text: str = Query(...)):
    
    results = pipe(text)
    results = results[0]
    if (results['label']) == 'LABEL_1':
        return {"messange":"spam"}
    
    return {"messange":"not spam"}
