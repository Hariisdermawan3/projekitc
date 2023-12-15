import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

const FooterComp = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <div className="social-media">
                <a href="#"><IoLogoWhatsapp /></a>
                <a href="#"><IoLogoInstagram /></a>
                <a href="#"><IoLogoFacebook /></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Kelas 1</h4>
              <ul>
                <li><a href="#">Pengenalan Seni Budaya</a></li>
                <li><a href="#">Tari Tradisional</a></li>
                <li><a href="#">Seni Menggambar dan Melukis</a></li>
                <li><a href="#">Cerita Rakyat dan Dongeng</a></li>
                <li><a href="#">Musik Tradisional Sederhana</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kelas 2</h4>
              <ul>
                <li><a href="#">Tari Daerah</a></li>
                <li><a href="#">Alat Musik Daerah</a></li>
                <li><a href="#">Baju Adat</a></li>
                <li><a href="#">Rumah Adat</a></li>
                <li><a href="#">Games</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Sosial Media</h4>
              <ul>
                <li><a href="#">Email : wellifyofficial@gmail.com</a></li>
                <li><a href="#">Instagram : @wellify_official</a></li>
                <li><a href="#">Facebook : wellify_official</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed-footer">
        <div className="container">Presented By NCM Group</div>
      </div>
    </div>
  )
}

export default FooterComp