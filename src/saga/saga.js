import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FATCH_DATA, SUCESS_FATCH_DATA, ERROR_FATCH_DATA } from "../actions/const";
// import { useSelector } from 'react-redux';
// import { allapidata } from './api';

function* onData() {
  try {
    // API Request
    // const apidata = yield fetch('https://api.github.com/users?since=XXX');
    // console.log(apidata)https://jsonplaceholder.typicode.com/todos/
    // yield put({type : SUCESS_FATCH_DATA,data : apidata})
    const response = yield call(axios.get, ['https://jsonplaceholder.typicode.com/todos/']);
    // yield put({SUCESS_FATCH_DATA ,data :response})
    // console.log(response) 
    // const response = yield call(allapidata);
    console.log(response)
    yield put({type : SUCESS_FATCH_DATA,data : response.data})


    // yield put(response);
  } catch (e) {
    // yield put(console.log('we can not get data from api'));
    console.log(e)
    yield put({
      type: ERROR_FATCH_DATA
    })
  }
}


export function* fatchData() {
  yield takeLatest(FATCH_DATA, onData);
  // yield takeLatest(fetch_user, fetchUser);

}