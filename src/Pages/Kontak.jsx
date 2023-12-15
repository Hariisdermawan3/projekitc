import foto1 from './../assets/img/map.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Kontak = () => {
    return (
        <>
            <div class="contactUs-Konten" style={{ background: '#F0ECCF' }}>
                <div class="contact-header">
                    <h2>KONTAK KAMI</h2>
                    <p>Anda dapat terhubung dengan kami dengan cara berikut</p>
                </div>
                <div class="contact">
                    <div class="contact-info">
                        <div class="icon">
                            <i> <FaMapMarkerAlt /> </i>
                            <h3>Alamat</h3>
                            <p>Jalan Dewi Sartika, Klungkung Agung</p>
                        </div>
                        <div class="icon">
                            <i><FaRegClock /></i>
                            <h3>Jam Kerja</h3>
                            <p>Senin - Jumat 07:00 - 16:00</p>
                        </div>
                        <div class="icon">
                            <i><IoIosMail /></i>
                            <h3>E-mail</h3>
                            <p>contact@wellifyofficial.com</p>
                        </div>
                        <div class="icon">
                            <i><FaPhone /></i>
                            <h3>Telepon</h3>
                            <p>(021) 9033 9840 42</p>
                        </div>
                    </div>
                    <img src={foto1} alt="Peta Lokasi" />
                </div>
            </div>

        </>
    )
}

export default Kontak