# Employee Reimbursment System (ERS)

## Executive Summary

EasyShop is an ecommerce tracking platform where users can browse products, add them to a wishlist, and see a list of items purchased. Prices for items are shown from Amazon and there are flexible search methods allowing users to find anything they desire.
The frontend project is built with Angular2+ for a single page application. The frontend establish a User Interface and communicate with the backend via http requests to specific end points. The getting back resources will be displayed and also stored on local storage, so it will reduce the fetch API and increase performance for the application.

**Activity Diagram**

![](./imgs/activity.jpg)

## Technologies / Dependencies

Central Angular Framwork Includes:

- TypeScript
- Material and FlexLayout
- RSJX
- Observable
- Router
- Service (Dependency Injection)
- Model

## Features

1. Users can browse the products when they enter the app
2. User can create account with their information
3. User can login to their account and see their details
4. User can update password and information
5. User can add a product to his or her cart
6. User can remove a product from his or her cart
7. User can view or his or her products in their cart

## Strech Goals:

- User can search a product by key words
- User can add a credit or debit card
- User can purchase products

## Getting Started

1. Clone the frontend project to your local machine
2. Clone the backend project to your local machine
   [EasyShop-backend](https://github.com/htl43/EasyShop-Backend)
3. Run the backend project (see backend project README file)
4. Open the frontend project with an Angular development tool like **_Visual Studio Code_**
5. Set up the local environment and workspace for Angular
   [Angular-setup-local](https://angular.io/guide/setup-local)
6. Run `npm install` in terminal to download all the dependencies
7. Run `npm serve -o` in terminal to run project
8. Open [Browser](https://localhost:4200) to use the app

**ER Diagram**

![](./imgs/erd.jpg)

## Usage

1. Use register functionality to to create customer account.
2. Login in with your new user credentials or continue to browse without logging in.
3. Choose one of the three categories to browse the different items.
4. Use the size or color flex search options to further narrow your results.
5. Click the "Add to Cart" button to add a product to your shopping cart. Note: if not logged in, you will be redirected to the login page.
6. Click the cart icon  to view your cart items
7. If you'd like, click the provided buttons to remove items from your cart.

   ![](./imgs/create.jpg)

## License

MIT
