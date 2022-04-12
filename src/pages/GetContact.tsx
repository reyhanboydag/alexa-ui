import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function TextFieldSizes() {
  const [users, setUsers] = useState([]);
  const ethereum = window.ethereum;
  useEffect(() => {
    getUsers();
  }, []);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //setOpen(false);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: "0x61c7447C8d41E32bEd6f76f947cEE60e1B692609",
            to: "0x6F215136Bef3FA61DC5b47006BFa1c9073450000",
            value: "0x9184e72a",
            gasPrice: "0x09184e72a000",
            gas: "0x2710",
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  };
  const getUsers = () => {
    axios.get("http://localhost:4000/contact/").then((res) => setUsers(res.data));
  };
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: "15px auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {user.fullName}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.address}</TableCell>
              <TableCell align="right">
                <Button onClick={handleClickOpen}>Send</Button>
              </TableCell>
              <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                  <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">{user.name}</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
