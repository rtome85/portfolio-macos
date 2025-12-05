import { useState } from "react";
import {
	MapPin,
	GitBranch,
	Star,
	Code,
	Globe,
	ChevronRight,
	ExternalLink,
	Github,
} from "lucide-react";

const repositories = [
	{
		id: 1,
		name: "portfolio_macos",
		description: "macOS-style portfolio website",
		language: "JavaScript",
		stars: 42,
		url: "https://github.com/rtome85/portfolio_macos",
		featured: true,
	},
	{
		id: 2,
		name: "project-2",
		description: "Full-stack web application",
		language: "TypeScript",
		stars: 28,
		url: "https://github.com/rtome85",
		featured: false,
	},
	{
		id: 3,
		name: "project-3",
		description: "React component library",
		language: "JavaScript",
		stars: 15,
		url: "https://github.com/rtome85",
		featured: false,
	},
	{
		id: 4,
		name: "project-4",
		description: "Node.js API server",
		language: "TypeScript",
		stars: 33,
		url: "https://github.com/rtome85",
		featured: false,
	},
];

const FindMySettings = ({ goBack }) => {
	const [githubUsername] = useState("rtome85");

	const handleRepoClick = (url) => {
		window.open(url, "_blank");
	};

	const handleGitHubClick = () => {
		window.open(`https://github.com/${githubUsername}`, "_blank");
	};

	return (
		<div>
			<h1>Find My (Projects)</h1>
			<p className="text-gray-500 mb-6">
				Locate and explore my GitHub repositories
			</p>

			{/* GitHub Profile Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-3 mb-4">
					<div
						className="w-16 h-16 rounded-2xl flex items-center justify-center"
						style={{
							background: "linear-gradient(to bottom right, #24292e, #586069)",
						}}
					>
						<Github className="w-8 h-8 text-white" />
					</div>
					<div>
						<h2 className="text-xl font-semibold text-gray-900">
							@{githubUsername}
						</h2>
						<p className="text-sm text-gray-500">GitHub Profile</p>
					</div>
				</div>
				<div className="pt-4 border-t border-gray-200">
					<div className="flex items-center justify-between mb-3">
						<p className="text-sm text-gray-500">Repositories</p>
						<p className="text-sm font-semibold text-gray-900">24</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">Status</p>
						<p className="text-sm font-semibold text-green-600">Active</p>
					</div>
				</div>
			</div>

			{/* Featured Repository Card */}
			{repositories
				.filter((repo) => repo.featured)
				.map((repo) => (
					<div key={repo.id} className="p-4 rounded-3xl bg-gray-50 mb-6">
						<p className="text-sm text-gray-500 mb-4">Featured Project</p>
						<div
							className="cursor-pointer"
							onClick={() => handleRepoClick(repo.url)}
						>
							<div className="flex items-center gap-3 mb-3">
								<Code className="w-6 h-6 text-blue-600" />
								<div className="flex-1">
									<p className="text-gray-900 font-semibold">{repo.name}</p>
									<p className="text-xs text-gray-500 mt-1">
										{repo.description}
									</p>
								</div>
								<ExternalLink className="w-5 h-5 text-gray-400" />
							</div>
							<div className="flex items-center gap-4 pt-3 border-t border-gray-200">
								<div className="flex items-center gap-2">
									<div
										className="w-3 h-3 rounded-full"
										style={{ backgroundColor: "#f1e05a" }}
									></div>
									<p className="text-xs text-gray-500">{repo.language}</p>
								</div>
								<div className="flex items-center gap-1">
									<Star className="w-4 h-4 text-amber-500" />
									<p className="text-xs text-gray-500">{repo.stars}</p>
								</div>
							</div>
						</div>
					</div>
				))}

			{/* Repositories List Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Repositories</p>
				<div className="space-y-4">
					{repositories
						.filter((repo) => !repo.featured)
						.map((repo, index, filtered) => (
							<div
								key={repo.id}
								className={`flex items-center justify-between cursor-pointer ${
									index !== filtered.length - 1
										? "border-b border-gray-200 pb-4"
										: ""
								}`}
								onClick={() => handleRepoClick(repo.url)}
							>
								<div className="flex items-center gap-3 flex-1">
									<GitBranch className="w-6 h-6 text-gray-400" />
									<div className="flex-1">
										<p className="text-gray-900 font-semibold">{repo.name}</p>
										<p className="text-xs text-gray-500 mt-1">
											{repo.description}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="flex items-center gap-2">
										<Star className="w-4 h-4 text-amber-500" />
										<p className="text-xs text-gray-500">{repo.stars}</p>
									</div>
									<ChevronRight className="w-5 h-5 text-gray-400" />
								</div>
							</div>
						))}
				</div>
			</div>

			{/* Quick Actions Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Quick Actions</p>
				<div className="space-y-3">
					<button
						onClick={handleGitHubClick}
						className="w-full flex items-center gap-3 p-3 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
					>
						<Github className="w-5 h-5" />
						<span className="font-semibold">View All Repositories</span>
					</button>
					<button
						onClick={() =>
							window.open(
								`https://github.com/${githubUsername}?tab=stars`,
								"_blank"
							)
						}
						className="w-full flex items-center gap-3 p-3 rounded-2xl bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors"
					>
						<Star className="w-5 h-5" />
						<span className="font-semibold">View Starred Repos</span>
					</button>
				</div>
			</div>

			{/* Stats Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3">
					<div className="flex items-center gap-3">
						<Code className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Total Repositories</p>
							<p className="text-xs text-gray-500">Public & Private</p>
						</div>
					</div>
					<p className="text-sm font-semibold text-gray-900">24</p>
				</div>
				<div className="flex items-center gap-2 justify-between w-full">
					<div className="flex items-center gap-3">
						<Star className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Total Stars</p>
							<p className="text-xs text-gray-500">Across all repos</p>
						</div>
					</div>
					<p className="text-sm font-semibold text-gray-900">118</p>
				</div>
			</div>
		</div>
	);
};

export default FindMySettings;
