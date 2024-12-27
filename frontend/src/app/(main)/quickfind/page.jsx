'use client';
import React from 'react';

export default function QuickFind() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-[#d7f7d4] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#0A3357]">QuickFind</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#59981A]">
            An innovative app designed to make life stress-free and connected
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0A3357]">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Lost & Found', description: 'Easily upload and recover lost items.', icon: '🔍' },
              { title: 'Second-hand Marketplace', description: 'Buy or sell second-hand items.', icon: '💰' },
              { title: 'Community Building', description: 'Connect with others on shared interests.', icon: '🤝' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3357]">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f7fafc] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0A3357] mb-8">Why Choose QuickFind?</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            QuickFind simplifies your everyday challenges, helping you stay connected with your
            community while reducing stress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              'Find lost items faster.',
              'Build a stronger community.',
              'Hassle-free second-hand trading.',
              'Save time and effort.',
              'Intuitive user interface.',
              'Secure and reliable platform.',
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition"
              >
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      //need to add actual data
      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0A3357]">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                feedback: 'Recover lost iphone easily',
                avatar: '/lostFound/lf1.jpg',
              },
              {
                feedback: 'Found earpods within 48 hours',
                avatar: '/lostFound/lf2.jpg',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition"
              >
                <img
                  src={testimonial.avatar}
                  alt="error"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 mt-2 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#d7f7d4] py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A3357] mb-4">Get Started with QuickFind</h2>
          <p className="text-lg text-[#59981A] mb-8">
            Join our community and experience the convenience of QuickFind today!
          </p>
          <button className="bg-[#0A3357] text-white px-6 py-3 rounded-lg hover:bg-[#051e3b] transition">
            Download the App
          </button>
        </div>
      </section>
    </div>
  );
}
