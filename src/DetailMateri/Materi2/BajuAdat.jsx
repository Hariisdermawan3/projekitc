
//  import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const BajuAdat = () => {
  const imageSize = { width: '700px', height: '400px' }; // Sesuaikan ukuran gambar

  return (
    <div style={{ background: '#F0ECCF' }}>
      <div className="text-center">
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Mari Mengenal Baju Adat Daerah Yang Ada Di Indonesia</h2>
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
                src="src/assets/img/BajuAdat1.png"
                alt="Testimonial 1"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Baju Adat Aceh, Ulee Balang</h4>
              <p>Pakaian adat Ulee Balang pada mulanya hanya dipakai oleh keluarga raja. Namun kini,
                <br />
                busana tersebut dijadikan sebagai pakaian adat tradisional Aceh. Terdapat dua nama
                <br />
                atau istilah dalam pakaian adat Ulee Balang, yaitu Linto Baro untuk pakaian adat laki-
                <br />
                laki dan Daro Baro untuk pakaian perempuan..</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/BajuAdat2.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Baju Adat Jawa Barat, Kebaya dan Pangsi</h4>
              <p>Kebaya Sunda umumnya digunakan untuk wanita. Perbedaan kebaya sunda dan jawa
                <br />
                terletak pada kerahnya, kebaya jawa berkerah V dan kebaya sunda berkerah U.
                <br />
                Kemudian terdapat baju adat Pangsi yang biasanya dikenakan kaum laki-laki Sunda dan
                <br />
                hanya didesain dengan satu warna saja, yaitu hitam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/BajuAdat3.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Baju Adat Jawa Tengah, Kebaya dan Jangkep</h4>
              <p>Kebaya merupakan baju adat yang digunakan oleh kaum wanita. Kebaya Jawa Tengah
                <br />
                memiliki dua model, panjang dan pendek. Bawahan yang digunakan yakni kain jarik
                <br />
                atau kain batik. Jawi jangkep merupakan baju adat yang digunakan oleh kaum pria.
                <br />
                Atasan pada jawi jangkep berupa baju beskap dengan motif bunga.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/BajuAdat4.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Baju Adat Jawa Timur, Pesa’an</h4>
              <p>Pesa'an adalah baju adat khas dari Madura, provinsi Jawa Timur. Baju Pesa'an menjadi
                <br />
                salah satu simbol utama yang menjadi wakil budaya baju adat Jawa Timur di Nusantara.
                <br />
                Baju Pesa'an ini bisa digunakan pada acara-acara penting masyarakat Madura seperti
                <br />
                acara upacara pernikahan ataupun acara penting lainnya. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/BajuAdat5.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Baju Adat Bali, Payas Agung</h4>
              <p>Baju payas agung merupakan baju adat mewah dan lengkap yang biasanya dipakai oleh
                <br />
                pengantin Bali biasa digunakan untuk pernikahan. Baju payas agung ini memiliki warna
                <br />
                yang cerah sehingga melambangkan kebahagiaan untuk calon mempelai. Baju payas
                <br />
                agung ini memiliki perbedaan antar daerah di Provinsi Bali. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: '#F0ECCF' }}>
            <div className="testimonial-box-wrapper text-center">
              <img
                src="src/assets/img/BajuAdat6.png"
                alt="Testimonial 2"
                className="mx-auto"
                style={imageSize}
              />
              <h4>Baju Adat Papua, Kurung</h4>
              <p>Baju kurung merupakan pakaian adat Papua yang digunakan oleh para wanita sebagai
                <br />
                atasan. Bahan dari baju kurung adalah kain beludru. Baju kurung mendapatkan
                <br />
                pengaruh dari budaya luar Papua dan banyak dipakai oleh perempuan di Manokwari. Di
                <br />
                Papua bagian Barat juga banyak yang mengenakan baju ini untuk acara adat.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BajuAdat;
