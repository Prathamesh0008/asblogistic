import { CheckCircle, Globe, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: "European Network",
    description: "Extensive logistics network across Europe for seamless distribution"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and reporting for better decision making"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager and 24/7 customer support"
  },
  {
    icon: CheckCircle,
    title: "Quality Certified",
    description: "ISO 9001 certified processes and quality management systems"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-asb-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-asb-blue mb-4">
              Why Choose ASB Logistics?
            </h2>
            <p className="text-gray-600">
              Experience the difference with our professional approach and cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="bg-asb-blue/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-asb-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-asb-blue mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-asb-blue mb-4">
              Our Warehouse in Barendrecht
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-asb-orange mb-2">10,000m²</div>
                <div className="text-gray-600">Total Storage Area</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-asb-orange mb-2">24/7</div>
                <div className="text-gray-600">Security & Access</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-asb-orange mb-2">99.9%</div>
                <div className="text-gray-600">Order Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}