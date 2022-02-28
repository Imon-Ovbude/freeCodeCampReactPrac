import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
