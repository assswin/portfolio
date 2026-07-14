import { Mail, Phone, Link } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center mt-20 relative">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 text-white/60 hover:text-brand-pop transition-colors">
          <Mail size={16} />
          <span className="text-sm font-medium">{portfolioData.contact.email}</span>
        </a>
        <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-2 text-white/60 hover:text-brand-pop transition-colors">
          <Phone size={16} />
          <span className="text-sm font-medium">{portfolioData.contact.phone}</span>
        </a>
        <a href={portfolioData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-brand-pop transition-colors">
          <Link size={16} />
          <span className="text-sm font-medium">{portfolioData.contact.linkedin}</span>
        </a>
      </div>
      <p className="text-white/40 font-medium">Thank you for visiting my portfolio!</p>
      <p className="text-xs text-white/20 mt-2">© {new Date().getFullYear()} Shree Aswin. All rights reserved.</p>
    </footer>
  );
}
