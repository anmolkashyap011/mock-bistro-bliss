'use client';

import { useEffect, useState } from "react";

import menuItems from "@/data/menu-items.json";

export default function MenuList() {
    const categories = [null, ...menuItems.categories];

    const [menuSelection, setMenuSelection] = useState(null as string | null);
    const [items, setItems] = useState(menuItems.items);

    useEffect(() => {
        const filteredItems = menuSelection == null 
            ? menuItems.items 
            : menuItems.items.filter((item) => item.category === menuSelection)
        
        setItems(filteredItems);
    }, [menuSelection])

    return (
        <section className="
            flex flex-col justify-center items-center gap-16
            w-full max-w-7xl mx-auto px-8
        ">
            <div className="
                flex flex-col justify-center items-center gap-8
                text-center
            ">
                <h1 className="text-dis-l">Our Menu</h1>
                <p className="text-body-m max-w-xl">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>

            <div className="
                flex flex-row justify-start items-center gap-2 md:gap-4 flex-wrap
            ">
                {categories.map((c) => (
                    <button key={c == null ? "all" : c} className={`
                        link-button ${ c == menuSelection ? "" : "outlined" }
                        min-w-20
                    `} onClick={() => setMenuSelection(c)}>{c == null ? "All" : c}</button>
                ))}
            </div>

            <div className="
                grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4
            ">
                {items.map((item) => (
                    <div key={item.item} className="
                        flex flex-col
                        menu-item
                        border border-neutral-mid rounded-c-md
                        overflow-clip
                    ">
                        <img src={item.img} alt="" className="
                            w-full aspect-[1.4] object-cover
                        "/>
                        <div className="
                            flex flex-col justify-center items-center gap-4
                            w-full px-6 py-6
                            text-center
                        ">
                            <h2 className="text-primary">{item.price}</h2>
                            <h3 className="text-body-l-bold">{item.item}</h3>
                            <p className="">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}