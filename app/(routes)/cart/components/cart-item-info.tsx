import React from "react";

interface Product {
  name: string;
  color: string;
  size: string;
  price: string;
  // Add more properties as needed
}

interface CartItemInfoProps {
  product: Product;
}
export interface QuantityDetail {
  id: string;
  quantity: number;
  // Add more properties as needed
}


const CartItemInfo: React.FC<CartItemInfoProps> = ({ product }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-sm font-semibold text-black">{product.name}</p>
      </div>

      <div className="mt-1 flex text-sm">
        <p className="text-gray-500">{product.color}</p>
        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
          {product.size}
        </p>
      </div>
      <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  );
};

export default CartItemInfo;

