
import { Accordion } from "../components/ui/Accordian";
import { Triangle } from "lucide-react";
import ProductsSection from "../sections/ProductsSection";
import { useEffect } from "react";

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
    title: "¿Cuántos frascos de Brute Horse debo pedir?",
    description:
      "Para obtener los mejores resultados, usa Brute Horse de forma constante durante 3 a 6 meses. Por eso recomendamos pedir de 3 a 6 frascos para apoyar tu transformación completa.",
  },
  {
    title: "¿Es seguro usar Brute Horse todos los días?",
    description:
      "Sí. Brute Horse está elaborado con ingredientes naturales probados clínicamente y fabricado en una instalación registrada por la FDA y certificada por GMP en EE.UU. Es 100% seguro para el uso diario — miles de hombres ya lo están tomando sin efectos secundarios.",
  },
  {
    title: "¿Cuándo veré resultados después de tomar Brute Horse?",
    description:
      "La mayoría de los usuarios reporta mayor energía y resistencia durante las primeras semanas. Los beneficios completos suelen notarse tras 2 a 3 meses de uso constante.",
  },
  {
    title: "¿Cómo solicito un reembolso si no estoy satisfecho?",
    description:
      "Simplemente contacta con nuestro equipo de soporte dentro de los 180 días de tu compra y procesaremos tu reembolso — sin preguntas.",
  },
  {
    title: "¿Brute Horse es un pago único?",
    description:
      "Sí. No hay suscripciones ni cobros automáticos. Pagas una sola vez y recibes tus frascos sin cargos futuros.",
  },
];

const NewHomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/a6f73757-0725-4b35-9702-b00df5203fb9/players/686731ada8708dbefeb5541f/v4/player.js";
    script.async = true;

    const videoSection = document.getElementById("video-section");
    if (videoSection) {
      videoSection.appendChild(script);
    }

    const forceVideoExpansion = () => {
      const smartplayerElement = document.querySelector(
        "vturb-smartplayer"
      ) as HTMLElement | null;

      if (smartplayerElement) {
        // Force the main smartplayer element
        smartplayerElement.style.width = "100%";
        smartplayerElement.style.height = "100%";
        smartplayerElement.style.display = "block";
        smartplayerElement.style.margin = "0";
        smartplayerElement.style.padding = "0";
        smartplayerElement.style.border = "none";
        smartplayerElement.style.outline = "none";
        smartplayerElement.style.overflow = "hidden";
        smartplayerElement.style.backgroundColor = "transparent";

        // Find and expand video elements laterally
        const videoElements =
          smartplayerElement.querySelectorAll("video, iframe");
        videoElements.forEach((video) => {
          const el = video as HTMLElement;
          el.style.position = "absolute";
          el.style.top = "50%";
          el.style.left = "50%";
          el.style.width = "140%";
          el.style.height = "140%";
          el.style.minWidth = "140%";
          el.style.minHeight = "140%";
          el.style.transform = "translate(-50%, -50%)";
          el.style.objectFit = "cover";
          el.style.margin = "0";
          el.style.padding = "0";
          el.style.border = "none";
          el.style.outline = "none";
          el.style.backgroundColor = "transparent";
        });

        // Force wrapper containers to be positioned relative and remove red backgrounds
        const wrapperElements = smartplayerElement.querySelectorAll(
          ".smartplayer-video-wrap, .smartplayer-video, [class*='video'], [class*='player']"
        );
        wrapperElements.forEach((wrapper) => {
          const el = wrapper as HTMLElement;
          el.style.position = "relative";
          el.style.width = "100%";
          el.style.height = "100%";
          el.style.overflow = "hidden";
          el.style.margin = "0";
          el.style.padding = "0";
          el.style.paddingTop = "0";
          el.style.paddingBottom = "0";
          el.style.backgroundColor = "transparent";
          el.style.border = "none";
          el.style.outline = "none";
        });

        // Remove any red backgrounds from all child elements
        const allElements = smartplayerElement.querySelectorAll("*");
        allElements.forEach((element) => {
          const el = element as HTMLElement;
          const computedStyle = window.getComputedStyle(el);
          if (
            computedStyle.backgroundColor.includes("rgb(200, 55, 55)") ||
            computedStyle.backgroundColor.includes("#C83737") ||
            computedStyle.backgroundColor.includes("red")
          ) {
            el.style.backgroundColor = "transparent";
          }
        });
      }
    };

    setTimeout(forceVideoExpansion, 100);
    setTimeout(forceVideoExpansion, 500);
    setTimeout(forceVideoExpansion, 1000);
    setTimeout(forceVideoExpansion, 2000);
    setTimeout(forceVideoExpansion, 3000);

    return () => {
      const existingScript = document.querySelector(
        `script[src="${script.src}"]`
      );
      if (existingScript && videoSection?.contains(existingScript)) {
        videoSection.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    const VIDEO_KEY = "686731ada8708dbefeb5541f-resume"; // Your video progress key
    const TRIGGER_TIME = 2126; // 35 minutes 26 seconds
    const CHECK_INTERVAL = 1000; // Check every second

    const hiddenSections = document.getElementsByClassName(
      "hidden-section"
    ) as HTMLCollectionOf<HTMLElement>;

    let hasShown = false;

    const showHiddenSections = () => {
      Array.from(hiddenSections).forEach((el) => {
        el.style.display = "block";
      });
    };

    const interval = setInterval(() => {
      const resumeValue = localStorage.getItem(VIDEO_KEY);
      if (!resumeValue) return;

      const currentTime = parseFloat(resumeValue);
      if (!isNaN(currentTime) && currentTime >= TRIGGER_TIME && !hasShown) {
        hasShown = true;
        showHiddenSections();
        clearInterval(interval); // Stop checking
      }
    }, CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="py-10 px-4 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-white font-serif font-bold text-[1.6em] my-[10px]">
            El doctor más caliente del porno revela:
          </h3>
          <h1 className="text-white font-serif font-bold text-[2.5em] my-[10px] inline leading-tight">
            El truco del caballo despierta
            <span className="text-[#E02222]">
              "erecciones animales en 6h"
            </span>{" "}
            is All y ya salvó a más de 27.000 hombres casados
          </h1>
        </div>
      </div>
      <section id="video-section"></section>

      {/* Products Section */}
      <div className="hidden-section hidden" >
        <div className="bg-black text-white py-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 mt-4 mb-2 mt-4">
            Últimas unidades de BRUTE HORSE disponibles
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
        className="hidden-section hidden bg-[url('/images/guarantee-bg.webp')] bg-cover bg-white bg-no-repeat"
      >
        <div className="bg-[rgb(255,255,255,0.6)] backdrop-opacity-10 h-full w-full">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col md:flex-row gap-4 items-center p-8 md:p-10 ">
              <img
                src="/images/money-back-guarantee.webp"
                className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-contain"
                alt="registered"
              />

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Estamos tan seguros de que Brute Horse reactivará tu
                  virilidad, que lo respaldamos con una garantía de satisfacción
                  del 100% por 60 días
                </h2>
                <div className="space-y-4 text-gray-800 text-base md:text-lg font-[400]">
                  <p>
                    Comienza a usar Brute Horse en cuanto lo recibas y, en pocos
                    días, podrías notar más energía, mayor resistencia y una
                    confianza masculina renovada. Con el tiempo, a medida que tu
                    cuerpo se adapta a la fórmula natural, podrías experimentar
                    erecciones más firmes, duraderas y una conexión íntima mucho
                    más intensa con tu pareja.
                  </p>

                  <p>
                    Esta es tu oportunidad de transformarte por completo — ya
                    sea para recuperar la potencia en las noches de pasión,
                    sentirte con energía durante los entrenamientos, o volver a
                    ser el hombre seguro que eras antes.
                  </p>

                  <p className="font-medium">
                    Si después de varias semanas o incluso meses no estás
                    completamente satisfecho con los resultados, te devolvemos
                    el dinero sin hacer preguntas. Con Brute Horse, no solo
                    estás recuperando tu virilidad — estás recuperando el
                    control de tu vida.
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
      <div className="hidden-section hidden">
        <div className="bg-black text-white py-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 mt-4">
            Últimas unidades de BRUTE HORSE disponibles
          </h2>

          <div className="relative h-8 flex items-center justify-center animate-bounce">
            <Triangle className="rotate-180 h-16 w-16 absolute top-4 fill-red-600 text-red-600" />
            <Triangle className="rotate-180 h-16 w-16 absolute -top-2 text-white" />
          </div>
        </div>
        <ProductsSection />
      </div>

      {/* FAQ Section */}
      <div className="hidden-section hidden bg-[url('/images/faq-bg.webp')] bg-cover bg-center ">
        <div className="py-10 px-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-100 mb-8 leading-tight tracking-tight">
            Preguntas Frecuentes
          </h1>
          <div className="max-w-6xl mx-auto">
            <Accordion items={faqQuestions} allowMultipleOpen={false} />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="hidden-section hidden">
        <div className="bg-black text-white py-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 mt-4">
            Últimas unidades de BRUTE HORSE disponibles
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
          Referencias Científicas
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
      {/* <footer className="bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
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

         
          <p className="text-center mb-6 italic">
            Statements on this website have not been evaluated by the Food and
            Drug Administration. Products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>

         
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

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6">
            <Link to={"/"}>
              For Product Support, please contact the vendor HERE.
            </Link>

            <Link to={"/"}>
              For Order Support, please contact ClickBank HERE.
            </Link>
          </div>

          <p className="text-center">
            © Brute Horce Research 2025. All Rights Reserved.
          </p>
        </div>
      </footer> */}
    </>
  );
};

export default NewHomePage;
