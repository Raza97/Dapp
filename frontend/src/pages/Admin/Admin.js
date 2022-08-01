import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Admin() {

  const [channal, setchannal] = React.useState();

//   const { Moralis} = useMoralis();
//   const user = Moralis.User.current();
async function getData() {
    const res = await axios.get(`http://localhost:5000/fulldata/data`);
    console.log(res.data.channl,"datafull");
    setchannal(res.data.channl)
    
  }
  React.useEffect(() => {
    getData();
  }, []);
  console.log(channal,"channal");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell >User_Id</StyledTableCell>
          <StyledTableCell >Channal_Id</StyledTableCell>
            <StyledTableCell >Channal Name</StyledTableCell>
            <StyledTableCell >Channal About</StyledTableCell>
          
            <StyledTableCell >Youtube links</StyledTableCell>
            <StyledTableCell >Telegram links</StyledTableCell>
            <StyledTableCell >instagram link</StyledTableCell>
            <StyledTableCell >Avatar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {channal?.map((row) => (
            <StyledTableRow key={row._id}>
            <StyledTableCell component="th" scope="row" >
                {row.userid}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="right">
                {row?._id}
              </StyledTableCell>
              <StyledTableCell>{row?.username}</StyledTableCell>
              <StyledTableCell>{row?.About}</StyledTableCell>
              <StyledTableCell >{row?.youtube}</StyledTableCell>
              <StyledTableCell>{row?.telegram}</StyledTableCell>
              <StyledTableCell >{row?.instagram}</StyledTableCell>
              <StyledTableCell ><img src={row?.img} style={{width:"20px",height:"20px"}}></img></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
