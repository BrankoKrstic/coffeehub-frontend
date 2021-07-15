# Pathfinder Project

This project was bootstrapped with Create React App.

It uses React and Redux to render a coffee-themed ecommerce website. It loads items through async Axios calls via Redux Thunk, saves user and cart data to local storage, and features a full Stipe checkout. A [full demo of the app can be found here](https://elegant-hawking-06a46d.netlify.app/). To test out the admin dashboard, go to the [login page](https://elegant-hawking-06a46d.netlify.app/auth-admin) and log in with username: "admin@example.com" pass: "admin".

CoffeeHub relies on a Node.js/Express backend with MongoDB Atlas for data persistence. The code for it can be found in a [separate repository](https://github.com/BrankoKrstic/coffeehub-backend).

## To install

Clone the github repo to your machine.

Execute `cd coffeehub-frontend` into the terminal to go into the repo folder

Execute `npm install` to download all dependencies

`npm start` to open the project on a development server

Make sure to enter a Stripe public key and a server API endpoint as environment variables if you want to test out the full checkout process. 

## Using the app

Once in the app, you can browse the store and add items to the shopping cart. Clicking on the cart button will lead you through the entire checkout process. Use the test card number "4242 4242 4242 4242" to get past the Stripe payment. To test out the admin dashboard, either connect to my demo backend at `https://evening-hamlet-14401.herokuapp.com/` or set up your own Express bakcend with and load the database with admin account details.
