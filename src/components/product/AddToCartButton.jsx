import { PlusIcon, MinusIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

const AddToCartButton = ({ product }) => {
  const {
    addToCart,
    updateQuantity,
    removeFromCart,
    isInCart,
    getItemQuantity
  } = useCart();

  // Check if product is already in cart
  const inCart = isInCart(product.id);
  // Get current quantity if in cart
  const currentQuantity = getItemQuantity(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);

    // Show a confirmation message
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());

    const message = document.createElement('div');
    message.className = 'toast-notification toast-success';
    message.textContent = `${product.title} added to cart!`;
    document.body.appendChild(message);

    // Remove the message after 2 seconds
    setTimeout(() => {
      message.remove();
    }, 2000);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, currentQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, currentQuantity - 1);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(product.id);

    // Show a confirmation message
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());

    const message = document.createElement('div');
    message.className = 'toast-notification toast-error';
    message.textContent = `${product.title} removed from cart!`;
    document.body.appendChild(message);

    // Remove the message after 2 seconds
    setTimeout(() => {
      message.remove();
    }, 2000);
  };

  // If product is not in cart, show "Add to Cart" button
  if (!inCart) {
    return (
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mt-4"
      >
        <ShoppingCartIcon className="h-5 w-5 mr-2" />
        Add to Cart
      </button>
    );
  }

  // If product is in cart, show quantity controls
  return (
    <div className="mt-4 animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
          <button
            onClick={handleDecrement}
            className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-md transition-colors"
            aria-label="Decrease quantity"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="px-4 py-1 text-center min-w-[40px] text-gray-800 dark:text-gray-200">
            {currentQuantity}
          </span>
          <button
            onClick={handleIncrement}
            className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-md transition-colors"
            aria-label="Increase quantity"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={handleRemove}
          className="ml-2 p-2 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
          aria-label="Remove from cart"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {currentQuantity} in cart - ${(product.price * currentQuantity).toFixed(2)}
      </div>
    </div>
  );
};

export default AddToCartButton;
