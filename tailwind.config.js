tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
            'phone':'300px',
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
    },
                    extend: {
                        colors: {
                        primary: "#4CAF50",      // Green
                        secondary: "#2196F3",    // Blue
                        accent: "#FF9800",       // Orange
                        cyan: "#00BCD4",         // Highlight / Icons

                        "background-light": "#F5F5F5",
                        "background-dark": "#1f2933",

                        "text-main": "#333333",
                        "text-sub": "#6b7280",
                        },
                        fontFamily: {
                            display: ["Tajawal", "sans-serif"]
                        }
                    }
    
  }
}