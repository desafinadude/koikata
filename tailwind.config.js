/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        handdrawn: {
          "color-scheme": "light",
          primary:              "oklch(0.43 0.13 255)",   /* blue ballpoint pen #2d5da1 */
          "primary-content":    "oklch(0.99 0.005 90)",
          secondary:            "oklch(0.90 0.01 90)",    /* erased pencil / old paper #e5e0d8 */
          "secondary-content":  "oklch(0.22 0 0)",
          accent:               "oklch(0.63 0.23 25)",    /* red correction marker #ff4d4d */
          "accent-content":     "oklch(0.99 0.005 90)",
          neutral:              "oklch(0.22 0 0)",        /* pencil black #2d2d2d */
          "neutral-content":    "oklch(0.99 0.005 90)",
          "base-100":           "oklch(0.99 0.005 90)",   /* warm paper #fdfbf7 */
          "base-200":           "oklch(0.96 0.008 90)",
          "base-300":           "oklch(0.92 0.01 90)",
          "base-content":       "oklch(0.22 0 0)",        /* soft pencil black #2d2d2d */
          info:                 "oklch(0.65 0.13 230)",
          "info-content":       "oklch(0.99 0 0)",
          success:              "oklch(0.65 0.15 145)",
          "success-content":    "oklch(0.99 0 0)",
          warning:              "oklch(0.97 0.07 100)",   /* post-it yellow #fff9c4 */
          "warning-content":    "oklch(0.22 0 0)",
          error:                "oklch(0.63 0.23 25)",
          "error-content":      "oklch(0.99 0 0)",
          "--radius-selector":  "0rem",
          "--radius-field":     "0rem",
          "--radius-box":       "0rem",
        },
      },
      {
        vaporwave: {
          "color-scheme":      "dark",
          primary:             "oklch(0.65 0.32 328)",   /* hot magenta   #FF00FF */
          "primary-content":   "oklch(0.06 0.04 296)",
          secondary:           "oklch(0.90 0.18 196)",   /* electric cyan #00FFFF */
          "secondary-content": "oklch(0.06 0.04 296)",
          accent:              "oklch(0.75 0.20 62)",    /* sunset orange #FF9900 */
          "accent-content":    "oklch(0.06 0.04 296)",
          neutral:             "oklch(0.20 0.10 296)",   /* deep purple   #2D1B4E */
          "neutral-content":   "oklch(0.89 0 0)",
          "base-100":          "oklch(0.06 0.04 296)",   /* void          #090014 */
          "base-200":          "oklch(0.13 0.07 289)",   /* glass panel   #1a103c */
          "base-300":          "oklch(0.11 0.06 289)",
          "base-content":      "oklch(0.89 0 0)",        /* silver chrome #E0E0E0 */
          info:                "oklch(0.70 0.15 210)",
          "info-content":      "oklch(0.06 0.04 296)",
          success:             "oklch(0.75 0.20 150)",
          "success-content":   "oklch(0.06 0.04 296)",
          warning:             "oklch(0.75 0.20 62)",
          "warning-content":   "oklch(0.06 0.04 296)",
          error:               "oklch(0.65 0.32 328)",
          "error-content":     "oklch(0.06 0.04 296)",
          "--radius-selector": "0rem",
          "--radius-field":    "0rem",
          "--radius-box":      "0rem",
        },
      },
    ],
    darkTheme: 'vaporwave',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
