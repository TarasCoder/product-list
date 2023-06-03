Link to the deployed project: https://cart-project-5abcb.web.app/

OVERWIEW:

So far I have finished 2 levels "base" and "middle".
-the "shops" data is fatched from the "Firebase database";
-After the order is submitted, the data is saved to "Firestore database":
![image](https://github.com/TarasCoder/product-list/assets/66311545/beb5b7ec-3fe9-4dae-bced-52d9501efad2)
-all the products from each separate shop can be added to cart (after button is pressed "Alert" is showing product is added);
-as soon as you will choose product in one shop - all other will be blocked;
-the cart is saved to "Local Storage";
-you will be able to choose items from other shop only when you will delete all the products from the cart;
-based on previous comment obviously you can delete items from cart;
-there are 2 pages, that are changed without rerendering whole site;
-as soon as the product will be added to cart - total price will be changed (located on the cart page);
-as soon as you will change quantity on each product (inside cart), you will see dynamically changed price on changed card itself, and total price as well;
-you can not make quantity below 0;
-submit button is blocked till the moment you will add any product to cart;
-as soon as you will remove last product from the cart, submit button will be blocked;
-you can not send data to database when the inputs are not set;
-after order is sent, all fields, price, and cart are cleared;

WHAT SHOULD BE IMPROVED:

-add modal windows instead of alerts
-add more styling, so it will look great
-responsivnes
-add "advanced" level

INSTRUCTIONS:

1) DEPLOYING to firebase instructions:
Step 0): npm run build (For React App)
Step 1): npm install -g firebase-tools
Step 2): firebase login (If you are already login, then there is no need for this step)
Step 3): firebase init
Step 4): Are you ready to proceed? Yes
Step 5): What do you want to use as your public directory? dist
Step 6): Configure as a single-page app (rewrite all urls to /index.html)? Yes
Step 7): Set up automatic builds and deploys with GitHub? No
Step 8): File dist/index.html already exists. Overwrite? No
Step 9): firebase deploy
from here: https://github.com/coreui/coreui-react/issues/55

2) To run project locally download files, install dependencies "npm i", and run project using "npm run dev"


REACT AUTO NOTES
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
