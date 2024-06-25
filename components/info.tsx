"use client";

import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-wishlist";
import Rating from "./ui/ratings";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const wishlist = useWishlist();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const isInCart = cart.items.some((item) => item.id === data.id);
  const isInWishlist = wishlist.items.some((item) => item.id === data.id);
  const onRemoveFromCart = () => {
    cart.removeItem(data.id);
  };
  const onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: data.name,
          text: `Check out this product: ${data.name}`,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API is not supported in this browser.");
    }
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      wishlist.removeItem(data.id);
    } else {
      wishlist.addItem(data);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <Rating value={Math.floor(Math.random() * 5) + 1} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3 flex-wrap gap-y-2">
        {isInCart ? (
          <Button
            onClick={onRemoveFromCart}
            className="flex items-center gap-x-2"
          >
            Remove Item
            <Trash2 size={20} className="text-red-600" />
          </Button>
        ) : (
          <Button onClick={onAddToCart} className="flex items-center gap-x-2">
            Add To Cart
            <ShoppingCart size={20} />
          </Button>
        )}
        <Button onClick={onShare} className="flex items-center gap-x-2">
          Share
        </Button>
        <Button
          className="flex bg-black items-ceter gap-x-2 text-white "
          onClick={toggleWishlist}
        >
          Wishlist
          {isInWishlist ? (
            <Heart className=" text-red-600  fill-red-600" />
          ) : (
            <Heart className="bg-none text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Info;
