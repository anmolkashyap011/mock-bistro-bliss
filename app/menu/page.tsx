import MenuList from "./menuList"

export default function MenuPage() {
    const brands = [
        [ "ubereats", "grubhub", "postmates" ], 
        [ "doordash", "foodpanda", "deliveroo" ], 
        [ "instacart", "justeat", "didifood" ]
    ]

    return (
        <main className="
            flex flex-col justify-center gap-44
            w-full
            py-16
        ">
            <MenuList />

            <section className="
                w-full
                bg-surface
                -my-16 py-24
            ">
                <div className="
                    grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-16
                    w-full max-w-7xl mx-auto px-8
                ">
                    <div className="flex flex-col gap-4">
                        <h1>You can order through apps</h1>
                        <p className="max-w-xl">Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                    </div>
                    
                    <div className="
                        flex flex-col justify-center items-center gap-4
                    ">
                        {brands.map((more, i) => (
                            <div key={i} className="
                                flex flex-row justify-center items-center gap-4 flex-wrap
                                w-fit
                            ">
                                {more.map((brand, i) => (
                                    <div key={i} className={`
                                        ${ i == 1 ? "px-10" : "px-8" } py-8
                                        bg-neutral-light rounded-c-md
                                        max-w-40 md:max-w-none
                                    `}>
                                        <img src={`brands/${brand}.svg`} alt={brand} className="
                                            w-fit h-auto
                                        "/>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}