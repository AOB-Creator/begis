import styles from "./cards.module.scss";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
function CardsFour() {
  AOS.init();
  let cardsinfo = [
    {
      type: "UX/UI Design",
      project: "Ami app",
      img: "img4.png",
      images: ["./Ami/image 1.png", "./Ami/image 2.png"],
      link: "ami",
    },
    {
      type: "UX/UI Design",
      project: "Audiobook App",
      img: "img1.png",
      images: ["./Ami/image 1.png", "./Ami/image 2.png"],
      link: "audiobook",
    },
    {
      type: "Web Design",
      project: "Datanimate Landing page",
      img: "img3.png",
      images: [
        "./audiobook/image 1.png",
        "./audiobook/image 2.png",
        "./audiobook/image 3.png",
      ],
      link: "datanimate",
    },
    {
      type: "Web Design",
      project: "Bizler Group Website",
      img: "img2.png",
      images: ["./bizler/image 1.png"],
      link: "bizler",
    },
  ];

  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <h1 className={styles.texttop}>Избранные работы</h1>
        <div className={styles.cardspart}>
          {cardsinfo.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  href={`portfolios/${item.link}`}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <a>
                    <div className={styles.card}>
                      <div className={styles.cardtop}>
                        <div className={styles.left}>
                          <div className={styles.text1}>{item.type}</div>
                          <div className={styles.text2}>{item.project}</div>
                        </div>
                        <div className={styles.right}>
                          <BsArrowRight className={styles.icons} />
                        </div>
                      </div>
                      <div className={styles.cardbot}>
                        <img src={item.img} alt="alpa" />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CardsFour;
