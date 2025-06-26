import React from 'react';
import { RotateCcw, ArrowLeft, MapPin, Clock, Shield } from 'lucide-react';

const ReturnPolicy: React.FC = () => {
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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center p-2">
                <img 
                  src="/cavalo vetorizada.png" 
                  alt="BRUTE HORSE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
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
            <RotateCcw className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Return & Exchange Policy</h1>
          </div>
          
          {/* 180-Day Guarantee Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">180-Day Money-Back Guarantee</h2>
            </div>
            <p className="text-green-700 text-lg">
              We stand behind our products with a comprehensive 180-day money-back guarantee. If you're not completely satisfied with your BRUTE HORSE supplements, we'll refund your purchase - no questions asked.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Return Your Order</h2>
              <p className="text-gray-700 mb-4">
                Returning your BRUTE HORSE supplements is simple and hassle-free:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                <li><strong>Contact Us:</strong> Email us at returns@brutehorse.com or call our customer service team</li>
                <li><strong>Get Your Return Authorization:</strong> We'll provide you with a return authorization number and instructions</li>
                <li><strong>Package Your Items:</strong> Include all bottles (even if empty) and your order information</li>
                <li><strong>Ship to Our Return Center:</strong> Use the address provided below</li>
                <li><strong>Receive Your Refund:</strong> We'll process your refund within 5-7 business days after receiving your return</li>
              </ol>
            </section>

            {/* Return Address Section */}
            <section className="mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Return Address</h3>
                </div>
                <div className="text-blue-800 font-medium">
                  <p className="text-lg">BRUTE HORSE Returns Department</p>
                  <p>10400 NW 21st STREET, SUITE 100</p>
                  <p>DORAL MIAMI FL 33172</p>
                  <p>United States</p>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <p className="text-yellow-800 text-sm font-medium">
                    <strong>Important:</strong> Please include your return authorization number on the package to ensure fast processing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">180 Days</h4>
                  <p className="text-gray-600 text-sm">From purchase date to initiate return</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">5-7 Days</h4>
                  <p className="text-gray-600 text-sm">Processing time after we receive your return</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <RotateCcw className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Full Refund</h4>
                  <p className="text-gray-600 text-sm">100% of your purchase price returned</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can Be Returned</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">✓ Accepted Returns</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Unopened bottles in original packaging</li>
                    <li>• Opened bottles (even if completely used)</li>
                    <li>• Empty bottles with original labels</li>
                    <li>• Damaged or defective products</li>
                    <li>• Orders within 180 days of purchase</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-3">✗ Not Accepted</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Returns after 180 days</li>
                    <li>• Products without original labels</li>
                    <li>• Items damaged by misuse</li>
                    <li>• Products purchased from unauthorized sellers</li>
                    <li>• Digital products or services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                Once we receive and process your return:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Refunds are processed to your original payment method</li>
                <li>Credit card refunds typically appear within 3-5 business days</li>
                <li>PayPal refunds are usually instant</li>
                <li>Bank transfers may take 5-10 business days</li>
                <li>You'll receive an email confirmation when your refund is processed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchanges</h2>
              <p className="text-gray-700 mb-4">
                While we don't offer direct exchanges, you can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Return your current order for a full refund</li>
                <li>Place a new order for the products you prefer</li>
                <li>Contact our customer service team for assistance with your new order</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Returns</h2>
              <p className="text-gray-700 mb-4">
                For international customers:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Same 180-day guarantee applies worldwide</li>
                <li>Return shipping costs are the customer's responsibility</li>
                <li>We recommend using a trackable shipping method</li>
                <li>Customs duties and taxes are non-refundable</li>
                <li>Contact us before shipping for specific instructions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Our Returns Team</h2>
              <p className="text-gray-700 mb-4">
                Our customer service team is here to help with your return:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> returns@brutehorse.com<br />
                      <strong>Phone:</strong> 1-800-BRUTE-HORSE<br />
                      <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Return Address:</strong><br />
                      BRUTE HORSE Returns Department<br />
                      10400 NW 21st STREET, SUITE 100<br />
                      DORAL MIAMI FL 33172
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Promise to You</h3>
              <p className="text-blue-800">
                At BRUTE HORSE, your satisfaction is our top priority. We're confident in the quality and effectiveness of our supplements, which is why we offer one of the most generous return policies in the industry. If you have any questions or concerns about your order, don't hesitate to reach out to our friendly customer service team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;