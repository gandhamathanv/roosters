// QUERRY SELECTORS
const tableContent = document.querySelector(".tabel-content");
// INPUT FIELDS
const messageType = document.querySelector(".message-type");
const messageName = document.querySelector(".message-name");
const messageStatus = document.querySelector(".message-status");
const messageHeader = document.querySelector(".message-header");
const messageText = document.querySelector(".message-text");
const messageFlight = document.querySelector(".message-flight");
const FlightScheduleData = document.querySelector(".fDate");
const FlightRecieveData = document.querySelector(".rfDate");
const FlightRecieveToData = document.querySelector(".rtDate");
console.log(FlightRecieveData);
// TEMPLATES

const template = (el) => `
<tr>
<td><input value="${el.messageType}"  type="text" class="table-input" /></td>
<td><input type="text" value="${el.messageHeader}" class="table-input" size="24"></td>
<td><input value="${el.copyNumber}" class="table-input" /></td>
<td><input value="${el.recivedDate}" class="table-input"/></td>
<td><input value="${el.messageFromAddress}" class="table-input"/></td>
<td><input value="${el.rejectCode}" class="table-input" /></td>
<td><a href="view.html">
  <i class='far fa-file-alt' style='font-size:24px'></i></a></td>
</tr>
`;
// DATA CONTAINER

const data = [
  {
    messageType: "SSM",
    messageHeader: "20SEP000111E001",
    copyNumber: 1,
    recivedDate: "20-09-2019 18:14",
    messageFromAddress: "HDQFWX",
     rejectCode: "",
    message: "lorem",
  },
  {
    messageType: "SSM",
    messageHeader: "20SEP000111E002",
    copyNumber: 1,
    recivedDate: "21-09-2019 18:14",
    messageFromAddress: "HDQFWX",
    rejectCode: "",
    message: "lorem",
  },
  {
    messageType: "SSM",
    messageHeader: "20SEP000111E003",
    copyNumber: 1,
    recivedDate: "23-09-2019 18:14",
    messageFromAddress: "HDQFWX",
    rejectCode: "",
    message: "lorem",
  },
  {
    messageType: "SSM",
    messageHeader: "20SEP000111E004",
    copyNumber: 1,
    recivedDate: "28-09-2019 18:14",
    messageFromAddress: "HDQFWX",
    rejectCode: "",
    message: "lorem",
  },
  {
    messageType: "SSM",
    messageHeader: "20SEP000111E005",
    copyNumber: 1,
    recivedDate: "29-09-2019 18:14",
    messageFromAddress: "HDQFWX",
     rejectCode: "",
    message: "lorem",
  },
];
// UPDATE UI
const UpdateUI = (data) => {
  tableContent.innerHTML = "";
  data.forEach((el) => {
    tableContent.innerHTML += template(el);
  });
};

// FILTER FUNCTION
const filterData = (data, search) => {
  console.log("jjj", search, search.messageStatus, search.messageName);
  if (search.messageType != "All") {
    console.log("FILTER MESSAGE TYPE", search.messageType);
    data = data.filter((el) => {
      return el.messageType == search.messageType;
    });
  }
  if (search["messageHeader"] != "") {
    data = data.filter((el) => {
      console.log(search.messageName, el.messageType);
      return el.messageHeader
        .toLowerCase()
        .startsWith(search["messageHeader"].toLowerCase());
    });
  }
  if (
    search["FlightRecieveData"] != "" &&
    search["FlightRecieveToData"] != ""
  ) {
    search["FlightRecieveData"] = new Date(search["FlightRecieveData"]);
    console.log("sdvdsd", search["FlightRecieveData"]);
    search["FlightRecieveToData"] = new Date(search["FlightRecieveToData"]);
    data = data.filter((el) => {
      console.log(
        "sdvdsd",
        search["FlightRecieveData"],
        changeFormate(el.recivedDate),
        new Date(changeFormate(el.recivedDate))
      );
      const waiveDate = new Date(changeFormate(el.recivedDate));
      return (
        waiveDate >= search["FlightRecieveData"] &&
        waiveDate <= search["FlightRecieveToData"]
      );
    });
  } else if (
    search["FlightRecieveData"] != "" &&
    search["FlightRecieveToData"] == ""
  ) {
    search["FlightRecieveData"] = new Date(search["FlightRecieveData"]);
    data = data.filter((el) => {
      const waiveDate = new Date(changeFormate(el.recivedDate));
      return waiveDate >= search["FlightRecieveData"];
    });
  } else if (
    search["FlightRecieveData"] == "" &&
    search["FlightRecieveToData"] != ""
  ) {
    search["FlightRecieveToData"] = new Date(search["FlightRecieveToData"]);
    data = data.filter((el) => {
      const waiveDate = new Date(changeFormate(el.recivedDate));
      return waiveDate <= search["FlightRecieveToData"];
    });
  }

  console.log(data);
  UpdateUI(data);
  return data;
};

// SEARCH MODULE

const searchData = () => {
  console.log("search");
  const search = {
    messageType: messageType.value,
    messageName: messageName.value,
    messageStatus: messageStatus.value,
    messageHeader: messageHeader.value,
    messageText: messageText.value,
    messageFlight: messageFlight.value,
    FlightScheduleData: FlightScheduleData.value,
    FlightRecieveData: FlightRecieveData.value,
    FlightRecieveToData: FlightRecieveToData.value,
  };
  const result = filterData(data, search);
  console.log(result);
};
UpdateUI(data);

function changeFormate(date) {
  var datearray = date.split("-");
  var newdate = datearray[1] + "-" + datearray[0] + "-" + datearray[2];
  console.log(newdate);
  return newdate;
}
