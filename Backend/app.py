from fastapi import FastAPI
from pydantic import BaseModel
from LLM import summarize_recipe
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    prompt:str



@app.post("/chat")
def chat(request:ChatRequest):
    response = summarize_recipe(request.prompt)
    return {"response":response}
