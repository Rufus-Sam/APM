import React, { useState } from "react";
import Header from "../Components/Header/Header";
import axios from "axios";
import { v1 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./AddProject.css";

function AddProject() {
  const [Project, setProject] = useState("");
  const [ChargeCode, setChargeCode] = useState("");
  const [ServiceLine, setServiceLine] = useState("");
  const [ChannelName, setChannelName] = useState("");
  const [Portfolio, setPortfolio] = useState("");
  const [TDM, setTDM] = useState("");

  const navigate = useNavigate();
  //const [allEntry, setAllEntry] = useState([]);

  async function addProject(newEmployee) {
    try {
      await axios.post("https://localhost:7243/api/Project", newEmployee);
    } catch (er) {
      console.log(er);
    }
  }

  async function addProjectAssociation(newAssociationEntry) {
    try {
      await axios.post(
        "https://localhost:7243/api/ProjectAssociation",
        newAssociationEntry
      );
    } catch (er) {
      console.log(er);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    const id = v1();
    const newEntry = {
      ProjectId: id,
      ProjectName: Project,
      ChargeCode: ChargeCode,
      ServiceLineId: ServiceLine,
      ChannelNameId: ChannelName,
      PortfolioId: Portfolio,
      IsDeleted: false,
      CreatedBy: "Rufus",
      UpdatedBy: "Rufus",
    };
    const newAssociationEntry = {
      ProjectId: id,
      EmployeeId: TDM,
    };
    addProject(newEntry);
    addProjectAssociation(newAssociationEntry);
    navigate("/");
    // setAllEntry([...allEntry, newEntry]);
    // console.log(allEntry);
    console.log(newEntry);
  };

  return (
    <div>
      <Header />
      <form action="" onSubmit={submitForm}>
        <div className="">
          <h3> ADD PROJECT DETAILS </h3>
        </div>
        <div className="main">
          <div>
            <label for="Project">Project</label>
            <input
              type="text"
              id="Project"
              value={Project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="ChargeCode">Charge Code</label>
            <input
              type="text"
              id="ChargeCode"
              value={ChargeCode}
              onChange={(e) => setChargeCode(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="ServiceLine">Service Line</label>
            <input
              type="text"
              id="ServiceLine"
              value={ServiceLine}
              onChange={(e) => setServiceLine(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="ChannelName">Channel Name</label>
            <input
              type="text"
              id="ChannelName"
              value={ChannelName}
              onChange={(e) => setChannelName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="Portfolio">Portfolio</label>
            <input
              type="text"
              id="Portfolio"
              value={Portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="TDM">TDM</label>
            <input
              type="text"
              id="TDM"
              value={TDM}
              onChange={(e) => setTDM(e.target.value)}
            />
          </div>
          <br />
          <button className="button" type="Reset">
            CANCEL
          </button>
          <button className="button2" type="submit">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
