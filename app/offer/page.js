import { Package, Warehouse, Truck, Shield, Clock, BarChart, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// New color definitions
const NEW_BLUE = 'rgb(43,95,142)' // #2B5F8E
const NEW_YELLOW = 'rgb(247,162,51)' // #F7A233

const services = [
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    description: 'Modern, secure warehouse facilities with 24/7 monitoring',
    features: ['Temperature-controlled areas', 'Real-time inventory tracking', 'Secure access control'],
    bgColor: 'bg-blue-50',
    iconColor: 'text-[rgb(43,95,142)]'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Comprehensive inventory control and management',
    features: ['Stock level monitoring', 'Automated reordering', 'Inventory reporting'],
    bgColor: 'bg-yellow-50',
    iconColor: 'text-[rgb(43,95,142)]'
  },
  {
    icon: Truck,
    title: 'Distribution & Fulfillment',
    description: 'Fast and reliable distribution across Europe',
    features: ['Same-day shipping', 'European network', 'Delivery tracking'],
    bgColor: 'bg-blue-50',
    iconColor: 'text-[rgb(43,95,142)]'
  },
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'Maximum security for your valuable goods',
    features: ['24/7 CCTV monitoring', 'Fire protection systems', 'Insurance coverage'],
    bgColor: 'bg-gray-50',
    iconColor: 'text-[rgb(43,95,142)]'
  },
  {
    icon: Clock,
    title: 'Fast Order Processing',
    description: 'Efficient processing for same-day shipping',
    features: ['Automated systems', 'Priority handling', 'Real-time updates'],
    bgColor: 'bg-yellow-50',
    iconColor: 'text-[rgb(43,95,142)]'
  },
  {
    icon: BarChart,
    title: 'Logistics Consulting',
    description: 'Optimize your supply chain with expert advice',
    features: ['Process analysis', 'Cost optimization', 'Strategy development'],
    bgColor: 'bg-blue-50',
    iconColor: 'text-[rgb(43,95,142)]'
  }
]

const packages = [
  {
    name: 'Basic',
    price: '€499',
    period: '/month',
    description: 'Perfect for small businesses',
    features: ['100m² storage', 'Basic inventory management', 'Standard packaging', 'Email support'],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '€899',
    period: '/month',
    description: 'Ideal for growing companies',
    features: ['500m² storage', 'Advanced inventory', 'Custom packaging', 'Phone support', 'Monthly reports'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for large organizations',
    features: ['Unlimited storage', 'Full inventory system', 'Branded packaging', '24/7 support', 'Dedicated manager', 'Custom solutions'],
    highlighted: false
  }
]

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="text-white py-16"
        style={{
          background: `linear-gradient(to right, ${NEW_BLUE}, rgb(33, 75, 112))`
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Comprehensive logistics solutions tailored to your business needs. From storage to distribution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: NEW_BLUE }}>Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of professional logistics services designed to streamline your supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`p-8 ${service.bgColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        color: NEW_BLUE,
                        backgroundColor: 'rgba(43, 95, 142, 0.1)' // 10% opacity
                      }}
                    >
                      Service
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-white border-t">
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 text-white"
                    style={{ backgroundColor: NEW_BLUE }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: NEW_BLUE }}>Packages & Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your business needs. All packages include our standard service guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 p-8 relative ${pkg.highlighted ? 'shadow-xl' : 'border-gray-200'}`}
                style={pkg.highlighted ? { borderColor: NEW_YELLOW } : {}}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span 
                      className="px-4 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: NEW_YELLOW,
                        color: NEW_BLUE
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="flex items-end justify-center mb-4">
                    <span 
                      className="text-4xl font-bold"
                      style={{ color: NEW_BLUE }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors duration-200 hover:opacity-90`}
                  style={{
                    backgroundColor: pkg.highlighted ? NEW_YELLOW : NEW_BLUE,
                    color: pkg.highlighted ? NEW_BLUE : 'white'
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need a custom solution?{' '}
              <Link 
                href="/contact" 
                className="font-semibold hover:underline"
                style={{ color: NEW_BLUE }}
              >
                Contact us for a tailored package
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16"
        style={{
          background: `linear-gradient(to right, ${NEW_BLUE}, rgb(33, 75, 112))`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Users className="h-16 w-16 mx-auto mb-6" style={{ color: NEW_YELLOW }} />
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl opacity-95 mb-8">
            Join hundreds of satisfied clients who trust ASB Logistics with their supply chain needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200"
              style={{
                backgroundColor: NEW_YELLOW,
                color: NEW_BLUE
              }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[rgb(43,95,142)] transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}