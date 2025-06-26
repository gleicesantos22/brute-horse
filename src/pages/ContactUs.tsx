import React from 'react';
import { Mail, Phone, MapPin, ArrowLeft, Clock, MessageCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            {/* Logo Section - Left Side */}
            <div className="flex items-center space-x-4">
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

            {/* Back Button - Right Side */}
            <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to our customer service team for any questions about your order, our products, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                    <p className="text-gray-600 mb-2">Get help with orders, products, and general inquiries</p>
                    <a href="mailto:support@brutehorse.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      support@brutehorse.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our customer service team</p>
                    <a href="tel:1-800-BRUTE-HORSE" className="text-green-600 hover:text-green-700 font-medium">
                      1-800-BRUTE-HORSE
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mailing Address</h3>
                    <p className="text-gray-600 mb-2">Send us mail or returns to our headquarters</p>
                    <address className="text-gray-700 not-italic">
                      BRUTE HORSE<br />
                      2045 S Carpenter St<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 mb-2">When our team is available to help</p>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department-Specific Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Order Support</h4>
                  <p className="text-blue-700 text-sm mb-2">Questions about your order</p>
                  <a href="mailto:orders@brutehorse.com" className="text-blue-600 text-sm font-medium">
                    orders@brutehorse.com
                  </a>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-bold text-green-900 mb-2">Returns & Refunds</h4>
                  <p className="text-green-700 text-sm mb-2">Return and refund requests</p>
                  <a href="mailto:returns@brutehorse.com" className="text-green-600 text-sm font-medium">
                    returns@brutehorse.com
                  </a>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <h4 className="font-bold text-purple-900 mb-2">Product Information</h4>
                  <p className="text-purple-700 text-sm mb-2">Questions about our supplements</p>
                  <a href="mailto:products@brutehorse.com" className="text-purple-600 text-sm font-medium">
                    products@brutehorse.com
                  </a>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <h4 className="font-bold text-yellow-900 mb-2">Shipping Support</h4>
                  <p className="text-yellow-700 text-sm mb-2">Delivery and shipping issues</p>
                  <a href="mailto:shipping@brutehorse.com" className="text-yellow-600 text-sm font-medium">
                    shipping@brutehorse.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number (if applicable)
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="BH-123456"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="order-inquiry">Order Inquiry</option>
                  <option value="product-question">Product Question</option>
                  <option value="return-refund">Return/Refund</option>
                  <option value="shipping-issue">Shipping Issue</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your question or concern in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our phone support line.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">How long does shipping take?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Domestic orders typically arrive within 3-7 business days. International orders take 10-21 business days depending on location.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-2">What is your return policy?</h4>
              <p className="text-gray-600 text-sm mb-4">
                We offer a 180-day money-back guarantee on all purchases. You can return products even if they're completely used.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-2">Are your products safe?</h4>
              <p className="text-gray-600 text-sm">
                Yes, all BRUTE HORSE supplements are manufactured in FDA-approved facilities and are third-party tested for purity and potency.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-2">How do I track my order?</h4>
              <p className="text-gray-600 text-sm mb-4">
                You'll receive a tracking number via email once your order ships. You can use this to track your package on our website or the carrier's site.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-2">Can I change my order after placing it?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Order changes must be made within 1 hour of placing your order. Contact us immediately if you need to make changes.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-2">Do you ship internationally?</h4>
              <p className="text-gray-600 text-sm">
                Yes, we ship worldwide! Free shipping is available on orders of 6 bottles or more to most countries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;