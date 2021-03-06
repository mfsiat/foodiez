# Foodiez

> A food recipe app in React

## Usage

We can search for food recipe's of various items. There is a search bar where we can write item name and it will automatically give us the corresponding item's recipe and how to make it.

## API

- We will be using **EDAMAM** recipe API. The free version.
- First the authentication. Cause it checks the authentication of who's making the request.
- Can handle 10 request per minute.

## Working Step

- We are using **functional component** here.
- Declare API key on app.js.
- [Click Here](https://developer.edamam.com/edamam-docs-recipe-api) to read the EDAMAM api documentation.
- To make a request we are using **useEffect**. **useEffect** is a function which will run everytime our page renders. 
- We are using async on the useEffect. 
- **Make sure to use _await_ everytime we use promise**.

    ### Recipe.js

    - API and other credentials are on the app.js so we are fetching data on app.js.

    - The fetched data is being saved by useState and on different arrays. 

    - Then we are using props to send them to the recipe component. 

    - Recipe contains the basic view for our app. 

    ### Styles

    - For styling we are using a gradient from [webgradients.com](https://webgradients.com/)

    - Here we are using a **css module**. _It's a way to encapsulate our css into a component_. 

