import post from "@/data/blogs/demo-post.json";
import blogs from "@/data/blogs/blog-post.json";

import "./post.styles.scss";

export default function() {
    return (
        <main className="
            flex flex-col justify-center gap-44
            w-full
            py-16
        ">
            <section id="blog-post">
                <h1>{post.title}</h1>
                <img src={post["head-img"]} alt="" />
                {post.content.map(printElement)}
            </section>

            <section className="
                relative 
                flex flex-col justify-center items-center gap-16
                w-full max-w-7xl mx-auto px-8
            ">
                <div className="
                    flex flex-col justify-center items-center gap-8
                    text-center
                ">
                    <h1>Read More Articles</h1>
                    <p className="text-body-m max-w-xl">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>

                <div className="
					grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
					max-w-7xl
				">
					{blogs.splice(2, 4).map((blog) => (
						<div key={blog.title} className={`
							flex flex-col
							rounded-c-lg bg-neutral-light
							overflow-clip
                            max-w-sm
                            shadow-md
						`}>
							<img src={blog.img} alt={blog.title} className={`
								aspect-[1.5]
								w-full object-cover
							`}/>
							<div className="
								flex flex-col gap-4
								px-6 py-8
							">
								<p className="date">{blog.date}</p>
								<p className="text-body-m-bold">{blog.title}</p>
							</div>
						</div>
					))}
				</div>
            </section>
        </main>
    )
}

function printElement(object: { type: string, value: any }) {
    switch(object.type) {
        case "h1": return (
            <h2>{object.value}</h2>
        )
        case "p": return (
            <p>{object.value}</p>
        )
        case "ol": return (
            <ol>
                {object.value.map((item: string) => (
                    <li>{item}</li>
                ))}
            </ol>
        )
        case "i": return (
            <img src={object.value} alt="" />
        )
        default: return
    }
}