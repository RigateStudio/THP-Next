import faker from 'faker';

const getAllClients = ({ page }) => {
    console.log('Page:', page);

    return Array.from({ length: 9 }, () => ({
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
    }));
};

export { getAllClients };
