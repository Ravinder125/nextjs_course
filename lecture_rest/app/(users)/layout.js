import Navigation from "@/components/Navigation";
import "@/app/globals.css";
import { Poppins, Urbanist } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
})

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
