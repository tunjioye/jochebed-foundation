"use client"

import Boxed from "@/components/public/boxed"

const FEATURES = [
  {
    title: "Eco-Friendly Design",
  },
  {
    title: "Multilingual Functionality",
  },
  {
    title: "Advanced Tech",
  },
  {
    title: "Licensed Professionals",
  },
  {
    title: "24/7 Support",
  },
]

export default function Features() {
  return (
    <section className="w-full bg-jf-gray pt-16 pb-20 px-4 md:px-8">
      <Boxed>
        <h2 className="font-heading text-center text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={feature.title} className="border-b-[3px] border-b-black">
              <h3 className="font-heading text-4xl mb-2">{`0${index + 1}.`}</h3>
              <p className="text-lg mb-4 max-w-[75%]">{feature.title}</p>
            </div>
          ))}
        </div>
      </Boxed>
    </section>
  )
}
