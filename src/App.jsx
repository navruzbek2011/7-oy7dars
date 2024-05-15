import "./App.css";
import dlishod from "./assets/images/Group 30.png"
import dlishod2 from "./assets/images/menu-toggle.png"
import dlishod3 from "./assets/images/Home.png"
import dlishod4 from "./assets/images/graduation-cap-solid 1.png"
import dlishod5 from "./assets/images/users-solid 1.png"
import dlishod6 from "./assets/images/credit-card-solid 1.png"
import dlishod7 from "./assets/images/address-book-solid 1.png"
import dlishod8 from "./assets/images/flat-color-icons_sms.png"
import { FiSun } from "react-icons/fi";
import { FaCloud } from "react-icons/fa";
import dlishod9 from "./assets/images/icon.png"
import dlishod10 from "./assets/images/statistika.png"

function App() {
  return (
    <div className="container">
      <div className="divs1">
        <img className="divs1_img" src={dlishod} alt="" />
        <p className="divs1_text">CRM PANEL</p>
          <img className="divs1_img2" src={dlishod2} alt="" />
          <div className="divs1_div1"><img className="divs1_div1_img" src={dlishod3} alt="" /><p className="jurabek">Xisobot</p></div>
          <div className="divs1_div2"><img className="divs1_div1_img" src={dlishod4} alt="" /><p className="jurabek">O’quvchilar</p></div>
          <div className="divs1_div3"><img className="divs1_div1_img" src={dlishod5} alt="" /><p className="jurabek">Guruhlar</p></div>
          <div className="divs1_div4"><img className="divs1_div1_img" src={dlishod6} alt="" /><p className="jurabek">To’lovlar</p></div>
          <div className="divs1_div5"><img className="divs1_div1_img" src={dlishod7} alt="" /><p className="jurabek">Davomat</p></div>
          <div className="divs1_div6"><img className="divs1_div1_img" src={dlishod8} alt="" /><p className="jurabek">Murojaatlar</p></div>
      </div>
      <div className="divs2">
        <div className="divs2_header">
          <p className="divs2_header_text">Xisobot</p>
          <p className="divs2_header_text2">27.01.2022</p>
          <select className="divs2_header_section">
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
            <option value="EN">EN</option>
          </select>
          <div className="sun">
            <FiSun/>
          </div>
          <div className="cloud">
            <FaCloud/>
          </div>
        </div>
        <div className="sardor">
          <p className="war">Jami o’quvchilar soni:</p>
          <p className="wit">255 ta</p>
          <div className="hela"><img src={dlishod9} alt="" /></div>
        </div>
        <div className="sardor2">
          <p className="war">Shu oy tark etganlar</p>
          <p className="wit">60 ta</p>
          <div className="hela"><img src={dlishod9} alt="" /></div>
        </div>
        <div className="sardor3">
          <p className="war">O’qituvchilar soni:</p>
          <p className="wit">10 ta</p>
          <div className="hela"><img src={dlishod9} alt="" /></div>
        </div>
        <div className="sardor4">
          <p className="war">Jami guruhlar soni</p>
          <p className="wit">26 ta</p>
          <div className="hela"><img src={dlishod9} alt="" /></div>
        </div>
      </div>
      <img className="kilo" src={dlishod10} alt="" />
    </div>
  )
}
export default App;
