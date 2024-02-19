import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFoundPage = () => {
  return `
    ${Header()}
    <div class="container">
      <h1>ko tim thay duong dan</h1>
      <a href="/">Quay lai trang chu </a> 
    </div>
    ${Footer()};
    `;
};
export default NotFoundPage;
