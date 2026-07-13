'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TechBackground from "../../components/TechBackground";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Sparkles, MessageSquare, Send } from 'lucide-react';

// ─── Animated Floating Orb ───────────────────────────────────────────────────
function FloatingOrb({ size, color, delay, x, y, duration }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[80px] pointer-events-none ${color}`}
      style={{ width: size, height: size, left: x, top: y }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// ─── Magnetic Card (hover follows cursor) ────────────────────────────────────
function MagneticCard({ children, className }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-60, 60], [6, -6]), { stiffness: 200, damping: 30 });
  const rotY = useSpring(useTransform(x, [-60, 60], [-6, 6]), { stiffness: 200, damping: 30 });

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Typing Headline ──────────────────────────────────────────────────────────
function TypewriterText({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? 45 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, words]);

  return (
    <span className="text-primary italic">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle rounded-sm"
      />
    </span>
  );
}

// ─── Floating Input Field ─────────────────────────────────────────────────────
function FloatingField({ label, children }) {
  return (
    <div className="group relative">
      <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5 group-focus-within:text-primary transition-colors duration-300">
        {label}
      </label>
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-orange-400 rounded-full"
        initial={{ scaleX: 0 }}
        whileFocusWithin={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

// ─── Contact Info Card ────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: Phone,
    label: 'Call Directly',
    value: '+91 91040 81291',
    sub: 'Mon–Sat, 9am – 7pm IST',
    color: 'from-orange-500 to-primary',
    bg: 'bg-orange-50 border-orange-100',
    href: 'tel:+919104081291',
  },
  {
    icon: Mail,
    label: 'Email Support',
    value: 'info@tuoora.com',
    sub: 'Avg. response in 12 minutes',
    color: 'from-violet-500 to-indigo-500',
    bg: 'bg-violet-50 border-violet-100',
    href: 'mailto:info@tuoora.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Ahmedabad, Gujarat',
    sub: 'Available for in-person demos',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 border-emerald-100',
    href: 'https://maps.google.com/?q=Ahmedabad,+Gujarat',
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '', phone: '', institute_name: '', email: '',
    designation: 'Contact Form Inquiry', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tuoora.com';
      const res = await fetch(`${apiBaseUrl}/api/book-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ full_name: '', phone: '', institute_name: '', email: '', designation: 'Contact Form Inquiry', message: '' });
        setTimeout(() => setSubmitStatus(null), 6000);
      } else setSubmitStatus('error');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-xl text-sm font-semibold text-navy placeholder:text-slate-300 outline-none focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/8 transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-primary/20 overflow-hidden relative">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <TechBackground />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[52vh] bg-navy overflow-hidden flex items-end pb-0">
        {/* Animated orb lights */}
        <FloatingOrb size={500} color="bg-primary/20" delay={0} x="60%" y="-10%" duration={8} />
        <FloatingOrb size={350} color="bg-violet-500/10" delay={2} x="-5%" y="20%" duration={10} />
        <FloatingOrb size={280} color="bg-orange-400/10" delay={4} x="40%" y="50%" duration={7} />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FDFDFD] to-transparent pointer-events-none z-10" />

        <div className="section-container relative z-20 pt-36 pb-20 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em]">Get in Touch</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-5"
            >
              Let's build something{' '}
              <TypewriterText words={['remarkable.', 'together.', 'extraordinary.', 'that scales.']} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white/50 text-base sm:text-lg font-medium leading-relaxed max-w-xl"
            >
              Talk to our institutional experts — get a live demo, migration walkthrough, or technical consultation. We respond in minutes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-container relative z-10 -mt-6 pb-12 px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT: Contact Info Cards ── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex gap-4 items-start overflow-hidden"
                >
                  {/* gradient left accent bar */}
                  <motion.div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} rounded-l-2xl`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ originY: 0 }}
                  />
                  {/* hover sweep */}
                  <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                  <div className={`relative z-10 h-11 w-11 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="relative z-10 min-w-0">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">{item.label}</span>
                    <p className="text-sm font-black text-navy truncate mb-0.5">{item.value}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{item.sub}</p>
                  </div>
                  <ArrowRight className="relative z-10 w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto self-center shrink-0" />
                </motion.a>
              );
            })}

            {/* WhatsApp Quick Action */}
            <motion.a
              href="https://wa.me/919104081291"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center gap-4 shadow-lg shadow-emerald-200/50 group"
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <div className="h-11 w-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-70">Instant Chat</p>
                <p className="text-sm font-black">Chat on WhatsApp</p>
                <p className="text-[10px] opacity-60 font-medium">Fastest way to reach us</p>
              </div>
              <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Live Support Status */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="p-4 rounded-2xl border border-slate-100 bg-white flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                    alt="Expert"
                    className="h-8 w-8 rounded-full border-2 border-white bg-slate-100"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] font-black text-navy uppercase tracking-wider">3 Experts Online</span>
                </div>
                <p className="text-[9px] text-slate-400 font-medium mt-0.5">Avg. response: 12 minutes</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <MagneticCard className="relative bg-white border border-slate-100 rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Success Overlay */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-10"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white mb-6 shadow-2xl shadow-emerald-200"
                    >
                      <CheckCircle className="w-12 h-12" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-black text-navy tracking-tighter mb-2"
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="text-slate-500 font-medium mb-8 max-w-xs"
                    >
                      Our experts will reach out within <span className="text-primary font-black">12 minutes</span>. Check your WhatsApp & email.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => setSubmitStatus(null)}
                      className="text-xs font-black text-primary uppercase tracking-widest hover:underline"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Header */}
              <div className="relative overflow-hidden px-8 pt-8 pb-7 border-b border-slate-100">
                {/* Decorative background gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-3">
                      <Send className="w-3 h-3 text-primary" />
                      <span className="text-[9px] font-black text-primary uppercase tracking-[0.25em]">Send a Message</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-navy tracking-tighter leading-tight">
                      Book a Live <span className="text-primary italic">Demo Session</span>
                    </h2>
                    <p className="text-sm text-slate-400 font-medium mt-1.5 max-w-md">
                      Fill in your details and we'll set up a personalised walkthrough of Tuoora ERP for your institute.
                    </p>
                  </div>
                  {/* Animated step indicator */}
                  <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-wider">Avg. Setup Time</span>
                    <span className="text-2xl font-black text-navy tracking-tighter">24<span className="text-primary text-sm ml-1">hrs</span></span>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-8 grid sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] group-focus-within:text-primary">Full Name *</label>
                  <input
                    type="text" name="full_name" required
                    value={formData.full_name} onChange={handleChange}
                    placeholder="Rahul Sharma"
                    onFocus={() => setFocusedField('full_name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Phone Number *</label>
                  <input
                    type="tel" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass}
                  />
                </div>

                {/* Institute Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Institute Name *</label>
                  <input
                    type="text" name="institute_name" required
                    value={formData.institute_name} onChange={handleChange}
                    placeholder="Tuoora Academy"
                    onFocus={() => setFocusedField('institute_name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Work Email *</label>
                  <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="rahul@institute.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Message (Optional)</label>
                  <textarea
                    name="message" rows={3}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your institute, student count, or specific features you need..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Footer row */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-5 pt-4 border-t border-slate-100">
                  {/* Trust badges */}
                  <div className="flex flex-wrap items-center gap-4">
                    {['Free 30-Day Trial', 'No Credit Card', 'Setup in 24hrs'].map((badge, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-[10px] font-bold text-slate-500">{badge}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative overflow-hidden group px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center gap-3 shrink-0 ${
                      isSubmitting
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : submitStatus === 'error'
                          ? 'bg-red-500 text-white shadow-red-200'
                          : 'bg-primary text-white shadow-primary/30'
                    }`}
                  >
                    {/* Shimmer */}
                    {!isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                        animate={{ translateX: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                      />
                    )}
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : submitStatus === 'error' ? 'Try Again' : 'Send Message'}
                    </span>
                    {!isSubmitting && (
                      <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </motion.button>
                </div>
              </form>
            </MagneticCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
