import React from 'react';
import { DollarSign, ArrowLeft, CheckCircle, Clock, Shield } from 'lucide-react';

const RefundPolicy: React.FC = () => {
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
            <DollarSign className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
          </div>
          
          {/* Money-Back Guarantee Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">100% Money-Back Guarantee</h2>
            </div>
            <p className="text-green-700 text-lg">
              We're so confident in BRUTE HORSE that we offer a full 180-day money-back guarantee. If you're not completely satisfied with your results, we'll refund every penny - no questions asked.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Refund Promise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-900 mb-2">180 Days</h4>
                  <p className="text-blue-700 text-sm">Full refund period from purchase date</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-green-900 mb-2">No Questions</h4>
                  <p className="text-green-700 text-sm">Simple, hassle-free refund process</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-purple-900 mb-2">100% Refund</h4>
                  <p className="text-purple-700 text-sm">Full purchase price returned</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
              <p className="text-gray-700 mb-4">
                Getting your refund is simple and straightforward:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                <li><strong>Contact Our Team:</strong> Email refunds@brutehorse.com or call our customer service line</li>
                <li><strong>Provide Order Information:</strong> Share your order number and reason for refund (optional)</li>
                <li><strong>Return Your Products:</strong> Send back all bottles (even empty ones) to our return address</li>
                <li><strong>Receive Your Refund:</strong> We'll process your full refund within 5-7 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">✓ Eligible for Refund</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• All purchases within 180 days</li>
                    <li>• Opened and used products</li>
                    <li>• Empty bottles with original labels</li>
                    <li>• Unopened products in original packaging</li>
                    <li>• Damaged or defective items</li>
                    <li>• Unsatisfactory results</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-3">✗ Not Eligible</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Purchases over 180 days old</li>
                    <li>• Products without original labels</li>
                    <li>• Items from unauthorized sellers</li>
                    <li>• Digital products or services</li>
                    <li>• Shipping costs (except for defective items)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing Times</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-4">Timeline Breakdown</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium text-blue-900">Request Submitted</p>
                      <p className="text-blue-700 text-sm">Immediate confirmation email sent</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium text-blue-900">Return Received</p>
                      <p className="text-blue-700 text-sm">1-2 days for processing and verification</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium text-blue-900">Refund Processed</p>
                      <p className="text-blue-700 text-sm">3-5 business days to appear in your account</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Methods</h2>
              <p className="text-gray-700 mb-4">
                Refunds are processed using the same method as your original payment:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Payment Method</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Refund Time</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Credit Card</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">3-5 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Appears as credit on statement</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">PayPal</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Instant to 24 hours</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Fastest refund method</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Bank Transfer</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">5-10 business days</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">May vary by bank</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partial Refunds</h2>
              <p className="text-gray-700 mb-4">
                In certain situations, partial refunds may apply:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Products returned after 180 days (case-by-case basis)</li>
                <li>Items damaged due to misuse or negligence</li>
                <li>Products missing original packaging or labels</li>
                <li>Shipping costs for non-defective returns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Refunds</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-yellow-800 mb-3">Special Considerations</h4>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Same 180-day guarantee applies worldwide</li>
                  <li>• Currency conversion rates may affect final amount</li>
                  <li>• Bank fees may be deducted from refund</li>
                  <li>• Customs duties and taxes are non-refundable</li>
                  <li>• Processing may take additional 2-3 days</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Tracking</h2>
              <p className="text-gray-700 mb-4">
                Stay informed throughout the refund process:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Confirmation email when refund request is received</li>
                <li>Update when your return is processed</li>
                <li>Notification when refund is issued</li>
                <li>Reference number for tracking with your bank</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Refund Support</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Our refund specialists are here to help:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> refunds@brutehorse.com<br />
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

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Our Commitment</h3>
              <p className="text-green-800">
                At BRUTE HORSE, we stand behind our products 100%. Our generous refund policy reflects our confidence in the quality and effectiveness of our supplements. We want you to feel completely secure in your purchase, knowing that your satisfaction is guaranteed for a full 180 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;