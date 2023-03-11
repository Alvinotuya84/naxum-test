import Navigator from "./navigator";
import { Provider } from "react-redux";
import store from "./redux/store";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <Toast />
    </Provider>
  );
}
