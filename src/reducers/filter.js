const initialState = {
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
