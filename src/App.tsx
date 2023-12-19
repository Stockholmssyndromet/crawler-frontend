import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./pages/Input";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/analyze" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
