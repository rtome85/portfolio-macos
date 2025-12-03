import React from "react";

const TheGuy = () => {
	return (
		<section>
			<div className="flex flex-col items-center gap-5">
				<img
					src="/images/headshot.webp"
					alt="Roberto"
					className="w-30 rounded-full"
				/>
				<div>
					<h3 className="mb-5">Hey there!</h3>
					<p className="mb-2 text-justify">
						I'm Roberto, a software engineer with a passion for building
						beautiful, functional, and user-friendly web applications.
					</p>
					<p className="mb-2 text-justify">
						I believe in the power of collaboration and continuous learning. My
						development process focuses on creating maintainable, scalable, and
						performant applications while ensuring an exceptional user
						experience.
					</p>
					<p className="mb-2 text-justify">
						I'm always excited to take on new challenges and collaborate on
						interesting projects. Whether you need a full web application or
						help with an existing project, I'm here to help!
					</p>
					<p className="mb-2 text-justify">
						When I'm not coding, you can find me exploring new technologies,
						reading books, hiking, or cooking a kick-ass lasagna!
					</p>
				</div>
			</div>
		</section>
	);
};

export default TheGuy;
