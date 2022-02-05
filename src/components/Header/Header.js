import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../logos/logo.png";
import Sidebar from "../LeftMenu/Sidebar";

function Header() {
  let time = new Date().toLocaleTimeString()
  let date = new Date().toLocaleDateString()
  return (
    // Header
    <div className="header">
      {/* Side bar */}
      <div>
        <Sidebar />
      </div>
      {/* Header Logo */}
      <Link to="/welcome">
        <img className="header__logo" src={Logo} alt="" />
      </Link>
      {/* Main Header Items */}
      <nav className="header__nav">
        <div className="header__items">
          <div className="header__itemsLeft">
            <span>Language</span>
            <div style={{ margin: "5px 0px" }}>
              <select className="header__itemsDropdowm">
                <option>English</option>
                <option>Arabic</option>
                <option>Chinese</option>
                <option>Japanese</option>
              </select>
            </div>
          </div>
          <div className="header__itemsLeft">
            <span>Systems</span>
            <div style={{ margin: "5px 0px" }}>
              <select className="header__itemsDropdowm">
                <option>EPM</option>
                <option>QMS</option>
                <option>SMS</option>
                <option>MMS</option>
              </select>
            </div>
          </div>
          <div className="header__itemsLeft">
            <span>Project: Cost Center</span>
            <div style={{ margin: "5px 0px" }}>
              <select className="header__itemsDropdowm">
                <option>Project Name: (100 = A)</option>
                <option>Project Name: (100 = B)</option>
                <option>Project Name: (100 = C)</option>
                <option>Project Name: (100 = D)</option>
              </select>
            </div>
          </div>
          <div style={{ margin: "20px 10px" }}>
            <span>Search Here</span>
            <div style={{ margin: "5px 0px" }}>
              <input className="header__searchInput" type="text" />
            </div>
          </div>
        </div>
        <div
          style={{
            // border: "2px solid red",
            padding: "25px 9px",
            fontWeight: "bold",
            fontSize: '18px',
            color: "white",
          }}
        >
          {date}
          <div>
          {time}
          </div>
        </div>
        {/* <div>
          <Link to="/">
            <img
              className="header__client"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
              alt=""
            />
          </Link>
        </div> */}
        <div>
          <Link to="/">
            <img
              className="header__client2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
              alt=""
            />
          </Link>
        </div>
        {/* <div>
          <Link to="/">
            <img
              className="header__client3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
              alt=""
            />
          </Link>
        </div> */}
      </nav>
    </div>
  );
}

export default Header;

// import React from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";
// import Logo from "../logos/logo.png";
// import { GoThreeBars } from "react-icons/go";
// import Sidebar from "./Sidebar";
// import { Sticky } from "semantic-ui-react";

// function Header() {
//   return (
//     <div style={{ display: "flex", position: "sticky", top: 0 }}>
//       <div>
//         <Sidebar />
//       </div>
//       <Link to="/">
//         <img className="header__logo" src={Logo} alt="" />
//       </Link>
//       <nav className="header">
//         <div className="header__nav">
//           <div style={{ margin: "5px" }}>
//             <span>Language</span>
//             <div>
//               <select style={{ border: "none", borderRadius: "5px" }}>
//                 <option>English</option>
//                 <option>Arabic</option>
//                 <option>Chinese</option>
//                 <option>Japanese</option>
//               </select>
//             </div>
//           </div>
//           <div style={{ margin: "5px" }}>
//             <span>Systems</span>
//             <div>
//               <select style={{ border: "none", borderRadius: "5px" }}>
//                 <option>EPM</option>
//                 <option>QMS</option>
//                 <option>SMS</option>
//                 <option>MMS</option>
//               </select>
//             </div>
//           </div>
//           <div style={{ margin: "5px" }}>
//             <span>Project: Cost Center</span>
//             <div>
//               <select style={{ border: "none", borderRadius: "5px" }}>
//                 <option>Project Name: (100 = A)</option>
//                 <option>Project Name: (100 = B)</option>
//                 <option>Project Name: (100 = C)</option>
//                 <option>Project Name: (100 = D)</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div style={{ margin: "5px" }}>
//           <span>Search Here</span>
//           <div>
//             <input
//               style={{
//                 border: "none",
//                 borderRadius: "5px",
//               }}
//               type="text"
//             />
//           </div>
//         </div>
//         <div>
//           <span>Date</span>
//           <div>01-01-2022</div>
//         </div>
//         <div style={{ margin: "5px", marginLeft: "5px" }}>
//           <span>Time</span>
//           <div>12:25:00PM</div>
//         </div>
//         <div>
//         <Link to="/">
//           <img
//             className="header__client"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
//             alt=""
//           />
//         </Link>
//       </div>
//       <div>
//         <Link to="/">
//           <img
//             className="header__client2"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
//             alt=""
//           />
//         </Link>
//       </div>
//       <div>
//         <Link to="/">
//           <img
//             className="header__client3"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
//             alt=""
//           />
//         </Link>
//       </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
