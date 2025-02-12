// "use client"

// import { ArrowLeft } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import heroPic from "@/Assets/heropic2.png"
// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="w-screen py-[5rem] pt-20 flex items-center justify-center bg-gradient-to-r from-[#7D4574] to-[#7D4574]">
//       <div className="container mx-auto px-4 relative"> {/* Relative positioning to contain the image */}
//         <div className="text-center space-y-8" dir="rtl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             رحلتك نحو <span className="text-[#6D9F71]">التغذية الذكية</span>
//           </h1>
          
//           <div className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
//             اكتشف خطط التغذية المحصصة المدعومة بالعلم والخبرة
//           </div>

//           {/* Full width image container */}
//           <div className="relative w-full">
//             <Image 
//               src={heroPic} 
//               alt="heroPic" 
//               className="w-full h-auto object-cover"  // Full width, automatic height adjustment
//               layout="intrinsic"  // Ensures the aspect ratio is maintained
//               width={1600}        // You can adjust these dimensions as needed
//               height={900}
//             />
//           </div>

//           <Button
//             className="group text-lg px-8 py-6 bg-[#86C789] hover:bg-[#75B678] mt-[23rem]"
//           >
//             انضم إلينا و حقق أهدافك
//             <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroPic from "@/Assets/heropic2.png"
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-screen py-[6rem] pt-20 flex items-center justify-center bg-gradient-to-r from-[#7D4574] to-[#7D4574]">
      <div className="container mx-auto px-4">
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
          dir="rtl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            رحلتك نحو <span className="text-[#6D9F71]">التغذية الذكية</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"> اكتشف خطط التغذية المحصصة المدعومة بالعلم والخبرة</p>

          <div>
            {/* Full width image container */}
            <div className="absolute left-0 w-screen">
              <Image 
                src={heroPic} 
                alt="heroPic" 
                className="w-full h-[20rem] object-cover"
                style={{ 
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100vw',
                  maxWidth: '100vw'
                }}
              />
            </div>

            <Button
              className="group text-lg px-8 py-6 bg-[#86C789] hover:bg-[#75B678] mt-[23rem]"
            >
              انضم إلينا و حقق أهدافك
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}