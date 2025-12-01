import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { MobileControls } from "#components";
import { Search } from "lucide-react";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";

const FilesMobile = () => {
	const { openWindow } = useWindowStore();
	const { activeLocation, setActiveLocation } = useLocationStore();

	const openItem = (item) => {
		if (item.fileType === "pdf") return openWindow("resume");

		if (item.kind === "folder") return setActiveLocation(item);

		if (["fig", "url"].includes(item.fileType) && item.href)
			return window.open(item.href, "_blank");

		openWindow(`${item.fileType}${item.kind}`, item);
	};

	return (
		<>
			<div id="mobile-header">
				<MobileControls target="filesMobile" />
				<h2 className="text-lg font-bold text-center">Files</h2>
				<div className="flex items-center justify-end gap-2">
					<img src="/icons/cancel.svg" alt="Cancel" />
					<p className="text-[#0278FA]">Cancel</p>
				</div>
			</div>
			<div className="content bg-white mb-6">
				<div className="flex bg-gray-200 rounded-lg p-2">
					<Search className="icon" />
					<input type="text" placeholder="Search" className="flex-1" />
					<img src="/icons/dictation.svg" alt="Dictation" />
				</div>
			</div>

			<section className="content">
				<ul className="grid grid-cols-3 gap-4 px-4">
					{activeLocation?.children.map((item) => (
						<li
							key={item.id}
							// className={`cursor-pointer ${item.position}`}
							onClick={() => openItem(item)}
						>
							<img src={item.icon} alt={item.name} className="h-18" />
							<p>{item.name}</p>
						</li>
					))}
				</ul>
			</section>
			<footer className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-40 p-4 border-t border-gray-200">
				<div className="flex flex-col items-center gap-2">
					<img src="/icons/browse.svg" alt="Cancel" />
					<p className="text-[#007BFE] text-sm">Browse</p>
				</div>
				<div className="flex flex-col items-center gap-2">
					<img src="/icons/recent.svg" alt="Recent" />
					<p className="text-gray-400 text-sm">Recent</p>
				</div>
			</footer>
		</>
	);
};

const FilesMobileWindow = MobileWindowWrapper(FilesMobile, "filesMobile");
export default FilesMobileWindow;
