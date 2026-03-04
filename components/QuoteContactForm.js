// components/QuoteContactForm.jsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Color definitions
const NEW_BLUE = 'rgb(43,95,142)' // #2B5F8E
const NEW_YELLOW = 'rgb(247,162,51)' // #F7A233

// EmailJS Configuration
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'KNQmbQxBKNPAI5qHu',
  SERVICE_ID: 'service_b5rohns',
  TEMPLATE_ADMIN: 'template_hqa3dsw',
  TEMPLATE_USER: 'template_k8hiscs'
}

export default function QuoteContactForm({ formType = 'contact', onSuccess }) {
  const formRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    website: '',
    email: '',
    phone: '',
    message: ''
  })

  const [fieldErrors, setFieldErrors] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  }, [])

  // Validation functions
  const validateName = (value) => {
    const nameRegex = /^[A-Za-z\s]*$/
    return nameRegex.test(value)
  }

  const validatePhone = (value) => {
    const phoneRegex = /^\d{0,10}$/
    return phoneRegex.test(value)
  }

  const validateEmail = (value) => {
    return value.endsWith('@gmail.com')
  }

  const validateField = (name, value) => {
    switch(name) {
      case 'firstName':
      case 'lastName':
        if (value && !validateName(value)) {
          return 'Only letters and spaces are allowed'
        }
        break
      case 'phone':
        if (value && !validatePhone(value)) {
          return 'Only 10 digits allowed, no alphabets'
        }
        if (value && value.length > 0 && value.length < 10) {
          return 'Phone number must be 10 digits'
        }
        break
      case 'email':
        if (value && !validateEmail(value)) {
          return 'Only @gmail.com email addresses are allowed'
        }
        break
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = value

    // Apply validations based on field type
    if (name === 'firstName' || name === 'lastName') {
      if (!validateName(value) && value !== '') {
        return // Don't update if invalid character
      }
    }

    if (name === 'phone') {
      // Remove any non-digit characters
      newValue = value.replace(/\D/g, '')
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10) // Limit to 10 digits
      }
    }

    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    // Validate field
    const error = validateField(name, newValue)
    setFieldErrors(prev => ({ ...prev, [name]: error }))
    
    if (submitError) setSubmitError('')
  }

  const generateReferenceId = () => {
    return 'ASB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase()
  }

  const validateStep1 = () => {
    let isValid = true
    const errors = {}

    // Validate company
    if (!formData.company) {
      errors.company = 'Company name is required'
      isValid = false
    }

    // Validate first name
    if (!formData.firstName) {
      errors.firstName = 'First name is required'
      isValid = false
    } else if (!validateName(formData.firstName)) {
      errors.firstName = 'Only letters and spaces are allowed'
      isValid = false
    }

    // Validate last name
    if (!formData.lastName) {
      errors.lastName = 'Last name is required'
      isValid = false
    } else if (!validateName(formData.lastName)) {
      errors.lastName = 'Only letters and spaces are allowed'
      isValid = false
    }

    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Only @gmail.com email addresses are allowed'
      isValid = false
    }

    // Validate phone (optional but if provided must be valid)
    if (formData.phone && formData.phone.length > 0) {
      if (formData.phone.length < 10) {
        errors.phone = 'Phone number must be 10 digits'
        isValid = false
      }
    }

    setFieldErrors(prev => ({ ...prev, ...errors }))
    return isValid
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    
    if (validateStep1()) {
      setCurrentStep(2)
      setSubmitError('')
    } else {
      setSubmitError('Please fix the errors before proceeding')
    }
  }

  const handlePrevStep = (e) => {
    e.preventDefault()
    setCurrentStep(1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    try {
      const referenceId = generateReferenceId()
      const submissionDate = new Date().toLocaleString('en-US', { 
        timeZone: 'UTC',
        dateStyle: 'full',
        timeStyle: 'short'
      })

      // Prepare template parameters
      const templateParams = {
        // Personal info
        name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company || 'Not provided',
        website: formData.website || 'Not provided',
        phone: formData.phone || 'Not provided',
        message: formData.message,
        
        // Form type specific
        formType: formType === 'quote' ? 'Request a Quote' : 'Contact Form',
        reference_id: referenceId,
        submission_date: submissionDate,
        
        // Admin specific
        to_email: 'info@asblogi.com',
        admin_name: 'ASB Logistics Team',
        
        // User specific
        user_name: `${formData.firstName} ${formData.lastName}`,
        from_name: 'ASB Logistics',
        reply_to: 'info@asblogi.com'
      }

      // Send email to admin
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ADMIN,
        {
          ...templateParams,
          to_email: 'info@asblogi.com',
          to_name: 'ASB Logistics Admin'
        }
      )

      // Send auto-reply to user
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_USER,
        {
          ...templateParams,
          to_email: formData.email,
          to_name: formData.firstName
        }
      )

      // Success!
      setSubmitSuccess(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          company: '',
          firstName: '',
          lastName: '',
          website: '',
          email: '',
          phone: '',
          message: ''
        })
        setFieldErrors({
          company: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        })
        setCurrentStep(1)
        setSubmitSuccess(false)
        if (onSuccess) onSuccess()
      }, 5000)

    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl w-full mx-auto">
      {/* Header */}
      <div 
        className="px-6 sm:px-8 py-4 sm:py-6"
        style={{ backgroundColor: NEW_BLUE }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {formType === 'quote' ? 'Request a quote directly from Asblogi' : 'Contact Us'}
        </h2>
        <p className="text-white/80 text-xs sm:text-sm mt-1">
          {formType === 'quote' 
            ? 'Benefit from the advantages of fulfillment at Asblogi request a quote.' 
            : 'Get in touch with our team for any inquiries'}
        </p>
      </div>

      {/* Progress Steps */}
      <div className="px-6 sm:px-8 pt-4 sm:pt-6 pb-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2">
            <div 
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors
                ${currentStep >= 1 ? 'text-white' : 'text-gray-400 bg-gray-100'}`}
              style={{ 
                backgroundColor: currentStep >= 1 ? NEW_YELLOW : undefined,
                color: currentStep >= 1 ? 'white' : undefined 
              }}
            >
              1
            </div>
            <span className="text-xs sm:text-sm font-medium text-black">
              Contact
            </span>
          </div>
          
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
          
          <div className="flex items-center gap-1 sm:gap-2">
            <div 
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors
                ${currentStep >= 2 ? 'text-white' : 'text-gray-400 bg-gray-100'}`}
              style={{ 
                backgroundColor: currentStep >= 2 ? NEW_YELLOW : undefined,
                color: currentStep >= 2 ? 'white' : undefined 
              }}
            >
              2
            </div>
            <span className="text-xs sm:text-sm font-medium text-black">
              Fulfillment needs
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
        {submitSuccess && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-green-50 border border-green-200">
            <p className="text-green-700 text-sm sm:text-base font-medium">
              {formType === 'quote' 
                ? 'Quote request sent successfully! We\'ll get back to you within 2 hours.' 
                : 'Message sent successfully! We\'ll respond within 2 hours.'}
            </p>
          </div>
        )}

        {submitError && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-red-50 border border-red-200">
            <p className="text-red-600 text-sm sm:text-base">{submitError}</p>
          </div>
        )}

        {/* Step 1: Contact */}
        {currentStep === 1 && (
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Asblogi"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-black placeholder-gray-400 text-sm sm:text-base
                  ${fieldErrors.company ? 'border-red-500' : 'border-gray-200'}`}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
              {fieldErrors.company && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.company}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-black placeholder-gray-400 text-sm sm:text-base
                    ${fieldErrors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
                {fieldErrors.firstName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-black placeholder-gray-400 text-sm sm:text-base
                    ${fieldErrors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
                {fieldErrors.lastName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                Website url
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="asblogi.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all text-black placeholder-gray-400 text-sm sm:text-base"
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="info@gmail.com"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-black placeholder-gray-400 text-sm sm:text-base
                  ${fieldErrors.email ? 'border-red-500' : 'border-gray-200'}`}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
              {fieldErrors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                Phone Number <span className="text-gray-500 text-xs">(10 digits)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
                maxLength="10"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-black placeholder-gray-400 text-sm sm:text-base
                  ${fieldErrors.phone ? 'border-red-500' : 'border-gray-200'}`}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
              {fieldErrors.phone && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.phone}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Fulfillment needs */}
        {currentStep === 2 && (
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-black">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Type your message..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none text-black placeholder-gray-400 text-sm sm:text-base"
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${NEW_YELLOW}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          {currentStep === 2 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all hover:opacity-80 text-black text-sm sm:text-base order-2 sm:order-1"
              style={{ 
                backgroundColor: '#F3F4F6'
              }}
            >
              Back
            </button>
          )}
          
          {currentStep === 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="w-full sm:w-auto ml-0 sm:ml-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all hover:opacity-90 flex items-center justify-center gap-2 text-white text-sm sm:text-base order-1 sm:order-2"
              style={{ 
                backgroundColor: NEW_YELLOW
              }}
            >
              Next Step
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto ml-0 sm:ml-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm sm:text-base order-1 sm:order-2"
              style={{ 
                backgroundColor: NEW_BLUE
              }}
            >
              {isSubmitting ? 'Sending...' : formType === 'quote' ? 'Request Quote' : 'Send Message'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}