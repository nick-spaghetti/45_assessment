### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
	- react is a js framework similar to flask but offers more flexibility in how you are able to do things
	- definitely preferable to doing it from scratch, though it is possible

- What is Babel?
	- babel is software that converts jsx code into html code in the browser, as otherwise js would return an error code

- What is JSX?
	- javascript and xml
	- used primarily in react environments, jsx combines js and html in the same file, allowing you to define js functions as well as design html tags for babel to render in the browser

- How is a Component created in React?
	- you create a component just like you would create any html element, only we are setting it up in a way to be reusable elsewhere.  could be a button, or a banner, an item card.

- What are some difference between state and props?
	- state is like a bookmark on an element or component or aspect of a component.  you are able to bookmark whatever value it has and it will persist
	- props are variables we can pass between components, such as a name or an id

- What does "downward data flow" refer to in React?
	- passing props between components, such as functions like to delete a component

- What is a controlled component?
	- controlled means utilizing state, with react 'controlling' that aspect of the component

- What is an uncontrolled component?
	- uncontrolled means the component maintains itself with its own initial state, usually empty 

- What is the purpose of the `key` prop when rendering a list of components?
	- same purpose id serves in a sql database
	- for indexing and serves as a reference point

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	- arrays can change, and often do.  better would be to use a name or some other unique property

- Describe useEffect.  What use cases is it used for in React components?
	- useEffect lets us stage an event or re-render of the component depending on the changing of a provided variable or if anything changes (indicated by '[]')

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	- useRef allows you to persist value between render.  similar to useState, but used for mutable values that don't cause a re-render when updated

- When would you use a ref? When wouldn't you use one?
	- returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook

```jsx
const Focuser = () => {
	const secondInput = useRef();
	const move = () => secondInput.current.focus();
	return (
		<>
			<h3>focus starts here</h3>
			<input type="text" />
			<button onClick={move}>focus the text input</button>
			<h3>then moves here</h3>
			<input
				type="text"
				ref={secondInput}
			/>
		</>
	);
};
```

- What is a custom hook in React? When would you want to write one?
	- a custom hook is one we can define ourselves to ease any repetition in our code
	- convention dictates all hooks, be they built-in or custom, be prefixed with 'use'
