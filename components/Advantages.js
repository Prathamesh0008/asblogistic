import Link from 'next/link'
import Image from 'next/image'

export default function EFulfilmentSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* First Row: Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          
          {/* Left Column: Boxes Image */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image 
              src="/images/boxes.jpg" // Your boxes image
              alt="Cardboard boxes organized on warehouse shelves"
              className="w-full h-full object-cover"
              width={600}
              height={320}
            />
          </div>
          
          {/* Right Column: Content 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-asb-blue mb-6">
              Why choose our fulfilment services?
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-asb-orange rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold">✔</span>
                </div>
                <p className="text-gray-700">
                  Scalability: from 10 to 10,000 orders per month
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-asb-orange rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold">✔</span>
                </div>
                <p className="text-gray-700">
                  Short lines of communication: direct contact with a dedicated team
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-asb-orange rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold">✔</span>
                </div>
                <p className="text-gray-700">
                  Affordable solutions for every type of business
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-asb-orange rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-bold">✔</span>
                </div>
                <p className="text-gray-700">
                  International shipping? No problem.
                </p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Whether you sell physical products through your own webshop, bol.com, Amazon, or Shopify – our fulfilment solution grows with you. No more worries about storage space, peak periods, or late deliveries.
            </p>
          </div>
        </div>

        {/* Second Row: Image Right, Content Left (Reverse) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content 2 */}
          <div>
            {/* E-fulfilment Box */}
            <div className="bg-asb-light-gray rounded-lg p-6 border-l-4 border-asb-orange">
              <div className="flex items-center mb-3">
                <div className="px-3 py-1 bg-asb-orange/20 rounded-full">
                  <h3 className="text-asb-blue font-bold">E-fulfilment</h3>
                </div>
              </div>
              <h4 className="text-xl font-bold text-asb-blue mb-2">What is E-fulfilment?</h4>
              <p className="text-gray-600">
                E-fulfilment is the processing of orders from web shops. Customers are more likely to order again in your web shop if their order is processed completely and correctly.
              </p>
            </div>
          </div>
          
          {/* Right Column: Packing Image */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image 
              src="/images/packing.jpg" // Your packing image
              alt="Professional packing and order preparation"
              className="w-full h-full object-cover"
              width={600}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  )
}