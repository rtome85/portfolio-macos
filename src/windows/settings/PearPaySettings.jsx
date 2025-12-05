import { useState } from "react";
import {
	CreditCard,
	DollarSign,
	Mail,
	Calendar,
	Code,
	Globe,
	ChevronRight,
	Linkedin,
} from "lucide-react";

const services = [
	{
		id: 1,
		name: "Frontend Development",
		rate: "$75/hour",
		description: "React, Vue, Next.js, TypeScript",
		icon: Code,
		color: "text-blue-600",
	},
	{
		id: 2,
		name: "Full-Stack Development",
		rate: "$90/hour",
		description: "End-to-end web applications",
		icon: Globe,
		color: "text-green-600",
	},
	{
		id: 3,
		name: "Consulting",
		rate: "$100/hour",
		description: "Technical architecture & strategy",
		icon: Calendar,
		color: "text-purple-600",
	},
];

const PearPaySettings = ({ goBack }) => {
	const [selectedService, setSelectedService] = useState(null);

	const handleHireClick = (service) => {
		// Open email client with pre-filled subject
		const subject = encodeURIComponent(`Freelance Inquiry: ${service.name}`);
		const body = encodeURIComponent(
			`Hi Roberto,\n\nI'm interested in hiring you for ${service.name} at ${service.rate}.\n\nBest regards`
		);
		window.open(`mailto:contact@robtome.com?subject=${subject}&body=${body}`);
	};

	return (
		<div>
			<h1>PearPay & Wallet</h1>
			<p className="text-gray-500 mb-6">
				Freelance rates and hiring information
			</p>

			{/* Wallet Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-3 mb-4">
					<div
						className="w-16 h-16 rounded-2xl flex items-center justify-center"
						style={{
							background: "linear-gradient(to bottom right, #0278FA, #10b981)",
						}}
					>
						<CreditCard className="w-8 h-8 text-white" />
					</div>
					<div>
						<h2 className="text-xl font-semibold text-gray-900">PearPay</h2>
						<p className="text-sm text-gray-500">Available for hire</p>
					</div>
				</div>
				<div className="pt-4 border-t border-gray-200">
					<div className="flex items-center justify-between mb-3">
						<p className="text-sm text-gray-500">Status</p>
						<p className="text-sm font-semibold text-green-600">Available</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">Payment Methods</p>
						<p className="text-sm font-semibold text-gray-900">
							PayPal, Bank Transfer
						</p>
					</div>
				</div>
			</div>

			{/* Services & Rates Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Services & Rates</p>
				<div className="space-y-4">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={service.id}
								className={`flex items-center justify-between cursor-pointer ${
									index !== services.length - 1
										? "border-b border-gray-200 pb-4"
										: ""
								}`}
								onClick={() => handleHireClick(service)}
							>
								<div className="flex items-center gap-3 flex-1">
									<Icon className={`w-6 h-6 ${service.color} inline-block`} />
									<div className="flex-1">
										<p className="text-gray-900 font-semibold">
											{service.name}
										</p>
										<p className="text-xs text-gray-500 mt-1">
											{service.description}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<p className={`font-semibold ${service.color}`}>
										{service.rate}
									</p>
									<ChevronRight className="w-5 h-5 text-gray-400" />
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Quick Actions Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<p className="text-sm text-gray-500 mb-4">Hire Me</p>
				<div className="space-y-3">
					<button
						onClick={() => window.open("mailto:contact@robtome.com", "_blank")}
						className="w-full flex items-center gap-3 p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
					>
						<Mail className="w-5 h-5" />
						<span className="font-semibold">Send Email Inquiry</span>
					</button>
					<button
						onClick={() =>
							window.open("https://www.linkedin.com/in/robtome/", "_blank")
						}
						className="w-full flex items-start gap-3 p-3 rounded-2xl bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors"
					>
						<Linkedin className="w-5 h-5" />
						<span className="font-semibold">View LinkedIn Profile</span>
					</button>
				</div>
			</div>

			{/* Payment Info Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				<div className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3">
					<div className="flex items-center gap-3">
						<DollarSign className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Payment Terms</p>
							<p className="text-xs text-gray-500">Net 30, 50% upfront</p>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-2 justify-between w-full">
					<div className="flex items-center gap-3">
						<Calendar className="w-6 h-6 text-gray-400 inline-block" />
						<div>
							<p className="text-gray-900">Availability</p>
							<p className="text-xs text-gray-500">20-30 hours/week</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PearPaySettings;
