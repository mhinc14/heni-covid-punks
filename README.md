# You can view this app here

https://61bb5698f8f2c60008d483d6--gifted-wiles-1a16cc.netlify.app/

# Current issues

Pinanta rate limiting 
Rate limiting on Pinanta means we can’t always retrieve the metadata when calling the tokenUR for CovidPunks. This problem does not exist when getting data for Kingmakers as this has a dedicated Pinata gateway.
https://docs.pinata.cloud/rate-limits

Potential solutions include:
Ask the content owner to upgrade to a Dedicated Gateway. (I have done this for my KingMakers collection so we do not get rate limited when viewing those).
Host the images ourselfs.

# Understand my process when developing this app

https://docs.google.com/document/d/14wrF-OFSpLqbGFZe0Ay34G5N-t_kQwPVKnMNrF6HWlM/edit?usp=sharing

# How to run app locally

After downloading the files, make sure to install the packages by running npm install or yarn.
After which you can start up the app using `yarn start`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
