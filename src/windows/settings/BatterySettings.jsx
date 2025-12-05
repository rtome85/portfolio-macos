import { useState, useEffect } from "react";
import { Battery, Coffee, Zap, Power } from "lucide-react";

const BatterySettings = ({ goBack }) => {
	const [energy, setEnergy] = useState(100);
	const [isCharging, setIsCharging] = useState(false);

	useEffect(() => {
		// Simulate energy level (could be dynamic in a real app)
		// For now, keep it at 100% but you could add logic to decrease over time
		setEnergy(100);
	}, []);

	const getBatteryColor = () => {
		if (energy >= 80) return "#10b981"; // Green
		if (energy >= 50) return "#f59e0b"; // Amber
		if (energy >= 20) return "#ef4444"; // Red
		return "#dc2626"; // Dark red
	};

	return (
		<div>
			<h1>Battery</h1>
			<p className="text-gray-500 mb-6">Energy status and power information</p>

			{/* Energy Display Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center justify-center mb-6">
					{/* Battery Icon */}
					<div className="relative">
						{/* Battery Container */}
						<div className="w-32 h-16 rounded-lg border-4 border-gray-900 relative overflow-hidden">
							{/* Battery Fill */}
							<div
								className="absolute inset-y-0 left-0 transition-all duration-500 ease-out"
								style={{
									width: `${energy}%`,
									backgroundColor: getBatteryColor(),
								}}
							/>
							{/* Energy Percentage Text */}
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-2xl font-bold text-gray-900 z-10">
									{energy}%
								</span>
							</div>
						</div>
						{/* Battery Terminal */}
						<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-gray-900 rounded-r"></div>
					</div>
				</div>

				{/* Energy Info */}
				<div className="pt-4 border-t border-gray-200">
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center gap-3">
							<Coffee className="w-6 h-6 text-amber-600" />
							<p className="text-gray-900">Energy</p>
						</div>
						<p className="text-sm font-semibold text-gray-900">
							{energy}% ☕ Coffee-Powered
						</p>
					</div>
				</div>
			</div>

			{/* Battery Stats Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Battery Information</p>
				<div className="space-y-4">
					<div className="flex items-center justify-between border-b border-gray-200 pb-4">
						<div className="flex items-center gap-3">
							<Zap className="w-6 h-6 text-green-600" />
							<p className="text-gray-900">Status</p>
						</div>
						<p className="text-sm font-semibold text-green-600">
							{isCharging ? "Charging" : "Fully Charged"}
						</p>
					</div>
					<div className="flex items-center justify-between border-b border-gray-200 pb-4">
						<div className="flex items-center gap-3">
							<Battery className="w-6 h-6 text-blue-600" />
							<p className="text-gray-900">Health</p>
						</div>
						<p className="text-sm font-semibold text-blue-600">Maximum</p>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<Coffee className="w-6 h-6 text-amber-600" />
							<p className="text-gray-900">Last Caffeinated</p>
						</div>
						<p className="text-sm font-semibold text-amber-600">Just now</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BatterySettings;
