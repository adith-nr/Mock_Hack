
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))



def generate_response(prompt):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role":"system",
                "content":"You are a helpful recipe assistant. You will be given a recipe and you will need to generate a response to the user's question about the recipe."
            },
            {
                "role":"user",
                "content":prompt
            }
        ],
        model="llama3-8b-8192",
        temperature = 0.5,
        max_tokens = 1000,
    )
    return chat_completion.choices[0].message.content

print(generate_response("What is the recipe for a pizza?"))