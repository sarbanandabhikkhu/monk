import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateOutlet from "./components/PrivateOutlet";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/*" element={<PrivateOutlet />}>
          <Route exact path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
