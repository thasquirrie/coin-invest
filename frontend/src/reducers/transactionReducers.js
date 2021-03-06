import {
  CREATE_TRANSACTION_FAIL,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_RESET,
  CREATE_TRANSACTION_SUCCESS,
  TRANSACTION_DETAILS_FAIL,
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_RESET,
  TRANSACTION_DETAILS_SUCCESS,
  TRANSACTION_LIST_FAIL,
  TRANSACTION_LIST_REQUEST,
  TRANSACTION_LIST_RESET,
  TRANSACTION_LIST_SUCCESS,
  TRANSACTION_UPDATE_FAIL,
  TRANSACTION_UPDATE_REQUEST,
  TRANSACTION_UPDATE_RESET,
  TRANSACTION_UPDATE_SUCCESS,
} from '../constants/transactionConstants';

export const createTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_REQUEST:
      return { loading: true };
    case CREATE_TRANSACTION_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        success: true,
        transaction: action.payload,
      };
    case CREATE_TRANSACTION_RESET:
      return {
        transaction: {},
      };
    case CREATE_TRANSACTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const transactionListReducer = (
  state = { transactions: [] },
  action
) => {
  switch (action.type) {
    case TRANSACTION_LIST_REQUEST:
      return { loading: true };
    case TRANSACTION_LIST_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        success: true,
        transactions: action.payload,
      };
    case TRANSACTION_LIST_RESET:
      return {
        transaction: { transaction: [] },
      };
    case TRANSACTION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const transactionDetailsReducer = (
  state = { transaction: {} },
  action
) => {
  switch (action.type) {
    case TRANSACTION_DETAILS_REQUEST:
      return { loading: true };
    case TRANSACTION_DETAILS_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        success: true,
        transaction: action.payload,
      };
    case TRANSACTION_DETAILS_RESET:
      return {
        transactions: {},
      };
    case TRANSACTION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const transactionUpdateReducer = (
  state = { transaction: {} },
  action
) => {
  switch (action.type) {
    case TRANSACTION_UPDATE_REQUEST:
      return { loading: true };
    case TRANSACTION_UPDATE_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        success: true,
        transaction: action.payload,
      };
    case TRANSACTION_UPDATE_RESET:
      return {
        transaction: {},
      };
    case TRANSACTION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
