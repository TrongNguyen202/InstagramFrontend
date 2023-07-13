export const isPostLikeByUser=(post, user)=>{
    for(let item of post.likedByUsers){
       if(item.id==user.id){
        return true;
       }
    }
    return false;
}
export const isCommentLikedByUser=(comment, user)=>{
    for(let item of comment.likedByusers){
       if(item.id==user.id){
        return true;
       }
    }
    return false;
}
export const isSavePostByUser=(user, postId)=>{
    for(let item of user.savedPost){
       if(item.id==postId){
        return true;
       }
    }
    return false;
}
export const isFollowing=(reqUser, user2)=>{
    if(reqUser&&user2){
        for(let item of user2.follower){
            if(reqUser.id == item.id) return true;
        }
        return false;
    }
}
// export const timeDifference=(timeStamp)=>{
//     const date = new Date(timeStamp)
//     const diff = Date.now()- date.getTime();
//     const seconds= Math.floor(diff/1000);
//     const minutes= Math.floor(minutes/60);
//     const hours= Math.floor(seconds/60);
//     const days= Math.floor(hours/24);
//     const weeks= Math.floor(days/7);
//     if(weeks>0){
//         return weeks+" week"+(week==1?"":"s")+" ago"
//     }
//     if(days>0){
//         return days+" week"+(days==1?"":"s")+" ago"
//     }
//     if(hours>0){
//         return hours+" week"+(hours==1?"":"s")+" ago"
//     }
//     if(minutes>0){
//         return minutes+" week"+(minutes==1?"":"s")+" ago"
//     }
//     if(seconds>0){
//         return seconds+" week"+(seconds==1?"":"s")+" ago"
//     }

// }