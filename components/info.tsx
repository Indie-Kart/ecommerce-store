"use client";

import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-wishlist";
import Rating from "./ui/ratings";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data}) => {
  const [checker,setChecker]=useState({share:false,copy:false})
  const cart = useCart();
  const URL= window.location.href
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
    setChecker(pre=>({...pre,share:!checker.share}))
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

  function handleWhatsApp(){ 
     
    let whatsappShareURL = `https://wa.me/?text=${encodeURIComponent(URL)}`;
    
    // Open WhatsApp share link
    window.open(whatsappShareURL, '_blank');
  }

  function handleFaceBook(){
    let facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(URL)}`;
    
    // Open Facebook share link
    window.open(facebookShareURL, '_blank');
  }

  function handleInstagram(){
    let instagramShareURL = `https://www.instagram.com/create/story/?url=${encodeURIComponent(URL)}`;
    
    // Open Instagram share link
    window.open(instagramShareURL, '_blank');
  }

  const toggleWishlist = () => {
    if (isInWishlist) {
      wishlist.removeItem(data.id);
    } else {
      wishlist.addItem(data);
    }
  };

function handleCopy(){
  navigator.clipboard.writeText(URL)
  setChecker(pre=>({...pre,copy:true}))
  setTimeout(()=>{
  setChecker(pre=>({...pre,copy:false}))
  },2000)
}
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
          <h3 className="font-semibold text-black">Rating:</h3>
          <Rating value={4} />
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
        { checker.share?
        <div className=" fixed top-0 bottom-0 left-0 right-0  h-[16rem] ls:w-[50%] sm:w-[75%] shadow-lg p-6 w-[85%] bg-white m-auto">
          <img src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png" className="absolute top-[1%] right-[3%] h-6 w-6" alt="close" onClick={()=>setChecker(pre=>({...pre,share:false}))} />
          <div className="flex justify-center items-center gap-8">
          <input readOnly value={URL} className="border border-1 p-2 w-[60%]" />
          <img src={checker.copy?"https://cdn-icons-png.flaticon.com/128/5291/5291043.png":"https://cdn-icons-png.flaticon.com/128/126/126498.png"} alt="copy" className={`h-6 w-6 ${checker.copy?"cursor-not-allowed":"cursor-pointer"}`}  onClick={handleCopy} />
          </div>
          <hr className="mt-4 border-black" />
          <p className="text-center p-4">Share To</p>
          <div className="flex justify-center items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook" onClick={handleFaceBook} className="h-12 w-12 cursor-pointer" />
              <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram" onClick={handleInstagram}  className="h-12 w-12 cursor-pointer" />
              <img src="https://cdn-icons-png.flaticon.com/128/15713/15713434.png" alt="Whats App" onClick={handleWhatsApp} className="h-12 w-12 cursor-pointer" />
            </div>
        </div>:<></>
}
      </div>
    </div>
  );
};

export default Info;
