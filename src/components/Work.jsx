import React, { useState } from "react";
import { WORK_EXPERIENCE } from "#constants";
import { ChevronRightIcon } from "lucide-react";

const Work = () => {
	const [openAchievementsId, setOpenAchievementsId] = useState(null);

	return (
		<section>
			<ul className="space-y-4">
				{WORK_EXPERIENCE.map((experience) => (
					<li key={experience.id}>
						<div className="bg-blue-200 p-4 rounded-lg">
							<div className="flex flex-row gap-2 items-center justify-between">
								<h3 className="text-xl font-extrabold">
									{experience.position}
								</h3>
								<img
									src={experience.logo}
									alt={experience.company}
									className="w-15 h-15 object-contain"
								/>
							</div>
							<h4 className="font-semibold">{experience.company}</h4>
							<p className="text-xs">{experience.date}</p>

							<div className="mt-4">
								<h4
									className="flex items-center justify-center gap-2 font-semibold"
									onClick={() =>
										setOpenAchievementsId(
											openAchievementsId === experience.id
												? null
												: experience.id
										)
									}
								>
									Achievements
									<ChevronRightIcon
										className={`w-4 h-4 ${
											openAchievementsId === experience.id
												? "rotate-90 transition-transform duration-200"
												: "rotate-0 transition-transform duration-200"
										}`}
									/>
								</h4>
								{openAchievementsId === experience.id && (
									<ul className="list-disc list-inside">
										{experience.achievements?.map((achievement) => (
											<li key={achievement} className=" py-2">
												{achievement}
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Work;
