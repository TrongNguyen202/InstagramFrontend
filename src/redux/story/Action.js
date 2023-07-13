


const BASE_API="http://localhost:5454/api"
export const createStory=(data)=> async (dispatch)=>{
    try {
        const res = await fetch(`${BASE_API}/comments/create/${data.postId}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
           body: JSON.stringify(data.data)
        
        })
        const comment = await res.json();
        console.log("new comment", comment)
        dispatch({type:CREATE_COMMENT, payload:comment})  
    } catch (error) {
        console.log("error"+error)
    }
}