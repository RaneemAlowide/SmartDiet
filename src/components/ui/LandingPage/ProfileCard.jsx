import Image from "next/image"; // Use if you're in a Next.js project
import profileImage from "@/Assets/doc2.png"; // Replace with the actual image path


export default function ProfileCard() {
  return (
    <section className="relative ">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden relative">
          {/* Left Section: Text Content */}
          <div className="w-full md:w-[100%] p-9 text-right"  dir="rtl"> {/* 80% width for text */}
            <div className="m-[3rem] mr-[5rem]">
                <h2 className="text-3xl font-bold mb-3 border-b-2 pb-2">
                الأخصائية وجدان البرادعي
                </h2>
                <ul className="list-disc pr-5 text-xl text-right">
                <li>أخصائية تغذية بخبرة تزيد عن 10 سنوات</li>
                <li>حاصلة على درجة الماجستير في الغذاء والأغذية من جامعة الملك عبدالعزيز بجدة</li>
                </ul>
                <br></br>
                <p className="text-xl leading-relaxed">
                أعمل على مساعدة العملاء في تحقيق أهدافهم الصحية والغذائية من خلال تقديم خطط غذائية
                مبتكرة ومخصصة.
                 <br/>أركز على فهم احتياجات كل فرد لبناء علاقة إيجابية مع الطعام وتحقيق
                توازن صحي يلائم نمط حياتهم.
                </p>
                <p className="text-xl mt-4">
                أؤمن بأن التغذية ليست مجرد نظام غذائي، بل أسلوب حياة يمكن أن يُحدث تغييرًا جذريًا في
                جودة حياة الأفراد. <br/>أسعى لأن أكون شريكة في رحلة عملائي الصحية،حيث أقدم الدعم الشخصي
                والمهني الذي يساعدهم على تحقيق نتائج دائمة تعزز صحتهم وثقتهم بأنفسهم.
                </p>
            </div>
          </div>

          {/* Right Section: Green Background (On the Far Right, Narrower & Taller) */}
          <div className="w-full md:w-[20%] bg-gradient-to-r from-green-200 to-green-500 flex items-center justify-center min-h-[450px] p-4 relative">
            {/* Image Overlapping Between White & Green */}
            <div className="absolute left-[-60px] md:left-[-70px] top-1/2 transform -translate-y-1/2">
            <Image 
                src={profileImage} 
                alt="وجدان البرادعي" 
                className="w-56 md:w-58 h-auto object-cover drop-shadow-lg scale-x-[-1] pt-[3rem]" 
            />
            </div>
          </div>
        </div>
    </section>
  );
}
