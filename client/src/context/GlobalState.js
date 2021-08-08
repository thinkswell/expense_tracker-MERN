import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
import Alert from "../components/Alert";

const initialState = {
  transactions: [],
  isLoading: true,
  showAlert: false,
  alertMessage: "",
  alertType: false,
};

const catchAsync =
  (fn) =>
  (...args) =>
    fn(...args).catch((err) => console.log("err", err));

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transaction/${id}`);
      dispatch({ type: "REMOVE_TRAN", payload: id });
      openAlert("Transaction Removed", false);
    } catch (err) {
      console.log("Err", err);
    }
  };

  const addTransaction = async (trans) => {
    try {
      const { data } = await axios.post(
        `/api/v1/transaction`,
        JSON.stringify(trans),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let { transaction } = data.data;
      dispatch({ type: "ADD_TRAN", payload: transaction });
      openAlert("Transaction Added", true);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getTransactions = async () => {
    try {
      const { data } = await axios.get(`/api/v1/transactions`);
      const { transactions } = data.data;
      console.log(transactions);
      dispatch({ type: "TRANSACTIONS", payload: transactions });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    console.log("calling transaction again!!");
    getTransactions();
  }, []);

  const closeAlert = () => {
    console.log("close alert!!");
    dispatch({ type: "CLOSE_ALERT" });
  };

  const openAlert = (message, type) => {
    dispatch({ type: "OPEN_ALERT", payload: { message, type } });
  };

  console.log("re-rendering global state");
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        removeTransaction,
        addTransaction,
        openAlert,
        isLoading: state.isLoading,
      }}
    >
      {state.showAlert && (
        <Alert
          message={state.alertMessage}
          type={state.alertType}
          closeAlert={closeAlert}
        />
      )}

      {children}
    </GlobalContext.Provider>
  );
};
