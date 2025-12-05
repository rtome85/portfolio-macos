import { useState, useEffect } from "react";
import { Info, Code, HardDrive, Coffee, Zap } from "lucide-react";

const AboutSettings = ({ goBack }) => {
	const [buildNumber] = useState(() => {
		// Generate a build number based on date (YYYYMMDDHH format)
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, "0");
		const day = String(now.getDate()).padStart(2, "0");
		const hour = String(now.getHours()).padStart(2, "0");
		return `${year}${month}${day}${hour}`;
	});

	const [storageUsed, setStorageUsed] = useState("Calculating...");

	useEffect(() => {
		// Simulate storage calculation
		const calculateStorage = () => {
			// Get localStorage size (approximate)
			let total = 0;
			for (let key in localStorage) {
				if (localStorage.hasOwnProperty(key)) {
					total += localStorage[key].length + key.length;
				}
			}
			// Convert to KB and add some base storage
			const kb = (total / 1024).toFixed(2);
			const mb = (total / 1024 / 1024).toFixed(2);
			if (parseFloat(mb) < 1) {
				setStorageUsed(`${kb} KB`);
			} else {
				setStorageUsed(`${mb} MB`);
			}
		};

		// Simulate a small delay for "calculating" effect
		setTimeout(calculateStorage, 500);
	}, []);

	const stats = [
		{
			icon: Code,
			label: "Lines of Code",
			value: "10,432",
			color: "text-blue-600",
		},
		{
			icon: Coffee,
			label: "Cups of Coffee",
			value: "∞",
			color: "text-amber-600",
		},
		{ icon: Zap, label: "Build Time", value: "2.3s", color: "text-green-600" },
		{
			icon: HardDrive,
			label: "Storage Used",
			value: storageUsed,
			color: "text-purple-600",
		},
	];

	return (
		<div>
			<h1>About</h1>
			<p className="text-gray-500 mb-6">
				Information about this portfolio application
			</p>

			{/* App Info Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-3 mb-4">
					<div
						className="w-16 h-16 rounded-2xl flex items-center justify-center"
						style={{
							background: "linear-gradient(to bottom right, #3b82f6, #9333ea)",
						}}
					>
						<span className="text-white text-2xl font-bold">RT</span>
					</div>
					<div>
						<h2 className="text-xl font-semibold text-gray-900">
							Portfolio macOS
						</h2>
						<p className="text-sm text-gray-500">Version 2.0</p>
					</div>
				</div>
				<div className="pt-4 border-t border-gray-200">
					<div className="flex items-center justify-between mb-3">
						<p className="text-sm text-gray-500">Build Number</p>
						<p className="text-sm font-mono text-gray-900">{buildNumber}</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">Software Version</p>
						<p className="text-sm font-semibold text-gray-900">2.0.0</p>
					</div>
				</div>
			</div>

			{/* Stats Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Development Stats</p>
				<div className="space-y-4">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<div
								key={stat.label}
								className={`flex items-center justify-between ${
									index !== stats.length - 1
										? "border-b border-gray-200 pb-4"
										: ""
								}`}
							>
								<div className="flex items-center gap-3">
									<Icon className={`w-6 h-6 ${stat.color} inline-block`} />
									<p className="text-gray-900">{stat.label}</p>
								</div>
								<p className={`font-semibold ${stat.color}`}>{stat.value}</p>
							</div>
						);
					})}
				</div>
			</div>

			{/* Footer Info */}
			<div className="text-center text-sm text-gray-500">
				<p>© {new Date().getFullYear()} Roberto Tomé</p>
				<p className="mt-1">Built with React, Vite, and lots of ☕</p>
			</div>
		</div>
	);
};

export default AboutSettings;
