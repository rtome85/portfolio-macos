import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { MobileControls } from "#components";
import { socials } from "#constants";

const ContactMobile = () => {
	return (
		<>
			<div id="mobile-header">
				<MobileControls target="contactMobile" />
				<h2 className="text-lg font-bold text-center">Contact</h2>
			</div>
			<div className="p-5 space-y-10">
				<div className="flex gap-5">
					<img
						src="/images/headshot.webp"
						alt="Roberto"
						className="w-30 rounded-full"
					/>
					<div>
						<h3 className="mb-5">Let's Connect!</h3>
						<p className="mb-2">
							Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
						</p>
					</div>
				</div>
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

const ContactMobileWindow = MobileWindowWrapper(ContactMobile, "contactMobile");

export default ContactMobileWindow;
