// import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import SeniBudaya from './../assets/img/SeniBudaya.png';
import FotoMK11 from "./../assets/img/MateriKelas11.png";
import FotoMK12 from "./../assets/img/MateriKelas12.png";
import FotoMK13 from "./../assets/img/MateriKelas13.png";
import FotoMK14 from "./../assets/img/MateriKelas14.png";
import FotoMK15 from "./../assets/img/MateriKelas15.png";
import FotoMK21 from "./../assets/img/MateriKelas21.png";
import FotoMK22 from "./../assets/img/MateriKelas22.png";
import FotoMK23 from "./../assets/img/MateriKelas23.png";
import FotoMK24 from "./../assets/img/MateriKelas24.png";
import FotoMK25 from "./../assets/img/MateriKelas25.png";
import LOGO from "./../assets/img/LOGO.png";



const Beranda = () => {
  const materiKelas1Data = [
    { text: "Pengenalan Seni Budaya", image: FotoMK11, link: "/PengenalanSeniBudaya"  , background: "#DAEAF1", borderWidth: "2px" },
    { text: "Tari Tradisional", image: FotoMK12, link: "/TariTradisional", background: "#FED7D7", borderWidth: "2px" },
    { text: "Seni Menggambar dan Melukis", image: FotoMK13, link: "/SeniMenggambarDanMelukis", background: "#FEEBC8", borderWidth: "2px" },
    { text: "Cerita Rakyat dan Dongeng", image: FotoMK14, link: "/CeritaRakyatDanDongeng", background: "#C7F6C7", borderWidth: "2px" },
    { text: "Mengenal Musik Daerah", image: FotoMK15, link: "/MengenalMusikDaerah", background: "#B2F5EA", borderWidth: "2px" },
  ];

  const materiKelas2Data = [
    { text: "Tari Daerah", image: FotoMK21, link: "/TariDaerah", background: "#FFE4B4", borderWidth: "2px" },
    { text: "Alat Musik Daerah", image: FotoMK22, link: "/AlatMusik", background: "#FFD1D1", borderWidth: "2px" },
    { text: "Baju Adat", image: FotoMK23, link: "/BajuAdat", background: "#FFD6A5", borderWidth: "2px" },
    { text: "Rumah Adat", image: FotoMK24, link: "/RumahAdat", background: "#FFEDB3", borderWidth: "2px" },
    { text: "Games", image: FotoMK25, link: "/detail/10", background: "#FFDAC1", borderWidth: "2px" },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={SeniBudaya} alt="" />
      </div>
      <div className="d-flex flex-wrap justify-content-center">

  {/* Materi Kelas 1 */}
  <div className="w-100 text-left">
    <h2 style={{marginLeft: '5rem', marginTop: '5rem'}}>Materi Kelas 1</h2>
  </div>
  {materiKelas1Data.map((item, index) => (
    <Link to={item.link} key={index} className="m-4">
      <Card
        style={{
          width: "15rem",
          background: item.background,
          borderWidth: item.borderWidth,
        }}
      >
        <Card.Body>
          <Card.Title className="text-sm" style={{ fontSize: "14px" }}>
            {item.text}
          </Card.Title>
          <img src={item.image} alt={`Gambar ${index + 1}`} className="w-100 h-80 object-cover mb-6 shadow-lg mx-auto" />
        </Card.Body>
      </Card>
    </Link>
  ))}

  {/* Materi Kelas 2 */}
  <div className="w-100 text-left">
    <h2 style={{marginLeft: '5rem', marginTop: '5rem'}}>Materi Kelas 2</h2>
  </div>
  {materiKelas2Data.map((item, index) => (
    <Link to={item.link} key={index} className="m-4">
      <Card
        style={{
          width: "15rem",
          background: item.background,
          borderWidth: item.borderWidth,
        }}
      >
        <Card.Body>
          <Card.Title className="text-sm" style={{ fontSize: "14px" }}>
            {item.text}
          </Card.Title>
          <img src={item.image} alt={`Gambar ${materiKelas1Data.length + index + 1}`} className="w-100 h- object-cover mb-6 shadow-lg mx-auto" />
        </Card.Body>
      </Card>
    </Link>
  ))}
</div>

      <div className="tentangkami" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px", margin: "20px", textAlign: "left", fontSize: "19px" }}>
        <img src={LOGO} alt="Logo" className="mr-4" />
        <div>
          <h1>Tentang Kami</h1>
          <p>Selamat datang di SeniBudaya, rumah pembelajaran daring dengan konten keindahan dan kekayaan seni serta kebudayaan Indonesia. Kami hadir sebagai wadah interaktif yang menghadirkan konten belajar menarik.</p>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
