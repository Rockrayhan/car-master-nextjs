import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";


export const metadata = {
  title: "Mr Fixer Pro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
         <head>
        <link rel="icon" href="assets/icons/fixing.jpg" type="image/jpg" />
      </head>
      <body>
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider> 
      </body>
    </html>
  );
}
