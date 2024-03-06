import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import { SideBarNew } from "./components/SideBar/SideBar";
import Piezas from "./pages/Piezas/Piezas";
import DetallePieza from "./pages/Piezas/DetallePieza";
import { PiezaProvider } from "./Context/PiezaContext";




function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path="main" element={<SideBarNew/>} />
      
      <Route path="main/piezas" element={<PiezaProvider><Piezas/></PiezaProvider>} />
      <Route path="main/piezas/detalle-pieza" element={<PiezaProvider><DetallePieza/></PiezaProvider>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
