import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export const HomeSearchBox: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredProducts = searchQuery.trim()
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="relative px-4 md:px-6 py-4">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary z-10" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="pl-12 pr-4 h-14 text-base border-2 border-primary/20 rounded-2xl shadow-lg bg-background/95 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
        />
      </div>

      {showResults && searchQuery.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 md:mx-auto md:max-w-2xl bg-background/95 backdrop-blur-md border-2 border-primary/20 rounded-2xl shadow-2xl max-h-96 overflow-y-auto z-50">
          {filteredProducts.length > 0 ? (
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
};
