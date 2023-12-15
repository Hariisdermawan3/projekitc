
//  import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const AlatMusik = () => {
  const imageSize = { width: '700px', height: '400px' }; // Sesuaikan ukuran gambar

  return (
    <div style={{ background: '#F0ECCF' }}>
      <div className="text-center">
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Mari Mengenal Alat Musik Daerah Yang Ada Di Indonesia</h2>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          rewind={true}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial text-center">
              <img
                src="src/assets/img/AlatMusik1.png"
                alt="Testimonial 1"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Serune Kale, Alat Musik Tradisional Aceh</h4>
              <p>Serune kale merupakan alat music tiup tradisional Aceh. Serune kale dikelompokkan
                <br />
                dalam instrument tiup jenis aerofone, yang sumber bunyinya dari aeroa tau udara
                <br />
                dengan cara ditiup. Instrumen ini mempunyai lidah (rief) untuk sumber bunyi, terdiri dari
                <br />
                empat helai daun lontar yang telah dikeringkan.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/AlatMusik2.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Angklung, Alat Musik Tradisional Jawa Barat</h4>
              <p>Angklung merupakan salah satu alat musik yang kini diakui hingga mancanegara. Alat
                <br />
                musik angklung yang berasal dari Jawa Barat ini terbuat dari bambu dan dimainkan
                <br />
                dengan cara digoyangkan. Angklung terdiri dari dua hingga empat tabung bambu yang
                <br />
                digantung dalam bingkai bambu pula. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/AlatMusik3.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Gamelan, Alat Musik Tradisional Jawa Tengah</h4>
              <p>Alat musik tradisional ini telah dikenal tidak hanya di tingkat nasional, namun hingga ke
                <br />
                mancanegara. Gamelan bisa dimaknai sebagai seperangkat alat musik yang dipukul
                <br />
                atau ditabuh. Alat musik tradisional ini diperkirakan sudah ada semenjak 404 Masehi.
                <br />
                Gamelan Jawa hingga saat ini masih sering digunakan untuk mengiringi acara budaya</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/AlatMusik4.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Kendang, Alat Musik Tradisional Jawa Timur</h4>
              <p>Kendang atau gendang adalah alat musik pukul yang umum dijumpai di beberapa
                <br />
                daerah di Indonesia. Dalam ragam alat musik Jawa Timur juga terdapat kendang.
                <br />
                Kendang ini terbuat dari glugu atau kayu kelapa tua dan kayu pohon nangka. Di
                <br />
                Banyuwangi terdapat kendang gandrung yang digunakan dalam kesenian Gandrung.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/AlatMusik5.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rindik, Alat Musik Tradisional Bali</h4>
              <p>Rindik merupakan salah satu alat musik Bali yang dipukul dan terbuat dari bambu. Alat
                <br />
                musik tradisional ini memiliki lima nada dasar pada bilah bambunya dan cara
                <br />
                memainkannya dengan memukulnya dengan palu khusus. Alat musik  ini sering
                <br />
                digunakan sebagai pelengkap resepsi pernikahan dan penyambutan tamu. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/AlatMusik6.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tifa, Alat Musik Tradisional Papua</h4>
              <p>Tifa merupakan salah satu alat musik yang terkenal dari Papua. Alat musik ini terbuat
                <br />
                dari batang kayu matoa yang dilubangi di bagian dalamnya. Alat musik ini disebut
                <br />
                berasal dari masyarakat Suku Sentani yang berada di Kabupaten Jayapura, Papua.
                <br />
                Seiring berjalannya waktu, tifa meluas ke beberapa wilayah Indonesia Timur lainnya, </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AlatMusik;
