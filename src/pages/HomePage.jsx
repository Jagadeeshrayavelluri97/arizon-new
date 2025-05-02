import Hero from '../components/ui/Hero';
import ProductGrid from '../components/product/ProductGrid';
import Loading from '../components/ui/Loading';
import Error from '../components/ui/Error';
import Newsletter from '../components/ui/Newsletter';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { products, loading, error } = useProducts(8); // Limit to 8 featured products

  // Category images
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Latest gadgets and tech accessories'
    },
    {
      id: "men's clothing",
      name: "Men's Clothing",
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Stylish apparel for men'
    },
    {
      id: "women's clothing",
      name: "Women's Clothing",
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Trendy fashion for women'
    },
    {
      id: 'jewelery',
      name: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Elegant jewelry and accessories'
    }
  ];

  return (
    <div className="transition-colors duration-300">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        {/* Featured Products */}
        <section id="featured" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Featured Products
          </h2>

          {loading ? (
            <Loading />
          ) : error ? (
            <Error message={error} />
          ) : (
            <ProductGrid products={products} />
          )}
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{category.description}</p>
                  <Link
                    to="/products"
                    className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotion Section */}
        <section className="mb-16">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 transition-colors duration-300 animate-fade-in">
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Free Shipping on All Orders</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  For a limited time, enjoy free shipping on all orders over $50.
                  Don't miss this opportunity to shop your favorite items.
                </p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <img
                  src="https://images.unsplash.com/photo-1585218356057-dc0833388e2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Free Shipping"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Quality Products</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                We source only the highest quality products from trusted suppliers around the world.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Best Prices</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Our direct relationships with manufacturers allow us to offer the best prices.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                With our efficient logistics network, we ensure quick delivery of your orders.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="animate-fade-in mb-16">
          <Newsletter />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
