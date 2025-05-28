// app/lib/fonts.js
import localFont from "next/font/local";

export const copperplate = localFont({
    src: "./Fredoka-Medium.ttf", // <--- THIS IS THE KEY PATH!
    variable: "--font-logo", // This will be your CSS variable for Tailwind
    display: "swap", // Good for performance
    // weight: '400', // Example weight
    // style: 'normal', // Example style
});
