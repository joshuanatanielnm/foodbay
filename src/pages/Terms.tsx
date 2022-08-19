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

export const Terms = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">
            Ketentuan Layanan
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
              Ketentuan Layanan
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow
          style={{
            padding: "10px",
          }}
        >
          <IonText style={{ fontWeight: "bold", fontSize: "16px" }}>
            KETENTUAN LAYANAN FOODBAY
          </IonText>
          <br />
          <IonText style={{ maginTop: "10px" }}>
            Foodbay menyediakan wadah untuk mengurangi limbah makanan dengan
            memungkinkan pemilik bisnis makanan untuk mendaftar dan menjual
            makanan dengan harga diskon minimal 50% dan maksimal 100%, dan
            memungkinkan pelanggan untuk membeli dan mengambil makanan yang
            telah di diskon tersebut.
          </IonText>
          <ol type="1" style={{ paddingLeft: "4px", listStyleType: "none" }}>
            <li>
              <h5>1. Keterbukaan Dan Transparansi</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Selamat datang di aplikasi Foodbay. Misi Aplikasi Foodbay adalah
                untuk meningkatkan kesadaran akan makanan surplus dengan membuat
                kelebihan makanan tersedia untuk dibagikan kepada sesama.
              </p>
            </li>
            <li>
              <h5>2. Informasi kontak dan layanan pelanggan</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Jl. Arief Rahman Hakim No.100, Klampis Ngasem Surabaya, Jawa
                Timur 60117 Indonesi
              </p>
            </li>
            <li>
              <h5>3. Produk</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Foodbay tidak dengan cara apa pun memproduksi, menjual, membeli,
                menyimpan, menyiapkan, memproses, menandai, mengemas,
                mengirimkan, atau menangani Produk. Foodbay tidak bertanggung
                jawab atas pemenuhan kewajiban kontraktual terhadap Penyedia
                atau Penerima, termasuk pembuatan, pemberian, penyimpanan,
                persiapan, produksi, pemrosesan, penandaan, pengiriman,
                kualitas, bahan, alergen atau penanganan Produk, dan kepatuhan
                terhadap peraturan perundang-undangan yang berlaku, termasuk
                hal-hal tersebut di atas.
              </p>
            </li>
            <li>
              <h5>4. Donasi</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Pengguna akan dapat melakukan donasi menggunakan aplikasi pihak
                ketiga, yaitu Saweria.
              </p>
            </li>
            <li>
              <h5>5. Ambil</h5>
              <p style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                Produk yang dipesan di Foodbay harus diambil oleh Penerima
                Makanan di alamat pengambilan yang ditentukan. Deskripsi toko
                dan detail tentang kapan dan di mana Produk dapat diambil akan
                muncul di Platform. Jika Penerima Makanan tiba di alamat
                penjemputan sebelum waktu penjemputan yang ditentukan, Penerima
                Makanan harus menunggu di luar atau menghubungi Pemberi Makanan.
                Setiap perilaku yang tidak dapat diterima dapat mengakibatkan
                Pelanggan diblokir dari Foodbay.
              </p>
            </li>
          </ol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
