import "../styles/index.scss";
import Recipes from "./Recipes";
import image from "../images/img1.jpg"

function App() {
  return (
    <>
      <img src={image} alt="img" />
      <section className="hero"></section>
      <Recipes />
    </>
  );
}

export default App;
