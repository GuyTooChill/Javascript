const express = require("express")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const { faker } = require('@faker-js/faker');

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);



const createUser = () => {
    const newUser = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
    return newUser;
}

const createNewUser = createUser();
console.log(createNewUser)



const createObject = () => {
    const newObject = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newObject;
}

const createCompanyObject = createObject();
console.log(createCompanyObject)



app.get('/api/users/new',(request,response)=>{response.json({user:createUser()})});

app.get('/api/companies/new',(request,response)=>{response.json({user:createCompanyObject()})});

app.get('/api/user/company',(request,response)=>{response.json({user:createUser(),company:createCompanyObject()})});

app.listen(port, () => console.log(`Welcome tarnished`) )
