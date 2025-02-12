"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <section className="py-20 ">
      <div className="container">
        <Card className="overflow-hidden shadow-2xl rounded-xl">
          <div className="grid md:grid-cols-2  p-8">
            {/* Map Section */}
            <div className="h-[400px] rounded-lg overflow-hidden pl-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2777104644946!2d39.0907991!3d21.5083958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0de55555555%3A0xc613cce1646324a2!2zMjHCsDMwJzMwLjMiTiAzOcKwMTAnMjMuNSJF!5e0!3m2!1sen!2ssa!4v1706511600000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 pr-10" dir="rtl">
              <div className="text-right">
                <h2 className="text-3xl font-extrabold mb-8 text-[#7D4574]">معلومات التواصل</h2>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4 text-right">  
                  <MapPin className="w-6 h-6 text-[#7D4574] shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-normal text-lg mb-1"> برج جده الدولي للأعمال الدور الأول ، المملكة العربية السعودية، جدة</h3>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 text-right">
                <Phone className="w-6 h-6 text-[#7D4574] shrink-0" />
                <a 
                  href="https://wa.me/966555555555" 
                  className="flex items-center gap-4 text-right hover:bg-gray-100/50 p-3 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-normal text-lg">+966 55 555 5555</h3>
                  </div>
                </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 text-right">
                  <Mail className="w-6 h-6 text-[#7D4574] shrink-0" />
                  <a
                    href="mailto:Info@SmartDietCenter.com"
                    className="flex items-center gap-4 text-right hover:bg-gray-100/50 p-3 rounded-lg transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-normal text-lg">Info@SmartDietCenter.com</h3>
                    </div>
                  </a>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 text-right">
                <Clock className="w-6 h-6 text-[#7D4574] shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-normal text-lg mb-1">  ساعات العمل:</h3>
                    <p className="text-muted-foreground">السبت - الخميس: ٩ صباحاً - ٦ مساءً</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-[20rem] mt-8 text-lg h-12 bg-[#7D4574] hover:bg-[#B99CB5]"
                onClick={() => window.open("https://www.google.com/maps/dir//%D8%A8%D8%B1%D8%AC+%D8%AC%D8%AF%D9%87+%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A+%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D8%AF%D9%88%D8%B1+%D8%A7%D9%84%D8%A3%D9%88%D9%84,+%D8%A3%D8%A8%D9%88+%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85+%D8%A7%D9%84%D8%B4%D9%8A%D8%B1%D8%A7%D8%B2%D9%8A%D8%8C+%D8%AA%D9%82%D8%A7%D8%B7%D8%B9,+%D8%A3%D8%AD%D9%85%D8%AF+%D8%A7%D9%84%D8%B4%D8%A7%D9%87%D8%AF%D8%8C+%D9%85%D8%B9%D8%8C+%D8%A7%D9%84%D8%B1%D9%88%D9%8A%D8%B3,+%D9%85%D9%83%D8%A7%D8%AA%D8%A8+%D9%85%D8%AD%D8%A7%D9%83%D8%A7%D9%87+%D8%8C+%D9%85%D9%83%D8%AA%D8%A8,+%D9%85%D9%83%D8%AA%D8%A8+%D8%B1%D9%82%D9%85+A03,+jeddah%E2%80%AD/@21.5083958,39.0907991,27988m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x15c3d0de55555555:0xc613cce1646324a2!2m2!1d39.1732008!2d21.508416?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D", "_blank")}
              >
                احصل على الإتجاهات
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
