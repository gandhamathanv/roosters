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

// TEMPLATES

const template = (el) => `
<tr>
<td><input value="${el.messageType}"  type="text" class="table-input" /></td>
<td><input type="text" value="${el.messageHeader}" class="table-input" size="24"></td>
<td><input value="${el.copyNumber}" class="table-input" /></td>
<td><input value="${el.recivedDate}" class="table-input"/></td>
<td><input value="${el.messageFromAddress}" class="table-input"/></td>
<td><input value="${el.read}" class="table-input" /></td>
<td><input value="${el.rejectCode}" class="table-input" /></td>
<td><a href="#">
  <i class='far fa-file-alt' style='font-size:24px'></i></a></td>
</tr>
`;
// DATA CONTAINER

const data = [{
        messageType: "SSM",
        messageHeader: "20SEP000111E001",
        copyNumber: 1,
        recivedDate: "20-09-2019 18:14",
        messageFromAddress: "HDQFWX",
        read: "",
        rejectCode: "",
        message: "lorem",
    },
    {
        messageType: "SSM",
        messageHeader: "20SEP000111E001",
        copyNumber: 1,
        recivedDate: "20-09-2019 18:14",
        messageFromAddress: "HDQFWX",
        read: "",
        rejectCode: "",
        message: "lorem",
    },
    {
        messageType: "SSM",
        messageHeader: "20SEP000111E001",
        copyNumber: 1,
        recivedDate: "20-09-2019 18:14",
        messageFromAddress: "HDQFWX",
        read: "",
        rejectCode: "",
        message: "lorem",
    },
    {
        messageType: "SSM",
        messageHeader: "20SEP000111E001",
        copyNumber: 1,
        recivedDate: "20-09-2019 18:14",
        messageFromAddress: "HDQFWX",
        read: "",
        rejectCode: "",
        message: "lorem",
    },
    {
        messageType: "SSM",
        messageHeader: "20SEP000111E001",
        copyNumber: 1,
        recivedDate: "20-09-2019 18:14",
        messageFromAddress: "HDQFWX",
        read: "",
        rejectCode: "",
        message: "lorem",
    },
];
// UPDATE UI
const UpdateUI = (data) => {
    data.forEach((el) => {
        tableContent.innerHTML += template(el);
    });
};

// FILTER FUNCTION
const filterData = (data, search) => {
    console.log(search.messageType, search.messageStatus);
    if (search.messageType != "All") {
        console.log("FILTER MESSAGE TYPE", search.messageType);
        data = data.filter((el) => {
            return el.messageType == search.messageType;
        });
    }
    if (searchName != "") {
        data = data.filter((el) => {
            console.log(searchName, el.customerName);
            return el.waiveBy.toLowerCase().startsWith(searchName.toLowerCase());
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