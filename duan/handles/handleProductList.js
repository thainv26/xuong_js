import api from "../apis/index.js";

const hadleProductList = async () =>{
    const productList = document.getElementById("productList");
    try {
        const { data } = await api.get("/products");
        console.log(data);

        const contentHTML = data
          .map((item) => {
            return `
        <div class="product-card">
          <img src="${item.thumbnail}" />
          <div class="product-infor">
                <h3>${item.title}</h3>
                <p>Gia: ${item.price}</p>
                <div>Mo ta: ${item.description}</div>
                <a class="btn btn-primary" href="products/${item.id}">Xem chi tiet </a>
            </div>
        </div>
  `;
          })
          .join("");
        productList.innerHTML = contentHTML;
    } catch (error) {
        console.log(error);
    }
};
export default hadleProductList;