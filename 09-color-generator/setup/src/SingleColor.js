import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = props => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight } = props.color;
  const { hexColor } = props;
  const { index } = props.index;

  const hex = rgbToHex(...rgb);

  const bcg = rgb.join(',');

  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
