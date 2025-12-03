import React from "react";
import { MobileControls, WindowControls } from "#components";
import { techStack } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { Check, Flag } from "lucide-react";

const TerminalMobile = () => {
	return (
		<>
			<div id="mobile-header">
				<MobileControls target="terminalMobile" />
				<h2 className="text-lg">Tech Stack</h2>
			</div>
			<div className="techstack">
				<div className="label">
					<p className="w-32">Category</p>
					<p>Technologies</p>
				</div>

				<ul className="content">
					{techStack.map(({ category, items }) => (
						<li key={category} className="flex items-start">
							<Check className="check" size={20} />
							<h3 className="font-semibold">{category}</h3>
							<ul className=" flex flex-col items-start">
								{items.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</li>
					))}
				</ul>

				<div className="footnote">
					<p>
						<Check size={20} />
						{`${techStack.length} of ${techStack.length} stacks loaded successfully (100%)`}
					</p>
					<p className="text-black">
						<Flag size={15} fill="black" />
						Render time: 10ms
					</p>
				</div>
			</div>
		</>
	);
};

const TerminalMobileWindow = MobileWindowWrapper(
	TerminalMobile,
	"terminalMobile"
);

export default TerminalMobileWindow;
