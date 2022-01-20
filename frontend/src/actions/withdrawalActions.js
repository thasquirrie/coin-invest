import axios from 'axios';
import {
  WITHDRAWAL_CREATE_FAIL,
  WITHDRAWAL_CREATE_REQUEST,
  WITHDRAWAL_CREATE_SUCCESS,
  WITHDRAWAL_DETAILS_FAIL,
  WITHDRAWAL_DETAILS_REQUEST,
  WITHDRAWAL_DETAILS_SUCCESS,
  WITHDRAWAL_UPDATE_FAIL,
  WITHDRAWAL_UPDATE_REQUEST,
  WITHDRAWAL_UPDATE_SUCCESS,
} from '../constants/withdrawalConstant';

export const addWithdrawal = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: WITHDRAWAL_CREATE_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearar ${token}`,
    };

    const {
      data: {
        data: { withdrawal },
      },
    } = await axios({
      method: 'POST',
      url: '/api/v1/withdrawals',
      data,
      headers,
    });

    console.log({ withdrawal });

    dispatch({ type: WITHDRAWAL_CREATE_SUCCESS, payload: withdrawal });
  } catch (error) {
    console.log(error);
    dispatch({
      type: WITHDRAWAL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const withdrawalDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: WITHDRAWAL_DETAILS_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearar ${token}`,
    };

    const {
      data: {
        data: { withdrawal },
      },
    } = await axios({
      method: 'GET',
      url: `/api/v1/withdrawals/${id}`,
      headers,
    });

    console.log({ withdrawal });

    dispatch({ type: WITHDRAWAL_DETAILS_SUCCESS, payload: withdrawal });
  } catch (error) {
    console.log(error);
    dispatch({
      type: WITHDRAWAL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateWithdrawal = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: WITHDRAWAL_UPDATE_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearar ${token}`,
    };

    const {
      data: {
        data: { withdrawal },
      },
    } = await axios({
      method: 'PATCH',
      url: `/api/v1/withdrawals/${id}`,
      headers,
    });

    console.log({ withdrawal });

    dispatch({ type: WITHDRAWAL_UPDATE_SUCCESS, payload: withdrawal });
  } catch (error) {
    console.log(error);
    dispatch({
      type: WITHDRAWAL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
