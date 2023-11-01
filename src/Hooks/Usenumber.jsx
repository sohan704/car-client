import axios from "axios";
import { useEffect, useState } from "react";

const Usenumber = () => {
  const [number, setNumber] = useState(0);
  
  useEffect(()=>{
    axios.get()
    .then(res => {
      setNumber(res.data);
    }) 
  },[])

 return number;
};

export default Usenumber;