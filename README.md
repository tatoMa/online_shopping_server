# A simple online shopping backend

It is a simple online shopping backend based on Node, express, Passport.js, MongoDB, Mongoose and other libraries.

[Deployed links](https://postandshopping.herokuapp.com)

## Installation

```bash
npm i
```

## Usage

```
npm run dev
npm run start
```

## Git

```
git push -u origin master
```

## Steps of building

- [x] Project initiate
  - [x] Init the project by npm init
  - [x] Create index.js
  - [x] Config package.json
  - [x] Add express, nodemon, mongoose into project
  - [x] Setup server running on development enironment
  - [x] Test the root route on web browser and postman
- [x] Database
  - [x] Create a new collection on local MongoDB
  - [x] Connect the DB
  - [x] Create user models and schema js file
- [x] Routes
  - [x] Create user route
  - [x] create a get route to get all user data from DB
  - [x] Create a post route to save a new user into DB
- [x] Authorisation
  - [x] Add Passport.js
  - [x] Add cors, bcryptjs
  - [x] Setup Passport
  - [x] Add google-oAuth2.0 strategy
  - [x] Setup oAuth2.0
  - [x] Create callback route
  - [x] Store user into DB
- [x] Create products needed files
  - [x] create product schema
  - [x] create product model
  - [x] create product route
- [x] Deploy
  - [x] setup mlab for MongoDB
  - [x] setup Heroku for deploy

## License

[MIT](https://choosealicense.com/licenses/mit/)
