//Create a function called 'Reducer' that takes a current tate and and action and retrns the next state
//In this case the current state is the the array cart[]
//The function checks the  'type' property of the 'action' object and executes a different block of code based on the value of 'type'.
const Reducer = (cart=[], action) => {
    //if the first event rerurns 'ADD'
    if (action.type === 'ADD'){
        //the function filter the cart array until find the product.id
        let tempcraft=cart.filter((product)=>product.id===action.payload.id)
        //if the function doesn't find the product indide the cart array, adds the product in the 'payload' property to the 'cart'. 
        if(tempcraft < 1){
            return [...cart, action.payload]
        } else{
            //If the function find the element she just return the same array
            return cart;
        }
    }//if the event rerurns 'REMOVE'
    if (action.type === 'REMOVE'){
        //filters the cart array and delete the objects whith the same id of the product in the 'payload'. Finally update de array
        return cart.filter((product) => product.id !== action.payload.id);
    }//if the event rerurns 'INCREASE'
    if(action.type ==='INCREASE'){
        //The function maps the array and create a new one except that the 'quantity' property of the product with an 'id'
        //that matches the 'id' in the 'payload' property of the action object is increased by 1.
        let tempcart = cart.map((product) => {
            if(product.id === action.payload.id){
                return {...product, quantity: product.quantity+1};
            }   return product
        })
        return tempcart;
    }//The same as 'INCREASE' but in this case the quantity reduces by 1
    if(action.type ==='DECREASE'){
        let tempcart = cart.map((product) => {
            if(product.id === action.payload.id){
                return {...product, quantity: product.quantity-1};
            }   return product
        })
        return tempcart;
    }
    return cart;
}
//Export Reducer by default
export default Reducer;