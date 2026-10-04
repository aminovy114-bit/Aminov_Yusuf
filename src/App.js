import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Projects";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Project, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] })] }));
}
export default App;
