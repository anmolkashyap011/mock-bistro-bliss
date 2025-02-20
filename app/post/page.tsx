import post from "@/data/blogs/demo-post.json";
import blogs from "@/data/blogs/blog-post.json";

import "./post.styles.scss";
import Link from "next/link";

export default function PostPage() {
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
						<Link href="/post" key={blog.title} className={`
							flex flex-col
							rounded-c-lg bg-neutral-light no-underline
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
						</Link>
					))}
				</div>
            </section>
        </main>
    )
}

function printElement(object: {
    type: string;
    value: string;
    key: any;
} | {
    type: string;
    value: string[];
    key: any;
}) {
    switch(object.type) {
        case "h1": return (
            <h2 key={object.key}>{object.value}</h2>
        )
        case "p": return (
            <p key={object.key}>{object.value}</p>
        )
        case "ol": return (
            <ol key={object.key}>
                {(object.value as string[]).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                ))}
            </ol>
        )
        case "i": return (
            <img src={object.value as string} alt="" key={object.key}/>
        )
        default: return
    }
}