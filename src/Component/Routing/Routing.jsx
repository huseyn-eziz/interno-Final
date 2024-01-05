import { Route, Routes } from "react-router";
import Pages from "../../Pages/Pages/Pages";
import Services from "../../Pages/Services/Services";
import Project from "../../Pages/Project/Project";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import HomePage from "../../Pages/HomePage/HomePage";
import Search from "../../Pages/Search/Search";
import { CiSearch } from "react-icons/ci";


export const routes = [
  { path: '/', element: <HomePage />, title: 'Home' },
  { path: '/Pages', element: <Pages />, title: 'Pages' },
  { path: '/Services', element: <Services />, title: 'Services' },
  { path: '/Project', element: <Project />, title: 'Project' },
  { path: '/Blog', element: <Blog />, title: 'Blog' },
  { path: '/Contact', element: <Contact />, title: 'Contact' },
  { path: '/Search', element: <Search />, title: <CiSearch/> },
];

const Routing = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Routing;
