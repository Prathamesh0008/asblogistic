'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  CheckCircle, 
  Users, 
  Target, 
  Globe, 
  Award,
  Truck,
  Package,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mark van der Berg",
      role: "CEO & Founder",
      experience: "15+ years logistics",
      image: "/images/team/mark.jpg" // Replace with your image
    },
    {
      name: "Sarah de Vries",
      role: "Operations Director",
      experience: "12+ years warehousing",
      image: "/images/team/sarah.jpg" // Replace with your image
    },
    {
      name: "Thomas Jansen",
      role: "Technology Lead",
      experience: "10+ years software",
      image: "/images/team/thomas.jpg" // Replace with your image
    },
    {
      name: "Lisa Chen",
      role: "Client Success Manager",
      experience: "8+ years customer service",
      image: "/images/team/lisa.jpg" // Replace with your image
    }
  ]

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a single warehouse in Amsterdam"
    },
    {
      year: "2017",
      title: "European Expansion",
      description: "Expanded to 3 warehouses across Netherlands"
    },
    {
      year: "2019",
      title: "Tech Platform Launch",
      description: "Launched proprietary logistics software"
    },
    {
      year: "2021",
      title: "E-commerce Focus",
      description: "Specialized in e-commerce fulfilment"
    },
    {
      year: "2023",
      title: "International Growth",
      description: "Serving 500+ clients across Europe"
    }
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Consistent, dependable service you can trust"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Efficiency",
      description: "Optimized processes for maximum speed"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description: "Working together for mutual success"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Continually improving our solutions"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1M+", label: "Packages Delivered" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "50+", label: "Team Members" }
  ]

  return (
    <>
      {/* Our Story - Now at the top */}
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#F7A233]/10 rounded-full mb-6">
                <span className="text-[#F7A233] font-bold">About ASB Logistics</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
                Building the Future of Logistics
              </h1>
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-lg">
                  Founded in 2015, ASB Logistics began as a small warehouse operation in Amsterdam with a simple mission: to make logistics reliable, efficient, and accessible for businesses of all sizes.
                </p>
                <p>
                  What started with a single warehouse and a dedicated team of 5 has grown into a comprehensive logistics provider serving over 500 clients across Europe. Our journey has been driven by innovation, customer focus, and a commitment to excellence.
                </p>
                <p>
                  Today, we combine cutting-edge technology with decades of logistics expertise to provide solutions that help businesses grow, scale, and succeed in today's competitive e-commerce landscape.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#F7A233] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e69122] transition-colors duration-200"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center border-2 border-[rgb(43,95,142)] text-[rgb(43,95,142)] px-6 py-3 rounded-lg font-bold hover:bg-[rgb(43,95,142)] hover:text-white transition-colors duration-200"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/packing.jpg" // Using your packing image
                alt="Professional packing services at ASB Logistics"
                className="w-full h-full object-cover"
                width={600}
                height={500}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Professional packing services at our facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[rgb(43,95,142)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at ASB Logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#F7A233] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your logistics success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[rgb(43,95,142)] to-[#2B5F8E]">
                    <Users className="h-16 w-16 text-white/50" />
                  </div>
                  {/* Uncomment when you have images:
                  <Image 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={300}
                    height={192}
                  />
                  */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#F7A233] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.experience} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F7A233] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#F7A233] mb-4">
                <Package className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                E-commerce Fulfillment
              </h3>
              <p className="text-gray-600 mb-6">
                Complete order processing, packaging, and shipping for web shops
              </p>
              <Link
                href="/offer"
                className="inline-flex items-center text-[#F7A233] font-semibold hover:text-[#e69122]"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#F7A233] mb-4">
                <Truck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                Storage & Distribution
              </h3>
              <p className="text-gray-600 mb-6">
                Secure warehousing and efficient delivery across Europe
              </p>
              <Link
                href="/storage"
                className="inline-flex items-center text-[#F7A233] font-semibold hover:text-[#e69122]"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#F7A233] mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                International Logistics
              </h3>
              <p className="text-gray-600 mb-6">
                Cross-border shipping and customs clearance services
              </p>
              <Link
                href="/advantages"
                className="inline-flex items-center text-[#F7A233] font-semibold hover:text-[#e69122]"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[rgb(43,95,142)] to-[#2B5F8E] rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses who trust ASB Logistics for their fulfillment needs. 
              Let's discuss how we can support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#F7A233] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e69122] transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors duration-200"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}