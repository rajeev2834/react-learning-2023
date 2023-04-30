import React,{useState} from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import {produce} from "immer";


function App(){
const [show, setShow] = useState(false);

const [bug, setBugs] = useState([
  {"id":1, "name":"bug1", "fixed": false},
  {"id":2, "name":"bug2", "fixed": false},
]);

const [cartItems, setCartItems] = useState([
  "item1", "item2", "item3"
]);

const [pizza, setPizza] = useState({
  "name" : "pizza1",
  "toppings" : ["topping1", "topping2"]
})

const [product, setProduct] = useState({
  "discount" : 0.5,
  "items" : [
    {"id":1, "name":"item1", "price":10},
    {"id":2, "name":"item2", "price":20}
  ]
})
  const handleBtnClick = () => {
    //change player name
   
    /*setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if(bug){
        bug.fixed = !bug.fixed;
      }
    }))
    //setShow(!show);

   setPizza(produce(draft => {
     draft.toppings.push("topping3");
   }))*/

   setProduct(
     produce(draft => {
       const item = draft.items.find(item => item.id === 1);
       if(item){
         item.price += 10;
       }
     })
   );

  };

  const handleCartItem = () => {
    //remove cart item
    setCartItems(produce(draft => {
      draft.pop();
    }));
  }

  return(
    <>
    <div> 
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} removeCartItem={handleCartItem}/>
      {product.items.map(item => <li key={item.id}>{item.name}{item.price}</li>)}
      {bug.map(bug => <li key={bug.id}>{bug.name} {bug.fixed ? "Fixed" : "New"}</li>)}
      {show && <Alert onClose={handleBtnClick}>This is an alert</Alert>}
      <Button onClick={handleBtnClick} color="light">Click Me</Button>
      <Like onClick={() => console.log('I am Clicked.')}/>
    </div>
    <div>
      <ExpandableText maxChars={400}>
      Hello World !!!
      </ExpandableText>
    </div>
    </>
  );
}

export default App;