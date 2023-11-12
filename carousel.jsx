import React, { useState } from 'react';
import { useVelosatyContextApp } from '../../../contexts/context';
import ChevronRightIcon from '../../../public/icons/outline/32px/chevronRight.32px.outline.icon.svg';
import ChevronLeftIcon from '../../../public/icons/outline/32px/chevronLeft.32px.outline.icon.svg';

const Card2 = () => {
	// Fetch sample college data from the context
	const { SampleCollegeData } = useVelosatyContextApp();

	// State to keep track of the current slide index
	const [current, setCurrent] = useState(0);

	// Calculate the length of the sample college data
	const length = SampleCollegeData.length;

	// Function to move to the next slide
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	// Function to move to the previous slide
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	// If sample college data is not an array or is empty, return null
	if (!Array.isArray(SampleCollegeData) || SampleCollegeData.length <= 0) {
		return null;
	}

	// CSS class variables for styling
	// May need to take out Hover from cardstyle
	
	const cardStyle = "m-[2vw] w-[40vw] md:m-[1vw] md:w-[20vw] bg-white rounded-xl shadow-md flex flex-col relative transform transition-all duration-200 scale-100 hover:scale-150 hover:z-1 hover:flex-grow hover:flex cursor-pointer place-content-end";
	const textContainerStyle = "grid place-items-center text-center";
	const iconStyle = "absolute top-[50%] text-white/70 cursor-pointer select-none z-[2]";

	return (
		<div className="bg-yellow-1 w-[100vw] h-[100vw] md:w-[50vw] md:h-[50vw] flex flex-wrap relative justify-center items-center">
			<div className="flex w-[95vw] h-[40vw] md:w-[47.5vw] md:h-[20vw] ">

				{SampleCollegeData.map((item, index) => (
					<div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
						{/* Left arrow icon to navigate to the previous slide */}
						<ChevronLeftIcon onClick={prevSlide} className={`${iconStyle} left-[30px]`} size={50} />

						{/* Card containing information about the college */}
						<div key={item.id} className={cardStyle}>
							{item.img && (
								<div className="grid place-items-center">
									{/* College logo */}
									<img
										src={item.img}
										alt="College Data"
										className="absolute w-[12vw] top-[6vw] md:w-[6vw] md:top-[3vw]"
									/>
								</div>
							)}
							<div className={textContainerStyle}>
								{/* College name */}
								<p className="absolute font-bold text-[1.8vw] top-[14vw] mx-[1vw] md:text-[.9vw] md:top-[7vw] md:mx-[.5vw]">
									{item.schoolName}
								</p>
								{/* Acceptance rate */}
								<p className="absolute text-[1.6vw] top-[20vw] mx-[1vw] md:text-[.8vw] md:top-[10vw] md:mx-[.5vw] mt-[2vw] md:mt-[1vw]">
									Acceptance Rate: <span className="text-greenText1">{item.acceptanceRate}</span>
								</p>
								{/* Application fee */}
								<p className="absolute text-[1.6vw] top-[26vw] mx-[1vw] md:text-[.8vw] md:top-[13vw] md:mx-[.5vw] mt-[1vw] md:mt-[.5vw]">
									Application Fee: <span className="text-greenText1">{item.applicationFee}</span>
								</p>
								{/* Deadline */}
								<p className="absolute text-[1.6vw] top-[32vw] mx-[1vw] md:text-[.8vw] md:top-[16vw] md:mx-[.5vw]">
									Deadline: <span className="text-greenText3">{item.deadline}</span>
								</p>
							</div>
						</div>

						{/* Right arrow icon to navigate to the next slide */}
						<ChevronRightIcon onClick={nextSlide} className={`${iconStyle} right-[30px]`} size={50} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Card2;
