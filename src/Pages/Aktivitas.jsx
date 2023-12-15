import React from 'react';
import { Card } from 'react-bootstrap';

// Import gambar MateriKelas
import FotoMK11 from './../assets/img/MateriKelas11.png';
import FotoMK12 from './../assets/img/MateriKelas12.png';
import FotoMK13 from './../assets/img/MateriKelas13.png';
import FotoMK14 from './../assets/img/MateriKelas14.png';
import FotoMK15 from './../assets/img/MateriKelas15.png';
import FotoMK21 from './../assets/img/MateriKelas21.png';
import FotoMK22 from './../assets/img/MateriKelas22.png';
import FotoMK23 from './../assets/img/MateriKelas23.png';
import FotoMK24 from './../assets/img/MateriKelas24.png';
import FotoMK25 from './../assets/img/MateriKelas25.png';

const Aktivitas = () => {
  const materiKelas1Data = [
    { text: "Pengenalan Seni Budaya", image: FotoMK11, background: '#DAEAF1', borderWidth: '2px' },
    { text: "Tari Daerah", image: FotoMK21, background: '#FED7D7', borderWidth: '2px' },
    { text: "Seni Menggambar dan Melukis", image: FotoMK13, background: '#FEEBC8', borderWidth: '2px' },
    { text: "Games", image: FotoMK25, background: '#C7F6C7', borderWidth: '2px' },
    { text: "Alat Musik Daerah", image: FotoMK22, background: '#B2F5EA', borderWidth: '2px' },
  ];

  const materiKelas2Data = [
    { text: "Tari Tradisional", image: FotoMK12, background: '#FFE4B4', borderWidth: '2px' },
    { text: "Baju Adat", image: FotoMK23, background: '#FFD1D1', borderWidth: '2px' },
    { text: "Mengenal Musik Daerah", image: FotoMK15, background: '#FFD6A5', borderWidth: '2px' },
    { text: "Cerita Rakyat dan Dongeng", image: FotoMK14, background: '#FFEDB3', borderWidth: '2px' },
    { text: "Rumah Adat", image: FotoMK24, background: '#FFDAC1', borderWidth: '2px' },
  ];

  return (
    <div className='m-4 p-8'>
      <h2>Aktivitas Terbaru</h2>

      <div className="d-flex flex-wrap justify-content-center">
        {/* Materi Kelas 1 */}
        {materiKelas1Data.map((item, index) => (
          <div key={index} className="m-4">
            <Card
              style={{
                width: '15rem',
                background: item.background,
                borderWidth: item.borderWidth,
              }}
            >
              <Card.Body>
                <Card.Title className="text-sm" style={{ fontSize: '14px' }}>
                  {item.text}
                </Card.Title>
                <img
                  src={item.image}
                  alt={`Gambar ${index + 1}`}
                  className="w-100 h-80 object-cover mb-6 shadow-lg mx-auto"
                />
              </Card.Body>
            </Card>
          </div>
        ))}

        {/* Materi Kelas 2 */}
        {materiKelas2Data.map((item, index) => (
          <div key={index} className="m-4">
            <Card
              style={{
                width: '15rem',
                background: item.background,
                borderWidth: item.borderWidth,
              }}
            >
              <Card.Body>
                <Card.Title className="text-sm" style={{ fontSize: '14px' }}>
                  {item.text}
                </Card.Title>
                <img
                  src={item.image}
                  alt={`Gambar ${materiKelas1Data.length + index + 1}`}
                  className="w-100 h-80 object-cover mb-6 shadow-lg mx-auto"
                />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aktivitas;
