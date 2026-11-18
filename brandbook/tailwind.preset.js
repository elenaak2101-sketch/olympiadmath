/**
 * MathFinder — Tailwind preset v1.0 (сгенерирован из брендбука / design-system/tokens.css)
 * Использование (Tailwind v3):
 *   // tailwind.config.js
 *   const brandbook = require('./brandbook/tailwind.preset.js');
 *   module.exports = { presets: [brandbook], content: ['./src/**/*.{ts,tsx,html}'] };
 * Tailwind v4: вместо конфига — @import 'tokens.css' и theme inline.
 */
const withVar = (name) => `rgb(var(${name}) / <alpha-value>)`;

module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        violet: { 50:'#f4f1fe',100:'#e9e3fd',200:'#d4c9fa',300:'#b7a4f4',400:'#9a83ec',500:'#7c64dd',600:'#6a4fd0',700:'#573fb0',800:'#46338c',900:'#382a6e' },
        orange: { 50:'#fff6ec',100:'#ffe9d1',200:'#ffd2a3',300:'#ffaf60',400:'#fb9430',500:'#e07d01',600:'#b96500',700:'#8f4e00' },
        blue:   { 50:'#eaf3fb',100:'#d3e5f6',200:'#a8caec',300:'#6ea9df',400:'#3587cf',500:'#065bab',600:'#004e9f',700:'#003d7d',800:'#002d5c',900:'#001f40' },
        gray:   { 0:'#ffffff',25:'#fafafa',50:'#f5f5f7',100:'#eeeef1',200:'#e2e2e8',300:'#c9c9c9',400:'#a3a3ad',500:'#7a7a85',600:'#55555f',700:'#3a3a42',800:'#232329',900:'#141418' },
        success:{ DEFAULT:'#17976a', bg:'#caf4e3', dark:'#0d6b4a' },
        warning:{ DEFAULT:'#c98a00', bg:'#ffefcd' },
        danger: { DEFAULT:'#d92d20', bg:'#ffcdcd', dark:'#ad0000' },
        // семантические алиасы → CSS-переменные из tokens.css (поддерживают тёмную тему и opacity)
        brand:        { DEFAULT:'var(--brand)', hover:'var(--brand-hover)', soft:'var(--brand-soft)' },
        accent:       'var(--accent)',
        link:         'var(--link)',
        'bg-page':    'var(--bg-page)',
        'bg-surface': 'var(--bg-surface)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border-default': 'var(--border-default)',
        'border-strong':  'var(--border-strong)',
      },
      fontFamily: {
        sans: ['Inter','TildaSans','Gilroy','-apple-system','Segoe UI','Arial','sans-serif'],
        mono: ['JetBrains Mono','SF Mono','Consolas','monospace'],
      },
      fontSize: {
        xs:['0.75rem',{lineHeight:'1.4'}], sm:['0.875rem',{lineHeight:'1.5'}],
        base:['1rem',{lineHeight:'1.55'}], lg:['1.125rem',{lineHeight:'1.5'}],
        xl:['1.25rem',{lineHeight:'1.3',letterSpacing:'-0.02em'}],
        '2xl':['1.5rem',{lineHeight:'1.25',letterSpacing:'-0.02em'}],
        '3xl':['1.875rem',{lineHeight:'1.2',letterSpacing:'-0.02em'}],
        '4xl':['2.25rem',{lineHeight:'1.15',letterSpacing:'-0.02em'}],
        '5xl':['clamp(2.25rem,5vw,3.5rem)',{lineHeight:'1.1',letterSpacing:'-0.02em'}],
      },
      spacing: { 1:'4px',2:'8px',3:'12px',4:'16px',5:'20px',6:'24px',8:'32px',10:'40px',12:'48px',16:'64px',20:'80px',24:'96px' },
      borderRadius: { sm:'6px', md:'10px', lg:'16px', pill:'999px' },
      boxShadow: {
        xs:'0 1px 2px rgba(20,20,24,.06)',
        sm:'0 1px 3px rgba(20,20,24,.08), 0 1px 2px rgba(20,20,24,.05)',
        md:'0 4px 12px rgba(20,20,24,.09)',
        lg:'0 12px 32px rgba(20,20,24,.13)',
        focus:'0 0 0 3px rgba(124,100,221,.3)',
      },
      screens: { sm:'480px', md:'768px', lg:'1024px', xl:'1280px' },
      transitionDuration: { fast:'120ms', base:'200ms', slow:'320ms' },
      transitionTimingFunction: { brand:'cubic-bezier(.2,.7,.3,1)' },
      maxWidth: { container:'1200px' },
      minHeight: { touch:'44px' },
    },
  },
  plugins: [],
};
