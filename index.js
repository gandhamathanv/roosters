const dataContent = [
  {
    Servicerequested: "TOWING SERVICE OF ENGINE",
    Chargable: "Y",
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
    Chargable: "Y",
    Customer: "DBS",
    AWBNumber: "318-22110118",
    ULDNumber: "AKE10011SQ",
    FlightDate: "SQ666 06SEP2017",
    RequestedDate: "05SEP2017 13:10",
    Remarks: "",
    Status: "Completed",
    ReasonforRejection: "",
  },
  {
    Servicerequested: "SECURITY ESCORT",
    Chargable: "Y",
    Customer: "TNT",
    AWBNumber: "618-77661001",
    ULDNumber: "",
    FlightDate: "",
    RequestedDate: "",
    Remarks: "",
    Status: "Reject",
    ReasonforRejection: "Late Lodge-in",
  },
  {
    Servicerequested: "APPLY PERMIT",
    Chargable: "Y",
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
    Chargable: "Y",
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
<td id="chargable${index}">${el.Chargable}</td>
<td id="customer${index}">${el.Customer}</td>
<td id="awbnumber${index}">${el.AWBNumber}</td>
<td id="uldnumber${index}">${el.ULDNumber}</td>
<td id="flightdate${index}">${el.FlightDate}</td>
<td id="requesteddate${index}">${el.RequestedDate}</td>
<td id="remarks${index}">${el.Remarks}</td>
<td id="status${index}">${el.Status}</td>
<td id="reason${index}">${el.ReasonforRejection}</td>
<td id="service${index}">
<div style="display:flex; gap:15px">
<i onclick="edit_row(${index})" class="fa-solid fa-pen" id="AWBsort"></i>
<i class="fa-solid fa-trash"></i>
</div>
</td>
</tr>`;
const last = `<tr>

<td>
  <input type="text" id="new_service" placeholder="Service  ?" />
</td>
<td>
  <input type="text" id="new_chargable" placeholder="Chargable ?" />
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
  tabelContent.innerHTML += last;
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
  let searchFrom = dateFrom.value;
  let searchTo = dateTo.value;
  console.log(searchNumber, searchName, searchFrom, searchTo);
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
  if (searchFrom != "" && searchTo != "") {
    searchFrom = new Date(searchFrom);
    searchTo = new Date(searchTo);
    data = data.filter((el) => {
      const waiveDate = new Date(el.waiveDate);
      const approveDate = new Date(el.approveDate);
      return (
        (waiveDate >= searchFrom && waiveDate <= searchTo) ||
        (approveDate >= searchFrom && approveDate <= searchTo)
      );
    });
  } else if (searchFrom != "" && searchTo == "") {
    searchFrom = new Date(searchFrom);
    data = data.filter((el) => {
      const waiveDate = new Date(el.waiveDate);
      const approveDate = new Date(el.approveDate);
      return waiveDate >= searchFrom || approveDate >= searchFrom;
    });
  } else if (searchFrom == "" && searchTo != "") {
    searchTo = new Date(searchTo);
    data = data.filter((el) => {
      const waiveDate = new Date(el.waiveDate);
      const approveDate = new Date(el.approveDate);
      return waiveDate <= searchTo || approveDate <= searchTo;
    });
  }

  console.log(data);
  return data;
};
searchButton.addEventListener("click", (el) =>
  setData(filterData(dataContent))
);
// SORT BUTTON
for (var i = 0; i < sortButton.length; i++) {
  (function (index) {
    sortButton[index].addEventListener("click", function () {
      sortData(dataContent, index);
    });
  })(i);
}
setData(dataContent);

function edit_row(index) {
  // const servicerequestedfil
}
function add_row() {
  dataContent.push({
    Servicerequested: document.getElementById("new_service").value,
    Chargable: document.getElementById("new_chargable").value,
    Customer: document.getElementById("new_customer").value,
    AWBNumber: document.getElementById("new_awbnumber").value,
    ULDNumber: document.getElementById("new_uldnumber").value,
    FlightDate: document.getElementById("new_flightdate").value,
    RequestedDate: document.getElementById("new_requesteddate").value,
    Remarks: document.getElementById("new_remarks").value,
    Status: document.getElementById("new_status").value,
    ReasonforRejection: document.getElementById("new_reason").value,
  });
  setData(dataContent);
}
