'use client';

import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  CreditCard, 
  AlertTriangle, 
  X, 
  HelpCircle, 
  Mail, 
  Search, 
  CheckCircle2, 
  ExternalLink,
  Info
} from "lucide-react";

export default function RefundPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("intro");

  const SECTIONS = [
    {
      id: "intro",
      title: "Introduction",
      icon: FileText,
      tldr: "This policy details subscription refunds for coaching institutes using Tuoora and disclaims liability for course fees paid directly to institutes by students.",
      searchString: "introduction this refund and cancellation policy policy outlines the terms and conditions regarding refunds cancellations and billing for the tuoora mobile application and website services service. by subscribing to our saas platform or using our services, you agree to the terms described herein. tuoora operates under two distinct transaction models saas subscriptions paid by coaching institutes directly to tuoora student course fees paid by students directly to coaching institutes.",
      content: (
        <div className="space-y-4">
          <p>
            This Refund and Cancellation Policy (the &ldquo;Policy&rdquo;) outlines the terms and conditions regarding refunds, cancellations, and billing for the <strong>Tuoora</strong> mobile application, website, and related SaaS services (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p>
            By subscribing to our platform or using our services, you agree to be bound by the terms described in this Policy. If you do not agree to these terms, please do not subscribe to or use the Service.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl text-sm text-slate-700 mt-4">
            <div className="flex gap-2 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-navy">Important Scope Clarification:</p>
                <p className="mt-1">
                  Tuoora operates under two separate transaction models:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>SaaS Subscriptions:</strong> Billed directly by Tuoora to Coaching Institutes for the use of the platform.</li>
                  <li><strong>Student Course Fees:</strong> Paid directly by Students/Parents to Coaching Institutes. Tuoora does not collect, receive, or process these fees.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "institute-subscriptions",
      title: "1. Institute SaaS Subscriptions",
      icon: CreditCard,
      tldr: "All subscriptions are billed in advance. To keep pricing fair for all coaching centers, subscription fees are non-refundable.",
      searchString: "institute saas subscriptions coaching institutes subscription fees platform monthly quarterly annual billing cycle recurring advance non-refundable credits partially used billing periods unused credits immediate cancellation",
      content: (
        <div className="space-y-4">
          <p>
            Coaching institutes pay subscription fees to access Tuoora&rsquo;s cloud-based ERP management platform. All subscriptions (including monthly, quarterly, semi-annual, or annual plans) are billed in advance on a recurring cycle.
          </p>
          <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
            <li className="text-slate-650 text-sm sm:text-base">
              <strong className="text-slate-800">Non-Refundability:</strong> Except as explicitly stated in this Policy or as required by applicable Indian consumer laws, all subscription fees paid to Tuoora are <strong>non-refundable</strong>.
            </li>
            <li className="text-slate-650 text-sm sm:text-base">
              <strong className="text-slate-800">No Pro-Rata Credits:</strong> We do not provide pro-rated refunds or credits for partially used billing cycles, unused features, or immediate account terminations.
            </li>
            <li className="text-slate-650 text-sm sm:text-base">
              <strong className="text-slate-800">SaaS Access:</strong> Cancelling your subscription prevents future renewal charges but does not entitle you to a refund of any portion of the fee paid for the current billing cycle.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "student-fees-disclaimer",
      title: "2. Student Course Fees & UPI Transactions",
      icon: AlertTriangle,
      tldr: "Course fees are paid directly to your coaching center. Tuoora does not process, hold, or refund these fees. Contact your institute for their policy.",
      searchString: "student course fees tuition upi transactions qr codes cash cheque payments payment aggregator banking institution direct bank transfer not responsible mediate dispute refund and cancellation policy student parent guardian coaching institute",
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl text-slate-700 leading-relaxed shadow-sm">
            <h4 className="font-extrabold text-amber-800 text-sm sm:text-base mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Tuoora has no access to student fee transactions.
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 font-medium">
              Tuoora provides management software that allows Coaching Institutes to display their own UPI handle, UPI QR codes, or log offline payments. The actual transfer of tuition or course fees takes place entirely outside the Tuoora platform.
            </p>
          </div>
          <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
            <li className="text-slate-600 text-sm sm:text-base">
              Because Tuoora never receives or processes these fee payments, <strong>Tuoora is legally unable to issue refunds for student tuition or course fees</strong>.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              Each Coaching Institute sets and manages its own independent student refund and cancellation policy. Students or parents must contact their respective institute directly to request refunds.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              Tuoora does not act as an arbitrator, mediator, or escrow agent in any fee or refund dispute arising between an Institute User and a Student User.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "cancellation-policy",
      title: "3. Subscription Cancellation & Renewal",
      icon: X,
      tldr: "You can cancel your subscription anytime. Your access will remain active until the end of your current billing cycle, with no future charges.",
      searchString: "subscription cancellation renewal cancel anytime active end of current billing cycle no future charges account settings support@tuoora.com downgrade notice cancellation fees auto-renew billing cycle",
      content: (
        <div className="space-y-4">
          <p>
            Institute Users have complete control over their accounts and may cancel their Tuoora subscription at any time:
          </p>
          <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100 mb-3">
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Cancellation Process:</strong> You can cancel future renewals through the Admin Dashboard profile section, or by sending a cancellation request from your registered email to <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a>.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Effective Date:</strong> Cancellations must be submitted at least <strong>48 hours</strong> prior to the next scheduled renewal date to avoid auto-billing.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Service Availability Post-Cancellation:</strong> Upon cancellation, your account will remain active with access to premium features until the end of the current billing cycle, after which it will downgrade or suspend.
            </li>
          </ul>
          <p className="text-slate-500 italic text-xs sm:text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
            Cancelling your subscription does not trigger a refund for prior payments. It only stops future automated charges.
          </p>
        </div>
      )
    },
    {
      id: "billing-errors",
      title: "4. Billing Discrepancies & Payment Failures",
      icon: HelpCircle,
      tldr: "If you notice an incorrect charge, contact support@tuoora.com within 30 days. We will investigate and issue a credit if verified.",
      searchString: "billing discrepancies payment failures incorrect charge support@tuoora.com 30 days credit duplicate transaction original payment method banks gateway upi network double debits",
      content: (
        <div className="space-y-4">
          <p>
            In the event of double-billing, payment failures, or unauthorized subscription charges, the following terms apply:
          </p>
          <ul className="space-y-2.5 pl-4 border-l-2 border-slate-100">
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Notification Window:</strong> If you believe there is a billing discrepancy, you must report it to us within <strong>30 days</strong> of the transaction date at <a href="mailto:support@tuoora.com" className="text-primary hover:underline font-semibold">support@tuoora.com</a>.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Resolution Process:</strong> Upon receiving your report, our team will investigate. If we confirm an overcharge or a duplicate transaction occurred due to our system error, a refund will be processed back to your original payment method within 7-10 business days.
            </li>
            <li className="text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-800">Third-Party Gateway Issues:</strong> We are not responsible for transaction failures, delayed bank settlements, or temporary double-debits caused by payment gateways, card networks, or UPI nodes. These must be taken up with your bank.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "changes-to-policy",
      title: "5. Changes to this Policy",
      icon: FileText,
      tldr: "We can modify this policy. Continued use of Tuoora after updates means you agree to the new terms.",
      searchString: "changes to this policy update refund cancellation revision last updated top of page email in app notification continued use constitutes acceptance",
      content: (
        <p>
          We reserve the right to modify or replace this Refund and Cancellation Policy at any time. When updates are published, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. For significant changes, we will notify you through email or dashboard banners. Your continued use of the platform after the updates become effective will constitute your acknowledgment and agreement to the modified policy terms.
        </p>
      )
    },
    {
      id: "contact-us",
      title: "6. Contact Us",
      icon: Mail,
      tldr: "Reach out to support@tuoora.com for subscription or billing concerns. We reply within 2 business days.",
      searchString: "contact us email support@tuoora.com website tuoora.com response time billing queries subscription support hours",
      content: (
        <div className="space-y-4">
          <p>
            For any queries, disputes, or assistance regarding subscription billing, cancellations, or refunds, please reach out to us:
          </p>

          <div className="overflow-hidden border border-slate-150 rounded-2xl shadow-sm bg-white max-w-md">
            <table className="min-w-full divide-y divide-slate-150">
              <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <th className="px-4 py-3 bg-slate-50/75 text-left text-xs font-semibold text-navy uppercase tracking-wider w-1/3">Email</th>
                  <td className="px-4 py-3 font-medium text-primary"><a href="mailto:support@tuoora.com" className="hover:underline">support@tuoora.com</a></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <th className="px-4 py-3 bg-slate-50/75 text-left text-xs font-semibold text-navy uppercase tracking-wider">Response Time</th>
                  <td className="px-4 py-3 font-medium text-slate-700">Within 24-48 business hours</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <th className="px-4 py-3 bg-slate-50/75 text-left text-xs font-semibold text-navy uppercase tracking-wider">Website</th>
                  <td className="px-4 py-3 font-medium text-primary"><a href="https://tuoora.com" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">https://tuoora.com <ExternalLink className="w-3.5 h-3.5" /></a></td>
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
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-6 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent blur-3xl pointer-events-none rounded-full" />
            
            <div className="relative z-10 space-y-4">
              {/* <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Billing Policy
              </span> */}
              
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Refund &amp; Cancellation Policy
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-slate-500 font-medium">
                <p className="font-bold text-navy/80">Tuoora &mdash; Smart Institute Management System</p>
                <span className="hidden sm:inline text-slate-300">|</span>
                <p>Effective &amp; Last Updated: 22 June 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Workspace Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            <div className="flex-1 w-full space-y-3">
              {/* Search Box */}
              {/* <div className="relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search topics, keywords (e.g., 'SaaS', 'cancel', 'tuition')..."
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

                          {/* Legal Content */}
                          <div className="prose prose-orange max-w-none text-slate-655 leading-relaxed text-sm sm:text-base font-light space-y-4">
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
                        We couldn't find anything matching &ldquo;{searchQuery}&rdquo;. Try checking your spelling or looking for terms like &ldquo;SaaS&rdquo;, &ldquo;cancel&rdquo;, or &ldquo;tuition&rdquo;.
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
                    <h3 className="text-xl sm:text-2xl font-bold">Billing questions?</h3>
                    <p className="text-slate-300 text-sm sm:text-base font-light max-w-lg">
                      Our customer billing support team is here to assist you with subscription invoices, auto-renewal preferences, or payment issues.
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
