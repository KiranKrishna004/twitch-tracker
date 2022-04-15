/** @format */
import { useSelector } from "react-redux";
const Entries = () => {
	const channel = useSelector((state) => state.channel.channel.data);
	console.log(channel);
	return (
		<>
			{channel.map((item, index) => {
				return (
					<tr className='bg-gray-800 w-full border-b' key={index}>
						<td className='w-full items-center py-4 font-medium'>
							<img
								className='inline object-cover w-16 h-16 mr-2'
								src={item.thumbnail_url}
							/>
							<div className='py-2 text-center'>{item.display_name} </div>
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
							{item.game_name.toUpperCase()}
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{`${
							item.is_live ? "Yes" : "No"
						}`}</td>
					</tr>
				);
			})}
		</>
	);
};
export default Entries;
