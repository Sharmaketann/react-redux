### `create-react-app`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### What is Redux?

Redux stores are application state in a single Javascript object called the STORE which is accessible by all parts of the UI.

> 1. We cannot modify directly modify or mutate the store because redux is built on top of functional programming principles.

This example cannot be modified or mutated:

```
{
    categories:[],
    products: [],
    cart: {},
    user: {}
}
```

> 2. In functional programming we do not mutate state.

```
store.currentUser = {name : "Ketan"}  // This is invalid as the store is an immutable object.
```

> 3. So to update it we should create a function that takes the store as an argument and returns the updated store.

```
function reducer(store, action) {
    const update = {...store}  // spread operator to create a copy of the store.
    update.item = "???"
}
```

To update a particular of object we need another building block or parameter called "action". It is just a plain javascript object that describes what just happens. Example: User logged In | Added Item to the shopping cart and more. Based on the type of action the reducer will know what properties of the state to update.

### Building Blocks of Redux

1. Store

   - Single Javascript object which includes the application state.

2. Action
   - Plain Javascript objects that represents what happens with the state. Can be called as Events.
3. Reducer
   - For updating the store. Can be called as Event Handlers | Processors. Reducers are pure functions which does not mutate the arguments and have no side effects. They just get the current store instance and return the updated instance.

### Steps for building Redux Applications.

- Design the store. List of Products and list of properties.
- Define the action. Add | Delete | Update | Create
- Create a reducer.
- Setup the store.

## Action in Redux

> Example:

```
{
    type: "ADD_ITEM",
    payload: {
        id:1,
        description: "..."
    }
}
```

### Debugging Redux Apps

Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).

> Install npm package for Redux DevTools

```
npm i redux-devtools-extension
```

> Make sure you add this code in the file.

```
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './reducer'

const store = createStore(reducer, devToolsEnhancer({ trace: true }))

```

### Tracing code in Vscode rather in Google Debugger

> In chrome extension setting click the extension option:
> Set the option from Use Brower to your favorite code editor i.e: vscode.
> Provide the path of the file where your project is located, so when you trace while debugging it opens in VsCode rather in the Browser Debugger.
