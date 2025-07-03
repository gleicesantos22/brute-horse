// import "bootstrap-icons/font/bootstrap-icons.css";

const productCards = [
  {
    badge: { text: "BASIC", color: "blue" as const },
    title: "3 Bottles",
    subtitle: "90 days supply",
    // image: "https://i.imgur.com/gTcOoJ7.png",
    image: "/images/small-3-v2.PNG",
    price: "69",
    savings: "YOU SAVE $300",
    features: ["180 Days Guarantee"],
    cardStyle: "secondary",
    buttonText: "BUY NOW",
    buttonStyle: "secondary" as const,
    originalPrice: "$300",
    finalPrice: "$207",
    shipping: (
      <>
        +&nbsp;
        <span className="text-[var(--custom-fourth-color)]">FREE</span>
        SHIPPING
      </>
    ),
    shippingColor: "green" as const,
    link: "https://lucas-digitalbr.mycartpanda.com/checkout/188274332:1",
    borderColor: "blue" as const,
    className: "order-2 lg:order-3",
  },
  {
    badge: { text: "BEST VALUE!", color: "red" as const },
    title: "6 Bottles",
    subtitle: "180 days supply",
    // image: "https://i.postimg.cc/zH3WNjBw/6BOTTLE.png",
    image: "/images/small-6-v2.PNG",
    price: "49",
    savings: "YOU SAVE $600",
    features: ["Biggest Discount", "180 Days Guarantee"],
    cardStyle: "primary",
    buttonText: "BUY NOW",
    buttonStyle: "primary" as const,
    originalPrice: "$594",
    finalPrice: "$294",
    shipping: (
      <b className="text-[var(--custom-secondary-color)] text-[16.2px] font-extrabold">
        +&nbsp;FREE SHIPPING
      </b>
    ),
    shippingColor: "yellow" as const,
    link: "https://lucas-digitalbr.mycartpanda.com/checkout/188274365:1",
    borderColor: "red" as const,
    className: "order-1 lg:order-2 md:-translate-y-8",
  },
  {
    badge: { text: "MOST POPULAR", color: "gray" as const },
    title: "1 Bottle",
    subtitle: "30 days supply",
    // image: "https://i.imgur.com/ojDbZ0n.png",
    image: "/images/small-bottle.png",
    price: "79",
    savings: "YOU SAVE $240",
    features: ["180 Days Guarantee"],
    cardStyle: "secondary",
    buttonText: "BUY NOW",
    buttonStyle: "secondary" as const,
    originalPrice: "$198",
    finalPrice: "$79",
    shipping: "+9.95 SHIPPING",
    shippingColor: "blue" as const,
    link: "https://lucas-digitalbr.mycartpanda.com/checkout/188271611:1",
    borderColor: "gray" as const,
    className: "order-3 lg:order-1",
  },
];

const ProductsSection = () => {
  return (
    <section className="mt-28 py-4 font-[Montserrat] max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productCards.map((card, index) => {
            return card.cardStyle === "primary" ? (
              <div
                key={index}
                className={`${card?.className ? card?.className : ""}`}
              >
                <a className="p-2 bg-white block rounded-2xl overflow-hidden text-white border-6 border-white drop-shadow-[0_0_2.5px_blue] shadow-[0_0_10px_#23418F] [text-shadow:0px_2px_rgba(0,0,0,0.64)] str-ignore-click">
                  <div className="bg-[radial-gradient(var(--custom-primary-color),black)] w-full h-full rounded-b-xl rounded-t-xl">
                    {/* <!-- desktop --> */}
                    <div className="hidden lg:block text-center [text-shadow:0px_2px_rgba(0,0,0,0.6392156863)] pb-5">
                      <div className="rounded-t-xl py-1 text-xl text-[#23418F] italic [text-shadow:none] px-2 font-extrabold bg-white ">
                        {card?.badge?.text}
                      </div>
                      <div className="py-3 px-2 leading-none">
                        <p className="text-3xl font-bold block tracking-tighter uppercase">
                          {card?.title}
                        </p>
                        <p className="-mt-2 text-lg tracking-tighter uppercase">
                          {card?.subtitle}
                        </p>
                      </div>
                      <img
                        src={card?.image}
                        alt={card?.title}
                        className="max-h-[250px] mx-auto"
                      />
                      <div className="flex items-center justify-center gap-1 font-extrabold px-2">
                        <b className="text-7xl">
                          <sup className="text-3xl">$</sup>
                          {card?.price}
                        </b>
                        <b className="text-start text-lg tracking-tighter leading-none">
                          PER
                          <br />
                          BOTTLE
                        </b>
                      </div>
                      <div className="px-2 mb-2 text-black text-xs text-center">
                        <div className="py-[2.3px] px-2 rounded-lg text-[var(--custom-secondary-color)] border-t border-dashed border-[#ffffff6b]">
                          <span className="inline-flex leading-none  gap-1 font-bold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                            {card?.savings}
                          </span>
                        </div>
                        {card?.features.map((feature, index) => (
                          <div
                            className={`uppercase py-[2.3px] px-2 rounded-lg text-white border-t border-dashed border-[#ffffff6b] ${
                              index === card?.features?.length - 1
                                ? "border-y border-dashed border-[#0000006b]"
                                : ""
                            }`}
                          >
                            <span className="inline-flex leading-none  gap-1 font-bold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="px-2">
                        <a href={card?.link}>
                          <button className="w-full italic text-2xl font-bold mb-2 rounded-lg bg-gradient-to-t from-[var(--custom-secondary-color)] to-[#ffd814] border-2 border-[#a78a19] hover:bg-gradient-to-b hover:from-[var(--custom-secondary-color)] hover:to-[#ffd814]  text-slate-800 py-2 text-center [text-shadow:none]">
                            <div>
                              <i className="bi bi-cart-plus-fill"></i>&nbsp;{" "}
                              {card?.buttonText}
                            </div>
                          </button>
                        </a>
                      </div>
                      <img
                        src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp"
                        alt="Cards"
                        className="max-w-[220px] mx-auto mb-2"
                      />
                      <div className="px-2 text-base pb-3">
                        Total:{" "}
                        <s className="text-white decoration-red-500 decoration-2">
                          {card.originalPrice}
                        </s>{" "}
                        <b className="font-extrabold">{card.finalPrice}</b>
                        <br />
                        <b className="text-[16.2px] font-extrabold">
                          {card.shipping}
                        </b>
                      </div>
                    </div>

                    {/* <!-- mobile --> */}
                    <div className="lg:hidden text-center [text-shadow:0px_2px_rgba(0,0,0,0.6392156863)] rounded-b-2xl">
                      <div className="py-2 font-extrabold italic text-[var(--custom-primary-color)] text-xl bg-white [text-shadow:none]">
                        {card?.badge?.text}
                      </div>
                      <div className="grid grid-cols-2 gap-2 p-2">
                        <div>
                          <div className="h-6"></div>
                          <div className="mb-1 flex flex-col leading-4 [text-shadow:none] text-white">
                            <b className="mt-1 text-[18px]/[1] font-extrabold tracking-tight">
                              {card?.title}
                            </b>
                            <span className="mt-[1px] text-[14.4px]/[1] tracking-tighter">
                              {card?.subtitle}
                            </span>
                          </div>
                          <img
                            src={card?.image}
                            alt={card?.title}
                            className="min-w-[162.5px] max-h-[200px] mx-auto"
                          />
                        </div>
                        <div className="[text-shadow:none] flex flex-col">
                          <div className="flex items-center font-extrabold justify-center gap-1">
                            <b className="text-5xl">
                              <sup className="text-lg">$</sup>
                              {card?.price}
                            </b>
                            <b className="text-start text-[11.7px] tracking-tighter leading-none">
                              PER
                              <br />
                              BOTTLE
                            </b>
                          </div>
                          <div className="mb-2 text-[11px] text-black">
                            <div className="py-[2.3px] px-2 text-[var(--custom-secondary-color)] border-t border-dashed border-[#ffffff6b]">
                              <span className="inline-flex leading-none  gap-1 font-bold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                                {card.savings}
                              </span>
                            </div>

                            {card?.features.map((feature, index) => (
                              <div
                                className={`uppercase py-[2.3px] px-2 text-white border-t border-dashed border-[#ffffff6b] ${
                                  index === card?.features?.length - 1
                                    ? "border-y border-dashed border-[#0000006b]"
                                    : ""
                                }`}
                              >
                                <span className="inline-flex leading-none  gap-1 font-bold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="text-[14px] mt-auto mb-5">
                            Total:&nbsp;
                            <s className="text-white decoration-red-500 decoration-2">
                              {card.originalPrice}
                            </s>
                            &nbsp;
                            <b>{card.finalPrice}</b>
                            <br />
                            <b className="mt-5 text-[var(--custom-secondary-color)]">
                              {card.shipping}
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="px-2">
                        <a href={card?.link}>
                          <button className="w-full italic text-2xl font-bold mb-2 rounded-lg bg-gradient-to-t from-[var(--custom-secondary-color)] to-[#ffd814] border-2 border-[#a78a19] hover:bg-gradient-to-b hover:from-[var(--custom-secondary-color)] hover:to-[#ffd814]  text-slate-800 py-2 text-center [text-shadow:none]">
                            <div>
                              <i className="bi bi-cart-plus-fill"></i>&nbsp;
                              {card?.buttonText}
                            </div>
                          </button>
                        </a>
                      </div>
                      <div className="w-full h-1.5 relative"></div>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div className={`${card.className ? card.className : ""}`}>
                <a className="p-2 block rounded-2xl overflow-hidden text-white border-6 border-white shadow-[0_0_10px_#23418F] [text-shadow:0px_2px_rgba(0,0,0,0.64)] str-ignore-click">
                  <div className="w-full h-full rounded-b-xl">
                    {/* <!-- desktop --> */}
                    <div className="hidden lg:block text-center text-[var(--custom-third-color)] [text-shadow:0px_2px_rgba(0,0,0,0.6392156863)]">
                      <div className="rounded-t-xl py-1 text-xl bg-[var(--primary-color-light)]  italic [text-shadow:none] px-2 font-extrabold ">
                        {card?.badge.text}
                      </div>
                      <div className="py-3 px-2 leading-none [text-shadow:none]">
                        <p className="uppercase text-3xl font-bold block tracking-tighter">
                          {card?.title}
                        </p>
                        <p className="uppercase -mt-2 text-lg tracking-tighter">
                          {card?.subtitle}
                        </p>
                      </div>
                      <img
                        src={card?.image}
                        alt={card?.title}
                        className="max-h-[250px] mx-auto"
                      />

                      <div className="flex items-center justify-center font-extrabold gap-1 px-2 [text-shadow:none]">
                        <b className="text-7xl">
                          <sup className="text-3xl">$</sup>
                          {card.price}
                        </b>
                        <b className="text-start text-lg tracking-tighter leading-none">
                          PER
                          <br />
                          BOTTLE
                        </b>
                      </div>
                      <div className="px-2 mb-2 text-black text-xs text-center [text-shadow:none]">
                        <div className="py-[2.3px] px-2 text-[var(--custom-fourth-color)] border-t border-dashed border-[#0000006b]">
                          <span className="inline-flex leading-none  gap-1 font-extrabold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                            {card?.savings}
                          </span>
                        </div>

                        {card?.features.map((feature, index) => (
                          <div
                            key={index}
                            className="uppercase py-[2.3px] px-2 text-black border-y border-dashed border-[#0000006b]"
                          >
                            <span className="inline-flex leading-none gap-1 font-extrabold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="px-2">
                        <a href={card?.link}>
                          <button className="w-full italic text-2xl font-bold mb-2 rounded-lg bg-[#d4cfcf] shadow-[0_-4px_#0000000d_inset] hover:shadow-[0_4px_#0000000d_inset] text-slate-800 py-2 text-center [text-shadow:none]">
                            <div>
                              <i className="bi bi-cart-plus-fill"></i>&nbsp;
                              {card?.buttonText}
                            </div>
                          </button>
                        </a>
                      </div>
                      <img
                        src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/cards.webp"
                        alt="Cards"
                        className="max-w-[220px] mx-auto mb-2"
                      />
                      <div className="px-2 text-base pb-3 text-black [text-shadow:none]">
                        Total:{" "}
                        <s className=" decoration-red-500 decoration-2">
                          {card?.originalPrice}
                        </s>{" "}
                        <b className="font-extrabold">{card?.finalPrice}</b>
                        <br />
                        <b className="text-[16.2px] font-extrabold">
                          {card.shipping}
                        </b>
                      </div>
                    </div>

                    {/* <!-- mobile --> */}
                    <div className="lg:hidden text-center [text-shadow:0px_2px_rgba(0,0,0,0.6392156863)] rounded-b-2xl">
                      <div className="grid grid-cols-2 gap-2 p-2">
                        <div>
                          <div className="mb-1 flex flex-col leading-4 [text-shadow:none] text-black">
                            <strong className="text-[var(--custom-fourth-color)] text-[16.2px] font-extrabold italic">
                              {card?.badge?.text}
                            </strong>
                            <b className="mt-1 text-[18px]/[1] font-extrabold tracking-tight">
                              {card?.title}
                            </b>
                            <span className="mt-[1px] text-[14.4px]/[1] tracking-tighter">
                              {card?.subtitle}
                            </span>
                          </div>
                          <img
                            src={card?.image}
                            alt={card.title}
                            className="min-w-[162.5px] max-h-[200px] mx-auto"
                          />
                        </div>
                        <div className="[text-shadow:none] flex flex-col">
                          <div className="flex items-center font-extrabold justify-center gap-1 [text-shadow:none] text-[var(--custom-third-color)]">
                            <b className="text-5xl">
                              <sup className="text-lg">$</sup>
                              {card.price}
                            </b>
                            <b className="text-start text-[11.7px] tracking-tighter leading-none">
                              PER
                              <br />
                              BOTTLE
                            </b>
                          </div>
                          <div className="mb-2 text-[11px] text-[var(--custom-third-color)]">
                            <div className=" px-2 border-t border-dashed border-[#0000006b]">
                              <span className="inline-flex text-[var(--custom-fourth-color)] leading-none  gap-1 font-extrabold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                                {card?.savings}
                              </span>
                            </div>
                            {card?.features.map((feature, index) => (
                              <div
                                key={index}
                                className="uppercase px-1 border-y border-dashed border-[#0000006b]"
                              >
                                <span className="inline-flex leading-none gap-1 font-extrabold items-center before:content-['\f270'] before:font-['bootstrap-icons'] before:text-lg before:font-normal before:inline-block before:align-middle">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="text-[14px] mt-auto mb-5 text-[var(--custom-third-color)]">
                            Total:
                            <s className=" decoration-red-500 decoration-2">
                              {card.originalPrice}
                            </s>
                            <b className="font-extrabold">{card?.finalPrice}</b>
                            <br />
                            <b className="mt-5 uppercase font-extrabold">
                              {card?.shipping}
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="px-2">
                        <a href={card?.link}>
                          <button className="w-full italic text-2xl font-bold mb-2 rounded-lg bg-[#d4cfcf] shadow-[0_-4px_#0000000d_inset] hover:shadow-[0_4px_#0000000d_inset] text-slate-800 py-2 text-center [text-shadow:none]">
                            <div>
                              <i className="bi bi-cart-plus-fill"></i>&nbsp;
                              {card?.buttonText}
                            </div>
                          </button>
                        </a>
                      </div>
                      <div className="w-full h-1.5 relative"></div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
