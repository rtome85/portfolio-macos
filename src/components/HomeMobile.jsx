import React from "react";
import { homeMobileApps } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const HomeMobile = () => {
	const { openWindow } = useWindowStore();
	const { activeLocation, setActiveLocation } = useLocationStore();
	const apps = homeMobileApps;

	const handleOpenProjectFinder = (app) => {
		if (app.id === "linkedin")
			return window.open("https://www.linkedin.com/in/robtome/", "_blank");
		if (app.id === "notes") return openWindow("resume");
		if (app.id === "mail")
			return window.open("mailto:contact@robtome.com", "_blank");
		if (app.id === "teams")
			return window.open("https://teams.microsoft.com/", "_blank");
		if (app.id === "filesMobile") return openWindow("filesMobile");
		if (app.id === "github")
			return window.open("https://github.com/rtome85", "_blank");
		if (app.id === "settings") return openWindow("settings");
		if (app.id === "aboutMobile") return openWindow("aboutMobile");
		if (app.id === "blog")
			return window.open("https://robtome.com/blog", "_blank");
		if (app.id === "resumeMobile") return openWindow("resumeMobile");
	};

	return (
		<section id="home-mobile">
			<ul className="grid grid-cols-4 gap-4">
				{apps.map((app) => (
					<li
						key={app.id}
						className="flex items-center gap-2"
						onClick={() => handleOpenProjectFinder(app)}
					>
						<div className="flex flex-col items-center gap-2">
							<img src={app.icon} alt={app.name} className="w-16 h-16" />
							<p className="text-sm text-white">{app.name}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default HomeMobile;
