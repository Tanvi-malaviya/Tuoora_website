'use client';

import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Share2, 
  Lock, 
  History, 
  UserCheck, 
  HelpCircle, 
  Globe, 
  Cookie, 
  FileText, 
  Mail, 
  Search, 
  X, 
  ExternalLink,
  ChevronRight,
  Info,
  CheckCircle2
} from "lucide-react";

export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("intro");

  const SECTIONS = [
    {
      id: "intro",
      title: "Introduction",
      icon: FileText,
      tldr: "This policy explains how Tuoora handles your data for the coaching institute app. Using the app means you agree to these practices.",
      searchString: "introduction this privacy policy explains how tuoora we us our collects uses stores shares and protects information when you use the tuoora mobile application and related services the service. the service is operated from india and is provided to coaching institutes institute users and their enrolled students student users. by creating an account or using the service, you agree to the practices described below. if you do not agree, please do not use the service.",
      content: (
        <div className="space-y-4">
          <p>
            This Privacy Policy explains how <strong>Tuoora</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, shares, and protects information when you use the Tuoora mobile application and related services (the &ldquo;Service&rdquo;). The Service is operated from India and is provided to coaching institutes (&ldquo;Institute Users&rdquo;) and their enrolled students (&ldquo;Student Users&rdquo;).
          </p>
          <p>
            By creating an account or using the Service, you agree to the practices described below. If you do not agree, please do not use the Service.
          </p>
        </div>
      )
    },
    {
      id: "info-collect",
      title: "1. Information We Collect",
      icon: Shield,
      tldr: "We collect account details (email, phone), operational data (fees, attendance, homework), and access camera/microphone/files only with your active consent.",
      searchString: "information we collect account profile information institute users name owner email phone address logo upi id qr code student users dob parent credentials hashed password otp operational data fee records receipts attendance homework assignments study materials resources expense staff salary leads CRM chat messages voice notes images documents device technical information firebase cloud messaging fcm token app version operating system crash diagnostic access camera microphone file access camera gallery gallery files documents contacts calendar sms logs advertising id biometric data",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              1.1 Account &amp; Profile Information
            </h4>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
              <li className="text-slate-600 text-sm sm:text-base">
                <strong className="text-slate-800">Institute Users:</strong> institute name, owner name, email, phone number, postal address, profile logo, and the UPI ID / QR code you choose to upload for fee collection.
              </li>
              <li className="text-slate-600 text-sm sm:text-base">
                <strong className="text-slate-800">Student Users:</strong> name, date of birth, email, phone number, parent name &amp; phone, profile photo, enrollment ID, and the batch you are enrolled in by your institute.
              </li>
              <li className="text-slate-600 text-sm sm:text-base">
                <strong className="text-slate-800">Authentication credentials:</strong> hashed password and one-time passwords (OTP) sent to your email or phone during signup, login, or password reset.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              1.2 Operational Data
            </h4>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
              <li className="text-slate-600 text-sm sm:text-base">Fee records (paid, pending, overdue amounts and history) and auto-generated PDF receipts.</li>
              <li className="text-slate-600 text-sm sm:text-base">Attendance entries marked by your institute (present, absent, leave, holiday).</li>
              <li className="text-slate-600 text-sm sm:text-base">Homework assignments, submissions, scores, and remarks.</li>
              <li className="text-slate-600 text-sm sm:text-base">Study materials and resources (PDF, image, video, audio) uploaded by your institute.</li>
              <li className="text-slate-600 text-sm sm:text-base">Expense entries, staff records, salary logs, and lead/CRM notes (Institute Users only).</li>
              <li className="text-slate-600 text-sm sm:text-base">In-app chat messages exchanged between Institute Users and Student Users, including text, voice notes, images, and document attachments.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              1.3 Device &amp; Technical Information
            </h4>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
              <li className="text-slate-600 text-sm sm:text-base">Firebase Cloud Messaging (FCM) device token, used solely to deliver push notifications.</li>
              <li className="text-slate-600 text-sm sm:text-base">App version, operating system version, and crash diagnostic data necessary to fix bugs.</li>
              <li className="text-slate-600 text-sm sm:text-base">Authentication tokens (access &amp; refresh tokens) stored locally on your device to keep you signed in.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              1.4 Camera, Microphone &amp; File Access
            </h4>
            <p className="text-slate-600 mb-3 text-sm sm:text-base">
              With your explicit, in-the-moment consent, the app accesses:
            </p>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100 mb-3">
              <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Camera &amp; Gallery</strong> &mdash; to upload profile photos, institute logos, UPI QR images, student photos, and homework attachments.</li>
              <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Microphone</strong> &mdash; to record optional voice notes for in-app chat.</li>
              <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Files &amp; Documents</strong> &mdash; to attach PDFs and other documents you select using the system file picker.</li>
            </ul>
            <p className="text-slate-500 italic text-xs sm:text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
              We never scan or read files in the background. The app only accesses the specific file(s) you choose at the moment you tap the upload control.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              1.5 Information We Do <em>Not</em> Collect
            </h4>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
              <li className="text-slate-650 text-sm sm:text-base">We do not collect your precise GPS or network-based location.</li>
              <li className="text-slate-650 text-sm sm:text-base">We do not access your contacts, calendar, SMS, or call logs.</li>
              <li className="text-slate-650 text-sm sm:text-base">We do not use the Android Advertising ID.</li>
              <li className="text-slate-650 text-sm sm:text-base">We do not collect biometric data.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "how-use",
      title: "2. How We Use Your Information",
      icon: Eye,
      tldr: "Your data is used to verify logins, display educational progress, manage transactions, process notifications, and maintain app stability. We do NOT process payments directly.",
      searchString: "how we use your information purpose data used account creation login otp verification email phone password hash showing students batches fees attendance homework resources operational data profile letting institutes manage students staff leads reports displaying upi id qr code pay fees choose upi app upi id qr image sending push notifications fcm token account id securing accounts preventing fraud diagnosing crashes improving stability app version os version crash logs upi payments note",
      content: (
        <div className="space-y-4">
          <div className="overflow-hidden border border-slate-150 rounded-2xl shadow-sm bg-white">
            <table className="min-w-full divide-y divide-slate-150">
              <thead>
                <tr className="bg-slate-50/75">
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-navy uppercase tracking-wider w-1/2">Purpose</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-navy uppercase tracking-wider w-1/2">Data Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Account creation, login, OTP verification</td>
                  <td className="px-4 py-3.5">Email, phone, password hash, OTP</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Showing students their batches, fees, attendance, homework, and resources</td>
                  <td className="px-4 py-3.5">Operational data, profile data</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Letting institutes manage students, fees, batches, staff, leads, and reports</td>
                  <td className="px-4 py-3.5">Operational data, profile data</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Displaying the institute&rsquo;s UPI ID and QR code so students can pay fees through their own UPI app</td>
                  <td className="px-4 py-3.5">UPI ID, QR image</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Sending push notifications about fees, homework, attendance, and announcements</td>
                  <td className="px-4 py-3.5">FCM token, account ID</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Securing accounts and preventing fraud</td>
                  <td className="px-4 py-3.5">Phone, password hash, OTP, device token</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3.5 font-medium text-navy">Diagnosing crashes and improving app stability</td>
                  <td className="px-4 py-3.5">App version, OS version, crash logs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl text-sm text-slate-700 mt-4">
            <div className="flex gap-2 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>
                <strong>UPI payments note:</strong> Tuoora does <em>not</em> process fee payments. We only display the institute&rsquo;s UPI ID and QR code. The actual money transfer happens outside Tuoora, inside the student&rsquo;s chosen UPI app (Google Pay, PhonePe, Paytm, BHIM, etc.). We do not see, store, or have access to your bank account, card details, UPI PIN, or transaction PINs at any time.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "how-share",
      title: "3. How We Share Your Information",
      icon: Share2,
      tldr: "We do not sell your data. Sharing only happens directly between institutes & students, with Google FCM (for push notifications), cloud hosts, and when legally mandated.",
      searchString: "how we share your information sell personal data advertisers data brokers sharing occurs between institute and student google firebase cloud messaging fcm device token push delivery hosting provider cloud servers legal compliance indian legal process",
      content: (
        <div className="space-y-3">
          <p>
            We do <strong>not</strong> sell your personal data. We do <strong>not</strong> share it with advertisers or data brokers. Limited sharing occurs only in these cases:
          </p>
          <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Between Institute and Student:</strong> data you provide is shared with the institute you are enrolled in (for students) or the students enrolled in your institute (for institutes). This is the core function of the Service.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Google Firebase Cloud Messaging:</strong> we send your FCM device token and notification content to Google&rsquo;s push delivery infrastructure so notifications reach your device. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Firebase Privacy <ExternalLink className="w-3.5 h-3.5" /></a>.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Cloud hosting provider:</strong> Service data is stored on commercial cloud servers under our control, with industry-standard encryption at rest and in transit.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Legal compliance:</strong> if required by valid Indian legal process (court order, statutory notice, etc.), we will disclose only the specific data legally required, after verifying authenticity.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "data-security",
      title: "4. Data Security",
      icon: Lock,
      tldr: "We secure all communications via HTTPS/TLS, hash all passwords, and use expiring security tokens. However, no internet transmission is 100% secure.",
      searchString: "data security encryption transit HTTPS TLS passwords stored one-way cryptographic hashes authorization tokens expire automatically refresh token security measures suspect unauthorized access support@tuoora.com",
      content: (
        <div className="space-y-3">
          <p>
            All communication between the Tuoora app and our servers is encrypted in transit using HTTPS / TLS. Passwords are stored only as one-way cryptographic hashes &mdash; we never see your plain-text password. Authentication tokens stored on your device expire automatically and are refreshed using a separate refresh token.
          </p>
          <p>
            While we apply commercially reasonable security measures, no system on the internet is 100% secure. If you suspect unauthorised access to your account, please contact us immediately at <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a>.
          </p>
        </div>
      )
    },
    {
      id: "data-retention",
      title: "5. Data Retention",
      icon: History,
      tldr: "Profile data is stored as long as the account is active. Financial records are held for up to 7 years due to Indian tax regulations. Diagnostic logs are cleared in 90 days.",
      searchString: "data retention account profile data active fee records receipts retained up to 7 years account deletion indian tax audit financial record keeping chat messages deleted tokens deleted immediately sign out crash logs diagnostics 90 days",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Account and profile data</strong> is retained for as long as your account is active.</li>
          <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Fee records and receipts</strong> may be retained for up to <strong className="text-slate-800">7 years</strong> after account deletion to comply with Indian tax, audit, and financial-record-keeping regulations.</li>
          <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Chat messages</strong> are retained until you or your institute deletes them, or until the account is deleted.</li>
          <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Authentication tokens and FCM tokens</strong> are deleted immediately when you sign out or uninstall the app.</li>
          <li className="text-slate-600 text-sm sm:text-base"><strong className="text-slate-800">Crash logs and diagnostics</strong> are retained for up to 90 days for engineering use, then purged.</li>
        </ul>
      )
    },
    {
      id: "rights-choices",
      title: "6. Your Rights & Choices",
      icon: UserCheck,
      tldr: "You can correct profile data in the app, delete your account, toggle notifications, and exercise your rights under the Indian DPDP Act 2023.",
      searchString: "your rights choices access correction download edit profile request copy support@tuoora.com account deletion via web tuoora.com/account-deletion via email subject delete account request registered phone number role notification controls device settings DPDP Act 2023 data principal rights access correct erase withdraw consent grievance officer",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-semibold text-navy mb-1.5">6.1 Access, correction and download</h4>
            <p className="text-slate-600 text-sm sm:text-base">You can view and update your profile data inside the app at any time under <em>Profile &rarr; Edit</em>. To request a copy of all data we hold about you, email <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a> from your registered email address.</p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-1.5">6.2 Account deletion</h4>
            <p className="text-slate-600 text-sm sm:text-base mb-2">
              You may request deletion of your Tuoora account and associated personal data at any time:
            </p>
            <ul className="space-y-2 pl-4 border-l border-slate-150 mb-3 text-slate-600 text-sm">
              <li><strong>Via the web:</strong> visit <a href="https://tuoora.com/account-deletion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium inline-flex items-center gap-1">https://tuoora.com/account-deletion <ExternalLink className="w-3.5 h-3.5" /></a> and follow the instructions.</li>
              <li><strong>Via email:</strong> write to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-medium">support@tuoora.com</a> from your registered email address with the subject &ldquo;Delete Account Request&rdquo; and include your registered phone number and role (Institute or Student).</li>
            </ul>
            <p className="text-slate-600 text-sm sm:text-base">
              We will action verified requests within 30 days. Fee and payment records may be retained for the period stated in Section 5 above, in line with applicable financial law.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-1.5">6.3 Notification controls</h4>
            <p className="text-slate-600 text-sm sm:text-base">You can turn push notifications on or off at any time from your device&rsquo;s system settings, or from inside the app under <em>Profile &rarr; Notification preferences</em>.</p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-1.5">6.4 Indian DPDP Act 2023 rights</h4>
            <p className="text-slate-600 text-sm sm:text-base">If you are a Data Principal in India, the Digital Personal Data Protection Act, 2023, grants you rights including the right to access, correct, erase, withdraw consent, and grieve. To exercise any of these rights or to file a grievance, contact our Grievance Officer (Section 11).</p>
          </div>
        </div>
      )
    },
    {
      id: "children-privacy",
      title: "7. Children&rsquo;s Privacy",
      icon: HelpCircle,
      tldr: "Tuoora is not for kids under 13. Accounts for students aged 13-18 are created by institutes using parental enrollment consent.",
      searchString: "childrens privacy coaching institutes enrolled students under 13 students between 13 and 18 created by institute parent guardian enrolment consent review request deletion support@tuoora.com",
      content: (
        <p>
          Tuoora is intended for use by coaching institutes and their enrolled students. The app is not designed for use by children under 13. Where students between the ages of 13 and 18 use the app, accounts are created by their institute on the basis of the parent or guardian&rsquo;s enrolment consent. Parents and guardians who wish to review or request deletion of a student account may write to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a> from the registered parent or guardian email.
        </p>
      )
    },
    {
      id: "international-transfers",
      title: "8. International Transfers",
      icon: Globe,
      tldr: "Our servers are in India. By using the app from outside India, you consent to transferring and processing your data here.",
      searchString: "international transfers servers located in india outside india transferred processed in india consent transfer",
      content: (
        <p>
          Tuoora servers are located in India. If you access the Service from outside India, your information will be transferred to and processed in India. By using the Service, you consent to this transfer.
        </p>
      )
    },
    {
      id: "cookies-tracking",
      title: "9. Cookies & Tracking",
      icon: Cookie,
      tldr: "The mobile app does not use cookies, trackers, advertising IDs, or third-party behavioral analytics.",
      searchString: "cookies tracking mobile app does not use cookies third party advertising sdks analytics sdks behavioural tracking technologies android advertising id",
      content: (
        <p>
          The Tuoora mobile app does not use cookies. We do not use third-party advertising SDKs, analytics SDKs, or behavioural tracking technologies. We do not use the Android Advertising ID.
        </p>
      )
    },
    {
      id: "changes-policy",
      title: "10. Changes to this Policy",
      icon: FileText,
      tldr: "We may update this policy occasionally. Material changes will be notified inside the app or via email before they take effect.",
      searchString: "changes to this policy update privacy policy last updated date top of page material changes notify inside app email effective date acceptance updated policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. For material changes, we will notify you inside the app or by email before the change takes effect. Continued use of the Service after the effective date constitutes acceptance of the updated policy.
        </p>
      )
    },
    {
      id: "contact-us",
      title: "11. Contact Us & Grievance Officer",
      icon: Mail,
      tldr: "Get in touch at support@tuoora.com. Grievances are acknowledged within 48 hours and resolved within 30 days under Indian DPDP/IT Rules.",
      searchString: "contact us grievance officer privacy related question request complaint email support@tuoora.com website tuoora.com information technology rules 2011 digital personal data protection act 2023 grievance officer acknowledge within 48 hours resolve within 30 days",
      content: (
        <div className="space-y-4">
          <p>
            For any privacy-related question, request, or complaint, please contact:
          </p>

          <div className="overflow-hidden border border-slate-150 rounded-2xl shadow-sm bg-white max-w-md">
            <table className="min-w-full divide-y divide-slate-150">
              <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <th className="px-4 py-3 bg-slate-50/75 text-left text-xs font-semibold text-navy uppercase tracking-wider w-1/3">Email</th>
                  <td className="px-4 py-3 font-medium text-primary"><a href="mailto:support@tuoora.com" className="hover:underline">support@tuoora.com</a></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <th className="px-4 py-3 bg-slate-50/75 text-left text-xs font-semibold text-navy uppercase tracking-wider">Website</th>
                  <td className="px-4 py-3 font-medium text-primary"><a href="https://tuoora.com" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">https://tuoora.com <ExternalLink className="w-3.5 h-3.5" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            In accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, our Grievance Officer can be reached at the email above. We will acknowledge grievances within 48 hours and resolve them within 30 days.
          </p>
        </div>
      )
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset to clear sticky header/nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Find the section currently in view
      const scrollPosition = window.scrollY + 140;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSections = SECTIONS.filter(sec => 
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.tldr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.searchString.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-primary/30">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main className="pt-24 pb-20 font-sans relative">
        {/* Background Mesh Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute top-[30vh] right-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

        {/* Hero Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-3 mb-3 ">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-xl p-8 sm:p-6 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent blur-3xl pointer-events-none rounded-full" />
            
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Trust &amp; Transparency
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Privacy Policy
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-slate-500 font-medium">
                <p className="font-bold text-navy/80">Tuoora &mdash; Smart Institute Management System</p>
                <span className="hidden sm:inline text-slate-300">|</span>
                <p>Effective &amp; Last Updated: 5 June 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Workspace Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-3">
          <div className="flex flex-col lg:flex-row gap-3 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
              <div className="bg-white rounded-xl  border-slate-150 p-6 shadow-sm">
                <h3 className="font-bold text-navy text-xs uppercase tracking-wider mb-4 text-slate-400">
                  Table of Contents
                </h3>
                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block truncate ${
                        activeSection === sec.id
                          ? "bg-primary/10 text-primary pl-4 font-semibold border-l-2 border-primary"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 w-full space-y-6">
              {/* Search Box */}
              {/* <div className="relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search topics, keywords (e.g., 'UPI', 'delete', 'retention')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 placeholder-slate-400 transition-all text-sm sm:text-base"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 p-1.5 hover:bg-slate-100 rounded-full transition-all"
                    >
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-500 font-medium px-1">
                    Found {filteredSections.length} matching sections
                  </div>
                )}
              </div> */}

              {/* Mobile Quick Navigation (horizontal pills scrollable) */}
              <div className="lg:hidden w-full overflow-x-auto py-2 flex gap-2 no-scrollbar sticky top-16 bg-slate-50/90 backdrop-blur-md z-45 border-y border-slate-150 px-1">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      activeSection === sec.id
                        ? "bg-primary text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-150"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </div>

              {/* Sections List */}
              <div className="space-y-8">
                <AnimatePresence mode="popLayout">
                  {filteredSections.length > 0 ? (
                    filteredSections.map((sec, idx) => {
                      const IconComponent = sec.icon;
                      return (
                        <motion.section
                          key={sec.id}
                          id={sec.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className={`bg-white rounded-xl p-6 sm:p-8 border shadow-sm transition-all duration-300 ${
                            activeSection === sec.id 
                              ? "border-primary/20 ring-1 ring-primary/5 shadow-md"
                              : "border-slate-150"
                          }`}
                        >
                          <div className="flex items-start gap-4 mb-5 pb-4 border-b border-slate-100">
                            <div className="p-3 bg-primary/5 rounded-2xl text-primary shrink-0">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                                Section {idx + 1}
                              </span>
                              <h2 className="text-xl sm:text-2xl font-bold text-navy mt-0.5">
                                {sec.title}
                              </h2>
                            </div>
                          </div>

                          {/* TL;DR Callout Card */}
                          <div className="bg-amber-50/40 border-l-4 border-amber-500 rounded-r-2xl p-4 mb-6">
                            <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                              TL;DR / Quick Summary
                            </p>
                            <p className="text-xs sm:text-sm text-amber-950 font-medium">
                              {sec.tldr}
                            </p>
                          </div>

                          {/* Original Legal Content */}
                          <div className="prose prose-orange max-w-none text-slate-650 leading-relaxed text-sm sm:text-base font-light space-y-4">
                            {sec.content}
                          </div>
                        </motion.section>
                      );
                    })
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white rounded-3xl p-12 text-center border border-slate-150 shadow-sm"
                    >
                      <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-navy">No matching sections found</h3>
                      <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
                        We couldn't find anything matching &ldquo;{searchQuery}&rdquo;. Try checking your spelling or looking for terms like &ldquo;UPI&rdquo;, &ldquo;FCM&rdquo;, or &ldquo;delete&rdquo;.
                      </p>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all"
                      >
                        Clear Search
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Help Card */}
              <div className="bg-gradient-to-r from-navy to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg border border-slate-800">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl pointer-events-none rounded-full" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold">Have privacy concerns?</h3>
                    <p className="text-slate-300 text-sm sm:text-base font-light max-w-lg">
                      Our support team is happy to clarify any questions you have regarding how we collect, store, and process your data.
                    </p>
                  </div>
                  <a 
                    href="mailto:support@tuoora.com" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-navy px-6 py-3.5 rounded-2xl text-sm font-bold shadow-md hover:bg-slate-50 transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    Email Support
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
