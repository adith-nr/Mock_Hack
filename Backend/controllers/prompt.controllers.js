


export const promoptController = async (req,res)=>{
    const {controlPanelInputs,cartItems} = req.body;
    console.log(controlPanelInputs,cartItems);

    const { dishType, cuisine,mealTime,maxCookingTime,servings,additionalInstructions} = controlPanelInputs;
    
    const ingredients=cartItems.map((item)=>(
        `${item.name} (${item.quantity})`
    )).join("\n");


    const user = req.user;
    const allergiesStr = user.allergies?.length ? user.allergies.join(",") : null
    
    const cookingLevel = user.cookingLevel;
    const diet = user.diet?.length ? user.diet.join(",") : null;


    const prompt = `
            You are a smart recipe generator.

            Generate a detailed and well-structured ${dishType.toLowerCase()} recipe for ${mealTime}, using ${cuisine} cuisine. It should serve ${servings} people and take no more than ${maxCookingTime} minutes to prepare.

            User preferences:
            ${allergiesStr ? `Allergies: ${allergiesStr}` : ''}
            ${cookingLevel ? `Cooking level: ${cookingLevel}` : ''}
            ${diet ? `Diet: ${diet}` : ''}

            Available ingredients and their quantities:
            ${ingredients}

            ${additionalInstructions ? `Additional user instructions: ${additionalInstructions}` : ''}

            Format the output as:
            1. Recipe Title
            2. Ingredients (with quantities)
            3. Step-by-step Instructions
           
            `;

    console.log(prompt);
    
    try {
        const data = {"prompt":prompt}
        const resp = await fetch("http://localhost:8000/chat",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
            
        )
        const ans = await resp.json()
        console.log(ans);
        
        res.status(200).json({message:"Prompt received",data:ans.response})
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}