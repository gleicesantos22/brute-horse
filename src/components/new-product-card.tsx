import React from "react";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const badgeColors = {
    red: "bg-white",
    yellow: "bg-gray-200",
    blue: "bg-gray-200",
    gray: "bg-gray-200",
  };

  const buttonStyles = {
    primary:
      // "bg-yellow-400 text-black font-bold py-4 px-6 border-2 border-yellow-300 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105",
      "bg-yellow-400 font-montserrat text-md md:text-xl font-bold italic rounded-[0.5em] leading-none italic leading-none rounded-lg py-4 px-0 md:px-2 no-underline shadow-[inset_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in hover:bg-yellow-400 hover:shadow-[inset_0_4px_rgba(0,0,0,0.05)] hover:promo:bg-gradient-to-b hover:promo:from-[#fccd15] hover:promo:from-50% hover:promo:via-[#ffd814] hover:promo:via-51%",

    secondary:
      " text-xl font-[700] bg-gray-200 text-gray-900 font-montserrat text-md md:text-xl italic leading-none py-4 px-0 md:px-2 rounded-lg no-underline border-none shadow-[inset_0_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-inhover:bg-[var(--primary-color)] hover:shadow-[inset_0_4px_rgba(0,0,0,0.05)]",
    // "bg-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-gray-900 hover:text-white border-2 border-gray-300 hover:border-transparent font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105",
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
        return "hover:-translate-y-3 hover:scale-[1.03] shadow-[0px_0px_8px_4px_rgba(34,62,136,30%)]";
      case "red":
        return "hover:-translate-y-3 hover:scale-[1.03] shadow-[0px_0px_10px_4px_rgba(34,62,136)]";
      case "blue":
        return "hover:-translate-y-2 hover:scale-[1.02] shadow-[0px_0px_8px_4px_rgba(34,62,136,30%)]";
      case "gray":
        return "hover:-translate-y-1 hover:scale-[1.01] shadow-[0px_0px_8px_4px_rgba(34,62,136,30%)]";
      default:
        return "hover:-translate-y-2 hover:scale-[1.02] shadow-[0px_0px_8px_4px_rgba(34,62,136,30%)]";
    }
  };

  // const getCardBackground = () => {
  //   if (borderColor === "red") {
  //     return "bg-gradient-to-l from-red-900 via-red-600 to-red-900";
  //   }
  //   return "bg-white";
  // };

  const getTextcolor = () => {
    if (borderColor === "red") {
      return "text-white [text-shadow:0px_2px_rgba(0,0,0,0.64)]";
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
        className={`font-montserrat relative cursor-pointer rounded-2xl p-2 transition-all duration-500 ${getHoverEffects()} ${
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
              badge.color === "red"
                ? "italic text-[rgba(34,62,136)]"
                : "hidden md:block"
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
                  backgroundImage: isSmallDevice
                    ? "radial-gradient(at center left,rgb(34, 62, 136),rgb(34, 62, 136) 20%, #190000 100%)"
                    : "radial-gradient(at center top,rgb(34, 62, 136),rgb(34, 62, 136) 20%, #190000 100%)",
                }
              : {}
          }
          className="rounded-b-lg"
        >
          <div
            className={`flex flex-row md:flex-col h-full rounded-b-xl py-4 md:py-6 px-0`}
          >
            <div className="w-[50%] md:w-full">
              {/* Header Section - Fixed Height */}
              <div className="text-center mb-4">
                {borderColor !== "red" && (
                  <h4
                    className={
                      "block md:hidden text-red-600 font-extrabold italic text-2xl"
                    }
                  >
                    {badge.text}
                  </h4>
                )}
                <h3
                  className={`text-3xl md:text-4xl font-[800] tracking-wide mb-0 ${getTextcolor()}`}
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
                    className="relative max-h-full h-[200px] md:h-[300px] w-[300px] md:w-full object-contain transition-all duration-500"
                    style={{ filter: "drop-shadow(2px 2px 4px #d3d3d3)" }}
                  />
                  {borderColor === "yellow" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-[50%] md:w-full">
              {/* Pricing Section - Fixed Height */}
              <div className="text-start mb-2 md:mb-6">
                <div className="flex items-center justify-start md:justify-center mb-2 md:mb-4">
                  <span
                    className={`text-2xl md:text-4xl font-[800] text-gray-900 ${
                      borderColor === "red" &&
                      "text-white [text-shadow:0px_2px_rgba(0,0,0,0.64)] "
                    }`}
                  >
                    $
                  </span>
                  <span
                    className={`text-5xl md:text-7xl font-[800] text-gray-900 ${
                      borderColor === "red" &&
                      "text-white [text-shadow:0px_2px_rgba(0,0,0,0.64)]"
                    }`}
                  >
                    {price}
                  </span>
                  <span
                    className={`text-xl leading-[1.2] text-gray-900 ml-2 font-extrabold w-[20px] ${
                      borderColor === "red" &&
                      "text-white [text-shadow:0px_2px_rgba(0,0,0,0.64)]"
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
                      className={`py-2 flex items-center justify-center space-x-2 text-md text-center text-gray-700 
                    border-y border-dashed 
                    ${
                      borderColor === "red"
                        ? "text-[#fccd15] border-[rgba(255, 255, 255, 0.42)]"
                        : "border-[rgba(0,0,0,0.42)]"
                    }`}
                    >
                      <CheckCircle
                        className={`w-4 h-4  ${
                          borderColor === "red"
                            ? "text-[#fccd15]"
                            : "text-red-600"
                        }`}
                      />
                      <span
                        className={`font-[800] uppercase ${
                          borderColor === "red"
                            ? "text-[#fccd15] [text-shadow:0px_2px_rgba(0,0,0,0.64)]"
                            : "text-red-600"
                        }`}
                      >
                        {savings}
                      </span>
                    </div>
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`py-1 flex items-center justify-center space-x-2 text-md 
                      text-start md:text-center 
                      ${borderColor === "red" ? "text-white" : "text-gray-900"} 
                      border-b border-dashed ${
                        borderColor === "red"
                          ? "border-white/42"
                          : "border-black/0"
                      }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 text-gray-900 ${
                            borderColor === "red" && "text-white"
                          }`}
                        />
                        <span
                          className={`font-[800] ${
                            borderColor === "red" &&
                            "text-white font-medium [text-shadow:0px_2px_rgba(0,0,0,0.64)]"
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
              <div className="mb-3 mx-1 md:mx-3 italic">
                <a
                  href={link}
                  className={`hidden md:block w-full ${buttonStyles[buttonStyle]} transition-all duration-300 group/button text-center no-underline`}
                >
                  <span className="flex items-center justify-center space-x-1 md:space-x-3">
                    {/* <Shield className="w-5 h-5" /> */}
                    <ShoppingCart className="h-5 w-5 md:w-6 md:h-6" />
                    <span>{buttonText}</span>
                    {/* <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-2" /> */}
                  </span>
                </a>
              </div>

              {/* Payment Info Section - Fixed Height */}
              <div className="text-center mt-auto">
                <div className="flex justify-center mb-2">
                  <div className="">
                    <img
                      src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp"
                      alt="Payment Methods"
                      className="h-6 object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-0">
                  <div className="flex items-center justify-center space-x-2">
                    <span
                      className={`font-medium ${
                        borderColor === "red"
                          ? "text-white [text-shadow:0px_2px_rgba(0,0,0,0.64)]e"
                          : "text-gray-900"
                      }`}
                    >
                      {" "}
                      Total:
                    </span>
                    <span
                      className={`line-through decoration-red-600  text-md font-medium ${
                        borderColor === "red"
                          ? "text-gray-100 [text-shadow:0px_2px_rgba(0,0,0,0.64)]"
                          : "text-gray-500"
                      }`}
                    >
                      {originalPrice}
                    </span>
                    <span
                      className={`font-[800] text-gray-900 text-lg ${
                        borderColor === "red" &&
                        "text-white [text-shadow:0px_2px_rgba(0,0,0,0.64)]"
                      }`}
                    >
                      {finalPrice}
                    </span>
                  </div>

                  <div
                    className={`inline-block px-4 py-0 rounded-full font-bold text-lg ${shippingColors[shippingColor]}`}
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

          {/* CTA Button Section on small Screen - Fixed Height */}
          <div className="block md:hidden mb-3 italic w-full p-2 py-4">
            <a
              href={link}
              className={`block w-full ${buttonStyles[buttonStyle]} text-xl transition-all duration-300 group/button text-center no-underline`}
            >
              <span className="flex items-center justify-center space-x-1 md:space-x-3">
                {/* <Shield className="w-5 h-5" /> */}
                <ShoppingCart className="h-5 w-5 md:w-6 md:h-6" />
                <span>{buttonText}</span>
                {/* <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-2" /> */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
