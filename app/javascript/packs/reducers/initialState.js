let session_token = '';
let logged_in = false;
if (localStorage['auth_token_redux']) {
  session_token = localStorage['auth_token_redux'];
  logged_in = true;
}
export default {
  session_token,
  logged_in,
  error: {
    status: false,
    message: '',
  },
};
