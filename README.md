# Testing in React (a shitty recipe book)

> - "I'd like to do testing, but I don't know what to test."
> - "Testing takes forever, and I want to be shipping code."
> - "My Product Owner doesn't understand the value of testing, so I don't have story points/time/whatever allocated to writing to them."
> - "~~Patrick~~ SonarQube/Jenkins won't let me deploy without increasing my test coverage."
> *-- All Ed frontenders*

You may have heard one or any of these sentences at some point in your front-end career. Perhaps, these words have even tumbled out of your mouth at some point. This is all understandable and today we're going to try and improve our skills and knowledge with regards to testing React components.

By getting better at testing, we hope to:

- Know how to maximise our test coverage (so we use our time efficiently)
- Ship tested, robust code more often (by writing simpler code that we know we can write tests for)
- Keep our Product Owners and ~~Patrick~~ SonarQube/Jenkins happy

To achieve this, today we will look at:


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
