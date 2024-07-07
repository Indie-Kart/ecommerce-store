import React from "react";
import { Product } from "@/types";
import {QuantityDetail} from "./cart-item-info"; // Adjusted import
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { X } from "lucide-react";
import Image from "next/image";
interface CartItemProps {
  data: Product;
  quantity: QuantityDetail[]; // This should match the interface definition
  handleAdd: (data: Product) => void;
  handleDec: (data: Product) => void;
  remove: (data: Product) => void;
}
const CartItem: React.FC<CartItemProps> = ({
  data,
  quantity,
  handleAdd,
  handleDec,
  remove,
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
    remove(data)
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
          <div className="flex flex-col items-center justify-center gap-4">
            {quantity
              .filter((item) => item.id === data.id)
              .map((item) => (
                <div className="flex items-center justify-center gap-4" key={item.id}>
                  <button
                    className="h-4 w-4 border border-gray-300 p-4 flex justify-center items-center rounded-full"
                    onClick={() => handleAdd(data)}
                  >
                    <span>+</span>
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="h-4 w-4 border border-gray-300 p-4 flex justify-center items-center rounded-full"
                    onClick={() => handleDec(data)}
                  >
                    <span>-</span>
                  </button>
                </div>
              ))}
            <div>
              <p className="flex">
                Price :{" "}
                <Currency
                  value={
                    Number(
                      quantity.find((item) => item.id === data.id)?.quantity ?? 0
                    ) * Number(data.price)
                  }
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;




