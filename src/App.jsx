import { BrowserRouter, Routes, Route } from "react-router-dom";

import Examspage from "./pages/Examspage";
import Addquestionpage from "./pages/Addquestionpage";
import Viewpapers from "./pages/Viewpapers";
import Viewcourses from "./pages/Viewcourses";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Examspage />} />
          <Route path="/addquestionpage" element={<Addquestionpage />} />
          <Route path="/course" element={<Viewcourses />} />
          <Route path="/examspage" element={<Viewpapers />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );   
}

export default App;
