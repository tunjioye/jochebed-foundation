"use client"

import Boxed from "@/components/public/boxed"
import Link from "next/link"

export default function Faq() {
  return (
    <section className="w-full pt-16 pb-20 px-4 md:px-8">
      <Boxed>
        <h2 className="font-heading text-center text-4xl font-bold mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center text-lg mb-1">You Ask. We Answer.</div>
          <p className="text-base text-center mb-8">
            We’ve compiled a list of frequently asked questions and answers for your convenience. If
            you can’t find what you’re looking for, please get in touch and we’ll respond to your
            inquiry as quickly as possible.
          </p>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              What is the mission of Jochebed Foundation
            </div>
            <p className="text-base text-center">
              To reach people by exemplifying God&apos;s love, just as He did through His Son.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              How can I apply for a scholarship from Jochebed Foundation?
            </div>
            <p className="text-base text-center">
              To apply for a scholarship, please visit our &quot;
              <Link href="/scholarship" className="underline hover:text-jf-yellow">
                Scholarship
              </Link>
              &quot; page and follow the application instructions outlined there. Be sure to check
              the application deadline and eligibility criteria.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              Who is eligible for scholarships from Jochebed Foundation?
            </div>
            <p className="text-base text-center">
              Scholarship eligibility criteria may vary depending on the specific scholarship
              program. Generally, eligibility is based on factors such as academic achievement,
              financial need, and other specified requirements. Detailed eligibility information can
              be found on our &quot;
              <Link href="/scholarship" className="underline hover:text-jf-yellow">
                Scholarship
              </Link>
              &quot; page.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              What types of scholarships does Jochebed Foundation offer?
            </div>
            <p className="text-base text-center">
              Jochebed Foundation offers a variety of scholarships, visit our &quot;
              <Link href="/scholarship" className="underline hover:text-jf-yellow">
                Scholarship
              </Link>
              &quot; page to learn more.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              How can I support Jochebed Foundation&apos;s mission?
            </div>
            <p className="text-base text-center">
              There are several ways to support our mission, including donating, becoming a mentor
              or volunteer, and helping spread the word. Visit our &quot;
              <Link href="/get-involved" className="underline hover:text-jf-yellow">
                Get Involved
              </Link>
              &quot; page more information.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">Can I donate to Jochebed Foundation?</div>
            <p className="text-base text-center">
              Yes, we welcome donations from individuals, organizations, and businesses that share
              our commitment to bring all individuals to Christ and empower stewards.{" "}
              <Link
                href="https://opencollective.com/jochebedfoundation#category-CONTRIBUTE"
                className="underline text-jf-yellow"
              >
                Visit our OpenCollective page to make a contribution.
              </Link>
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              How does Jochebed Foundation ensure transparency and accountability?
            </div>
            <p className="text-base text-center">
              Jochebed Foundation is committed to transparency and accountability in all its
              activities. We maintain financial records, regularly audit our operations, and adhere
              to best practices in non-profit governance. Our annual reports are available on
              request to our members for review.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              How can I get in touch with Jochebed Foundation?
            </div>
            <p className="text-base text-center">
              You can contact us through our &quot;
              <Link href="/contact" className="underline hover:text-jf-yellow">
                Contact
              </Link>
              &quot; page, where you&quot;ll find our contact information and a contact form.
              We&quot;ll be happy to assist you with any inquiries or concerns.
            </p>
          </div>
          <div className="mb-8">
            <div className="text-center text-2xl mb-1">
              How can I get in touch with Jochebed Foundation?
            </div>
            <p className="text-base text-center">
              Information about our upcoming events, programs, and initiatives can be found on our{" "}
              <Link
                href="https://opencollective.com/jochebedfoundation#category-CONNECT"
                className="underline text-jf-yellow"
              >
                OpenCollective page.
              </Link>
              Check back regularly for updates and opportunities to get involved.
            </p>
          </div>
        </div>
      </Boxed>
      {/* Team */}
      <div className="bg-gray-50 py-12 mt-24">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center">
            <h2 className="font-heading text-center text-4xl font-bold mb-4">Meet The Team</h2>
            <div className="mt-6 border-t-4 border-black w-10 mx-auto"></div>
          </div>

          <div className="mt-16 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
            <div>
              <img
                src="https://static.wixstatic.com/media/9c4f6f_27490ec3adae47cfaebc14e1c86722b7~mv2.jpg/v1/fill/w_434,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6252_edited.jpg"
                alt="Belvi Nosakhare"
                className="w-[217px] h-[217px] mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl text-gray-900">Belvi Nosakhare</h3>
              <a href="#" className="inline-block mt-2 text-gray-600 hover:text-gray-800">
                <img
                  src="https://static.wixstatic.com/media/22fa9ffe67ef4289a150e75a66ee4933.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22fa9ffe67ef4289a150e75a66ee4933.png"
                  alt="LinkedIn"
                  className="w-[42px] h-[42px]"
                />
              </a>
            </div>

            <div>
              <img
                src="https://static.wixstatic.com/media/9c4f6f_a614edb89a0b496b8eb84b0d131fcb60~mv2.jpeg/v1/fill/w_420,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5T3A3669-1.jpeg"
                alt="Tiku Nosakhare"
                className="w-[217px] h-[217px] mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl text-gray-900">Tiku Nosakhare</h3>
              <a href="#" className="inline-block mt-2 text-gray-600 hover:text-gray-800">
                <img
                  src="https://static.wixstatic.com/media/22fa9ffe67ef4289a150e75a66ee4933.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22fa9ffe67ef4289a150e75a66ee4933.png"
                  alt="LinkedIn"
                  className="w-[42px] h-[42px] r"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
