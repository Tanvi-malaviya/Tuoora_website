'use client';

import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function TermsConditions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main className="pt-24 pb-16 font-sans">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[100px] -z-10 rounded-full"></div>

        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b-2 border-primary pb-6 mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-3">
              Terms &amp; Conditions
            </h1>
            <div className="text-gray-500 text-xs sm:text-sm font-medium space-y-1">
              <p className="font-bold text-navy/80">Tuoora &mdash; Coaching Institute Management App</p>
              <p>Effective Date: 5 June 2026 &nbsp;&middot;&nbsp; Last updated: 5 June 2026</p>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-orange max-w-none text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base font-light"
          >
            <p>
              These Terms &amp; Conditions (the &ldquo;Terms&rdquo;) form a legally binding agreement between you and <strong>Tuoora</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) governing your access to and use of the Tuoora mobile application, the <a href="https://tuoora.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">tuoora.com</a> website, and all related features, content, and services (collectively, the &ldquo;Service&rdquo;).
            </p>

            <p>
              By creating an account, signing in, or otherwise using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>. If you do not agree, you must not use the Service.
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                1. Definitions
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li><strong>&ldquo;Institute User&rdquo;</strong> means a coaching institute, tutor, or training centre that registers on the Service to manage its students, batches, fees, attendance, and related operations.</li>
                <li><strong>&ldquo;Student User&rdquo;</strong> means an individual enrolled by an Institute User to access their batch information, fees, attendance, homework, and chat features.</li>
                <li><strong>&ldquo;User Content&rdquo;</strong> means any data, text, images, videos, audio, documents, or other material that you submit to the Service.</li>
                <li><strong>&ldquo;UPI&rdquo;</strong> means the Unified Payments Interface operated by the National Payments Corporation of India (NPCI).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                2. The Service
              </h2>
              <p>
                Tuoora provides software-as-a-service tools that allow Institute Users to manage students, batches, fees, attendance, homework, study material, staff, expenses, leads, chats, and reports, and that allow Student Users to view their attendance, homework, fee status, study material, and chat with their institute.
              </p>
              <p className="mt-3">
                Tuoora is a <strong>management and communication platform only</strong>. It is not a financial services provider, not a payment aggregator, not a payment system operator, and not a banking institution.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                3. Eligibility
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>You must be at least <strong>18 years old</strong> and competent to enter into a binding contract under the Indian Contract Act, 1872, to register as an Institute User.</li>
                <li>Student Users between the ages of 13 and 18 may use the Service only if their account is created and managed by an Institute User on the basis of parent or guardian consent obtained during enrolment.</li>
                <li>Children under the age of 13 are not permitted to use the Service.</li>
                <li>You must not be barred from using the Service under the laws of India or any other applicable jurisdiction.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                4. Account Registration &amp; Security
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>Institute Users register by providing a valid email and phone number and completing OTP verification.</li>
                <li>Student User accounts are created by the Institute User who enrols them; Student Users sign in using credentials provided by their institute.</li>
                <li>You agree to provide accurate, current, and complete information and to keep it updated.</li>
                <li>You are responsible for safeguarding your password and authentication tokens. You agree not to share your account credentials with any third party.</li>
                <li>You must notify us immediately at <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a> of any unauthorised access or suspected breach of your account.</li>
                <li>You are solely responsible for all activity that occurs under your account.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                5. Roles &amp; Responsibilities
              </h2>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">5.1 Institute Users</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li>You are responsible for the accuracy of fee amounts, attendance entries, homework, study material, batch assignments, and all other data you enter or upload.</li>
                    <li>You must obtain appropriate consent from students (or their parents/guardians, if minors) before adding their personal information to the Service.</li>
                    <li>You are responsible for setting fair fee policies, refund policies, and refund processing for your students. Tuoora does not mediate fee or refund disputes between you and your students.</li>
                    <li>You confirm that any UPI ID and QR code you upload belong to you or your registered business, and that you are authorised to receive fee payments at that UPI handle.</li>
                    <li>You will comply with all applicable laws including, without limitation, education, taxation, data protection, consumer protection, and financial regulations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">5.2 Student Users</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li>You acknowledge that the institute who enrolled you controls your account, your batch assignment, your fee schedule, your attendance entries, and your homework records on the Service.</li>
                    <li>You agree to use the Service only for legitimate educational purposes related to your enrolment with that institute.</li>
                    <li>You will not share confidential homework, study material, or chat content with persons outside your institute without permission from the institute.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                6. UPI Payments &mdash; Important Disclaimer
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6 text-sm text-red-950 leading-relaxed shadow-sm">
                <p className="font-bold text-red-900 mb-1">Tuoora does NOT process or facilitate payments.</p>
                <p>
                  The Service only displays the UPI ID and QR code that the Institute User has uploaded. When a Student User pays fees, the actual transaction occurs entirely outside Tuoora, inside the Student&rsquo;s chosen UPI application (such as Google Pay, PhonePe, Paytm, BHIM, or any other UPI-enabled app). Money moves directly from the Student&rsquo;s bank account to the Institute&rsquo;s bank account through the UPI network operated by NPCI and the participating banks.
                </p>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-650">
                <li>Tuoora has no access to and never sees your bank account number, debit card details, credit card details, UPI PIN, or transaction PINs.</li>
                <li>Tuoora is not responsible for failed, delayed, duplicated, mis-routed, or fraudulent UPI transactions. For any payment dispute, you must contact your own UPI app, your bank, or NPCI directly.</li>
                <li>Tuoora is not responsible if an Institute User uploads an incorrect, expired, or fraudulent UPI ID or QR code.</li>
                <li>Fee &ldquo;Paid&rdquo; markings inside Tuoora are entered by the Institute User upon their confirmation of receipt of funds and do not constitute a payment receipt issued by Tuoora.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                7. Subscription &amp; Fees
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>The Service may be offered on a free, freemium, or paid subscription basis at our discretion. Pricing, plan features, and billing intervals will be displayed in the app or on our website at the time of subscription.</li>
                <li>All subscription fees are payable in advance and, unless required by law, are <strong>non-refundable</strong>.</li>
                <li>We may change subscription pricing or plan features by giving you at least 30 days&rsquo; prior notice. Changes take effect at the start of your next billing period.</li>
                <li>If you fail to pay subscription fees, we may suspend or terminate your access to paid features.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                8. User Content &amp; Licence
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>You retain all rights you already have in your User Content. You do not transfer ownership to Tuoora.</li>
                <li>You grant Tuoora a worldwide, royalty-free, non-exclusive, sub-licensable licence to host, store, transmit, display, and process your User Content solely to operate the Service for you and the parties you choose to share it with (such as your institute or students).</li>
                <li>You represent and warrant that you own or have all rights necessary to submit your User Content and that it does not infringe any third-party intellectual property, privacy, or other rights.</li>
                <li>We may, but are not obligated to, review, remove, or refuse User Content that we reasonably believe violates these Terms or applicable law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                9. Acceptable Use
              </h2>
              <p className="mb-4">You agree NOT to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-650">
                <li>Upload or transmit content that is unlawful, defamatory, obscene, pornographic, hateful, harassing, threatening, or that promotes violence or discrimination.</li>
                <li>Share content that exploits or harms minors.</li>
                <li>Impersonate any person or misrepresent your affiliation with an institute.</li>
                <li>Upload malware, viruses, or any code designed to disrupt or damage the Service or its users&rsquo; devices.</li>
                <li>Attempt to reverse engineer, decompile, disassemble, scrape, or extract source code or data from the Service except as permitted by law.</li>
                <li>Attempt to gain unauthorised access to other accounts or to our servers, networks, or infrastructure.</li>
                <li>Use automated bots, scripts, or scrapers to access the Service without our prior written consent.</li>
                <li>Use the Service to send unsolicited bulk communications (spam) or for any unlawful, fraudulent, or deceptive purpose.</li>
                <li>Resell, sublicense, rent, lease, or commercially exploit the Service or any part of it without our prior written consent.</li>
                <li>Violate any applicable Indian law, regulation, or third-party right.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                10. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>The Tuoora name, logo, app, website, source code, designs, text, graphics, and all other materials provided by us are owned by or licensed to Tuoora and are protected by Indian and international intellectual property laws.</li>
                <li>Subject to your compliance with these Terms, we grant you a personal, limited, non-exclusive, non-transferable, revocable licence to install and use the app on devices you own or control, solely for your own use of the Service.</li>
                <li>No part of these Terms grants you any right to use our trade marks, trade names, or branding without our prior written consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                11. Third-Party Services
              </h2>
              <p>
                The Service relies on third-party services including, without limitation, Google Firebase Cloud Messaging for push notifications, your device&rsquo;s operating system and Play Store, your internet service provider, and the UPI app you choose to make payments through. Your use of those services is governed by their own terms and privacy policies. We are not responsible for the acts, omissions, or failures of any third-party service.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                12. Service Availability &amp; Modifications
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not guarantee that the Service will be uninterrupted, error-free, or available at all times.</li>
                <li>We may, from time to time, perform scheduled or emergency maintenance, modify features, add new features, or discontinue features, with or without notice.</li>
                <li>We may impose reasonable usage limits (such as storage quotas, file size caps, or message rate limits) at our discretion to ensure stability for all users.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                13. Disclaimers
              </h2>
              <div className="bg-orange-50 border-l-4 border-primary p-4 rounded-r-xl my-6 text-sm text-orange-950 shadow-sm font-medium">
                <p>
                  <strong>To the maximum extent permitted by law</strong>, the Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to implied warranties of merchantability, fitness for a particular purpose, accuracy, non-infringement, or uninterrupted operation.
                </p>
              </div>
              <p className="mt-3">
                Tuoora does not warrant that data entered by Institute Users (such as fee amounts, attendance, homework, or marks) is accurate, complete, or appropriate. Institutes and Students must verify all such data through their own records before relying on it.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                14. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by Indian law, Tuoora, its directors, employees, contractors, and partners shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to loss of profits, revenue, business opportunities, data, goodwill, or any other intangible loss, arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-3">
                <li>your use of, or inability to use, the Service;</li>
                <li>any UPI transaction or payment dispute between Institute and Student;</li>
                <li>any User Content or conduct of any third party on the Service;</li>
                <li>unauthorised access to or alteration of your transmissions or data;</li>
                <li>any bug, error, virus, or malicious code transmitted to or through the Service by any third party.</li>
              </ul>
              <p className="mt-3">
                In no event shall our total aggregate liability arising out of or relating to these Terms exceed the greater of (a) the amount you paid Tuoora for the Service during the 12 months immediately preceding the event giving rise to the claim, or (b) <strong>Indian Rupees 1,000</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                15. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Tuoora and its directors, employees, contractors, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to (a) your use of the Service in violation of these Terms; (b) any User Content you upload; (c) your violation of any law or any third party&rsquo;s rights; or (d) any dispute between you and any other user of the Service, including any Institute&ndash;Student fee or refund dispute.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                16. Termination
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>You may stop using the Service at any time. You may also request deletion of your account via <a href="https://tuoora.com/account-deletion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">https://tuoora.com/account-deletion</a> or by emailing <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a>.</li>
                <li>We may suspend or terminate your access to the Service at any time, with or without notice, if we reasonably believe you have breached these Terms, violated applicable law, or engaged in conduct that may harm other users or the Service.</li>
                <li>Sections 5.1 (Institute Responsibilities), 6 (UPI Disclaimer), 8 (User Content), 10 (Intellectual Property), 13 (Disclaimers), 14 (Limitation of Liability), 15 (Indemnification), 17 (Governing Law), and 18 (Dispute Resolution) shall survive any termination of these Terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                17. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict-of-laws principles. Subject to Section 18, the courts at <strong>Ahmedabad, Gujarat, India</strong> shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms or the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                18. Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li>If a dispute arises, the parties shall first attempt to resolve it amicably through good-faith discussion, initiated by written notice to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a>.</li>
                <li>If the dispute is not resolved within 30 days of the notice, it shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996, by a sole arbitrator appointed by Tuoora.</li>
                <li>The seat and venue of arbitration shall be Ahmedabad, Gujarat. The language of arbitration shall be English. The arbitral award shall be final and binding on the parties.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                19. Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. For material changes, we will notify you inside the app or by email at least 7 days before the change takes effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not accept the changes, you must stop using the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                20. Miscellaneous
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650 mt-4">
                <li><strong>Entire agreement.</strong> These Terms together with our Privacy Policy constitute the entire agreement between you and Tuoora regarding the Service.</li>
                <li><strong>Severability.</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
                <li><strong>No waiver.</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.</li>
                <li><strong>Assignment.</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Notices.</strong> Notices to you may be sent to your registered email address or displayed inside the app. Notices to us must be sent to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                21. Contact Us
              </h2>
              
              <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm my-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100 text-sm">
                    <tr>
                      <th className="px-4 py-3 bg-primary/5 text-left text-xs font-semibold text-navy uppercase tracking-wider w-1/3">Email</th>
                      <td className="px-4 py-3"><a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a></td>
                    </tr>
                    <tr>
                      <th className="px-4 py-3 bg-primary/5 text-left text-xs font-semibold text-navy uppercase tracking-wider">Website</th>
                      <td className="px-4 py-3"><a href="https://tuoora.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">https://tuoora.com</a></td>
                    </tr>
                    <tr>
                      <th className="px-4 py-3 bg-primary/5 text-left text-xs font-semibold text-navy uppercase tracking-wider">Privacy Policy</th>
                      <td className="px-4 py-3"><a href="/privacy-policy" className="text-primary hover:underline font-medium">https://tuoora.com/privacy-policy</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
