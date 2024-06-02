"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PriceRange } from "@/types";

const priceRanges: PriceRange[] = [
  { id: "1", name: "$0 - $50", min: 0, max: 50 },
  { id: "2", name: "$50 - $100", min: 50, max: 100 },
  { id: "3", name: "$100 - $200", min: 100, max: 200 },
  { id: "4", name: "$200 - $500", min: 200, max: 500 },
  { id: "5", name: "$500+", min: 500, max: null }, // null represents Infinity
];

const PriceFilter: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedMinPrice = searchParams.get("minPrice");
  const selectedMaxPrice = searchParams.get("maxPrice");

  const onClick = (range: PriceRange) => {
    const current = qs.parse(searchParams.toString());

    let query: any = {
      ...current,
      minPrice: String(range.min),
      maxPrice: range.max === null ? 'null' : String(range.max),
    };

    // Check if the current selected filter is the same as the clicked one, if so, clear it
    if (
      selectedMinPrice === String(range.min) &&
      (selectedMaxPrice === String(range.max) || (range.max === null && selectedMaxPrice === 'null'))
    ) {
      delete query.minPrice;
      delete query.maxPrice;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Price</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {priceRanges.map((range) => (
          <div key={range.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedMinPrice === String(range.min) &&
                (selectedMaxPrice === String(range.max) || (range.max === null && selectedMaxPrice === 'null')) &&
                'bg-black text-white'
              )}
              onClick={() => onClick(range)}
            >
              {range.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
