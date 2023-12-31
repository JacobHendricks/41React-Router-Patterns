import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


function ColorRoutes() {

  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  // function renderCurrentColor(props) {
  //   const { color } = props.match.params;
  //   const hex = colors[color];
  //   return <Color {...props} hex={hex} color={color} />;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />}/>
        <Route exact path="/colors/new" element={<NewColorForm addColor={handleAdd} />}/>
        <Route path="/colors/:color" element={<Color colors={colors} />} />
      </Routes>
      {/* <Navigate to="/colors" /> */}
    </BrowserRouter>
  );
}

export default ColorRoutes;