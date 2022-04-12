import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ fullName: "", name: "", address: "" });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: attr, value } = event.target;
    setUserData({ ...userData, [`${attr}`]: value });
  };
  const addUser = () => {
    axios.post("http://localhost:4000/users/add", userData).then((res) => navigate("/getUsers"));
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px auto",
        justifyContent: "center",
        border: "1px solid #333",
        borderRadius: "16px",
        padding: "60px 20px",
        width: 600,
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Username" id="username" type="text" name="username" placeholder="Username" onChange={handleChangeInput} sx={{ minWidth: 400 }} />
      <TextField label="Key" id="key" type="text" name="key" placeholder="Key" onChange={handleChangeInput} sx={{ minWidth: 400 }} />
      <Button variant="contained" onClick={addUser} sx={{ minWidth: 400 }}>
        Add User
      </Button>
    </Box>
  );
}
