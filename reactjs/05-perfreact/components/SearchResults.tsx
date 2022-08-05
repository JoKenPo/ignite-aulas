import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number,
    price: number,
    title: string,
    priceFormatted: string,
  }>
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {


  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return (
          <ProductItem product={product} onAddToWishlist={onAddToWishlist} />
        );
      })}
    </div>
  );
}