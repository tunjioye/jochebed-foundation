"use client"

import Boxed from "@/components/public/boxed"

export default function LocationOnMap() {
  return (
    <section className="w-full px-4 md:px-8">
      <Boxed>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d132375.91920346688!2d-78.96092237892854!3d43.948327170789234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d21ccd37533%3A0xdd8ceff2f844fcbf!2sOshawa%2C%20ON!5e1!3m2!1sen!2sca!4v1727034417411!5m2!1sen!2sca"
          width="100%"
          height="450"
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Boxed>
    </section>
  )
}
