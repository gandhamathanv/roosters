//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//api

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// [
//   {
//     "id":1,
//     "Servicerequested": "TOWING SERVICE OF ENGINE",
//     "chargeable": "Y",
//     "Customer": "DHL",
//     "CustomerName":"DHL",
//     "AWBNumber": "618-98877800",
//     "ULDNumber": "",
//     "FlightDate": "",
//     "RequestedDate": "",
//     "RequestedBy":"",
//     "Tracter":"",
//     "Startdate":"",
//     "Starttime":"",
//     "Completeddate":"",
//     "Completedtime":"",
//     "Remarks": "",
//     "Status": "Pending",
//     "ReasonforRejection": "",
//     "Documentname":"",
//     "Documents":""
//   },
//   {
//     "id":2,
//     "Servicerequested": "FORKLIFT RENTAL",
//     "chargeable": "Y",
//     "Customer": "DBS",
//     "CustomerName":"DHL",
//     "AWBNumber": "318-22110118",
//     "ULDNumber": "AKE10011SQ",
//     "FlightDate": "SQ666 06SEP2017",
//     "RequestedDate": "05SEP2017 13:10",
//     "RequestedBy":"",
//     "Tracter":"",
//     "Startdate":"",
//     "Starttime":"",
//     "Completeddate":"",
//     "Completedtime":"",
//     "Remarks": "success",
//     "Status": "Completed",
//     "ReasonforRejection": "",
//     "Documentname":"",
//     "Documents":""
//   },
//   {
//     "id":3,
//     "Servicerequested": "SECURITY ESCORT",
//     "chargeable": "Y",
//     "Customer": "TNT",
//     "CustomerName":"DHL",
//     "AWBNumber": "618-77661001",
//     "ULDNumber": "",
//     "FlightDate": "",
//     "RequestedDate": "",
//     "RequestedBy":"",
//     "Tracter":"",
//     "Startdate":"",
//     "Starttime":"",
//     "Completeddate":"",
//     "Completedtime":"",
//     "Remarks": "",
//     "Status": "Rejected",
//     "ReasonforRejection": "Late Lodge-in",
//     "Documentname":"",
//     "Documents":""
//   },
//   {
//     "id":4,
//     "Servicerequested": "APPLY PERMIT",
//     "chargeable": "Y",
//     "Customer": "NES",
//     "CustomerName":"DHL",
//     "AWBNumber": "618-10012211",
//     "ULDNumber": "",
//     "FlightDate": "SQ767 07SEP2017",
//     "RequestedDate": "06SEP2017 10:00",
//     "RequestedBy":"",
//     "Tracter":"",
//     "Startdate":"",
//     "Starttime":"",
//     "Completeddate":"",
//     "Completedtime":"",
//     "Remarks": "",
//     "Status": "Pending",
//     "ReasonforRejection": "",
//     "Documentname":"",
//     "Documents":""
//   },
//   {
//     "id":5,
//     "Servicerequested": "TOPUP DRY ICE",
//     "chargeable": "Y",
//     "Customer": "DHL",
//     "CustomerName":"DHL",
//     "AWBNumber": "618-33221001",
//     "ULDNumber": "",
//     "FlightDate": "",
//     "RequestedDate": "",
//     "RequestedBy":"",
//     "Tracter":"",
//     "Startdate":"",
//     "Starttime":"",
//     "Completeddate":"",
//     "Completedtime":"",
//     "Remarks": "",
//     "Status": "Started",
//     "ReasonforRejection": "",
//     "Documentname":"",
//     "Documents":""
//   },
//   {
//     "id":6,
//     "Servicerequested": "FORKLIFT RENTAL",
//     "chargeable": "Y",
//     "Customer": "DBS",
//     "CustomerName":"DHL",
//     "AWBNumber": "318-22110118",
//     "ULDNumber": "AKE10011SQ",
//     "FlightDate": "SQ666 06SEP2017",
//     "RequestedDate": "05SEP2017 13:10",
//     "RequestedBy":"Dineshbabu",
//     "Tracter":"4",
//     "Startdate":"06SEP2018",
//     "Starttime":"13:10",
//     "Completeddate":"07SEP2017",
//     "Completedtime":"14:10",
//     "Remarks": "success",
//     "Status": "Completed",
//     "ReasonforRejection": "Late Lodge-in",
//     "Documentname":"AAdharcard",
//     "Documents":"dsf"
//   }

// ]

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5

// var dataContent = [
//   {
//     Servicerequested: "TOWING SERVICE OF ENGINE",
//     chargeable: "Y",
//     Customer: "DHL",
//     AWBNumber: "618-98877800",
//     ULDNumber: "",
//     FlightDate: "",
//     RequestedDate: "",
//     Remarks: "",
//     Status: "Pending",
//     ReasonforRejection: "",
//   },
//   {
//     Servicerequested: "FORKLIFT RENTAL",
//     chargeable: "Y",
//     Customer: "DBS",
//     AWBNumber: "318-22110118",
//     ULDNumber: "AKE10011SQ",
//     FlightDate: "SQ666 06SEP2017",
//     RequestedDate: "05SEP2017 13:10",
//     Remarks: "success",
//     Status: "Completed",
//     ReasonforRejection: "",
//   },
//   {
//     Servicerequested: "SECURITY ESCORT",
//     chargeable: "Y",
//     Customer: "TNT",
//     AWBNumber: "618-77661001",
//     ULDNumber: "",
//     FlightDate: "",
//     RequestedDate: "",
//     Remarks: "",
//     Status: "Rejected",
//     ReasonforRejection: "Late Lodge-in",
//   },
//   {
//     Servicerequested: "APPLY PERMIT",
//     chargeable: "Y",
//     Customer: "NES",
//     AWBNumber: "618-10012211",
//     ULDNumber: "",
//     FlightDate: "SQ767 07SEP2017",
//     RequestedDate: "06SEP2017 10:00",
//     Remarks: "",
//     Status: "Pending",
//     ReasonforRejection: "",
//   },
//   {
//     Servicerequested: "TOPUP DRY ICE",
//     chargeable: "Y",
//     Customer: "DHL",
//     AWBNumber: "618-33221001",
//     ULDNumber: "",
//     FlightDate: "",
//     RequestedDate: "",
//     Remarks: "",
//     Status: "Started",
//     ReasonforRejection: "",
//   },
// ];
var dataContent;
const userVariables = {
  sortTabel: null,
};

async function getUsers() {
  let url = "http://127.0.0.1:3005/api/v1/ListOfServices/";
  let res = await fetch(url);
  dataContent = await res.json();
  dataContent = dataContent.data.data;
  console.log(dataContent);

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
  const requestedDatefrom = document.getElementById("dateFrom");
  const requestedTimefrom = document.getElementById("timeFrom");
  const requestedDateto = document.getElementById("dateTo");
  const requestedTimeto = document.getElementById("timeTo");
  const status = document.getElementById("status");
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
<div class="tooltip"><a href="edit.html?id=${
    el.id
  }" ><i id="edit-button-${index}" onclick="./edit.html" class="fa-solid fa-pen edit-button" id="AWBsort"></i></a>
                  <span class="tooltiptext">Edit</span>
                </div>
                <div class="tooltip"><i id="save-button-${
                  el.id
                }" class="fa-regular fa-floppy-disk save-button" style="display:none"></i>
                <span class="tooltiptext tooltip-left">Save</span>
              </div>
              <div class="tooltip"><i id="${
                el.id
              }"  class="fa-solid fa-trash delete-button"></i>
              <span class="tooltiptext ">Delete</span>
            </div>
</div>
</td>
</tr>`;

  const setData = (data) => {
    tabelContent.innerHTML = "";
    data.forEach((el, index) => {
      tabelContent.innerHTML += content(el, index);
    });
    const deleteButton = document.querySelectorAll(".delete-button");
    console.log(deleteButton);
    for (var i = 0; i < deleteButton.length; i++) {
      (function (index) {
        deleteButton[index].addEventListener("click", async function (target) {
          console.log(target.target.id);
          // setData();
          delete_row(target.target.id);
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
  const filterData = async (data) => {
    const searchNumber = AWBNumber.value;
    const searchName = customerName.value;
    const searchService = ServiceName.value;
    const searchULD = ULDNumber.value;
    const searchflight = Flight.value;
    const searchDate = changeFormate(flightDate.value);
    const requestedfrom =
      requestedDatefrom.value + " " + requestedTimefrom.value;
    const requestedto = requestedDateto.value + " " + requestedTimeto.value;
    const searchstatus = status.value;

    console.log("requested", requestedfrom, requestedto);
    let url = "http://127.0.0.1:3005/api/v1/ListOfServices/?";
    if (requestedto != " " || requestedfrom != " ") {
      url += `RequestedFrom=${requestedfrom}&RequestedTo=${requestedto}`;
    }
    console.log("dfsd", status);
    if (searchstatus != "Status") {
      url += `&Status=${searchstatus}`;
    }

    if (searchService != "") {
      url += `&ServiceRequested=${searchService}`;
    }

    if (searchName != "") {
      url += `&Customer=${searchName}`;
    }

    if (searchNumber != "") {
      url += `&AWBNumber=${searchNumber}`;
    }
    if (searchULD != "") {
      url += `&ULDNumber=${searchULD}`;
    }

    if (searchflight != "") {
      url += `&Flight=${searchflight}`;
    }

    if (!isNaN(searchDate)) {
      url += `&FlightDate=${searchDate}`;
    }

    let res = await fetch(url);
    dataContent = await res.json();
    dataContent = dataContent.data.data;
    return dataContent;
  };
  searchButton.addEventListener("click", async (el) =>
    setData(await filterData(dataContent))
  );
  for (var i = 0; i < sortButton.length; i++) {
    (function (index) {
      sortButton[index].addEventListener("click", function () {
        sortData(dataContent, index);
      });
    })(i);
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
}

function setError(errorMessage) {
  let errorContainer = document.querySelector(".error-container");
  errorContainer.style.display = "flex";
  let errorText = document.querySelector(".error-text");
  errorText.innerText = errorMessage;

  setTimeout(function () {
    errorContainer.style.display = "none";
  }, 10000);
}

async function delete_row(index) {
  let u = `http://127.0.0.1:3005/api/v1/ListOfServices/${index}`;
  let response = await fetch(u, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  response = await response.json();
  setError(response.status);
  dataContent.splice(index, 1);
  console.log({ dataContent });
  getUsers();
}
getUsers();
