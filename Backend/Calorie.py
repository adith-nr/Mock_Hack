import os
import requests
from dotenv import load_dotenv

load_dotenv()

def get_food_info(food_name):
    # Step 1: Get OAuth token
    token_url = "https://oauth.fatsecret.com/connect/token"
    token_data = {
        "grant_type": "client_credentials",
        "scope": "basic",
        "client_id": os.getenv("NUTRI_CLIENTID"),
        "client_secret": os.getenv("NUTRI_CLIENTSECRET")
    }

    token_res = requests.post(token_url, data=token_data)
    token_res.raise_for_status()
    access_token = token_res.json()["access_token"]

    # Step 2: Search for the food item
    search_url = "https://platform.fatsecret.com/rest/server.api"
    params = {
        "method": "foods.search",
        "search_expression": food_name,
        "format": "json"
    }
    headers = {
        "Authorization": f"Bearer {access_token}"
    }

    food_res = requests.get(search_url, params=params, headers=headers)
    food_res.raise_for_status()
    food_data = food_res.json()

    first_match = food_data.get("foods", {}).get("food", [None])[0]

    if first_match:
        if first_match["food_name"] == food_name.lower():
            return first_match["food_description"]
        else:
            return None
    
    return None
        


