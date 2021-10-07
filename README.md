## Demo Link

[Link to Demo Site](https://quizzical-wing-75ee90.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode

### `npm run test:coverage`

Launches the test runner with coverage report

### `npm run build`


### Search Component Docs

## constants.js

Contains constant variables used across the application

| name  |  description |  default |
|-------|--------------|----------|
| SHOW_PRODUCT_AMOUNT | max number of similar search products | 8 |

## NavBar.js

| props  |  description |
|-------|--------------|
| setIsShown | function : display of overlay and filtered searches |
| isShown | boolean : for display of overlay and filtered searches |

## SearchView.js

| props  |  description |
|-------|--------------|
| data | array: search results  |
| inputVal | string : input value |
| handleOnOptionFocus | function : sets aria-selected of option to true|
| handleOnOptionBlur | function : sets aria-selected of option to false|

## TypeView.js

| props  |  description |
|-------|--------------|
| data | array : search results by catergory type |
