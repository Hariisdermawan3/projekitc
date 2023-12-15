import Heroes from "./../assets/img/Heroes.png";
import foto1 from "./../assets/img/content1.png";
import foto2 from "./../assets/img/content2.png";
import foto3 from "./../assets/img/content3.png";
import gitar from "./../assets/img/guitar.png";
import rat from "./../assets/img/rating.png";
import rockll from "./../assets/img/rockroll.png";

import { FaStar, FaRegStar } from "react-icons/fa";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const LandingPage = () => {
  return (
    <>
      <header>
        <div className="Heroes">
          <img src={Heroes} alt="Heroes" />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontWeight: "bold" }}>Belajar Bersama Seni Budaya</h1>
            <p style={{ textAlign: "center" }}>Bergabung bersama kami untuk pengalaman belajar yang menyenangkan</p>
          </div>
        </div>
      </header>
      <div className="content1" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
        <h2 style={{ fontWeight: "bold" }}>Mari mengenal Seni Budaya</h2>
        <p style={{ textAlign: "center" }}>
          Menurut Kamus Besar Bahasa Indonesia (KBBI), seni budaya merupakan perihal kesenian dan kebudayaa. Seni Budaya juga dapat dipahami sebagai segala sesuatu yang diciptakan oleh manusia yang memiliki unsur keindahan secara
          turun-temurun dari generasi satu ke generasi lainnya.
        </p>
        <img src={foto1} alt="Foto 1" style={{ display: "block", margin: "0 auto" }} />
      </div>
      <div className="content2">
        <div style={{ flex: 1, marginRight: "20px" }}>
          <img src={foto2} alt="Foto 2" style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "24px" }}>
          <p>
            Menurut KBBI (Kamus Besar Bahasa Indonesia)
            <br />
            "Seni Tari merupakan aliran dari seni tentang gerakan badan
            <br />
            berupa tangan serta bagian tubuh lain yang memiliki irama
            <br />
            dan biasanya diiringi musik."
          </p>
        </div>
      </div>
      <div className="content3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", background: "#f2d1d1", marginTop: 10 }}>
        <p style={{ textAlign: "center", marginLeft: "200px", fontSize: "24px" }}>
          Musik Tradisional juga bisa diartikan
          <br />
          sebagai jenis musik yang lahir dan
          <br />
          berkembang dari budaya daerah tertentu
          <br />
          dan diwariskan secara turun-temurun.
        </p>
        <img src={foto3} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "50px" }}>
        <div className="content4">
          <img src={gitar} alt="Gitar" />
        </div>
        <div className="content5">
          <img src={rat} alt="Rat" />
        </div>
        <div className="content6">
          <img src={rockll} alt="Rockll" />
        </div>
      </div>
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
        <SwiperSlide>
          <div className="testi">
            <div className="name">Ibu Ningsih</div>
            <div className="angka">4.9</div>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text">"Website ini sangat membantu saya dalam mendampingi belajar anak saya di rumah. Anak saya jadi suka belajar karena tampilannya yang menarik."</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testi">
            <div className="name">Nindya</div>
            <div className="angka">4.5</div>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className="text">"SeniBudaya keren banget, aku jadi suka belajar budaya karena materinya mudah dipahami dan tampilannya penuh warna. Jadi semangat deh belajarnya."</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testi">
            <div className="name">Made Aditya</div>
            <div className="angka">4.5</div>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className="text">"Terima kasih kakak telah menghadirkan website ini, saya jadi bisa bantu adik saya kalau ada PR kesenian. Karena materinya lumayan lengkap."</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LandingPage;
