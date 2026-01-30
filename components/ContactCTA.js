'use client'

import { Send, Mail, Phone, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-asb-blue mb-8">
              Ready to grow your business?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-asb-orange p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-asb-blue mb-2">Get a personalized quote</h3>
                  <p className="text-gray-600 mb-4">
                    Tell us about your business and get a customized logistics solution.
                  </p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center text-asb-blue font-bold hover:text-[rgb(33,85,132)]"
                  >
                    Request a quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-asb-blue p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-asb-blue mb-2">Talk to our experts</h3>
                  <p className="text-gray-600 mb-4">
                    Have questions? Our logistics experts are ready to help.
                  </p>
                  <a
                    href="tel:+31180123456"
                    className="inline-flex items-center text-asb-blue font-bold hover:text-[rgb(33,85,132)]"
                  >
                    +31 (0) 180 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-asb-orange p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-asb-blue mb-2">Send us an email</h3>
                  <p className="text-gray-600 mb-4">
                    Prefer email? We respond within 24 hours.
                  </p>
                  <a
                    href="mailto:info@asblogistics.nl"
                    className="inline-flex items-center text-asb-blue font-bold hover:text-[rgb(33,85,132)]"
                  >
                    info@asblogistics.nl
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Quick Contact */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="bg-asb-light-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-asb-blue mb-4">Stay updated</h3>
              <p className="text-gray-600 mb-6">
                Get logistics tips and industry insights delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-asb-orange focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-asb-orange text-white py-3 rounded-lg font-bold hover:bg-[#F7A233] transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Subscribe to newsletter
                </button>
              </form>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-asb-blue text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quick contact</h3>
              <p className="text-gray-300 mb-6">
                Need immediate assistance? Fill out this form and we'll call you back within 30 minutes.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-asb-orange focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-asb-orange focus:border-transparent"
                />
                <button className="w-full bg-asb-orange text-white py-3 rounded-lg font-bold hover:bg-[#F7A233] transition-colors duration-200">
                  Request callback
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-asb-blue mb-6">
            Join hundreds of successful businesses using ASB Logistics
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-asb-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F7A233] transition-colors duration-200 shadow-lg"
            >
              Start your free trial
            </Link>
            <Link
              href="/advantages"
              className="border-2 border-asb-blue text-asb-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-asb-blue hover:text-white transition-colors duration-200"
            >
              See our advantages
            </Link>
          </div>
          <p className="mt-6 text-gray-600">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

function ArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}