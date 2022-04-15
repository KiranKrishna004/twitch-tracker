/** @format */

import Entries from "./Entries";
const Display = () => {
	return (
		<div className='flex justify-center sm:w-full text-center bg-gray-900'>
			<div className='col-span-12 '>
				<table className='table text-gray-400 sm:w-full md:w-1/2 lg:w-2/5 space-y-6 justify-center border-separate'>
					<thead className='bg-gray-800 text-gray-100'>
						<tr>
							<th className='text-sm font-medium py-3'>Name</th>
							<th className='text-sm font-medium py-3'>Game</th>
							<th className='text-sm font-medium py-3 px-7'>Currently Live</th>
						</tr>
					</thead>
					<tbody>
						<Entries />
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Display;
