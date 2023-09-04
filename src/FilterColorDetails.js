import React from 'react';
import { useParams } from 'react-router-dom';
import Color from './Color';

function FilterColorDetails({colors}) {
  const {color} = useParams();

  if (color) {
    const currentColor = color.find(
      color => color.color.toLowerCase() === color.toLowerCase()
    );
    return <Color color={currentColor} />;
  }
  
  return null;
}

export default FilterColorDetails;