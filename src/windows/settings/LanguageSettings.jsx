import { useState, useEffect } from "react";
import { Check, Globe } from "lucide-react";

const languages = [
	{ code: "en", name: "English", nativeName: "English" },
	{ code: "es", name: "Spanish", nativeName: "Español" },
	{ code: "fr", name: "French", nativeName: "Français" },
	{ code: "de", name: "German", nativeName: "Deutsch" },
	{ code: "it", name: "Italian", nativeName: "Italiano" },
	{ code: "pt", name: "Portuguese", nativeName: "Português" },
	{ code: "zh", name: "Chinese", nativeName: "中文" },
	{ code: "ja", name: "Japanese", nativeName: "日本語" },
	{ code: "ko", name: "Korean", nativeName: "한국어" },
	{ code: "ar", name: "Arabic", nativeName: "العربية" },
];

const LanguageSettings = ({ goBack }) => {
	const [selectedLanguage, setSelectedLanguage] = useState(() => {
		const saved = localStorage.getItem("language");
		return saved || "en";
	});

	useEffect(() => {
		// Load saved language preference on mount
		const saved = localStorage.getItem("language");
		if (saved) {
			setSelectedLanguage(saved);
		}
	}, []);

	const handleSelect = (code) => {
		setSelectedLanguage(code);
		localStorage.setItem("language", code);
		// Optionally: trigger language change in your app
		// i18n.changeLanguage(code);
	};

	const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

	return (
		<div>
			<h1>Language</h1>
			<p className="text-gray-500 mb-6">
				Select your preferred language for the interface
			</p>

			{/* Language List Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				{languages.map((language, index) => (
					<div
						key={language.code}
						className={`flex items-center gap-2 justify-between w-full cursor-pointer ${
							index !== languages.length - 1
								? "border-b border-gray-200 pb-3 mb-3"
								: ""
						}`}
						onClick={() => handleSelect(language.code)}
					>
						<div className="flex items-center gap-3">
							<Globe className="w-6 h-6 text-gray-400 inline-block" />
							<div>
								<p className="text-gray-900">{language.name}</p>
								<p className="text-sm text-gray-500">{language.nativeName}</p>
							</div>
						</div>
						{selectedLanguage === language.code && (
							<Check className="w-6 h-6 text-[#0278FA]" />
						)}
					</div>
				))}
			</div>

			{/* Current Selection Info */}
			{selectedLang && (
				<div className="p-4 rounded-3xl bg-gray-50 mb-6">
					<p className="text-sm text-gray-500 mb-2">Current Language</p>
					<p className="text-lg font-semibold text-gray-900">
						{selectedLang.name} ({selectedLang.nativeName})
					</p>
				</div>
			)}
		</div>
	);
};

export default LanguageSettings;
