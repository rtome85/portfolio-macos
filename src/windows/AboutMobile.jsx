import React, { useState } from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import {
	MobileControls,
	TheGuy,
	Work,
	Skills,
	Certifications,
} from "#components";
import { User, BriefcaseBusiness, Brain, FileBadge } from "lucide-react";

const AboutMobile = () => {
	const [currentWindow, setCurrentWindow] = useState("theGuy");

	return (
		<>
			<div id="mobile-header">
				<MobileControls target="aboutMobile" />
				<h2 className="text-lg font-bold text-center">About Me</h2>
			</div>

			<div className="content">
				{currentWindow === "theGuy" && <TheGuy />}
				{currentWindow === "work" && <Work />}
				{currentWindow === "skills" && <Skills />}
				{currentWindow === "certifications" && <Certifications />}
			</div>
			<footer className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-40 py-4 px-10 border-t border-gray-200 bg-gray-50">
				<div className="flex items-center justify-center gap-2 w-full">
					<div
						className="flex flex-col items-center gap-2 min-w-20"
						onClick={() => setCurrentWindow("theGuy")}
					>
						<User
							className={`${
								currentWindow === "theGuy" ? "text-[#007BFE]" : "text-gray-400"
							} size-5`}
						/>
						<p
							className={`${
								currentWindow === "theGuy" ? "text-[#007BFE]" : "text-gray-400"
							} text-sm`}
						>
							The Guy
						</p>
					</div>
					<div
						className="flex flex-col items-center gap-2 min-w-20"
						onClick={() => setCurrentWindow("work")}
					>
						<BriefcaseBusiness
							className={`${
								currentWindow === "work" ? "text-[#007BFE]" : "text-gray-400"
							} size-5`}
						/>
						<p
							className={`${
								currentWindow === "work" ? "text-[#007BFE]" : "text-gray-400"
							} text-sm`}
						>
							Work
						</p>
					</div>
					<div
						className="flex flex-col items-center gap-2 min-w-20"
						onClick={() => setCurrentWindow("skills")}
					>
						<Brain
							className={`${
								currentWindow === "skills" ? "text-[#007BFE]" : "text-gray-400"
							} size-5`}
						/>
						<p
							className={`${
								currentWindow === "skills" ? "text-[#007BFE]" : "text-gray-400"
							} text-sm`}
						>
							Skills
						</p>
					</div>
					<div
						className="flex flex-col items-center gap-2 min-w-20"
						onClick={() => setCurrentWindow("certifications")}
					>
						<FileBadge
							className={`${
								currentWindow === "certifications"
									? "text-[#007BFE]"
									: "text-gray-400"
							} size-5`}
						/>
						<p
							className={`${
								currentWindow === "certifications"
									? "text-[#007BFE]"
									: "text-gray-400"
							} text-sm`}
						>
							Certifications
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

const AboutMobileWindow = MobileWindowWrapper(AboutMobile, "aboutMobile");

export default AboutMobileWindow;
