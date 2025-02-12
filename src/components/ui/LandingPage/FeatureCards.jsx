"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Utensils, Activity, Brain , ChartNoAxesColumnIncreasing , Dumbbell} from "lucide-react"
import { Button } from "@/components/ui/button"

const adItems = [
  {
    title: "خطط غذائية مخصصة",
    description: "صممة خصيصًا لاحتياجاتك",
    icon: Utensils,
    color: "bg-[#6D9F71]",
  },
  {
    title: "متابعة التقدم",
    description: "تتبع نتائجك بسهولة",
    icon: ChartNoAxesColumnIncreasing,
    color: "bg-[#ECA383]",
  },
  {
    title: "استشارات غذائية",
    description: "جلسات فردية مع خبيرة التغذية",
    icon: Brain,
    color: "bg-[#666370]",
  },
  {
    title: "برامج إنقاص / زيادة الوزن ",
    description: "برامج فعالة و مستدامة لإنقاص او زيادة الوزن",
    icon: Activity,
    color: "bg-[#96CF9A]",
  },
  {
    title: "تغذية رياضية",
    description: "خطط تغذية لرياضيينو ممارسي التمارين",
    icon: Dumbbell,
    color: "bg-[#7D4574]",
  },
]

  export default function FeatureCards() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % adItems.length)
    }
  
    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + adItems.length) % adItems.length)
    }
  
    // useEffect(() => {
    //   const timer = setInterval(goToNext, 5000)
    //   return () => clearInterval(timer)
    // }, [])
  
    return (
      <section className="py-20 bg-primary/10 overflow-hidden ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            اكتشف قوة التغذية الذكية
          </h2>
  
          <div className="flex items-center gap-4 justify-center">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-zinc-300 hover:bg-white/30 transition-colors cursor-pointer shrink-0 ml-[10rem] z-10"
              aria-label="الشريحة السابقة"
            >
              <ArrowLeft className="w-8 h-8 text-white/90 hover:text-white" />
            </button>
  
            {/* Carousel Container */}
            <div className="relative h-[400px] w-full max-w-4xl mx-auto ">
              {adItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl ${item.color} text-white  shadow-2xl  rounded-xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon size={80} className="mb-6" />
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-xl mb-8 text-center">{item.description}</p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group hover:bg-primary/90"
                  >
                    اكتشف المزيد
                    <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </div>
  
            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-zinc-300 hover:bg-white/30 transition-colors cursor-pointer shrink-0 mr-[10rem] z-10"
              aria-label="الشريحة التالية"
            >
              <ArrowRight className="w-8 h-8 text-white/90 hover:text-white" />
            </button>
          </div>
  
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {adItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-gray-300"
                }`}
                aria-label={`انتقل إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }