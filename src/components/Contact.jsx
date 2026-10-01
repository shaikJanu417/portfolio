import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, Sparkles, Clock, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B57', '#FF8A65', '#FFB199']
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B1D2A]/60">
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FF6B57]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Let's Build Something Extraordinary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199]">
              Together
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            Open for senior .NET full-stack positions, high-impact web engineering contracts, and technical consultations.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              
              <h3 className="font-heading font-bold text-xl text-[#F5F7FA]">
                Direct Communication
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#071521] border border-white/5 space-y-2 hover:border-[#FF6B57]/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B57]/15 flex items-center justify-center text-[#FF6B57]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#6B7280] font-mono uppercase">Email Address</span>
                      <a href={`mailto:${personalDetails.email}`} className="block text-sm font-semibold text-[#F5F7FA] hover:text-[#FF6B57] transition-colors">
                        {personalDetails.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0E1621] text-[#A9B3C1] hover:text-[#FF6B57] text-xs"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#071521] border border-white/5 space-y-2 hover:border-[#FF6B57]/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF8A65]/15 flex items-center justify-center text-[#FF8A65]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#6B7280] font-mono uppercase">Phone / WhatsApp</span>
                      <a href={`tel:${personalDetails.phone}`} className="block text-sm font-semibold text-[#F5F7FA] hover:text-[#FF6B57] transition-colors">
                        {personalDetails.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-[#0E1621] text-[#A9B3C1] hover:text-[#FF6B57] text-xs"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#071521] border border-white/5 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFB199]/15 flex items-center justify-center text-[#FFB199]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6B7280] font-mono uppercase">Current Base</span>
                    <span className="block text-sm font-semibold text-[#F5F7FA]">
                      {personalDetails.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Availability pill */}
              <div className="p-4 rounded-2xl bg-[#071521]/80 border border-[#FF6B57]/20 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FF6B57]" />
                <span className="text-xs text-[#A9B3C1]">
                  Response time: <strong className="text-[#F5F7FA]">Within 4-8 Hours</strong>
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl glass-panel border border-white/10 space-y-5 shadow-2xl relative"
            >
              <h3 className="font-heading font-bold text-2xl text-[#F5F7FA]">
                Send a Direct Message
              </h3>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-3">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been dispatched successfully. I will get back to you shortly.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#A9B3C1]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071521] border border-white/10 text-xs text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#FF6B57] focus:ring-1 focus:ring-[#FF6B57]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#A9B3C1]">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071521] border border-white/10 text-xs text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#FF6B57] focus:ring-1 focus:ring-[#FF6B57]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A9B3C1]">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Full Stack Opportunity / Technical Project Query"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#071521] border border-white/10 text-xs text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#FF6B57] focus:ring-1 focus:ring-[#FF6B57]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A9B3C1]">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello Shaik Janu, I would like to discuss a project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#071521] border border-white/10 text-xs text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#FF6B57] focus:ring-1 focus:ring-[#FF6B57]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] hover:opacity-95 transition-all shadow-lg shadow-[#FF6B57]/30 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Now</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
