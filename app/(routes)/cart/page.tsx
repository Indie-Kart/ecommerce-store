"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import Summary from "./components/summary";
import CartItem from "./components/cart-item";
import { Product } from "@/types";

interface QuantityDetail {
  id: string;
  quantity: number;
  price: number; // Ensure price is of type number
}

const CartPage = () => {
  const cartItems = useCart((state) => state.items);
  const initialQuantities: QuantityDetail[] = cartItems.map((item) => ({
    id: item.id,
    quantity: 1,
    price: Number(item.price), // Convert 'item.price' to number
  }));

  const [quantity, setQuantity] = useState<QuantityDetail[]>(initialQuantities);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddQuantity = (data: Product) => {
    let updatedQuantity = [...quantity];
    const alreadyInCart = updatedQuantity.find((item) => item.id === data.id);

    if (alreadyInCart) {
      const updatedItem = {
        ...alreadyInCart,
        quantity: alreadyInCart.quantity + 1,
        price: Number(data.price) * (alreadyInCart.quantity + 1),
      };
      updatedQuantity = updatedQuantity.map((item) =>
        item.id === data.id ? updatedItem : item
      );
    } else {
      updatedQuantity.push({
        id: data.id,
        quantity: 1,
        price: Number(data.price),
      });
    }

    setQuantity(updatedQuantity);
  };

  const handleDecQuantity = (data: Product) => {
    let updatedQuantity = [...quantity];
    const alreadyInCart = updatedQuantity.find((item) => item.id === data.id);

    if (alreadyInCart) {
      const updatedItem = {
        ...alreadyInCart,
        quantity: alreadyInCart.quantity === 0 ? 0 : alreadyInCart.quantity - 1,
        price:
          Number(data.price) *
          (alreadyInCart.quantity === 0 ? 0 : alreadyInCart.quantity - 1),
      };
      updatedQuantity = updatedQuantity.map((item) =>
        item.id === data.id ? updatedItem : item
      );
    } else {
      updatedQuantity.push({
        id: data.id,
        quantity: 0,
        price: 0,
      });
    }

    setQuantity(updatedQuantity);
  };

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
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    data={item}
                    quantity={quantity}
                    handleAdd={handleAddQuantity}
                    handleDec={handleDecQuantity}
                  />
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
