// import Link from 'next/link'
// import { ArrowRight, CheckCircle, Truck, Package, Shield, Warehouse, Clock, Globe } from 'lucide-react'

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* Logistics Warehouse Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         ></div>
        
//         {/* Gradient Overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85"></div>
        
//         {/* Pattern overlay for texture */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#F7A233_49%,transparent_50%,transparent_98%,#F7A233_99%,transparent)] bg-[length:60px_60px]"></div>
//         </div>
        
//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-asb-blue/5 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7A233]/5 rounded-full -translate-x-32 translate-y-32"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <div className="inline-flex items-center px-4 py-2 bg-[#F7A233]/20 backdrop-blur-sm rounded-full mb-6 border border-[#F7A233]/30">
//               <span className="text-asb-blue font-semibold text-sm">ASB LOGISTICS B.V.</span>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-asb-blue mb-6 leading-tight">
//               Tailor-made fulfilment for 
//               <span className="text-[#F7A233]"> ambitious entrepreneurs</span>
//             </h1>
            
//             <p className="text-xl text-gray-700 mb-8 leading-relaxed">
//               <span className="font-bold text-asb-blue">Grow your online store – we'll handle the rest</span><br />
//               Whether you're just starting out or processing thousands of orders each month – we make sure logistics aren't a bottleneck, but a growth accelerator.
//             </p>
            
//             <p className="text-lg text-gray-600 mb-10">
//               With our fulfilment service, we take care of storage, order processing, packaging, and shipping. You focus on your brand – we'll handle the rest.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/quote"
//                 className="group relative bg-[#F7A233] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e69122] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center justify-center">
//                   Request a quote
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               </Link>
//               <Link
//                 href="/contact"
//                 className="group relative border-2 border-asb-blue text-asb-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-asb-blue hover:text-white transition-all duration-300 hover:scale-105 transform"
//               >
//                 <span className="flex items-center justify-center">
//                   Contact us
//                 </span>
//               </Link>
//             </div>
            
//             {/* Trust indicators */}
//             <div className="mt-12 flex flex-wrap items-center gap-8">
//               <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span className="text-gray-700 font-medium">No setup fees</span>
//               </div>
//               <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span className="text-gray-700 font-medium">Flexible contracts</span>
//               </div>
//               <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span className="text-gray-700 font-medium">24/7 support</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Stats & Features */}
//           <div className="space-y-6">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center mb-3">
//                   <div className="bg-[#F7A233]/10 p-2 rounded-lg mr-3">
//                     <Clock className="h-5 w-5 text-[#F7A233]" />
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold text-asb-blue">99.9%</div>
//                     <div className="text-gray-600 text-sm">Order accuracy</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center mb-3">
//                   <div className="bg-[#F7A233]/10 p-2 rounded-lg mr-3">
//                     <Globe className="h-5 w-5 text-[#F7A233]" />
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold text-asb-blue">24/7</div>
//                     <div className="text-gray-600 text-sm">Warehouse access</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Feature Cards */}
//             <div className="space-y-4">
//               <div className="bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
//                 <div className="flex items-start">
//                   <div className="bg-white/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
//                     <Truck className="h-8 w-8 text-[#F7A233]" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">Same-day shipping</h3>
//                     <p className="text-gray-300">Orders before 3 PM shipped today</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
//                 <div className="flex items-start">
//                   <div className="bg-asb-blue/10 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
//                     <Warehouse className="h-8 w-8 text-asb-blue" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-asb-blue mb-2">10,000 m² storage</h3>
//                     <p className="text-gray-600">Modern warehouse in Barendrecht</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
//                 <div className="flex items-start">
//                   <div className="bg-asb-blue/10 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
//                     <Shield className="h-8 w-8 text-asb-blue" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-asb-blue mb-2">Secure & insured</h3>
//                     <p className="text-gray-600">24/7 CCTV and full insurance</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Trust Badge */}
//             <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-gray-100 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="flex -space-x-2 mr-3">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="w-8 h-8 bg-gradient-to-br from-[#F7A233] to-[#e69122] rounded-full border-2 border-white"></div>
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-800">500+ Businesses</div>
//                     <div className="text-sm text-gray-600">Trust our logistics</div>
//                   </div>
//                 </div>
//                 <div className="text-[#F7A233] font-bold">✓</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Pattern */}
//         <div className="mt-16 pt-8 border-t border-gray-200">
//           <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
//               <span>Real-time tracking</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
//               <span>Custom packaging</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
//               <span>API integration</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
//               <span>Multi-channel support</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import Link from 'next/link'
import { ArrowRight, CheckCircle, Truck, Package, Shield, Warehouse, Clock, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Logistics Warehouse Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1.1) contrast(0.95)'
          }}
        ></div>
        
        {/* Light Gradient Overlay - Reduced opacity for more image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/50"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#F7A233_49%,transparent_50%,transparent_98%,#F7A233_99%,transparent)] bg-[length:80px_80px]"></div>
        </div>
        
        {/* Color tint overlay for brand consistency */}
        <div className="absolute inset-0 mix-blend-overlay opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-asb-blue/20 via-[#F7A233]/10 to-asb-blue/20"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-asb-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7A233]/10 rounded-full -translate-x-32 translate-y-32 blur-2xl"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-asb-blue/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-asb-blue mb-6 leading-tight drop-shadow-sm">
              Tailor-made fulfilment for 
              <span className="text-[#F7A233] drop-shadow"> ambitious entrepreneurs</span>
            </h1>
            
            <p className="text-xl text-gray-800 mb-8 leading-relaxed drop-shadow-sm">
              <span className="font-bold text-asb-blue">Grow your online store – we'll handle the rest</span><br />
              Whether you're just starting out or processing thousands of orders each month – we make sure logistics aren't a bottleneck, but a growth accelerator.
            </p>
            
            <p className="text-lg text-gray-700 mb-10 drop-shadow-sm">
              With our fulfilment service, we take care of storage, order processing, packaging, and shipping. You focus on your brand – we'll handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="group relative bg-[#F7A233] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e69122] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Request a quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative border-2 border-asb-blue text-asb-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-asb-blue hover:text-white transition-all duration-300 hover:scale-105 transform bg-white/90 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  Contact us
                </span>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-300 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">No setup fees</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-300 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Flexible contracts</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-300 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">24/7 support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Features */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-[#F7A233]/20 p-2 rounded-lg mr-3">
                    <Clock className="h-5 w-5 text-[#F7A233]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-asb-blue">99.9%</div>
                    <div className="text-gray-700 text-sm">Order accuracy</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-[#F7A233]/20 p-2 rounded-lg mr-3">
                    <Globe className="h-5 w-5 text-[#F7A233]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-asb-blue">24/7</div>
                    <div className="text-gray-700 text-sm">Warehouse access</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-asb-blue to-[rgb(33,85,132)] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-asb-blue/30">
                <div className="flex items-start">
                  <div className="bg-white/30 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-8 w-8 text-[#F7A233]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Same-day shipping</h3>
                    <p className="text-gray-200">Orders before 3 PM shipped today</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start">
                  <div className="bg-asb-blue/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Warehouse className="h-8 w-8 text-asb-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-asb-blue mb-2">10,000 m² storage</h3>
                    <p className="text-gray-700">Modern warehouse in Barendrecht</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start">
                  <div className="bg-asb-blue/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-asb-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-asb-blue mb-2">Secure & insured</h3>
                    <p className="text-gray-700">24/7 CCTV and full insurance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-[#F7A233] to-[#e69122] rounded-full border-2 border-white shadow-sm"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">500+ Businesses</div>
                    <div className="text-sm text-gray-700">Trust our logistics</div>
                  </div>
                </div>
                <div className="text-[#F7A233] font-bold text-xl">✓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="mt-16 pt-8 border-t border-gray-300/50">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-800">
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">Real-time tracking</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">Custom packaging</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">API integration</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
              <div className="w-2 h-2 bg-[#F7A233] rounded-full mr-2"></div>
              <span className="text-sm font-medium">Multi-channel support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}