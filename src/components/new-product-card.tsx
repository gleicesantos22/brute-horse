import React from "react";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Triangle,
  ShoppingCart,
} from "lucide-react";

interface NewProductCardProps {
  badge: {
    text: string;
    color: "yellow" | "blue" | "gray" | "red";
  };
  title: string;
  subtitle: string;
  image: string;
  price: string;
  savings: string;
  features: string[];
  buttonText: string;
  buttonStyle: "primary" | "secondary";
  originalPrice: string;
  finalPrice: string;
  shipping: string;
  shippingColor: "green" | "blue";
  link: string;
  borderColor: "yellow" | "blue" | "gray" | "red";
}

const NewProductCard: React.FC<NewProductCardProps> = ({
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
  borderColor,
}) => {
  const badgeColors = {
    red: "bg-white",
    yellow: "bg-gray-200",
    blue: "bg-gray-200",
    gray: "bg-gray-200",
  };

  const buttonStyles = {
    primary:
      "bg-yellow-400 text-black font-bold py-4 px-6 border-2 border-yellow-300 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105",
    secondary:
      "bg-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-gray-900 hover:text-white border-2 border-gray-300 hover:border-transparent font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105",
  };

  const shippingColors = {
    green: "text-gray-900",
    blue: "text-gray-900",
    yellow: "text-yellow-400",
    red: "text-yellow-400",
    gray: "text-yellow-400",
  };

  const borderColors = {
    yellow: "hover:border-yellow-300 bg-white",
    red: "hover:border-yellow-300 bg-white",
    blue: "hover:border-blue-300 bg-white",
    gray: "hover:border-gray-300 bg-white",
  };

  const getHoverEffects = () => {
    switch (borderColor) {
      case "yellow":
        return "hover:-translate-y-3 hover:scale-[1.03] shadow-[0px_0px_6px_4px_rgba(215,215,215)]";
      case "red":
        return "hover:-translate-y-3 hover:scale-[1.03] shadow-[0px_0px_6px_4px_rgba(215,38,38)]";
      case "blue":
        return "hover:-translate-y-2 hover:scale-[1.02] shadow-[0px_0px_6px_4px_rgba(215,215,215)]";
      case "gray":
        return "hover:-translate-y-1 hover:scale-[1.01] shadow-[0px_0px_6px_4px_rgba(215,215,215)]";
      default:
        return "hover:-translate-y-2 hover:scale-[1.02] shadow-[0px_0px_6px_4px_rgba(215,215,215)]";
    }
  };

  const getCardBackground = () => {
    if (borderColor === "red") {
      return "bg-gradient-to-l from-red-900 via-red-600 to-red-900";
    }
    return "bg-white";
  };

  const getTextcolor = () => {
    if (borderColor === "red") {
      return "text-white";
    }
    return "text-black";
  };

  return (
    <div className="relative">
      {/* Main Card with Fixed Structure */}
      {/* {borderColor === "red" && (
        <div className="relative border h-8 flex items-center justify-center">
          <Triangle className="rotate-180 h-16 w-16 absolute -top-10 fill-red-600 text-red-600" />
          <Triangle className="rotate-180 h-16 w-16 absolute -top-16 text-white" />
        </div>
      )} */}
      <div
        className={`relative cursor-pointer rounded-2xl p-2 transition-all duration-500 ${getHoverEffects()} ${
          borderColors[borderColor]
        } group overflow-hidden`}
        // style={{ minHeight: "700px" }}
      >
        {/* Badge  */}
        <div className="">
          <div
            className={`${
              badgeColors[badge.color]
            } px-6 py-2 rounded-t-xl font-extrabold text-xl text-center transition-all duration-300 italic ${
              badge.color === "red" && "italic text-red-500"
            }`}
          >
            {badge.text}
            {borderColor === "yellow" && <span className="ml-2">🔥</span>}
          </div>
        </div>

        {/* Card Content with Fixed Layout */}
        <div
          style={
            borderColor === "red"
              ? {
                  backgroundColor: "transparent",
                  backgroundImage:
                    "radial-gradient(at center center, #D70000 0%, #190000 100%)",
                }
              : {}
          }
          className={`flex flex-col h-full rounded-b-xl py-6 px-0`}
        >
          {/* Header Section - Fixed Height */}
          <div className="text-center mb-6" style={{ minHeight: "120px" }}>
            <h3
              className={`text-5xl font-extrabold tracking-wide  mb-0 ${getTextcolor()}`}
            >
              {title}
            </h3>
            <p
              className={`text-md font-medium tracking-medium ${getTextcolor()}`}
            >
              {subtitle}
            </p>
          </div>

          {/* Product Image Section - Fixed Height */}
          <div className="flex justify-center mb-6">
            <div className="relative group/image flex items-center justify-center w-full h-full">
              <div
                className={`absolute inset-0 ${
                  borderColor === "yellow"
                    ? "bg-gradient-to-t from-yellow-100/30 to-transparent"
                    : "bg-gradient-to-t from-gray-100/20 to-transparent"
                } rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <img
                src={image}
                alt={`${title} Product`}
                className="relative max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
              />
              {borderColor === "yellow" && (
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
          </div>

          {/* Pricing Section - Fixed Height */}
          <div className="text-center mb-6" style={{ minHeight: "180px" }}>
            <div className="flex items-center justify-center mb-4">
              <span
                className={`text-4xl font-black text-gray-900 ${
                  borderColor === "red" && "text-white"
                }`}
              >
                $
              </span>
              <span
                className={`text-7xl font-black text-gray-900 ${
                  borderColor === "red" && "text-white"
                }`}
              >
                {price}
              </span>
              <span
                className={`text-xl leading-[1.2] text-gray-900 ml-2 font-extrabold w-[20px] ${
                  borderColor === "red" && "text-white "
                }`}
              >
                PER BOTTLE
              </span>
            </div>

            <div className="space-y-3">
              {/* <div
                className={`${
                  borderColor === "yellow"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600"
                    : "bg-green-500"
                } text-white px-4 py-3 rounded-xl font-bold text-base shadow-lg`}
              >
                {savings}
              </div> */}

              <div className="space-y-2 text-center">
                <div
                  key={"index"}
                  className={`border-b border-t py-2 flex items-center justify-center space-x-2 text-md text-center text-gray-700 ${
                    borderColor === "red" && "text-yellow-500"
                  }}`}
                >
                  <CheckCircle
                    className={`w-4 h-4  ${
                      borderColor === "red" ? "text-yellow-400" : "text-red-600"
                    }`}
                  />
                  <span
                    className={`font-medium ${
                      borderColor === "red" ? "text-yellow-400" : "text-red-600"
                    }`}
                  >
                    {savings}
                  </span>
                </div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`border-b border-gray-100 py-1 flex items-center justify-center space-x-2 text-md text-center text-gray-700 ${
                      borderColor === "red" && "text-white"
                    }}`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 text-green-500 ${
                        borderColor === "red" && "text-white"
                      }`}
                    />
                    <span
                      className={`font-medium ${
                        borderColor === "red" && "text-white font-medium"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button Section - Fixed Height */}
          <div className="mb-6 mx-3 italic" style={{ minHeight: "60px" }}>
            <a
              href={link}
              className={`block w-full ${buttonStyles[buttonStyle]} text-2xl transition-all duration-300 group/button text-center no-underline`}
            >
              <span className="flex items-center justify-center space-x-3">
                {/* <Shield className="w-5 h-5" /> */}
                <ShoppingCart className="w-8 h-8" />
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-2" />
              </span>
            </a>
          </div>

          {/* Payment Info Section - Fixed Height */}
          <div className="text-center mt-auto" style={{ minHeight: "160px" }}>
            <div className="flex justify-center mb-4">
              <div className="">
                <img
                  src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp"
                  alt="Payment Methods"
                  className="h-6 object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <span
                  className={`line-through decoration-red-600  text-lg font-medium ${
                    borderColor === "red" ? "text-gray-400" : "text-gray-400"
                  }`}
                >
                  {originalPrice}
                </span>
                <span
                  className={`font-black text-gray-900 text-2xl ${
                    borderColor === "red" && "text-white"
                  }`}
                >
                  {finalPrice}
                </span>
              </div>

              <div
                className={`inline-block px-4 py-2 rounded-full font-bold text-lg ${shippingColors[shippingColor]}`}
              >
                {shipping}
              </div>
            </div>

            {borderColor === "yellow" && (
              <div className="mt-4 text-xs text-gray-600 bg-yellow-50 px-3 py-2 rounded-lg border border-yellow-200">
                <span className="font-semibold">
                  🎯 92% of customers choose this package
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
