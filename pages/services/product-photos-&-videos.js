import Head from "next/head";
import { Firstscreen } from "../../Components/product-and-photo/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/product-and-photo/Answer";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/product-and-photo/Toolsweb";
import Reviews from "../../Components/product-and-photo/Reviews";
import { Howitworks } from "../../Components/product-and-photo/Howitworks";
import { Gallerypackage } from "../../Components/product-and-photo/Gallerypackage";
import * as React from "react";

export default function Websitepackages() {
  return (
    <Layout
      title="Artelle Creative - Crafting websites, lasting branding identities, and memorable content"
      keywords="web development, web design, web development in florida, 
    web design in Florida, websites, 
    branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="We make purposeful websites that look and work great.We design and develop websites, create unique logos, 
      brand identities and marketing materials."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Navbar />
      <Firstscreen />
      <section>
        <Toolsweb></Toolsweb>
      </section>
      <Howitworks />
      <Reviews />
      <Gallerypackage />
      <Answers></Answers>
      <section>
        <Action></Action>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </Layout>
  );
}
