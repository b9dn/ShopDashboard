export const fakeAuthProvider = {
  isAuthenticated: true,
  usernames: ["admin", "Janosz", "Mirek211", "adek"],
  signin: (username, lang, callback) => {
    if (fakeAuthProvider.usernames.includes(username)) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(() => {
        callback("success");
      }, 100);
    } else {
      setTimeout(() => {
        callback(
          lang === "pl"
            ? "nieprawidłowe dane logowania"
            : "incorrect login data"
        );
      }, 100);
    }
  },
  signout: () => {
    fakeAuthProvider.isAuthenticated = false;
  },
};
