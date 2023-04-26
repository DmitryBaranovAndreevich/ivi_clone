function fakeRequest(time: number) {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  });
}

function fakeLogin(user: { email: string; password: string }) {
  return fakeRequest(2000).then(() => ({ accesstoken: 'acces', refreshtoken: 'refresh' }));
}

export default fakeLogin;
