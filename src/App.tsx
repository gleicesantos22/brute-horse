import React from 'react';
import { Shield, Truck, Award, CheckCircle, Star, CreditCard, Clock } from 'lucide-react';
import ProductCard from './components/ProductCard';

function App() {
  const productCards = [
    {
      badge: { text: 'BEST VALUE', color: 'yellow' as const },
      title: '6 Bottles',
      subtitle: '180 days supply',
      image: 'https://i.postimg.cc/zH3WNjBw/6BOTTLE.png',
      price: '$49',
      savings: 'YOU SAVE $600',
      features: ['Biggest Discount', '180 Days Guarantee'],
      buttonText: 'Secure Order',
      buttonStyle: 'primary' as const,
      originalPrice: '$594',
      finalPrice: '$294',
      shipping: '+ FREE SHIPPING',
      shippingColor: 'green' as const,
      link: 'https://pagamento.paybluedrops.com/checkout/176849703:1',
      borderColor: 'yellow' as const
    },
    {
      badge: { text: 'POPULAR', color: 'blue' as const },
      title: '3 Bottles',
      subtitle: '90 days supply',
      image: 'https://i.imgur.com/gTcOoJ7.png',
      price: '$69',
      savings: 'YOU SAVE $300',
      features: ['180 Days Guarantee'],
      buttonText: 'Secure Order',
      buttonStyle: 'secondary' as const,
      originalPrice: '$300',
      finalPrice: '$207',
      shipping: '+ FREE SHIPPING',
      shippingColor: 'green' as const,
      link: 'https://pagamento.paybluedrops.com/checkout/176845818:1',
      borderColor: 'blue' as const
    },
    {
      badge: { text: 'STARTER', color: 'gray' as const },
      title: '1 Bottle',
      subtitle: '30 days supply',
      image: 'https://i.imgur.com/ojDbZ0n.png',
      price: '$79',
      savings: 'YOU SAVE $240',
      features: ['180 Days Guarantee'],
      buttonText: 'Secure Order',
      buttonStyle: 'secondary' as const,
      originalPrice: '$198',
      finalPrice: '$79',
      shipping: '+ $9.95 SHIPPING',
      shippingColor: 'blue' as const,
      link: 'https://pagamento.paybluedrops.com/checkout/176654642:1',
      borderColor: 'gray' as const
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BH</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">BRUTE HORSE</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>180 Days Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="h-4 w-4 text-blue-500" />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - FIXED to match original exactly with full responsiveness */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0">
            
            {/* Limited Time Offer Badge - FIXED to match original */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Clock className="w-4 h-4" />
              <span>Limited Time Offer - While Supplies Last</span>
            </div>
            
            {/* Main Headline - FIXED with proper responsive sizing and gradient */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Your
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                BRUTE HORSE
              </span>
              <span className="block text-4xl md:text-5xl text-gray-700">
                Discount Pack
              </span>
            </h1>
            
            {/* Subtitle - FIXED with proper responsive text sizing */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Premium supplement designed to enhance your vitality and performance with natural ingredients
            </p>
            
            {/* Trust Badges - FIXED with proper responsive layout */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>FDA Approved Facility</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Third-Party Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {productCards.map((card, index) => (
              <ProductCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge Section - Back to Original Simple Design */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-blue-100 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://i.postimg.cc/zH3WNjBw/6BOTTLE.png" 
                alt="BRUTE HORSE Products" 
                className="relative w-full max-w-2xl mx-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Premium Quality You Can Trust</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Manufactured in FDA-approved facilities with the highest quality standards and natural ingredients
              </p>
              <a 
                href="https://pagamento.paybluedrops.com/checkout/176849703:1" 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group no-underline"
              >
                <span>Order Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Satisfaction Guarantee - UPDATED to match reference exactly */}
      <div className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img 
                    src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/SELO-180-DAYS.svg" 
                    alt="180 Days Money Back Guarantee" 
                    className="w-80 h-80 mx-auto lg:mx-0 transition-transform duration-500 hover:scale-110 hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">100% Satisfaction</h2>
                  <h3 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">180 Days</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Your order today is protected by our iron-clad 180-day 100% money-back guarantee. If you're not amazed by how well BRUTE HORSE enhances your vitality and performance, just let us know within 180 days and we'll refund every penny. No questions asked.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">No Questions Asked</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Full Refund</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">180 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Professional Shipping Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
            
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
              {/* Icon with enhanced styling */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-lg">
                <Truck className="w-10 h-10 text-white" />
              </div>
              
              {/* Main heading */}
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                Free Shipping Worldwide
              </h3>
              
              {/* Highlight text */}
              <div className="mb-6">
                <p className="text-xl lg:text-2xl text-gray-200 mb-2">
                  With every order of{' '}
                  <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    6 bottles
                  </span>
                </p>
              </div>
              
              {/* Supporting text */}
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                92% of customers choose to order 6 bottles, which is our recommended option for the best results and maximum savings
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Fast Processing</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Secure Packaging</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Premium Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BH</span>
              </div>
              <h2 className="text-2xl font-bold text-white">BRUTE HORSE</h2>
            </div>
            <p className="text-gray-400 mb-4">Copyright © 2024 | BRUTE HORSE All Rights Reserved</p>
            <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed mb-6">
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
          
          <div className="text-center mt-8 text-xs text-gray-500">
            <p>2045 S Carpenter St, United States. All rights reserved. Review legal terms and privacy policy here. Contact us here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;