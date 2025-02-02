import AboutSection from "../components/about-section";
import ReviewSection from "../components/review-section";

export default function Page() {
    return (
        <main className="
            flex flex-col justify-center gap-44
            w-full
            py-16
        ">
            <AboutSection />

            <section className="
                w-full
            ">
                <div className="
                    relative w-full
                    overflow-clip
                ">
                    <img src="imgs/BG.png" alt="" className="
                        absolute w-full h-full object-cover object-center
                    "/>
                    <span className="
                        absolute w-full h-full z-10
                        bg-[#2C2F24] bg-opacity-[.84]
                    "></span>
                    <div className="
                        relative
                        flex flex-col justify-center items-center gap-12
                        w-full max-w-2xl mx-auto px-8 py-52
                        z-20
                    ">
                        <div className="
                            flex justify-center items-center
                            w-28 aspect-square p-8
                            bg-neutral-light rounded-full
                        ">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="fill-primary">
                                <polygon points="40,30 70,50 40,70" fill="inherit" />
                            </svg>
                        </div>
                        <h1 className="text-neutral-light text-center">Feel the authentic & original taste from us</h1>
                    </div>
                </div>
                
                <div className="
                    w-fit max-w-7xl mx-auto px-8 py-16
                    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8

                    [&>div]:max-w-sm
                ">
                    <div className="
                        flex flex-row items-start gap-8
                        w-full
                    ">
                        <img src="symbols/restaurant-menu 1.svg" alt="" />
                        <div className="
                            flex flex-col gap-2
                            w-full
                        ">
                            <h2>Multi Cuisine</h2>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                    <div className="
                        flex flex-row items-start gap-8
                        w-full
                    ">
                        <img src="symbols/browse.svg" alt="" />
                        <div className="
                            flex flex-col gap-2
                            w-full
                        ">
                            <h2>Easy To Order</h2>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                    <div className="
                        flex flex-row items-start gap-8
                        w-full
                    ">
                        <img src="symbols/timer 1.svg" alt="" />
                        <div className="
                            flex flex-col gap-2
                            w-full
                        ">
                            <h2>Fast Delivery</h2>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="
                w-full py-24 -my-20
                bg-surface
            ">
                <div className="
                    grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-32
                    auto-rows-min
                    w-full max-w-7xl mx-auto px-8
                ">
                    <div className="
                        flex-1 flex flex-col gap-16
                    ">
                        <div className="
                            flex flex-col gap-8
                        ">
                            <h1>A little information for our valuable guest</h1>
                            <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>
                        
                        <div className="
                            grid grid-cols-1 md:grid-cols-2 gap-8
                        ">
                            <div className="
                                flex flex-col justify-center items-center gap-4
                                bg-neutral-light rounded-c-md border border-neutral-mid
                                p-8
                                overflow-clip
                            ">
                                <h1>3</h1>
                                <p>Locations</p>
                            </div>
                            <div className="
                                flex flex-col justify-center items-center gap-4
                                bg-neutral-light rounded-c-md border border-neutral-mid
                                p-8
                                overflow-clip
                            ">
                                <h1>1995</h1>
                                <p>Founded</p>
                            </div>
                            <div className="
                                flex flex-col justify-center items-center gap-4
                                bg-neutral-light rounded-c-md border border-neutral-mid
                                p-8
                                overflow-clip
                            ">
                                <h1>65+</h1>
                                <p>Staff Memebers</p>
                            </div>
                            <div className="
                                flex flex-col justify-center items-center gap-4
                                bg-neutral-light rounded-c-md border border-neutral-mid
                                p-8
                            ">
                                <h1>100%</h1>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="
                        relative
                        flex justify-stretch items-stretch rounded-c-md
                        w-full h-full
                        overflow-clip
                    ">
                        <img src="imgs/pexels-cottonbro-studio-4252139 1.jpg" alt="" className="
                            absolute
                            w-full h-full inline object-cover
                        "/>
                    </div>
                </div>
            </section>

            <ReviewSection />
        </main>
    )
}