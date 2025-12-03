import React from "react";
import { techStack } from "#constants";

const Skills = () => {
	return (
		<section className="techstack">
			<ul className="space-y-4">
				{techStack.map(({ category, items }) => (
					<li key={category}>
						<h3>{category}</h3>
						<ul className="flex flex-row gap-2 flex-wrap">
							{items.map((item) => (
								<li key={item} className="bg-amber-200 p-2 rounded-md">
									{item}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
