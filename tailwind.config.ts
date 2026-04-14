import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A1628",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0066FF",
          foreground: "#FFFFFF",
          hover: "#0052CC",
        },
        urgence: {
          DEFAULT: "#E63946",
          foreground: "#FFFFFF",
          hover: "#CC2936",
        },
        orange: {
          brand: "#FF6B35",
        },
        gray: {
          light: "#F4F6F9",
          medium: "#8B9BB4",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, var(--background)))",
          foreground: "hsl(var(--popover-foreground, var(--foreground)))",
        },
        card: {
          DEFAULT: "hsl(var(--card, var(--background)))",
          foreground: "hsl(var(--card-foreground, var(--foreground)))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #0A1628 0%, #0A1628CC 50%, #0066FF22 100%)",
        "gradient-urgence":
          "linear-gradient(135deg, #E63946 0%, #CC2936 100%)",
        "gradient-blue":
          "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)",
      },
      boxShadow: {
        urgence: "0 4px 24px rgba(230, 57, 70, 0.4)",
        accent: "0 4px 24px rgba(0, 102, 255, 0.3)",
        card: "0 2px 16px rgba(10, 22, 40, 0.08)",
        "card-hover": "0 8px 32px rgba(10, 22, 40, 0.16)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
