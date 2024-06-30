import { FC } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  value: number;
}

const Rating: FC<RatingProps> = ({ value }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={20}
        className={i <= value ? "fill-current text-blue-900" : "text-gray-300"} // Use blue color for filled stars
      />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
