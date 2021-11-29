import axios from 'axios';
import {
  CREATE_TRANSACTION_FAIL,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
} from '../constants/transactionConstants';

export const addTransaction = (data) => async (dispatch, getState) => {
  console.log({ data });
  try {
    dispatch({ type: CREATE_TRANSACTION_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const {
      data: {
        data: { transaction },
      },
    } = await axios({
      method: 'POST',
      url: '/api/v1/transactions',
      data,
      headers,
    });

    console.log(transaction);

    dispatch({
      type: CREATE_TRANSACTION_SUCCESS,
      payload: transaction,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_TRANSACTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
