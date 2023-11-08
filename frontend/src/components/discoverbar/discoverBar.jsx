import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {IoLocation} from "react-icons/io5"
import {BsCalendarEventFill} from "react-icons/bs"
import {IoEyeSharp} from "react-icons/io5"
import Button from '@mui/material/Button'; 


export default function DiscoverBar() {
  return (<>
  
  <div className= "flex flex-row justify-evenly" style={{backgroundColor: 'white', paddingTop: 5, paddingBottom: 5}}>
    <Box sx={{ width: 300}}>
      
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{display: 'flex', flexDirection: 'row', color: "#1976d2"}}>
           <IoEyeSharp className='h-5 w-5'/><span style={{paddingLeft: 5 }}>Keşfet</span>
        </InputLabel>
        <NativeSelect style={{color: "#1976d2"}}
          defaultValue={"Tüm Kategoriler"}
          inputProps={{
            name: 'kategori',
            id: 'uncontrolled-native',
          }}
        >
          <option value={"allcategories"}>Tüm Kategoriler</option>
          <option value={"music"}>Müzik</option>
          <option value={"theatre"}>Tiyatro</option>
          <option value={"sport"}>Spor</option>
        </NativeSelect>
      </FormControl>
    </Box>
    <Box sx={{ width: 300}}>
      
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{display: 'flex', flexDirection: 'row', color: "#1976d2"}}>
          <BsCalendarEventFill className='h-5 w-5'/><span style={{paddingLeft: 5 }}>Tarih</span>
        </InputLabel>
        <NativeSelect style={{color: "#1976d2"}}
          defaultValue={"Tarihler"}
          inputProps={{
            name: 'Tarih',
            id: 'uncontrolled-native',
          }}
        >
          <option value={"today"}>Bugün</option>
          <option value={"weekend"}>Haftasonu</option>
          <option value={"nextweek"}>Önümüzdeki Hafta</option>
          <option value={"nextweekend"}>Önümüzdeki Haftasonu</option>
          <option value={"next14days"}>Önümüzdeki 14 gün</option>
          <option value={"thismonth"}>Bu Ay</option>


        </NativeSelect>
      </FormControl>
    </Box>
    <Box sx={{ width: 300, display: 'flex', flexDirection: 'row'}}>
      
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{display: 'flex', flexDirection: 'row', color: "#1976d2"}}>
          <IoLocation className='h-5 w-5'/><span style={{paddingLeft: 5 }}>Konum</span>
        </InputLabel>
        <NativeSelect style={{color: "#1976d2"}}
          defaultValue={"Konum"}
          inputProps={{
            name: 'Konum',
            id: 'uncontrolled-native',
          }}
        >
          <option value="0">Tüm Türkiye</option>
          <option value="1">Adana</option>
          <option value="2">Adıyaman</option>
          <option value="3">Afyonkarahisar</option>
          <option value="4">Ağrı</option>
          <option value="5">Amasya</option>
          <option value="6">Ankara</option>
          <option value="7">Antalya</option>
          <option value="8">Artvin</option>
          <option value="9">Aydın</option>
          <option value="10">Balıkesir</option>
          <option value="11">Bilecik</option>
          <option value="12">Bingöl</option>
          <option value="13">Bitlis</option>
          <option value="14">Bolu</option>
          <option value="15">Burdur</option>
          <option value="16">Bursa</option>
          <option value="17">Çanakkale</option>
          <option value="18">Çankırı</option>
          <option value="19">Çorum</option>
          <option value="20">Denizli</option>
          <option value="21">Diyarbakır</option>
          <option value="22">Edirne</option>
          <option value="23">Elazığ</option>
          <option value="24">Erzincan</option>
          <option value="25">Erzurum</option>
          <option value="26">Eskişehir</option>
          <option value="27">Gaziantep</option>
          <option value="28">Giresun</option>
          <option value="29">Gümüşhane</option>
          <option value="30">Hakkâri</option>
          <option value="31">Hatay</option>
          <option value="32">Isparta</option>
          <option value="33">Mersin</option>
          <option value="34">İstanbul</option>
          <option value="35">İzmir</option>
          <option value="36">Kars</option>
          <option value="37">Kastamonu</option>
          <option value="38">Kayseri</option>
          <option value="39">Kırklareli</option>
          <option value="40">Kırşehir</option>
          <option value="41">Kocaeli</option>
          <option value="42">Konya</option>
          <option value="43">Kütahya</option>
          <option value="44">Malatya</option>
          <option value="45">Manisa</option>
          <option value="46">Kahramanmaraş</option>
          <option value="47">Mardin</option>
          <option value="48">Muğla</option>
          <option value="49">Muş</option>
          <option value="50">Nevşehir</option>
          <option value="51">Niğde</option>
          <option value="52">Ordu</option>
          <option value="53">Rize</option>
          <option value="54">Sakarya</option>
          <option value="55">Samsun</option>
          <option value="56">Siirt</option>
          <option value="57">Sinop</option>
          <option value="58">Sivas</option>
          <option value="59">Tekirdağ</option>
          <option value="60">Tokat</option>
          <option value="61">Trabzon</option>
          <option value="62">Tunceli</option>
          <option value="63">Şanlıurfa</option>
          <option value="64">Uşak</option>
          <option value="65">Van</option>
          <option value="66">Yozgat</option>
          <option value="67">Zonguldak</option>
          <option value="68">Aksaray</option>
          <option value="69">Bayburt</option>
          <option value="70">Karaman</option>
          <option value="71">Kırıkkale</option>
          <option value="72">Batman</option>
          <option value="73">Şırnak</option>
          <option value="74">Bartın</option>
          <option value="75">Ardahan</option>
          <option value="76">Iğdır</option>
          <option value="77">Yalova</option>
          <option value="78">Karabük</option>
          <option value="79">Kilis</option>
          <option value="80">Osmaniye</option>
          <option value="81">Düzce</option>


        </NativeSelect>
      </FormControl>
    </Box>
    <Button variant="contained" disableElevation>
      GİT
    </Button>
    
  </div>
    </>);
}