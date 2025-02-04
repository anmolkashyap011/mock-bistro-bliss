import Link from "next/link";

import menu from "@/data/menu.json";
import events from "@/data/events.json";
import blogPosts from "@/data/blogs/blog-post.json";

import ReviewSection from "./components/review-section";

import "./styles/home.styles.scss";
import AboutSection from "./components/about-section";

export default function Home() {
	const blogs = blogPosts.filter((blog) => blog.starred || blog.highlighted).splice(0, 5);

	return (
		<main className="
			flex flex-col justify-center gap-44
			w-full
			mb-36
		">
			<header className="
				relative
				w-full
				overflow-clip
			">
				<img src="imgs/image 110.png" alt="" className="
					absolute w-full h-full
					object-cover
				"/>
				<div className="
					relative
					flex flex-col justify-center items-center gap-12
					text-center
					px-8 py-40 md:py-48 2xl:py-60
					z-10
				">
					<h1 className="md:text-dis-l max-w-2xl">Best food for your taste</h1>
					<p className="max-w-2xl text-body-l">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>

					<div className="
						flex flex-row items-center gap-4
					">
						<Link href="" className="link-button">Book A Table</Link>
						<Link href="" className="link-button outlined">Explore Menu</Link>
					</div>
				</div>
			</header>

			<section className="
				flex flex-col justify-center items-center gap-16
				w-full max-w-7xl mx-auto px-8
			">
				<h1 className="text-center md:text-left">Browse Our Menu</h1>

				<div className="
					grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6
					justify-items-stretch items-stretch
				">
					{menu.map((item, i) => (
						<div key={i} className="
							flex flex-col justify-center items-center gap-4
							text-center
							max-w-xs
							px-8 py-12
							bg-neutral-light border border-neutral-mid rounded-c-sm
						">
							<div className="
								flex justify-center items-center
								p-2
								bg-neutral-mid rounded-full
								w-24 aspect-square
								my-4
							">
								<img src={item.img} alt={item.item} />
							</div>
							<h2>{item.item}</h2>
							<p>{item.desc}</p>
							<Link href={item.link}>Explore More</Link>
						</div>
					))}
				</div>
			</section>

			<AboutSection />

			<section className="
				flex flex-col items-center xl:items-start gap-16
				w-full max-w-7xl mx-auto px-8
			">
				<h1 className="
					max-w-2xl text-start md:max-xl:text-center
				">We also offer unique services for your events</h1>
				<div className="
					grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4
					justify-items-stretch items-stretch
					w-fit
				">
					{events.map((event, i) => (
						<Link key={i} href="" className="
							flex flex-col gap-6
							max-w-sm
							no-underline
							mb-12 xl:mb-0
						">
							<img src={event.img} alt={event.title} className="
								w-full aspect-square rounded-c-md
								object-cover
							"/>
							<h2>{event.title}</h2>
							<p>{event.desc}</p>
						</Link>
					))}
				</div>
			</section>

			<section className="section-5">
				<div className="images">
					<div className="img img-1">
						<img src="imgs/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.jpg" alt="" className="img-1"/>
					</div>
					<div className="img img-2">
						<img src="imgs/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.jpg" alt="" className="img-1"/>
					</div>
					<div className="img img-3">
						<img src="imgs/sadj-iron-pot-with-various-salads 1.jpg" alt="" className="img-1"/>
					</div>
				</div>
				<div className="content">
					<h1>Fastest Food Delivery in City</h1>
					<p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>

					<ul className="">
						<li>
							<Link href="">
								<span><img src="icons/clock.svg" alt="" /></span>
								Deliver within 30 minutes
							</Link>
						</li>
						<li>
							<Link href="">
								<span><img src="icons/calender.svg" alt="" /></span>
								Best Offer & Prices
							</Link>
						</li>
						<li>
							<Link href="">
								<span><img src="icons/shopping-cart.svg" alt="" /></span>
								Online Servies Available
							</Link>
						</li>
					</ul>
				</div>
			</section>

			<ReviewSection />

			<section className="
				flex flex-col justify-center items-center gap-16
				bg-surface
				w-full py-24 -my-20
			">
				<div className="
					flex flex-col md:flex-row justify-between items-center gap-4
					w-full max-w-7xl px-8
					text-center md:text-left
				">
					<h1>Our Blogs & Articles</h1>
					<Link href="#" className="link-button">Read All Articles</Link>
				</div>
				<div className="
					grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-4
					max-w-7xl px-8
					
				">
					{blogs.map((blog, i) => (
						<div key={i} className={`
							flex flex-col
							rounded-c-lg bg-neutral-light
							overflow-clip
							${  blog.starred ? "row-start-1 row-span-2" : "" }
						`}>
							<img src={blog.img} alt={blog.title} className={`
								${ blog.starred ? "flex-1" : "aspect-[1.5]" }
								w-full object-cover
							`}/>
							<div className="
								flex flex-col gap-4
								px-6 py-8
							">
								<p className="date">{blog.date}</p>
								<p className="text-body-m-bold">{blog.title}</p>
								<p className={ !blog.starred ? "hidden" : "" }>{blog.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
