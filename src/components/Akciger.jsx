import { useState } from "react";
import "../css/Akciger.css";

const Akciger = () => {
  const [collectedData, setCollectedData] = useState([]);

  const handleInput = (e) => {
    const inputId = e.target.id ? e.target.id : e.target.name;
    const inputValue = e.target.value ? e.target.value : null;

    console.log("current value --->", inputValue);
    console.log("current id --->", inputId);

    let obj = {
      inputIdName: inputId,
      inputValue: inputValue,
    };

    let copyData = collectedData.concat(obj);

    setCollectedData(copyData);
  };

  console.log(collectedData);

  return (
    <form className="" action="" method="post">
      <img src="../img/logo.png" alt="cuLogo" style={{ float: "left" }} />

      <h2 align="left">AKCİĞER HASTALIKLARINDA YAŞAM KALİTESİ</h2>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        cellSpacing="0"
        className="table"
      >
        <th> Adı Soyadı </th>
        <th>
          <input onChange={(e) => handleInput(e)}
            type="text"
            name="adsoyad"
            className="adsoyad"
            id="adsoyad"
          />
        </th>

        <th> TC Kimlik Numarası </th>
        <th>
          <input onChange={(e) => handleInput(e)}
            type="text"
            name="tc"
            className="text"
            id="tc"
          />
        </th>

        <th> Tarih </th>
        <th>
          <input onChange={(e) => handleInput(e)} type="date" name="Tarih" className="date" id="tarih" />
        </th>

        <th> Tablo Numarası</th>
        <th>
          <input onChange={(e) => handleInput(e)}
            type="number"
            name="tabloNumarası"
            className="number"
            id="tabloNumarasi"
          />
        </th>
      </table>

      <table
        width="74%"
        border="1"
        cellPadding="7"
        cellSpacing="0"
        className="tablee"
      >
        <thead>
          <tr>
            {/* <!-- 1  --> */}
            <th>Geçen hafta zarfında </th>
            {/* <!-- 2  --> */}
            <th> HİÇ </th>
            {/* <!-- 3  --> */}
            <th> BİRAZ </th>
            {/* <!--4  --> */}
            <th> OLDUKÇA </th>
            {/* <!-- 5 --> */}
            <th> ÇOK </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th rowSpan="1"> 31) Ne kadar öksürdünüz?</th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1"> 32) Kanlı öksürüğünüz oldu mu?</th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kanli" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kanli" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kanli" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kanli" value="dort" /> 4
            </td>
          </tr>
          <tr>
            <th rowSpan="1"> 33) Dinlenirken nefes darlığı oldu mu?</th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dinlen" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dinlen" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dinlen" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dinlen" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1"> 34) Yürürken nefes darlığı oldu mu</th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yururken" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yururken" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yururken" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yururken" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1"> 35) Merdiven çıkarken nefes darlığı oldu mu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="merdiven" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="merdiven" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="merdiven" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="merdiven" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1">36) Ağzınızda veya dilinizde ağrı oldu mu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dil" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dil" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dil" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="dil" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1"> 37) Yutma güçlüğünüz oldu mu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yutma" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yutma" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yutma" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="yutma" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1">
              38) El ve ayaklarınızda karıncalanma veya uyuşma oldu mu?
            </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="karıncalanma" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="karıncalanma" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="karıncalanma" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="karıncalanma" value="dort" /> 4
            </td>
          </tr>
          <tr>
            <th rowSpan="1"> 39)Saçlarınızda dökülme oldu mu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="sac" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="sac" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="sac" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="sac" value="dort" /> 4
            </td>
          </tr>
          <tr>
            <th rowSpan="1"> 40) Göğüs kafesinizde ağrınız oldu mu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="gogus" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="gogus" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="gogus" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="gogus" value="dort" /> 4
            </td>
          </tr>
          <tr>
            <th rowSpan="1"> 41) Kol veya omzunuzda ağrınız oldu mu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kol" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kol" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kol" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="kol" value="dort" /> 4
            </td>
          </tr>
          <tr>
            <th rowSpan="1">
              42)Vücudunuzun diğer kısımlarında ağrınız oldu mu?
              <input onChange={(e) => handleInput(e)} type="text" name="agrı" placeholder="Ağrınız nerede?" />
            </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="vucut" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="vucut" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="vucut" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="vucut" value="dort" /> 4
            </td>
          </tr>

          <tr>
            <th rowSpan="1"> 43) Ağrı için hiç ilaç aldınız mı? </th>
            <td colSpan="2">
              <input onChange={(e) => handleInput(e)} type="radio" name="ilac" value="Evet" /> Evet
            </td>
            <td colSpan="2">
              <input onChange={(e) => handleInput(e)} type="radio" name="ilac" value="Hayır" /> Hayır
            </td>
          </tr>

          <tr>
            <th rowSpan="1"> 44) Evet ise, ilacın ne kadar faydası oldu? </th>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="fayda" value="bir" /> 1
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="fayda" value="iki" /> 2
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="fayda" value="uc" /> 3
            </td>
            <td>
              <input onChange={(e) => handleInput(e)} type="radio" name="fayda" value="dort" /> 4
            </td>
          </tr>
        </tbody>
      </table>

      <table align="right">
        <tr>
          <th rowSpan="1"></th>
          <td>
            <input onChange={(e) => handleInput(e)}
              type="button"
              name="button"
              value="Kaydet"
              className="buton"
              align="center"
            />
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Akciger;
