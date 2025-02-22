import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import services1 from "@/Assets/services1.png"
import services2 from "@/Assets/services2.png"
import Image from "next/image";
import { CalendarDays ,Video , ClipboardList, CalendarCheck, UserCheck, ClipboardCheck} from "lucide-react"

export default function ServicesCard() {
  return (
    <div className="flex justify-center items-center rounded-none">
      {/* Background Card */}
      <Card className="w-screen pt-8 pb-8 bg-gray-100 shadow-xl relative rounded-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">الخدمات لدينا</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6 justify-center items-center">
          
          {/* Remote Services Card */}
          <Card className="w-full md:w-96 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">خدمات عن بعد</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={services2}
                alt="Remote Services"
                className="rounded-lg mb-4 h-[9rem] w-full"
              />
               <div className="w-full space-y-2">
                <div className="bg-purple-100 text-right p-2 rounded-md flex flex-row-reverse items-center gap-2">
                  <Video className="w-5 h-5 text-purple-600" />
                  <span>استشارة غذائية عن بعد</span>
                </div>
                <div className="bg-purple-100 text-right p-2 rounded-md flex flex-row-reverse items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-purple-600" />
                  <span>اشتراك نظام غذائي لمدة شهر عن بعد</span>
                </div>
                <div className="bg-purple-100 text-right p-2 rounded-md flex flex-row-reverse items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-purple-600" />
                  <span>اشتراك نظام غذائي لمدة شهرين عن بعد</span>
                </div>
              </div>
              <Button className="mt-4 w-full bg-purple-600 text-white hover:bg-purple-700">
                اكتشف المزيد →
              </Button>
            </CardContent>
          </Card>

          {/* In-Person Services Card */}
          <Card className="w-full md:w-96 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">خدمات حضورية</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={services1}
                alt="In-Person Services"
                className="rounded-lg mb-4 h-[9rem] w-full"
              />
              <div className="w-full space-y-2">
                <div className="bg-purple-100 text-right p-2 rounded-md flex flex-row-reverse items-center gap-2">
                  <UserCheck className="w-5 h-5 text-purple-600" />
                  <span>استشارة غذائية شاملة (زيارة واحدة)</span>
                </div>
                <div className="bg-purple-100 text-right p-2 rounded-md flex flex-row-reverse items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-purple-600" />
                  <span>اشتراك نظام غذائي مع متابعة أسبوعية لمدة شهر</span>
                </div>
                <div className="bg-purple-100 text-right p-2 rounded-md flex flex-row-reverse items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-600" />
                  <span>اشتراك نظام غذائي مع متابعة أسبوعية لمدة شهرين</span>
                </div>
              </div>
              <Button className="mt-4 w-full bg-purple-600 text-white hover:bg-purple-700">
                اكتشف المزيد →
              </Button>
            </CardContent>
          </Card>

        </CardContent>
      </Card>
    </div>
  );
}
