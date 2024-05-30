
import React from 'react';
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
// import Tilty from 'react-tilty';
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

const ReviewCard = ({ review }) => {
  return (
    
    <div className="card bg-white p-5 rounded-full shadow-md">
      <p className="text-gray-600">{review.content}</p>
      <div className="text-sm text-gray-500 mt-2">- {review.author}</div>
    </div>
    
  );
};

const CustomerReviews = ({ reviews }) => {
  return (
    <div className="reviews-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("11747fa2-76e4-40fa-8cca-f4af2222f836");

  return (
    <Container>
     <div className="space-y-10 pb-10 pt-10">

        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
          {/* Customer Reviews Section */}
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <CustomerReviews reviews={sampleReviews} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
