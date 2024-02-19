import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return `
    ${Header()}
    <div class="container">
      <h1>San pham ban chay</h1>
      <div class="productList" id="productList">
      </div>
    </div>
    ${Footer()};
    `;
};
export default HomePage;
