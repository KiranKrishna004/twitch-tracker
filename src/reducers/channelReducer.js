/** @format */

const initialState = { channel: [] };

const channelReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GETC":
			return { channel: action.payload };
		default:
			return state;
	}
};
export default channelReducer;
