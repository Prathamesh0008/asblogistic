'use client'

import Link from 'next/link'
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Globe, 
  Calendar,
  MapPin,
  DollarSign,
  Briefcase,
  ArrowRight
} from 'lucide-react'

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Logistics Operations Manager",
      department: "Operations",
      location: "Amsterdam, NL",
      type: "Full-time",
      salary: "€60,000 - €80,000",
      description: "Lead our warehouse operations team and optimize fulfillment processes."
    },
    {
      id: 2,
      title: "E-commerce Fulfillment Specialist",
      department: "Fulfillment",
      location: "Rotterdam, NL",
      type: "Full-time",
      salary: "€40,000 - €55,000",
      description: "Manage order processing and customer service for web shop clients."
    },
    {
      id: 3,
      title: "Inventory Coordinator",
      department: "Inventory",
      location: "Utrecht, NL",
      type: "Full-time",
      salary: "€35,000 - €45,000",
      description: "Oversee stock management and real-time inventory tracking."
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Client Services",
      location: "Remote",
      type: "Full-time",
      salary: "€45,000 - €60,000",
      description: "Build and maintain relationships with our logistics partners."
    },
    {
      id: 5,
      title: "IT Systems Analyst",
      department: "Technology",
      location: "Amsterdam, NL",
      type: "Full-time",
      salary: "€50,000 - €70,000",
      description: "Develop and maintain our logistics management software."
    },
    {
      id: 6,
      title: "Warehouse Associate",
      department: "Operations",
      location: "Rotterdam, NL",
      type: "Part-time",
      salary: "€25,000 - €35,000",
      description: "Support daily warehouse activities and order processing."
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Clear promotion paths and professional development opportunities"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling options"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Team",
      description: "Work with diverse colleagues from across Europe"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Culture",
      description: "Collaborative environment with regular team events"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Modern Tools",
      description: "Latest technology and equipment for your work"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[rgb(43,95,142)] to-[#2B5F8E]"
          style={{ backgroundColor: 'rgb(43,95,142)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career in Logistics
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join ASB Logistics and help businesses across Europe with professional fulfillment solutions
            </p>
            <Link
              href="#open-positions"
              className="inline-flex items-center bg-[#F7A233] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e69122] transition-colors duration-200 shadow-lg"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              Why Work at ASB Logistics?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're building the future of European logistics with a team that values innovation, 
              collaboration, and excellence in every delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#F7A233] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="open-positions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current opportunities and find the perfect role for your skills and ambitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#F7A233]"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#F7A233]/10 text-[#F7A233] rounded-full text-sm font-semibold">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                  {job.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {job.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                
                <Link
                  href={`/careers/apply/${job.id}`}
                  className="inline-flex items-center justify-center w-full bg-[rgb(43,95,142)] text-white py-3 rounded-lg font-semibold hover:bg-[#2B5F8E] transition-colors duration-200"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>

          {/* No match? Section */}
          <div className="mt-16 bg-gradient-to-r from-[rgb(43,95,142)] to-[#2B5F8E] rounded-2xl p-8 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Don't see a perfect match?
              </h3>
              <p className="mb-6">
                We're always looking for talented individuals who are passionate about logistics and innovation.
                Send us your resume and tell us how you can contribute to our team.
              </p>
              <Link
                href="/careers/general-application"
                className="inline-flex items-center bg-[#F7A233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e69122] transition-colors duration-200"
              >
                Submit General Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43,95,142)] mb-6">
              Our Hiring Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make our recruitment process transparent and efficient for all candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Review",
                description: "We review your resume and application within 48 hours"
              },
              {
                step: "02",
                title: "Initial Screening",
                description: "30-minute video call with our HR team"
              },
              {
                step: "03",
                title: "Skills Assessment",
                description: "Practical assessment relevant to the role"
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Meet the team and discuss your future at ASB"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F7A233] text-white text-2xl font-bold rounded-full mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[rgb(43,95,142)] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[rgb(43,95,142)] mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards an exciting career in logistics with ASB.
              We're excited to learn more about you and how you can contribute to our success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center bg-[rgb(43,95,142)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2B5F8E] transition-colors duration-200"
              >
                Browse All Positions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[rgb(43,95,142)] text-[rgb(43,95,142)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(43,95,142)] hover:text-white transition-colors duration-200"
              >
                Contact HR Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}