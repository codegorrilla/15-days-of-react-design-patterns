export const getUsers = () => {
  const usernames = [];

  const count = 2000;

  for (let i = 0; i < count; i++) {
    const firstName = "Sanjib";
    const lastName = "Adhya";

    const username = `${firstName} ${lastName}`;

    usernames.push(username);
  }

  return usernames;
};
