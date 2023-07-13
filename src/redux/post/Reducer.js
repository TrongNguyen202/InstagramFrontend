import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, GET_USER_POST2, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType"

const initialValue={
    createPost:null,
    userPost:[],
    deletePost:null,
    likePost:null,
    unlikePost:null,
    savePost:null,
    unsavePost:null,
    singlePost:null,
    userPost2:[],
}
export const PostReducer=(store= initialValue, {type,payload})=>{
    if(type===CREATE_NEW_POST){
       return {...store, createPost:payload}
    }
    else if(type===GET_USER_POST){
        return {...store,userPost:payload}
    }
    else if(type===DELETE_POST){
        return {...store,deletePost:payload}
    }
    else if(type===LIKE_POST){
        return {...store,likePost:payload}
    }

    else if(type===UNLIKE_POST){
        return {...store,unlikePost:payload}
    }
    else if(type===SAVE_POST){
        return {...store,savePost:payload}
    }
    else if(type===UNSAVE_POST){
        return {...store,unsavePost:payload}
    }
    else if(type===GET_SINGLE_POST){
        return {...store,singlePost:payload}
    }
    else if(type===GET_USER_POST2){
        return {...store,userPost2:payload}
    }
    return store;
}