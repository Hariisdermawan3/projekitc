import { Routes, Route } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import NavbarComp2 from './Components/NavbarComp2';
import NavbarComp3 from './Components/NavbarComp3';
import Footer from './Components/FooterComp';
import Footer2 from './Components/FooterComp2';

import LandingPage from './Pages/LandingPage';
import Beranda from './Pages/Beranda';
import Aktivitas from './Pages/Aktivitas';
import KataMereka from './Pages/KataMereka';
import AkunAnda from './Pages/AkunAnda';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Kontak from './Pages/Kontak';
import PengenalanSeniBudaya from './DetailMateri/Materi1/PengenalanSeniBudaya';
import TariTradisional from './DetailMateri/Materi1/TariTradisional';
import SeniMenggambarDanMelukis from './DetailMateri/Materi1/SeniMenggambarDanMelukis';
import CeritaRakyatDanDongeng from './DetailMateri/Materi1/CeritaRakyatDanDongeng';
import MengenalMusikDaerah from './DetailMateri/Materi1/MengenalMusikDaerah';
import TariDaerah from './DetailMateri/Materi2/TariDaerah';
import AlatMusik from './DetailMateri/Materi2/AlatMusik';
import BajuAdat from './DetailMateri/Materi2/BajuAdat';
import RumahAdat from './DetailMateri/Materi2/RumahAdat';



function App() {
  return (
    <div>
      {/* NavbarComp */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarComp />
              <LandingPage />
              <Footer />
            </>
          }
        />
        {/* NavbarComp2 */}
        <Route
          path="/beranda"
          element={
            <>
              <NavbarComp2 />
              <Beranda />
              <Footer />
            </>
          }
        />
        <Route
          path="/aktivitas"
          element={
            <>
              <NavbarComp2 />
              <Aktivitas />
            </>
          }
        />
        <Route
          path="/katamereka"
          element={
            <>
              <NavbarComp2 />
              <KataMereka />
            </>
          }
        />
        <Route
          path="/akunanda"
          element={
            <>
              <NavbarComp2 />
              <AkunAnda />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/kontak"
          element={
            <>
              <NavbarComp2 />
              <Kontak />
              <Footer />
            </>
          }
        />
        
        {/* NavbarComp3 */}
        <Route
          path="/PengenalanSeniBudaya"
          element={
            <>
              <NavbarComp3 />
              <PengenalanSeniBudaya />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/TariTradisional"
          element={
            <>
              <NavbarComp3 />
              <TariTradisional />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/SeniMenggambarDanMelukis"
          element={
            <>
              <NavbarComp3 />
              <SeniMenggambarDanMelukis />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/CeritaRakyatDanDongeng"
          element={
            <>
              <NavbarComp3 />
              <CeritaRakyatDanDongeng />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/MengenalMusikDaerah"
          element={
            <>
              <NavbarComp3 />
              <MengenalMusikDaerah />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/TariDaerah"
          element={
            <>
              <NavbarComp3 />
              <TariDaerah />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/AlatMusik"
          element={
            <>
              <NavbarComp3 />
              <AlatMusik />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/BajuAdat"
          element={
            <>
              <NavbarComp3 />
              <BajuAdat />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/RumahAdat"
          element={
            <>
              <NavbarComp3 />
              <RumahAdat />
              <Footer2 />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
