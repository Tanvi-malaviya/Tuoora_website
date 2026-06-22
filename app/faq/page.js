'use client';

import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { 
   Sparkles, 
   HelpCircle, 
   CreditCard, 
   GraduationCap, 
   ShieldCheck, 
   ChevronDown, 
   Search, 
   X, 
   ArrowRight, 
   MessageSquare, 
   Phone, 
   Mail 
} from 'lucide-react';

export default function FAQ() {
   const [activeIndex, setActiveIndex] = useState(null);
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");

   const categories = [
      { name: "All", iconComponent: Sparkles },
      { name: "General", iconComponent: HelpCircle },
      { name: "Payments & Fees", iconComponent: CreditCard },
      { name: "Academic & Exams", iconComponent: GraduationCap },
      { name: "Communication & Alerts", iconComponent: MessageSquare },
      // { name: "Administration & Security", iconComponent: ShieldCheck }
   ];

   const faqs = [
      {
         category: "General",
         questions: [
            { 
               q: "What is Tuoora ?", 
               a: "Tuoora is a comprehensive, multi-tenant Education ERP and Tuition SaaS platform designed for coaching centers, schools, and educational institutes to streamline their academic operations, communication, and billing." 
            },
            { 
               q: "Do I need technical training to manage my institute?", 
               a: "No. The platform features an intuitive, zero-training web panel for administrative staff and teachers, alongside dedicated mobile apps for students and parents." 
            },
            { 
               q: "How long does the setup and migration take?", 
               a: "You can go live in under 24 hours. Our technical migration team will assist in importing your existing student directories, batch schedules, and fee structures." 
            },
            { 
               q: "Is there a mobile app available?", 
               a: "Yes, we offer dedicated Student mobile apps for tracking homework, viewing attendance reports, receiving notifications, and paying fees." 
            }
         ]
      },
      {
         category: "Payments & Fees",
         questions: [
            { 
               q: "How can parents pay school or tuition fees?", 
               a: "Parents can pay fees online through the mobile app using UPI, Credit/Debit cards, and Net Banking." 
            },
            { 
               q: "Can we register offline payments like cash or bank transfers?", 
               a: "Yes. Admins can manually register cash, cheque, or direct bank transfer payments in the billing hub to keep all accounts consolidated." 
            },
            { 
               q: "Does the system generate invoices and receipts?", 
               a: "Absolutely. The system automatically creates downloadable PDF receipts for every successful transaction using our high-fidelity document generation engine." 
            }
         ]
      },
      {
         category: "Academic & Exams",
         questions: [
            { 
               q: "How does Batch and Attendance management work?", 
               a: "Admins can organize students into specific batches track daily attendance and automatically trigger notification alerts to parents." 
            },
            { 
               q: "What is the Homework Module?", 
               a: "Institutes can publish homework tasks, attach resource documents, review online submissions from students, grade their work, and share progress updates instantly." 
            },
            { 
               q: "What are \"Daily Teaching Logs\"?", 
               a: "Teaching logs allow instructors to record the topics and curriculum covered in each session, which are immediately accessible to parents and students for review." 
            },
            { 
               q: "Can the platform generate academic reports and cards?", 
               a: "Yes. Tuoora dynamically compiles exam results, homework grades, and attendance rates to produce detailed performance cards." 
            }
         ]
      },
      {
         category: "Communication & Alerts",
         questions: [
            { 
               q: "Does the platform support real-time chat?", 
               a: "Yes. The system has built-in 1-to-1 messaging and channel broadcasts powered by secure WebSockets for real-time interaction between parents, students, and coordinators." 
            },
            { 
               q: "How are parents notified of emergency notices or holidays?", 
               a: "You can broadcast announcements globally or per batch using FCM Push Notifications and WhatsApp alerts." 
            }
         ]
      },
      // {
      //    category: "Administration & Security",
      //    questions: [
      //       { 
      //          q: "How are staff members, schedules, and payrolls managed?", 
      //          a: "The platform includes an HR suite to track staff attendance, log daily check-ins/outs, manage roles with custom permissions, and generate monthly salary sheets." 
      //       },
      //       { 
      //          q: "What is the Sales Pipeline / CRM module?", 
      //          a: "It is a dedicated leads tracker where admins can register prospective students, set lead priorities (Cold, Warm, Hot), record follow-up logs, and track conversions." 
      //       },
      //       { 
      //          q: "Is our institutional and student data secure?", 
      //          a: "Yes. We employ a secure multi-tenant architecture to ensure absolute data isolation. All communications and databases are guarded using bank-grade AES-256 encryption." 
      //       },
      //       { 
      //          q: "Are there automatic database backups?", 
      //          a: "Yes. Automated daily backups are captured and stored in redundant, secure cloud servers to ensure zero data loss." 
      //       }
      //    ]
      // }
   ];

   const getCategoryCount = (categoryName) => {
      if (categoryName === "All") {
         return faqs.reduce((acc, curr) => acc + curr.questions.length, 0);
      }
      const cat = faqs.find(c => c.category === categoryName);
      return cat ? cat.questions.length : 0;
   };

   const filteredFaqs = faqs.map(group => ({
      ...group,
      questions: group.questions.filter(faq => {
         const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
         const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
         return matchesSearch && matchesCategory;
      })
   })).filter(group => group.questions.length > 0);

   const totalResults = filteredFaqs.reduce((acc, curr) => acc + curr.questions.length, 0);

   return (
      <div className="min-h-screen bg-white overflow-x-hidden relative">
         <Navbar />

         {/* Premium Glowing Mesh Backgrounds */}
         <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse duration-[8s]" />
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-[120px]" />
         </div>

         <main className="pt-32 pb-8">
            {/* Search Hero */}
            <section className="section-container text-center px-4">
               <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[10px] font-black text-primary uppercase tracking-[0.4em] block mb-2"
               >
                  Help Center
               </motion.span>
               
               <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter mb-6"
               >
                  Common <span className="text-primary italic">Questions.</span>
               </motion.h1>

               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-xl mx-auto relative group"
               >
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative flex items-center bg-gray-50/80 backdrop-blur-sm border border-slate-100 rounded-2xl px-5 py-4 focus-within:bg-white focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/15 transition-all duration-300 shadow-sm hover:shadow-md">
                     <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                     <input
                        type="text"
                        placeholder="Search for questions (e.g. WhatsApp, Payments, Backup, CRM)"
                        className="w-full bg-transparent text-xs font-bold text-slate-800 placeholder-slate-300 focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                     {searchQuery && (
                        <button
                           onClick={() => setSearchQuery("")}
                           className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors mr-2"
                        >
                           <X className="w-3.5 h-3.5" />
                        </button>
                     )}
                     <span className="text-[9px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
                        {totalResults} {totalResults === 1 ? 'result' : 'results'}
                     </span>
                  </div>
               </motion.div>
            </section>

            {/* Split Layout (Category Navigation & FAQs) */}
            <section className="section-container px-4 py-6 mb-12">
               <div className="flex flex-col lg:flex-row gap-8 items-start">
                  
                  {/* Sidebar Column */}
                  <div className="w-full lg:w-80 shrink-0">
                     <div className="lg:sticky lg:top-28 space-y-6">
                        <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-100/70 p-5 rounded-3xl space-y-2.5 shadow-sm">
                           <span className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] px-3 block mb-1">Categories</span>
                           {categories.map((cat) => {
                              const isActive = selectedCategory === cat.name;
                              const count = getCategoryCount(cat.name);
                              const Icon = cat.iconComponent;
                              return (
                                 <button
                                    key={cat.name}
                                    onClick={() => {
                                       setSelectedCategory(cat.name);
                                       setActiveIndex(null); // Reset open accordion index when category switches
                                    }}
                                    className={`relative w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                                       isActive 
                                          ? 'text-white' 
                                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                                    }`}
                                 >
                                    {isActive && (
                                       <motion.div
                                          layoutId="activeCategoryBg"
                                          className="absolute inset-0 bg-navy z-0"
                                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                       />
                                    )}
                                    <span className="relative z-10 flex items-center gap-3">
                                       <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                                       {cat.name}
                                    </span>
                                    <span className={`relative z-10 text-[9px] font-bold px-2 py-0.5 rounded-full ${
                                       isActive ? 'bg-primary text-white' : 'bg-slate-200/70 text-slate-500'
                                    }`}>
                                       {count}
                                    </span>
                                 </button>
                              );
                           })}
                        </div>
                        
                        {/* Live Support Indicator Card */}
                        <div className="bg-gradient-to-br from-navy to-slate-900 text-white p-6 rounded-3xl relative overflow-hidden shadow-lg border border-white/5">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                           <div className="flex items-center gap-2 mb-3">
                              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-400">Live Support Status</span>
                           </div>
                           <h4 className="text-sm font-black uppercase tracking-wider mb-2">Our Experts are Online</h4>
                           <p className="text-xs text-white/50 leading-relaxed font-light mb-4">
                              Need instant answers or help setting up your institute database?
                           </p>
                           <a href="https://wa.me/919104081291" target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-orange-400 transition-colors group">
                              Ask on WhatsApp <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* FAQ List (Right Column) */}
                  <div className="flex-1 w-full">
                     <AnimatePresence mode="wait">
                        {filteredFaqs.length > 0 ? (
                           <motion.div
                              key={selectedCategory + searchQuery}
                              initial="hidden"
                              animate="show"
                              variants={{
                                 hidden: { opacity: 0 },
                                 show: {
                                    opacity: 1,
                                    transition: {
                                       staggerChildren: 0.05
                                    }
                                 }
                              }}
                              className="space-y-8"
                           >
                              {filteredFaqs.map((group, groupIdx) => (
                                 <div key={group.category} className="space-y-4">
                                    {selectedCategory === "All" && (
                                       <div className="flex items-center gap-4 py-2">
                                          <h3 className="text-[11px] font-black text-navy uppercase tracking-[0.3em] whitespace-nowrap">{group.category}</h3>
                                          <div className="h-[1px] w-full bg-slate-100" />
                                       </div>
                                    )}
                                    
                                    <div className="space-y-3.5">
                                       {group.questions.map((faq, idx) => {
                                          const itemIndex = `${group.category}-${idx}`;
                                          const isOpen = activeIndex === itemIndex;
                                          return (
                                             <FAQAccordionItem
                                                key={idx}
                                                q={faq.q}
                                                a={faq.a}
                                                isOpen={isOpen}
                                                onToggle={() => setActiveIndex(isOpen ? null : itemIndex)}
                                             />
                                          );
                                       })}
                                    </div>
                                 </div>
                              ))}
                           </motion.div>
                        ) : (
                           <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-center py-20 bg-slate-50/30 rounded-3xl border border-dashed border-slate-200"
                           >
                              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                              <p className="text-sm font-bold text-slate-400">No questions found matching "{searchQuery}"</p>
                              <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="mt-3 text-[10px] font-black uppercase text-primary hover:underline">
                                 Reset Filters
                              </button>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

               </div>
            </section>

            {/* Support CTA */}
            <section className="section-container px-4">
               <div className="relative group overflow-hidden rounded-[2.5rem] bg-navy border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/10">
                  {/* Dynamic Mesh Background */}
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                  <div className="absolute -top-32 -right-32 h-80 w-80 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                  <div className="absolute -bottom-32 -left-32 h-80 w-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-12 items-center gap-8 p-8 lg:p-16">
                     {/* Left Content */}
                     <div className="lg:col-span-7 text-left">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="flex -space-x-2">
                              {[1, 2, 3].map(i => (
                                 <div key={i} className="h-8 w-8 rounded-full border-2 border-navy bg-gray-800 flex items-center justify-center overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="Support" className="h-full w-full object-cover" />
                                 </div>
                              ))}
                           </div>
                           <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></div>
                              <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Live Support</span>
                           </div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tighter leading-none">
                           Can't find what <br /> 
                           <span className="text-primary italic">you need?</span>
                        </h2>
                        <p className="text-xs text-white/40 max-w-md font-medium leading-relaxed">
                           Our institutional experts are standing by to help you with migration, 
                           setup, or any specific feature requests. Get a response in minutes.
                        </p>
                     </div>

                     {/* Right Actions */}
                     <div className="lg:col-span-5 flex flex-col gap-3">
                        <a href="https://wa.me/919104081291" target="_blank" className="group/btn relative w-full overflow-hidden px-8 py-5 bg-primary text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center">
                           <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
                           <div className="flex items-center justify-center gap-3">
                              <MessageSquare className="w-4.5 h-4.5" />
                              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Chat with Experts</span>
                           </div>
                        </a>
                        
                        <div className="grid grid-cols-2 gap-3">
                           <a href="tel:+919104081291" className="flex flex-col items-center gap-2 px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all group/call">
                              <Phone className="w-4 h-4 text-primary group-hover/call:scale-110 transition-transform" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-white/60 group-hover/call:text-white transition-colors">Call Now</span>
                           </a>
                           <a href="mailto:info@tuoora.com" className="flex flex-col items-center gap-2 px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all group/mail">
                              <Mail className="w-4 h-4 text-primary group-hover/mail:scale-110 transition-transform" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-white/60 group-hover/mail:text-white transition-colors">Email Us</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
}

function FAQAccordionItem({ q, a, isOpen, onToggle }) {
   return (
      <motion.div
         variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
         }}
         transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
         className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
            isOpen
               ? 'border-primary bg-white shadow-lg shadow-primary/5'
               : 'border-slate-100 bg-white hover:border-slate-300 shadow-sm'
         }`}
      >
         <button
            onClick={onToggle}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
         >
            <span className={`text-xs md:text-sm font-bold tracking-tight transition-colors duration-300 ${
               isOpen ? 'text-navy' : 'text-slate-700'
            }`}>
               {q}
            </span>
            <div className={`p-1.5 rounded-full transition-all duration-300 shrink-0 ml-4 ${
               isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400'
            }`}>
               <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
         </button>
         
         <motion.div
            initial={false}
            animate={{
               height: isOpen ? "auto" : 0,
               opacity: isOpen ? 1 : 0
            }}
            transition={{
               height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
               opacity: { duration: 0.2, delay: isOpen ? 0.05 : 0 }
            }}
            className="overflow-hidden"
         >
            <div className="px-6 pb-6 pt-1 border-t border-slate-50/50">
               <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {a}
               </p>
            </div>
         </motion.div>
      </motion.div>
   );
}
