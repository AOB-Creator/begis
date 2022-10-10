import CardsFour from "../fourcards";
import ThreeCards from "../threecard";
import Bytop from "../bytop";
import Map from "../map";
function PortfolioPage() {
  return (
    <div>
      <Map to="portfolio" text="Портфолио" />
      <CardsFour />
      <ThreeCards />
      <Bytop to="/portfolio" />
    </div>
  );
}
export default PortfolioPage;
