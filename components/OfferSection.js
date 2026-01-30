import Link from 'next/link'
import { Warehouse, PackageCheck, Package, Truck } from 'lucide-react'

export default function OfferSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-asb-orange/20 rounded-full mb-6">
            <h2 className="text-asb-blue font-bold text-lg">Our offer</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-asb-blue mb-6">
            What we do for you:
          </h2>
          <div className="flex justify-center mb-12">
            <Link
              href="/quote"
              className="inline-flex items-center bg-asb-orange text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#F7A233] transition-colors duration-200 shadow-md"
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-asb-light-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-asb-blue/10 p-3 rounded-lg w-fit">
                <Warehouse className="h-10 w-10 text-asb-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-asb-blue mb-4">
              Storage & inventory management
            </h3>
            <p className="text-gray-600 mb-6">
              in our modern warehouse
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Real-time inventory tracking</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Climate-controlled storage</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Secure 24/7 access</span>
              </li>
            </ul>
          </div>

          <div className="bg-asb-light-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-asb-blue/10 p-3 rounded-lg w-fit">
                <PackageCheck className="h-10 w-10 text-asb-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-asb-blue mb-4">
              Fast order processing
            </h3>
            <p className="text-gray-600 mb-6">
              Ordered today, shipped today
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Same-day dispatch</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Automated processing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Multi-channel integration</span>
              </li>
            </ul>
          </div>

          <div className="bg-asb-light-gray rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-asb-blue/10 p-3 rounded-lg w-fit">
                <Package className="h-10 w-10 text-asb-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-asb-blue mb-4">
              Professional packaging
            </h3>
            <p className="text-gray-600 mb-6">
              With your own branding, if desired
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Custom branded packaging</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Eco-friendly materials</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-asb-orange rounded-full mr-3"></div>
                <span className="text-gray-700">Quality assurance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Service */}
        <div className="mt-12 bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Truck className="h-16 w-16 text-asb-orange mb-6" />
              <h3 className="text-2xl font-bold mb-4">Complete distribution network</h3>
              <p className="text-gray-300 mb-6">
                Fast and reliable delivery across Europe with our partner network. Track your shipments in real-time.
              </p>
              <Link
                href="/advantages"
                className="inline-flex items-center text-asb-orange font-bold hover:text-[#F7A233]"
              >
                Discover our advantages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">48h</div>
                <div className="text-sm text-gray-300">Delivery in NL</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">3-5d</div>
                <div className="text-sm text-gray-300">Delivery in EU</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">30+</div>
                <div className="text-sm text-gray-300">Carrier partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-1">99%</div>
                <div className="text-sm text-gray-300">On-time delivery</div>
              </div>
            </div>
          </div>
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