import { useState, useEffect } from "react";
import { Clock, Code, Coffee, Zap, Monitor, GitBranch } from "lucide-react";

const ScreenTime = ({ goBack }) => {
	const [sessionTime, setSessionTime] = useState(0);

	useEffect(() => {
		// Track session time (time since page load)
		const startTime = Date.now();
		const interval = setInterval(() => {
			const elapsed = Math.floor((Date.now() - startTime) / 1000 / 60); // minutes
			setSessionTime(elapsed);
		}, 60000); // Update every minute

		return () => clearInterval(interval);
	}, []);

	const stats = [
		{
			icon: Code,
			label: "Time building this site",
			value: "42 hours",
			color: "text-blue-600",
		},
		{
			icon: Coffee,
			label: "Coffee breaks",
			value: "127",
			color: "text-amber-600",
		},
		{
			icon: GitBranch,
			label: "Git commits",
			value: "234",
			color: "text-green-600",
		},
		{
			icon: Zap,
			label: "Builds completed",
			value: "1,847",
			color: "text-purple-600",
		},
		{
			icon: Monitor,
			label: "Current session",
			value: sessionTime > 0 ? `${sessionTime} min` : "< 1 min",
			color: "text-indigo-600",
		},
	];

	return (
		<div>
			<h1>Screen Time</h1>
			<p className="text-gray-500 mb-6">
				Development activity and time tracking
			</p>

			{/* Today's Summary Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Today's Summary</p>
				<div className="flex items-center justify-center py-6">
					<div className="text-center">
						<div className="flex items-center gap-2 mb-2">
							<Clock className="w-8 h-8 text-blue-600" />
							<span className="text-4xl font-bold text-gray-900">6h 24m</span>
						</div>
						<p className="text-sm text-gray-500">Total development time</p>
					</div>
				</div>
			</div>

			{/* Development Stats Card */}
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

			{/* Weekly Breakdown Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">This Week</p>
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<p className="text-gray-900">Monday</p>
						<div className="flex items-center gap-2">
							<div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-blue-600 rounded-full"
									style={{ width: "85%" }}
								></div>
							</div>
							<p className="text-sm text-gray-500 w-12 text-right">8h 30m</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-gray-900">Tuesday</p>
						<div className="flex items-center gap-2">
							<div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-blue-600 rounded-full"
									style={{ width: "70%" }}
								></div>
							</div>
							<p className="text-sm text-gray-500 w-12 text-right">7h 0m</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-gray-900">Wednesday</p>
						<div className="flex items-center gap-2">
							<div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-blue-600 rounded-full"
									style={{ width: "90%" }}
								></div>
							</div>
							<p className="text-sm text-gray-500 w-12 text-right">9h 15m</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-gray-900">Thursday</p>
						<div className="flex items-center gap-2">
							<div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-blue-600 rounded-full"
									style={{ width: "60%" }}
								></div>
							</div>
							<p className="text-sm text-gray-500 w-12 text-right">6h 0m</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-gray-900">Today</p>
						<div className="flex items-center gap-2">
							<div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-blue-600 rounded-full"
									style={{ width: "65%" }}
								></div>
							</div>
							<p className="text-sm text-gray-500 w-12 text-right">6h 24m</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScreenTime;
