export const add  = (item)=>{
    return{
        type:"Add_to_cart",
        payload:item
    }
}


export const remove  = (id)=>{
    return{
        type:"Remove_cart",
        payload:id
    }
}

export const decrement  = (item)=>{
    return{
        type:"desc1",
        payload:item
    }
}