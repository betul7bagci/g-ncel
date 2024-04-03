import React from "react";
import { Carousel } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="text-center mt-3">
        <img
          src="https://www.bursabbspor.com/footer-top-bg.svg"
          alt="Kulübün Amblemi"
        />
        <h1 className="home-title">Bursa Büyükşehir Belediyespor Kulübü</h1>
      </div>

      <Carousel className="mt-3">
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="https://www.detayhaberler.com/images/haberler/2022/08/bursa-buyuksehir-belediyesporlu-okculardan-tam-isabet-20220801AW68-6510.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="brns">Okçuluk</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="https://gencgazetenet.teimg.com/crop/1280x720/gencgazete-net/image/resimler//haber/haber/8_2022/20220819AW693417.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="brns">Voleybol</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="https://www.bursa.bel.tr/dosyalar/resimler/haberler/32975-manset.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="brns">Basketbol</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p className="kisayazi">
        Bursa Büyükşehir Belediyespor Kulübüne hoş geldiniz. 
      </p>
      <p className="kisayazi">
        Web sayfamızdan çocuğunuza uygun branşı seçebilir, size en yakın tesisimize sayfamızdan
        kayıt yaptırabilirsiniz. Ayrıntılı bilgi için lütfen menü sekmelerini
        ziyaret edin...
      </p>

      <hr />
      <p className="social">Sosyal Medya Hesaplarımız</p>

      <div className="kisayazi-container">
        <p className="kisayazi">
          <a
            href="https://twitter.com/bursabbsk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            Twitter
          </a>
        </p>
        <p className="kisayazi">
          {" "}
          <a
            href="https://www.instagram.com/bursabbsk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
        </p>
        <p className="kisayazi">
          <a
            href="https://www.facebook.com/bursabbbsk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
            Facebook
          </a>
        </p>
        <p className="kisayazi">
          <a
            href="https://www.youtube.com/channel/UCz_Cpfun8j4BdCRNcpdXBig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
            Youtube
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
