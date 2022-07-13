import style from "../../styles/tools.module.scss";
import Link from "next/link";
import styles from "../../styles/home.module.scss";

export default function Toolsweb() {
  return (
    <>
      <div className={style.toolall}>
        <h2
          style={{
            marginBottom: "0px",
            paddingTop: "80px",
          }}
        >
          A digital home for your business
        </h2>
        <p
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          All website design services are custom and tailored to your business.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Website Design</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Includes custom design for all pages. No templates used. Crafted
              from concept to completion until you’re fully happy with your
              website.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Website Development</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Complete build-out of your website including all pages, contact
              and scheduling forms, responsive mobile development, custom
              functionality, and more.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Foundational Website SEO</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Includes keyword implementation, image optimization, all metadata
              and alt text, Google Analytics and Search Console integration.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Copywriting</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We take care of all your content needs with content questionnaires
              to help us organize content and write engaging website copy.
            </p>
          </div>
          <div className={style.tool}>
            <h4>External Intergrations</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              External email marketing programs, client management systems or
              social media feeds integration to streamline your business
              operations and marketing.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Technical Support</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will be available for a specific amount of time post the launch
              of your website to provide additional support if needed and make
              sure everything is running as intended.
            </p>
          </div>
        </div>
        <div className={style.btnServices}>
          <Link href="/contact">
            <a style={{ paddingRight: "0px", color: "white" }}>
              <button className={styles.dark}>Get Started </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
