import React from "react";
import { Dock, Home, Navbar, Welcome } from "#components";
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
			<Resume />
			<Finder />
			<Text />
			<Image />
			<Contact />

			<Home />
		</main>
	);
};

export default App;
