import React from 'react';
import { Truck, ArrowLeft, Globe, Clock, Package } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
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
            <div className="flex items-center space-x-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">BRUTE HORSE</h1>
                <p className="text-xs text-gray-500">PREMIUM SUPPLEMENTS</p>
              </div>
              <img 
                src="/cavalo vetorizada.png" 
                alt="BRUTE HORSE Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <Truck className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Shipping Policy</h1>
          </div>
          
          {/* Free Shipping Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">Free Worldwide Shipping</h2>
            </div>
            <p className="text-green-700 text-lg">
              Enjoy free shipping on all orders of 6 bottles or more. We deliver BRUTE HORSE supplements to customers worldwide with fast, secure, and reliable shipping.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Options & Costs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                  <Package className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h4 className="font-bold text-yellow-800 mb-2">6 Bottles</h4>
                  <p className="text-yellow-700 text-sm mb-2">180 Days Supply</p>
                  <p className="text-green-600 font-bold">FREE SHIPPING</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <Package className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-800 mb-2">3 Bottles</h4>
                  <p className="text-blue-700 text-sm mb-2">90 Days Supply</p>
                  <p className="text-green-600 font-bold">FREE SHIPPING</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                  <Package className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2">1 Bottle</h4>
                  <p className="text-gray-700 text-sm mb-2">30 Days Supply</p>
                  <p className="text-blue-600 font-bold">$9.95 SHIPPING</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Time</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Fast Processing</h3>
                </div>
                <ul className="text-blue-800 space-y-2">
                  <li>• Orders placed before 2 PM EST ship the same day</li>
                  <li>• Orders placed after 2 PM EST ship the next business day</li>
                  <li>• Weekend orders are processed on Monday</li>
                  <li>• Holiday orders may experience 1-2 day delays</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Times</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Region</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Delivery Time</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Tracking</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">United States</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">3-7 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600">✓ Available</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Canada</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">7-14 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600">✓ Available</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Europe</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">10-21 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600">✓ Available</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Australia/New Zealand</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">10-21 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600">✓ Available</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Rest of World</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">14-28 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600">✓ Available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Tracking</h2>
              <p className="text-gray-700 mb-4">
                Stay informed about your order every step of the way:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Order confirmation email sent immediately after purchase</li>
                <li>Shipping confirmation with tracking number when your order ships</li>
                <li>Real-time tracking updates via email and SMS (optional)</li>
                <li>Delivery confirmation when your package arrives</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Address Requirements</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-yellow-800 mb-3">Important Address Information</h4>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Provide complete and accurate shipping addresses</li>
                  <li>• Include apartment/suite numbers when applicable</li>
                  <li>• Ensure someone is available to receive the package</li>
                  <li>• We cannot ship to P.O. Boxes for international orders</li>
                  <li>• Address changes must be made within 1 hour of ordering</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Shipping</h2>
              <p className="text-gray-700 mb-4">
                We're proud to serve customers worldwide:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Free shipping available on qualifying orders</li>
                <li>Customs duties and taxes may apply (customer responsibility)</li>
                <li>Some countries may have import restrictions on supplements</li>
                <li>Delivery times may vary due to customs processing</li>
                <li>We provide all necessary customs documentation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Packaging & Discretion</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">Secure Packaging</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Protective bubble wrap and padding</li>
                    <li>• Tamper-evident sealing</li>
                    <li>• Climate-controlled storage</li>
                    <li>• Damage-resistant boxes</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3">Discreet Shipping</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Plain, unmarked packaging</li>
                    <li>• No product names on exterior</li>
                    <li>• Generic return address</li>
                    <li>• Privacy protection guaranteed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Issues</h2>
              <p className="text-gray-700 mb-4">
                If you experience any delivery problems:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact us immediately if your package is lost or damaged</li>
                <li>We'll work with the carrier to resolve any issues</li>
                <li>Replacement orders are sent at no additional cost</li>
                <li>Refunds are available if replacement isn't possible</li>
                <li>Our customer service team is here to help</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Shipping Support</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Questions about your shipment? Our shipping team is ready to help:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> shipping@brutehorse.com<br />
                      <strong>Phone:</strong> 1-800-BRUTE-HORSE<br />
                      <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Shipping From:</strong><br />
                      BRUTE HORSE Fulfillment Center<br />
                      2045 S Carpenter St<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;