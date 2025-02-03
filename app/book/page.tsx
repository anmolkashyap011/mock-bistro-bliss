'use client'

import { useState, useEffect } from "react";
import "./book.styles.scss";

export default function() {
    const [dateVal, setDate] = useState('2025-01-01');
    const [timeVal, setTime] = useState('00:00');

    useEffect(() => {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toTimeString().slice(0, 5);

        setDate(date);
        setTime(time);
    }, [])

    return (
        <main className="
            flex flex-col justify-center
            w-full
            pt-16
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
                    <h1 className="text-dis-l">Book A Table</h1>
                    <p className="text-body-m max-w-xl">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <span className="block h-[350px] md:h-[250px]">

                </span>
                
                <div className="
                    absolute 
                    bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                    bg-neutral-light rounded-c-lg border border-neutral-mid
                    p-8
                    w-[90%] md:w-full max-w-2xl
                ">
                    <form action="" id="booking-form">
                        <div>
                            <div className="input-wrapper">
                                <label htmlFor="date">Date</label>
                                <input title="date" type="date" value={dateVal} onChange={e => setDate(e.target.value)}/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="time">Time</label>
                                <input title="time" type="time" value={timeVal} onChange={e => setTime(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className="input-wrapper">
                                <label htmlFor="name">Name</label>
                                <input title="name" type="text" placeholder="Name"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="phone">Phone</label>
                                <input title="phone" type="number" placeholder="000-000-0000"/>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="persons">Total Persons</label>
                            <select title="persons" name="persons" id="">
                                <option value="1">1 Person</option>
                                <option value="1">2 Persons</option>
                                <option value="1">3 Persons</option>
                                <option value="1">4 Persons</option>
                                <option value="1">5 Persons</option>
                                <option value="1">5+ Persons</option>
                            </select>
                        </div>
                        <button title="book" type="submit" className="link-button">
                            Book A Table
                        </button>
                    </form>
                </div>
            </section>
            <div className="h-max">
                <img src="imgs/image 112.png" alt="" className="
                    w-full h-max min-h-[400px] max-h-[600px] object-cover
                "/>
            </div>
        </main>
    )
}