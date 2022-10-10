import { useRouter } from "next/router";
import Cardsproject from "../../components/cardsproject";
import Map from "../../components/map/index";
import Projects from "../../components/projectsabout";
import Bytop from "../../components/bytop/index";
function Ports() {
  let port = useRouter();

  let datainfo = [
    {
      img: "three1.png",
      company: "Зеленый чай",
      job: "SMM Designs",
      link: "greentea",
      imgs: [
        "./greentea/image 1.png",
        "./greentea/image 2.png",
        "./greentea/image 3.png",
        "./greentea/image 4.png",
        "./greentea/image 5.png",
        "./greentea/image 6.png",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit semper interdum fusce mauris vitae et et. Tristique mi quisque et morbi gravida maecenas. Ligula volutpat lacus nunc, fermentum massa. Tincidunt velit augue mauris, placerat nulla pellentesque integer at. Ligula volutpat lacus nunc, fermentum massa. Tincidunt velit augue mauris, placerat nulla pellentesque integer at.",
    },
    {
      img: "three2.png",
      company: "Steady LC",
      job: "SMM Designs",
      link: "steady",
      imgs: [
        "./steady/steady 1.png",
        "./steady/steady 2.png",
        "./steady/steady 3.png",
        "./steady/steady 4.png",
        "./steady/steady 5.png",
        "./steady/steady 6.png",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit semper interdum fusce mauris vitae et et. Tristique mi quisque et morbi gravida maecenas. Ligula volutpat lacus nunc, fermentum massa. Tincidunt velit augue mauris, placerat nulla pellentesque integer at. Ligula volutpat lacus nunc, fermentum massa. Tincidunt velit augue mauris, placerat nulla pellentesque integer at.",
    },
    {
      img: "three3.png",
      company: "Зеленая аптека",
      job: "SMM Designs",
      link: "greendrugs",
      imgs: [
        "./greendrugs/image 1.png",
        "./greendrugs/image 2.png",
        "./greendrugs/image 3.png",
        "./greendrugs/image 4.png",
        "./greendrugs/image 5.png",
        "./greendrugs/image 6.png",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit semper interdum fusce mauris vitae et et. Tristique mi quisque et morbi gravida maecenas. Ligula volutpat lacus nunc, fermentum massa. Tincidunt velit augue mauris, placerat nulla pellentesque integer at. Ligula volutpat lacus nunc, fermentum massa. Tincidunt velit augue mauris, placerat nulla pellentesque integer at.",
    },
  ];

  return (
    <div>
      <Map
        to={`/portfolios/${port.query.id}`}
        number={3}
        text={port.query.id}
      ></Map>

      <div>
        {datainfo.map((item, index) => {
          if (item.link == port.query.id) {
            return (
              <div key={index}>
                <Projects img={item.img} descr={item.description} />
                <Cardsproject data={item} key={index} />;
                <Bytop to={`${item.link}`} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Ports;
