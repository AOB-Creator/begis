import styles from "./three.module.scss";
import { BsArrowRight } from "react-icons/bs";
import ReadMore from "../readmore";
import Link from "next/link";
import Image from "next/image";

function ThreeCards() {
  let threeinfos = [
    {
      img: "three1.png",
      company: "Зеленый чай",
      job: "SMM Designs",
      link: "greentea",
    },
    {
      img: "three2.png",
      company: "Steady LC",
      job: "SMM Designs",
      link: "steady",
    },
    {
      img: "three3.png",
      company: "Зеленая аптека",
      job: "SMM Designs",
      link: "greendrugs",
    },
  ];
  return (
    <div className={styles.cardsthree}>
      <div className={styles.container}>
        <div className={styles.three}>
          <div className={styles.cardst}>
            {threeinfos.map((item, index) => {
              return (
                <div key={index} className={styles.cardt}>
                  <Link
                    href={`/portfolios/${item.link}`}
                    className={styles.cardt}
                  >
                    <a>
                      <div className={styles.topt}>
                        <img
                          src={item.img}
                          alt="pet"
                          width={480}
                          height={270}
                          layout="fill"
                        />
                      </div>
                      <div className={styles.bottomt}>
                        <div className={styles.company}>{item.company}</div>
                        <div className={styles.job}>{item.job}</div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <Link href={"/portfolio"}>
            <a>
              <ReadMore context="Все работы" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ThreeCards;
