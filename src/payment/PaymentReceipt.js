import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Night Party', 'IPS College', "18-04-2023", 1, 400),
  createData('Music Party', 'IPS College', "20-04-2023", 1, 300),
  createData('Cultural Party', 'IPS College', "22-04-2023", 1, 500),
  createData('Total Pay', '', "", "", 900),

];

function PaymentReceipt() {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    description: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    setFormData({
      date: data.get('date'),
      amount: data.get('amount'),
      description: data.get('description'),
    });
  }

  const renderReceipt = () => {
    const { date, amount, description } = formData;
    return (
      
    <div>
    <Grid container spacing={2} style={{padding:20}}>
      <Grid item xs={12} style={{ textAlign: 'center', textTransform: 'uppercase', }}>
        <Typography variant="h2" gutterBottom style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
          Technoparv
        </Typography>
        <div style={{ textAlign: 'end', textTransform: 'capitalize',  }}>
        <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 12 }}>
          IPS College Of Technology & Management <br />
          <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '10px', textAlign: 'justify' }}>Shivpuri Link Rd, Gwalior, Madhya Pradesh 474001<br />Phone: 0751 305 2400,9285022400,9285032400</span><br />

        </div>
      </div><hr />
      </Grid>

      <Grid item xs={12}>
        <div style={{textAlign:'center',textTransform: 'uppercase',fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 18}}>Payment Receipt</div>
      </Grid>

      

      <Grid item xs={12} style={{ textAlign: 'start', marginTop: '50px' }}>
        <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 18, textTransform: 'uppercase' }}>
          Recipient<br />
        </div>
        <div style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginTop: 10,lineHeight:1.3,fontWeight:500,textTransform: 'capitalize' }}>
          <span>Deepak Singh Tomar</span>
          <span>Ramniwas Singh Tomar</span>
          <span>Deepaktomarcse2020@gmail.com</span>
          <span>IPS College Of Technology & Management</span>
        </div>


      </Grid>


      <Grid item xs={12} style={{padding:10}}>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>Event Name</TableCell>
                <TableCell align="center">Event Location</TableCell>
                <TableCell align="center">Events Date</TableCell>
                <TableCell align="center">Total Event  Join </TableCell>
                <TableCell align="center">Payment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* <Grid item xs={6}>
      <Typography gutterBottom>
      Date: 
    </Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography gutterBottom>
      Amount: 
    </Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography gutterBottom>
      Description: 
    </Typography>
      </Grid> */}


    </Grid>




  </div>
      // <div>
      //   <Typography variant="h4" gutterBottom>
      //     Payment Receipt
      //   </Typography>
      //   <Typography gutterBottom>
      //     Date: {date}
      //   </Typography>
      //   <Typography gutterBottom>
      //     Amount: ${amount}
      //   </Typography>
      //   <Typography gutterBottom>
      //     Description: {description}
      //   </Typography>
      // </div>
    );
  }

  const componentRef = useRef();
  const classes = useStyles();

  return (






    <div style={{width:'100%',height:'100vh',background:'grey',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Paper className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 style={{textAlign:'center',textTransform:'uppercase',fontFamily:'serif',fontWeight:'bold'}}>Technoparv</h1>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="date"
                type="date"
                // label="Date"
                required
                variant='outlined'
                onChange={(event) => setFormData({ ...formData, date: event.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="amount"
                type="number"
                label="Amount"
                variant='outlined'
                required
                onChange={(event) => setFormData({ ...formData, amount: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="description"
                type="text"
                label="Description"
                variant='outlined'
                required
                onChange={(event) => setFormData({ ...formData, description: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <ReactToPrint
          trigger={() => (
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Print
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Paper>
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          {renderReceipt()}
        </div>
      </div>
    </div>
  );
}

export default PaymentReceipt;
