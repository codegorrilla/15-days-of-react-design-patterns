export function getUsers() {
  const usernames = [];

  const count = 1000;

  let i;

  for (i = 0; i < count; i++) {
    const firstName = "Baishali";
    const lastName = "Adhya";

    const username = `${firstName} ${lastName}`;
    usernames.push(username);
  }

  return usernames;
}
