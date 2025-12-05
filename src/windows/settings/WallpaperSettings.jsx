import { useState } from "react";
import { Check } from "lucide-react";

const wallpapers = [
	{ id: 1, src: "/images/wallpaper.png", name: "Default" },
	{ id: 2, src: "/images/wallpaper2.jpg", name: "Mountains" },
	// Add more wallpapers as needed
];

const WallpaperSettings = ({ goBack }) => {
	const [selected, setSelected] = useState(1);

	const handleSelect = (id) => {
		setSelected(id);
		// Optionally: save to localStorage or global state
	};

	return (
		<div>
			<h1>Wallpaper</h1>
			<p className="text-gray-500 mb-6">
				Choose a wallpaper for your home screen
			</p>

			<div className="grid grid-cols-2 gap-4">
				{wallpapers.map((wp) => (
					<div
						key={wp.id}
						className={`relative rounded-2xl overflow-hidden cursor-pointer border-4 ${
							selected === wp.id ? "border-[#0278FA]" : "border-transparent"
						}`}
						onClick={() => handleSelect(wp.id)}
					>
						<img
							src={wp.src}
							alt={wp.name}
							className="w-full h-32 object-cover"
						/>
						{selected === wp.id && (
							<div className="absolute bottom-2 right-2 bg-[#0278FA] rounded-full p-1">
								<Check className="w-4 h-4 text-white" />
							</div>
						)}
						<p className="text-center py-2 text-sm">{wp.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WallpaperSettings;
