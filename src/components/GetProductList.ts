import axios from "axios";

export default async function fetchData() {
  const URL = "https://fakestoreapi.com/products";
  async function getList() {
    const productsList = await axios.get(URL).then((response) => {
      const list = response.data;
      return { list };
    });

    return productsList.list;
  }

  return getList();
}
