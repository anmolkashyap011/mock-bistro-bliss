import contacts from "@/data/details/contacts.json";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="
            flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16
            w-full max-w-7xl mx-auto px-8
        ">
            <div className="
                relative
                flex-1 max-w-xl w-full lg:w-auto
                aspect-square
            ">
                <img src="imgs/image 1111.jpg" alt="" className="
                    absolute
                    w-[95%] h-[95%]
                    object-cover
                    rounded-c-sm
                "/>
                <div className='
                    absolute
                    flex flex-col gap-8
                    w-fit right-0 bottom-0
                    p-12
                    bg-neutral-dark rounded-c-sm
                    z-10
                '>
                    <h2 className="text-neutral-light">Contact Us</h2>
                    <div className="
                        flex flex-col gap-4
                        [&>a]:text-neutral-light
                        [&>a]:no-underline
                        [&>a]:flex
                        [&>a]:flex-row
                        [&>a]:gap-2
                    ">
                        <Link href="#">
                            <img src="icons/phone.svg" alt="phone" />
                            <span>{contacts.phone}</span>
                        </Link>
                        <Link href="#">
                            <img src="icons/mail.svg" alt="mail" />
                            <span>{contacts.email}</span>
                        </Link>
                        <Link href="#">
                            <img src="icons/mail.svg" alt="mail" />
                            <span>{contacts.email}</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="
                flex-1 flex flex-col gap-8
                max-w-2xl
            ">
                <h1>We provide healthy food for your family.</h1>
                <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city&apos;s rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

                <Link href="#" className="link-button outlined w-fit">More About Us</Link>
            </div>
        </section>
    )
}