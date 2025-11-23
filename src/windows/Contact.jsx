import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { socials } from "#constants";

const Contact = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="contact" />
				<h2>Contact Me</h2>
			</div>
			<div className="p-5 space-y-5">
				<img
					src="/images/adrian.jpg"
					alt="Roberto"
					className="w-20 rounded-full"
				/>
				<h3>Let's Connect</h3>
				<p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
				<p>
					<a href="mailto:contact@robtome.com">contact@robtome.com</a>
				</p>
				<ul>
					{socials.map(({ id, text, icon, bg, link }) => (
						<li key={id} style={{ backgroundColor: bg }}>
							<a href={link} target="_blank" rel="noopener noreferrer">
								<img src={icon} alt={text} className="size-5" />
								<p>{text}</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
