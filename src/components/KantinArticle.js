import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import KantinPng from '../assets/images/kantin.png';
import PText from './PText';

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
`;

export default function Welcome() {
  return (
    <Header>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <Fade bottom>
              <span>Badan Pengawas Obat dan Makanan</span>
              <span className="hero__name">Kantin Sehat</span>
            </Fade>
          </h1>
          <div className="hero__img">
            <img src={KantinPng} alt="" />
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
              SMK WIKRAMA BOGOR - Kantin Wikrama berdiri tahun 2004. Namun, di
              tahun 2017 kantin mulai berbenah diri menjadi kantin sehat.
              Predikat kantin sehat tersebut dinobatkan langsung oleh Dinas
              Kesehatan Kota Bogor setelah melakukan penilaian terhadap kantin
              Wikrama di tahun 2017. Hal tersebut karena, SMK Wikrama melihat
              sebagian besar aktivitas peserta didik berada di lingkungan
              sekolah, sehingga sudah menjadi tanggung jawab warga sekolah untuk
              memperhatikan kesehatan peserta didiknya, mulai dari makanan.
            </PText>
            <br />
            <br />
            <PText>
              Berbagai aspek penunjang kesehatan peserta didik sangat
              diperhatikan, mulai dari cara pengolahan makan, sarana yang
              digunakan, penjamah (pelayan) makanan, kebersihan tempat, serta
              perilaku konsumen. Menu makanan yang dijajakan di kantin sehat SMK
              Wikrama sangat beragam. Beberapa makanan yang diproduksi koki
              Wikrama antara lain, makanan berat (nasi dan berbagai lauknya),
              soto, mie ayam, dan sebagainya.
            </PText>
            <br />
            <br />
            <PText>
              Selain itu, kantin sehat Wikrama juga menjadi sumber penghasilan
              bagi warga sekitar, karena ada beberapa makanan yang dipasok dari
              luar. Akan tetapi makanan tersebut tetap harus memerhatikan
              beberapa ketentuan yang telah ditetapkan. Pertama tidak boleh
              menggunakan plastik atau kertas (sesuai budaya Wikrama), dilarang
              menggunakan zat berbahaya dalam makanan (vetsin, pewarna tekstil,
              formalin dan sebagainya). Kemudian tidak diperkenankan juga
              menjual makanan yang menggunakan bumbu perasa (rasa jagung, keju,
              dan sebagainya).
            </PText>
            <br />
            <br />
            <PText>
              Triwahyuni selaku koordinator atau manager kantin mengungkapkan,
              zat yang tidak boleh digunakan dalam makanan yang dijual di kantin
              SMK Wikrama diantaranya, pewarna, penggurih (vetsin/micin), bahan
              pengawet, formalin, dan bahan berbahaya lainnya. Zat berbahaya
              apabila terus dikonsumsi maka akan berdampak negatif. Apabila
              ditinjau dari jangka pendek, maka sering kita temuai penyakit
              diare atau keracunan makanan. Dampak jangka panjang salah satunya
              penyakit kanker, dan penyakit berbahaya lainnya.
            </PText>
            <br />
            <br />
            <PText>
              Ia menjelaskan, agar makanan yang dijual tetap terasa enak, maka
              penggunaan zat-zat berbahaya tersebut diganti dengan bahan alami.
              Contohnya, penggunaan vetsin pada makanan, bisa disiasati dengan
              takaran gula pasir dan garam yang diseimbangkan., selain itu
              penggunaan bumbu kemiri juga dapat menghasilkan rasa gurih,
              ditambah dengan, gula merah, tomat, dan gula batu. “Selanjutnya,
              untuk pewarna, bisa digantikan dengan kunyit untuk warna kuning,
              merah buah bit, dan hijau dari daun suji,” tambah Triwahyuni.
            </PText>
            <br />
            <br />
            <PText>
              Berkat kesungguhan pengurusnya dan seluruh warga sekolah yang
              mendukung, kantin sehat Wikrama termasuk dalam sekolah pilihan
              yang direkomendasikan untuk diteliti langsung oleh Badan Pengawas
              Obat dan Makanan (BPOM). Hal tersebut terjadi berdasarkan laporan
              Dinas Kesehatan (Dinkes) Kota Bogor tentang kantin sehat di SMK
              Wikrama Bogor. Akhirnya pada 15 Oktober 2018, kantin sehat Wikrama
              mendapatkan kunjungan dari anggota Puskesmas Pulo Armin, Dinkes
              Kota Bogor dan BPOM.
            </PText>
            <br />
            <br />
            <PText>
              Kunjungan itu dilakukan dalam rangka penilaian terhadap keamanan
              pangan di SMK Wikrama. Penilaian yang dilakukan mulai dari cara
              menyimpan, mengolah, dan menyaji makanan yang baik. Selanjutnya
              dari keamanan panggan, serta perilaku konsumen (apakah sekolah
              telah memberikan pemahaman terhadap peserta didiknya dan penjaga
              sekolahnya).
            </PText>
            <br />
            <br />
            <section>
              <PText>
                Hasil dari penilaian tersebut, kantin sehat SMK Wikrama meraih
                nilai 95 dari skala 100. Nilai yang cukup memuaskan. Feri
                Firmansyah selaku pembina kantin sehat mengemukakan “Evaluasi
                penilaian tersebut yaitu bahwa kantin sehat perlu meerhatikan
                cara penanganan hama serta cara menyimpan makanan mentah dan
                matang perlu diperhatikan lagi.”
              </PText>
              <br />
              <br />
              <PText>
                Feri Juga membeberkan bahwa untuk kedepannya kantin sehat SMK
                Wikrama harus lebih baik. “Kantin Wikrama harus terus
                berkembang, tetap konsisten, dan memberikan yang terbaik untuk
                konsumen SMK Wikrama,” Beber Feri. (SH/MF/GU/IU)
              </PText>
            </section>
          </div>
        </div>
      </div>
    </Header>
  );
}
