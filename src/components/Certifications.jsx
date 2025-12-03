import React from "react";
import { certifications } from "#constants";
import { DownloadIcon } from "lucide-react";

const Certifications = () => {
	return (
		<section className="certifications">
			<ul className="space-y-4 ">
				{certifications.map((certification) => (
					<li
						key={certification.name}
						className="flex items-center justify-between bg-indigo-200 p-4 rounded-md"
					>
						<div className="flex flex-col gap-2 w-full">
							<h3>{certification.name}</h3>
							<div className="flex flex-row gap-2 items-start justify-between">
								<div className="flex flex-col gap-1">
									<p className="font-semibold">
										{certification.organization} | {certification.date}
									</p>
									<p className="text-xs">{certification.hours} hours</p>
								</div>
								<img
									src={certification.icon}
									alt={certification.name}
									className="w-10 h-10 object-contain rounded-none"
								/>
							</div>

							<a
								href={certification.certificate}
								download
								className="text-xs text-indigo-900 font-bold tracking-wide flex flex-row items-center justify-start gap-2"
							>
								Download Certificate
								<DownloadIcon className="w-4 h-4 text-indigo-900 inline-block" />
							</a>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Certifications;
