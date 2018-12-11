https://redux.js.org/basics/reducers

* Reducers specify how the application's state changes in response to actions sent to the store. 
* The reducer is a pure function that takes the previous state and an action, and returns the next state.
* It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure


#KEEP IN MIND:
#---------------
1) Given the same arguments, the reducer should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
2) Redux always calls our reducer with an undefined state for the first time. 

#BEST PRACTICES:
#---------------
1) keep your state as normalized as possible, without any nesting.
2) Keep every entity in an object stored with an ID as a key, and use IDs to reference it from other entities, or lists.
3) Think of the app's state as a database.
4) How state object should be normalized: https://github.com/paularmstrong/normalizr
5) It's important to return the previous state for any unknown action.

#Things you should never do inside a reducer:
#-------------------------------------------
1) Mutate its arguments;
2) Perform side effects like API calls and routing transitions;
3) Call non-pure functions, e.g. Date.now() or Math.random().