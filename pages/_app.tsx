// pages/_app.tsx
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
