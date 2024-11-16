import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componants/Header/Header";



export const metadata = {
  title: "Percentage", 
  icons: {
  icon: "/favicon.ico", 
  },
};

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header/>
       
        {children}
        
        
        </body>
    </html>
  );
}
