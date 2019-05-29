# P.A.W. - Pet Adoption Web app

## TO DOs
- Create test.
- Fix CORS on fetch data. Current fallback to hard coded data on failed fetch.
- Define if 'savedReducer' is necessary. Currently using local storage for persisted saved pets list.
- Define if mutating the search list on user choice is appropriate for app behavior and scale.
- Define behavior for rendering 'loading' vs 'note' depending on delay in fetch results vs end of list items.
- On page refresh, search list is rendered to the full list from remote source. Define if this should be limited to unseen pets.

## Launching locally

- Git clone the repo
- In the project directory, run: `npm start`
-  Runs the app in the development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Hot reload is enabled

## Testing
- In the project directory, run: `npm test`

Launches the test runner in the interactive watch mode.

## Building for deployment
- In the project directory, run: `npm run build`

Builds the app for production to the `build` folder.<br>
The build is minified and the filenames include the hashes.<br>

## Customize configuration
**Note: this is a one-way operation. Once you `eject`, you can’t go back.**
- In the project directory, run: `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).