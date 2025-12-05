import { useState } from "react";
import {
	Bluetooth,
	BluetoothOff,
	Check,
	Headphones,
	Speaker,
	Keyboard,
	Mouse,
} from "lucide-react";
import { Switch } from "@headlessui/react";

const devices = [
	{
		id: 1,
		name: "AirPods Pro",
		type: "headphones",
		connected: true,
		battery: 85,
	},
	{
		id: 2,
		name: "Magic Keyboard",
		type: "keyboard",
		connected: true,
		battery: 92,
	},
	{
		id: 3,
		name: "HomePod Mini",
		type: "speaker",
		connected: false,
		battery: null,
	},
	{
		id: 4,
		name: "Magic Mouse",
		type: "mouse",
		connected: false,
		battery: null,
	},
	{
		id: 5,
		name: "Sony WH-1000XM4",
		type: "headphones",
		connected: false,
		battery: null,
	},
];

const getDeviceIcon = (type) => {
	switch (type) {
		case "headphones":
			return Headphones;
		case "speaker":
			return Speaker;
		case "keyboard":
			return Keyboard;
		case "mouse":
			return Mouse;
		default:
			return Bluetooth;
	}
};

const BluetoothSettings = ({ goBack }) => {
	const [bluetoothEnabled, setBluetoothEnabled] = useState(true);
	const [connectedDevices, setConnectedDevices] = useState(
		devices.filter((d) => d.connected)
	);

	const handleDeviceToggle = (device) => {
		if (device.connected) {
			// Disconnect
			setConnectedDevices(connectedDevices.filter((d) => d.id !== device.id));
		} else {
			// Connect
			setConnectedDevices([...connectedDevices, device]);
		}
	};

	const getBatteryColor = (battery) => {
		if (battery >= 50) return "text-green-600";
		if (battery >= 20) return "text-amber-600";
		return "text-red-600";
	};

	return (
		<div>
			<h1>Bluetooth</h1>
			<p className="text-gray-500 mb-6">
				Manage Bluetooth devices and connections
			</p>

			{/* Bluetooth Toggle Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-2 justify-between w-full">
					<div className="flex items-center gap-3">
						{bluetoothEnabled ? (
							<Bluetooth className="w-6 h-6 text-blue-600" />
						) : (
							<BluetoothOff className="w-6 h-6 text-gray-400" />
						)}
						<p className="text-gray-900">Bluetooth</p>
					</div>
					<Switch
						checked={bluetoothEnabled}
						onChange={setBluetoothEnabled}
						className="group relative flex h-7 w-16 cursor-pointer rounded-full bg-white p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-[#0278FA]/10 data-focus:outline data-focus:outline-white"
					>
						<span
							aria-hidden="true"
							className="pointer-events-none inline-block h-5 w-7 translate-x-0 rounded-full bg-[#0278FA] shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
						/>
					</Switch>
				</div>
			</div>

			{/* Connected Devices Card */}
			{bluetoothEnabled && connectedDevices.length > 0 && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<p className="text-sm text-gray-500 mb-4">My Devices</p>
					<div className="space-y-4">
						{devices
							.filter((d) => connectedDevices.some((cd) => cd.id === d.id))
							.map((device, index, filtered) => {
								const Icon = getDeviceIcon(device.type);
								return (
									<div
										key={device.id}
										className={`flex items-center justify-between ${
											index !== filtered.length - 1
												? "border-b border-gray-200 pb-4"
												: ""
										}`}
									>
										<div className="flex items-center gap-3 flex-1">
											<Icon className="w-6 h-6 text-blue-600" />
											<div className="flex-1">
												<p className="text-gray-900 font-semibold">
													{device.name}
												</p>
												{device.battery !== null && (
													<p
														className={`text-xs mt-1 ${getBatteryColor(
															device.battery
														)}`}
													>
														{device.battery}% battery
													</p>
												)}
											</div>
										</div>
										<Check className="w-6 h-6 text-[#0278FA]" />
									</div>
								);
							})}
					</div>
				</div>
			)}

			{/* Other Devices Card */}
			{bluetoothEnabled && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<p className="text-sm text-gray-500 mb-4">Other Devices</p>
					<div className="space-y-4">
						{devices
							.filter((d) => !connectedDevices.some((cd) => cd.id === d.id))
							.map((device, index, filtered) => {
								const Icon = getDeviceIcon(device.type);
								return (
									<div
										key={device.id}
										className={`flex items-center justify-between cursor-pointer ${
											index !== filtered.length - 1
												? "border-b border-gray-200 pb-4"
												: ""
										}`}
										onClick={() => handleDeviceToggle(device)}
									>
										<div className="flex items-center gap-3 flex-1">
											<Icon className="w-6 h-6 text-gray-400" />
											<div className="flex-1">
												<p className="text-gray-900">{device.name}</p>
												<p className="text-xs text-gray-500 mt-1">
													Tap to connect
												</p>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			)}

			{/* Bluetooth Disabled Message */}
			{!bluetoothEnabled && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<div className="text-center py-8">
						<BluetoothOff className="w-12 h-12 text-gray-400 mx-auto mb-3" />
						<p className="text-gray-500">Bluetooth is turned off</p>
						<p className="text-sm text-gray-400 mt-1">
							Turn on Bluetooth to connect devices
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default BluetoothSettings;
