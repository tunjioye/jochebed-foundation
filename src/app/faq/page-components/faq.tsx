"use client"

import Boxed from "@/components/public/boxed"
import { APP_URL } from "@/constants/APP_URL"
import Link from "next/link"

const CONTRIBUTE_URL = "https://opencollective.com/jochebedfoundation#category-CONTRIBUTE"
const OPEN_COLLECTIVE_URL = "https://opencollective.com/jochebedfoundation#category-CONNECT"

const FAQS = [
  {
    question: "What is the mission of Jochebed Foundation",
    answer: () => (
      <p>To reach people by exemplifying God&apos;s love, just as He did through His Son.</p>
    ),
  },
  {
    question: "How can I apply for a scholarship from Jochebed Foundation?",
    answer: () => (
      <p>
        To apply for a scholarship, please visit our &quot;
        <Link href={APP_URL.scholarship} className="underline hover:text-jf-yellow">
          Scholarship
        </Link>
        &quot; page and follow the application instructions outlined there. Be sure to check the
        application deadline and eligibility criteria.
      </p>
    ),
  },
  {
    question: "Who is eligible for scholarships from Jochebed Foundation?",
    answer: () => (
      <p>
        Scholarship eligibility criteria may vary depending on the specific scholarship program.
        Generally, eligibility is based on factors such as academic achievement, financial need, and
        other specified requirements. Detailed eligibility information can be found on our &quot;
        <Link href={APP_URL.scholarship} className="underline hover:text-jf-yellow">
          Scholarship
        </Link>
        &quot; page.
      </p>
    ),
  },
  {
    question: "What types of scholarships does Jochebed Foundation offer?",
    answer: () => (
      <p>
        Jochebed Foundation offers a variety of scholarships, visit our &quot;
        <Link href={APP_URL.scholarship} className="underline hover:text-jf-yellow">
          Scholarship
        </Link>
        &quot; page to learn more.
      </p>
    ),
  },
  {
    question: "How can I support Jochebed Foundation's mission?",
    answer: () => (
      <p>
        There are several ways to support our mission, including donating, becoming a mentor or
        volunteer, and helping spread the word. Visit our &quot;
        <Link href={APP_URL.getInvolved} className="underline hover:text-jf-yellow">
          Get Involved
        </Link>
        &quot; page more information.
      </p>
    ),
  },
  {
    question: "Can I donate to Jochebed Foundation?",
    answer: () => (
      <p>
        Yes, we welcome donations from individuals, organizations, and businesses that share our
        commitment to bring all individuals to Christ and empower stewards.{" "}
        <Link
          href={CONTRIBUTE_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-jf-yellow"
        >
          Visit our OpenCollective page to make a contribution.
        </Link>
      </p>
    ),
  },
  {
    question: "How does Jochebed Foundation ensure transparency and accountability?",
    answer: () => (
      <p>
        Jochebed Foundation is committed to transparency and accountability in all its activities.
        We maintain financial records, regularly audit our operations, and adhere to best practices
        in non-profit governance. Our annual reports are available on request to our members for
        review.
      </p>
    ),
  },
  {
    question: "How can I get in touch with Jochebed Foundation?",
    answer: () => (
      <p>
        You can contact us through our &quot;
        <Link href={APP_URL.contact} className="underline hover:text-jf-yellow">
          Contact
        </Link>
        &quot; page, where you&quot;ll find our contact information and a contact form. We&quot;ll
        be happy to assist you with any inquiries or concerns.
      </p>
    ),
  },
  {
    question: "Does Jochebed Foundation have any upcoming events or initiatives?",
    answer: () => (
      <p>
        Information about our upcoming events, programs, and initiatives can be found on our{" "}
        <Link
          href={OPEN_COLLECTIVE_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-jf-yellow"
        >
          OpenCollective page.
        </Link>{" "}
        Check back regularly for updates and opportunities to get involved.
      </p>
    ),
  },
]

export default function Faq() {
  return (
    <section className="w-full pt-16 pb-20 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-heading text-center text-4xl font-bold mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center text-lg mb-1">You Ask. We Answer.</div>
          <p className="text-base text-center mb-10 text-sm">
            We’ve compiled a list of frequently asked questions and answers for your convenience. If
            you can’t find what you’re looking for, please get in touch and we’ll respond to your
            inquiry as quickly as possible.
          </p>

          <div className="flex flex-col gap-10">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <div className="text-center text-2xl mb-1">{faq.question}</div>
                <div className="text-center">{faq.answer()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
