import React, { useState, useEffect } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8000/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  


  return (
    <div>
    <hr />    <h1>BİRİNCİ TEST KISIMI</h1>
      <h2>Category List</h2>
      <ul>
        {categories.map(category => (
            <li key={category.id}>
                {category.title} 
                <img src={category.img_url} alt={category.title}     style={{ width: '100px', height: '100px' }} />
            </li>
        ))}
      </ul>
      <hr />    <h1>İKİNCİ TEST KISIMI</h1>
    </div>
  );
}

export default CategoryList;
