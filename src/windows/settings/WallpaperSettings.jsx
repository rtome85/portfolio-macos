import { useState } from "react";
import { Check } from "lucide-react";
import useWallpaperStore from "#store/wallpaper";

const wallpapers = [
	{ id: 1, src: "/images/wallpaper2.jpg", name: "Default" },
	{ id: 2, src: "/images/wallpaper.png", name: "Blue Sky" },
	{ id: 3, src: "/images/wallpaper3.jpeg", name: "Forest" },
	{ id: 4, src: "/images/wallpaper4.webp", name: "City" },
	{ id: 5, src: "/images/wallpaper5.webp", name: "Beach" },
];

const WallpaperSettings = ({ goBack }) => {
	// const [selected, setSelected] = useState(1);
	const { selectedWallpaperId, setWallpaper, wallpapers } = useWallpaperStore();

	console.log(selectedWallpaperId);

	const handleSelect = (id) => {
		// setSelected(id);
		setWallpaper(id);
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
							selectedWallpaperId === wp.id
								? "border-[#0278FA]"
								: "border-transparent"
						}`}
						onClick={() => handleSelect(wp.id)}
					>
						<img
							src={wp.src}
							alt={wp.name}
							className="w-full h-32 object-cover"
						/>
						{selectedWallpaperId === wp.id && (
							<div className="absolute bottom-2 right-2 bg-[#0278FA] rounded-full p-1">
								<Check className="w-4 h-4 text-white" />
							</div>
						)}
						<p className="text-center py-3 text-sm bg-gray-100 rounded-b-xl">
							{wp.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WallpaperSettings;
