'use client';

import Link from "next/link";
import "./navbar.style.scss";

import Contacts from "@/data/details/contacts.json";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const navBar = useRef<HTMLDivElement>(null);
    const navBarPlaceholder = useRef<HTMLSpanElement>(null);

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

    return (
        <>
            <nav ref={navBar} id="navbar-container" className="">
                <div className="contact-bar large">
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

                { /* NavBar */ }
                <div id="navbar">
                    <div className="navbar-content">
                        <Link href="/" id="logo">
                            <img src="symbols/japanese-food.svg" alt="Bistro Bliss" />
                            <span>Bistro Bliss</span>
                        </Link>

                        <ul className="nav-links">
                            <li className="active">
                                <Link href="#">
                                    Home
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    About
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    Menu
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    Pages
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <Link href="#" className="link-button outlined">
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
                        <li className="active">
                            <Link href="#">
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link href="#">
                                About
                            </Link>
                        </li>
                        <li className="">
                            <Link href="#">
                                Menu
                            </Link>
                        </li>
                        <li className="">
                            <Link href="#">
                                Pages
                            </Link>
                        </li>
                        <li className="">
                            <Link href="#">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <Link href="#" className="link-button">
                        Book A Table
                    </Link>

                    <div className="divider">
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>

                    <div className="contacts-container">
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
            </nav>
            <span ref={navBarPlaceholder} className="block"></span>
        </>
    )
}