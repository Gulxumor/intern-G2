import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux";

const Wrapper = ({ children }) => {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default Wrapper;
