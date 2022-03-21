import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const People = props => {
  const { image, name, title, quote } = props.person;
  console.log(image);

  return (
    <article>
      <img src={image} alt={name} className='person-img' />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  );
};

export default People;
