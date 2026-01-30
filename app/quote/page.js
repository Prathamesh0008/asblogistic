'use client'

import { Calculator, Package, Truck, Shield, Download, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const serviceOptions = [
  { id: 'storage', name: 'Storage & Warehousing', icon: Package },
  { id: 'distribution', name: 'Distribution & Fulfillment', icon: Truck },
  { id: 'inventory', name: 'Inventory Management', icon: Calculator },
  { id: 'packaging', name: 'Packaging & Branding', icon: Shield },
  { id: 'consulting', name: 'Logistics Consulting', icon: CheckCircle },
  { id: 'full', name: 'Full Logistics Solution', icon: CheckCircle }
]

const storageOptions = [
  { id: 'pallet', name: 'Pallet Storage', description: 'From €15/month per pallet' },
  { id: 'bulk', name: 'Bulk Storage', description: 'From €25/m²/month' },
  { id: 'climate', name: 'Climate Controlled', description: 'From €40/m²/month' }
]

const durationOptions = [
  { id: 'trial', name: 'Trial (1 month)', description: 'Perfect for testing our services' },
  { id: 'short', name: 'Short Term (3-6 months)', description: 'Flexible solution' },
  { id: 'annual', name: 'Annual Contract', description: 'Best value with discounts' },
  { id: 'custom', name: 'Custom Duration', description: 'Tailored to your needs' }
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    services: [],
    storageType: '',
    storageAmount: '',
    duration: '',
    monthlyShipments: '',
    specialRequirements: ''
  })

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Quote request submitted:', formData)
    setStep(4) // Success step
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* REMOVED: <Navbar /> - It's already in layout */}
      
      {/* Hero Section - Same structure as original */}
      <section className="bg-gradient-to-r from-[rgb(43,95,142)] to-[rgb(33,85,132)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#F7A233]/20 rounded-full mb-6">
              <span className="text-white font-semibold text-sm">ASB LOGISTICS B.V.</span>
            </div>
            <Calculator className="h-16 w-16 mx-auto mb-6 text-[#F7A233]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Get a personalized quote for your logistics needs. Fast, transparent, and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of your code remains exactly the same... */}
      {/* Progress Bar - Same structure as original */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold
                  ${step === stepNum ? 'bg-[#F7A233] text-[rgb(43,95,142)]' : 
                    step > stepNum ? 'bg-green-500 text-white' : 
                    'bg-gray-200 text-gray-600'}
                `}>
                  {step > stepNum ? '✓' : stepNum}
                </div>
                <span className="mt-2 text-sm text-gray-600 hidden sm:block">
                  {stepNum === 1 && 'Services'}
                  {stepNum === 2 && 'Requirements'}
                  {stepNum === 3 && 'Contact'}
                  {stepNum === 4 && 'Complete'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps - Same layout as original */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            {/* Step 1: Services Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-[rgb(43,95,142)] mb-6">Select Your Services</h2>
                <p className="text-gray-600 mb-8">
                  Choose the logistics services you're interested in. You can select multiple options.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {serviceOptions.map((service) => {
                    const Icon = service.icon
                    const isSelected = formData.services.includes(service.id)
                    
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceToggle(service.id)}
                        className={`
                          p-6 rounded-xl border-2 text-left transition-all duration-200
                          ${isSelected 
                            ? 'border-[#F7A233] bg-[#F7A233]/10' 
                            : 'border-gray-200 hover:border-[rgb(43,95,142)] hover:bg-[rgb(43,95,142)]/5'}
                        `}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <Icon className={`h-8 w-8 ${isSelected ? 'text-[#F7A233]' : 'text-[rgb(43,95,142)]'}`} />
                          {isSelected && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                      </button>
                    )
                  })}
                </div>
                
                <div className="flex justify-between">
                  <div></div>
                  <button
                    onClick={nextStep}
                    disabled={formData.services.length === 0}
                    className="bg-[rgb(43,95,142)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(33,85,132)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next: Requirements
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Requirements */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-[rgb(43,95,142)] mb-6">Your Requirements</h2>
                <p className="text-gray-600 mb-8">
                  Tell us more about your specific needs for accurate pricing.
                </p>
                
                <div className="space-y-8">
                  {/* Storage Requirements */}
                  {formData.services.includes('storage') && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Storage Requirements</h3>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {storageOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, storageType: option.id }))}
                            className={`
                              p-4 rounded-lg border-2 text-left
                              ${formData.storageType === option.id 
                                ? 'border-[#F7A233] bg-[#F7A233]/10' 
                                : 'border-gray-200 hover:border-[rgb(43,95,142)]'}
                            `}
                          >
                            <h4 className="font-bold text-gray-900 mb-2">{option.name}</h4>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </button>
                        ))}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Storage Amount (m² or pallets)
                        </label>
                        <input
                          type="text"
                          name="storageAmount"
                          value={formData.storageAmount}
                          onChange={handleChange}
                          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent"
                          placeholder="e.g., 100m² or 50 pallets"
                        />
                      </div>
                    </div>
                  )}

                  {/* Duration */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contract Duration</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {durationOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, duration: option.id }))}
                          className={`
                            p-4 rounded-lg border-2 text-left
                            ${formData.duration === option.id 
                              ? 'border-[#F7A233] bg-[#F7A233]/10' 
                              : 'border-gray-200 hover:border-[rgb(43,95,142)]'}
                          `}
                        >
                          <h4 className="font-bold text-gray-900 mb-2">{option.name}</h4>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Monthly Shipments
                        </label>
                        <input
                          type="text"
                          name="monthlyShipments"
                          value={formData.monthlyShipments}
                          onChange={handleChange}
                          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent"
                          placeholder="e.g., 100-200 shipments"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requirements
                        </label>
                        <textarea
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent resize-none"
                          placeholder="Any special handling, packaging, or delivery requirements..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="text-[rgb(43,95,142)] hover:text-[rgb(33,85,132)] font-semibold"
                  >
                    ← Back to Services
                  </button>
                  <button
                    onClick={nextStep}
                    className="bg-[rgb(43,95,142)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(33,85,132)] transition-colors duration-200"
                  >
                    Next: Contact Info
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-[rgb(43,95,142)] mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Please provide your contact details so we can send you the quote.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent"
                        placeholder="Your Company BV"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(43,95,142)] focus:border-transparent"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-[rgb(43,95,142)] hover:text-[rgb(33,85,132)] font-semibold py-3"
                      >
                        ← Back to Requirements
                      </button>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          className="border-2 border-[rgb(43,95,142)] text-[rgb(43,95,142)] px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(43,95,142)]/5 transition-colors duration-200"
                        >
                          <Download className="inline h-5 w-5 mr-2" />
                          Save & Continue Later
                        </button>
                        <button
                          type="submit"
                          className="bg-[#F7A233] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#F7A233]/90 transition-colors duration-200 flex items-center"
                        >
                          <Send className="h-5 w-5 mr-2" />
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-[rgb(43,95,142)] mb-6">Quote Request Submitted!</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Thank you for your interest in ASB Logistics. We've received your request and will send you a personalized quote within 24 hours.
                </p>
                <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto mb-8 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Next Steps:</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center">
                      <div className="bg-[rgb(43,95,142)] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">1</div>
                      <span>Our logistics expert will review your requirements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[rgb(43,95,142)] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">2</div>
                      <span>We'll prepare a detailed quote with pricing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[rgb(43,95,142)] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">3</div>
                      <span>You'll receive the quote via email within 24 hours</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[rgb(43,95,142)] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">4</div>
                      <span>Schedule a consultation to discuss the details</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="bg-[rgb(43,95,142)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(33,85,132)] transition-colors duration-200"
                  >
                    Return to Homepage
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-[rgb(43,95,142)] text-[rgb(43,95,142)] px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(43,95,142)]/5 transition-colors duration-200"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Quick Quote Estimate (Sidebar) - Same as original */}
          {step < 4 && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Quick Estimate</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Services:</span>
                  <span className="font-semibold text-[rgb(43,95,142)]">{formData.services.length} services</span>
                </div>
                {formData.storageType && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage Type:</span>
                    <span className="font-semibold">
                      {storageOptions.find(s => s.id === formData.storageType)?.name || 'Not selected'}
                    </span>
                  </div>
                )}
                {formData.duration && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">
                      {durationOptions.find(d => d.id === formData.duration)?.name || 'Not selected'}
                    </span>
                  </div>
                )}
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    *Final pricing will be provided in your personalized quote
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Same structure as original */}
      <section className="py-16 bg-gradient-to-r from-[rgb(43,95,142)] to-[rgb(33,85,132)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl opacity-95 mb-8">
            Call us now for a quick quote or to speak with a logistics specialist.
          </p>
          <div className="flex flex-col items-center">
            <a
              href="tel:+31180123456"
              className="text-3xl font-bold hover:text-[#F7A233] transition-colors duration-200 mb-4"
            >
              +31 (0) 180 123 456
            </a>
            <p className="text-lg opacity-90">Available Monday-Friday, 8:00-18:00</p>
          </div>
        </div>
      </section>
    </div>
  )
}