import { createStore } from "redux";
import devToolsEnhancer from "remote-redux-devtools";
import { Provider } from "react-redux";
import reducers from "./reducers";
// import rootReducer from "../reducers/rootReducer";
const store = createStore(
  reducers,
  devToolsEnhancer({
    realtime: true,
  })
);
export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}
