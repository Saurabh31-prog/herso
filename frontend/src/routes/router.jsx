import { createBrowserRouter,
        createRoutesFromElements,
        Route,
 } from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";

import App from "../App"; //will become layout
import Home from "../pages/Home";
import Mission from "../pages/Mission";
import Objectives from "../pages/Objectives";
import SocietyAtGlance from "../pages/SocietyAtGlance";
import Management from "../pages/Management";
import Contact from "../pages/Contact";
import RegistrationDetails from "../pages/RegistrationDetails";



// Single-route wrapper

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="mission" element={<Mission />} />
      <Route path="about/objectives" element={<Objectives />} />
      <Route path="about/society-at-glance" element={<SocietyAtGlance />} />
      <Route path="management" element={<Management />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about/registration-details" element={<RegistrationDetails />} />
      <Route path="*" element={<div className="p-10 text-center">Not Found</div>} />
    </Route>
  )
);

export default router;

