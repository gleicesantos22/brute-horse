import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

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
    yellow: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    blue: 'bg-blue-600',
    gray: 'bg-gray-600'
  };

  const buttonStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-600 font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg'
  };

  const shippingColors = {
    green: 'text-green-600',
    blue: 'text-blue-600'
  };

  const borderColors = {
    yellow: 'border-gray-100 hover:border-yellow-200',
    blue: 'border-blue-300 hover:border-blue-400',
    gray: 'border-gray-100 hover:border-gray-200'
  };

  // Enhanced hover effects - 6 bottles gets special treatment
  const getHoverEffects = () => {
    switch (borderColor) {
      case 'yellow':
        return 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]';
      case 'blue':
        return 'hover:shadow-xl hover:-translate-y-1';
      case 'gray':
        return 'hover:shadow-xl hover:-translate-y-1';
      default:
        return 'hover:shadow-xl hover:-translate-y-1';
    }
  };

  // Badge positioning - different for BEST VALUE vs others
  const getBadgePosition = () => {
    if (borderColor === 'yellow') {
      return '-top-4'; // BEST VALUE needs more space
    }
    return '-top-3'; // POPULAR and STARTER
  };

  const getBadgePadding = () => {
    if (borderColor === 'yellow') {
      return 'px-6 py-2'; // BEST VALUE - bigger padding
    }
    return 'px-4 py-1'; // POPULAR and STARTER - smaller padding
  };

  const getBadgeFont = () => {
    if (borderColor === 'yellow') {
      return 'font-bold'; // BEST VALUE - bold
    }
    return 'font-medium'; // POPULAR and STARTER - medium
  };

  const getTopPadding = () => {
    if (borderColor === 'yellow') {
      return 'pt-4'; // BEST VALUE needs more top padding
    }
    return 'pt-2'; // POPULAR and STARTER need less
  };

  return (
    <div className={`relative bg-white rounded-3xl p-6 shadow-lg border-2 transition-all duration-500 ${getHoverEffects()} ${borderColors[borderColor]} group h-full flex flex-col`}>
      
      {/* Badge - positioned exactly like original */}
      <div className={`absolute ${getBadgePosition()} left-1/2 transform -translate-x-1/2 z-10`}>
        <div className={`${badgeColors[badge.color]} text-white ${getBadgePadding()} rounded-full text-sm ${getBadgeFont()} shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
          {badge.text}
        </div>
      </div>

      {/* Header - consistent spacing for all cards */}
      <div className={`text-center mb-6 ${getTopPadding()}`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      {/* Product Image - consistent sizing and responsive */}
      <div className="flex justify-center mb-6 flex-grow">
        <div className="relative group/image flex items-center justify-center h-48">
          <img 
            src={image} 
            alt={`${title} Product`} 
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
          {borderColor === 'yellow' && (
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </div>
      </div>

      {/* Pricing - consistent layout */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center mb-3">
          <span className="text-4xl font-bold text-blue-600">{price}</span>
          <span className="text-base text-gray-500 ml-2">per bottle</span>
        </div>
        
        <div className="space-y-2">
          <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg font-semibold text-sm">
            {savings}
          </div>
          {features.map((feature, index) => (
            <p key={index} className="text-xs text-gray-600">{feature}</p>
          ))}
        </div>
      </div>

      {/* CTA Button - FIXED to match original exactly */}
      <div className="mt-auto">
        <a 
          href={link}
          className={`block w-full ${buttonStyles[buttonStyle]} text-base transition-all duration-300 ${buttonStyle === 'primary' ? 'transform hover:scale-105' : ''} mb-4 group/button text-center no-underline`}
        >
          <span className="flex items-center justify-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
          </span>
        </a>

        {/* Payment Info - consistent layout */}
        <div className="text-center text-sm text-gray-500">
          <div className="flex justify-center mb-2">
            <img 
              src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp" 
              alt="Payment Methods" 
              className="h-5 object-contain"
            />
          </div>
          <p className="mb-1 text-xs">
            <span className="line-through text-gray-400">{originalPrice}</span>
            <span className="font-bold text-gray-900 ml-2">{finalPrice}</span>
          </p>
          <p className={`font-medium text-xs ${shippingColors[shippingColor]}`}>
            {shipping}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;