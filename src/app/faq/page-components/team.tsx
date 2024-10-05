"use client"

import tikuImage from "/public/img/tiku-nosakhare.webp"
import linkedInLogo from "/public/img/linkedin-logo.webp"

const TEAM_MEMBERS = [
  {
    name: "Tiku Nosakhare",
    image: tikuImage.src,
    linkedIn: "https://www.linkedin.com/in/tikuokoye",
  },
]

export default function Team() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center">
          <h2 className="font-heading text-center text-4xl font-bold mb-4">Meet The Team</h2>
          <div className="mt-6 border-t-4 border-black w-10 mx-auto"></div>
        </div>

        <div className="mt-16 mx-auto grid grid-cols-1 sm:grid-cols-1 gap-12 text-center">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="w-[217px] h-[217px] mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl text-gray-900">{member.name}</h3>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block mt-2 text-gray-600 hover:opacity-80"
              >
                <img src={linkedInLogo.src} alt="LinkedIn" className="w-[42px] h-[42px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
