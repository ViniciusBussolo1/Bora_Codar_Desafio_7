import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { SearchBlocosContextProvider } from "./context/SearchBlocosContext";

import "./global.css";

function App() {
  return (
    <>
      <SearchBlocosContextProvider>
        <Header />
        <Main />
      </SearchBlocosContextProvider>
    </>
  );
}

export default App;
