'use client';

import Link from "next/link";
import "./navbar.style.scss";

import Contacts from "@/data/details/contacts.json";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Menu", link: "/menu" },
    { title: "Pages", link: "/blogs" },
    { title: "Contacts", link: "/contact" },
]

function ContactCard({ hide = false }: { hide?: boolean }) {
    return (
        <div className={`contact-card ${hide ? "hide" : ""}`}>
            <div className="wrapper">
                <div className="contacts">
                    <Link href="#">
                        <img src="icons/phone.svg" alt="phone" />
                        <span>{Contacts.phone}</span>
                    </Link>
                    <Link href="#">
                        <img src="icons/mail.svg" alt="mail" />
                        <span>{Contacts.email}</span>
                    </Link>
                </div>
                <div className="social-links">
                    <Link href="#">
                        <img src="icons/logo-fb-simple 2.svg" alt="facebook" />
                    </Link>
                    <Link href="#">
                        <img src="icons/logo-twitter 2.svg" alt="twitter" />
                    </Link>
                    <Link href="#">
                        <img src="icons/logo-instagram 1.svg" alt="instagram" />
                    </Link>
                    <Link href="#">
                        <img src="icons/logo-github 1.svg" alt="github" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const navBar = useRef<HTMLDivElement>(null);
    const navBarPlaceholder = useRef<HTMLSpanElement>(null);

    const pathname = usePathname();

    console.log(pathname);
    useEffect(() => {
        if (navBar.current == null) return;

        const resizeObserver = new ResizeObserver(() => {
            if (navBarPlaceholder.current != null) {
                const height = navBar.current?.clientHeight;
                navBarPlaceholder.current.style.height = `${height}px`;
            }
        })

        resizeObserver.observe(navBar.current);
        return () => resizeObserver.disconnect()
    }, [navBar, navBarPlaceholder])

    useEffect(() => {
        // Removing the active class
        document.querySelector('.nav-links > li.active')
            ?.classList?.remove('active');

        // Adding active class to the current active link element
        document.querySelector(`.nav-links > li > a[href="${pathname}"]`)
            ?.parentElement?.classList?.add('active');
    }, [pathname])

    return (
        <>
            <nav ref={navBar} id="navbar-container" className="">

                { /* NavBar */ }
                <div id="navbar">
                    <ContactCard hide={true}/>
                    <div className="navbar-content">
                        <Link href="/" id="logo">
                            <img src="symbols/japanese-food.svg" alt="Bistro Bliss" />
                            <span>Bistro Bliss</span>
                        </Link>

                        <ul className="nav-links">
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.link}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link href="/book" className="link-button outlined">
                            Book A Table
                        </Link>

                        <button title="nav menu" type="button" id="nav-mobile-menu" onClick={() => setShowMenu(!showMenu)}>
                            <img src="icons/menu.svg" alt="menu" />
                        </button>
                    </div>
                </div>

                { /* NavBar - Mobile */}
                <div id="navbar-mobile" className={(showMenu ? "open-menu" : "")}>
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.link}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link href="/book" className="link-button">
                        Book A Table
                    </Link>

                    <div className="divider">
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>

                    <ContactCard />
                </div>
            </nav>
            <span ref={navBarPlaceholder} className="block"></span>
        </>
    )
}