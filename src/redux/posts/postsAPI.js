export const getPosts = async ()=>{
// const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const response = await fetch('https://dummyjson.com/products')
const data = await response.json()
 // Access the 'products' property
  return data.products; // Return the products

}