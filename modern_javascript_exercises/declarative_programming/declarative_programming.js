// Instructions can be found in declarative_programming.md

function longPasswords(passwords) {
  let longPasswords = [];

  for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    if (password.length >= 9) {
      longPasswords.push(password);
    }
  }
  return longPasswords;
}

module.exports = longPasswords;
