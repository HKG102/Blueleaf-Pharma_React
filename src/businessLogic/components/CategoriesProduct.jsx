import React from 'react'
import { useLocation } from 'react-router-dom';

function CategoriesProduct() {
    const location = useLocation();
    const { category, data } = location.state || {};
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Category: {category}</h2>
        <pre className="bg-gray-100 p-4 rounded shadow">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
}

export default CategoriesProduct