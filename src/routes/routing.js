import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Header from "../pages/Header";
import Education from "../pages/Education";
import Skills from "../pages/Skills";

export const routing = [
    {
        id: 1,
        path: "/",
        element: Header ,
    }, {
        id: 2,
        path: "/about",
        element: About ,
    }, {
        id: 3,
        path: "/education",
        element: Education 
    },
    {
        id: 4,
        path: "/project",
        element: Projects 
    },
    {
        id: 5,
        path: "/experience",
        element: Experience 
    },
    {
        id: 6,
        path: "/skills",
        element: Skills 
    },
    {
        id: 7,
        path: "/contact",
        element: Contact ,
    }
]