import { useCart } from '../../context/CartContext';
import { CreditCardIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const CartSummary = () => {
  const { getSubtotal } = useCart();

  const subtotal = getSubtotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-colors duration-300">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Subtotal</span>
          <span className="text-gray-900 dark:text-white transition-colors duration-300">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Shipping</span>
          <span className="text-gray-900 dark:text-white transition-colors duration-300">${shipping.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-medium transition-colors duration-300">
          <span className="text-gray-900 dark:text-white transition-colors duration-300">Total</span>
          <span className="text-gray-900 dark:text-white transition-colors duration-300">${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        onClick={() => alert('Checkout functionality would be implemented here!')}
      >
        <LockClosedIcon className="h-4 w-4 mr-2" />
        Proceed to Checkout
      </button>

      <div className="mt-6 text-center">
        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
          <CreditCardIcon className="h-5 w-5 mr-2" />
          <p>We accept all major credit cards</p>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="American Express" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
