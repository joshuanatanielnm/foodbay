import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

export const Policy = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">
            Kebijakan Privasi
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow
          style={{
            padding: "10px",
            background: "#409a81",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <IonCol size="12">
            <IonText style={{ fontWeight: "medium", fontSize: "30px" }}>
              Foodbay
            </IonText>
            <br />
            <IonText style={{ textAlign: "left", paddingTop: "8px" }}>
              Kebijakan Privasi
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow
          style={{
            padding: "10px",
          }}
        >
          <IonText style={{ fontWeight: "bold", fontSize: "16px" }}>
            KEBIJAKAN PRIVASI FOODBAY
          </IonText>
          <br />
          <IonText style={{ maginTop: "10px" }}>
            Foodbay berkomitmen untuk menghormati privasi Anda. Kebijakan
            Privasi kami menetapkan bagaimana cara kami mengumpulkan,
            menggunakan, memproses, menyimpan, berbagi, dan mengungkapkan
            informasi pribadi Anda.
          </IonText>
          <ol type="1" style={{ paddingLeft: "4px", listStyleType: "none" }}>
            <li>
              <h5>1. Keterbukaan Dan Transparansi</h5>
              <ul>
                <li>
                  Kami berkomitmen untuk melindungi privasi Anda dan menghormati
                  serta menegakkan hak Anda di bawah UU perlindungan konsumen
                  No. 8 1999 atau peraturan nasional lainnya yang berlaku.
                </li>
                <li>
                  Kami memastikan bahwa kami akan mengambil semua langkah yang
                  diperlukan untuk mematuhi hukum privasi yang relevan dan untuk
                  menangani pertanyaan atau keluhan dari individu tentang
                  kepatuhan terhadap hukum privasi yang relevan.
                </li>
                <li>
                  Dengan mengakses dan menggunakan situs web, produk, dan atau
                  layanan kami, Anda secara bebas dan tegas menyetujui
                  pengumpulan, penggunaan, pemrosesan, Penyimpanan, dan
                  pengungkapan informasi pribadi kepada kami sebagaimana diatur
                  dalam kebijakan privasi ini
                </li>
              </ul>
            </li>
            <li>
              <h5>2. Informasi Pribadi</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Informasi pribadi adalah informasi yang berhubungan dengan
                perorangan yang teridentifikasi atau dapat diidentifikasi. Orang
                yang dapat diidentifikasi adalah seseorang yang bisa
                diidentifikasi, secara langsung atau tidak langsung, khususnya
                dengan mengacu pada sebuah Identifier seperti nama, nomor
                identifikasi, data lokasi, pengenal online atau ke satu atau
                lebih faktor spesifik seperti fisik, fisiologis, genetik,
                mental, ekonomi, budaya atau identitas sosial dari orang yang
                alami.
              </p>
            </li>
            <li>
              <h5>3. Koleksi</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Kami akan mengumpulkan Informasi Pribadi hanya dengan cara yang
                sah dan adil dan tidak dengan cara yang tidak wajar. Umumnya,
                kami akan mengumpulkan informasi pribadi langsung dari Anda dan
                hanya sejauh yang diperlukan untuk menyediakan produk dan
                layanan kami yang diminta atau dipesan oleh Anda dan untuk
                menjalankan fungsi administratif kami atau sebagaimana
                diwajibkan oleh Undang-Undang Privasi yang relevan.
              </p>
            </li>
            <li>
              <h5>4. Apa dasar hukum kita?</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Kami memiliki dasar hukum berdasarkan Undang-Undang Nomor 19
                Tahun 2016 serta Peraturan Menteri Kominfo No. 20 Tahun 2016
                tentang Perlindungan Data Pribadi dalam Sistem Elektronik (PM
                20/2016). Kami mengandalkan beberapa dasar hukum untuk memproses
                Informasi Pribadi Anda, termasuk: jika diperlukan untuk memberi
                Anda akses ke, dan penggunaan, produk, layanan, dan situs web /
                Aplikasi; untuk kepentingan sah kami untuk menyediakan,
                mengoperasikan, dan meningkatkan produk, layanan, atau situs web
                kami; di mana Anda telah secara bebas dan secara tegas
                menyetujui pemrosesan Informasi Pribadi Anda oleh kami, yang
                dapat Anda tarik kapan saja; atau di mana kami berada di bawah
                kewajiban hukum untuk memproses Informasi Pribadi Anda.
              </p>
            </li>
            <li>
              <h5>5. Kemanan</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Kami dapat menyimpan Informasi Pribadi Anda dalam bentuk
                elektronik atau cetak. Kami mengambil langkah-langkah yang wajar
                untuk melindungi Informasi Pribadi Anda dari penyalahgunaan,
                gangguan dan kehilangan, serta akses tidak sah, modifikasi atau
                pengungkapan dan kami menggunakan sejumlah tindakan fisik,
                administratif, personel dan teknis untuk melindungi Informasi
                Pribadi Anda. Namun, kami tidak dapat menjamin keamanan
                Informasi Pribadi apa pun yang dikirimkan melalui internet dan
                oleh karena itu Anda mengungkapkan informasi kepada kami dengan
                risiko Anda sendiri. Kami tidak akan bertanggung jawab atas
                akses tidak sah, modifikasi atau pengungkapan, atau
                penyalahgunaan Informasi Pribadi Anda.
              </p>
            </li>
            <li>
              <h5>6. Lain-lain</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Kami berhak untuk mengubah Kebijakan Privasi ini secara
                keseluruhan atau sebagian dari waktu ke waktu tanpa
                pemberitahuan dan amandemen dan akan berlaku segera setelah
                memposting Kebijakan Privasi yang diubah di situs web / Aplikasi
                Foodbay
              </p>
            </li>
          </ol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
