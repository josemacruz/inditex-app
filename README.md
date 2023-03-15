# Inditex App


## File organization

The file organization follows a modular and scalable structure, which facilitates code management and maintenance as the project grows.

```
├── src
│   ├── app
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   │   ├── api
│   │   ├── store
│   │   └── redux
│   └── utils
```

- **app**: contains global files such as globalStyles.js, router.jsx and App.jsx.- **components**: contains reusable components used in various parts of the application.
- **hooks**: contains custom hooks used in the application.
- **pages**: contains top-level components that correspond to the different pages of the application. Each file in this folder represents a page.
- **services**: contains the application's services, including the API and the store.
- **utils**: contains functions and constants used in the application.
  
## Justification of the architecture

The modular and scalable architecture used in the project makes code maintenance and project scalability easier.

The modular approach allows developers to work on different parts of the application without affecting other parts. Each folder has a specific responsibility, and each file has a specific function. This reduces code complexity and makes it easier to find and fix errors.

The folder organization and separation of responsibilities also allow for easy scalability. As the application grows and becomes more complex, it's easier to add new features and components without affecting existing code.

Furthermore, separating API logic and application state into the services folder allows for easy integration of the API and state into any application component. This means that developers can work on application logic without worrying about API and state implementation.

## Used libraries

The project uses several libraries to enhance its functionality and appearance. Below are brief descriptions of each of them:

- **reduxjs/toolkit:** A library that provides tools for managing the global state of the application in React. Includes utilities for defining actions, reducers, and store.
- **react-icons:** A library that offers a wide variety of icons that can be used directly in React components.
- **react-redux:** A library that provides an easier integration between React and Redux. Allows for the use of the global Redux state in React components.
- **react-router-dom:** A library that facilitates the implementation of routes in a React application. Allows for navigation between different pages without loading a new page.
- **react-spinners:** A library that provides a variety of loading animations that can be used in React components.
- **styled-components:** A library that allows for the use of CSS within React components. Allows for the definition of custom styles in a simpler and more efficient way.
- **eslint**: A linting tool that helps improve code quality in React. Verifies code for errors and provides suggestions for their correction.

## API Integration

The required API for integration is unavailable, so a simulated API was created using `json-server`. The `db.json` file holds the products data that will be returned by the simulated API.

If you need additional information, the [json-server repository](https://github.com/typicode/json-server) is attached.

### Note

Since the API is not available for adding items to the cart, we use the following JSON format to add items:

```
{
	"productId": "0001",
	"colorCode": 1,
	"storageCode": 0,
	"id": 1
}
```

Please note that this format does not provide information on the number of items currently in the cart. To check the number of items in the cart, you must make a GET request to the /cart endpoint.

[JSON-SERVER of this App](https://my-json-server.typicode.com/josemacruz/inditex-app)


## Installation

```bash
npm ci
```

## Usage

Start dev server ans json-server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Test
 
```bash
npm run test
```

Code check

```bash
npm run lint
```
