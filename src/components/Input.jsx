/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Input = () => {
	const [value, setValue] = useState("");
	const channel = useSelector((state) => state.channel.channel);

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "GETN", payload: value });
	};
	return (
		<div className='w-full flex items-center justify-center'>
			<div className='bg-gray-800 py-4 px-16 my-3 rounded-lg shadow-2xl'>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center justify-center pt-5'>
					<input
						className='p-2 rounded-lg bg-gray-100 border-transparent focus:outline-nonefocus:border-transparent focus:ring-0'
						type='text'
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<button className='border-2 border-gray-500 mt-4 rounded-lg inline-block px-4 py-1.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</button>
				</form>
			</div>
		</div>
	);
};
export default Input;
