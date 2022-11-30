import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dataUser, setDataUser] = useState()
  const [tertua, setTertua] = useState([])

  const tertuaHandle = (payload) => {
    let result = []
    for(let i = 0; i < payload.length; i++) {
      if(payload[i].height < 170 && payload[i].age >= 30) {
        console.log("ada")
        result.push(payload[i])
      }
    }
    setTertua(...tertua, result)
    console.log(result, "ini tertua")
  }

  useEffect(() => {
    axios({
      method:"get",
      url:'https://dummyjson.com/users',
    })
    .then(data => {
      tertuaHandle(data.data.users)
      // console.log(data.data.users)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <div className= "dataTertua">
          {
            tertua.map((item, key) => 
              <div key={key} className="itemsTertua">
                <div>
                  <img src={item.image} />
                </div>
                <div>
                  <span>Name:</span>
                  {item.firstName + ' ' + item.lastName} 
                </div>
                <div>
                  <span>Age:</span>
                  {item.age}
                </div>
                <div>
                  <span>Height:</span>
                  {item.height}
                </div>
              </div>
            )
          }
      </div>
    </div>
  );
}

export default App;
