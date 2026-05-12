// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Lock, Mail, Eye, EyeOff, Package } from 'lucide-react'

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false,
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle login logic here
//     console.log('Login attempt:', formData)
//   }

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }))
//   }

//   return (
//     <div className="min-h-screen bg-asb-light-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex flex-col items-center">
//           {/* Logo */}
//           <div className="flex items-center space-x-2 mb-6">
//             <div className="bg-asb-navy p-2 rounded">
//               <Package className="h-8 w-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-asb-navy">ASB LOGISTICS</h1>
//               <p className="text-xs text-gray-600 text-center">B.V.</p>
//             </div>
//           </div>
          
//           <div className="bg-asb-navy p-3 rounded-lg mb-6">
//             <Lock className="h-12 w-12 text-asb-yellow" />
//           </div>
//         </div>
        
//         <h2 className="mt-2 text-center text-3xl font-bold text-asb-navy">
//           Client Portal Login
//         </h2>
//         <p className="mt-2 text-center text-gray-600">
//           Access your logistics dashboard and management tools
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10 border border-gray-200">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="mt-1 relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-asb-navy focus:border-transparent"
//                   placeholder="you@company.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="pl-10 pr-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-asb-navy focus:border-transparent"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="rememberMe"
//                   name="rememberMe"
//                   type="checkbox"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-asb-navy focus:ring-asb-navy border-gray-300 rounded"
//                 />
//                 <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link href="/forgot-password" className="text-asb-yellow hover:text-yellow-600">
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-asb-navy bg-asb-yellow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-asb-yellow transition-colors duration-200"
//               >
//                 Sign in to dashboard
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   New to ASB Logistics?
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <Link
//                 href="/register"
//                 className="w-full flex justify-center py-3 px-4 border-2 border-asb-navy rounded-lg shadow-sm text-sm font-medium text-asb-navy bg-white hover:bg-asb-navy hover:text-white transition-colors duration-200"
//               >
//                 Create new account
//               </Link>
//             </div>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 Need help?{' '}
//                 <Link href="/contact" className="text-asb-navy hover:text-blue-800 font-medium">
//                   Contact our support team
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Security Notice */}
//         <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
//           <p className="text-sm text-blue-800 text-center">
//             <Lock className="inline h-4 w-4 mr-1" />
//             Your data is securely encrypted. Access your logistics data safely.
//           </p>
//         </div>

//         {/* Demo Credentials */}
//         <div className="mt-6 text-center">
//           <p className="text-xs text-gray-500">
//             Demo: test@asblogistics.nl / demo123
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }