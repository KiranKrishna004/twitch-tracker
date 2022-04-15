/** @format */

import { combineReducers } from "redux";
import channelReducer from "./channelReducer";
import nameReducer from "./nameReducer";

const allReducers = combineReducers({
	channel: channelReducer,
	name: nameReducer,
});
export default allReducers;
