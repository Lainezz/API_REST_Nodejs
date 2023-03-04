# API REST Nodejs
---

```
{
  "name": "Diego",
  "email": "diegolinaresmojacar@gmail.com",
  "age": undefined
}
``` 

## Description

API Rest implemented on NodeJS for a inventory control app.

It includes CRUD methods for "productos" resource. Also, it includes an user authentication by Session.

This is implemented only for academic purposes. The implementation of the API should be improved and there are a lot of things that could have be done differently.

---

## DB

Implemented for a MongoDB database. It uses mongoose as an intermediary between the API and the DB.

---

#### Sample Data
Some examples can be found on this [page](/Requests/requests.rest)

---

#### Scripts

For building the app
`npm start`

For starting the app
`npm run dev`

---

#### Dependencies

"cookie-parser": "1.4.6",
"cors": "2.8.5",
"dotenv": "16.0.3",
"express": "4.18.2",
"mongoose": "7.0.0",
"uuid": "9.0.0"

#### Dev Dependencies
"nodemon": "2.0.20"

