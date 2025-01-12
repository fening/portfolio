import { execSync } from 'child_process';

const dependencies = [
  // Radix UI components
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-label',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-tooltip',
  '@radix-ui/react-context-menu',
  // Carousel
  'embla-carousel-react',
  'embla-carousel',
  // Charts
  'recharts',
  // Utils
  'lucide-react',
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
  'react-day-picker',
  'date-fns',
  // Command
  'cmdk',
  // Drawer
  'vaul',
  // Forms
  'react-hook-form',
  // Input OTP
  'input-otp',
  // Resizable
  'react-resizable-panels',
  // Themes
  'next-themes',
  // Toast
  'sonner'
];

console.log('Checking and installing missing dependencies...');

try {
  execSync(`npm install ${dependencies.join(' ')}`, { stdio: 'inherit' });
  console.log('All dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error);
  process.exit(1);
}
