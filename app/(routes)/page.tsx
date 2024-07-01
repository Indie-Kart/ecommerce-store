// HomePage.tsx
import React from "react";
import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";

// Sample reviews (you can customize these)
const sampleReviews = [
  {
    id: 1,
    content: "Great product! Highly recommended.",
    author: "John Doe",
  },
  {
    id: 2,
    content: "Excellent service and quality.",
    author: "Jane Smith",
  },
  {
    id: 3,
    content: "Loved it! Will buy again.",
    author: "Alex Johnson",
  },
  {
    id: 4,
    content: "Great product! Highly recommended.",
    author: "John Doe",
  },
  {
    id: 5,
    content: "Excellent service and quality.",
    author: "Jane Smith",
  },
  {
    id: 6,
    content: "Loved it! Will buy again.",
    author: "Alex Johnson",
  },
];

const ReviewCard: React.FC<{ review: (typeof sampleReviews)[0] }> = ({
  review,
}) => {
  return (
    <div className="card bg-white p-5 rounded-full shadow-md">
      <p className="text-gray-600">{review.content}</p>
      <div className="text-sm text-gray-500 mt-2">- {review.author}</div>
    </div>
  );
};

const CustomerReviews: React.FC<{ reviews: typeof sampleReviews }> = ({
  reviews,
}) => {
  return (
    <div className="reviews-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

const HomePage: React.FC = async () => {
  const products = await getProducts({ isFeatured: true });

  const exampleData = {
    images: [
      {
        url: "https://i.pinimg.com/564x/4a/e5/d3/4ae5d3074757a801a194a46b84f095cb.jpg",
        label: "Image 1",
      },
      {
        url: "https://i.pinimg.com/564x/34/3b/2d/343b2dfbdd4311d9c01dce42cc6240e0.jpg",
        label: "Image 2",
      },
      {
        url: "https://i.pinimg.com/564x/44/a7/a9/44a7a90cb765d8880e1896c39fa71ab9.jpg",
        label: "Image 3",
      },
    ],
  };

  return (
    <Container>
      <div className="space-y-10 pb-10 pt-10">
        <Billboard data={exampleData} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <CustomerReviews reviews={sampleReviews} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
