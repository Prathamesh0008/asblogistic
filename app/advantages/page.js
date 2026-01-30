import { CheckCircle, Award, Clock, Shield, TrendingUp, Users, Globe, Zap, BarChart3, Heart, Star, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Color definitions
const NEW_BLUE = 'rgb(43,95,142)' // #2B5F8E
const NEW_YELLOW = 'rgb(247,162,51)' // #F7A233

const advantages = [
  {
    icon: Clock,
    title: 'Lightning-Fast Processing',
    description: 'Ultra-efficient systems for same-day shipping and rapid turnaround',
    details: 'Orders before 3 PM guaranteed to ship same business day'
  },
  {
    icon: Shield,
    title: 'Fortified Security',
    description: 'Military-grade security protocols with comprehensive protection',
    details: 'Biometric access, 360° CCTV, and enterprise-grade firewalls'
  },
  {
    icon: TrendingUp,
    title: 'Intelligent Cost Optimization',
    description: 'AI-driven logistics that maximize savings and efficiency',
    details: 'Average 35% cost reduction compared to traditional solutions'
  },
  {
    icon: Users,
    title: 'Elite Support Team',
    description: 'Dedicated experts providing proactive support and strategic guidance',
    details: '24/7 access to senior logistics consultants and technical specialists'
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Precision',
    description: 'Seamless international logistics with localized expertise',
    details: 'Network spanning 50+ countries with customs-cleared corridors'
  },
  {
    icon: Cpu,
    title: 'Predictive Intelligence',
    description: 'Machine learning algorithms forecasting demand and optimizing routes',
    details: 'Real-time analytics with predictive insights and automated optimization'
  }
]

const stats = [
  { value: '99.98%', label: 'Operational Uptime', icon: CheckCircle, trend: '+0.2%' },
  { value: '2.1H', label: 'Average Process Time', icon: Clock, trend: '-15%' },
  { value: '15K+ m²', label: 'Smart Storage', icon: Award, trend: 'Expanding' },
  { value: '3.7H', label: 'EU Delivery Target', icon: Zap, trend: 'Fastest' }
]

const testimonials = [
  {
    name: 'Mark van Dijk',
    company: 'TechGear BV',
    content: 'The predictive analytics platform transformed our inventory management. We reduced stockouts by 78% while cutting carrying costs by 42%.',
    rating: 5,
    industry: 'Electronics'
  },
  {
    name: 'Sarah Johnson',
    company: 'Global Trading Co.',
    content: 'Their AI-powered routing saved us €125,000 in the first quarter alone. The strategic insights from their dashboard are invaluable.',
    rating: 5,
    industry: 'International Trade'
  },
  {
    name: 'Peter de Vries',
    company: 'EuroStyle Fashion',
    content: 'From 72-hour to 24-hour EU delivery without cost increase. Their optimization algorithms are revolutionary for fashion logistics.',
    rating: 5,
    industry: 'Fashion & Retail'
  }
]

export default function AdvantagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden text-white py-20">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${NEW_BLUE} 0%, rgb(33, 73, 112) 100%)`
          }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(247, 162, 51, 0.15)', border: '1px solid rgba(247, 162, 51, 0.3)' }}
            >
              <Award className="h-4 w-4" style={{ color: NEW_YELLOW }} />
              <span className="text-sm font-semibold tracking-wide">PREMIUM LOGISTICS PARTNER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Intelligent <span style={{ color: NEW_YELLOW }}>Edge</span> in <br />Modern Logistics
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto opacity-95 mb-10">
              Where advanced technology meets operational excellence. Experience logistics engineered for peak performance and strategic advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backgroundColor: NEW_YELLOW,
                  color: NEW_BLUE
                }}
              >
                <TrendingUp className="h-5 w-5 mr-3" />
                Schedule Strategy Session
                <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  borderColor: 'rgba(43, 95, 142, 0.1)',
                  borderWidth: '1px'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${NEW_BLUE}10` }}
                  >
                    <stat.icon style={{ color: NEW_BLUE }} className="h-6 w-6" />
                  </div>
                  <span 
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ color: NEW_BLUE, backgroundColor: `${NEW_BLUE}10` }}
                  >
                    {stat.trend}
                  </span>
                </div>
                <div 
                  className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform inline-block"
                  style={{ color: NEW_BLUE }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700 group-hover:w-full"
                    style={{ 
                      backgroundColor: NEW_YELLOW,
                      width: index % 2 === 0 ? '92%' : '88%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid with Interactive Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: `${NEW_BLUE}10` }}>
              <span className="text-sm font-bold tracking-wider" style={{ color: NEW_BLUE }}>STRATEGIC ADVANTAGES</span>
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: NEW_BLUE }}>Engineered for Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proprietary systems and methodologies deliver measurable competitive advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'rgba(43, 95, 142, 0.1)',
                  borderWidth: '1px'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: NEW_YELLOW }} />
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="p-3 rounded-xl transition-all duration-300 group-hover:rotate-12"
                      style={{ backgroundColor: `${NEW_YELLOW}15` }}
                    >
                      <advantage.icon style={{ color: NEW_YELLOW }} className="h-7 w-7" />
                    </div>
                    <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: NEW_BLUE, backgroundColor: `${NEW_BLUE}10` }}>
                      0{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-[1.02] transition-transform inline-block" style={{ color: NEW_BLUE }}>
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  <div 
                    className="p-4 rounded-lg border-l-4 transition-all duration-300 group-hover:translate-x-2"
                    style={{
                      backgroundColor: `${NEW_BLUE}5`,
                      borderLeftColor: NEW_YELLOW
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: NEW_BLUE }}>
                      {advantage.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Intelligence Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: `${NEW_BLUE}10` }}>
                <span className="text-sm font-bold tracking-wider" style={{ color: NEW_BLUE }}>AI-POWERED PLATFORM</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-8" style={{ color: NEW_BLUE }}>
                Predictive Intelligence <br />
                <span style={{ color: NEW_YELLOW }}>Platform</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our proprietary neural network analyzes 27+ data points in real-time to optimize every aspect of your supply chain, from inventory forecasting to dynamic routing.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${NEW_YELLOW}15` }}>
                      <Cpu style={{ color: NEW_YELLOW }} className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Neural Demand Forecasting</h4>
                    <p className="text-gray-600">Predict inventory needs with 94% accuracy using machine learning algorithms</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${NEW_BLUE}10` }}>
                      <BarChart3 style={{ color: NEW_BLUE }} className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Real-time Optimization Engine</h4>
                    <p className="text-gray-600">Dynamic routing and resource allocation based on live market conditions</p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  backgroundColor: NEW_BLUE,
                  color: 'white'
                }}
              >
                <Zap className="h-5 w-5 mr-3" />
                Request Platform Demo
                <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <div 
                className="rounded-3xl p-8 backdrop-blur-sm border shadow-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: 'rgba(43, 95, 142, 0.15)',
                  borderWidth: '1px'
                }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: NEW_BLUE }}>Live Performance Dashboard</h3>
                    <p className="text-gray-600">Real-time operational intelligence</p>
                  </div>
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${NEW_YELLOW}15` }}>
                    <BarChart3 style={{ color: NEW_YELLOW }} className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: 'Process Efficiency', value: '98.7%', trend: '+2.1%', color: 'green' },
                    { label: 'Cost per Shipment', value: '€3.42', trend: '-12%', color: 'green' },
                    { label: 'Carbon Reduction', value: '41%', trend: 'YTD', color: 'blue' },
                    { label: 'Client Satisfaction', value: '9.8/10', trend: '+0.3', color: 'yellow' }
                  ].map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border transition-all hover:translate-x-2"
                      style={{ borderColor: 'rgba(43, 95, 142, 0.1)' }}>
                      <div>
                        <div className="font-medium text-gray-900">{metric.label}</div>
                        <div className="text-sm text-gray-500">Real-time metric</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: NEW_BLUE }}>{metric.value}</div>
                        <div 
                          className="text-sm font-medium" 
                          style={{ 
                            color: metric.color === 'green' ? '#10B981' : 
                                    metric.color === 'yellow' ? NEW_YELLOW : 
                                    NEW_BLUE 
                          }}
                        >
                          {metric.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(43, 95, 142, 0.1)' }}>
                  <div className="text-sm text-gray-600">Last updated: Today, 14:32 CET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Testimonials Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${NEW_BLUE}15 0%, ${NEW_YELLOW}05 100%)`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart style={{ color: NEW_YELLOW }} className="h-8 w-8" />
              <span className="text-sm font-bold tracking-wider" style={{ color: NEW_BLUE }}>ELITE PARTNER TESTIMONIALS</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-8" style={{ color: NEW_BLUE }}>
              Trusted by Industry <span style={{ color: NEW_YELLOW }}>Leaders</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visionary companies leveraging our platform for transformational growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(43, 95, 142, 0.1)'
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-6xl font-bold" style={{ color: NEW_YELLOW }}>"</div>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${NEW_BLUE}10` }}>
                    <Users style={{ color: NEW_BLUE }} className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: NEW_BLUE, backgroundColor: `${NEW_BLUE}10` }}>
                    {testimonial.industry}
                  </span>
                </div>
                
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t" style={{ borderColor: 'rgba(43, 95, 142, 0.1)' }}>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm font-medium" style={{ color: NEW_BLUE }}>{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-2">Verified Enterprise Partner</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Strategic CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: `linear-gradient(135deg, ${NEW_BLUE} 0%, rgb(33, 73, 112) 100%)`
            }}
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            
            <div className="relative p-12 text-center">
              <Award className="h-16 w-16 mx-auto mb-8" style={{ color: NEW_YELLOW }} />
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Outperform <br />
                Your Competition?
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                Schedule a comprehensive logistics assessment and discover your potential for optimization and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    backgroundColor: NEW_YELLOW,
                    color: NEW_BLUE
                  }}
                >
                  <TrendingUp className="h-5 w-5 mr-3" />
                  Book Strategy Session
                  <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Get Performance Analysis
                  <BarChart3 className="ml-3 h-5 w-5" />
                </Link>
              </div>
              
              <div className="mt-12 text-white/70 text-sm">
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>SLA Guaranteed</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>Global Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





// import { CheckCircle, Award, Clock, Shield, TrendingUp, Users, Globe, Zap, BarChart3, Heart } from 'lucide-react'
// import Link from 'next/link'

// const advantages = [
//   {
//     icon: Clock,
//     title: 'Fast Processing',
//     description: 'Same-day shipping with our efficient order processing system',
//     details: 'Orders received before 3 PM are shipped the same day'
//   },
//   {
//     icon: Shield,
//     title: 'Secure Facilities',
//     description: '24/7 monitored warehouses with advanced security systems',
//     details: 'CCTV, access control, and fire protection systems'
//   },
//   {
//     icon: TrendingUp,
//     title: 'Cost Efficient',
//     description: 'Optimized processes that reduce your logistics costs',
//     details: 'Save up to 30% compared to managing in-house'
//   },
//   {
//     icon: Users,
//     title: 'Dedicated Support',
//     description: 'Personal account manager and 24/7 customer service',
//     details: 'Always available to assist with your needs'
//   },
//   {
//     icon: Globe,
//     title: 'European Network',
//     description: 'Extensive distribution network across Europe',
//     details: 'Fast delivery to all major European destinations'
//   },
//   {
//     icon: Zap,
//     title: 'Technology Driven',
//     description: 'Advanced logistics software for real-time tracking',
//     details: 'Full transparency and control over your inventory'
//   }
// ]

// const stats = [
//   { value: '99.9%', label: 'Order Accuracy', icon: CheckCircle },
//   { value: '24/7', label: 'Support Availability', icon: Clock },
//   { value: '10,000m²', label: 'Storage Space', icon: Award },
//   { value: '<24h', label: 'Average Delivery Time', icon: Zap }
// ]

// const testimonials = [
//   {
//     name: 'Mark van Dijk',
//     company: 'TechGear BV',
//     content: 'ASB Logistics transformed our supply chain. Their same-day shipping and professional handling exceeded our expectations.',
//     rating: 5
//   },
//   {
//     name: 'Sarah Johnson',
//     company: 'Global Trading Co.',
//     content: 'The inventory management system is fantastic. Real-time tracking and reporting saved us countless hours.',
//     rating: 5
//   },
//   {
//     name: 'Peter de Vries',
//     company: 'EuroStyle Fashion',
//     content: 'Professional service with personal attention. Our dedicated account manager is always available.',
//     rating: 5
//   }
// ]

// export default function AdvantagesPage() {
//   return (
//     <div className="min-h-screen bg-asb-light-gray">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-asb-navy to-blue-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center">
//             <div className="inline-flex items-center px-4 py-2 bg-asb-yellow/20 rounded-full mb-6">
//               <span className="text-white font-semibold text-sm">ASB LOGISTICS B.V.</span>
//             </div>
//             <Award className="h-16 w-16 mx-auto mb-6 text-asb-yellow" />
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Advantages</h1>
//             <p className="text-xl max-w-3xl mx-auto opacity-95">
//               Discover why hundreds of businesses choose ASB Logistics for their supply chain needs
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-asb-navy/10 p-4 rounded-xl w-fit mx-auto mb-4">
//                   <stat.icon className="h-8 w-8 text-asb-navy" />
//                 </div>
//                 <div className="text-3xl font-bold text-asb-navy mb-2">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Advantages Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-asb-navy mb-4">Key Advantages</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We combine expertise, technology, and dedication to deliver exceptional logistics services
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {advantages.map((advantage, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
//                 <div className="bg-asb-navy/10 p-3 rounded-lg w-fit mb-6">
//                   <advantage.icon className="h-8 w-8 text-asb-navy" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
//                 <p className="text-gray-700 mb-4">{advantage.description}</p>
//                 <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">{advantage.details}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-asb-navy mb-6">Advanced Technology Platform</h2>
//               <p className="text-gray-600 mb-6">
//                 Our proprietary logistics software gives you complete control and visibility over your supply chain.
//               </p>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">Real-time inventory tracking</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">Automated order processing</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">Comprehensive reporting dashboard</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">Mobile app for on-the-go management</span>
//                 </li>
//               </ul>
//               <Link
//                 href="/contact"
//                 className="inline-block mt-8 bg-asb-yellow text-asb-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
//               >
//                 Request Demo
//               </Link>
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
//               <BarChart3 className="h-12 w-12 text-asb-navy mb-6" />
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Dashboard Preview</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Orders Today</span>
//                   <span className="font-bold text-asb-navy">47</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Inventory Items</span>
//                   <span className="font-bold text-asb-navy">1,234</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Shipments This Week</span>
//                   <span className="font-bold text-asb-navy">89</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Order Accuracy</span>
//                   <span className="font-bold text-green-600">99.9%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-gradient-to-br from-asb-light-gray to-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <Heart className="h-16 w-16 text-asb-yellow mx-auto mb-6" />
//             <h2 className="text-3xl font-bold text-asb-navy mb-4">What Our Clients Say</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Don't just take our word for it. Here's what our clients have to say about working with us.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
//                 <div className="flex text-yellow-400 mb-4">
//                   {'★'.repeat(testimonial.rating)}
//                 </div>
//                 <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
//                 <div>
//                   <div className="font-bold text-gray-900">{testimonial.name}</div>
//                   <div className="text-asb-navy">{testimonial.company}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 bg-gradient-to-r from-asb-navy to-blue-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Experience the ASB Advantage</h2>
//           <p className="text-xl opacity-95 mb-8">
//             Join successful businesses who have optimized their logistics with our services
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="bg-asb-yellow text-asb-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
//             >
//               Start Today
//             </Link>
//             <Link
//               href="/quote"
//               className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-asb-navy transition-colors duration-200"
//             >
//               Get Free Analysis
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }