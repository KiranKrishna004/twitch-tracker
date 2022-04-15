/** @format */

const initialState = { name: "onscreen" };

const nameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GETN":
			return { name: action.payload };
		default:
			return state;
	}
};
export default nameReducer;
