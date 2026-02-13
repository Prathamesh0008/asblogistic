'use client'

import { Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare, Globe, Shield, Headphones, CheckCircle, ArrowRight, Map, TrendingUp, Cpu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

// Color definitions
const NEW_BLUE = 'rgb(43,95,142)' // #2B5F8E
const NEW_YELLOW = 'rgb(247,162,51)' // #F7A233

const contactInfo = [
  {
    icon: Phone,
    title: 'Immediate Support',
    details: ['+31 (0) 180 123 456', '+91 22 1234 5678'],
    description: '24/7 emergency line available',
    color: NEW_YELLOW,
    bgColor: 'rgba(247, 162, 51, 0.15)'
  },
  {
    icon: Mail,
    title: 'Strategic Partnership',
    details: ['strategic@asblogistics.nl', 'india@asblogistics.in'],
    description: 'Executive response within 4 hours',
    color: NEW_BLUE,
    bgColor: 'rgba(43, 95, 142, 0.1)'
  },
  {
    icon: MapPin,
    title: 'Global HQ - Netherlands',
    details: ['Logistiekweg 12', '2991 LV Barendrecht', 'Rotterdam Area'],
    description: 'Visit our Innovation Center',
    color: NEW_YELLOW,
    bgColor: 'rgba(247, 162, 51, 0.15)'
  },
  {
    icon: MapPin,
    title: 'India Regional HQ',
    details: [' Office no-2', '', 'Sector-4, Palm Beach Rd, near PALM BEACH RESIDENCY, Nerul West, Maharashtra 400706'],
    description: 'South Asia Operations Center',
    color: NEW_BLUE,
    bgColor: 'rgba(43, 95, 142, 0.1)'
  },
  {
    icon: Globe,
    title: 'Global Network',
    details: ['15+ Countries', '25+ Facilities', 'EU-Wide & Asia Coverage'],
    description: 'International logistics specialists',
    color: NEW_YELLOW,
    bgColor: 'rgba(247, 162, 51, 0.15)'
  }
]

const departments = [
  {
    name: 'Strategic Partnerships',
    email: 'strategic@asblogistics.nl',
    phone: '+31 (0) 180 123 456',
    icon: Shield,
    description: 'Enterprise solutions and long-term collaboration'
  },
  {
    name: 'India Operations',
    email: 'india@asblogistics.in',
    phone: '+91 22 1234 5678',
    icon: TrendingUp,
    description: 'South Asia market expansion & operations'
  },
  {
    name: 'Technical Operations',
    email: 'techops@asblogistics.nl',
    phone: '+31 (0) 180 123 458',
    icon: Cpu,
    description: 'System integration and technical support'
  },
  {
    name: 'Client Success',
    email: 'success@asblogistics.nl',
    phone: '+31 (0) 180 123 459',
    icon: Headphones,
    description: 'Dedicated account management'
  }
]

const features = [
  '24/7 Multilingual Support',
  'Average Response Time: 15 min',
  'SLA Guaranteed 99.9% Uptime',
  'Enterprise Security Protocols',
  'India Operations: IST Business Hours'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    department: 'strategic'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitSuccess(false);

  try {
    console.log('📤 Sending form data:', formData);
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    console.log('📨 API Response:', result);

    if (!response.ok) {
      throw new Error(result.error || `Server error: ${response.status}`);
    }

    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    // Success!
    console.log('✅ Email sent successfully!');
    setSubmitSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        department: 'strategic'
      });
      setSubmitSuccess(false);
    }, 5000);

  } catch (error) {
    console.error('❌ Form submission error:', error);
    alert(`Error: ${error.message}\n\nPlease contact us directly at strategic@asblogistics.nl`);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Interactive Background */}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm mx-auto"
              style={{ backgroundColor: 'rgba(247, 162, 51, 0.15)', border: '1px solid rgba(247, 162, 51, 0.3)' }}
            >
              <MessageSquare className="h-4 w-4" style={{ color: NEW_YELLOW }} />
              <span className="text-sm font-semibold tracking-wide">CONNECT WITH STRATEGY</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic <span style={{ color: NEW_YELLOW }}>Partnership</span> <br />
              Begins Here
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto opacity-95 mb-10">
              Connect with logistics architects who transform supply chains into competitive advantages. 
              Your vision, our execution — now serving the Indian subcontinent.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Contact Grid */}
      <section className="py-20 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(43, 95, 142, 0.15)'
                }}
              >
                <div 
                  className="p-4 rounded-xl w-fit mb-6 transition-transform duration-300 group-hover:rotate-12"
                  style={{ backgroundColor: info.bgColor }}
                >
                  <info.icon className="h-8 w-8" style={{ color: info.color }} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:translate-x-2 transition-transform" style={{ color: NEW_BLUE }}>
                  {info.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, idx) => (
                    <p 
                      key={idx} 
                      className="text-gray-800 font-medium group-hover:translate-x-1 transition-transform"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                
                <p className="text-sm" style={{ color: NEW_BLUE }}>
                  {info.description}
                </p>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight style={{ color: NEW_YELLOW }} className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Interactive Form */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="inline-block px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(43, 95, 142, 0.1)' }}>
                  <span className="text-sm font-bold tracking-wider" style={{ color: NEW_BLUE }}>STRATEGIC INQUIRY</span>
                </div>
                
                <h2 className="text-4xl font-bold mb-8" style={{ color: NEW_BLUE }}>
                  Transform Your <br />
                  <span style={{ color: NEW_YELLOW }}>Supply Chain</span>
                </h2>
                
                {submitSuccess && (
                  <div 
                    className="mb-8 p-6 rounded-xl backdrop-blur-sm"
                    style={{ 
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6" style={{ color: '#10B981' }} />
                      <div>
                        <p className="font-bold text-gray-900">Strategic connection established!</p>
                        <p className="text-gray-700">Our executive team will contact you within 2 business hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                        <User className="inline h-4 w-4 mr-2" />
                        Strategic Contact *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                        style={{ 
                          borderColor: 'rgba(43, 95, 142, 0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        }}
                        placeholder="Chief Logistics Officer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                        <Building className="inline h-4 w-4 mr-2" />
                        Enterprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                        style={{ 
                          borderColor: 'rgba(43, 95, 142, 0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        }}
                        placeholder="Fortune 500 Company BV / Pvt Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                        <Mail className="inline h-4 w-4 mr-2" />
                        Executive Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                        style={{ 
                          borderColor: 'rgba(43, 95, 142, 0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        }}
                        placeholder="cl.o@enterprise.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                        <Phone className="inline h-4 w-4 mr-2" />
                        Direct Line
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                        style={{ 
                          borderColor: 'rgba(43, 95, 142, 0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        }}
                        placeholder="+31 6 12345678 / +91 22 12345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                      Strategic Focus
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02] appearance-none"
                      style={{ 
                        borderColor: 'rgba(43, 95, 142, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <option value="strategic">Strategic Partnership</option>
                      <option value="growth">Growth Advisory</option>
                      <option value="india">India Operations</option>
                      <option value="technical">Technical Integration</option>
                      <option value="success">Client Success</option>
                      <option value="emergency">24/7 Emergency Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                      Strategic Objective *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                      style={{ 
                        borderColor: 'rgba(43, 95, 142, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                      placeholder="Global Distribution Network Optimization / India Market Entry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: NEW_BLUE }}>
                      Strategic Brief *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02] resize-none"
                      style={{ 
                        borderColor: 'rgba(43, 95, 142, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                      placeholder="Brief us on your current logistics challenges, growth objectives, timeline, and region of interest..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{
                      backgroundColor: NEW_BLUE,
                      color: 'white'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Establishing Connection...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3 transform group-hover:-translate-y-1 transition-transform" />
                        Launch Strategic Dialogue
                        <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Interactive Map & Departments */}
            <div className="space-y-12">
              {/* 3D Map Visualization */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <div 
                    className="h-80 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, rgba(43, 95, 142, 0.15) 0%, rgba(247, 162, 51, 0.1) 100%)`,
                      border: '1px solid rgba(43, 95, 142, 0.2)'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Map className="h-16 w-16 mx-auto mb-6" style={{ color: NEW_YELLOW }} />
                        <p className="text-2xl font-bold mb-2" style={{ color: NEW_BLUE }}>Global Command Centers</p>
                        <p className="text-gray-700 max-w-md mx-auto">
                          Strategic HQs in Europe's logistics corridor and India's commercial capital
                        </p>
                      </div>
                    </div>
                    
                    {/* Map Markers */}
                    <div className="absolute top-1/4 left-1/4">
                      <div className="relative">
                        <div className="h-4 w-4 rounded-full animate-ping" style={{ backgroundColor: NEW_YELLOW, opacity: 0.6 }} />
                        <div className="h-3 w-3 rounded-full absolute top-0.5 left-0.5" style={{ backgroundColor: NEW_YELLOW }} />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap" style={{ color: NEW_BLUE }}>Rotterdam</span>
                      </div>
                    </div>
                    <div className="absolute bottom-1/3 right-1/4">
                      <div className="relative">
                        <div className="h-4 w-4 rounded-full animate-ping" style={{ animationDelay: '0.2s', backgroundColor: NEW_BLUE, opacity: 0.6 }} />
                        <div className="h-3 w-3 rounded-full absolute top-0.5 left-0.5" style={{ backgroundColor: NEW_BLUE }} />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap" style={{ color: NEW_BLUE }}>Mumbai</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Netherlands HQ', value: '51.8564° N, 4.5401° E' },
                    { label: 'India HQ', value: '19.0760° N, 72.8777° E' },
                    { label: 'Port Distance', value: '12km to Rotterdam, 15km to JNPT' },
                    { label: 'Airport', value: '8km to Rotterdam Hague, 12km to BOM' }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl backdrop-blur-sm text-center transition-all hover:scale-[1.03]"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(43, 95, 142, 0.15)'
                      }}
                    >
                      <div className="text-sm font-semibold mb-1" style={{ color: NEW_BLUE }}>{item.label}</div>
                      <div className="text-gray-800 font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Departments */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold" style={{ color: NEW_BLUE }}>Strategic Divisions</h3>
                  <div className="px-3 py-1 rounded-full text-xs font-bold" style={{ color: NEW_BLUE, backgroundColor: 'rgba(43, 95, 142, 0.1)' }}>
                    DIRECT ACCESS
                  </div>
                </div>
                
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div 
                      key={index} 
                      className="group p-6 rounded-2xl border transition-all duration-300 hover:translate-x-2 hover:shadow-xl cursor-pointer"
                      style={{ 
                        borderColor: 'rgba(43, 95, 142, 0.15)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="p-3 rounded-xl transition-transform duration-300 group-hover:rotate-12"
                          style={{ backgroundColor: 'rgba(247, 162, 51, 0.15)' }}
                        >
                          <dept.icon className="h-6 w-6" style={{ color: NEW_YELLOW }} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-gray-900">{dept.name}</h4>
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" style={{ color: NEW_YELLOW }} />
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                            <a 
                              href={`mailto:${dept.email}`}
                              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                              style={{ color: NEW_BLUE }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Mail className="h-4 w-4 mr-2" />
                              {dept.email}
                            </a>
                            <a 
                              href={`tel:${dept.phone.replace(/[^\d+]/g, '')}`}
                              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                              style={{ color: NEW_BLUE }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              {dept.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Features */}
              <div 
                className="p-8 rounded-3xl backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, rgba(43, 95, 142, 0.1) 0%, rgba(247, 162, 51, 0.05) 100%)`,
                  border: '1px solid rgba(43, 95, 142, 0.2)'
                }}
              >
                <h4 className="text-xl font-bold mb-6" style={{ color: NEW_BLUE }}>Enterprise Guarantees</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-1 rounded-full" style={{ backgroundColor: 'rgba(247, 162, 51, 0.2)' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: NEW_YELLOW }} />
                      </div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: `linear-gradient(135deg, ${NEW_BLUE} 0%, rgb(33, 73, 112) 100%)`
            }}
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
            
            <div className="relative p-12 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm mx-auto"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
              >
                <Shield className="h-4 w-4" style={{ color: NEW_YELLOW }} />
                <span className="text-sm font-semibold tracking-wide">24/7 CRITICAL SUPPORT</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Urgent Logistics Crisis?
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Immediate response team activated within 15 minutes for critical supply chain emergencies.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="tel:+31180123456"
                    className="group text-3xl font-bold hover:scale-105 transition-transform inline-flex items-center gap-4"
                    style={{ color: NEW_YELLOW }}
                  >
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full animate-ping absolute" style={{ backgroundColor: NEW_YELLOW, opacity: 0.3 }} />
                      <Phone className="h-10 w-10 relative" />
                    </div>
                    +31 (0) 180 123 456
                  </a>
                  <span className="text-white/50 text-xl">|</span>
                  <a
                    href="tel:+912212345678"
                    className="group text-3xl font-bold hover:scale-105 transition-transform inline-flex items-center gap-4"
                    style={{ color: NEW_YELLOW }}
                  >
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full animate-ping absolute" style={{ backgroundColor: NEW_YELLOW, opacity: 0.3 }} />
                      <Phone className="h-10 w-10 relative" />
                    </div>
                    +91 22 1234 5678
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Link
                    href="/emergency"
                    className="group inline-flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <Shield className="h-5 w-5 mr-3" />
                    Emergency Protocols
                    <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/support"
                    className="group inline-flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: NEW_YELLOW,
                      color: NEW_BLUE
                    }}
                  >
                    Real-time Status
                    <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}