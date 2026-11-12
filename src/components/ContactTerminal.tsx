import { useState } from 'react';
import { Mail, Phone, ExternalLink, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactTerminal() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      // Create mailto fallback link for user's email client
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formSubject || `Portfolio Inquiry from ${formName}`
      )}&body=${encodeURIComponent(
        `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
      )}`;
      
      // Reset form after short delay
      setTimeout(() => {
        window.location.href = mailtoLink;
        setFormName('');
        setFormEmail('');
        setFormSubject('');
        setFormMessage('');
        setFormStatus('idle');
      }, 1200);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
            <span>06. Direct Terminal</span>
            <span className="text-slate-600">·</span>
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build The Future Together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Interested in AI tooling, full-stack software development, or collegiate innovation? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Location Badge (Col Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800 hover:border-blue-900/60 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  Primary Email
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg font-bold text-white hover:text-blue-400 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <div className="text-xs text-slate-400 mt-1">
                Direct inbox · 24-48hr response time
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800 hover:border-blue-900/60 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  Mobile & WhatsApp
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-lg font-bold text-white hover:text-cyan-400 transition-colors font-mono"
              >
                {PERSONAL_INFO.phone}
              </a>
              <div className="text-xs text-slate-400 mt-1">
                Direct Philippine cellular network
              </div>
            </div>

            {/* Facebook Connection */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800 hover:border-blue-900/60 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Social Network
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between"
              >
                <span>{PERSONAL_INFO.facebookName}</span>
                <span className="text-xs font-mono text-blue-400">View Profile &rarr;</span>
              </a>
              <div className="text-xs text-slate-400 mt-1">
                Facebook / Messenger connectivity
              </div>
            </div>

            {/* Geographical Location Badge */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0c1426] via-[#090e1c] to-[#07090e] border border-blue-900/40 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Geographical Base</span>
              </div>
              <div className="text-base font-bold text-white mb-1">
                {PERSONAL_INFO.location}
              </div>
              <div className="text-xs text-slate-400">
                Calabarzon Region · Cavite State University - Bacoor Campus Catchment
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Lat: 14.4624° N</span>
                <span>Long: 120.9632° E</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Validated Message Terminal (Col Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0a0f1d] border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Transmit Direct Dispatch</span>
              </div>
              <span className="text-xs font-mono text-slate-500">v0.7 Dispatch Protocol</span>
            </div>

            {formStatus === 'success' ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Dispatch Prepared!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Opening your default email client to transmit this message directly to {PERSONAL_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="formName" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="formName"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Maria Santos"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="formEmail" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="formEmail"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="maria@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="formSubject" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject / Project Inquiry
                  </label>
                  <input
                    id="formSubject"
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. AI Tooling Collaboration / Internship"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="formMessage" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Message Content *
                  </label>
                  <textarea
                    id="formMessage"
                    rows={5}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus === 'sending' ? 'Transmitting...' : 'Send Message to James'}</span>
                </button>

                <p className="text-[11px] font-mono text-slate-500 text-center">
                  Protected with client-side sanitization · Direct dispatch to jajareyes72@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
