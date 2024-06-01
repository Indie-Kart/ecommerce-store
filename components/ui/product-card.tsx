"use client";

import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { Expand, ShoppingCart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const onRemoveFromCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.removeItem(data.id);
  };

  const isInCart = cart.items.some((item) => item.id === data.id);

  if (!isMounted) {
    return null; // Render nothing on the server to avoid mismatch
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl hover-zoom transform hover:scale-105 transition-transform duration-[200] border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          fill
          className="aspect-square object-cover rounded-md"
          loading="lazy"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            {isInCart ? (
              <IconButton
                onClick={onRemoveFromCart}
                              icon={<Trash2 size={20} className="text-red-600" />
                              }
              />
            ) : (
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            )}
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
