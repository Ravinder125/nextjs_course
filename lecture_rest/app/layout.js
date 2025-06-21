import "./globals.css"
import { Poppins, Work_Sans } from 'next/font/google'


// Meta data in Nextjs
// This code exports a metadata object, which is commonly used in modern web frameworks like Next.js to define SEO and social sharing information for a website. The metadata object contains several key properties:

// Overall, this metadata configuration helps ensure that the website is presented attractively and informatively in search results and when shared on social media platforms.
export const metadata = {
    title: {
        default: "Thapa Technical | Learn Web Development",
        template: "%s | Thapa Technical",
    },
    // title: This section sets the default page title and provides a template for dynamic titles. The template allows individual pages to specify their own titles, which will be formatted as "Page Title | Thapa Technical".
    
    description:
    "Free tutorials on React.js, Next.js, and web Development by Thapa Technical.",
    // description: A brief summary of the website’s content, which helps search engines and social platforms understand what the site is about.
    
    keywords: ["React", "Next.js", "Web Development", "Thapa Technical"],
    // keywords: An array of keywords relevant to the site, improving search engine optimization by associating the site with these terms.
    
    icons: {
        icon: "/images/kody.png",
    },
    // icons: Specifies the path to the site’s favicon, which browsers display in tabs and bookmarks.
    
    metadataBase: new URL("http://localhost:3000"),
    openGraph: {
        title: "Thapa Technical",
        description: "Join the best web dev tutorials!",
        url: "https://yourdomain.com",
        siteName: "Thapa Technical",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Thapa Technical Logo",
            },
        ],
        type: "website",
    },
    // openGraph: Contains metadata for the Open Graph protocol, which is used by social media platforms like Facebook to generate rich link previews. This includes the site’s title, description, URL, site name, and an image with specific dimensions and alt text.
    
    twitter: {
        card: "summary_large_image",
        title: "Thapa Technical",
        description: "Learn Web Dev from scratch with Thapa Technical!",
        creator: "@thapatechnical",
        images: ["/og-image.png"],
    }
    // twitter: Defines metadata for Twitter Cards, enabling enhanced link previews when the site is shared on Twitter. It includes the card type, title, description, creator’s handle, and an image.
}

NOTE: "You can now change title and icon in other page like services"


// Fonts in Nextjs
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
