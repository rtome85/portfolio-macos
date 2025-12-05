import { useState } from "react";
import { Wifi, WifiOff, Lock, Check, Signal } from "lucide-react";
import { Switch } from "@headlessui/react";

const networks = [
	{
		id: 1,
		name: "Home Network",
		security: "WPA2",
		signalStrength: 4,
		connected: true,
	},
	{
		id: 2,
		name: "Coffee Shop WiFi",
		security: "Open",
		signalStrength: 3,
		connected: false,
	},
	{
		id: 3,
		name: "Neighbor's WiFi",
		security: "WPA2",
		signalStrength: 2,
		connected: false,
	},
	{
		id: 4,
		name: "Public Library",
		security: "WPA3",
		signalStrength: 1,
		connected: false,
	},
];

const WifiSettings = ({ goBack }) => {
	const [wifiEnabled, setWifiEnabled] = useState(true);
	const [connectedNetwork, setConnectedNetwork] = useState(
		networks.find((n) => n.connected) || null
	);

	const handleNetworkSelect = (network) => {
		if (network.id === connectedNetwork?.id) return;

		// Disconnect previous network
		const updatedNetworks = networks.map((n) => ({
			...n,
			connected: n.id === network.id,
		}));
		setConnectedNetwork(network);
	};

	const getSignalBars = (strength) => {
		const bars = [];
		for (let i = 0; i < 4; i++) {
			bars.push(
				<div
					key={i}
					className={`w-1 rounded-t ${
						i < strength ? "bg-gray-900 h-3" : "bg-gray-300 h-2"
					}`}
					style={{ height: `${(i + 1) * 3 + 2}px` }}
				/>
			);
		}
		return bars;
	};

	return (
		<div>
			<h1>Wi-Fi</h1>
			<p className="text-gray-500 mb-6">Manage wireless network connections</p>

			{/* WiFi Toggle Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-2 justify-between w-full">
					<div className="flex items-center gap-3">
						{wifiEnabled ? (
							<Wifi className="w-6 h-6 text-blue-600" />
						) : (
							<WifiOff className="w-6 h-6 text-gray-400" />
						)}
						<p className="text-gray-900">Wi-Fi</p>
					</div>
					<Switch
						checked={wifiEnabled}
						onChange={setWifiEnabled}
						className="group relative flex h-7 w-16 cursor-pointer rounded-full bg-white p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-[#0278FA]/10 data-focus:outline data-focus:outline-white"
					>
						<span
							aria-hidden="true"
							className="pointer-events-none inline-block h-5 w-7 translate-x-0 rounded-full bg-[#0278FA] shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
						/>
					</Switch>
				</div>
			</div>

			{/* Connected Network Card */}
			{wifiEnabled && connectedNetwork && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<p className="text-sm text-gray-500 mb-4">Connected</p>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3 flex-1">
							<div className="flex gap-0.5 items-end">
								{getSignalBars(connectedNetwork.signalStrength)}
							</div>
							<div className="flex-1">
								<p className="text-gray-900 font-semibold">
									{connectedNetwork.name}
								</p>
								<div className="flex items-center gap-2 mt-1">
									{connectedNetwork.security !== "Open" && (
										<Lock className="w-3 h-3 text-gray-400" />
									)}
									<p className="text-xs text-gray-500">
										{connectedNetwork.security}
									</p>
								</div>
							</div>
						</div>
						<Check className="w-6 h-6 text-[#0278FA]" />
					</div>
				</div>
			)}

			{/* Available Networks Card */}
			{wifiEnabled && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<p className="text-sm text-gray-500 mb-4">Networks</p>
					<div className="space-y-4">
						{networks
							.filter((n) => !n.connected)
							.map((network, index, filtered) => (
								<div
									key={network.id}
									className={`flex items-center justify-between cursor-pointer ${
										index !== filtered.length - 1
											? "border-b border-gray-200 pb-4"
											: ""
									}`}
									onClick={() => handleNetworkSelect(network)}
								>
									<div className="flex items-center gap-3 flex-1">
										<div className="flex gap-0.5 items-end">
											{getSignalBars(network.signalStrength)}
										</div>
										<div className="flex-1">
											<p className="text-gray-900">{network.name}</p>
											<div className="flex items-center gap-2 mt-1">
												{network.security !== "Open" && (
													<Lock className="w-3 h-3 text-gray-400" />
												)}
												<p className="text-xs text-gray-500">
													{network.security}
												</p>
											</div>
										</div>
									</div>
									{network.connected && (
										<Check className="w-6 h-6 text-[#0278FA]" />
									)}
								</div>
							))}
					</div>
				</div>
			)}

			{/* WiFi Disabled Message */}
			{!wifiEnabled && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<div className="text-center py-8">
						<WifiOff className="w-12 h-12 text-gray-400 mx-auto mb-3" />
						<p className="text-gray-500">Wi-Fi is turned off</p>
						<p className="text-sm text-gray-400 mt-1">
							Turn on Wi-Fi to see available networks
						</p>
					</div>
				</div>
			)}

			{/* Other Options Card */}
			{wifiEnabled && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<div className="flex items-center gap-2 justify-between w-full">
						<p className="flex gap-3 items-center">
							<Signal className="w-6 h-6 text-gray-400 inline-block" />
							Ask to Join Networks
						</p>
						<input
							type="checkbox"
							className="w-5 h-5 rounded border-gray-300 text-[#0278FA] focus:ring-[#0278FA]"
							defaultChecked
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default WifiSettings;
