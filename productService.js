async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  // Add your solution here!
  const product = await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return product;
}

module.exports = getProduct;
