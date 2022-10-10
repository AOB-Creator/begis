import Navbar from "../navigation";
import Main from "../main";
import CardsFour from "../fourcards";
import ThreeCards from "../threecard";
import Aboutme from "../aboutme";
import Bytop from "../bytop";
function HomePage() {
  return (
    <div>
      <Main></Main>
      <CardsFour />
      {/* <ThreeCards /> */}
      <Aboutme />
      <Bytop to="/" />
    </div>
  );
}

export default HomePage;
