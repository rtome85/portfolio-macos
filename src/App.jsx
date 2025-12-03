import React from "react";
import { Dock, Home, HomeMobile, Navbar, Welcome } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {
	Resume,
	Safari,
	Terminal,
	Finder,
	Text,
	Image,
	Contact,
	TerminalMobile,
	FilesMobile,
	SafariMobile,
	ContactMobile,
	AboutMobile,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />

			<Terminal />
			<TerminalMobile />
			<Safari />
			<FilesMobile />
			<Resume />
			<Finder />
			<Text />
			<Image />
			<Contact />
			<AboutMobile />
			<SafariMobile />
			<ContactMobile />
			<Home />
			<HomeMobile />
		</main>
	);
};

export default App;
