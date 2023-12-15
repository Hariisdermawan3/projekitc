
//  import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


const RumahAdat = () => {
  const imageSize = { width: '700px', height: '400px' }; // Sesuaikan ukuran gambar

  return (
    <div style={{ background: '#F0ECCF' }}>
      <div className="text-center">
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Mari Mengenal Rumah Adat Yang Ada Di Indonesia</h2>
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
                src="src/assets/img/RumahAdat1.png"
                alt="Testimonial 1"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rumah Adat Aceh, Rangkang</h4>
              <p>Rumah adat Aceh lebih dikenal dengan nama Rumoh Aceh. Terdapat beberapa jenis
                <br />
                Rumah Adat di wilayah Aceh sendiri, salah satunya yakni Rumah Rangkang. Rumah ini
                <br />
                bukanlah rumah tinggal seperti sebelumnya, melainkan tempat untuk beristirahat bagi
                <br />
                masyarakat atau disebut tempat singgah. Rumah ini memang dibuat untuk bersinggah.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/RumahAdat2.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rumah Adat Jawa Barat, Julang Ngapak</h4>
              <p>Ada sebuah rumah adat yang berasal dari Tasikmalaya yakni Imah Julang Ngapak. Kata
                <br />
                Julang Ngapak sendiri memiliki arti burung yang sedang mengepakkan sayap. Rumah
                <br />
                adat Julang Ngapak ini memiliki bentukan atap yang melebar pada setiap sisinya. Untuk
                <br />
                bisa masuk ke dalam rumah adat ini disediakan sebuah tangga yang disebut golodog</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/RumahAdat3.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rumah Adat Jawa Tengah, Joglo</h4>
              <p>Rumah adat Joglo ini dikenal sebagai rumah untuk para bangsawan atau orang kaya.
                <br />
                Tidak heran bila rumah ini berbahan utama kayu yang mahal dan berkualitas. Rumah ini
                <br />
                memiliki ciri-ciri, yaitu terdapat empat tiang utama pada depan rumah. Di dalam
                <br />
                ruangan juga terdapat 2 bagian. Pada bagian rumah induk terdapat, seperti Pendopo</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/RumahAdat4.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rumah Adat Jawa Timur, Osing</h4>
              <p>Rumah adat Osing berasal dari timur Pulau Jawa, lebih tepatnya di Banyuwangi yang
                <br />
                berbatasan langsung dengan Selat Bali. Rumah adat Osing ini terbagi menjadi tiga
                <br />
                bagian di setiap bangunannya, seperti Tikel Balung, Baresan, dan Crocogan.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/RumahAdat5.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rumah Adat Bali, Bale Gede</h4>
              <p>Rumah adat Bali dikenal dengan arsitekturnya yang unik serta memiliki fungsinya
                <br />
                masing-masing. Salah satunya yakni Bale Gede, bangunan ini merupakan tempat
                <br />
                diselenggarakannya beragam upacara adat, membakar sesaji, atau berkumpul untuk
                <br />
                menyantap makanan khas Bali. Oleh karena itu, bangunan ini harus lebih tinggi </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/RumahAdat6.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Rumah Adat Papua, Honai</h4>
              <p>Rumah Honai merupakan salah satu rumah khas Papua, namun tidak dapat ditemukan
                <br />
                di seluruh Papua, hanya dapat ditemui pada suku Dani tepatnya di lembah Baliem,
                <br />
                Kabupaten Jayawijaya, Papua. Sesuai namanya, Honai memiliki arti khusus. 'Hun' berarti
                <br />
                laki-laki, serta 'ai' berarti rumah. Maka tidak heran bahwa rumah ini khusus untuk pria.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RumahAdat;
