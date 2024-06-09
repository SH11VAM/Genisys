"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Anurag",
    avatar: "J",
    title: "Student",
    description: "This is the best application I've ever used!",
  },

  {
    name: "Chirag",
    avatar: "M",
    title: "Student",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Somesh",
    avatar: "M",
    title: "Student",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
  {
    name: "Raghav",
    avatar: "r",
    title: "Student",
    description:
      "Efficiency at its best! This coding tool streamlines the development process, allowing me to focus on writing clean and efficient code.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#030304] border-none text-white shadow-lg shadow-gray-600"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
