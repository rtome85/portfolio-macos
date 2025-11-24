import useWindowStore from "#store/window";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import React from "react";

const MobileControls = ({ target }) => {
	const { closeWindow } = useWindowStore();

	return (
		<div
			className="flex cursor-pointer"
			role="button"
			onClick={() => closeWindow(target)}
		>
			<ChevronLeft className="text-blue-400" />
			<p className="text-blue-400">Go Back</p>
		</div>
	);
};

export default MobileControls;
