import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react"; 
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data,quantity ,handleAdd,handleDec}) => { 
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
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
          <div className="flex items-center justify-center gap-4">
            <button className="h-4 w-4 border border-gray-300 p-4 flex justify-center items-center rounded-full" onClick={()=>handleAdd(data)}><span>+</span></button>
            <span>{quantity.find(ele=>ele.id===data.id)?quantity.find(ele=>ele.id===data.id).quantity:1}</span>
            <button className="h-4 w-4 border border-gray-300 p-4 flex justify-center items-center rounded-full" onClick={()=>handleDec(data)}><span>-</span></button>
          </div>
          <div>
            <p className="flex">prize : <Currency value={quantity.find(ele=>ele.id===data.id)?quantity.find(ele=>ele.id===data.id).price: data.price} /></p>
          </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
