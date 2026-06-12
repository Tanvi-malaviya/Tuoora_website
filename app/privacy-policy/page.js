'use client';

import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              This Privacy Policy explains how <strong>Tuoora</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, shares, and protects information when you use the Tuoora mobile application and related services (the &ldquo;Service&rdquo;). The Service is operated from India and is provided to coaching institutes (&ldquo;Institute Users&rdquo;) and their enrolled students (&ldquo;Student Users&rdquo;).
            </p>

            <p>
              By creating an account or using the Service, you agree to the practices described below. If you do not agree, please do not use the Service.
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                1. Information We Collect
              </h2>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">1.1 Account &amp; Profile Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li><strong>Institute Users:</strong> institute name, owner name, email, phone number, postal address, profile logo, and the UPI ID / QR code you choose to upload for fee collection.</li>
                    <li><strong>Student Users:</strong> name, date of birth, email, phone number, parent name &amp; phone, profile photo, enrollment ID, and the batch you are enrolled in by your institute.</li>
                    <li><strong>Authentication credentials:</strong> hashed password and one-time passwords (OTP) sent to your email or phone during signup, login, or password reset.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">1.2 Operational Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li>Fee records (paid, pending, overdue amounts and history) and auto-generated PDF receipts.</li>
                    <li>Attendance entries marked by your institute (present, absent, leave, holiday).</li>
                    <li>Homework assignments, submissions, scores, and remarks.</li>
                    <li>Study materials and resources (PDF, image, video, audio) uploaded by your institute.</li>
                    <li>Expense entries, staff records, salary logs, and lead/CRM notes (Institute Users only).</li>
                    <li>In-app chat messages exchanged between Institute Users and Student Users, including text, voice notes, images, and document attachments.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">1.3 Device &amp; Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li>Firebase Cloud Messaging (FCM) device token, used solely to deliver push notifications.</li>
                    <li>App version, operating system version, and crash diagnostic data necessary to fix bugs.</li>
                    <li>Authentication tokens (access &amp; refresh tokens) stored locally on your device to keep you signed in.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">1.4 Camera, Microphone &amp; File Access</h3>
                  <p className="mb-2">
                    With your explicit, in-the-moment consent, the app accesses:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li><strong>Camera &amp; Gallery</strong> &mdash; to upload profile photos, institute logos, UPI QR images, student photos, and homework attachments.</li>
                    <li><strong>Microphone</strong> &mdash; to record optional voice notes for in-app chat.</li>
                    <li><strong>Files &amp; Documents</strong> &mdash; to attach PDFs and other documents you select using the system file picker.</li>
                  </ul>
                  <p className="mt-3">
                    We never scan or read files in the background. The app only accesses the specific file(s) you choose at the moment you tap the upload control.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-2">1.5 Information We Do <em>Not</em> Collect</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-650">
                    <li>We do not collect your precise GPS or network-based location.</li>
                    <li>We do not access your contacts, calendar, SMS, or call logs.</li>
                    <li>We do not use the Android Advertising ID.</li>
                    <li>We do not collect biometric data.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                2. How We Use Your Information
              </h2>
              
              <div className="overflow-x-auto my-4 border border-gray-100 rounded-2xl shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-navy uppercase tracking-wider">Purpose</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-navy uppercase tracking-wider">Data used</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Account creation, login, OTP verification</td>
                      <td className="px-4 py-3 text-gray-650">Email, phone, password hash, OTP</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Showing students their batches, fees, attendance, homework, and resources</td>
                      <td className="px-4 py-3 text-gray-650">Operational data, profile data</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Letting institutes manage students, fees, batches, staff, leads, and reports</td>
                      <td className="px-4 py-3 text-gray-650">Operational data, profile data</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Displaying the institute&rsquo;s UPI ID and QR code so students can pay fees through their own UPI app</td>
                      <td className="px-4 py-3 text-gray-650">UPI ID, QR image</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Sending push notifications about fees, homework, attendance, and announcements</td>
                      <td className="px-4 py-3 text-gray-650">FCM token, account ID</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Securing accounts and preventing fraud</td>
                      <td className="px-4 py-3 text-gray-650">Phone, password hash, OTP, device token</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-navy">Diagnosing crashes and improving app stability</td>
                      <td className="px-4 py-3 text-gray-650">App version, OS version, crash logs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl my-6 text-sm text-gray-700">
                <p>
                  <strong>UPI payments note.</strong> Tuoora does <em>not</em> process fee payments. We only display the institute&rsquo;s UPI ID and QR code. The actual money transfer happens outside Tuoora, inside the student&rsquo;s chosen UPI app (Google Pay, PhonePe, Paytm, BHIM, etc.). We do not see, store, or have access to your bank account, card details, UPI PIN, or transaction PINs at any time.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                3. How We Share Your Information
              </h2>
              <p className="mb-4">
                We do <strong>not</strong> sell your personal data. We do <strong>not</strong> share it with advertisers or data brokers. Limited sharing occurs only in these cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-650">
                <li><strong>Between Institute and Student:</strong> data you provide is shared with the institute you are enrolled in (for students) or the students enrolled in your institute (for institutes). This is the core function of the Service.</li>
                <li><strong>Google Firebase Cloud Messaging:</strong> we send your FCM device token and notification content to Google&rsquo;s push delivery infrastructure so notifications reach your device. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Firebase Privacy</a>.</li>
                <li><strong>Cloud hosting provider:</strong> Service data is stored on commercial cloud servers under our control, with industry-standard encryption at rest and in transit.</li>
                <li><strong>Legal compliance:</strong> if required by valid Indian legal process (court order, statutory notice, etc.), we will disclose only the specific data legally required, after verifying authenticity.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                4. Data Security
              </h2>
              <p>
                All communication between the Tuoora app and our servers is encrypted in transit using HTTPS / TLS. Passwords are stored only as one-way cryptographic hashes &mdash; we never see your plain-text password. Authentication tokens stored on your device expire automatically and are refreshed using a separate refresh token.
              </p>
              <p className="mt-3">
                While we apply commercially reasonable security measures, no system on the internet is 100% secure. If you suspect unauthorised access to your account, please contact us immediately at <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                5. Data Retention
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-650">
                <li><strong>Account and profile data</strong> is retained for as long as your account is active.</li>
                <li><strong>Fee records and receipts</strong> may be retained for up to <strong>7 years</strong> after account deletion to comply with Indian tax, audit, and financial-record-keeping regulations.</li>
                <li><strong>Chat messages</strong> are retained until you or your institute deletes them, or until the account is deleted.</li>
                <li><strong>Authentication tokens and FCM tokens</strong> are deleted immediately when you sign out or uninstall the app.</li>
                <li><strong>Crash logs and diagnostics</strong> are retained for up to 90 days for engineering use, then purged.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                6. Your Rights &amp; Choices
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-1">6.1 Access, correction and download</h3>
                  <p>You can view and update your profile data inside the app at any time under <em>Profile &rarr; Edit</em>. To request a copy of all data we hold about you, email <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a> from your registered email address.</p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-1">6.2 Account deletion</h3>
                  <p>
                    You may request deletion of your Tuoora account and associated personal data at any time:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-650">
                    <li><strong>Via the web:</strong> visit <a href="https://tuoora.com/account-deletion" className="text-primary hover:underline font-medium">https://tuoora.com/account-deletion</a> and follow the instructions.</li>
                    <li><strong>Via email:</strong> write to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a> from your registered email address with the subject &ldquo;Delete Account Request&rdquo; and include your registered phone number and role (Institute or Student).</li>
                  </ul>
                  <p className="mt-2">
                    We will action verified requests within 30 days. Fee and payment records may be retained for the period stated in Section 5 above, in line with applicable financial law.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-1">6.3 Notification controls</h3>
                  <p>You can turn push notifications on or off at any time from your device&rsquo;s system settings, or from inside the app under <em>Profile &rarr; Notification preferences</em>.</p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy/95 mb-1">6.4 Indian DPDP Act 2023 rights</h3>
                  <p>If you are a Data Principal in India, the Digital Personal Data Protection Act, 2023, grants you rights including the right to access, correct, erase, withdraw consent, and grieve. To exercise any of these rights or to file a grievance, contact our Grievance Officer (Section 11).</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                7. Children&rsquo;s Privacy
              </h2>
              <p>
                Tuoora is intended for use by coaching institutes and their enrolled students. The app is not designed for use by children under 13. Where students between the ages of 13 and 18 use the app, accounts are created by their institute on the basis of the parent or guardian&rsquo;s enrolment consent. Parents and guardians who wish to review or request deletion of a student account may write to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a> from the registered parent or guardian email.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                8. International Transfers
              </h2>
              <p>
                Tuoora servers are located in India. If you access the Service from outside India, your information will be transferred to and processed in India. By using the Service, you consent to this transfer.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                9. Cookies &amp; Tracking
              </h2>
              <p>
                The Tuoora mobile app does not use cookies. We do not use third-party advertising SDKs, analytics SDKs, or behavioural tracking technologies. We do not use the Android Advertising ID.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                10. Changes to this Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. For material changes, we will notify you inside the app or by email before the change takes effect. Continued use of the Service after the effective date constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy border-l-4 border-primary pl-4 my-6">
                11. Contact Us &amp; Grievance Officer
              </h2>
              <p className="mb-4">
                For any privacy-related question, request, or complaint, please contact:
              </p>

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
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                In accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, our Grievance Officer can be reached at the email above. We will acknowledge grievances within 48 hours and resolve them within 30 days.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
