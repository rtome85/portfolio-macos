import useWindowStore from "#store/window";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import React from "react";
import useLocationStore from "#store/location";
import { locations } from "#constants";

const MobileControls = ({ target }) => {
	const { closeWindow } = useWindowStore();
	const { activeLocation, setActiveLocation } = useLocationStore();

	const handleGoBack = () => {
		if (activeLocation.type === "project") {
			setActiveLocation(locations.work);
		}
		if (activeLocation.type === "work") {
			closeWindow(target);
		}
	};

	return (
		<div className="flex cursor-pointer" role="button" onClick={handleGoBack}>
			<ChevronLeft className="text-[#0278FA]" />
			<p className="text-[#0278FA]">Go Back</p>
		</div>
	);
};

export default MobileControls;
