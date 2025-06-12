import Link from "next/link"


const Navigation = () => {
    return <header className="flex justify-content-between">
        <div className="text-3xl">
            logo
        </div>
        <nav>
            <ul className="flex ">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/service">Services</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigation