import { FOLLOW_USER, GET_USER_BY_USERNAME, GET_USER_BY_USER_IDS, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./ActionType";


const BASE_API="http://localhost:5454/api/users";

export const getUserProfileAction=(token)=> async(dispatch)=>{
    try {
        const res = await fetch("http://localhost:5454/api/users/req",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+token
        
            }
           
        
        })
        const reqUser = await res.json();
        
        dispatch({type:REQ_USER, payload:reqUser})  
    } catch (error) {
        console.log("error"+error)
    }

}
export const findUserByUsernameAction=(data)=>async(dispatch)=>{

    try {
        const res = await fetch(`${BASE_API}/username/${data.username}`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
            body: JSON.stringify(data.data)
           
        
        })
        const user = await res.json();
        console.log("find by username", user)
        dispatch({type:GET_USER_BY_USERNAME, payload:user})  
    } catch (error) {
        console.log("error"+error)
    }
}
export const findUserByUserIdsAction=(data)=>async(dispatch)=>{

    try {
        const res = await fetch(`${BASE_API}/m/${data.userIds}`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
            body: JSON.stringify(data.data)
           
        
        })
        const users = await res.json();
        console.log("find by userids", users)
        dispatch({type:GET_USER_BY_USER_IDS, payload:users})  
    } catch (error) {
        console.log("error"+error)
    }
}
export const FollowUserAction=(data)=>async(dispatch)=>{

    try {
        const res = await fetch(`${BASE_API}/m/follow/${data.userId}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
            body: JSON.stringify(data.data)
           
        
        })
        const user = await res.json();
        console.log("follow user", user)
        dispatch({type:FOLLOW_USER, payload:user})  
    } catch (error) {
        console.log("error"+error)
    }
}
export const UnFollowUserAction=(data)=>async(dispatch)=>{

    try {
        const res = await fetch(`${BASE_API}/m/unfollow/${data.userId}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
            body: JSON.stringify(data.data)
           
        
        })
        const user = await res.json();
        console.log("unfollow user", user)
        dispatch({type:UNFOLLOW_USER, payload:user})  
    } catch (error) {
        console.log("error"+error)
    }
}
export const SearchUserAction=(data)=>async(dispatch)=>{

    try {
        const res = await fetch(`${BASE_API}/m/seach?q=${data.query}`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
            body: JSON.stringify(data.data)
        
        })
        const user = await res.json();
        console.log("search user", user)
        dispatch({type:SEARCH_USER, payload:user})  
    } catch (error) {
        console.log("error"+error)
    }
}
export const editUserAction=(data)=>async(dispatch)=>{

    try {
        const res = await fetch(`${BASE_API}/account/edit`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+data.token
        
            },
           body: JSON.stringify(data.data)
        
        })
        const user = await res.json();
        console.log("search user", user)
        dispatch({type:UPDATE_USER, payload:user})  
    } catch (error) {
        console.log("error"+error)
    }
}