import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';
import PText from './PText';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  max-width: 100%;
  .container {
    max-width: 100%;
    height: 100%;
    .article {
      margin-top: 5rem;
      .years {
        margin: 8rem;
        .yearsHeader {
          margin-bottom: 1.5rem;
          margin-top: 4rem;
        }
      }
    }
  }
`;

export default function HistoryArticle() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <SectionTitle heading="Sejarah" subheading="Sejarah sekolah wikrama" />
        <div className="article">
          <PText>
            SMK Wikrama Bogor didirikan oleh Ir. Itasia Dina Sulvianti dan
            Dr.H.RP Agus Lelana dibawah naungan Yayasan Prawitama pada tahun
            1996 di bekas gudang KUD. Kompetensi keahlian yang pertama dibuka
            pada saat itu adalah sekretaris dengan jumlah hanya 34 siswa.
          </PText>
          <br />
          <br />
          <PText>
            Seiring berjalannya waktu, jumlah siswa SMK Wikrama Bogor setiap
            tahunnya terus bertambah. Sehingga pada tahun 2001, secara bertahap
            SMK Wikrama Bogor menempati gedung yang lebih luas diatas tanah ±
            5000m2, berlokasi di Jalan Raya Wangun Kelurahan Sindangsari Kota
            Bogor. Hingga saat ini, SMK Wikrama Bogor memiliki 1596 siswa dengan
            51 guru pendidik.
          </PText>
          <br />
          <br />
          <PText>
            Kompetensi keahlian di SMK Wikrama Bogor pun terus berkembang. SMK
            Wikrama Bogor membuka 7 kompetensi keahlian, diantaranya (1)
            Otomatisasi dan Tata Kelola Perkantoran; (2) Teknik Komputer dan
            Jaringan; (3) Rekayasa Perangkat Lunak; (4) Multimedia; (5) Bisnis
            Daring dan Pemasaran; (6) Tata Boga; dan (7) Perhotelan.
          </PText>
          <br />
          <br />
          <PText>
            Kesuksesan SMK Wikrama Bogor saat ini tentunya tidak lepas dari
            sejarah SMK Wikrama Bogor mulai dari membentuk visi dan misi, kerja
            keras hingga diakui dunia internasional hingga prestasi dan
            pengharagaan yang didapatkan SMK Wikrama Bogor sejak awal didirikan.
            Berikut sejarah yang dilalui SMK Wikrama Bogor berdasarkan urutan
            tahun.
          </PText>
          <div className="years">
            <PText>
              <h2 className="yearsHeader">1996</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Program sekretaris
              didirikan dibekas gudang KUD dengan siswa 34 orang dan motto Ilmu
              yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah.
            </PText>
            <PText>
              <h2 className="yearsHeader">1997</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Merancang keunikan
              sekolah: berakhlak mulia, berbasis bahasa Inggris dan komputer.
            </PText>
            <PText>
              <h2 className="yearsHeader">1998</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Siswa baru meningkat
              120 orang, terpaksa menyewa Villa Andhika dan memanfaatkan garasi
              sebagai kelas.
            </PText>
            <PText>
              <h2 className="yearsHeader">1999</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Nem lulusan
              angkatan-I: peringkat ke-1 SMK Swasta Bogor, dan ke-33 se-jabar.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Menerapkan moving
              class.
            </PText>
            <PText>
              <h2 className="yearsHeader">2000</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Nem jurusan angkatan
              II: peringkat ke-1 se-SMK Swasta Bogor dan ke-29 se-jabar, NEM
              Matematika = 9.
            </PText>
            <PText>
              <h2 className="yearsHeader">2001</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Nem lulusan angkatan
              ke-III: peringkat ke-1 se-SMK Swasta Bogor, ke-13 se-jabar
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Secara bertahap
              pindah ke gedung sekolah baru
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Mengembangkan sistem
              informasi sekolah berbasiskan komputer
            </PText>
            <PText>
              <h2 className="yearsHeader">2002</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Akreditasi sekolah
              loncat dari status “terdaftar” langsung “disamakan”
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Untuk mewujudkan visi
              PK Sekretaris berstandar nasional 2005, sekolah mengembangkan
              ayonisasi siswa berbasiskan tempat tinggal.
            </PText>
            <PText>
              <h2 className="yearsHeader">2003</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Membuka program
              keahlian Teknik Informatika dan Komunikasi
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Menerapkan kurikulum
              berbasis kompetensi
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Mengembangkan
              kerjasama dengan dunia usaha dan Ikatan Sekretaris Indonesia
            </PText>
            <PText>
              <h2 className="yearsHeader">2004</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Menerapkan budaya
              sekolah yang beorientasi kecakapan hidup
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Dipercaya sebagai
              sekolah model bidang kecakapan hidup
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Bursa kerja khusus
              dipercaya kemenaker RI
            </PText>
            <PText>
              <h2 className="yearsHeader">2005</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Angkatan VII lulus
              100%, NEM matematika 92% nilai lebih besar sama dengan 60
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Mewujudkan SMK
              berstandar nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Tempat uji kompetensi
              LSP-APSI
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara Go Green School
              Competition
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara II LKS debate
              bahasa Inggris tingkat nasional
            </PText>
            <PText>
              <h2 className="yearsHeader">2006</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Angkatan VII lulus
              100%, 11% mendapat NEM Matematika 10, dan 56% > 9
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Sekolah percontohan
              untuk (a) Komputerisasi SIM sekolah, (b) Metode pembelanjaran yang
              menyenangkan, (c) Kepemimpinan yang efektif, (d) Lingkungan hidup
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Mata pelajaran
              produktif dinilai setara dengan STMIK, sehingga mempercepat
              kelulusan alumni Wikrama yang kuliah di PT tersebut.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Kewirausahaan sekolah
              berbasis potensi sumber daya sekolah
            </PText>
            <PText>
              <h2 className="yearsHeader">2007</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Sekolah Kawasan Tanpa
              Rokok (KTR) terbaik tingkat Kota Bogor
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Sekolah terbaik lomba
              Usaha Kesehatan Sekolah (UKS) tingkat SLTA
            </PText>
            <PText>
              <h2 className="yearsHeader">2008</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Juara I lomba
              E-Learning Award Nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara provinsi
              sekolah berbudaya lingkungan
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Sekolah terbaik UKS
              tingkat Kota Bogor
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Kerjasama dengan
              Dinas Kesehatan Kota Bogor dalam penyelenggaraan RAKERDA UKS
              tingkat Kota Bogor
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara lomba P3K Kota
              Bogor
            </PText>
            <PText>
              <h2 className="yearsHeader">2009</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan sebagai
              calon sekolah Adiwiyata tingkat nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara LKS Sekretaris,
              juara II tingkat nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara LKS Web Design,
              juara II tingkat nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara ke-I Nasional
              Olimpiade Sains Terapan Nasional bidang lomba Matematika
            </PText>
            <PText>
              <h2 className="yearsHeader">2010</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan sebagai
              sekolah Adiwiyata tahun ke-I, sekolah peduli dan berbudaya
              lingkungan tingkat nasional.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Pengembangan jejaring
              kerjasama di bidang lingkungan dan kesehatan
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan sebagai
              Sekolah Berwawasan Kebangsaan Kota Bogor.
            </PText>
            <PText>
              <h2 className="yearsHeader">2011</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Mendapatkan
              penghargaan sebagai sekolah Adiwiyata tahun kedua sekolah peduli
              dan berbudaya lingkungan tingkat nasional.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Membuka program
              keahlian Multimedia
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Membuka SMK Wikrama 1
              Jepara, SMK Wikrama 1 Garut
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Lulus 100% Ujian
              Nasional dengan nilai rata-rata 8,2
            </PText>
            <PText>
              <h2 className="yearsHeader">2012</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Membuka SMK Wikrama 1
              kab. Semarang
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Angkatan-XII lulus UN
              100%; nilai rata-rata 8.32; 6 siswa nilai Matematika 10.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan Sekolah
              Adiwiyata Mandiri, diserahkan oleh presiden RI, Dr, Susilo Bambang
              Yudhoyono
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan Indomesia
              Green Awards
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Dr. Itasia Dina
              Sulvianti, M. Si juara kepala sekolah berwawasan lingkungan hidup
              tingkat nasional.
            </PText>
            <PText>
              <h2 className="yearsHeader">2013</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Membuka SMK Wikrama 1
              Bekasi
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Kerjasama dengan GIZ
              Foundation (Jerman) pengembangan sekolah lingkungan hidup
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Menjadi SMK
              berprestasi tingkat nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Sebagai sekolah model
              penyelenggaraan pendidikan untuk pembangunan berkelanjutan (ESD)
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Sekolah rujukan bagi
              guru lingkungan se-Asia Tenggara (SEAMEO QITEP)
            </PText>
            <PText>
              <h2 className="yearsHeader">2014</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Membuka SMK Wikrama 1
              Banjarmasin
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan Indonesia
              Green Awards
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara LKS Sekretaris
              Juara Harapan I Tingkat Nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara lomba OSTN
              Matematika Non Tehnik, Juara I tingkat Jawa Barat
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Pioneer Sekolah IMS
              (Integrated Management System)
            </PText>
            <PText>
              <h2 className="yearsHeader">2015</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Juara I lomba
              Tradisional Angklung Category se-Asia Tenggara yang
              diselenggarakan oleh SEAMEOLEC
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              menjadi anggota ASPNet yaitu sosialisasi sekolah-sekolah se-dunia
              yang menjadi pilot project di bidang Hak Asasi Manusia, Demokrasi,
              Budaya dan Isu Lingkungan di bawah UNESCO
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              mengikuti Climate Change Forum di Paris Perancis
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama
              mendapatkan Sertifikat Lisensi untuk menjadi Lembaga Sertifikasi
              Profesi pada paket keahlian Multimedia
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara III Kepala
              Sekolah berprestasi untuk kategori SMK tingkat provinsi Jawa Barat
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Pemegang Cyberpreneur
              Competition Kategori Desain Website Statis tingkat nasional
            </PText>
            <PText>
              <h2 className="yearsHeader">2016</h2>
              <AiOutlineRight style={{ width: '16px' }} /> Mengikuti
              Internasional Workshop of ESD Food Project di Jepang
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Menerima kunjungan
              guru dan siswa dari Korea Selatan dalam diskusi mengenai isu
              lingkungan
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Penghargaan Indonesia
              Green Awards
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara I Hackathon
              Google Developer tingkat umum se-Jabotabek paket keahlian RPL
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara I Kesatuan
              Bogor Olympic Festival Fungo Satay STIE Kesatuan tingkat nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara 2 Clevino Coder
              Camp tingkat SMA/SMK se-Jabotabek 2016
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara 2 Film pendek
              tingkat provinsi 2016.
            </PText>
            <PText>
              <h2 className="yearsHeader">2017</h2>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              menjadi tuan rumah dalam acara peringatan Hari BUMI Internasional
              yang dihadiri oleh Prof. Ractmat Witoelar (Utusan Khusus Presiden
              untuk Pengendalian Perubahan Iklim) dan Walikota Bogor.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              mengikuti Program Jenesys SMK 4 tahun permodelan KOSEN di Tokyo
              Jepang tahun 2017.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              kembali meraih juara 1 Lomba Film Pendek FLS2N, tingkat Provinsi
              Jawa Barat. Lomba ini diikuti oleh siswa/siswi Multimedia, M. Diya
              Mustofa dan M. Saifullah, dengan judul Film Pendek “Integrasi
              dalam Prestasi”.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara 1 Lomba Film
              Pendek pada ajang Olimpiade Tingkat Nasional (2017), diwakili oleh
              Shantika Dwi dan Andhika Navira Dillah Putra dari jurusan
              Multimedia
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara 2 Lomba Desain
              Web pada ajang Olimpiade Tingkat Nasional (2017) yang diwakili
              oleh Daffa Prayoga dan Rizki Wahyudi dari jurusan RPL (rekayasa
              Perangkat Lunak)
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara 2 Lomba
              Persentasi pada ajang Olimpiade Tingkat Nasional (2017, yang
              diwakili oleh Galih bagas P dari jurusan Pemasaran
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> Juara Umum II
              Olimpiade Tingkat Nasional 2017
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              yang diwakili oleh tim dari jurusan Rekayasa Perangkat Lunak dan
              Multimedia, yaitu Aldan Rizky S dan Oki Oktora, meraih juara II di
              ajang Lomba Cipta Games pada Festival Habibie 2017, di Jiexpo,
              Kemayoran Jakarta.
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              yang diwakili oleh Arief Dhiemas, meraih juara I Laboran
              Berprestasi tingkat Nasional
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor,
              yang diwakili oleh Anis Humanisa jurusan RPL XI meraih juara 3
              O2SN Lomba Atletik Putri tingkat Jawa Barat
            </PText>
            <br />
            <PText>
              <AiOutlineRight style={{ width: '16px' }} /> SMK Wikrama Bogor
              yang diwakili oleh Tim Voli Putra meraih juara 3 di kejuaraan voli
              tingkat Bogor di Sekolah Kesatuan Bogor.
            </PText>
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
