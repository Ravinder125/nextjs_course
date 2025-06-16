import Navigation from "@/components/Navigation";
import "@/app/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
