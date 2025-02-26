"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "ما الذي يميز خدماتك عن غيرها؟",
    answer: "أتميز بتقديم خطط غذائية مخصصة تعتمد على احتياجات كل عميل ونمط حياته، باستخدام أحدث التقنيات مثل تحليل الجسم بجهاز InBody، بالإضافة إلى دمج المعرفة العلمية مع الدعم الشخصي لتحقيق نتائج فعّالة.",
  },
  {
    question: "هل أحتاج إلى زيارة المركز للحصول على خطة غذائية؟",
    answer: "ليس بالضرورة، حيث يمكنك الاستفادة من خدماتي عن بُعد، بما في ذلك تصميم خطة غذائية مخصصة ومتابعة أسبوعية عبر الهاتف أو مكالمات الفيديو.",
  },
  {
    question: "كم مدة الاستشارة؟",
    answer: "مدة الاستشارة الأولى عادة تكون من 30 إلى 45 دقيقة لتقييم حالتك الصحية والغذائية وتقديم التوصيات المناسبة.",
  },
  {
    question: "هل هناك متابعة بعد الاستشارة؟",
    answer: "نعم، في حال الاشتراك في البرامج الشهرية أو الباقات، يتم تقديم متابعة أسبوعية لتقييم التقدم وتعديل الخطة الغذائية عند الحاجة.",
  },
  {
    question: "هل أحتاج إلى إجراء تحاليل قبل الحجز؟",
    answer: "يفضل إجراء تحاليل الدم أو أي فحوصات طبية مرتبطة بحالتك الصحية، وسأقوم بتوجيهك لأي فحوصات إضافية إذا لزم الأمر.",
  },
  {
    question: "كيف يتم قياس النتائج ومتابعة التقدم؟",
    answer: "في الجلسات الحضورية، يتم استخدام جهاز InBody لتحليل الدهون، العضلات، والسوائل. أما في الجلسات عن بُعد، يمكنك قياس الوزن ومشاركته معي لتقييم التقدم وتعديل الخطة عند الحاجة.",
  },
  {
    question: "هل تقدمين برامج غذائية للأطفال أو الحوامل؟",
    answer: "نعم، أقدم برامج غذائية مخصصة للأطفال فوق 5 سنوات، بالإضافة إلى برامج متكاملة للحوامل والمرضعات بما يناسب احتياجاتهم الخاصة.",
  },
  {
    question: "هل الخطط الغذائية مخصصة حسب حالتي الصحية؟",
    answer: "بالتأكيد، كل خطة غذائية تُصمم بناءً على تقييم شامل لحالتك الصحية، أهدافك الشخصية، ونمط حياتك.",
  },
  {
    question: "هل يمكنني تغيير خطتي الغذائية أثناء البرنامج؟",
    answer: "نعم، يتم تعديل الخطط الغذائية بشكل دوري بناءً على تقدمك واحتياجاتك المتغيرة.",
  },
  {
    question: "هل أحتاج إلى ممارسة الرياضة مع الخطة الغذائية؟",
    answer: "النشاط البدني ليس شرطًا، ولكنه عنصر مهم لتحسين النتائج. بناءً على احتياجاتك، يمكنني تقديم نصائح حول التمارين المناسبة لك.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl w-full mx-auto my-12 px-8 md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">الأسئلة الشائعة</h2>

      {/* FAQ List */}
      <div className="space-y-2" dir="rtl">
        {faqs.slice(0, showMore ? faqs.length : 5).map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="border-b border-gray-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-right p-6 text-md font-semibold"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="p-6 pt-0 text-gray-700 leading-relaxed"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-6">
            <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-2 text-lg font-semibold text-white bg-[#7D4574] rounded-full shadow-md transition-all duration-300 hover:bg-[#B99CB5] hover:shadow-lg active:scale-95"
            >
                {showMore ? "عرض أقل" : "عرض المزيد"}
            </button>
        </div>
    </div>
  );
}
