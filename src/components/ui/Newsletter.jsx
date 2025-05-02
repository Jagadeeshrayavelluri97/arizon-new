import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError('');

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Simulate API call
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success!
      setIsSubmitted(true);
      setIsLoading(false);

      // Clear form
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white rounded-xl p-8 text-center shadow-xl relative overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-full">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-blue-100">
          Stay updated with our latest products, exclusive offers, and promotions.
          Subscribe to our newsletter and never miss out on great deals.
        </p>

        {!isSubmitted ? (
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row">
              <div className="flex-grow relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-10 px-4 py-3 rounded-l-md sm:rounded-r-none rounded-r-md sm:mb-0 mb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm border-2 border-white hover:border-blue-200 focus:border-blue-300 transition-all duration-300"
                    required
                    disabled={isLoading}
                  />
                </div>
                {error && (
                  <p className="absolute -bottom-6 left-0 text-xs text-red-300">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`
                  px-6 py-3 rounded-r-md sm:rounded-l-none rounded-l-md font-medium shadow-sm hover:shadow-md border-2 border-white hover:border-blue-200 transition-all duration-300
                  ${isLoading
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-blue-600 hover:bg-gray-100 transition-colors'
                  }
                `}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="animate-fade-in">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-md mx-auto">
              <svg className="w-12 h-12 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-blue-100">
                You've been successfully added to our newsletter.
                Look out for exclusive deals and updates in your inbox!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-sm text-blue-200 hover:text-white underline"
              >
                Subscribe another email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
