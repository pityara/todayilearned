import { applyMiddleware, createStore } from 'redux';
let token = '';
if (localStorage['auth_token_redux']) {
  token = localStorage['auth_token_redux'];
}
export default {
  session: {
    token,
    username: '',
  },
  error: {
    status: false,
    message: '',
  },
};
