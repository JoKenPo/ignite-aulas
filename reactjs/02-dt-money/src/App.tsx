import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}
