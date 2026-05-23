import { faker } from "@faker-js/faker";

const THRESHOLD = 1000;

export const users = Array.from({ length: 5000 }, () => {
  return {
    name: faker.person.fullName().toLowerCase(),
    avatar: faker.image.avatar(),
  };
});
