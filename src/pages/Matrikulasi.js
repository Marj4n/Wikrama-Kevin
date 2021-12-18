import React from 'react';
import styled from 'styled-components';
import { Zoom, Fade } from 'react-reveal';
import PText from '../components/PText';
import MatrikulasiPng from '../assets/images/matrikulasi.png';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function Martikulasi() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <Fade bottom>
              <div className="left">
                <h2 className="about__heading">
                  Kegiatan Matrikulasi Wikrama 2021/2022
                </h2>
                <div className="about__info">
                  <PText>
                    Selamat datang di SMK Wikrama Bogor.
                    <br /> <br />
                    Sebelum masuk di pembelajaran baru tahun 2021/ 2022, ada
                    kegiatan MATRIKULASI dulu yaaa.
                    <br /> <br />
                    Matrikulasi adalah kegiatan pembelajaran yang dilakukan
                    untuk memenuhi kekurangan dalam hal pengetahuan, ketrampilan
                    dan sikap yang berfungsi untuk mengetahui kemampuan awal/
                    pemetaan kemampuan awal peserta didik yang diperlukan untuk
                    mengikuti kegiatan pembelajaran.
                    <br /> <br />
                    Waktu pelaksanaan Matrikulasi di SMK Wikrama Bogor yaitu
                    selama 4 minggu (26 Juli - 21 Agustus 2021) secara online
                    dengan sistem sinkronus dan asinkronus. Diikuti oleh 585
                    peserta didik baru.
                  </PText>
                </div>
              </div>
            </Fade>
            <Zoom>
              <div className="right">
                <img src={MatrikulasiPng} alt="matrikulasi" />
              </div>
            </Zoom>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
