/** @format */

import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Input from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import Display from "./components/Display";
import Header from "./components/Header";
const App = () => {
	const name = useSelector(({ name }) => name.name);
	const channel = useSelector((state) => state.channel.channel);
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get(`https://api.twitch.tv/helix/search/channels?query=${name}`, {
				headers: {
					"Client-ID": `${secrets.CREDIT_ID}`,
					Authorization: `${secrets.AUTH}`,
				},
			})
			.then((response) => {
				dispatch({ type: "GETC", payload: response.data });
			})
			.catch((e) => console.log(e.response.status));
	}, [name]);
	return (
		<>
			{channel.length === 0 ? (
				<></>
			) : (
				<div className='bg-gray-900'>
					<Header />
					<Input />
					<Display />
				</div>
			)}
		</>
	);
};

export default App;
