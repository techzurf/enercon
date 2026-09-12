import { Facebook, Instagram } from 'lucide-react';

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
  }
];

export function SocialWidget() {
  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col pointer-events-none sm:right-4 lg:right-6">
      <div className="social-widget-card pointer-events-auto scale-[0.7] sm:scale-[0.85] lg:scale-100 origin-right">
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
