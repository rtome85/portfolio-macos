import { useState } from "react";
import {
	Lock,
	Mail,
	User,
	Shield,
	Key,
	Globe,
	ChevronRight,
	Phone,
	MapPin,
	Linkedin,
} from "lucide-react";

const PearIdSettings = ({ goBack }) => {
	const [email] = useState("contact@robtome.com");

	const handleEmailClick = () => {
		window.open(`mailto:${email}`, "_blank");
	};

	const handleContactClick = () => {
		window.open("mailto:contact@robtome.com", "_blank");
	};

	return (
		<div>
			<h1>Pear ID & Password</h1>
			<p className="text-gray-500 mb-6">
				Manage your Pear account and contact information
			</p>

			{/* Account Info Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-3 mb-4">
					<div
						className="w-16 h-16 rounded-2xl flex items-center justify-center"
						style={{
							background: "linear-gradient(to bottom right, #0278FA, #9333ea)",
						}}
					>
						<User className="w-8 h-8 text-white" />
					</div>
					<div>
						<h2 className="text-xl font-semibold text-gray-900">
							Roberto Tomé
						</h2>
						<p className="text-sm text-gray-500">{email}</p>
					</div>
				</div>
				<div className="pt-4 border-t border-gray-200">
					<div className="flex items-center justify-between mb-3">
						<p className="text-sm text-gray-500">Account Status</p>
						<p className="text-sm font-semibold text-green-600">Active</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">Member Since</p>
						<p className="text-sm font-semibold text-gray-900">2020</p>
					</div>
				</div>
			</div>

			{/* Contact Information Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Contact Information</p>
				<div className="space-y-4">
					<div
						className="flex items-center justify-between cursor-pointer"
						onClick={handleEmailClick}
					>
						<div className="flex items-center gap-3">
							<Mail className="w-6 h-6 text-blue-600" />
							<div>
								<p className="text-gray-900 font-semibold">Email</p>
								<p className="text-xs text-gray-500">{email}</p>
							</div>
						</div>
						<ChevronRight className="w-5 h-5 text-gray-400" />
					</div>
					<div className="flex items-center justify-between border-t border-gray-200 pt-4">
						<div className="flex items-center gap-3">
							<Globe className="w-6 h-6 text-green-600" />
							<div>
								<p className="text-gray-900 font-semibold">Website</p>
								<p className="text-xs text-gray-500">robtome.com</p>
							</div>
						</div>
						<ChevronRight className="w-5 h-5 text-gray-400" />
					</div>
				</div>
			</div>

			{/* Quick Actions Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Get in Touch</p>
				<div className="space-y-3">
					<button
						onClick={handleContactClick}
						className="w-full flex items-center gap-3 p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
					>
						<Mail className="w-5 h-5" />
						<span className="font-semibold">Send Email</span>
					</button>
					<button
						onClick={() =>
							window.open("https://www.linkedin.com/in/robtome/", "_blank")
						}
						className="w-full flex items-start gap-3 p-3 rounded-2xl bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors"
					>
						<Linkedin className="w-5 h-5" />
						<span className="font-semibold">Connect on LinkedIn</span>
					</button>
				</div>
			</div>

			{/* Security & Privacy Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3 cursor-pointer">
					<div className="flex items-center gap-3">
						<Shield className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Privacy & Security</p>
							<p className="text-xs text-gray-500">Manage your data</p>
						</div>
					</div>
					<ChevronRight className="w-6 h-6 text-gray-400" />
				</div>
				<div className="flex items-center gap-2 justify-between w-full">
					<div className="flex items-center gap-3">
						<Key className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Change Password</p>
							<p className="text-xs text-gray-500">Update your credentials</p>
						</div>
					</div>
					<ChevronRight className="w-6 h-6 text-gray-400" />
				</div>
			</div>

			{/* Account Management Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-2 justify-between w-full">
					<div className="flex items-center gap-3">
						<User className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Account Settings</p>
							<p className="text-xs text-gray-500">Manage your Pear account</p>
						</div>
					</div>
					<ChevronRight className="w-6 h-6 text-gray-400" />
				</div>
			</div>
		</div>
	);
};

export default PearIdSettings;
