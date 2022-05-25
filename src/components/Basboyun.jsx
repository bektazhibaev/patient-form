import { useState } from "react";
import "../css/Basboyun.css";
import logo from "../img/logo.png";
import { debounce } from "lodash";

const Basboyun = () => {

    const [collectData, setCollectData] = useState([]);

    const handleInput = (e) => {
        console.log('element name', e.target.name)
        console.log('element input value', e.target.value)
    }

    console.log(debounce)

  return (
    <form name="anamnez" action="" method="post" class="form">
      <h2>
        <img src={logo} alt="cuLogo" style={{ float: "left" }} />
      </h2>
      <br />
      <br />
      <br />
      <br />
      <h2 align="left"> ONKOLOJİ MERKEZİ </h2>
      <h2 align="left"> BAŞ-BOYUN HASTALIKLARINDA YAŞAM KALİTESİ</h2>
      <br />

      {/* <!-- Genel Kalıp ad soyad, tc, müracaat tarihi  --> */}
      <table
        width="100%"
        border="1"
        cellpadding="10"
        cellspacing="0"
        class="table"
      >
        <th> Adı Soyadı </th>
        <th>
          <input onChange={(e) => handleInput(e)} type="text" name="adsoyad" class="text" required />
        </th>

        <th> TC Kimlik Numarası </th>
        <th>
          <input onChange={(e) => handleInput(e)} type="text" name="tc" class="text" required />
        </th>

        <th>Tarih </th>
        <th>
          <input onChange={(e) => handleInput(e)} type="date" name="muracaatTarih" class="date" required />
        </th>

        <th>Tablo Numarası</th>
        <th>
          <input onChange={(e) => handleInput(e)} type="number" name="tablonumarasi" class="date" required />
        </th>
      </table>

      <table
        width="75%"
        border="1"
        cellpadding="10"
        cellspacing="0"
        class="table1"
      >
        <br />
        <tr>
          <th colspan="1">
            <u>GEÇTİĞİMİZ HAFTA ZARFINDA </u>
          </th>

          <th>Hiç</th>

          <th>Biraz</th>

          <th>Oldukça</th>

          <th>Çok</th>
        </tr>

        <tr>
          <th rowspan="1"> 31) Ağzınızın içerisinde ağrı hissettiniz mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="agiz" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="agiz" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="agiz" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="agiz" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 32) Çenenizde ağrı hissettiniz mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="cene" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="cene" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="cene" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="cene" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 33) Ağzınızın içerisinde tahriş oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="tahris" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="tahris" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="tahris" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="tahris" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 34) Boğazınız ağrıdı mı?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="bogaz" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="bogaz" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="bogaz" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="bogaz" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 35) Sıvıları yutmakta güçlük çektiğiniz oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="sivi" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="sivi" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="sivi" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="sivi" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            36) Yumuşak gıdaları yiyecekleri yutmakta güçlük çektiğiniz oldu mu?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="gida" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="gida" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="gida" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="gida" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            37) Katı yiyecekleri yutmakta güçlük çektiğiniz oldu mu?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="kati" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="kati" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="kati" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="kati" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">38) Bir şeyi yutarken boğazınıza kaçtığı oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="yutmak" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="yutmak" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="yutmak" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="yutmak" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 39) Dişlerinizle ilgili bir sorununuz oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="dis" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="dis" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="dis" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="dis" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            40) Ağzınızı geniş bir şekilde açmakta sorunlar yaşadınız mı?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="genis" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="genis" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="genis" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="genis" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 41) Ağzınızda kuruma oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="kuruma" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="kuruma" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="kuruma" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="kuruma" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 42) Tükürüğünüz yapış yapış oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="tukuruk" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="tukuruk" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="tukuruk" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="tukuruk" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 43) Koku alma duyunuzda bir sorun oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="koku" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="koku" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="koku" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="koku" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 44) Tat olma duyunuzda bir sorun oldu mu?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="tat" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="tat" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="tat" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="tat" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 45) Hiç öksürdünüz mü?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="oksuruk" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 46) Hiç sesiniz kısıldı mı?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="ses" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="ses" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="ses" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="ses" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 47) Kendinizi hasta hissettiniz mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="hasta" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="hasta" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="hasta" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="hasta" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 48) Dış görünümünüz sizi rahatsız etti mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="gorunum" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="gorunum" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="gorunum" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="gorunum" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th colspan="5"></th>
        </tr>

        <tr>
          <th colspan="5">
            <u>GEÇTİĞİMİZ HAFTA ZARFINDA</u>
          </th>
        </tr>

        <tr>
          <th rowspan="1"> 49) Yemekte güçlük çektiniz mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="yemek" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="yemek" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="yemek" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="yemek" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 50) Ailenizin önünde yemekte güçlük çektiniz mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="aile" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="aile" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="aile" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="aile" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            51) Başka kimselerin önünde yemekte güçlük çektiniz mi?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            52) Başka kimselerin önünde yemekte güçlük çektiniz mi?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="baska" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            53) Diğer kimselerle konuşmakta güçlük çektiniz mi??
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="diger" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="diger" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="diger" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="diger" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 54) Telefonda konuşmakta güçlük çektiniz mi?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="telefon" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="telefon" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="telefon" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="telefon" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            55) Ailenizle sosyal ilişkiler kurmakta güçlük çektiniz mi?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="sosyal" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="sosyal" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="sosyal" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="sosyal" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            56) Arkadaşlarınızla sosyal ilişkiler kurmakta güçlük çektiniz mi?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="arkadas" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="arkadas" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="arkadas" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="arkadas" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            57) Sokağa çıkıp insanların arasına karışmakta güçlük çektiniz mi?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="sokak" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="sokak" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="sokak" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="sokak" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            58) Ailenize veya arkadaşlarınıza direkt temasta güçlük çektiniz mi?
          </th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 59) Cinsel ilişkiye ilginiz azaldı mı?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 60) Cinsel ilişkiden aldığınız zevk azaldı mı?</th>
          <td>
            1<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="1" class="radio" />
          </td>
          <td>
            2<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="2" class="radio" />
          </td>
          <td>
            3<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="3" class="radio" />
          </td>
          <td>
            4<input onChange={(e) => handleInput(e)} type="radio" name="direkt" value="4" class="radio" />
          </td>
        </tr>

        <tr>
          <th colspan="5"></th>
        </tr>

        <tr>
          <th colspan="1">
            <u>GEÇTİĞİMİZ HAFTA ZARFINDA</u>
          </th>

          <td colspan="2">
            <b>Hayır</b>
          </td>

          <td colspan="2">
            <b>Evet</b>
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 61) Ağrı kesici ilaç kullandınız mı?</th>
          <td colspan="2">
            1<input onChange={(e) => handleInput(e)} type="radio" name="agrikesici" value="1" class="radio" />
          </td>
          <td colspan="2">
            2<input onChange={(e) => handleInput(e)} type="radio" name="agrikesici" value="2" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1">
            62) Herhangi bir ek besleyici madde/hap aldınız mı?
          </th>
          <td colspan="2">
            1<input onChange={(e) => handleInput(e)} type="radio" name="ekbesleyici" value="1" class="radio" />
          </td>
          <td colspan="2">
            2<input onChange={(e) => handleInput(e)} type="radio" name="ekbesleyici" value="2" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 63) Beslenme hortumu kullandınız mı?</th>
          <td colspan="2">
            1
            <input onChange={(e) => handleInput(e)}
              type="radio"
              name="beslenmehortumu"
              value="1"
              class="radio"
            />
          </td>
          <td colspan="2">
            2
            <input onChange={(e) => handleInput(e)}
              type="radio"
              name="beslenmehortumu"
              value="2"
              class="radio"
            />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 64) Kilo verdiniz mi?</th>
          <td colspan="2">
            1<input onChange={(e) => handleInput(e)} type="radio" name="kiloverme" value="1" class="radio" />
          </td>
          <td colspan="2">
            2<input onChange={(e) => handleInput(e)} type="radio" name="kiloverme" value="2" class="radio" />
          </td>
        </tr>

        <tr>
          <th rowspan="1"> 65) Kilo aldınız mı?</th>
          <td colspan="2">
            1<input onChange={(e) => handleInput(e)} type="radio" name="kiloalma" value="1" class="radio" />
          </td>
          <td colspan="2">
            2<input onChange={(e) => handleInput(e)} type="radio" name="kiloalma" value="2" class="radio" />
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <br />
          <input onChange={(e) => handleInput(e)} type="button" name="kaydet" value="Kaydet" class="button" />
        </tr>
      </table>
    </form>
  );
};

export default Basboyun;
