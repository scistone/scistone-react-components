import Header from "./pages/Header";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Components from "./pages/Components";
import ContainerPage from "./pages/Components/Container";
import TablePage from "./pages/Components/Table";

function App() {

  const DefaultContainer = ({ children }) => {
    return (
      <div className="App">
        <Header />
        {children}
      </div>)

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultContainer children={<Home />} />} />
        <Route path="components/" element={<DefaultContainer children={<Components />} />} />
        {/* <Route path=":teamId" element={<Team />} /> */}
        <Route path="components/container/" element={<DefaultContainer children={<Components><ContainerPage/></Components>} />}  />
        <Route path="components/table/" element={<DefaultContainer children={<Components><TablePage/></Components>} />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
