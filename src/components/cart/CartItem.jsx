import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

const CartItem = ({ item, mini = false }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);

    // Add a small delay for animation
    setTimeout(() => {
      removeFromCart(item.id);
    }, 300);
  };

  if (mini) {
    return (
      <div className={`flex items-center py-2 border-b border-gray-100 dark:border-gray-700 transition-all duration-300 ${isRemoving ? 'opacity-0 transform -translate-x-4' : 'opacity-100'}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-12 h-12 object-contain mr-3 bg-white dark:bg-gray-700 rounded p-1"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.title}</p>
          <div className="flex items-center">
            <button
              onClick={handleDecrement}
              className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mr-1"
              disabled={item.quantity <= 1}
            >
              <MinusIcon className="h-3 w-3 inline" />
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.quantity} × ${item.price.toFixed(2)}
            </p>
            <button
              onClick={handleIncrement}
              className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 ml-1"
            >
              <PlusIcon className="h-3 w-3 inline" />
            </button>
          </div>
        </div>
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 ml-2 transition-colors"
          aria-label="Remove item"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${isRemoving ? 'opacity-0 transform -translate-x-4' : 'opacity-100'}`}>
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2 bg-white dark:bg-gray-700"
        />
      </div>

      <div className="flex-1 ml-0 sm:ml-6 mt-4 sm:mt-0">
        <h3 className="text-base font-medium text-gray-900 dark:text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex border border-gray-300 dark:border-gray-600 rounded-md">
          <button
            onClick={handleDecrement}
            className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="px-4 py-1 text-center min-w-[40px] text-gray-800 dark:text-gray-200">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Increase quantity"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={handleRemove}
          className="ml-4 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors group"
          aria-label="Remove item"
        >
          <TrashIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-6 font-medium text-gray-900 dark:text-white">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
