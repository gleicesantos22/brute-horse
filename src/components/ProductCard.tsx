import React from 'react';
import { Shield, ArrowRight, Star, CheckCircle } from 'lucide-react';

interface ProductCardProps {
  badge: {
    text: string;
    color: 'red' | 'blue' | 'gray';
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
  borderColor: 'red' | 'blue' | 'gray';
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
    red: 'bg-red-600 text-white',
    blue: 'bg-blue-600 text-white',
    gray: 'bg-gray-600 text-white'
  };

  const cardStyles = {
    red: 'bg-gradient-to-b from-red-800 to-red-900 text-white border-red-500',
    blue: 'bg-white text-gray-900 border-gray-300',
    gray: 'bg-white text-gray-900 border-gray-300'
  };

  const buttonStyles = {
    primary: borderColor === 'red' 
      ? 'bg-yellow-500 hover:bg-yellow-600 text-black font-bold' 
      : 'bg-gray-400 hover:bg-gray-500 text-white font-bold',
    secondary: 'bg-gray-400 hover:bg-gray-500 text-white font-bold'
  };

  const priceTextColor = borderColor === 'red' ? 'text-white' : 'text-black';
  const savingsTextColor = borderColor === 'red' ? 'text-white' : 'text-red-600';

  return (
    <div className="relative">
      {/* Badge positioned outside the card */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`${badgeColors[badge.color]} px-6 py-2 rounded-full font-bold text-sm`}>
          {badge.text}
        </div>
      </div>

      {/* Main Card */}
      <div className={`relative border-3 rounded-2xl p-6 pt-12 ${cardStyles[borderColor]} shadow-lg`} style={{ minHeight: '600px' }}>
        
        {/* Card Content */}
        <div className="flex flex-col h-full text-center">
          
          {/* Header Section */}
          <div className="mb-6">
            <h3 className={`text-3xl font-bold mb-2 ${priceTextColor}`}>{title}</h3>
            <p className={`text-sm ${borderColor === 'red' ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
          </div>

          {/* Product Image Section */}
          <div className="flex justify-center mb-6" style={{ height: '180px' }}>
            <img 
              src={image} 
              alt={`${title} Product`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Pricing Section */}
          <div className="mb-6">
            <div className="flex items-baseline justify-center mb-4">
              <span className={`text-lg ${priceTextColor}`}>$</span>
              <span className={`text-5xl font-black ${priceTextColor}`}>{price.replace('$', '')}</span>
              <span className={`text-sm ml-2 ${borderColor === 'red' ? 'text-gray-300' : 'text-gray-600'}`}>PER<br/>BOTTLE</span>
            </div>
            
            <div className="space-y-3">
              <div className={`${savingsTextColor} font-bold text-sm flex items-center justify-center`}>
                <CheckCircle className="w-4 h-4 mr-2" />
                {savings}
              </div>
              
              {features.map((feature, index) => (
                <div key={index} className={`${savingsTextColor} font-bold text-sm flex items-center justify-center`}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button Section */}
          <div className="mb-6 mt-auto">
            <a 
              href={link}
              className={`block w-full ${buttonStyles[buttonStyle]} py-4 px-6 rounded-lg text-lg transition-all duration-300 text-center no-underline`}
            >
              🛒 {buttonText}
            </a>
          </div>

          {/* Payment Info Section */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp" 
                alt="Payment Methods" 
                className="h-6 object-contain"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <span className={`line-through ${borderColor === 'red' ? 'text-gray-400' : 'text-gray-400'} text-sm`}>Total: {originalPrice}</span>
                <span className={`font-bold ${priceTextColor} text-xl`}>{finalPrice}</span>
              </div>
              
              <div className={`text-sm font-bold ${shippingColor === 'green' ? 'text-green-400' : 'text-blue-400'}`}>
                {shipping}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;