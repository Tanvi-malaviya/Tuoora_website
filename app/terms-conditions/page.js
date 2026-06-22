'use client';

import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Info, 
  Globe, 
  UserCheck, 
  Lock, 
  Shield, 
  AlertTriangle, 
  CreditCard, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  X, 
  Mail, 
  Search, 
  ExternalLink,
  Scale
} from "lucide-react";

export default function TermsConditions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("intro");

  const SECTIONS = [
    {
      id: "intro",
      title: "Introduction",
      icon: FileText,
      tldr: "These Terms form a binding agreement between you and Tuoora. Accessing or using the Service means you agree to these Terms and our Privacy Policy.",
      searchString: "introduction terms conditions form a legally binding agreement between you and tuoora we us our governing your access to and use of the tuoora mobile application tuoora.com website related features content services collectively service. by creating an account signing in or otherwise using the service, you confirm that you have read understood and agree to be bound by these terms and our privacy policy. if you do not agree, you must not use the service.",
      content: (
        <div className="space-y-4">
          <p>
            These Terms &amp; Conditions (the &ldquo;Terms&rdquo;) form a legally binding agreement between you and <strong>Tuoora</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) governing your access to and use of the Tuoora mobile application, the <a href="https://tuoora.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">tuoora.com</a> website, and all related features, content, and services (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p>
            By creating an account, signing in, or otherwise using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</a>. If you do not agree, you must not use the Service.
          </p>
        </div>
      )
    },
    {
      id: "definitions",
      title: "1. Definitions",
      icon: Info,
      tldr: "Defines important terminology used throughout these Terms, including 'Institute User', 'Student User', 'User Content', and 'UPI'.",
      searchString: "definitions institute user coaching institute tutor training centre registers student user individual enrolled by institute user batch information fees attendance homework chat user content data text images videos audio documents upi unified payments interface npci",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">
            <strong className="text-slate-800">&ldquo;Institute User&rdquo;</strong> means a coaching institute, tutor, or training centre that registers on the Service to manage its students, batches, fees, attendance, and related operations.
          </li>
          <li className="text-slate-600 text-sm sm:text-base">
            <strong className="text-slate-800">&ldquo;Student User&rdquo;</strong> means an individual enrolled by an Institute User to access their batch information, fees, attendance, homework, and chat features.
          </li>
          <li className="text-slate-600 text-sm sm:text-base">
            <strong className="text-slate-800">&ldquo;User Content&rdquo;</strong> means any data, text, images, videos, audio, documents, or other material that you submit to the Service.
          </li>
          <li className="text-slate-600 text-sm sm:text-base">
            <strong className="text-slate-800">&ldquo;UPI&rdquo;</strong> means the Unified Payments Interface operated by the National Payments Corporation of India (NPCI).
          </li>
        </ul>
      )
    },
    {
      id: "service",
      title: "2. The Service",
      icon: Globe,
      tldr: "Tuoora provides management and communication tools for coaching centers and students. It is NOT a financial institution or payment processing service.",
      searchString: "the service software as a service tools manage students batches fees attendance homework study material staff expenses leads chats reports communication platform only not a financial services provider not payment aggregator not payment system operator not banking institution",
      content: (
        <div className="space-y-3">
          <p>
            Tuoora provides software-as-a-service tools that allow Institute Users to manage students, batches, fees, attendance, homework, study material, staff, expenses, leads, chats, and reports, and that allow Student Users to view their attendance, homework, fee status, study material, and chat with their institute.
          </p>
          <p className="bg-slate-50 border border-slate-150 p-4 rounded-2xl text-slate-500 italic text-xs sm:text-sm">
            Tuoora is a <strong>management and communication platform only</strong>. It is not a financial services provider, not a payment aggregator, not a payment system operator, and not a banking institution.
          </p>
        </div>
      )
    },
    {
      id: "eligibility",
      title: "3. Eligibility",
      icon: UserCheck,
      tldr: "You must be 18+ to register as an Institute User. Students aged 13-18 require parental enrollment consent. Under 13s are prohibited.",
      searchString: "eligibility 18 years old competent binding contract indian contract act 1872 student user between 13 and 18 parent guardian consent enrollment children under 13 barred",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">You must be at least <strong>18 years old</strong> and competent to enter into a binding contract under the Indian Contract Act, 1872, to register as an Institute User.</li>
          <li className="text-slate-600 text-sm sm:text-base">Student Users between the ages of 13 and 18 may use the Service only if their account is created and managed by an Institute User on the basis of parent or guardian consent obtained during enrolment.</li>
          <li className="text-slate-600 text-sm sm:text-base">Children under the age of 13 are not permitted to use the Service.</li>
          <li className="text-slate-600 text-sm sm:text-base">You must not be barred from using the Service under the laws of India or any other applicable jurisdiction.</li>
        </ul>
      )
    },
    {
      id: "account-security",
      title: "4. Account Registration & Security",
      icon: Lock,
      tldr: "You must supply accurate account details, protect your login credentials, and report unauthorized access immediately.",
      searchString: "account registration security institute users register email phone otp verification student user accounts created credentials provided accurate current complete information safeguarding password authentication tokens unauthorized access support@tuoora.com active under account",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">Institute Users register by providing a valid email and phone number and completing OTP verification.</li>
          <li className="text-slate-600 text-sm sm:text-base">Student User accounts are created by the Institute User who enrols them; Student Users sign in using credentials provided by their institute.</li>
          <li className="text-slate-600 text-sm sm:text-base">You agree to provide accurate, current, and complete information and to keep it updated.</li>
          <li className="text-slate-600 text-sm sm:text-base">You are responsible for safeguarding your password and authentication tokens. You agree not to share your account credentials with any third party.</li>
          <li className="text-slate-600 text-sm sm:text-base">You must notify us immediately at <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a> of any unauthorised access or suspected breach of your account.</li>
          <li className="text-slate-600 text-sm sm:text-base">You are solely responsible for all activity that occurs under your account.</li>
        </ul>
      )
    },
    {
      id: "roles-responsibilities",
      title: "5. Roles & Responsibilities",
      icon: Shield,
      tldr: "Institutes are responsible for academic records, student consents, refunds, and UPI IDs. Students must protect internal materials and act ethically.",
      searchString: "roles responsibilities institute users accuracy fee amounts attendance homework study material staff leads data consent students minors refund policies upi id qr code belong registered business students use educational purposes share homework chat",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              5.1 Institute Users
            </h4>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
              <li className="text-slate-600 text-sm sm:text-base">You are responsible for the accuracy of fee amounts, attendance entries, homework, study material, batch assignments, and all other data you enter or upload.</li>
              <li className="text-slate-600 text-sm sm:text-base">You must obtain appropriate consent from students (or their parents/guardians, if minors) before adding their personal information to the Service.</li>
              <li className="text-slate-600 text-sm sm:text-base">You are responsible for setting fair fee policies, refund policies, and refund processing for your students. Tuoora does not mediate fee or refund disputes between you and your students.</li>
              <li className="text-slate-600 text-sm sm:text-base">You confirm that any UPI ID and QR code you upload belong to you or your registered business, and that you are authorised to receive fee payments at that UPI handle.</li>
              <li className="text-slate-600 text-sm sm:text-base">You will comply with all applicable laws including, without limitation, education, taxation, data protection, consumer protection, and financial regulations.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              5.2 Student Users
            </h4>
            <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
              <li className="text-slate-600 text-sm sm:text-base">You acknowledge that the institute who enrolled you controls your account, your batch assignment, your fee schedule, your attendance entries, and your homework records on the Service.</li>
              <li className="text-slate-600 text-sm sm:text-base">You agree to use the Service only for legitimate educational purposes related to your enrolment with that institute.</li>
              <li className="text-slate-600 text-sm sm:text-base">You will not share confidential homework, study material, or chat content with persons outside your institute without permission from the institute.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "upi-payments-disclaimer",
      title: "6. UPI Payments — Important Disclaimer",
      icon: AlertTriangle,
      tldr: "Tuoora does NOT process or store payment credentials. Transactions occur on the external UPI network. We are not liable for payment failures or disputes.",
      searchString: "upi payments important disclaimer tuoora does not process or facilitate payments actual transaction occurs entirely outside tuoora student chosen upi application google pay phonepe paytm bhim money moves directly bank account npc direct transfer failed delayed duplicated mis-routed fraudulent upi transactions incorrect upi handle qr code paid markings enter institute user",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl text-slate-700 leading-relaxed shadow-sm">
            <h4 className="font-extrabold text-red-800 text-sm sm:text-base mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              Tuoora does NOT process or facilitate payments.
            </h4>
            <p className="text-xs sm:text-sm text-red-950 font-medium">
              The Service only displays the UPI ID and QR code that the Institute User has uploaded. When a Student User pays fees, the actual transaction occurs entirely outside Tuoora, inside the Student&rsquo;s chosen UPI application (such as Google Pay, PhonePe, Paytm, BHIM, or any other UPI-enabled app). Money moves directly from the Student&rsquo;s bank account to the Institute&rsquo;s bank account through the UPI network operated by NPCI and the participating banks.
            </p>
          </div>

          <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
            <li className="text-slate-600 text-sm sm:text-base">Tuoora has no access to and never sees your bank account number, debit card details, credit card details, UPI PIN, or transaction PINs.</li>
            <li className="text-slate-600 text-sm sm:text-base">Tuoora is not responsible for failed, delayed, duplicated, mis-routed, or fraudulent UPI transactions. For any payment dispute, you must contact your own UPI app, your bank, or NPCI directly.</li>
            <li className="text-slate-600 text-sm sm:text-base">Tuoora is not responsible if an Institute User uploads an incorrect, expired, or fraudulent UPI ID or QR code.</li>
            <li className="text-slate-600 text-sm sm:text-base">Fee &ldquo;Paid&rdquo; markings inside Tuoora are entered by the Institute User upon their confirmation of receipt of funds and do not constitute a payment receipt issued by Tuoora.</li>
          </ul>
        </div>
      )
    },
    {
      id: "subscription-fees",
      title: "7. Subscription & Fees",
      icon: CreditCard,
      tldr: "Subscription fees are payable in advance and are non-refundable. Pricing changes require 30 days notice. Non-payment may cause service suspension.",
      searchString: "subscription fees pricing plan features billing intervals displayed in app website advance non-refundable change pricing 30 days prior notice fail to pay subscription suspend terminate",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">The Service may be offered on a free, freemium, or paid subscription basis at our discretion. Pricing, plan features, and billing intervals will be displayed in the app or on our website at the time of subscription.</li>
          <li className="text-slate-600 text-sm sm:text-base">All subscription fees are payable in advance and, unless required by law, are <strong>non-refundable</strong>.</li>
          <li className="text-slate-600 text-sm sm:text-base">We may change subscription pricing or plan features by giving you at least 30 days&rsquo; prior notice. Changes take effect at the start of your next billing period.</li>
          <li className="text-slate-600 text-sm sm:text-base">If you fail to pay subscription fees, we may suspend or terminate your access to paid features.</li>
        </ul>
      )
    },
    {
      id: "user-content-licence",
      title: "8. User Content & Licence",
      icon: Share2,
      tldr: "You retain ownership of the data you upload. You grant us a non-exclusive license solely to host and display the content to deliver our Service.",
      searchString: "user content licence retain all rights owner tuoora transfer ownership worldwide royalty-free non-exclusive sub-licensable license host store transmit display process represent warrant own rights violate third party review remove refuse content",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">You retain all rights you already have in your User Content. You do not transfer ownership to Tuoora.</li>
          <li className="text-slate-600 text-sm sm:text-base">You grant Tuoora a worldwide, royalty-free, non-exclusive, sub-licensable licence to host, store, transmit, display, and process your User Content solely to operate the Service for you and the parties you choose to share it with (such as your institute or students).</li>
          <li className="text-slate-600 text-sm sm:text-base">You represent and warrant that you own or have all rights necessary to submit your User Content and that it does not infringe any third-party intellectual property, privacy, or other rights.</li>
          <li className="text-slate-600 text-sm sm:text-base">We may, but are not obligated to, review, remove, or refuse User Content that we reasonably believe violates these Terms or applicable law.</li>
        </ul>
      )
    },
    {
      id: "acceptable-use",
      title: "9. Acceptable Use",
      icon: CheckCircle2,
      tldr: "Prohibits illegal uploads, malware, spam, hacking, scraping, reverse engineering, and violating others' intellectual property rights.",
      searchString: "acceptable use unlawful defamatory obscene pornographic hateful harassing threatening violence discrimination exploits minors impersonate virus malware reverse engineer decompile decompile disassemble scrape bots scripts spam resell sublicense lease violate indian law",
      content: (
        <div className="space-y-3">
          <p>You agree NOT to use the Service to:</p>
          <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
            <li className="text-slate-600 text-sm sm:text-base">Upload or transmit content that is unlawful, defamatory, obscene, pornographic, hateful, harassing, threatening, or that promotes violence or discrimination.</li>
            <li className="text-slate-600 text-sm sm:text-base">Share content that exploits or harms minors.</li>
            <li className="text-slate-600 text-sm sm:text-base">Impersonate any person or misrepresent your affiliation with an institute.</li>
            <li className="text-slate-600 text-sm sm:text-base">Upload malware, viruses, or any code designed to disrupt or damage the Service or its users&rsquo; devices.</li>
            <li className="text-slate-600 text-sm sm:text-base">Attempt to reverse engineer, decompile, disassemble, scrape, or extract source code or data from the Service except as permitted by law.</li>
            <li className="text-slate-600 text-sm sm:text-base">Attempt to gain unauthorised access to other accounts or to our servers, networks, or infrastructure.</li>
            <li className="text-slate-600 text-sm sm:text-base">Use automated bots, scripts, or scrapers to access the Service without our prior written consent.</li>
            <li className="text-slate-600 text-sm sm:text-base">Use the Service to send unsolicited bulk communications (spam) or for any unlawful, fraudulent, or deceptive purpose.</li>
            <li className="text-slate-600 text-sm sm:text-base">Resell, sublicense, rent, lease, or commercially exploit the Service or any part of it without our prior written consent.</li>
            <li className="text-slate-600 text-sm sm:text-base">Violate any applicable Indian law, regulation, or third-party right.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "10. Intellectual Property",
      icon: Scale,
      tldr: "Tuoora ownership covers all source code, branding, and assets. We license the mobile app to you strictly for personal/institute use.",
      searchString: "intellectual property tuoora name logo app website source code designs text graphics protected by indian international laws personal limited non-exclusive non-transferable revocable license install devices trademarks branding",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">The Tuoora name, logo, app, website, source code, designs, text, graphics, and all other materials provided by us are owned by or licensed to Tuoora and are protected by Indian and international intellectual property laws.</li>
          <li className="text-slate-600 text-sm sm:text-base">Subject to your compliance with these Terms, we grant you a personal, limited, non-exclusive, non-transferable, revocable licence to install and use the app on devices you own or control, solely for your own use of the Service.</li>
          <li className="text-slate-600 text-sm sm:text-base">No part of these Terms grants you any right to use our trade marks, trade names, or branding without our prior written consent.</li>
        </ul>
      )
    },
    {
      id: "third-party-services",
      title: "11. Third-Party Services",
      icon: Globe,
      tldr: "The Service connects with Firebase FCM, App/Play Stores, and UPI apps. We are not responsible for the stability of these third-party platforms.",
      searchString: "third party services google firebase cloud messaging push notifications operating system play store internet provider upi app terms privacy policies acts omissions failures",
      content: (
        <p>
          The Service relies on third-party services including, without limitation, Google Firebase Cloud Messaging for push notifications, your device&rsquo;s operating system and Play Store, your internet service provider, and the UPI app you choose to make payments through. Your use of those services is governed by their own terms and privacy policies. We are not responsible for the acts, omissions, or failures of any third-party service.
        </p>
      )
    },
    {
      id: "service-availability",
      title: "12. Service Availability & Modifications",
      icon: Info,
      tldr: "The Service is offered 'as is'. We may execute emergency maintenance, modify core features, or adjust quotas at our discretion.",
      searchString: "service availability modifications as is as available uninterrupted error-free scheduled emergency maintenance modify features add discontinue limits storage quotas file size message rate",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base font-light">The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not guarantee that the Service will be uninterrupted, error-free, or available at all times.</li>
          <li className="text-slate-600 text-sm sm:text-base font-light font-light">We may, from time to time, perform scheduled or emergency maintenance, modify features, add new features, or discontinue features, with or without notice.</li>
          <li className="text-slate-600 text-sm sm:text-base font-light font-light">We may impose reasonable usage limits (such as storage quotas, file size caps, or message rate limits) at our discretion to ensure stability for all users.</li>
        </ul>
      )
    },
    {
      id: "disclaimers",
      title: "13. Disclaimers",
      icon: AlertTriangle,
      tldr: "Tuoora makes no warranties regarding the accuracy of third-party entries (e.g., fee statuses, homework entries, attendance). Verify them manually.",
      searchString: "disclaimers maximum extent permitted by law as is as available without warranties implied merchantability fitness particular purpose accuracy non-infringement uninterrupted coaching data entries fees marks verify",
      content: (
        <div className="space-y-3">
          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl text-sm text-slate-700 font-medium">
            <p>
              <strong>To the maximum extent permitted by law</strong>, the Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to implied warranties of merchantability, fitness for a particular purpose, accuracy, non-infringement, or uninterrupted operation.
            </p>
          </div>
          <p>
            Tuoora does not warrant that data entered by Institute Users (such as fee amounts, attendance, homework, or marks) is accurate, complete, or appropriate. Institutes and Students must verify all such data through their own records before relying on it.
          </p>
        </div>
      )
    },
    {
      id: "limitation-liability",
      title: "14. Limitation of Liability",
      icon: Scale,
      tldr: "To the maximum extent under Indian law, our liability is capped at ₹1,000 or the total amount paid by you in the preceding 12 months.",
      searchString: "limitation of liability maximum extent permitted by indian law directors employees contractors partners indirect incidental special consequential punitive exemplary damages profits revenue business data goodwill use inability upi transaction dispute user content unauthorized access bug error virus indian rupees 1000",
      content: (
        <div className="space-y-3">
          <p>
            To the maximum extent permitted by Indian law, Tuoora, its directors, employees, contractors, and partners shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to loss of profits, revenue, business opportunities, data, goodwill, or any other intangible loss, arising out of or relating to:
          </p>
          <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100 mb-3">
            <li className="text-slate-650 text-sm sm:text-base">your use of, or inability to use, the Service;</li>
            <li className="text-slate-650 text-sm sm:text-base">any UPI transaction or payment dispute between Institute and Student;</li>
            <li className="text-slate-650 text-sm sm:text-base">any User Content or conduct of any third party on the Service;</li>
            <li className="text-slate-650 text-sm sm:text-base">unauthorised access to or alteration of your transmissions or data;</li>
            <li className="text-slate-650 text-sm sm:text-base">any bug, error, virus, or malicious code transmitted to or through the Service by any third party.</li>
          </ul>
          <p>
            In no event shall our total aggregate liability arising out of or relating to these Terms exceed the greater of (a) the amount you paid Tuoora for the Service during the 12 months immediately preceding the event giving rise to the claim, or (b) <strong>Indian Rupees 1,000</strong>.
          </p>
        </div>
      )
    },
    {
      id: "indemnification",
      title: "15. Indemnification",
      icon: Shield,
      tldr: "You agree to indemnify Tuoora against claims, damages, or costs arising from your violation of these terms or content you submit.",
      searchString: "indemnification defend hold harmless tuoora directors employees contractors partners claims liabilities damages losses costs expenses legal fees violation of terms user content violate law third party dispute fee refund dispute",
      content: (
        <p>
          You agree to indemnify, defend, and hold harmless Tuoora and its directors, employees, contractors, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to (a) your use of the Service in violation of these Terms; (b) any User Content you upload; (c) your violation of any law or any third party&rsquo;s rights; or (d) any dispute between you and any other user of the Service, including any Institute&ndash;Student fee or refund dispute.
        </p>
      )
    },
    {
      id: "termination",
      title: "16. Termination",
      icon: X,
      tldr: "You can stop using the service and delete your account. We may suspend your access for violations of these Terms. Key terms survive termination.",
      searchString: "termination stop using service request deletion tuoora.com/account-deletion support@tuoora.com suspend terminate breach terms violate law user content responsibilities upi disclaimer intellectual property disclaimers limitation liability indemnification governing law dispute resolution survive",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">You may stop using the Service at any time. You may also request deletion of your account via <a href="https://tuoora.com/account-deletion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">https://tuoora.com/account-deletion <ExternalLink className="w-3.5 h-3.5" /></a> or by emailing <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a>.</li>
          <li className="text-slate-600 text-sm sm:text-base">We may suspend or terminate your access to the Service at any time, with or without notice, if we reasonably believe you have breached these Terms, violated applicable law, or engaged in conduct that may harm other users or the Service.</li>
          <li className="text-slate-600 text-sm sm:text-base">Sections 5.1 (Institute Responsibilities), 6 (UPI Disclaimer), 8 (User Content), 10 (Intellectual Property), 13 (Disclaimers), 14 (Limitation of Liability), 15 (Indemnification), 17 (Governing Law), and 18 (Dispute Resolution) shall survive any termination of these Terms.</li>
        </ul>
      )
    },
    {
      id: "governing-law",
      title: "17. Governing Law",
      icon: Scale,
      tldr: "These Terms are governed by Indian laws. Disputes are subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.",
      searchString: "governing law laws of india conflict of laws principles jurisdiction courts ahmedabad gujarat india dispute",
      content: (
        <p>
          These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict-of-laws principles. Subject to Section 18, the courts at <strong>Ahmedabad, Gujarat, India</strong> shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms or the Service.
        </p>
      )
    },
    {
      id: "dispute-resolution",
      title: "18. Dispute Resolution",
      icon: HelpCircle,
      tldr: "Disputes will undergo a 30-day amicable discussion process. Unresolved disputes are referred to arbitration in Ahmedabad, Gujarat, under the 1996 Act.",
      searchString: "dispute resolution amicably good faith discussion support@tuoora.com 30 days arbitration arbitration and conciliation act 1996 sole arbitrator seat venue ahmedabad gujarat language english arbitral award final binding",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-600 text-sm sm:text-base">If a dispute arises, the parties shall first attempt to resolve it amicably through good-faith discussion, initiated by written notice to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a>.</li>
          <li className="text-slate-600 text-sm sm:text-base">If the dispute is not resolved within 30 days of the notice, it shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996, by a sole arbitrator appointed by Tuoora.</li>
          <li className="text-slate-600 text-sm sm:text-base">The seat and venue of arbitration shall be Ahmedabad, Gujarat. The language of arbitration shall be English. The arbitral award shall be final and binding on the parties.</li>
        </ul>
      )
    },
    {
      id: "changes-terms",
      title: "19. Changes to these Terms",
      icon: FileText,
      tldr: "Terms can be modified at any time. We notify you of material changes 7 days in advance. Continued use denotes acceptance.",
      searchString: "changes to these terms update terms last updated date top of page material changes notify inside app email 7 days before change takes effect continued use acceptance updated terms stop using",
      content: (
        <p>
          We may update these Terms from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. For material changes, we will notify you inside the app or by email at least 7 days before the change takes effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not accept the changes, you must stop using the Service.
        </p>
      )
    },
    {
      id: "miscellaneous",
      title: "20. Miscellaneous",
      icon: Info,
      tldr: "Boilerplate clauses defining the entire agreement, severability, no waiver of rights, assignment transfer restrictions, and official notice pathways.",
      searchString: "miscellaneous entire agreement privacy policy severability invalid unenforceable remaining provisions full force no waiver assignment transfer prior written consent merger acquisition sale of assets notices registered email address in app support@tuoora.com",
      content: (
        <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
          <li className="text-slate-655 text-sm sm:text-base"><strong className="text-slate-800">Entire agreement:</strong> These Terms together with our Privacy Policy constitute the entire agreement between you and Tuoora regarding the Service.</li>
          <li className="text-slate-655 text-sm sm:text-base"><strong className="text-slate-800">Severability:</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
          <li className="text-slate-655 text-sm sm:text-base"><strong className="text-slate-800">No waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.</li>
          <li className="text-slate-655 text-sm sm:text-base"><strong className="text-slate-800">Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
          <li className="text-slate-655 text-sm sm:text-base"><strong className="text-slate-800">Notices:</strong> Notices to you may be sent to your registered email address or displayed inside the app. Notices to us must be sent to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a>.</li>
        </ul>
      )
    },
    {
      id: "contact-us",
      title: "21. Contact Us",
      icon: Mail,
      tldr: "If you have questions regarding these Terms, contact support@tuoora.com.",
      searchString: "contact us email support@tuoora.com website tuoora.com privacy policy tuoora.com/privacy-policy",
      content: (
        <div className="space-y-4">
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
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <th className="px-4 py-3 bg-slate-50/75 text-left text-xs font-semibold text-navy uppercase tracking-wider">Privacy Policy</th>
                  <td className="px-4 py-3 font-medium text-primary"><a href="/privacy-policy" className="hover:underline">https://tuoora.com/privacy-policy</a></td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-3 mb-3">
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
                Terms of Service
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Terms &amp; Conditions
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
                    placeholder="Search terms, keywords (e.g., 'UPI', 'disclaimer', 'liability')..."
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
                        We couldn't find anything matching &ldquo;{searchQuery}&rdquo;. Try checking your spelling or looking for terms like &ldquo;UPI&rdquo;, &ldquo;arbitration&rdquo;, or &ldquo;liability&rdquo;.
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
                    <h3 className="text-xl sm:text-2xl font-bold">Need legal clarification?</h3>
                    <p className="text-slate-300 text-sm sm:text-base font-light max-w-lg">
                      Our administrative team is always available to help clarify terms of usage, subscriptions, or responsibilities on the Tuoora ERP platform.
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
