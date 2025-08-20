import { faker } from '@faker-js/faker';

export function createDestinatario() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode()
  };
}