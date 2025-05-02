import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const MiniCart = () => {
  const { cart, getSubtotal, closeCart } = useCart();

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 p-4 border border-gray-200 dark:border-gray-700 animate-fade-in transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Cart</h3>
        <button
          onClick={closeCart}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">Your cart is empty</p>
      ) : (
        <>
          <div className="max-h-60 overflow-y-auto mb-4">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                mini={true}
              />
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-gray-700 dark:text-gray-300">Subtotal:</span>
              <span className="font-bold text-gray-900 dark:text-white">${getSubtotal().toFixed(2)}</span>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                to="/cart"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={closeCart}
              >
                View Cart
              </Link>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                onClick={closeCart}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;
