"use client"
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  color: string;
  size: string;
  link: string;
}

const dummyData: Product[] = [
  { id: 1, name: 'Levis Men Mid-Rise Jeans', category: 'Jeans', color: 'Blue', size: 'M', link: '/product/c36e8889-689d-4448-b2ec-558212de51e4' },
  { id: 2, name: 'US Polo Full Head CAP', category: 'accessories', color: 'Black', size: 'L', link: '/product/711d7d7c-5952-4d82-90c8-f9e9dd5c4ebb' },
  { id: 3, name: 'Crocs', category: 'Shoes', color: 'White', size: 'M', link: '/product/0455709b-efce-4c7c-8880-2dd4c3c80e61' },
  { id: 4, name: 'Adidas Low Shoes', category: 'Shoes', color: 'White', size: '9', link: '/product/1015598c-4874-444e-a77f-8dccb56a42c1' },
  { id: 5, name: 'Wrangler Bomber Jacket', category: 'Jacket', color: 'Green', size: 'One Size', link: '/product/2ad8db2a-3944-45d2-943d-0b2b6ae360b5' },
  { id: 6, name: 'Van Heusen Formal Cotton Shirt', category: 'Shirt', color: 'Green', size: 'One Size', link: '/product/ce830c66-3034-4e83-8479-8da37338c4eb' },
  { id: 7, name: 'GAP crew neck tshirt', category: 'T-Shirt', color: 'Green', size: 'One Size', link: '/product/dcd94e89-6f08-43a3-afef-cad7c7597415' },
  { id: 8, name: 'Levis Crew Neck Tshirt', category: 'T-Shirt', color: 'Green', size: 'One Size', link: '/product/33e29477-a472-448b-a5e3-32054c938aa7' },
];

const fuseOptions = {
  keys: ['name', 'category', 'color', 'size'],
};

function SearchBar() {
  const [fuse, setFuse] = useState<Fuse<Product> | null>(null);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);
  let [isMobile , setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true);
    const fuseInstance = new Fuse(dummyData, fuseOptions);
    setFuse(fuseInstance);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query && fuse) {
      const results = fuse.search(query);
      setSearchResults(results.map(result => result.item));
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className= {`flex-grow max-w-md ml-auto mr-4 relative ${isMobile && 'hidden'}` }>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
      {isMounted && searchResults.length > 0 && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 max-h-60 overflow-y-auto shadow-lg">
          {searchResults.map((product) => (
            <div key={product.id} className="p-2 hover:bg-gray-100" >
              <Link href={product.link} onClick={()=>{
                setSearchQuery('')
                setSearchResults([])
              }} >
                {product.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchBar;
