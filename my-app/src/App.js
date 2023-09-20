import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList.js";
import Footer from "./Components/Footer.js";

function App() {
  const productlist = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi note 10s Max",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <ProductList productList={productlist} />
      <Footer />
    </>
  );
}

export default App;
