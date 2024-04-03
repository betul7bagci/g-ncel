import React, { useEffect, useState } from 'react'
import Tesis from './Tesis'
import './Users.css';

function Users() {
  return (
    <div className='card text-center'>
      <h1>SPOR TESİSLERİ KULLANIM SAYILARI</h1>
      <br />
      {Tesis.map(item => (
        <div key={item.Sıra_No}>
          <p>Sıra No: {item.Sıra_No}</p>
          <p>Spor Tesisi: {item.SPOR_TESISLERI}</p>
          <p>2018 Kullanım Sayısı: {item["2018_KULLANIM_SAYILARI"]}</p>
          <p>2019 Kullanım Sayısı: {item["2019_KULLANIM_SAYILARI"]}</p>
          <p>2020 Kullanım Sayısı: {item["2020_KULLANIM_SAYILARI"]}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
