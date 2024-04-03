import React from "react";
import "./Faci.css";

const facilities = [
  {
    name: "Fethiye Spor Kompleksi",
    image:
      "https://www.tasarimelektrik.com.tr/images/1/1033-1.jpg",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Fethiye+Spor+Tesisleri/@40.2346855,28.9702475,17z/data=!3m1!4b1!4m5!3m4!1s0x14ca146bc599a8cf:0x798ecf7ebd48d5bc!8m2!3d40.2346814!4d28.9724362?shorturl=1",
    },
    address: "Fethiye Mh. Hüseyin Ormanlı Cad. No:4 Nilüfer / BURSA",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Şahin Başol Spor Kompleksi",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMpoToPhnvSjlTYZ1cwNQC9lMW_UU3cgUC3JYh5=w408-h271-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/%C5%9Eahin+Ba%C5%9Fol+Spor+Kompleksi/@40.2059046,29.1057061,17z/data=!4m6!3m5!1s0x14ca3ee44fc0a7c3:0xc7f3644ef9958220!8m2!3d40.206402!4d29.1074635!16s%2Fg%2F11bxfn663n?entry=ttu",
    },
    address: "Yunus Emre Mah. Dikencik Cad. 14/4 Yıldırım /BURSA",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Acemler Buski Spor Tesisi",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMge35wYlT-hCzs_C8mevXkjLuKrQGTGSDs4wqb=w426-h240-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Acemler+Tenis+Kafe/@40.2155338,29.014688,17z/data=!3m1!4b1!4m5!3m4!1s0x14ca15c6cd2a3073:0x1f2a71f319a94b8b!8m2!3d40.2155297!4d29.0168767?shorturl=1",
    },
    address: "Sırameşeler, Buski Otobüs Durağı 4/3, 16190 Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Hüdavendigar Spor Tesisi",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMrQTLZcAUUOcI71oplEnIwEucHViDaEX8NOqt9=w408-h305-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Bursa+B%C3%BCy%C3%BCk%C5%9Fehir+Belediyespor+Tenis+Kortlar%C4%B1/@40.1984301,28.9963664,17z/data=!4m5!3m4!1s0x14ca16877aba59c3:0x95b0c1f85f92caa1!8m2!3d40.198426!4d28.9985551?shorturl=1",
    },
    address: "Fethiye, Fatih Sk. No:16140, 16140 Nilüfer/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Mihraplı Kadınlar Yüzme Havuzu",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNB6cbFNzegMHuUfLbgVATLhxHe5mLfB0Uuma7l=w408-h306-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Mihrapl%C4%B1+Kad%C4%B1nlar+Y%C3%BCzme+Havuzu/@40.2035338,28.9939925,17z/data=!4m5!3m4!1s0x14ca16803fe6d579:0x2c75ba114dc0885e!8m2!3d40.2035297!4d28.9961812?shorturl=1",
    },
    address: "Odunluk, Eski Orhaneli Yolu No:8, 16110 Nilüfer/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Gürsu Yüzme Havuzu",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipO-nNMp7YN7TvMd-3PPk-B4rPZyB7z-NXrr9FU=w426-h240-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/G%C3%BCrsu+Y%C3%BCzme+Havuzu/@40.2167411,29.1843323,17z/data=!4m6!3m5!1s0x14ca386279427dff:0x167f6a2fbd0e0bc!8m2!3d40.2164821!4d29.1860925!16s%2Fg%2F11b7pys5d9?entry=ttu",
    },
    address: "Kurtuluş, Altun Sk., 16580 Gürsu/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Kestel Yüzme Havuzu",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPnGF0FdGcesCNLOqXu7qxPGFu8oatRVscinxdR=w408-h544-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Kestel+Y%C3%BCzme+Havuzu/@40.1988854,29.2220099,17z/data=!3m1!4b1!4m6!3m5!1s0x14ca3822969cec0d:0xfb24e0d6d4ea6ce4!8m2!3d40.1988854!4d29.2220099!16s%2Fg%2F11b7q6pf01?entry=ttu",
    },
    address: "Vanimehmet, Çataltepe Cd, 16230 Kestel/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Atıcılar Spor Tesisi",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipME2_ehFbsXwWbmWdGnLcq3ObDXdgjOrbPK1hQ7=w408-h306-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/At%C4%B1c%C4%B1lar+2/@40.200541,29.0846706,15z/data=!4m6!3m5!1s0x14ca3e5b7efc993b:0x95103a67879cbc65!8m2!3d40.205203!4d29.083607!16s%2Fg%2F11g8fy9l8r?entry=ttu",
    },
    address: "Veysel Karani, 16270 Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Vatan Futbol Sahası",
    image:
      "https://www.olay.com.tr/wp-content/uploads/2023/07/akcalar-480x270.jpg",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Vatan+Mahallesi+Spor+Tesisleri/@40.2016161,29.0860253,17z/data=!4m5!3m4!1s0x14ca3e5ef4cf43df:0x4f9bc573bf9497c6!8m2!3d40.201612!4d29.088214?shorturl=1",
    },
    address: "Vatan, Kısmet Cd., 16270 Yıldırım/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Hürriyet Adalet Futbol Sahası",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNOL8xLr2t9CMpHVcA_VyVnfUaZ2vO4lOuja015=w408-h544-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/H%C3%BCrriyet+Spor+Tesisleri/@40.2261979,29.0019559,18z/data=!4m6!3m5!1s0x14ca15b471e70921:0xef3aed3dddbc0bd6!8m2!3d40.2261979!4d29.0030502!16s%2Fg%2F11c6lv_vwc?entry=ttu",
    },
    address: "Adalet, 1. Adalet Cd. No:44, 16200 Fethiye Osb/Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Emek Futbol Sahası",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipO5e4_MBpvjuxSI6m2q8CkCcIrL_qnoNfbkhkVO=w426-h240-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Emek+Spor+Tesisleri/@40.2522087,28.9665926,14z/data=!4m6!3m5!1s0x14ca14883809ac4f:0x4e459c9a8fd4d9dc!8m2!3d40.2522087!4d28.9665926!16s%2Fg%2F11b7qcy67z?entry=ttu",
    },
    address: "Akpınar, Armağan Cd., 16160 Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Soğanlı Futbol Sahası",
    image:
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=5ZKHpG6ZLe9rMypyrPCjcw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=275.7742&pitch=0&thumbfov=100",
    location: {
      name: "Konum",
      link: "https://www.google.com.tr/maps/place/40%C2%B012'56.9%22N+29%C2%B002'30.3%22E/@40.2157215,29.0421837,138m/data=!3m1!1e3!4m4!3m3!8m2!3d40.2158056!4d29.04175?hl=tr&entry=ttu",
    },
    address:
      "Alemdar, Nilüfer Cd. Maliye Spor Tesisleri No:211, 16190 Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Çınarönü Futbol Tesisi",
    image:
      "https://lh3.googleusercontent.com/DcDtwYvA3cq2TnVnQYAUDxbFuoEG0VxzDTQFZuQh-Qx5koJcnzKG5QeqixTtiKc=w408-h306-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Bursa+B%C3%BCy%C3%BCk%C5%9Fehir+Belediyesi+%C3%87%C4%B1nar%C3%B6n%C3%BC+Spor+Tesisi/@40.1972265,29.1331085,17z/data=!4m6!3m5!1s0x14ca3ed2c7f24df9:0x5be2c3c0b63d42ab!8m2!3d40.1959177!4d29.1382607!16s%2Fg%2F11f4pq2dxq?entry=ttu",
    },
    address: "Çınarönü, 4 Yıldız Sk No:14, 16290 Yıldırım/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Havcivat Halı Saha",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipP3xOzYal3gauxnYwXcxWYTEdrvgpvR-vzhjQQZ=w408-h306-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Hacivat+Spor+Tesisi/@40.1940895,29.1370942,17z/data=!4m6!3m5!1s0x14ca3ecd56e650df:0x1a1a8eda0898a4a4!8m2!3d40.1944257!4d29.1385548!16s%2Fg%2F11cjpbqfdk?entry=ttu",
    },
    address: "Hacivat, 1. Cd., 16290 Yıldırım/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Atıcılar Boks Salonu",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipM2XFz0S5FtoQBz2qaZL7YwbejnLIn-PSM3D8VL=w408-h544-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/At%C4%B1c%C4%B1lar+%C3%87ok+Ama%C3%A7l%C4%B1+Spor+Salonu/@40.1911329,29.1732984,13z/data=!4m6!3m5!1s0x14ca3e5cf88f6f19:0xa3ae821b1d767457!8m2!3d40.203051!4d29.083761!16s%2Fg%2F11j1hxxxgz?entry=ttu",
    },
    address: "Veysel Karani, Zafer Blv. No:19, 16270 Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Kano Eğitim Merkezi",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNrLudCfvv_NfIga0vYCYJBx3Xl8S4wzCFFjhHR=w426-h240-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Bursa+B%C3%BCy%C3%BCk%C5%9Fehir+Belediyespor+Kano+Bran%C5%9F%C4%B1+Kay%C4%B1khane/@40.2701978,29.1535472,11z/data=!4m6!3m5!1s0x14ca16801c4e825d:0x36e47bb783addcd6!8m2!3d40.2048588!4d28.998656!16s%2Fg%2F11hcnbdc70?entry=ttu",
    },
    address: "Odunluk, Eski Orhaneli Yolu No:4, 16110 Nilüfer/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Bocce Eğitim Merkezi",
    image:
      "https://bursa.gsb.gov.tr/Public/Images/IM/Bursa/01204/whatsapp-image-2018-04-02-at-091603-1.jpg",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/K%C3%BClt%C3%BCrpark+A%C3%A7%C4%B1khava+Tiyatrosu/@40.196763,29.0408683,18z/data=!4m5!3m4!1s0x14ca15febf0bf16f:0xe8fdf345e0af1542!8m2!3d40.196763!4d29.041519?shorturl=1",
    },
    address: "Soğanlı, 3. Osman Gazi Cd., 16190 Osmangazi/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
  {
    name: "Burgaz Yelken Eğitim Merkezi",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMDO8eOP7vy6m5kPNWHBJ0E4Og4wQv0K9OGvOYV=w408-h544-k-no",
    location: {
      name: "Konum",
      link: "https://www.google.com/maps/place/Burgaz+Yelken+Kul%C3%BCb%C3%BC/@40.3557957,28.926318,15z/data=!4m5!3m4!1s0x14ca6c4081819b2b:0x8003794cd72914b8!8m2!3d40.3557957!4d28.926318?shorturl=1",
    },
    address: "Güzelyalı Yalı, Atatürk Cd. 76-2, 16950 Mudanya/Bursa",
    workingDays: "Haftanın her günü",
    workingHours: "09:00-19:00",
  },
];

function Facility({ facility }) {
  return (
    <div>
      <img className="image" src={facility.image} alt={facility.name} />
      <h3 className="name">{facility.name}</h3>

      <p>
        <strong></strong>{" "}
        <a
          href={facility.location.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "1.5em", fontWeight: "bold", color: "orange" }}
        >
          {facility.location.name}
        </a>
      </p>
      <p className="baslik">
        <strong className="icerik">Adres:</strong> {facility.address}
      </p>
      <p className="baslik">
        <strong className="icerik">Çalışma Günleri:</strong>{" "}
        {facility.workingDays}
      </p>
      <p className="baslik">
        <strong className="icerik">Çalışma Saatleri:</strong>{" "}
        {facility.workingHours}
      </p>

      <hr />
    </div>
  );
}

function Faci() {
  return (
    <div className="horizontal-categories">
      <h2 className="faci-text">Tesislerimiz</h2>

      {facilities.map((facility, index) => (
        <Facility key={index} facility={facility} />
      ))}
    </div>
  );
}

export default Faci;
