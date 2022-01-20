import {
  WITHDRAWAL_GETALL_FAIL,
  WITHDRAWAL_CREATE_REQUEST,
  WITHDRAWAL_CREATE_SUCCESS,
  WITHDRAWAL_GETALL_REQUEST,
  WITHDRAWAL_GETALL_SUCCESS,
  WITHDRAWAL_CREATE_FAIL,
  WITHDRAWAL_GETALL_RESET,
  WITHDRAWAL_UPDATE_REQUEST,
  WITHDRAWAL_UPDATE_SUCCESS,
  WITHDRAWAL_UPDATE_FAIL,
  WITHDRAWAL_UPDATE_RESET,
  WITHDRAWAL_DETAILS_FAIL,
  WITHDRAWAL_DETAILS_RESET,
  WITHDRAWAL_DETAILS_SUCCESS,
  WITHDRAWAL_DETAILS_REQUEST,
} from '../constants/withdrawalConstant';

export const createWithdrawalReducer = (state = {}, action) => {
  switch (action.type) {
    case WITHDRAWAL_CREATE_REQUEST:
      return { loading: true };
    case WITHDRAWAL_CREATE_SUCCESS:
      return { loading: false, success: true, withdrawal: action.payload };
    case WITHDRAWAL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const withdrawalListReducer = (state = { withdrawals: [] }, action) => {
  switch (action.type) {
    case WITHDRAWAL_GETALL_REQUEST:
      return { loading: true };
    case WITHDRAWAL_GETALL_SUCCESS:
      return { loading: false, success: true, withdrawals: action.payload };
    case WITHDRAWAL_GETALL_FAIL:
      return { loading: false, error: action.payload };
    case WITHDRAWAL_GETALL_RESET:
      return { withdrawals: [] };
    default:
      return state;
  }
};

export const withdrawalUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case WITHDRAWAL_UPDATE_REQUEST:
      return { loading: true };
    case WITHDRAWAL_UPDATE_SUCCESS:
      return { loading: false, success: true, withdrawal: action.payload };
    case WITHDRAWAL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case WITHDRAWAL_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const withdrawalDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case WITHDRAWAL_DETAILS_REQUEST:
      return { loading: true };
    case WITHDRAWAL_DETAILS_SUCCESS:
      return { loading: false, success: true, withdrawal: action.payload };
    case WITHDRAWAL_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case WITHDRAWAL_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
