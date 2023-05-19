import { Provider } from "react-redux";
import "./App.css";
import Counter from "./counter/Counter";
import store from "./store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
