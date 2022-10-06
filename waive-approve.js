// DATA CONTENT FOR TABLE
const dataContent = [{
        AWBNumber: "616-01001005",
        actualAmount: "100000.00",
        waiveAmount: "100.00",
        waiveBy: "GOKUL",
        waiveDate: "06OCT2022 15:28",
        approver: "Gandhamathan",
        statusDate: "",
        status: "PENDING",
        approverRemark: "",
    },
    {
        AWBNumber: "616-01001002",
        actualAmount: "2000.00",
        waiveAmount: "200.00",
        waiveBy: "DINESHBABU",
        waiveDate: "06OCT2022 18:20",
        approver: "Gandhamathan",
        statusDate: "06OCT2022 20:35",
        status: "APPROVED",
        approverRemark: "",
    },
    {
        AWBNumber: "616-01001003",
        actualAmount: "3000000.00",
        waiveAmount: "300.00",
        waiveBy: "AAtarshinis",
        waiveDate: "05OCT2022 11:30",
        approver: "Dhanush",
        statusDate: "05OCT2022 18:10",
        status: "REJECTED",
        approverRemark: "TOO MUCH",
    },
];

// USER VARIABLES
const userVariables = {
    sortTabel: null,
};

// QUERRY SELECTOR
const tabelContent = document.querySelector(".tabel-content");
const AWBNumber = document.getElementById("serviceID");
const customerName = document.getElementById("customerName");
const dateFrom = document.getElementById("dateFrom");
const dateTo = document.getElementById("dateTo");
const searchButton = document.querySelector(".search-button");
const sortButton = document.querySelectorAll(".sort-tabel");

// TABEL CONTENT TEMPLATE
const content = (el) => ` <tr>
<td>${el.AWBNumber}</td>
<td>${el.actualAmount}</td>
<td>${el.waiveAmount}</td>
<td>${el.waiveBy}</td>
<td>${el.waiveDate}</td>
<td>${el.approver}</td>
<td>${el.statusDate}</td>
<td>${el.status}</td>
<td>${el.approverRemark}</td>
</tr>`;

// SET DATA FOR UI FUNCTION
const setData = (data) => {
    tabelContent.innerHTML = "";
    data.forEach((el) => {
        tabelContent.innerHTML += content(el);
    });
};
// SUB FUNCTIONS

const sortString = (a, b, value) => {
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
    switch (index) {
        case 0:
            data.sort((a, b) => sortString(a, b, "AWBNumber"));
            break;
        case 1:
            data.sort((a, b) => sortNumber(a, b, "actualAmount"));
            break;
        case 2:
            data.sort((a, b) => sortNumber(a, b, "waiveAmount"));
            break;
        case 3:
            data.sort((a, b) => sortString(a, b, "waiveBy"));
            break;
        case 4:
            data.sort((a, b) => sortDate(a, b, "waiveDate"));
            break;
        case 5:
            data.sort((a, b) => sortString(a, b, "approver"));
            break;
        case 6:
            data.sort((a, b) => sortDate(a, b, "statusDate"));
            break;
        case 7:
            data.sort((a, b) => sortString(a, b, "status"));

            break;
    }
    setData(data);
    // console.log(dsata);
};

// FILTER FUNCTION
const filterData = (data) => {
    console.log(data);
    console.log(AWBNumber.value);
    let pattern = /(.*AWBNumber.value.*)/g;
    const result = data.filter((el) => {
        console.log(el.AWBNumber.match(pattern));
        return el.AWBNumber.match(pattern);
    });
    console.log(result);
};

// ADD EVENT LISTENER
// SEARCH BUTTON
searchButton.addEventListener("click", (el) => filterData(dataContent));
// SORT BUTTON
for (var i = 0; i < sortButton.length; i++) {
    (function(index) {
        sortButton[index].addEventListener("click", function() {
            sortData(dataContent, index);
        });
    })(i);
}

// CALLING UI FUNCTION

setData(dataContent);
console.log(sortButton);

console.log(new Date(dataContent[0].waiveDate));

// TODO: SYSTER PARAMS time esclaiton
// TODO: SYSTER PARAMS tiptool
// TODO: SYSTER PARAMS help