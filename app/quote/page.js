// app/request-quote/page.js
import QuoteContactForm from '@/components/QuoteContactForm'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgb(43,95,142)' }}>
            Request a Quote
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a personalized quote for your logistics and supply chain needs
          </p>
        </div>
        
        <div className="flex justify-center">
          <QuoteContactForm formType="quote" />
        </div>
      </div>
    </div>
  )
}