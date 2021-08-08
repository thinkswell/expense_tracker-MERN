const AppReducer = (state, action) => {
  let newTransactions = [];

  switch (action.type) {
    case "ADD_TRAN":
      newTransactions = [...state.transactions, action.payload];
      return { ...state, transactions: newTransactions, isLoading: false };

    case "REMOVE_TRAN":
      newTransactions = state.transactions.filter(
        (transaction) => transaction._id !== action.payload
      );
      console.log({ newTransactions });
      return { ...state, transactions: newTransactions, isLoading: false };

    case "TRANSACTIONS":
      return { ...state, transactions: action.payload, isLoading: false };

    case "OPEN_ALERT":
      return {
        ...state,
        alertMessage: action.payload.message,
        alertType: action.payload.type,
        showAlert: true,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertMessage: "",
        alertType: "",
        showAlert: false,
      };
    default:
      return state;
  }
};

export default AppReducer;
