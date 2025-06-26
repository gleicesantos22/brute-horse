import React from 'react';
import { Shield, Truck, Award, CheckCircle, Star, Clock, Users, TrendingUp, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function HomePage() {
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
      {/* Enhanced Professional Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg p-2">
                  <img 
                    src="/cavalo vetorizada.png" 
                    alt="BRUTE HORSE Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">BRUTE HORSE</h1>
                  <p className="text-xs text-gray-500 font-medium tracking-wide">PREMIUM SUPPLEMENTS</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="font-medium">180 Days Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                <Truck className="h-4 w-4 text-green-500" />
                <span className="font-medium">Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-purple-500" />
                <span className="font-medium">FDA Approved</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <div className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Enhanced Limited Time Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-12 shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-5 h-5" />
              <span>Limited Time Offer - While Supplies Last</span>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Main Headline */}
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              Secure Your
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
                BRUTE HORSE
              </span>
              <span className="block text-5xl md:text-6xl text-gray-700 font-bold">
                Discount Pack
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Premium supplement engineered to maximize your <span className="font-semibold text-gray-800">vitality</span> and <span className="font-semibold text-gray-800">performance</span> with scientifically-backed natural ingredients
            </p>
            
            {/* Enhanced Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">FDA Approved Facility</h3>
                  <p className="text-sm text-gray-600">Manufactured under strict quality standards</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Natural Ingredients</h3>
                  <p className="text-sm text-gray-600">100% pure, scientifically-tested compounds</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Third-Party Tested</h3>
                  <p className="text-sm text-gray-600">Independent lab verification for purity</p>
                </div>
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">50,000+ Satisfied Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">92% Reorder Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Offers Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the perfect supply for your transformation journey. Most customers choose our 6-bottle package for maximum results and savings.
            </p>
          </div>

          {/* Fixed Product Cards Grid with proper spacing for badges */}
          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
              {productCards.map((card, index) => (
                <ProductCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Showcase Section */}
      <div className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative mb-20">
              {/* Enhanced Product Image with Multiple Layers */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-blue-100 rounded-full blur-3xl opacity-40 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent rounded-3xl"></div>
                <img 
                  src="https://i.postimg.cc/zH3WNjBw/6BOTTLE.png" 
                  alt="BRUTE HORSE Products" 
                  className="relative w-full max-w-3xl mx-auto transition-all duration-700 hover:scale-105 drop-shadow-2xl"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Premium Quality You Can <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Trust</span>
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed font-light mb-12">
                  Manufactured in FDA-approved facilities with the highest quality standards, using only the finest natural ingredients sourced globally
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://pagamento.paybluedrops.com/checkout/176849703:1" 
                  className="group inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl no-underline"
                >
                  <Shield className="w-6 h-6" />
                  <span>Secure Your Order Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform group-hover:translate-x-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                
                <div className="text-center text-gray-500">
                  <p className="text-sm font-medium">✓ Instant Access</p>
                  <p className="text-sm font-medium">✓ 180-Day Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Satisfaction Guarantee Section */}
      <div className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="relative inline-block">
                  <img 
                    src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/SELO-180-DAYS.svg" 
                    alt="180 Days Money Back Guarantee" 
                    className="w-96 h-96 mx-auto lg:mx-0 transition-all duration-500 hover:scale-110 hover:rotate-3 drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                    100% Satisfaction
                  </h2>
                  <h3 className="text-8xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-8 leading-none">
                    180 Days
                  </h3>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Your investment today is protected by our iron-clad 180-day  100% money-back guarantee. If you're not completely amazed by how BRUTE HORSE transforms your vitality and performance, simply contact us within 180 days for a full refund. No questions asked, no hassles.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-2">No Questions</h4>
                    <p className="text-sm text-gray-400">Simple process</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-2">Full Refund</h4>
                    <p className="text-sm text-gray-400">Every penny back</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-2">180 Days</h4>
                    <p className="text-sm text-gray-400">Plenty of time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Shipping Section with Same Color Scheme */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              
              {/* Enhanced Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl mb-12 shadow-2xl">
                <Truck className="w-12 h-12 text-white" />
              </div>
              
              {/* Enhanced Heading */}
              <h3 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
                Free Shipping
                <span className="block text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Worldwide
                </span>
              </h3>
              
              {/* Enhanced Highlight */}
              <div className="mb-12">
                <p className="text-2xl lg:text-3xl text-gray-700 mb-6">
                  With every order of{' '}
                  <span className="font-black text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-600 bg-clip-text">
                    6 bottles
                  </span>
                </p>
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                  <p className="text-xl font-semibold">Save $50+ on shipping costs</p>
                </div>
              </div>
              
              {/* Enhanced Supporting Text */}
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
                92% of our customers choose the 6-bottle package - our recommended option for optimal results, maximum savings, and the complete transformation experience
              </p>
              
              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                  <h4 className="font-bold text-gray-900 text-lg">Fast Processing</h4>
                  <p className="text-gray-600 text-center leading-relaxed">Orders shipped within 24-48 hours</p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <Shield className="w-10 h-10 text-blue-600" />
                  <h4 className="font-bold text-gray-900 text-lg">Secure Packaging</h4>
                  <p className="text-gray-600 text-center leading-relaxed">Discreet, protective shipping materials</p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <Star className="w-10 h-10 text-yellow-500" />
                  <h4 className="font-bold text-gray-900 text-lg">Premium Service</h4>
                  <p className="text-gray-600 text-center leading-relaxed">White-glove customer experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Footer with Company Policies */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl p-3">
                <img 
                  src="/cavalo vetorizada.png" 
                  alt="BRUTE HORSE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">BRUTE HORSE</h2>
                <p className="text-sm text-gray-400 font-medium tracking-wider">PREMIUM SUPPLEMENTS</p>
              </div>
            </div>
            
            {/* Company Policies Links */}
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                <a href="/privacy-policy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline">
                  Terms of Service
                </a>
                <a href="/return-policy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline">
                  Return Policy
                </a>
                <a href="/shipping-policy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline">
                  Shipping Policy
                </a>
                <a href="/refund-policy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline">
                  Refund Policy
                </a>
                <a href="/contact-us" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline">
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-gray-300 text-lg">Copyright © 2024 | BRUTE HORSE All Rights Reserved</p>
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-yellow-400">Important Disclaimer:</span> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your healthcare provider before use.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12">
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-white/5 px-8 py-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-300 font-medium">
                  2045 S Carpenter St, United States. Secure SSL Encrypted Ordering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;