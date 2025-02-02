import "./contact.styles.scss";

import contacts from "@/data/details/contacts.json";

export default function() {
    return (
        <main className="
            flex flex-col justify-center
            w-full
            py-16
            bg-surface
        ">
            <section className="
                relative 
                flex flex-col justify-center items-center gap-16
                w-full max-w-7xl mx-auto px-8
            ">
                <div className="
                    flex flex-col justify-center items-center gap-8
                    text-center
                ">
                    <h1 className="text-dis-l">Contact Us</h1>
                    <p className="text-body-m max-w-xl">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>

                <div className="
                    bg-neutral-light rounded-c-lg border border-neutral-mid
                    p-8
                    w-full max-w-2xl
                ">
                    <form action="" id="booking-form">
                        <div>
                            <div className="input-wrapper">
                                <label htmlFor="name">Name</label>
                                <input title="name" type="text" placeholder="Name"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="email">Email</label>
                                <input title="email" type="email" placeholder="abc@xyz.com"/>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" title="subject" name="subject" placeholder="Write a Subject"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="message">Message</label>
                            <textarea title="message" name="message" placeholder="Write a Message"/>
                        </div>
                        <button title="book" type="submit" className="link-button">
                            Book A Table
                        </button>
                    </form>
                </div>

                <div className="
                    flex flex-row justify-between gap-4
                    w-full max-w-2xl

                    [&_p]:max-w-52
                ">
                    <div className="
                        flex flex-col gap-4
                    ">
                        <h3 className="text-label-m font-bold">Call Us:</h3>
                        <h2 className="text-primary">{contacts.phone}</h2>
                    </div>
                    <div className="
                        flex flex-col gap-4
                    ">
                        <h3 className="text-label-m font-bold">Hours:</h3>
                        <p>Mon-Fri: 11am - 8pm <br />Sat, Sun: 9am - 10pm</p>
                    </div>
                    <div className="
                        flex flex-col gap-4
                    ">
                        <h3 className="text-label-m font-bold">Our Location</h3>
                        <p>{contacts.address}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}