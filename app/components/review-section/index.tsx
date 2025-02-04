import reviews from "@/data/reviews.json";

export default function ReviewSection() {
    return (
        <section className="
            flex flex-col justify-center items-center gap-16
            w-full max-w-7xl mx-auto px-8
        ">
            <h1>What Our Customers Say</h1>

            <div className="
                grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4
                auto-rows-max
            ">
                {reviews.map((review, i) => (
                    <div key={i} className="
                        flex flex-col gap-8
                        bg-surface rounded-c-md
                        px-8 py-12
                        h-full w-full max-w-sm
                    ">
                        <h2 className="text-primary">{review.headline}</h2>
                        <p className="flex-1">{review.review}</p>

                        <span className="block w-full h-px bg-neutral-mid"></span>

                        <div className="
                            flex flex-row items-center gap-4
                        ">
                            <img src={review.pic} alt="" className="h-16 aspect-square rounded-full"/>
                            <div className="
                                flex flex-col
                            ">
                                <p className="text-label-s">{review.name}</p>
                                <p>{review.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}