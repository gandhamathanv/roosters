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
    {
        AWBNumber: "616-01001007",
        actualAmount: "4000000.00",
        waiveAmount: "400.00",
        waiveBy: "Aatharsh",
        waiveDate: "10OCT2022 11:30",
        approver: "Dhanush",
        statusDate: "10OCT2022 11:32",
        status: "UNDECIDED",
        approverRemark: "LEFT UNDECIDED",
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
<td style="background-color:${
  el.status == "PENDING"
    ? "yellow"
    : el.status == "APPROVED"
    ? "green"
    : el.status == "REJECTED"
    ? "red"
    : el.status == "UNDECIDED"
    ? "grey"
    : "white"
}">${el.status}</td>
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

// ADD EVENT LISTENER
// SEARCH BUTTON
searchButton.addEventListener("click", (el) => {
    setData(filterData(dataContent));
});
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

// PRINT tabE

function printData() {
    var divToPrint = document.getElementById("main-table");
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}

// DROPDOWN
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
                                                                                create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
                                                                                                                        and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
                                                                                and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
                                        except the current select box: */
    var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

const setStatusInput = document.getElementById("setStatusInput");
const setStatusDropdown = document.getElementById("setStatusDropdown");
const setStatusSave = document.getElementById("setStatusSave");
setStatusSave.addEventListener("click", (el) => {
    console.log(setStatusInput.value, setStatusDropdown.value);
});

const samplDAta = {
    AWBNumber: "616-01001007",
    actualAmount: "4000000.00",
    waiveAmount: "400.00",
    waiveBy: "Aatharsh",
    waiveDate: "10OCT2022 11:30",
    approver: "Dhanush",
    statusDate: "10OCT2022 11:32",
    status: "UNDECIDED",
    approverRemark: "LEFT UNDECIDED",
};