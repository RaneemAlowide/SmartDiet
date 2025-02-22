"use client"
import BackgroundWrapper from '@/components/BackgroundWrapper';
import { HandHeart, NotebookText, ThumbsUp} from "lucide-react"
import ServicesCard from "@/components/ui/LandingPage/ServicesCard"
import { Card } from "@/components/ui/card";


const services = [ 
    {
        icon: NotebookText,
        title: " خطط مخصصة تمامًا ",
        description: " كل نظام غذائي مصمم ليناسب أهدافك الفريدة سواء خسارة الوزن، زيادته، أو تحسين حالتك الصحية", 
    },
    {
        icon: ThumbsUp,
        title: " دقة عالية",
        description: "جهاز InBody يمنحك تحليلًا دقيقًا لجسمك لتحديد احتياجاتك بشكل أفضل", 
    },
    {
        icon: HandHeart,
        title: "دعم مستمر",
        description: "متابعة دورية حضورية أو عن بعد للتأكد من أنك على الطريق الصحيح", 
    },
]

export default function ServicesSection() {
  return (
    <section className="relative">
        <BackgroundWrapper>
            <div className="container relative">
                {/* Purple Section */}
                <Card className="overflow-hidden bg-[#7D4574] text-white w-screen h-[18rem] rounded-none flex flex-col justify-center text-center"> 
                    <h2 className="text-4xl font-bold -mt-[8rem] ">ما نقدمه</h2>
                    <p className="text-gray-100 font-thin text-xl mt-[7px] ">
                        نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتك الغذائية
                    </p>
                </Card> 
                
                {/* Centered Service Cards Section */}
                <div className="flex justify-center w-full mt-[-8rem] relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] px-8 max-w-7xl ml-[3rem]">
                        {services.map((item, index) => (
                            <Card key={index} className="bg-gray-100 text-primary-content shadow-xl p-5 flex flex-col items-center">
                                <item.icon size={50} className="mb-6 bg-[#ECA383] p-3 rounded-full" />
                                <h2 className="text-3xl font-bold mb-4 text-center text-[#6D9F71]">{item.title}</h2>
                                <p className="text-xl text-center">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className='min-h-screen w-screen pt-[7rem]'>
                    <ServicesCard />
                </div>

            
            </div>

           
        </BackgroundWrapper>

        <services2 />
    </section>
  )
}

