import { Poppins, Work_Sans } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({
    subsets: ["latin"],
    weight: [
        "100", "200", "300", "400", "500", "600", "700", "800", "900"
    ],
    variable: "--font-poppins",
})

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: [
        "100", "200", "300", "400", "500", "600", "700", "800", "900"
    ],
    variable: "--font-work-sans",
})

// Next step : Go to global.css and insert both variable in @theme inline 

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${workSans.variable}`}>
                {children}
            </body>
        </html>
    );
}
