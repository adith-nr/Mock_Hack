

export const promoptController = async (req,res)=>{
    const {prompt} = req.body;
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