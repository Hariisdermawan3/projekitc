
//  import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const TariDaerah = () => {
  const imageSize = { width: '700px', height: '400px' }; // Sesuaikan ukuran gambar

  return (
    <div style={{ background: '#F0ECCF' }}>
      <div className="text-center">
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Mari Mengenal Tari Daerah Yang Ada Di Indonesia</h2>
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
          <SwiperSlide style={{ background: '#F0ECCF'}}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/Tari1.png"
                alt="Testimonial 1"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tari Saman, Aceh</h4>
              <p>Tari Saman merupakan tarian yang berasal dari suku Gayo, Aceh dan biasanya ditampilkan
                <br />
                dalam suatu perayaan penting di suatu peristiwa adat. Syair pada tariannya juga
                <br />
                mempergunakan Bahasa-bahasa Gayo. Tarian ini sendiri mencerminkan keagamaan,
                <br />
                sopan santun, pendidikan, kekompakan, kepahlawanan, dan kebersamaan.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/Tari2.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tari Jaipong, Jawa Barat</h4>
              <p>Tarian Jaipong adalah tarian gabungan dari sejumlah kesenian tradisional, misalnya
                <br />
                pencak silat, ketuk tilu, dan wayang golek. Awal mula berkembangnya Tari Jaipong ini di
                <br />
                daerah Bandung dan Karawang, Jawa Barat. Dari situlah tarian ini populer sebagai tarian
                <br />
                yang memiliki gerakan-gerakan yang unik, energik, dan sederhana.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/Tari3.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tari Gambyong, Jawa Tengah</h4>
              <p>Tari Gambyong adalah tari tradisional yang berasal dari daerah Surakarta, Jawa Tengah.
                <br />
                Berdasarkan iringan gendingnya, Tari Gambyong mempunyai berbagai ragam, yaitu
                <br />
                Gambyong Pareanom, Gambyong Pancerana, dan Gambyong Pangkur. Tarian ini mulai
                <br />
                ditampilkan di lingkungan Istana Mangkunegaran pada era tahun 1916-1944.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/Tari4.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tari Reog Ponorogo, Jawa Timur</h4>
              <p>Tari Reog Ponorogo adalah seni tari tradisional masyarakat Ponorogo, Jawa Timur yang
                <br />
                juga dikenal dengan sebutan Barongan. Tarian ini menampilkan singo barong, sosok
                <br />
                dengan topeng macan berhias bulu merak dengan ukuran sangat besar dan ditarikan
                <br />
                dengan gerakan yang meliuk-liuk. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/Tari5.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tari Kecak, Bali</h4>
              <p>Tari kecak adalah salah satu jenis tari-tarian tradisional yang memerlukan banyak
                <br />
                penari. Selain penari utama, ada  para lelaki yang bertugas mengelilingi dengan
                <br />
                gerakan tangan di atas. Terlebih di masa lampau, tari kecak memiliki sejumlah fungsi
                <br />
                utama, salah satunya yakni sebagai sarana upacara adat keagamaan. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/Tari6.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Tari Pangkur Sagu, Papua</h4>
              <p>Tari Pangkur Sagu merupakan tarian yang menggambarkan kegiatan masyarakat Papua
                <br />
                ketika bersiap melakukan panen sagu. Tarian ini secara simbolik menggambarkan ritual
                <br />
                pesta yang diadakan masyarakat Papua pada saat membuat sagu. Gotong royong,
                <br />
                kebersamaan, serta rasa syukur adalah nilai yang disampaikan pada tarian ini. </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TariDaerah;
