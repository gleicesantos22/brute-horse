import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
            <div className="flex items-center space-x-3">
              <img 
                src="/cavalo vetorizada.png" 
                alt="BRUTE HORSE Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">BRUTE HORSE</h1>
                <p className="text-xs text-gray-500">PREMIUM SUPPLEMENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024<br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the BRUTE HORSE website and purchasing our products, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Product Information</h2>
              <p className="text-gray-700 mb-4">
                BRUTE HORSE supplements are dietary supplements intended for healthy adults. Our products:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Are manufactured in FDA-approved facilities</li>
                <li>Contain natural ingredients that have been third-party tested</li>
                <li>Are not intended to diagnose, treat, cure, or prevent any disease</li>
                <li>Should be used as directed on the product label</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Age Restrictions</h2>
              <p className="text-gray-700 mb-4">
                Our products are intended for use by adults 18 years of age or older. By purchasing our products, you confirm that you are at least 18 years old.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Health Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                Before using BRUTE HORSE supplements:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Consult with your healthcare provider if you have any medical conditions</li>
                <li>Do not use if you are pregnant or nursing</li>
                <li>Discontinue use if you experience any adverse reactions</li>
                <li>Keep out of reach of children</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ordering and Payment</h2>
              <p className="text-gray-700 mb-4">
                When you place an order with us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be received before shipment</li>
                <li>We accept major credit cards and secure payment methods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-4">
                We offer worldwide shipping with the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Free shipping on orders of 6 bottles or more</li>
                <li>Orders are processed within 24-48 hours</li>
                <li>Delivery times vary by location</li>
                <li>Risk of loss passes to you upon delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 180-Day Money-Back Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We offer a 180-day money-back guarantee on all purchases. If you're not satisfied with your results, contact us within 180 days of purchase for a full refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                BRUTE HORSE shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>BRUTE HORSE</strong><br />
                  2045 S Carpenter St<br />
                  United States<br />
                  Email: support@brutehorse.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;