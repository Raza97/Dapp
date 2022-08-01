import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import MuiTable from '../../components/Cards/MuiTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const AmbasdorView = () => {
    let navigate = useNavigate();
    const [channal, setchannal] = useState();

//   const { Moralis} = useMoralis();
//   const user = Moralis.User.current();
async function getData() {
    const res = await axios.get(`http://localhost:5000/ambasdor/data`);
    console.log(res.data.ambasdor,"datafull");
    setchannal(res.data.ambasdor)
    
  }
  useEffect(() => {
    getData();
  }, []);
  const onSubmit = async e => {
    
    
    
   
    navigate("/admin/addambasdor");
 

   
    

  };
  
  return (
    <>
    <Stack spacing={2} direction="row">
     
      <Button variant="contained" onClick={e => onSubmit(e)}>ADD New Ambasdor</Button>
     
    </Stack>
    
     
     <br/>
     
{channal&& <MuiTable data={channal}/>}


    </>
    
  )
}

export default AmbasdorView