import { CheckCircle, Zap, Users, BarChart, Globe, Shield } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'European fulfilment',
    description: 'Seamless distribution across Europe',
    features: ['EU warehouse network', 'Local delivery expertise', 'Customs clearance']
  },
  {
    icon: Zap,
    title: 'Fast onboarding',
    description: 'Get started in days, not weeks',
    features: ['No setup fees', 'Easy integration', 'Personal onboarding']
  },
  {
    icon: Users,
    title: 'Dedicated support',
    description: 'Your personal logistics team',
    features: ['Account manager', '24/7 support', 'Proactive solutions']
  },
  {
    icon: BarChart,
    title: 'Advanced analytics',
    description: 'Data-driven insights',
    features: ['Real-time reporting', 'Performance analytics', 'Cost optimization']
  },
  {
    icon: Shield,
    title: 'Risk management',
    description: 'Your goods are protected',
    features: ['Full insurance', 'Quality control', 'Backup systems']
  },
  {
    icon: CheckCircle,
    title: 'Scalable solutions',
    description: 'Grow without limits',
    features: ['Flexible capacity', 'Peak season support', 'Custom workflows']
  }
]

export default function ServicesSection() {
  return (
    <section className="bg-asb-light-gray py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-asb-blue mb-6">
            Everything you need to scale your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From storage to shipping, we provide complete logistics solutions for online businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6">
                <div className="bg-asb-blue/10 p-3 rounded-lg w-fit">
                  <service.icon className="h-8 w-8 text-asb-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-asb-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Perfect for ambitious online stores
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you're just starting out or processing thousands of orders each month, 
                we have the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center bg-asb-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F7A233] transition-colors duration-200 text-center whitespace-nowrap"
                >
                  Get started
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-asb-blue transition-colors duration-200 text-center whitespace-nowrap"
                >
                  Book a demo
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col items-center justify-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight">Startups</div>
                <p className="text-gray-300 text-xs sm:text-sm">Perfect for new businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col items-center justify-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight">Scale-ups</div>
                <p className="text-gray-300 text-xs sm:text-sm">Growing businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col items-center justify-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight">Enterprise</div>
                <p className="text-gray-300 text-xs sm:text-sm">Large volume businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col items-center justify-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight">E-commerce</div>
                <p className="text-gray-300 text-xs sm:text-sm">Online stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}