import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300 animate-fade-in">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <ShoppingBagIcon className="h-16 w-16 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-6 transition-colors duration-300">
            Your cart is empty
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200 dark:divide-gray-700 transition-colors duration-300">
                  {cart.map(item => (
                    <li key={item.id} className="py-6">
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex justify-between">
                <Link
                  to="/products"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
