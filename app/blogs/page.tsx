import blogs from "@/data/blogs/blog-post.json";

export default function BlogPage () {
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
                    <h1 className="text-dis-l">Our Blogs & Articles</h1>
                    <p className="text-body-m max-w-xl">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>

                <div className="
					grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
					max-w-7xl
				">
					{blogs.map((blog, i) => (
						<div key={i} className={`
							flex flex-col
							rounded-c-lg bg-neutral-light
							overflow-clip
                            max-w-sm
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