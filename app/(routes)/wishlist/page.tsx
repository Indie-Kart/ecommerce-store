"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useWishlist from "@/hooks/use-wishlist";

import WishlistItem from "./components/wishlist-item";
import BackToTop from "@/components/ui/BacktoTop";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const wishlist = useWishlist();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white pt-10">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Your Wishlist</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <ul>
                {wishlist.items.map((item) => (
                  <WishlistItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <BackToTop />
    </div>
  );
};

export default CartPage;
