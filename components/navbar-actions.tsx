"use client";

import { ShoppingBag, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center md:gap-x-4 gap-x-1">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black md:px-4 px-1 py-1 md:py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <div onClick={() => router.push("/wishlist")}>
        <Heart />
      </div>
    </div>
  );
};

export default NavbarActions;
