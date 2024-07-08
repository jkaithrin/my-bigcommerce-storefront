import Image from "next/image";

import axios from 'axios';

const apiUrl = 'https://api.bigcommerce.com/stores/csav3zovyh/v3/';
const headers = {
  'X-Auth-Token': 'g5it6qkxrl7v0md7gh4t4eu228nft7w',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

async function FetchCategories() {
  const response = await axios.get(`${apiUrl}catalog/trees/categories?limit=250`, { headers });
  //console.log(response.data.data)
  
  return (
    <ul>
      {response.data.data.map((category, cindex) => (
        <li key={cindex} id={category.id}>== {category.name}</li>
      ))}
    </ul>
  )
};

async function FetchProducts() {
  const response = await axios.get(`${apiUrl}catalog/products?limit=250`, { headers });
  //console.log(response.data.data)
  
  return (
    <ul>
      {response.data.data.map((product, pindex) => (
        <li key={pindex} id={product.id}><a href={product.id}>== {product.name}</a></li>
      ))}
    </ul>
  )
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <strong>Category Lists</strong>
      <p>---------------------------------------------</p>
      <FetchCategories />
    </main>
  );
}
