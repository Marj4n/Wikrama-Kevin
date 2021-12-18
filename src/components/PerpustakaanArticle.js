import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import { AiOutlineRight } from 'react-icons/ai';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import libraryHeader from '../assets/images/libraryHeader.png';
import PText from './PText';
import OneJpg from '../assets/images/1.jpg';
import TwoJpg from '../assets/images/2.jpg';
import ThreeJpg from '../assets/images/3.jpg';
import FourJpg from '../assets/images/4.jpg';
import OneAJpg from '../assets/images/1a.jpg';
import TwoAJpg from '../assets/images/2a.jpg';
import ThreeAJpg from '../assets/images/3a.jpg';

const Header = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 100%;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .info {
    margin-top: 400px;
  }
  .arrow {
    text-align: center;
    margin: 8% 0;
  }
  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  .main {
    max-width: 100%;
    margin-bottom: 10em;
    .container {
      max-width: 100%;
      height: 100%;
      .article {
      }
    }
  }
  .all {
    box-sizing: border-box;
    .body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .image-container {
        background-color: var(--gray-1);
        border: 2px solid var(--gray-1);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        width: 800px;
        margin-top: 6em;
        margin-bottom: 6em;
        grid-gap: 0.5rem;
      }
      .image-container .image {
        position: relative;
        padding-bottom: 100%;
      }
      .image-container .image img {
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        left: 0;
        position: absolute;
        top: 0;
      }
      .image-container .image img:nth-of-type(1) {
        filter: grayscale(1) brightness(40%);
      }
      .image-container .image img:nth-of-type(2) {
        -webkit-clip-path: var(--clip-start);
        clip-path: var(--clip-start);
        transition: -webkit-clip-path 0.5s;
        transition: clip-path 0.5s;
        transition: clip-path 0.5s, -webkit-clip-path 0.5s;
      }
      .image-container .image:hover img:nth-of-type(2) {
        -webkit-clip-path: var(--clip-end);
        clip-path: var(--clip-end);
      }
    }
  }
  .alltwo {
    height: 100%;
    .bodytwo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: wrap;
      margin: 0;
      height: 100%;
      margin-top: 6em;
      margin-bottom: 6em;
      .snip1295 {
        position: relative;
        overflow: hidden;
        margin: 7px;
        padding: 6px;
        min-width: 230px;
        max-width: 495px;
        width: 100%;
        box-shadow: none !important;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-box-sizing: padding-box;
        box-sizing: padding-box;
      }
      .snip1295 img {
        max-width: 100%;
        vertical-align: top;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      }
      .snip1295 .border {
        position: absolute;
      }
      .snip1295 .border:before,
      .snip1295 .border:after,
      .snip1295 .border div:before,
      .snip1295 .border div:after {
        background-color: var(--gray-1);
        position: absolute;
        content: '';
        display: block;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      .snip1295 .border:before,
      .snip1295 .border:after {
        width: 0;
        height: 1px;
      }
      .snip1295 .border div:before,
      .snip1295 .border div:after {
        width: 1px;
        height: 0;
      }
      .snip1295 .border.one {
        left: 0;
        top: 0;
        right: 12px;
        bottom: 12px;
      }
      .snip1295 .border.one:before,
      .snip1295 .border.one div:before {
        left: 0;
        top: 0;
      }
      .snip1295 .border.one:after,
      .snip1295 .border.one div:after {
        bottom: 0;
        right: 0;
      }
      .snip1295 .border.two {
        left: 12px;
        top: 12px;
        right: 0;
        bottom: 0;
      }
      .snip1295 .border.two:before,
      .snip1295 .border.two div:before {
        right: 0;
        top: 0;
      }
      .snip1295 .border.two:after,
      .snip1295 .border.two div:after {
        bottom: 0;
        left: 0;
      }
      .snip1295 a {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        z-index: 1;
      }
      .snip1295:hover .border:before,
      .snip1295.hover .border:before,
      .snip1295:hover .border:after,
      .snip1295.hover .border:after {
        width: 100%;
      }
      .snip1295:hover .border div:before,
      .snip1295.hover .border div:before,
      .snip1295:hover .border div:after,
      .snip1295.hover .border div:after {
        height: 100%;
      }
    }
  }
  .header {
    margin-bottom: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
    .image-container {
      margin-bottom: 20em;
    }
  }
  a {
    color: royalblue;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function Welcome() {
  return (
    <Header>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <Fade bottom>
              <span>Library and Learning Resource</span>
              <span className="hero__name">Perpustakaan</span>
            </Fade>
          </h1>
          <div className="hero__img">
            <img src={libraryHeader} alt="" />
          </div>
          <Jump>
            <div className="hero__scrollDown">
              <div className="arrow bounce">
                <p>Scroll</p>
                <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
              </div>
            </div>
          </Jump>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="article">
            <PText>
              <h2 className="header">PERPUSTAKAAN SMK WIKRAMA INDONESIA</h2>
              Perpustakaan SMK Wikrama Bogor berada di Kampus SMK Wikrama Bogor
              Kelurahan Sindangsari, Kecamatan Bogor Timur, Kota Bogor didirikan
              pada tahun 1996. Secara fisik perpustakaan sekolah terletak di
              lantai 2 (dua) gedung Pajajaran yang merupakan gedung pertama yang
              dibangun, tepatnya berada di area bangunan seluas 96 m2. Lokasi
              ini berada di pusat kegiatan pembelajaran yang mudah dijangkau
              oleh peserta didik, pendidik dan tenaga kependidikan. Semenjak
              didirikan, keberadaan ruang perpustakaan SMK Wikrama Bogor
              memberikan manfaat bagi sivitas akademik sekolah bahkan masyarakat
              sekitar sekolah.
            </PText>
            <PText>
              <h3 className="header">Visi</h3>
              "Menjadi perpustakaan sekolah teladan berbasis Teknologi Informasi
              dan Komunikasi"
            </PText>
            <PText>
              <h3 className="header">Misi</h3>
              <AiOutlineRight style={{ width: '16px' }} /> Menjadikan
              perpustakaan sebagai sumber informasi bagi sivitas sekolah dan
              masyarakat
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Menjadikan budaya
              membaca sebagai bagian dari budaya sekolah
            </PText>
            <PText>
              <h3 className="header">Motto</h3>
              “Melayani dengan Hati dan Teknologi”
            </PText>
            <div className="all">
              <div className="body">
                <div className="image-container">
                  <div
                    className="image"
                    style={{
                      '--clip-start': 'ellipse(0 0 at 0 0)',
                      '--clip-end': 'ellipse(150% 150% at 0 0)',
                    }}
                  >
                    <img src={OneJpg} alt="" />
                    <img src={OneJpg} alt="" />
                  </div>
                  <div
                    className="image"
                    style={{
                      '--clip-start': 'ellipse(0 0 at 100% 0)',
                      '--clip-end': 'ellipse(150% 150% at 100% 0)',
                    }}
                  >
                    <img src={TwoJpg} alt="" />
                    <img src={TwoJpg} alt="" />
                  </div>
                  <div
                    className="image"
                    style={{
                      '--clip-start': 'ellipse(0 0 at 0 100%)',
                      '--clip-end': 'ellipse(150% 150% at 0 100%)',
                    }}
                  >
                    <img src={ThreeJpg} alt="" />
                    <img src={ThreeJpg} alt="" />
                  </div>
                  <div
                    className="image"
                    style={{
                      '--clip-start': 'ellipse(0 0 at 100% 100%)',
                      '--clip-end': 'ellipse(150% 150% at 100% 100%)',
                    }}
                  >
                    <img src={FourJpg} alt="" />
                    <img src={FourJpg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <PText>
              <h2>GERAKAN LITERASI SEKOLAH</h2>
            </PText>
            <div className="alltwo">
              <div className="bodytwo">
                <figure className="snip1295">
                  <img src={OneAJpg} alt="" />
                  <div className="border one">
                    <div />
                  </div>
                  <div className="border two">
                    <div />
                  </div>
                </figure>
                <figure className="snip1295">
                  <img src={TwoAJpg} alt="sample84" />
                  <div className="border one">
                    <div />
                  </div>
                  <div className="border two">
                    <div />
                  </div>
                </figure>
                <figure className="snip1295">
                  <img src={ThreeAJpg} alt="sample68" />
                  <div className="border one">
                    <div />
                  </div>
                  <div className="border two">
                    <div />
                  </div>
                </figure>
              </div>
            </div>
            <PText>
              <h2 className="header">
                PERPUSTAKAAN ONLINE SMK WIKRAMA INDONESIA
              </h2>
              SMK Wikrama juga mempunyai fasilitas Perpustakaan Online yang bisa
              diakses melalui{' '}
              <a href="bit.ly/websiteperpus">bit.ly/websiteperpus</a>
            </PText>
            <br />
            <br />
            <PText>
              Dalam mendukung PJJ (Pembelajaran Jarak Jauh) dan New Normal,
              Perpustakaan SMK Wikrama Indonesia telah membuat fiture WikBook
              Wikrama Electronic Book. WikBook adalah sebuah aplikasi berbasis
              animasi flash yang memiliki konten lebih dari 600 judul ebook.
              Terdiri dari buku teks (buku pegangan siswa) fiksi & nonfiksi yang
              dapat diakses dan didownload melalui laman website{' '}
              <a href="bit.ly/websiteperpus">bit.ly/websiteperpus</a>
            </PText>
          </div>
        </div>
      </div>
    </Header>
  );
}
