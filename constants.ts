export const lists = [
  {
    title: 'Best Selling',
    items: [
      {
        title: 'Acetate Sunglasses',
        price: 10.99,
        rating: 5.0,
        ratingCount: 70,
        image: '/image.png'
      },
      {
        title: 'Wool Cashmere Jacket',
        price: 180,
        rating: 4.7,
        ratingCount: 23,
        image: '/coat.png'
      },
      {
        title: 'Travel Pet Carrier',
        price: 42,
        rating: 4.5,
        ratingCount: 50,
        image: '/bag.png'
      },
      {
        title: 'Clem Cashmere Scarf',
        price: 65,
        rating: 4.9,
        ratingCount: 46,
        image: '/scarf.png'
      }
    ]
  },
  {
    title: 'New Arrivals',
    items: [
      {
        title: 'Wool Cashmere Jacket',
        price: 180,
        rating: 4.7,
        ratingCount: 23,
        image: '/coat.png'
      },
      {
        title: 'Acetate Sunglasses',
        price: 10.99,
        rating: 5.0,
        ratingCount: 70,
        image: '/image.png'
      },
      {
        title: 'Clem Cashmere Scarf',
        price: 65,
        rating: 4.9,
        ratingCount: 46,
        image: '/scarf.png'
      },
      {
        title: 'Travel Pet Carrier',
        price: 42,
        rating: 4.5,
        ratingCount: 50,
        image: '/bag.png'
      },
    ]
  }
];

export const product = {
  name: 'Zip Tote Basket',
  price: 140.00,
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', value: '#6C6C6C' },
    { name: 'Washed gray', value: '#F7F0EA' },
    { name: 'White', value: '#FFFFFF' },
  ],
  sizes: [
    { name: 'XL', selectedSize: 'xl' },
    { name: 'L', selectedSize: 'l' },
    { name: 'M', selectedSize: 'm' },
    { name: 'S', selectedSize: 's' },
    { name: 'XS', selectedSize: 'xs' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

export const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}

export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]