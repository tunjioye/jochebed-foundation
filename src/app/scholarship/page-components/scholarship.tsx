"use client"

import Link from "next/link"

const APPLY_NOW_URL = "https://formfacade.com/sm/mpwHtMB4W"
const JOIN_US_URL = "https://opencollective.com/jochebed-scholarship"

export default function Scholarship() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="bg-jf-green text-white px-14 py-20">
          <h2 className="text-5xl font-bold">
            Jochebed Scholarship<span className="text-jf-yellow">.</span>
          </h2>
          <p className="mt-6 text-gray-300">
            At Jochebed Foundation, we believe in the power of education to transform lives and
            shape a brighter future. Our scholarship program is dedicated to providing opportunities
            for deserving students in Nigeria to pursue their dreams, achieve academic excellence,
            and make a positive impact on their communities.
          </p>
        </div>

        <div className="px-14 py-20 bg-white text-gray-900">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">1 |</span> Our Commitment
              </h3>
              <p className="mt-2 text-gray-700">
                We are committed to making education accessible to all, regardless of financial
                barriers. Through our scholarship initiative, we aim to empower and support talented
                individuals who aspire to reach their full potential. Our scholarships are designed
                to alleviate the financial burden of education and provide a stepping stone toward a
                successful and fulfilling academic journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">2 |</span> What Sets Us Apart
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Diverse Scholarships</li>
                <li>Merit-Based and Need-Based</li>
                <li>Impactful Partnerships</li>
                <li>Mentorship and Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">3 |</span> How To Apply
              </h3>
              <p className="mt-2 text-gray-700">
                The application process for our scholarships is straightforward and transparent.
                Eligible students can apply through our website by completing the form. Our
                selection committee carefully reviews each application, considering academic
                achievements, extracurricular activities, and personal statements.{" "}
                <Link
                  href={APPLY_NOW_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-jf-yellow underline"
                >
                  Apply Now
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">4 |</span> Get Involved
              </h3>
              <p className="mt-2 text-gray-700">
                We invite donors, partners, and advocates who share our vision for education to join
                us in making a difference. Your support can create more scholarship opportunities
                and impact the lives of aspiring students.{""}
                <Link
                  href={JOIN_US_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-jf-yellow underline"
                >
                  Join Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 border-y grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-4xl">🏫</div>
          <h4 className="mt-4 font-bold text-lg">Elementary School Scholarships</h4>
          <p className="mt-2 text-gray-600 max-w-[400px] m-auto">
            Elementary School scholarships are awarded to students about to begin or already in
            Elementary School to help cover the costs of their tuition.
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl">🏛️</div>
          <h4 className="mt-4 font-bold text-lg">High School Scholarships</h4>
          <p className="mt-2 text-gray-600 max-w-[400px] m-auto">
            High School scholarships are awarded to students about to begin or already in High
            School to help cover the costs of their tuition.
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl">🎓</div>
          <h4 className="mt-4 font-bold text-lg">Undergraduate Scholarships</h4>
          <p className="mt-2 text-gray-600 max-w-[400px] m-auto">
            Undergraduate scholarships are awarded to graduating high school students to help cover
            the costs of their college/university tuition.
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl">⚡</div>
          <h4 className="mt-4 font-bold text-lg">Postgraduate Scholarships</h4>
          <p className="mt-2 text-gray-600 max-w-[400px] m-auto">
            Postgraduate scholarships are awarded to students aiming to complete a postgraduate
            program to help cover the costs of their tuition.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:grid grid-cols-1 md:grid-cols-2 md:flex-row flex flex-col-reverse">
        <div className="px-14 py-20 bg-white text-gray-900">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">1 |</span> Academic Achievement
              </h3>
              <p className="mt-2 text-gray-700">
                Excellent track record of academic achievement and discipline. This can be proven by
                previous school results, references, etc.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">2 |</span> Financial Need
              </h3>
              <p className="mt-2text-gray-700">
                Difficulty or inability to meet the financial requirements of education. The
                applicant might be required to provide further proof of this.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">3 |</span> Letters of Recommendation
              </h3>
              <p className="mt-2 text-gray-700">
                Recommendations are required from teachers, mentors, or supervisors who can attest
                to the applicant&quot;s character and abilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">5 |</span> Citizenship
              </h3>
              <p className="mt-2 text-gray-700">
                Scholarships are restricted to Nigerian citizens resident in Nigeria.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">4 |</span> Essay or Personal Statement
              </h3>
              <p className="mt-2 text-gray-700">
                Applicants are required to submit essays or personal statements outlining their
                educational and career goals, reasons for applying, and how the scholarship will
                benefit them.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-jf-green text-white px-14 py-20">
          <h2 className="text-5xl font-bold">
            General Eligibility Criteria<span className="text-jf-yellow">.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="bg-jf-green text-white px-14 py-20">
          <h2 className="text-5xl font-bold">
            Application Process
            <span className="text-jf-yellow">.</span>
          </h2>
        </div>
        <div className="px-14 py-20 bg-white text-gray-900">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">1 |</span> Gather Supporting Documents
              </h3>
              <p className="mt-2 text-gray-700">
                Gather documents to prove an excellent academic track record. This could be a
                statement of results, transcripts, WAEC/NECO, end-of-term results, etc. Ensure the
                document you submit has your correct <b>name, gender, and date of birth</b>.
                Discrepancies would result in a delay in your application. You would also be
                required to submit documents to prove citizenship. This could be any of the
                following: Birth Certificate, International Passport, National Identification Card,
                etc.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">2 |</span> Gather references and letters of
                recommendation
              </h3>
              <p className="mt-2text-gray-700">
                You would be required to submit details of 2 references and at least 1 letter of
                recommendation. Your references must be one of the following:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Teachers</li>
                <li>Mentors</li>
                <li>School/Project supervisors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">3 |</span> Write your personal statement
              </h3>
              <p className="mt-2 text-gray-700">
                Write and submit an essay outlining your educational and career goals, reasons for
                applying, and how the scholarship will benefit you.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-jf-yellow">
                <span className="text-black">4 |</span> Submit your application
              </h3>
              <p className="mt-2 text-gray-700">
                Fill out the application form and make sure to attach all necessary documents.{" "}
                <Link
                  href={APPLY_NOW_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-jf-yellow underline"
                >
                  Apply Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
