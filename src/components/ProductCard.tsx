import React from 'react';
import { Shield, ArrowRight, Star, CheckCircle } from 'lucide-react';

interface ProductCardProps {
  badge: {
    text: string;
    color: 'yellow' | 'blue' | 'gray';
  };
  title: string;
  subtitle: string;
  image: string;
  price: string;
  savings: string;
  features: string[];
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  originalPrice: string;
  finalPrice: string;
  shipping: string;
  shippingColor: 'green' | 'blue';
  link: string;
  borderColor: 'yellow' | 'blue' | 'gray';
}

const ProductCard: React.FC<ProductCardProps> = ({
  badge,
  title,
  subtitle,
  image,
  price,
  savings,
  features,
  buttonText,
  buttonStyle,
  originalPrice,
  finalPrice,
  shipping,
  shippingColor,
  link,
  borderColor
}) => {
  const badgeColors = {
    yellow: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 shadow-lg',
    blue: 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg',
    gray: 'bg-gradient-to-r from-gray-600 to-gray-700 shadow-lg'
  };

  const buttonStyles = {
    primary: 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105',
    secondary: 'bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-blue-600 hover:text-white border-2 border-blue-600 hover:border-transparent font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105'
  };

  const shippingColors = {
    green: 'text-green-600 bg-green-50',
    blue: 'text-blue-600 bg-blue-50'
  };

  const borderColors = {
    yellow: 'border-yellow-200 hover:border-yellow-300 shadow-xl hover:shadow-2xl bg-gradient-to-br from-yellow-50/50 to-orange-50/50',
    blue: 'border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50',
    gray: 'border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-gray-50/50 to-slate-50/50'
  };

  // Enhanced hover effects with different intensities
  const getHoverEffects = () => {
    switch (borderColor) {
      case 'yellow':
        return 'hover:-translate-y-3 hover:scale-[1.03]';
      case 'blue':
        return 'hover:-translate-y-2 hover:scale-[1.02]';
      case 'gray':
        return 'hover:-translate-y-1 hover:scale-[1.01]';
      default:
        return 'hover:-translate-y-2 hover:scale-[1.02]';
    }
  };

  // Special styling for BEST VALUE card
  const getCardBackground = () => {
    if (borderColor === 'yellow') {
      return 'bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30';
    }
    return 'bg-white';
  };

  return (
    <div className="relative">
      {/* Badge positioned outside the card */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`${badgeColors[badge.color]} text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${borderColor === 'yellow' ? 'animate-pulse px-8 py-3 font-black text-base' : ''}`}>
          {badge.text}
          {borderColor === 'yellow' && <span className="ml-2">🔥</span>}
        </div>
      </div>

      {/* Main Card */}
      <div className={`relative ${getCardBackground()} rounded-3xl p-8 border-3 transition-all duration-500 ${getHoverEffects()} ${borderColors[borderColor]} group h-full flex flex-col overflow-hidden pt-12`}>
        
        {/* Enhanced Background Elements for BEST VALUE */}
        {borderColor === 'yellow' && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-200/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-xl"></div>
          </>
        )}

        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-base font-medium">{subtitle}</p>
          {borderColor === 'yellow' && (
            <div className="mt-3 inline-flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
              <Star className="w-3 h-3" />
              <span>Most Popular Choice</span>
            </div>
          )}
        </div>

        {/* Enhanced Product Image */}
        <div className="flex justify-center mb-8 flex-grow">
          <div className="relative group/image flex items-center justify-center h-56">
            <div className={`absolute inset-0 ${borderColor === 'yellow' ? 'bg-gradient-to-t from-yellow-100/30 to-transparent' : 'bg-gradient-to-t from-gray-100/20 to-transparent'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <img 
              src={image} 
              alt={`${title} Product`} 
              className="relative max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
            />
            {borderColor === 'yellow' && (
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </div>
        </div>

        {/* Enhanced Pricing Section */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-5xl font-black text-blue-600">{price}</span>
            <span className="text-lg text-gray-500 ml-2 font-medium">per bottle</span>
          </div>
          
          <div className="space-y-3">
            <div className={`${borderColor === 'yellow' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-green-500'} text-white px-4 py-3 rounded-xl font-bold text-base shadow-lg`}>
              {savings}
            </div>
            
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="mt-auto">
          <a 
            href={link}
            className={`block w-full ${buttonStyles[buttonStyle]} text-lg transition-all duration-300 mb-6 group/button text-center no-underline`}
          >
            <span className="flex items-center justify-center space-x-3">
              <Shield className="w-5 h-5" />
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-2" />
            </span>
          </a>

          {/* Enhanced Payment Info */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                <img 
                  src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp" 
                  alt="Payment Methods" 
                  className="h-6 object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <span className="line-through text-gray-400 text-lg">{originalPrice}</span>
                <span className="font-black text-gray-900 text-2xl">{finalPrice}</span>
              </div>
              
              <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${shippingColors[shippingColor]}`}>
                {shipping}
              </div>
            </div>
            
            {borderColor === 'yellow' && (
              <div className="mt-4 text-xs text-gray-600 bg-yellow-50 px-3 py-2 rounded-lg border border-yellow-200">
                <span className="font-semibold">🎯 92% of customers choose this package</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;