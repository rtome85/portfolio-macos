import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { MobileControls } from "#components";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { techStack, WORK_EXPERIENCE, locations } from "#constants";

const ResumeMobile = () => {
	return (
		<>
			<div id="mobile-header">
				<MobileControls target="resumeMobile" />
				<h2 className="text-lg font-bold text-center">Resume</h2>
				<a href="files/resume.pdf" download className="justify-self-end">
					<Download className="icon" />
				</a>
			</div>
			<div className="content">
				{/* Header */}
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Roberto Tomé</h1>
					<p className="text-sm text-gray-700">Software Engineer</p>
					<p className="text-sm text-gray-700">Location: Lisbon, Portugal</p>
					<div className="flex flex-row gap-2">
						<p className="text-sm text-gray-700">
							<a
								href="mailto:contact@robtome.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								Email |
							</a>
						</p>
						<p className="text-sm text-gray-700">
							<a
								href="https://robtome.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								Website |
							</a>
						</p>
						<p className="text-sm text-gray-700">
							<a
								href="https://www.linkedin.com/in/robtome/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								Linkedin |
							</a>
						</p>
						<p className="text-sm text-gray-700">
							<a
								href="https://github.com/robtome"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								GitHub
							</a>
						</p>
					</div>
				</div>

				{/* Professional Summary */}
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Professional Summary</h2>
					<p className="text-sm text-gray-700">
						Software Engineer with expertise in React, TypeScript, JavaScript,
						and modern state‑management (Zustand). Strong focus on component
						architecture, performance, and CI/CD workflows. Experienced in
						building maintainable, testable UI systems and delivering
						production‑grade applications on web and mobile platforms.
					</p>
				</div>

				{/* Core Skills */}
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Core Skills</h2>
					<ul className="flex flex-col gap-2 list-disc list-inside">
						{techStack.map((skill) => (
							<li key={skill.category}>{skill.items.join(", ")}</li>
						))}
					</ul>
				</div>

				{/* Work Experience */}
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Work Experience</h2>
					<ul className="flex flex-col gap-4">
						{WORK_EXPERIENCE.map((experience) => (
							<li key={experience.id}>
								<h3 className="text-lg font-bold">{experience.position}</h3>
								<p className="text-sm font-semibold">{experience.company}</p>
								<p className="text-sm text-gray-500">{experience.date}</p>

								<ul className="fle flex-col gap-2 list-disc list-inside">
									{experience.achievements.map((achievement) => (
										<li key={achievement} className="py-1">
											{achievement}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>

				{/* Featured Projects */}
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Featured Projects</h2>
					<ul className="flex flex-col gap-4">
						{locations.work.children.map((location) => (
							<li key={location.id}>
								<h3 className="text-lg font-bold">{location.name}</h3>
								<ul className="fle flex-col gap-2">
									{location.children.map((child) => (
										<li key={child.id}>
											{child.fileType === "txt" && <p>{child.description}</p>}
											{child.liveDemo && (
												<a
													href={child.liveDemo}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-500"
												>
													Demo
												</a>
											)}{" "}
											{child.github && (
												<a
													href={child.github}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-500"
												>
													GitHub
												</a>
											)}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>

				{/* Education */}
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Education</h2>
					<ul className="flex flex-col gap-4">
						<li>
							<h3 className="text-lg font-bold">Instituto Superior Técnico</h3>
							<p className="text-sm font-semibold">
								MSc in Electrical and Computer Engineering
							</p>
							<p className="text-sm text-gray-500">2005 - 2014</p>
						</li>
					</ul>
				</div>

				{/* Languages */}
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Languages</h2>
					<ul className="flex flex-col gap-4">
						<li>
							<h3 className="text-lg font-bold">English</h3>
							<p className="text-sm text-gray-500">Proficient</p>
						</li>
						<li>
							<h3 className="text-lg font-bold">Portuguese</h3>
							<p className="text-sm text-gray-500">Native</p>
						</li>
						<li>
							<h3 className="text-lg font-bold">Spanish</h3>
							<p className="text-sm text-gray-500">Intermediate</p>
						</li>
					</ul>
				</div>

				{/* Footer */}
				<footer className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-40 py-4 px-10 border-t border-gray-200 bg-gray-50">
					<p className="text-sm text-gray-500">
						<a href="files/resume.pdf" download className="text-blue-500">
							Download Resume
						</a>
					</p>
				</footer>
			</div>
		</>
	);
};

const ResumeMobileWindow = MobileWindowWrapper(ResumeMobile, "resumeMobile");

export default ResumeMobileWindow;
