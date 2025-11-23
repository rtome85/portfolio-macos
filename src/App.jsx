import React from "react";
import { Dock, Navbar, Welcome } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Resume, Safari, Terminal, Finder, Text, Image } from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />

			<Terminal />
			<Safari />
			<Resume />
			<Finder />
			<Text />
			<Image />
		</main>
	);
};

export default App;
