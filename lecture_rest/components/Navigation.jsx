import Link from "next/link"


const Navigation = () => {
    return <header className="font-poppins flex p-3 justify-around align-center ">
        <div className="text-3xl">
            logo
        </div>
        <nav>
            <ul className="flex gap-5 alert-danger">
                <li >
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