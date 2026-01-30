import { MapPin, Shield, Thermometer, Truck, Clock, Package, Camera, Users } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Shield,
    title: 'Maximum Security',
    details: ['24/7 CCTV monitoring', 'Access control systems', 'Alarm systems', 'Security patrols']
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    details: ['Temperature monitoring', 'Humidity control', 'Specialized storage areas']
  },
  {
    icon: Truck,
    title: 'Easy Access',
    details: ['24/7 access options', 'Loading docks', 'Truck parking', 'Central location']
  },
  {
    icon: Package,
    title: 'Flexible Storage',
    details: ['Various unit sizes', 'Short & long term', 'Pallet storage', 'Bulk storage']
  }
]

const storageTypes = [
  {
    type: 'Pallet Storage',
    sizes: ['Euro pallet', 'Industrial pallet', 'Custom configurations'],
    price: 'From €15/month'
  },
  {
    type: 'Bulk Storage',
    sizes: ['From 10m²', 'From 50m²', 'From 100m²', 'Custom areas'],
    price: 'From €25/m²/month'
  },
  {
    type: 'Temperature Controlled',
    sizes: ['15-25°C areas', '2-8°C cold storage', '-20°C freezer storage'],
    price: 'From €40/m²/month'
  }
]

export default function StoragePage() {
  return (
    <div className="min-h-screen bg-asb-light-gray">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#F7A233]/20 rounded-full mb-6">
              <span className="text-white font-semibold text-sm">ASB LOGISTICS B.V.</span>
            </div>
            <Warehouse className="h-16 w-16 mx-auto mb-6 text-[#F7A233]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Storage Barendrecht</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 mb-8">
              Modern, secure, and flexible storage solutions in the heart of Rotterdam's logistics region
            </p>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-[#F7A233]" />
              <span>Logistiekweg 12, 2991 LV Barendrecht</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-asb-blue mb-4">Strategic Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfectly positioned for efficient logistics operations with excellent connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-asb-light-gray rounded-xl border border-gray-200">
              <Truck className="h-12 w-12 text-asb-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Highway Access</h3>
              <p className="text-gray-600">Direct access to A15 and A29 highways</p>
              <div className="mt-4 text-[#F7A233] font-semibold">5 minutes</div>
            </div>
            
            <div className="text-center p-6 bg-asb-light-gray rounded-xl border border-gray-200">
              <Package className="h-12 w-12 text-asb-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Port of Rotterdam</h3>
              <p className="text-gray-600">Close proximity to Europe's largest port</p>
              <div className="mt-4 text-[#F7A233] font-semibold">15 minutes</div>
            </div>
            
            <div className="text-center p-6 bg-asb-light-gray rounded-xl border border-gray-200">
              <Users className="h-12 w-12 text-asb-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Business Hub</h3>
              <p className="text-gray-600">Located in Rotterdam's main logistics district</p>
              <div className="mt-4 text-[#F7A233] font-semibold">Prime location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-asb-blue mb-4">Facility Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our modern warehouse is equipped with everything you need for secure and efficient storage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-asb-blue/10 p-3 rounded-lg w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-asb-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-asb-blue mb-4">Storage Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible storage options to meet your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {storageTypes.map((storage, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-8 hover:border-asb-blue transition-colors duration-300">
                <h3 className="text-2xl font-bold text-asb-blue mb-6">{storage.type}</h3>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Available Sizes:</h4>
                  <ul className="space-y-2">
                    {storage.sizes.map((size, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-asb-blue rounded-full mr-3"></div>
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-2xl font-bold text-[#F7A233] mb-2">{storage.price}</div>
                  <p className="text-gray-600 text-sm">All prices exclude VAT</p>
                </div>

                <Link
                  href="/quote"
                  className="block w-full mt-6 text-center bg-asb-blue text-white py-3 rounded-lg font-semibold hover:bg-[rgb(33,85,132)] transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-16 bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Camera className="h-16 w-16 text-[#F7A233] mb-6" />
              <h2 className="text-3xl font-bold mb-6">Virtual Facility Tour</h2>
              <p className="text-xl opacity-95 mb-8">
                Can't visit in person? Take a virtual tour of our Barendrecht facility and see our modern storage solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#F7A233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e69122] transition-colors duration-200"
              >
                <Camera className="h-5 w-5 mr-2" />
                Schedule Virtual Tour
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Tour Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-[#F7A233]" />
                  <span>Live guided tour available</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-[#F7A233]" />
                  <span>See security features in action</span>
                </li>
                <li className="flex items-center">
                  <Thermometer className="h-5 w-5 mr-3 text-[#F7A233]" />
                  <span>Climate control demonstration</span>
                </li>
                <li className="flex items-center">
                  <Truck className="h-5 w-5 mr-3 text-[#F7A233]" />
                  <span>Loading dock operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-asb-blue mb-6">Ready to Secure Your Storage Space?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your storage needs and schedule a visit to our Barendrecht facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7A233] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e69122] transition-colors duration-200"
            >
              Visit Our Facility
            </Link>
            <Link
              href="/quote"
              className="bg-asb-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(33,85,132)] transition-colors duration-200"
            >
              Get Storage Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Add missing Warehouse icon component
function Warehouse(props) {
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
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  )
}