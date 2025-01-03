import { useEffect , useReducer} from "react";
import "./App.css";
import axios from "axios";

const initialState = { 
  loading: false, 
  error: "", 
  posts: [] 
}

const reducer = (state, action) => {
  
switch (action.type) {
  case "FETCH_PENDING":
return {loading: true, error: "", posts: []};
case "FETCH_SUCCESS":
return {loading: false, error: "", posts: action.payload};
case "FETCH_ERROR":
return {loading: false, error: "Something went wrong!", posts: []};
default:
return state;

}
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getPosts = async () => {
      try {
        dispatch({type: "FETCH_PENDING"});
      
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        if (response.status === 200) {
          dispatch({type: "FETCH_SUCCESS", payload: response.data});
        }else{
          dispatch({type: "FETCH_ERROR"});
        }
        console.log(response.data);
      } catch (error) {
        dispatch({type: "FETCH_ERROR", payload: error.message});
        console.log(error); // Corrected catch block
      }
    };

    getPosts(); // Call the function inside useEffect
  }, []); // Dependency array ensures useEffect runs only once

  return (
    <div>
    {state.loading ? (
      <h1>Loading...</h1>
    ) : state.error ? (
      <h1>{state.error}</h1>
    ) : (
      <ul>
        {state.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )}
  </div>
  
  );
}

export default App;
