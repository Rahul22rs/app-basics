State
holds data that can change over time.
Participates in component's rendering.
It allows components to be dynamic and interactive.

React rendering
The process of displaying the user interface (UI) based on the application's current state and props.
It involves converting the component's description of the UI (written in JSX)
into actual DOM elements that are visible to the user.

What is reactive programming
A programming paradigm focused on asynchronous data streams and the propagation of change.
Allows applications to react to data changes and handle real-time updates efficiently

const [age,setAge]=useState<number|null>(null)

---
          
Hooks
Functions that allow us to "hook into" React state and lifecycle features.
useSate :
a hook that notifies React of change in state
enables functional components to manage and update their internal state.

useEffect :
For managing "side effects" within functional components.
Side effects are operations that interact with something outside of the component's render cycle, such as:
Fetching data: Making API calls to retrieve data from a server.

[] -> ONCE
useEffect(() => {
console.log(">>>> useEffect Called --- "+new Date().toTimeString());
}, []);

EMPTY -> Every time ANY property or state changes
useEffect(() => {
console.log(">>>> useEffect Called --- "+new Date().toTimeString());
});

[currentAgeProperty,otherProp] -> only when currentAgeProperty or otherProp changes, not any thing else

useEffect(() => {
console.log(">>>> useEffect Called --- "+new Date().toTimeString());
},[currentAgeProperty]);
