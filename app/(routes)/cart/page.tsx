"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import Summary from "./components/summary";
import CartItem from "./components/cart-item";

const CartPage = () => {
  const items = useCart((state) => state.items);
  const item=items.map(item=> {
    return {id:item.id,quantity:1,price:item.price}
  })
  const [quantity,setQuantity]=useState(item)
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  function handleAddQuantity(data){ 
    let AlreadyInTheCart=quantity.find((item)=> item.id===data.id)
    if(AlreadyInTheCart){ 
      let details={id:AlreadyInTheCart.id,quantity:AlreadyInTheCart.quantity+1,price:Number(data.price)*(AlreadyInTheCart.quantity+1)}
      let filtering=quantity.filter(item=>item.id!==data.id)
      filtering.push(details)
      setQuantity(filtering);
      return
    }   
         let details={id:data.id,quantity:1,price:data.price}
         let filter=quantity
         filter.push(details)
         setQuantity(filter); 
  }
  function handleDecQuantity(data){
    let AlreadyInTheCart=quantity.find((item)=> item.id===data.id)
    if(AlreadyInTheCart){
      let details={id:AlreadyInTheCart.id,quantity:AlreadyInTheCart.quantity===0?0:AlreadyInTheCart.quantity-1,price:Number(data.price)*(AlreadyInTheCart.quantity===0?0:AlreadyInTheCart.quantity-1)}
      let filtering=quantity.filter(item=>item.id!==data.id)
      filtering.push(details)
      setQuantity(filtering);
      return
    }   
    let details={id:data.id,quantity:0,price:0}
      let filter=quantity
      filter.push(details)
      setQuantity(filter);    
  }
  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white pt-10">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} quantity={quantity} handleAdd={handleAddQuantity} handleDec={handleDecQuantity}  />
                ))}
              </ul>
            </div>
            <Summary quantity={quantity} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
