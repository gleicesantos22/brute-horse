import { Link } from "react-router-dom";
import { Accordion } from "../components/ui/Accordian";
import { Triangle } from "lucide-react";
import ProductsSection from "../sections/ProductsSection";

const researchCitations = [
  {
    id: 1,
    title:
      "Oral L-Citrulline Supplementation Improves Erection Hardness in Men with Mild Erectile Dysfunction",
    author: "Stanislavov R, et al.",
    journal: "Urology, 2011",
  },
  {
    id: 2,
    title:
      "L-Citrulline and Erectile Dysfunction: A Systematic Review of Its Potential Benefits",
    author: "Cormio L, et al.",
    journal: "International Journal of Impotence Research, 2015",
  },
  {
    id: 3,
    title:
      "The Efficacy of Acetyl-L-Carnitine in Combination with Sildenafil for Erectile Dysfunction After Radical Prostatectomy",
    author: "Cavallini G, et al.",
    journal: "BJU International, 2005",
  },
  {
    id: 4,
    title:
      "L-Carnitine and Erectile Function: Mechanisms of Action in Vascular Health",
    author: "Lenzi A, et al.",
    journal: "Translational Andrology and Urology, 2016",
  },
  {
    id: 5,
    title:
      "Efficacy and Safety of Pycnogenol and L-Arginine in Improving Erectile Function",
    author: "Stanislavov R, et al.",
    journal: "Journal of Sex & Marital Therapy, 2003",
  },
  {
    id: 6,
    title:
      "Pine Bark Extract and Male Fertility: Evidence for Improved Sperm Function and Circulation",
    author: "Roseff SJ",
    journal: "Journal of Reproductive Medicine, 2002",
  },
  {
    id: 7,
    title:
      "The Role of Mucuna Pruriens in Improving Sexual Function and Reducing Stress",
    author: "Gupta A, et al.",
    journal: "Fertility and Sterility, 2010",
  },
  {
    id: 8,
    title:
      "Velvet Bean (Mucuna Pruriens) and Testosterone: Effects on Sexual Behavior in Men",
    author: "Shukla KK, et al.",
    journal: "Andrologia, 2012",
  },
  {
    id: 9,
    title:
      "Maca Root as a Natural Aphrodisiac: Effects on Sexual Desire in Healthy Men",
    author: "Gonzales GF, et al.",
    journal: "Andrologia, 2002",
  },
  {
    id: 10,
    title:
      "The Efficacy of Maca Root in Alleviating Sexual Dysfunction Induced by Antidepressants",
    author: "Dording CM, et al.",
    journal: "CNS Neuroscience & Therapeutics, 2008",
  },
  {
    id: 11,
    title:
      "Effects of Grape Polyphenols on Vascular Health and Erectile Dysfunction",
    author: "Georgiev V, et al.",
    journal: "Molecular Nutrition & Food Research, 2014",
  },
  {
    id: 12,
    title:
      "Antioxidant Properties of Grape Seed Extract and Its Role in Improving Blood Flow",
    author: "Bagchi D, et al.",
    journal: "Toxicology, 2002",
  },
  {
    id: 13,
    title:
      "Saffron for Erectile Dysfunction: A Randomized, Double-Blind, Placebo-Controlled Study",
    author: "Hosseinzadeh H, et al.",
    journal: "Phytomedicine, 2009",
  },
  {
    id: 14,
    title:
      "Saffron Extract and Sexual Function in Men with Erectile Dysfunction",
    author: "Kashani L, et al.",
    journal: "Human Psychopharmacology, 2013",
  },
  {
    id: 15,
    title:
      "Zinc Supplementation and Its Effect on Sexual Performance and Testosterone Levels",
    author: "Prasad AS",
    journal: "Nutrition, 1996",
  },
  {
    id: 16,
    title: "Zinc Deficiency and Erectile Dysfunction: Mechanisms and Solutions",
    author: "Fallah A, et al.",
    journal: "Journal of Reproductive Biology, 2018",
  },
  {
    id: 17,
    title:
      "Vitamin B3 (Niacin) Improves Erectile Function in Men with Dyslipidemia",
    author: "Ng CF, et al.",
    journal: "Journal of Sexual Medicine, 2011",
  },
  {
    id: 18,
    title:
      "The Role of Niacin in Enhancing Penile Blood Flow and Reducing Erectile Dysfunction Symptoms",
    author: "Sato K, et al.",
    journal: "Vascular Health and Risk Management, 2008",
  },
  {
    id: 19,
    title:
      "Natural Therapies for Erectile Dysfunction: A Review of Clinical Evidence",
    author: "Shamloul R, et al.",
    journal: "Journal of Sexual Medicine, 2013",
  },
  {
    id: 20,
    title:
      "The Impact of Antioxidants on Male Reproductive Health: Focus on Grape Seed Extract",
    author: "Elia J, et al.",
    journal: "Antioxidants, 2019",
  },
];

const faqQuestions = [
  {
    title: "How Many Bottles of Brute Horse Should I Order?",
    description:
      "For best results, use Brute Horse consistently for 3 to 6 months. That’s why we recommend ordering 3 to 6 bottles to support your full transformation.",
  },
  {
    title: "Is Brute Horse Safe to Use Daily?",
    description:
      "Yes. Brute Horse is made from natural, clinically tested ingredients and manufactured in a GMP-certified, FDA-registered facility in the USA.",
  },
  {
    title: "When Will I See Results After Taking Brute Horse?",
    description:
      "Most users report feeling increased energy and stamina within the first few weeks. Full benefits are typically seen after consistent use over 2–3 months.",
  },
  {
    title: "How Do I Get a Refund if I’m Not Satisfied?",
    description:
      "Simply contact our support team within 180 days of your purchase and we’ll process your refund—no questions asked.",
  },
  {
    title: "Is Brute Horse a One-Time Payment?",
    description:
      "Yes. There are no subscriptions or auto-billing. You pay once and receive your bottles with no future charges.",
  },
];

const NewHomePage = () => {
  
  return (
    <>
      {/* Products Section */}
      <div>
        <div className="bg-black text-white py-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 mt-4 mb-2 mt-4">
            Claim Your Discounted Brute Horse
            <br />
            Now While Supplies Last!
          </h2>

          <div className="relative h-8 flex items-center justify-center animate-bounce">
            <Triangle className="rotate-180 h-16 w-16 absolute top-4 fill-red-600 text-red-600" />
            <Triangle className="rotate-180 h-16 w-16 absolute -top-2 text-white" />
          </div>
        </div>
        <ProductsSection />
      </div>
      {/* Satisfaction gaurantee */}
      <div
        // style={{
        //   boxShadow:
        //     "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        // }}
        className="bg-[url('/images/guarantee-bg.webp')] bg-cover bg-white bg-no-repeat"
      >
        <div className="bg-[rgb(255,255,255,0.3)] backdrop-opacity-10 h-full w-full">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col md:flex-row gap-4 items-center p-8 md:p-10 ">
              <img
                src="/images/money-back-guarantee.webp"
                className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-contain"
                alt="registered"
              />

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  We're so confident Brute Horse will reignite your vitality, we
                  back it with a{" "}
                  <span className="text-blue-800 underline font-extrabold uppercase tracking-auto">
                    100% satisfaction guarantee
                  </span>{" "}
                  for 60 days.
                </h2>
                <div className="space-y-4 text-gray-900 text-base md:text-lg font-[400]">
                  <p>
                    Start using Brute Horse as soon as it arrives, and within
                    days you might notice enhanced energy, improved stamina, and
                    a stronger sense of confidence. Over time, as your body
                    adjusts to the natural formula, you could experience firmer,
                    more consistent performance and a renewed sense of intimacy
                    in your relationships.
                  </p>

                  <p>
                    This is your opportunity to track your
                    transformation—whether it's regaining the energy for date
                    nights, feeling revitalized during your workouts, or simply
                    rediscovering the confidence you thought was gone.
                  </p>

                  <p className="font-medium">
                    If after several weeks or even months you're not completely
                    satisfied with your results, we'll refund your money in
                    full—no questions asked. With Brute Horse, you're not just
                    taking control of your vitality—you're taking control of
                    your life.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 !mt-12 md:!mt-20">
                    <img
                      src="/images/gmp-certified.webp"
                      className="h-full w-full object-contain"
                      alt="gmp-certified"
                    />
                    <img
                      src="/images/natural-formula.webp"
                      className="h-full w-full object-contain"
                      alt="natural-formula"
                    />
                    <img
                      src="/images/made-in-usa.webp"
                      className="h-full w-full object-contain"
                      alt="made-in-usa"
                    />
                    <img
                      src="/images/fda-registered-facility.webp"
                      className="h-full w-full object-contain"
                      alt="fda-registered-facility"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Section */}
      <div>
        <div className="bg-black text-white py-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 mt-4">
            Claim Your Discounted Brute Horse
            <br />
            Now While Supplies Last!
          </h2>

          <div className="relative h-8 flex items-center justify-center animate-bounce">
            <Triangle className="rotate-180 h-16 w-16 absolute top-4 fill-red-600 text-red-600" />
            <Triangle className="rotate-180 h-16 w-16 absolute -top-2 text-white" />
          </div>
        </div>
        <ProductsSection />
      </div>

      {/* FAQ Section */}
      <div className="bg-[url('/images/faq-bg.webp')] bg-cover bg-center ">
        <div className="py-10 px-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-100 mb-8 leading-tight tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="max-w-6xl mx-auto">
            <Accordion items={faqQuestions} allowMultipleOpen={false} />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div>
        <div className="bg-black text-white py-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 mt-4">
            Claim Your Discounted Brute Horse
            <br />
            Now While Supplies Last!
          </h2>

          <div className="relative h-8 flex items-center justify-center animate-bounce">
            <Triangle className="rotate-180 h-16 w-16 absolute top-4 fill-red-600 text-red-600" />
            <Triangle className="rotate-180 h-16 w-16 absolute -top-2 text-white" />
          </div>
        </div>
        <ProductsSection />
      </div>

      {/* // Scientific refrence section  */}
      <div
        className="py-20 bg-gray-100"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-8 leading-tight tracking-tight">
          Scientific References
        </h1>
        <div className="md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 p-6 md:px-12">
          <ul className="text-sm font-normal space-y-4">
            {researchCitations?.slice(0, 10).map(
              (
                element: {
                  id: number;
                  title: string;
                  author: string;
                  journal: string;
                },
                index: number
              ) => (
                <li
                  key={index + 1}
                  className="flex gap-3 transition-colors duration-200"
                >
                  <span className="flex-shrink-0 font-medium text-gray-500">
                    {index + 1}.
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-700 mb-1 leading-snug">
                      {element?.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium text-gray-600">
                        {element?.author}
                      </span>{" "}
                      • <span className="italic">{element?.journal}</span>
                    </p>
                  </div>
                </li>
              )
            )}
          </ul>

          <ul className="text-sm font-normal space-y-4">
            {researchCitations?.slice(10, 20).map(
              (
                element: {
                  id: number;
                  title: string;
                  author: string;
                  journal: string;
                },
                index: number
              ) => (
                <li
                  key={index + 10}
                  className="flex gap-3 transition-colors duration-200"
                >
                  <span className="flex-shrink-0 font-medium text-gray-500">
                    {index + 11}.
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-700 mb-1 leading-snug">
                      {element?.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium text-gray-600">
                        {element?.author}
                      </span>{" "}
                      • <span className="italic">{element?.journal}</span>
                    </p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Footer Section  */}
      <footer className="bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            <Link to="/" className="font-bold hover:text-red-400">
              Contact
            </Link>

            <Link to="/" className="font-bold hover:text-red-400">
              Terms
            </Link>

            <Link to="/" className="font-bold hover:text-red-400">
              Privacy
            </Link>

            <Link to="/" className="font-bold hover:text-red-400">
              Return Policy
            </Link>

            <Link to="/" className="font-bold hover:text-red-400">
              Shipping
            </Link>

            <Link to="/" className="font-bold hover:text-red-400">
              Disclaimer
            </Link>

            <Link to="/" className="font-bold hover:text-red-400">
              References
            </Link>
          </div>

          {/* FDA Disclaimer */}
          <p className="text-center mb-6 italic">
            Statements on this website have not been evaluated by the Food and
            Drug Administration. Products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>

          {/* Main Disclaimer */}
          <div className="space-y-4 mb-6 text-sm text-center">
            <p>
              The website's content and the product for sale is based upon the
              author's opinion and is provided solely on an 'AS IS' and 'AS
              AVAILABLE' basis. You should do your own research and confirm the
              information with other sources when searching for information
              regarding health issues and always review the information
              carefully with your professional health care provider before using
              any of the products presented on this website and/or in the
              product store here. Neither ClickBank nor the author may engage in
              rendering medical or similar professional services or advice via
              this website or in the product, and the information provided is
              not intended to replace medical advice offered by a physician or
              other licensed healthcare provider. You should not construe
              ClickBank's sale of this product as an endorsement by ClickBank of
              the views expressed herein, or any warranty or guarantee of any
              strategy, recommendation, treatment, action, or application of
              advice made by the author of the product.
            </p>

            <p>
              Some names and personal identifying information on this site have
              been changed to protect the privacy of individuals.
            </p>
            <p>
              Testimonials, case studies, and examples found on this page are
              results that have been forwarded to us by users of Brute Horce and
              related products are not intended to represent or guarantee that
              anyone will achieve the same or similar results.
            </p>
          </div>

          {/* ClickBank Notice */}
          <div className="mb-6 text-sm">
            <p>
              ClickBank is the retailer of products on this site. CLICKBANK® is
              a registered trademark of Click Sales Inc., a Delaware corporation
              located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709,
              USA and used by permission. ClickBank's role as retailer does not
              constitute an endorsement, approval or review of these products or
              any claim, statement or opinion used in promotion of these
              products.
            </p>
          </div>

          {/* Support Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6">
            <Link to={"/"}>
              For Product Support, please contact the vendor HERE.
            </Link>

            <Link to={"/"}>
              For Order Support, please contact ClickBank HERE.
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center">
            © Brute Horce Research 2025. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default NewHomePage;
