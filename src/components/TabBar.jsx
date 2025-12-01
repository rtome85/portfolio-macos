import React from "react";

const TabBar = ({ menus }) => {
	return (
		<footer className="tab-bar">
			{menus.map(({ id, name, icon }) => (
				<li key={id}>
					<img src={icon} alt={id} />
				</li>
			))}
		</footer>
	);
};

export default TabBar;
