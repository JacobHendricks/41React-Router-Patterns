import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import "./Color.css";

function Color({colors}) {
  const {color} = useParams();
  const colorList = {...colors};
  const navigate = useNavigate
  const hex = colorList[color];
      
  if (!hex) {
    navigate("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/colors">Go back</Link>
      </p>
    </div>
  );
}
// function Color({hex, color}) {

//   const navigate = useNavigate
//   if (!hex) {
//     navigate("/colors");
//   }

//   return (
//     <div className="Color" style={{ backgroundColor: hex }}>
//       <p>this is {color}.</p>
//       <p>Isn't it beautiful?</p>
//       <p>
//         <Link to="/">Go back</Link>
//       </p>
//     </div>
//   );
// }

export default Color;