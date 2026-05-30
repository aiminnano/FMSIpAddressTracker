import Searchbar from "./components/Searchbar"

import { useState, useEffect } from 'react';


function App() {

  const [ip, setIp] = useState('');
  const [ipData, setIpData] = useState(null);

    const handleSearch = () => {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_obzWDQlJg2JSO9Zbg9ph9Yz7CAL7Q&ipAddress=${ip}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIpData(data);
        })
        
    };

  return (
    <>
      <Searchbar ip={ip} setIp={setIp} onSearch={handleSearch} ipData={ipData}/>
    </>
  )
}

export default App
