import { WindowControls } from "#components";
import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
	const { windows } = useWindowStore();
	const data = windows.txtfile?.data;

	if (!data) return null;

	const { name, image, subtitle, description } = data;

	return (
		<>
			<div id="window-header">
				<WindowControls target="txtfile" />
				<h2>{name}</h2>
			</div>
			<div className="bg-white p-6 h-full overflow-y-auto">
				{image && (
					<div className="mb-4 flex justify-center">
						<img src={image} alt={name} className="max-w-full h-auto" />
					</div>
				)}
				{subtitle && (
					<p className="text-sm text-gray-600 mb-4 font-medium">{subtitle}</p>
				)}
				{description && Array.isArray(description) && (
					<div className="space-y-4">
						{description.map((paragraph, index) => (
							<p key={index} className="text-sm text-gray-800 leading-relaxed">
								{paragraph}
							</p>
						))}
					</div>
				)}
			</div>
		</>
	);
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
