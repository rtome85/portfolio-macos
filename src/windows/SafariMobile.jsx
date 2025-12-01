import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { blogPosts } from "#constants";
import { MobileControls } from "#components";
import {
	ChevronLeft,
	ChevronRight,
	MoveRight,
	ShieldHalf,
	Search,
	Share,
	Plus,
	Copy,
} from "lucide-react";

const SafariMobile = () => {
	return (
		<>
			<div id="mobile-header">
				<MobileControls target="safariMobile" />
				<h2 className="text-lg font-bold text-center">Safari</h2>
			</div>
			<div className="blog overflow-y-auto pb-40">
				<h2>My latest articles</h2>
				<ul className="flex flex-col gap-4 mb-8">
					{blogPosts.map(({ id, date, title, image, link }) => (
						<li
							key={id}
							className="flex flex-row gap-2 items-center border-b border-gray-200 pb-2 last:border-b-0"
						>
							<div className="flex flex-col gap-2">
								<p className="text-xs text-gray-500">{date}</p>
								<h3 className="text-base font-semibold text-gray-800">
									{title}
								</h3>
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 text-xs hover:underline flex items-center gap-3"
								>
									Check out the full post{" "}
									<MoveRight className="inline-block icon-hover" />
								</a>
							</div>
						</li>
					))}
				</ul>
				<a
					href="https://robtome.com/blog"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 text-sm justify-center hover:underline flex items-center gap-3"
				>
					See all articles
				</a>
			</div>
			<footer className="sticky bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4 border-t border-gray-200 bg-gray-50">
				<div className="flex flex-row gap-3 items-center bg-white shadow-md rounded-lg px-3 py-3 w-full mb-4">
					<Search className="size-5 text-gray-400" />
					<input
						type="text"
						placeholder="Search or enter website name"
						className="flex-1 text-center"
					/>
					<img src="/icons/dictation.svg" alt="Dictation" />
				</div>
				<div className="flex flex-row gap-3 items-center justify-between w-full">
					<ChevronLeft className="size-10 text-gray-400" />
					<ChevronRight className="size-10 text-gray-400" />
					<img src="/apps/share.svg" alt="Share" className="size-8" />
					<img src="/apps/read.svg" alt="Read" className="size-8" />
					<img src="/apps/copy.svg" alt="Copy" className="size-8" />
				</div>
			</footer>
		</>
	);
};

const SafariMobileWindow = MobileWindowWrapper(SafariMobile, "safariMobile");
export default SafariMobileWindow;
