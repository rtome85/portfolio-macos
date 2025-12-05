import { useEffect, useState } from "react";
import { Type } from "lucide-react";
import { Switch } from "@headlessui/react";

const TextSettings = ({ goBack }) => {
	const [textSize, setTextSize] = useState(() => {
		const savedSize = localStorage.getItem("textSize");
		return savedSize ? Number(savedSize) : 100;
	});

	//Convert slider value to percentage (80% to 130%)
	const fontSizePercentage = 80 + (textSize / 100) * 50; // Range: 80% to 130%
	const fontSizeScale = 0.8 + (textSize / 100) * 0.5; // Range: 0.8 to 1.3
	const fontSize = `${fontSizeScale}rem`;

	const handleChange = (e) => {
		const value = Number(e.target.value);
		setTextSize(value);

		//Update root font size - affects all rem units in the app
		const percent = 80 + (value / 100) * 50;
		document.documentElement.style.fontSize = `${percent}%`;

		//Persist to localStorage
		localStorage.setItem("textSize", value);
	};

	//Apply on mount (if saved to localStorage)
	useEffect(() => {
		document.documentElement.style.fontSize = `${fontSizePercentage}%`;
	}, []);

	return (
		<div>
			<h1>Text Size</h1>
			<p className="text-gray-500 mb-6">
				Adjust the text size for better readability
			</p>

			{/* Text Size Slider Card */}
			<div className="p-4 rounded-3xl bg-gray-50 mb-6">
				{/* Slider Container */}
				<div className="flex items-center gap-4 mb-6">
					{/* Small A */}
					<span
						className="text-gray-400 font-semibold"
						style={{ fontSize: "1rem" }}
					>
						A
					</span>

					{/* Slider */}
					<div className="flex-1 relative">
						<input
							type="range"
							min="0"
							max="100"
							value={textSize}
							onChange={handleChange}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-size-slider"
							style={{
								background: `linear-gradient(to right, #0278FA 0%, #0278FA ${textSize}%, #e5e7eb ${textSize}%, #e5e7eb 100%)`,
							}}
						/>
					</div>

					{/* Large A */}
					<span
						className="text-gray-400 font-semibold"
						style={{ fontSize: "1.5rem" }}
					>
						A
					</span>
				</div>

				{/* Preview Text */}
				<div className="pt-4 border-t border-gray-200">
					<p className="text-gray-500 text-sm mb-2">Preview</p>
					<p
						className="text-gray-900 leading-relaxed"
						style={{ fontSize: fontSize }}
					>
						This is how text will appear at the selected size. You can adjust
						the slider to make text larger or smaller for better readability.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TextSettings;
