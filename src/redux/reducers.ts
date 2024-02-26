const initialState = {
  users: [],
  events: [],
  reminder: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user: any) => user.id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user: any) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "ADD_REMINDER":
      return {
        ...state,
        reminder: [...state.reminder, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
