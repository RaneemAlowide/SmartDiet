"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

// Testimonials Data
const testimonials = [
  {
    text: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 1,
    author: "Michael Brown",
    role: "Online Entrepreneur",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    text: "I was hesitant to switch but the control panel is user-friendly, and I love the one-click installation for apps.",
    rating: 5,
    author: "Sarah Johnson",
    role: "Blogger",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    text: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 1,
    author: "Michael Brown",
    role: "Online Entrepreneur",
    image: "/placeholder.svg?height=64&width=64",
  }, {
    text: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 1,
    author: "Michael Brown",
    role: "Online Entrepreneur",
    image: "/placeholder.svg?height=64&width=64",
  }, {
    text: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 2,
    author: "Michael Brown",
    role: "Online Entrepreneur",
    image: "/placeholder.svg?height=64&width=64",
  }, {
    text: "Ie for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 4,
    author: "Michael Brown",
    role: "Online Entrepreneur",
    image: "/placeholder.svg?height=64&width=64",
  },
];

// ⭐ Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-3">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-5 w-5 mx-[2px] ${
          star <= rating ? "fill-[#ffb800] text-[#ffb800]" : "fill-none text-gray-300"
        }`}
      />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scrollTo = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 250;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY * 1.5;
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative mt-[12rem]">
      {/* Header Section */}
      <div className="bg-[#7d4574] pt-[4rem] min-h-[350px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => scrollTo("left")}
                className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scrollTo("right")}
                className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-1 text-right">
              <h2 className="text-sm text-white/80">تعليقات العملاء</h2>
              <h3 className="text-3xl font-bold text-white">قصص النجاح</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Testimonials */}
      <div
        ref={scrollRef}
        className="relative -mt-48 flex overflow-x-auto pb-12 scrollbar-hide gap-6 px-8"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
           className="min-w-[300px] max-w-[320px] min-h-[350px] flex flex-col items-center text-center flex-shrink-0 rounded-2xl bg-white p-5 shadow-lg scroll-snap-align-start"
          >
            {/* Testimonial Text */}
            <p className="mb-6 text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>

            {/* Star Rating */}
            <StarRating rating={testimonial.rating} />

            {/* Profile */}
            <div className="mt-6 flex flex-col items-center">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-300"
              />
              <div className="mt-3">
                <h4 className="text-md font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
