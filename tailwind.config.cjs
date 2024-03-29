/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',

        'primary-50': '#f5f3ff',
        'primary-100': '#ede9fe',
        'primary-200': '#ddd6fe',
        'primary-300': '#c4b5fd',
        'primary-400': '#a78bfa',
        'primary-500': '#8b5cf6',
        'primary-600': '#7c3aed',
        'primary-700': '#6d28d9',
        'primary-800': '#5b21b6',
        'primary-900': '#4c1d95',

        'informative-50': '#eff6ff',
        'informative-100': '#dbeafe',
        'informative-200': '#bfdbfe',
        'informative-300': '#93c5fd',
        'informative-400': '#60a5fa',
        'informative-500': '#3b82f6',
        'informative-600': '#2563eb',
        'informative-700': '#1d4ed8',
        'informative-800': '#1e40af',
        'informative-900': '#1e3a8a',

        'success-50': '#f0fdf4',
        'success-100': '#dcfce7',
        'success-200': '#bbf7d0',
        'success-300': '#86efac',
        'success-400': '#4ade80',
        'success-500': '#22c55e',
        'success-600': '#16a34a',
        'success-700': '#15803d',
        'success-800': '#166534',
        'success-900': '#14532d',

        'warning-50': '#fffbeb',
        'warning-100': '#fef3c7',
        'warning-200': '#fde68a',
        'warning-300': '#fcd34d',
        'warning-400': '#fbbf24',
        'warning-500': '#f59e0b',
        'warning-600': '#d97706',
        'warning-700': '#b45309',
        'warning-800': '#92400e',
        'warning-900': '#78350f',

        'danger-50': '#fef2f2',
        'danger-100': '#fee2e2',
        'danger-200': '#fecaca',
        'danger-300': '#fca5a5',
        'danger-400': '#f87171',
        'danger-500': '#ef4444',
        'danger-600': '#dc2626',
        'danger-700': '#b91c1c',
        'danger-800': '#991b1b',
        'danger-900': '#7f1d1d',

        'neutral-50': '#f8fafc',
        'neutral-100': '#f1f5f9',
        'neutral-200': '#e2e8f0',
        'neutral-300': '#cbd5e1',
        'neutral-400': '#94a3b8',
        'neutral-500': '#64748b',
        'neutral-600': '#475569',
        'neutral-700': '#334155',
        'neutral-800': '#1e293b',
        'neutral-900': '#0f172a',
      },
    },
  },
  plugins: [],
};

// hatırlatma geçişler lg: ye göre design edildi
