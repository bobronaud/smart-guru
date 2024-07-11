import React, { useState } from 'react';
import classes from './Bell.module.scss';
const Bell: React.FC = () => {
	const [dot, setDot] = useState(true);
	const handleclick2 = () => {
		console.log(dot);
		setDot(!dot);
	};
	const [newNotifications, setNewNotifications] = useState(false);
	const handkeclick3 = () => {
		setNewNotifications(!newNotifications);
	};
	return (
		<button
			className={`${classes.bellBtn} ${newNotifications && classes.active}`}
			onClick={() => {
				handleclick2();
				handkeclick3();
			}}
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5.82474 13.934L5.09976 13.2452L5.82474 13.934ZM8 9C8 6.79086 9.79086 5 12 5V3C8.68629 3 6 5.68629 6 9H8ZM8 11.7564V9H6V11.7564H8ZM6 16C6 15.4658 6.20812 14.9823 6.54971 14.6228L5.09976 13.2452C4.41915 13.9616 4 14.9329 4 16H6ZM7 16H6V18H7V16ZM17 16H7V18H17V16ZM18 16H17V18H18V16ZM17.4503 14.6228C17.7919 14.9823 18 15.4658 18 16H20C20 14.9329 19.5809 13.9616 18.9002 13.2452L17.4503 14.6228ZM16 9V11.7564H18V9H16ZM12 5C14.2091 5 16 6.79086 16 9H18C18 5.68629 15.3137 3 12 3V5ZM18.9002 13.2452C18.2923 12.6054 18 12.1579 18 11.7564H16C16 13.05 16.8905 14.0336 17.4503 14.6228L18.9002 13.2452ZM4 16C4 17.1046 4.89543 18 6 18V16H4ZM18 18C19.1046 18 20 17.1046 20 16H18V18ZM6 11.7564C6 12.1579 5.70766 12.6054 5.09976 13.2452L6.54971 14.6228C7.10947 14.0336 8 13.05 8 11.7564H6Z'
					fill='#292929'
				/>
				<path
					d='M13.7976 19.8767C13.6312 20.2179 13.3712 20.5046 13.048 20.7035C12.7247 20.9023 12.3516 21.0051 11.9721 20.9998C11.5926 20.9945 11.2224 20.8813 10.9049 20.6735C10.5873 20.4657 10.3354 20.1718 10.1786 19.8262'
					stroke='#292929'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 3V4'
					stroke='#292929'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			{dot && <span className={classes.dot}></span>}
		</button>
	);
};

export default Bell;
