import React, { useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import img from "./Images/certi.png";
import img2 from "./Images/img2.png";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const statusOptions = ["In Progress", "Completed"];

const NewRecruitment = () => {
  const [recruitmentName, setRecruitmentName] = useState("");

  const [candidatesNo, setCandidatesNo] = useState(0);

  const [startDate, setStartDate] = useState();

  const [id, setId] = useState("");
  const [status, setStatus] = useState(statusOptions[0]);

  const [inputValueStatus, setInputValueStatus] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/records", {
        recruitmentName,
        status,
        id,
        startDate,
        candidatesNo,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="" style={{ backgroundColor: "#F6F8FA" }}>
      <Grid container spacing={0}>
        <Grid item xs={2.2}>
          <img
            className="img-fluid"
            style={{
              position: "absolute",
              width: "10em",
              height: "5em",
              left: "3em",
              top: "2em",
            }}
            src={img}
            alt="horse"
          />
          <AddCardIcon
            style={{
              position: "absolute",
              left: "2em",
              top: "6.6em",
              color: "#FFFFFF",
            }}
          />
          <h6
            style={{
              position: "absolute",
              font: "SF UI Text",

              color: "#FFFFFF",

              left: "5em",
              top: "10em",
            }}
          >
            My Recruitment
          </h6>
          <hr
            style={{
              position: "absolute",
              width: "217.68px",
              height: "0px",
              left: "1.5em",
              top: "51.5em",
              border: "2px solid #06BF97",
              transform: "rotate(-0.03deg)",
            }}
          />
          <img
            className="img-fluid"
            style={{
              position: "absolute",
              top: "55em",
              left: "2em",
            }}
            src={img2}
            alt="..."
          />

          <Box
            sx={{
              width: 280,
              height: 1100,
              backgroundColor: "#142D52",
            }}
          />
        </Grid>

        <Grid style={{ backgroundColor: "#F6F8FA" }} item xs={9.8}>
          <Stack direction="row" spacing={2}>
            <h4
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                color: "#142D52",
                marginTop: "1em",
                marginLeft: "1em",
              }}
            >
              Create New Recruitment
            </h4>
            <NotificationsSharpIcon
              style={{
                marginTop: "0.7em",
                marginLeft: "auto",
                width: "2em",
                height: "2em",
                color: "#BABABA",
              }}
            />
            <Avatar
              className=""
              style={{ marginTop: "1em", marginLeft: "2rem" }}
              alt="Cindy Baker"
              src="data:image/jpeg;base64,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"
            />
            <h6 style={{ marginTop: "2em", color: "#585858" }}>John Doe</h6>
            <ArrowDropDownSharpIcon
              style={{ marginTop: "1.3em", marginRight: "5em" }}
            />
          </Stack>
          <div
            className="mt-5 mx-3 border container "
            style={{
              width: 1200,
              height: 600,
              backgroundColor: "white",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                value={recruitmentName}
                onChange={(e) => {
                  setRecruitmentName(e.target.value);
                }}
                className="mt-5"
                id="outlined-basic"
                label="Enter name of your recruitment "
                variant="outlined"
              />
              <Grid className="mt-3" container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    value={candidatesNo}
                    onChange={(e) => {
                      setCandidatesNo(e.target.value);
                    }}
                    id="outlined-basic"
                    label="Select No of employees"
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    id="outlined-basic"
                    label="ID of Recruitment"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid className="mt-3" container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                    label="mm/dd/yyyy"
                    id="outlined-basic"
                    variant="outlined"
                    type="date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    value={status}
                    onChange={(event, newValue) => {
                      setStatus(newValue);
                    }}
                    inputValue={inputValueStatus}
                    onInputChange={(event, newInputValue) => {
                      setInputValueStatus(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={statusOptions}
                    sx={{
                      maxWidth: "100%",
                      marginBottom: "2em",
                    }}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Status of Recruitment" />
                    )}
                  />
                </Grid>
              </Grid>

              <TextField
                style={{ marginTop: "5em" }}
                fullWidth
                multiline
                rows={4}
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />

              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#06BF97",
                  float: "right",
                  marginTop: "2em",
                  marginRight: "1em",
                }}
              >
                Save & Continue
              </Button>

              <Button
                variant="outlined"
                style={{
                  color: "#06BF97",
                  float: "right",
                  marginTop: "2em",
                  marginRight: "2em",
                  width: "9em",
                }}
              >
                Cancel
              </Button>
            </form>
          </div>

          <hr style={{ marginTop: "8em" }} />
          <Grid container spacing={2}>
            <Grid item xs={3} style={{ marginLeft: "3em", marginTop: "3em" }}>
              <ul className="list-unstyled text-small">
                <li>
                  <h6 style={{ color: "#827F7F" }}>Services</h6>
                </li>
                <li>
                  <h6 style={{ color: "#827F7F", marginTop: "2em" }}>
                    Pricing
                  </h6>
                </li>
                <li>
                  <h6 style={{ color: "#827F7F", marginTop: "2em" }}>
                    Contact
                  </h6>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3} style={{ marginTop: "3em" }}>
              <ul className="list-unstyled text-small">
                <li>
                  <h6 style={{ color: "#827F7F" }}>Services</h6>
                </li>
                <li>
                  <h6 style={{ color: "#827F7F", marginTop: "2em" }}>
                    Pricing
                  </h6>
                </li>
                <li>
                  <h6 style={{ color: "#827F7F", marginTop: "2em" }}>
                    Contact
                  </h6>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3} style={{ marginTop: "3em" }}>
              <ul className="list-unstyled text-small">
                <li>
                  <h6 style={{ color: "#827F7F" }}>Services</h6>
                </li>
                <li>
                  <h6 style={{ color: "#827F7F", marginTop: "2em" }}>
                    Pricing
                  </h6>
                </li>
                <li>
                  <h6 style={{ color: "#827F7F", marginTop: "2em" }}>
                    Contact
                  </h6>
                </li>
              </ul>
            </Grid>
            <Grid item xs={2} style={{ marginTop: "1em" }}>
              <FacebookRoundedIcon
                fontSize="large"
                style={{ color: "#06BF97" }}
              />
              <WhatsappRoundedIcon
                fontSize="large"
                style={{ color: "#06BF97", marginLeft: "1em" }}
              />
              <FacebookRoundedIcon
                fontSize="large"
                style={{ color: "#06BF97", marginLeft: "1em" }}
              />
              <h6 style={{ color: "#827F7F", marginTop: "1em" }}>
                Subscribe our Newsletters to keep updated yourself with current
                Revolution in Fitness Sector.
              </h6>
              <div className="input-group mt-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <SendSharpIcon
                  fontSize="medium"
                  style={{
                    position: "absolute",
                    color: "#06BF97",
                    left: "160",
                    top: "6",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewRecruitment;
