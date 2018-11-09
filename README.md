# Testing in React (a shitty recipe book)

- "I'd like to do testing, but I don't know what to test."
- "Testing takes forever, and I want to be shipping code."
- "My Product Owner doesn't understand the value of testing, so I don't have story points/time/whatever allocated to writing to them."
- "Patrick SonarQube/Jenkins won't let me deploy without increasing my test coverage."

You may have heard one or any of these sentences at some point in your front-end career. Perhaps, these words have even tumbled out of your mouth at some point. This is all understandable and today we're going to try and improve our skills and knowledge with regards to testing React components.

By getting better at testing, we hope to:

- know how to maximise our test coverage (so we use our time efficiently)
- ship tested, robust code more often (by writing simpler code that we know we can write tests for)
- keep our Product Owners and Patrick SonarQube/Jenkins happy

# Testing your React App with Jest 🃏

The following scenarios will be covered:

### Basic

1. Test an interaction with a DOM element that updates state. [[`Counter`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/Counter.test.jsx)]
1. Test a component wrapped in a [HOC](https://reactjs.org/docs/higher-order-components.html) (e.g. [Redux](https://redux.js.org/)' mapState). [[`ScreenWidth`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/ScreenWidth.test.jsx), [`PageURL`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/PageURL.test.jsx)]
1. Create [snapshots](https://jestjs.io/docs/en/snapshot-testing) for the above. [[`All component tests`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components)]

### Advanced

4. Test a component that is wrapped in the new [React context](https://reactjs.org/docs/context.html). [[`PageURL`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/PageURL.test.jsx)]
1. Test a [React ref](https://reactjs.org/docs/refs-and-the-dom.html) attached to a DOM node. [[`Reminder`](https://github.com/mikeheddes/react-testing-demo/blob/test-solutions/src/components/Reminder.test.jsx)]
1. Test code that uses browser global variables. [[`ScreenWidth`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/ScreenWidth.test.jsx)]

### Project structure

The components and tests are in [`./src/components`](https://github.com/mikeheddes/react-testing-demo/tree/master/src/components).
The tests for `Component.jsx` are in `Component.test.jsx`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Runs the tests.

### `npm test:watch`

Runs the tests in watch mode and shows the test coverage.
