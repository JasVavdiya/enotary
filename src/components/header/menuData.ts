export type MenuItemProps = {
  title: string;
  items: {
    section: string;
    links: {
      label: string;
      href: string;
      description?: string;
    }[];
  }[];
};

// Add a new type for the register menu
export type RegisterMenuItemProps = {
  title: string;
  containers: {
    title: string;
    description: string;
    icon: string;
    href: string;
  }[];
};

export const menuItems: Record<string, MenuItemProps | RegisterMenuItemProps> = {
  'explore': {
    title: 'Why e-Notarial',
    items: [
      {
        section: 'For Notary',
        links: [
          { 
            label: 'eNotarial Register', 
            href: '/use-cases/sales',

          },
          { 
            label: 'eNotarization Process', 
            href: '/use-cases/legal',
            
          },
          { 
            label: 'Annual report', 
            href: '/use-cases/procurement',
 
          },
          { label: 'Notary Seal and Signature', href: '/use-cases/financial-services' },
          { label: 'Legal Compliances', href: '/use-cases/healthcare' },
          { label: 'Training', href: '/use-cases/real-estate' },
        ],
      },
      {
        section: 'For Public',
        links: [
          { label: 'Authenticity', href: '/industries/financial-services' },
          { label: 'Signature', href: '/industries/healthcare' },
          { label: 'eNotarization Request', href: '/industries/real-estate' },
          { label: 'eNotarization process', href: '/industries/government' },
          { label: 'Tutorials', href: '/industries/education' },
        ],
      },
      {
        section: 'For Associates',
        links: [
          { 
            label: 'Registration Process', 
            href: '/explore/iam',
            description: 'Create, commit to, and manage agreements'
          },
          { 
            label: 'Inquiry', 
            href: '/explore/legality-guide',
            description: 'An overview of e-signature laws around the world'
          },
          { 
            label: 'Working methodology', 
            href: '/explore/trust-security',
            description: 'A relationship you can trust'
          },
          { label: 'Tutorials', href: '/explore/notarial-register' },
        ],
      },
      {
        section: 'For Verification',
        links: [
          { 
            label: 'eNotarization Certificate', 
            href: '/explore/iam',
            description: 'Create, commit to, and manage agreements'
          },
          { 
            label: 'Observation Certificate', 
            href: '/explore/legality-guide',
            description: 'An overview of e-signature laws around the world'
          },
          { 
            label: 'Become a verifier', 
            href: '/explore/trust-security',
            description: 'A relationship you can trust'
          },
          { label: 'Check UDIN', href: '/explore/notarial-register' },
          { label: 'Verification Policy', href: '/explore/notarial-register' },
        ],
      },
    ],
  },
  'register': {
    title: 'Register',
    containers: [
      {
        title: 'Become e-notary provider',
        description: 'Join our network of certified e-notary providers and expand your professional services online.',
        icon: 'FaUserTie',
        href: '/become-provider'
      },
      {
        title: 'Need a notary?',
        description: 'Find and connect with certified e-notaries for your document notarization needs quickly and securely.',
        icon: 'FaSearch',
        href: '/need-enotary'
      }
    ]
  },
  'help': {
    title: 'Help',
    items: [
      {
        section: 'Support',
        links: [
          { label: 'eNotary Request', href: '/enotary-request' },
          { label: 'Grievance', href: '/grievance' },
          { label: 'Trust Center', href: '/trust-center' },
          { label: 'Knowledge Center', href: '/knowledge-center' },
        ],
      },
    ],
  },
  'auth': {
    title: 'Authentication',
    items: [
      {
        section: 'Login Options',
        links: [
          { label: 'User Login', href: '/login' },
          { label: 'Admin Login', href: '/admin-login' },
          { label: 'Notary Login', href: '/notary-login' },
        ],
      },
      {
        section: 'Registration',
        links: [
          { label: 'New User Registration', href: '/register' },
          { label: 'Become a Notary', href: '/become-notary' },
          { label: 'Business Registration', href: '/business-register' },
        ],
      },
      {
        section: 'Help',
        links: [
          { label: 'Forgot Password', href: '/forgot-password' },
          { label: 'Account Recovery', href: '/account-recovery' },
          { label: 'Contact Support', href: '/contact-support' },
        ],
      },
    ],
  },
}; 