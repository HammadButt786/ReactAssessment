import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SingleRecord = ({ record, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete("http://localhost:3001/records/" + record.id)
      .then((res) => {
        console.log(res);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableBody>
            <TableRow>
              <TableCell align="left">{record.id}</TableCell>
              <TableCell align="left">{record.recruitmentName}</TableCell>
              <TableCell align="center">{record.candidatesNo}</TableCell>
              <TableCell align="right">{record.startDate}</TableCell>

              <TableCell align="right">{record.status}</TableCell>
              <TableCell align="right">
                <CardTravelOutlinedIcon
                  style={{
                    color: "#06BF97",
                    marginRight: "0.5em",
                    cursor: "pointer",
                  }}
                />
                <DeleteOutlineOutlinedIcon
                  style={{ color: "#EB5757", cursor: "pointer" }}
                  onClick={handleDelete}
                />
                <EditIcon
                  onClick={() => {
                    navigate("/update/" + record.id);
                  }}
                  fontSize="medium"
                  style={{ marginLeft: "0.5em", cursor: "pointer" }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SingleRecord;
