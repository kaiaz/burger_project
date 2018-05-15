import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return  dispatch => {
        dispatch(authStart());
        const authData = {
          email: email,
          password: password,
          returnSecureToken: true,
        };

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDwdNhIee6o41AS0V196tTFeTAvPQWXayg';
        if(!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDwdNhIee6o41AS0V196tTFeTAvPQWXayg';
        }
        axios.post(url, authData)
            .then(
                response => {
                    console.log(response);
                    dispatch(authSuccess(response.data.idToken, response.data.userId));
                }
            )
            .catch( err => {
                console.log(err);
                dispatch(authFail(err));
                }
            )
    };
};