import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import store from "../../redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Wrapper = ({ children }) => {
  const client = new QueryClient();
  return (
    <ConfigProvider>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecurity={window.location.protocol === "https:"}
      >
        <QueryClientProvider client={client}>
          <ReactQueryDevtools />
          <BrowserRouter>
            <Provider store={store}>{children}</Provider>
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default Wrapper;
