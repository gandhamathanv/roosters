import editName from "./edit.js";
// const edit = require("editfunction");
const dataContent = [
  {
    Servicerequested: "TOWING SERVICE OF ENGINE",
    chargeable: "Y",
    Customer: "DHL",
    AWBNumber: "618-98877800",
    ULDNumber: "",
    FlightDate: "",
    RequestedDate: "",
    Remarks: "",
    Status: "Pending",
    ReasonforRejection: "",
  },
  {
    Servicerequested: "FORKLIFT RENTAL",
    chargeable: "Y",
    Customer: "DBS",
    AWBNumber: "318-22110118",
    ULDNumber: "AKE10011SQ",
    FlightDate: "SQ666 06SEP2017",
    RequestedDate: "05SEP2017 13:10",
    Remarks: "success",
    Status: "Completed",
    ReasonforRejection: "",
  },
  {
    Servicerequested: "SECURITY ESCORT",
    chargeable: "Y",
    Customer: "TNT",
    AWBNumber: "618-77661001",
    ULDNumber: "",
    FlightDate: "",
    RequestedDate: "",
    Remarks: "",
    Status: "Rejected",
    ReasonforRejection: "Late Lodge-in",
  },
  {
    Servicerequested: "APPLY PERMIT",
    chargeable: "Y",
    Customer: "NES",
    AWBNumber: "618-10012211",
    ULDNumber: "",
    FlightDate: "SQ767 07SEP2017",
    RequestedDate: "06SEP2017 10:00",
    Remarks: "",
    Status: "Pending",
    ReasonforRejection: "",
  },
  {
    Servicerequested: "TOPUP DRY ICE",
    chargeable: "Y",
    Customer: "DHL",
    AWBNumber: "618-33221001",
    ULDNumber: "",
    FlightDate: "",
    RequestedDate: "",
    Remarks: "",
    Status: "Started",
    ReasonforRejection: "",
  },
];
const userVariables = {
  sortTabel: null,
};

const tabelContent = document.querySelector(".tabel-content");
const AWBNumber = document.getElementById("serviceID");
const ServiceName = document.getElementById("serviceName");
const customerName = document.getElementById("customerName");
const ULDNumber = document.getElementById("ULDNumber");
const Flight = document.getElementById("Flight");
const flightDate = document.getElementById("Date");
const searchButton = document.querySelector(".search-button");
const sortButton = document.querySelectorAll(".sort-tabel");
const sortButton1 = document.querySelectorAll(".sort-tabel1");
const content = (el, index) => ` <tr id="row${index}">
<td id="service${index}">${el.Servicerequested}</td>
<td id="chargeable${index}">${el.chargeable}</td>
<td id="customer${index}">${el.Customer}</td>
<td id="awbnumber${index}">${el.AWBNumber}</td>
<td id="uldnumber${index}">${el.ULDNumber}</td>
<td id="flightdate${index}">${el.FlightDate}</td>
<td id="requesteddate${index}">${el.RequestedDate}</td>
<td id="remarks${index}">${el.Remarks}</td>
<td id="status${index}" style="background-color:${
  el.Status == "Pending"
    ? "#ffd43b"
    : el.Status == "Completed"
    ? "#69db7c"
    : el.Status == "Rejected"
    ? "#ff8787"
    : el.Status == "Started"
    ? "#66d9e8"
    : "white"
}">${el.Status}</td>


<td id="reason${index}">${el.ReasonforRejection}</td>
<td id="toolbox${index}">
<div style="display:flex; gap:15px">
<div class="tooltip"><i id="edit-button-${index}" class="fa-solid fa-pen edit-button" id="AWBsort"></i>
                  <span class="tooltiptext">Edit</span>
                </div>
                <div class="tooltip"><i id="save-button-${index}" class="fa-regular fa-floppy-disk save-button" style="display:none"></i>
                <span class="tooltiptext">Save</span>
              </div>
              <div class="tooltip"><i id="delete-button-${index}"  class="fa-solid fa-trash delete-button"></i>
              <span class="tooltiptext">Delete</span>
            </div>
</div>
</td>
</tr>`;

{
  // <div class="tooltip"><i id="edit-button-${index}" onclick="edit_row(${index})" class="fa-solid fa-pen" id="AWBsort"></i>
  //                 <span class="tooltiptext">Edit</span>
  //               </div>
  /* <div class="tooltip"><i id="delete-button-${index}" onclick="delete_row(${index})" class="fa-solid fa-trash"></i>
                  <span class="tooltiptext">Delete</span>
                </div> */
  //   <div class="tooltip"><i id="delete-button-${index}" onclick="delete_row(${index})" class="fa-solid fa-trash"></i>
  //   <span class="tooltiptext">Delete</span>
  // </div>
}
const last = `<tr>

<td>
  <input type="text" id="new_service" placeholder="Service  ?" />
</td>
<td>
  <input type="text" id="new_chargeable" placeholder="chargeable ?" />
</td>
<td>
  <input type="text" id="new_customer" placeholder="Customer ?" />
</td>
<td>
  <input type="text" id="new_awbnumber" placeholder="AWB Number ?" />
</td>
<td>
  <input type="text" id="new_uldnumber" placeholder="ULD Number ?" />
</td>

<td>
  <input type="text" id="new_flightdate" placeholder="Flight & Date ?" />
</td>
<td>
  <input type="text" id="new_requesteddate" placeholder="Requested Date & Time?" />
</td>
<td>
  <input type="text" id="new_remarks" placeholder="Remarks ?" />
</td>
<td>
  <input type="text" id="new_status" placeholder="Status ?" />
</td>
<td>
  <input type="text" id="new_reason" placeholder="Reason ?" />
</td>
<td>
  <button type="button" class="add" onclick="add_row();" value="Add Row" style="
        background-color: #748ffc;
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
      ">
    Add New
  </button>
</td>
</tr>`;

const setData = (data) => {
  tabelContent.innerHTML = "";
  data.forEach((el, index) => {
    tabelContent.innerHTML += content(el, index);
  });
  // tabelContent.innerHTML += last;
  const editButton = document.querySelectorAll(".edit-button");
  console.log(editButton);
  for (var i = 0; i < editButton.length; i++) {
    (function (index) {
      editButton[index].addEventListener("click", function () {
        console.log(index);
        edit_row(index);
      });
    })(i);
  }
  const saveButton = document.querySelectorAll(".save-button");
  // console.log(saveButton);
  for (var i = 0; i < saveButton.length; i++) {
    (function (index) {
      saveButton[index].addEventListener("click", function () {
        console.log(index);
        save_row(index);
      });
    })(i);
  }
  const deleteButton = document.querySelectorAll(".delete-button");
  for (var i = 0; i < deleteButton.length; i++) {
    (function (index) {
      deleteButton[index].addEventListener("click", function () {
        console.log(index);
        delete_row(index);
      });
    })(i);
  }
};
setData(dataContent);

const sortString = (a, b, value) => {
  console.log(a, b);
  let fa = a[value].toLowerCase(),
    fb = b[value].toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
};
const sortNumber = (a, b, value) => b[value] - a[value];

const sortDate = (a, b, value) => {
  let da = new Date(a[value]),
    db = new Date(b[value]);
  return da - db;
};

// SORT DATA FUNCTION
const sortData = (data, index) => {
  console.log(index);
  switch (index) {
    case 0:
      data.sort((a, b) => sortString(a, b, "Servicerequested"));
      break;
    case 1:
      data.sort((a, b) => sortString(a, b, "Chargeable"));
      break;
    case 2:
      data.sort((a, b) => sortString(a, b, "Customer"));
      break;
    case 3:
      data.sort((a, b) => sortString(a, b, "AWBNumber"));
      break;
    case 4:
      data.sort((a, b) => sortString(a, b, "ULDNumber"));
      break;
    case 5:
      data.sort((a, b) => sortString(a, b, "FlightDate"));
      break;
    case 6:
      data.sort((a, b) => sortDate(a, b, "RequestedDate"));
      break;
    case 7:
      data.sort((a, b) => sortString(a, b, "Status"));

      break;
  }
  if (userVariables.sortTabel == null || userVariables.sortTabel == "DESC") {
    setData(data);
    userVariables.sortTabel = "ASC";
  } else if (userVariables.sortTabel == "ASC") {
    setData(data.reverse());
    userVariables.sortTabel = "DESC";
  }

  // console.log(dsata);
};

// FILTER FUNCTION
const filterData = (data) => {
  const searchNumber = AWBNumber.value;
  const searchName = customerName.value;
  const searchService = ServiceName.value;
  const searchULD = ULDNumber.value;
  const searchflight = Flight.value;
  const searchDate = flightDate.value;
  if (searchNumber != "") {
    data = data.filter((el) => {
      return el.AWBNumber.startsWith(searchNumber);
    });
  }
  if (searchName != "") {
    data = data.filter((el) => {
      return el.Customer.toLowerCase().startsWith(searchName.toLowerCase());
    });
  }
  if (searchService != "") {
    data = data.filter((el) => {
      return el.Servicerequested.toLowerCase().startsWith(
        searchService.toLowerCase()
      );
    });
  }
  if (searchULD != "") {
    data = data.filter((el) => {
      return el.ULDNumber.toLowerCase().startsWith(searchULD.toLowerCase());
    });
  }
  if (searchflight != "") {
    data = data.filter((el) => {
      return el.FlightDate.toLowerCase().startsWith(searchflight.toLowerCase());
    });
  }
  if (searchDate != "") {
    let FlightD = "";
    data = data.filter((el) => {
      if (el.FlightDate) {
        FlightD = el.FlightDate.split(" ");
        console.log(FlightD);
        FlightD = FlightD[1];
      } else {
        FlightD = "";
      }
      return FlightD.startsWith(searchDate.toLowerCase());
    });
  }
  console.log(data);
  return data;
};
searchButton.addEventListener("click", (el) =>
  setData(filterData(dataContent))
);
for (var i = 0; i < sortButton.length; i++) {
  (function (index) {
    sortButton[index].addEventListener("click", function () {
      sortData(dataContent, index);
    });
  })(i);
}

function edit_row(index) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("edit-button-" + index).style.display = "none";
  document.getElementById("save-button-" + index).style.display = "inline";

  const service = document.getElementById("service" + index);
  const chargeable = document.getElementById("chargeable" + index);
  const customer = document.getElementById("customer" + index);
  const awbnumber = document.getElementById("awbnumber" + index);
  const uldnumber = document.getElementById("uldnumber" + index);
  const flightdate = document.getElementById("flightdate" + index);
  const requesteddate = document.getElementById("requesteddate" + index);
  const remarks = document.getElementById("remarks" + index);
  const status = document.getElementById("status" + index);
  const reason = document.getElementById("reason" + index);

  const serviceValue = service.innerHTML;
  const chargeableValue = chargeable.innerHTML;
  const customerValue = customer.innerHTML;
  const awbnumberValue = awbnumber.innerHTML;
  const uldnumberValue = uldnumber.innerHTML;
  const flightDateValue = flightdate.innerHTML;
  const requesteddateValue = requesteddate.innerHTML;
  const remarksValue = remarks.innerHTML;
  const statusValue = status.innerHTML;
  const reasonValue = reason.innerHTML;
  const flightda = flightDateValue.split(" ");

  document.getElementById("service").value = serviceValue;
  // document.getElementById("chargeable").value = chargeableValue;
  document.getElementById("customer").value = customerValue;
  document.getElementById("awbnumber").value = awbnumberValue;
  document.getElementById("uldnumber").value = uldnumberValue;
  document.getElementById("flight").value = flightda[0];
  document.getElementById("flightdate").value = flightda[1];
  document.getElementById("requesteddate").value = requesteddateValue;
  document.getElementById("remarks").value = remarksValue;
  document.getElementById("status").value=statusValue;
  document.getElementById("reason").value = reasonValue;

  console.log(
    serviceValue,
    chargeableValue,
    customerValue,
    awbnumberValue,
    uldnumberValue,
    flightDateValue,
    requesteddateValue,
    remarksValue,
    statusValue,
    reasonValue
  );
  document.getElementById("saveedit").addEventListener("click", function () {
  
    save_row(index);
  });


  // var content = "";
  // content += `<input id="service_text${index}" class="input-element" value='${serviceValue}' >`;
  // content += `<input id="charge_text${index}" class="input-element" value='${chargeableValue}' >`;
  // content += `<input id="customer_text${index}" class="input-element" value='${customerValue}' >`;
  // content += `<input id="awb_text${index}" class="input-element" value='${awbnumberValue}' >`;
  // content += `<input id="uld_text${index}" class="input-element" value='${uldnumberValue} '>`;
  // content += `<input id="flight_text${index}" class="input-element" value='${flightDateValue}' >`;
  // content += `<input id="request_text${index}" class="input-element" value='${requesteddateValue} '>`;
  // content += `<input id="remarks_text${index}" class="input-element" value='${remarksValue}' >`;
  // content += `<input id="status_text${index}" class="input-element" value='${statusValue}' >`;
  // content += `<input id="reason_text${index}" class="input-element" value='${reasonValue}' >`;
  // editName(content);
  // console.log(content);
}
function clearALL() {
  document.getElementById("service").value = "";
  // document.getElementById("chargeable").value = chargeableValue;
  document.getElementById("customer").value = "";
  document.getElementById("awbnumber").value = "";
  document.getElementById("uldnumber").value = "";
  document.getElementById("flight").value = "";
  document.getElementById("flightdate").value = "";
  document.getElementById("requesteddate").value = "";
  document.getElementById("status")="Pending";
  document.getElementById("remarks").value = "";
  document.getElementById("reason").value = "";
}

document.getElementById("clearall").addEventListener("click", function () {
  clearALL();
});

document.getElementById("cancel").addEventListener("click", function () {
  document.getElementById("edit").style.display = "none";
});
// document.getElementById("saveedit").addEventListener("click");
// document.getElementById("edit").innerHTML = content;
function delete_row(index) {
  console.log("Delete", index);
  console.log({ dataContent });

  dataContent.splice(index, 1);

  console.log({ dataContent });

  setData(dataContent);
}
document.getElementById("add").addEventListener("click", function () {
  add_row();
});
function add_row() {
  document.getElementById("edit").style.display = "block";
  dataContent.push({
    Servicerequested: document.getElementById("service").value,
    chargeable: "Y",
    Customer: document.getElementById("customer").value,
    AWBNumber: document.getElementById("awbnumber").value,
    ULDNumber: document.getElementById("uldnumber").value,
    FlightDate:
      document.getElementById("flight").value +
      " " +
      changeFormate(document.getElementById("flightdate").value),
    RequestedDate:
      changeFormate(document.getElementById("requesteddate").value) +
      " " +
      document.getElementById("requestedtime").value,
    Remarks: document.getElementById("remarks").value,
    Status: document.getElementById("remarks").value,
    ReasonforRejection: document.getElementById("reason").value,
  });
  document.getElementById("saveedit").addEventListener("click", function () {
    document.getElementById("edit").style.display = "none";
    setData(dataContent);
  });
}



function save_row(index) {
  document.getElementById("cancel").removeEventListener("click", function () {
    document.getElementById("edit").style.display = "none";
  });
  console.log("saveindex",index)
  document.getElementById("edit-button-" + index).style.display = "inline";
  document.getElementById("save-button-" + index).style.display = "none";

  const service = document.getElementById("service" + index);
  const chargeable = document.getElementById("chargeable" + index);
  const customer = document.getElementById("customer" + index);
  const awbnumber = document.getElementById("awbnumber" + index);
  const uldnumber = document.getElementById("uldnumber" + index);
  const flightdate = document.getElementById("flightdate" + index);
  const requesteddate = document.getElementById("requesteddate" + index);
  const remarks = document.getElementById("remarks" + index);
  const status = document.getElementById("status" + index);
  const reason = document.getElementById("reason" + index);
  // const flightda = el.flightdate.split(" ");
  // document.getElementById("service").value;
  // // document.getElementById("chargeable").value = chargeableValue;
  // document.getElementById("customer").value = customerValue;
  // document.getElementById("awbnumber").value = awbnumberValue;
  // document.getElementById("uldnumber").value = uldnumberValue;
  // document.getElementById("flight").value = flightda[0];
  // document.getElementById("flightdate").value = flightda[1];
  // document.getElementById("requesteddate").value = requesteddateValue;
  // document.getElementById("remarks").value = remarksValue;
  // document.getElementById("reason").value = reasonValue;
  const serviceValue = document.getElementById("service").value;
  const chargeableValue = "Y";
  const customerValue = document.getElementById("customer").value;
  var awbnumberValue = document.getElementById("awbnumber").value;
  const uldnumberValue = document.getElementById("uldnumber").value;
  const flightDateValue =
    document.getElementById("flight").value +
    " " +
    changeFormate(document.getElementById("flightdate").value);
  const requesteddateValue =
    changeFormate(document.getElementById("requesteddate").value) +
    " " +
    document.getElementById("requestedtime").value;
  const remarksValue = document.getElementById("remarks").value;
  const statusValue = document.getElementById("status").value;
  const reasonValue = document.getElementById("reason").value;
  var numbers=/^[0-9]{3}[\-]?[0-9]{8}/;
  var uldnumbertest=/^[A-Z]{3}[0-9]{4,5}[0-9A-Z]{3}/;
  if(serviceValue=="")
  {
    return(setError("Please provide Service Name "));
  }
  // else if(customerName="")
  // {
  //   return(setError("Please provide Customer Name "));
  // }
  if(customerValue=="")
  {
    return(setError("Please provide Customer Code"));
  }
  if(awbnumberValue=="")
  {
    return(setError("Please provide AWB Number"));
  }
  else
  {
    if(!numbers.test(awbnumberValue))
    {
      return(setError("Please provide AWB Number in given format"));
    }
    awbnumberValue = awbnumberValue.replace(/(\d{3})(\d{8})/, '$1-$2');
  }

  if(!uldnumberValue=="")
  {
    if(!uldnumbertest.test(uldnumberValue))
    {
      return(setError("Please provide Uld Number in correct format"));
    }

  }


  // service.parentNode.innerHTML = serviceValue
  // console.log(service.parentNode);
  // console.log(flightDateValue);
  // console.log(serviceValue,chargeableValue,customerValue);
  // service.value = serviceValue;
  // chargeable.value = chargeableValue;
  // customer.value = customerValue;
  // awbnumber.value = awbnumberValue;
  // uldnumber.value = uldnumberValue;
  // flightdate.value = flightDateValue;
  // requesteddate.value = requesteddateValue;
  // remarks.value = remarksValue;
  // status.value = statusValue;
  // reason.value = reasonValue;

  dataContent[index] = {
    Servicerequested: serviceValue,
    chargeable: chargeableValue,
    Customer: customerValue,
    AWBNumber: awbnumberValue,
    ULDNumber: uldnumberValue,
    FlightDate: flightDateValue,
    RequestedDate: requesteddateValue,
    Remarks: remarksValue,
    Status: statusValue,
    ReasonforRejection: reasonValue,
  };
  setData(dataContent);
  document.getElementById("edit").style.display = "none";
}

function changeFormate(date) {
  let month_names = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let incomingDateChnge = new Date(date);
  let incomingDay = incomingDateChnge.getDate();
  let incomingMonth = incomingDateChnge.getMonth();

  let incomingYear = incomingDateChnge.getFullYear();
  if (incomingDay < 10) {
    incomingDay = "0" + incomingDay;
  }

  incomingDateChnge = incomingDay + month_names[incomingMonth] + incomingYear;
  // console.log(incomingDateChnge);
  return incomingDateChnge;
}

function setError(errorMessage) {
  let errorContainer = document.querySelector(".error-container");
  // var waiverLimitField = document.getElementById("new_country");
  // var approvalLimitField = document.getElementById("new_age");

  errorContainer.style.display = "flex";
  let errorText = document.querySelector(".error-text");
  errorText.innerText = errorMessage;

  setTimeout(function () {
    errorContainer.style.display = "none";
    // waiverLimitField.classList.remove("error-field");
    // approvalLimitField.classList.remove("error-field");
  }, 10000); //
}

setError("Ashwinth");
