import React from "react";
import { employees } from "./data";
import "./AdminGrid.css";

export default function Grid() {
  function checkUncheck() {
    const selectAllCheckBox = document.getElementById("mainCheck");
    const allCheckBox = document.getElementsByClassName("lang");
    for (let i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].checked = selectAllCheckBox.checked;
    }
  }
  // let employeesToBeDeletedSet;
  // function selectEmployeesToDelete() {
  //   const employeesToBeDeleted = document.getElementsByTagName(
  //     'input[className="lang"]:checked'
  //   );
  //   employeesToBeDeletedSet = new Set(employeesToBeDeleted);
  // }

  return (
    // <h1>hello</h1>
    <div>
      <div className="adminGrid">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="mainCheck" onClick={checkUncheck} />
              </th>
              <th>ProjectName</th>
              <th>ChargeCode</th>
              <th>ServiceLine</th>
              <th>ChannelName</th>
              <th>Portfolio</th>
              <th>TDM Name</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input className="lang" type="checkbox" value={e.id} />
                  </td>
                  <td>{e.ProjectName}</td>
                  <td>{e.ChargeCode}</td>
                  <td>{e.ServiceLine}</td>
                  <td>{e.ChannelName}</td>
                  <td>{e.Portfolio}</td>
                  <td>{e.TDM_Name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
