import Link from "next/link"


const Navigation = () => {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/service", label: "Services" },
        { href: "/contact", label: "Contact" },
        { href: "/server-component", label: "Server Component" },
        { href: "/client-component", label: "Client Component" },
    ];

    // Yes, you can create a folder named "client-component" inside your "pages" or "app" directory,
    // and add an "index.jsx" (or "page.jsx" if using the app directory) file for the Client Component page.
    return (
        <header className="font-poppins text-center flex flex-col md:flex-row p-3 md:justify-around justify-center align-center">
            <div className="text-3xl mb-3 md:mb-0">
                logo
            </div>
            <nav className="flex items-center justify-center">
                <ul className="flex gap-5">
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className="text-xs md:text-base lg:text-normal">
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation