import ServiceData from "../Home/ServiceData";

const reducer = (state, action) => {
  if (action.type === "SERVICE_CATEGORY") {
    let newArr = ServiceData.filter((m) => m.category === action.payload);
    return {
      ...state,
      serviceGrid: newArr,
    };
  }

  return state;
};
export default reducer;
