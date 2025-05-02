import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }) => {
  // Format category name for display
  const formatCategory = (category) => {
    if (!category) return '';

    // Replace hyphens with spaces and capitalize each word
    return category
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
          <div className="h-48 w-full flex items-center justify-center bg-white dark:bg-gray-700 transition-colors duration-300">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain p-4"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
              }}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate transition-colors duration-300">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 truncate transition-colors duration-300">
            {formatCategory(product.category)}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center">
              <span className="mr-1 text-yellow-400">★</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {product.rating?.rate || 0} ({product.rating?.count || 0})
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
