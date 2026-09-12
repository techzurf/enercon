import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    icon: Instagram
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: '#',
    icon: Facebook
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    icon: Linkedin
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: '#',
    icon: Youtube
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/971502084902',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  }
];

export function SocialWidget() {
  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-[90] flex flex-col pointer-events-none sm:right-4 lg:right-6">
      <div className="social-widget-card pointer-events-auto scale-[0.65] sm:scale-80 lg:scale-100 origin-right">
        <ul>
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.id} className="iso-pro group">
                <span></span>
                <span></span>
                <span></span>
                <a href={social.href} className="svg" target="_blank" rel="noreferrer" aria-label={social.label}>
                  <Icon />
                </a>
                <div className="text">{social.label}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
