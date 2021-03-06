import Image from "next/image";
import style from "../../styles/gallerypackage.module.scss";
import styles from "../../styles/home.module.scss";
import img1 from "../../public/gallery/product-photos/1.jpeg";
import img2 from "../../public/gallery/product-photos/2.jpg";
import img3 from "../../public/gallery/product-photos/3.jpg";
import img4 from "../../public/gallery/product-photos/4.jpg";
import img5 from "../../public/gallery/product-photos/5.jpg";
import img6 from "../../public/gallery/product-photos/6.jpg";
import img7 from "../../public/gallery/product-photos/7.gif";
import img8 from "../../public/gallery/product-photos/8.jpg";

import Link from "next/link";

export function Gallerypackage() {
  return (
    <>
      <div className={style.container}>
        <div className={style.gallerypackage}>
          <div className={style.part1}>
            <div className={style.col1}>
              <div className={style.item}>
                <Image classname={style.img} src={img1} alt="" />
              </div>
              <div className={style.item}>
                <Image classname={style.img} src={img2} alt="" />
              </div>
            </div>

            <div className={style.col2}>
              <div className={style.item}>
                <Image classname={style.img} src={img3} alt="" />
              </div>
              <div className={style.item}>
                <Image classname={style.img} src={img4} alt="" />
              </div>
            </div>
          </div>
          <div className={style.part2}>
            <div className={style.col3}>
              <div className={style.item}>
                <Image classname={style.img} src={img5} alt="" />
              </div>
              <div className={style.item}>
                <Image classname={style.img} src={img6} alt="" />
              </div>
            </div>
            <div className={style.col4}>
              <div className={style.item}>
                <Image src={img7} alt="" />
              </div>
              <div className={style.item}>
                <Image src={img8} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.btnServices}>
          <Link href="/">
            <a style={{ paddingRight: "0px", color: "white" }}>
              <button className={styles.dark}>Get Started </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
