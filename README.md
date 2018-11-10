# Testing your React App with Jest 🃏

The following scenarios will be covered:

### Basic

1. Test an interaction with a DOM element that updates state. [[`Counter`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/Counter.test.jsx)]
1. Test a component wrapped in a [HOC](https://reactjs.org/docs/higher-order-components.html) (e.g. [Redux](https://redux.js.org/)' mapState). [[`ScreenWidth`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/ScreenWidth.test.jsx), [`PageURL`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/PageURL.test.jsx)]
1. Create [snapshots](https://jestjs.io/docs/en/snapshot-testing) for the above. [[`All component tests`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components)]

### Advanced

4. Test a component that is wrapped in the [React context](https://reactjs.org/docs/context.html). [[`PageURL`](https://github.com/mikeheddes/react-testing-demo/blob/master/src/components/PageURL.test.jsx)]
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

Runs the tests in watch mode.

### `npm test:watch`

Runs the tests in watch mode and shows the test coverage.
