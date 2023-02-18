const PRO_STATE = {
    products:[],
    filtered: []

}


export const productHandler = (state = PRO_STATE, action) => {


    switch (action.type) {
        case "STOR": {
            const stor = state.products
            if ((stor.length <= 0)&&(typeof(action.payload==="object"))) {   
                         
                return {
                    ...state,
                    products: [...state.products, ...action.payload],
                    filtered: [...state.filtered, ...action.payload]
                }
            }
        }
        case "STATUS":{
            var filArr =[]
            if(typeof(action.payload)==="string"){
                state.products.forEach((ele)=>{
                    if(action.payload=== ele.status){
                        filArr.push(ele)
                    }
                })
                return{
                    ...state,
                    filtered:[...filArr]
                }
            }
        }
        case "LUNCH":{
            var filArr =[]
            if(typeof(action.payload)==="string"){
                state.products.forEach((ele)=>{
                    if(action.payload=== ele.original_launch){
                        filArr.push(ele)
                    }
                })
                return{
                    ...state,
                    filtered:[...filArr]
                }
            }
        }
        case "TYPE":{
            var filArr =[]
            if(typeof(action.payload)==="string"){
                state.products.forEach((ele)=>{
                    if(action.payload=== ele.type){
                        filArr.push(ele)
                    }
                })
                return{
                    ...state,
                    filtered:[...filArr]
                }
            }
        }
        default:
            return state;
    }
}
