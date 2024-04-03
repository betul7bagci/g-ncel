import React, { useState } from "react";
import "./Record.css";

const Record = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");
  const [complex, setComplex] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      phone,
      age,
      branch,
      complex,
      time,
      day,
    });

    setName("");
    setPhone("");
    setAge("");
    setBranch("");
    setComplex("");
    setTime("");
    setDay("");

    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="record-container">
      <h1>Spor Okulu Kayıt Formu</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim Soyisim"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="phone"
          placeholder="Telefon Numarası"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Yaş"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Branşlar</option>
          <option value="futbol">Futbol</option>
          <option value="basketbol">Basketbol</option>
          <option value="voleybol">Voleybol</option>
          <option value="yüzme">Yüzme</option>
          <option value="fitness sauna">Fitness Sauna</option>
          <option value="satranç">Satranç</option>
          <option value="bisiklet">Bisiklet</option>
          <option value="tenis">Tenis</option>
          <option value="karete">Karete</option>
          <option value="güreş">Güreş</option>
          <option value="masa tenisi">Masa tenisi</option>
          <option value="jimnastik">Jimnastik</option>
          <option value="okçuluk">Okçuluk</option>
          <option value="kano">Kano</option>
          <option value="bocce">Bocce</option>
          <option value="yelken">Yelken</option>
          <option value="boks">Boks</option>
        </select>
        <select value={complex} onChange={(e) => setComplex(e.target.value)}>
          <option value="">Spor Kompleksi Seçimi</option>
          <option value="kompleks1">Fethiye Spor Kompleksi</option>
          <option value="kompleks2">Şahin Başol Spor Kompleksi</option>
          <option value="kompleks3">Acemler Buski Spor Tesisi</option>
          <option value="kompleks4">Hüdavendigar Spor Tesisi</option>
          <option value="kompleks5">Mihraplı Kadınlar Yüzme Havuzu</option>
          <option value="kompleks6">Gürsu Yüzme Havuzu</option>
          <option value="kompleks7">Kestel Yüzme Havuzu</option>
          <option value="kompleks8">Atıcılar Spor Tesisi</option>
          <option value="kompleks9">Vatan Futbol Sahası</option>
          <option value="kompleks10">Hürriyet Adalet Futbol Sahası</option>
          <option value="kompleks11">Emek Futbol Sahası</option>
          <option value="kompleks12">Soğanlı Futbol Sahası</option>
          <option value="kompleks13">Çınarönü Futbol Tesisi</option>
          <option value="kompleks14">Havcivat Halı Saha</option>
          <option value="kompleks15">Atıcılar Boks Salonu</option>
          <option value="kompleks16">Kano Eğitim Merkezi</option>
          <option value="kompleks17">Bocce Eğitim Merkezi</option>
          <option value="kompleks18">Burgaz Yelken Eğitim Merkezi</option>
        </select>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Saat Seçimi</option>
          <option value="morning">09:00-12:00</option>
          <option value="afternoon">13:00-16:00</option>
          <option value="evening">17:00-20:00</option>
        </select>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Gün Seçimi</option>
          <option value="day1">Pazartesi-Çarşamba-Cuma</option>
          <option value="day2">Salı-Perembe</option>
          <option value="day3">Cumartes-Pazar</option>
        </select>
        <button type="submit">Kayıt Ol</button>
      </form>
      {showAlert && (
        <div className="alert">
          <span className="close-btn" onClick={closeAlert}>
            x
          </span>
          Bilgileriz kaydedildi. Tüm kayıtlar tamamlandıktan sonra kurs
          başlangıç tarihleri hakkında tarafınıza dönüş yapılacaktır.
        </div>
      )}
    </div>
  );
};

export default Record;
