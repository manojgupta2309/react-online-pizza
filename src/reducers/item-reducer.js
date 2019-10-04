
const cartItems=[
]

const Items=[]
   
export const ItemsReducer = (state = Items,action)=>{
    switch(action.type){ 
    case "Get_Items" : return action.payload 
    default : return state;    
    }
}

export const cartItemsReducer = (state = cartItems , action)=>{
    //console.log("action",action)
    switch(action.type){ 
       case "Add_To_Cart" :  state = [...state,action.payload]
                                //console.log("add to cart",action.payload)
                                return state;
         case "Delete_Cart_Items": 
                         state = state.filter((item)=>item.item_id!==action.payload)
                        return state;
        case "Delete_Qty_Item" : let statObj= state.filter((item)=>item.item_id==action.payload)[0]
                                 //console.log("stateObj",statObj) 
                                     statObj.item_qty= parseInt(statObj.item_qty)-1;
                                 ////console.log("stateObj",statObj[0])    
                                 let idx= state.findIndex((e)=>e.item_id===action.payload)
                                     return [...state.slice(0,idx),statObj,...state.slice(idx+1)]  
        case "Add_Qty_Item": let statObj2= state.filter((item)=>item.item_id==action.payload)[0]
                            //console.log("stateObj",statObj2)  
                            statObj2.item_qty= parseInt(statObj2.item_qty)+1;
                            ////console.log("stateObj",statObj2[0]) 
                             let dx= state.findIndex((e)=>e.item_id===action.payload)
                            return [...state.slice(0,dx),statObj2,...state.slice(dx+1)]                                      
                                                   
       default : return state;         
    }
}


