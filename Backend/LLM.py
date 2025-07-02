
from groq import Groq
import os
from dotenv import load_dotenv
from Calorie import get_food_info
load_dotenv()
import re
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
import pandas as pd
df = pd.read_csv("output.csv")
df = df[['food_name','energy_kcal','carb_g','protein_g'	,'fat_g']]

def get_food_info2(food_name):
    matches = df[df['food_name'].str.contains(food_name, case=False, na=False)]
    if not matches.empty:
        return (
    f"Calories: {matches['energy_kcal'].values[0]:.2f} "
    f"Carbs: {matches['carb_g'].values[0]:.2f} "
    f"Protein: {matches['protein_g'].values[0]:.2f} "
    f"Fat: {matches['fat_g'].values[0]:.2f} per 100g"
)
    else:
        return None

def generate_response(prompt):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a helpful recipe assistant.\n"
                    "You will be given a user query and must generate a recipe.\n\n"
                    "Your response must start with this exact format:\n"
                    "Recipe Title: <name of the recipe>\n\n"
                    "- Only write the recipe title, without any adjectives or extra words.\n"
                    "- After the title, write the ingredients and instructions in plain text.\n"
                    
                    
                )
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        model="llama3-8b-8192",
        temperature=0.5,
        max_tokens=1000,
    )
    return chat_completion.choices[0].message.content


def extract_recipe_title(response):
    match = re.search(r"(?:Recipe Title|Title)[:\-]\s*(.+)", response, re.IGNORECASE)
    if(match):
        return match.group(1).strip()
    else:
        return response[0]

def summarize_recipe(prompt):
    response = generate_response(prompt)
    recipe_title = extract_recipe_title(response)
    if not recipe_title:
        print(" Could not extract recipe title.")
        return response
    food_info = get_food_info2(recipe_title)

    if food_info is None:
        food_info = get_food_info(recipe_title)
    
    if food_info is None:
        print(" Could not get food info.")
        
   
    #     return response
    chat_completion = client.chat.completions.create(
        messages=[
            {
                                    "role": "system",
                        "content": """
                        You are a helpful recipe assistant.

                        You will be given a full recipe response and its nutritional information. Combine both into a single, user-friendly final output.

                        🔧 Guidelines:
                        - Start with the recipe title.
                        - Follow with a neatly formatted Ingredients section.
                        - Then give detailed step-by-step instructions.
                        - After the instructions, show estimated calorie info.
                        - Use clear section headers.
                        - Add emojis where appropriate for readability.

                        🎯 Required Sections:
                        - Recipe Title, emojis-🍲,📝 
                        - Ingredients, emojis-🥬
                        - Step-by-step Instructions, emojis-👨‍🍳
                        - Estimated Calorie and nutrients info , emojis-🍎
                        Use other emojis where appropriate for readability.

                        💡 Finish with a friendly message like “Enjoy your meal and don't forget to come back here again!”
                        """

            },
            {
                "role":"user",
                "content":f"Recipe response: {response}\nFood info: {food_info}"
            }
        ],
        model="llama3-8b-8192",
        temperature = 0.5,
        max_tokens = 1000,
    )
    return chat_completion.choices[0].message.content

