const dataContent = [{
        AWBNumber: "616-01001001",
        actualAmount: "1000.00",
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
        actualAmount: "3000.00",
        waiveAmount: "300.00",
        waiveBy: "AAtarshinis",
        waiveDate: "05OCT2022 11:30",
        approver: "Dhanush",
        statusDate: "05OCT2022 18:10",
        status: "REJECTED",
        approverRemark: "TOO MUCH",
    },
];

const tabelContent = document.querySelector(".tabel-content");
const AWBNumber = document.getElementById("serviceID");
const customerName = document.getElementById("customerName");
const dateFrom = document.getElementById("dateFrom");
const dateTo = document.getElementById("dateTo");

const searchButton = document.querySelector(".search-button");
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

const header = ` <tr>
<th>AWB Number/Service ID  <i class="fa-solid fa-sort" id="AWBsort"></i></th>
<th>Actual Amount <i class="fa-solid fa-sort"></i></th>
<th>Waiver Amount <i class="fa-solid fa-sort"></i></th>
<th>Waiver By <i class="fa-solid fa-sort"></i></th>
<th>Waived Date <i class="fa-solid fa-sort"></i></th>
<th>Approver <i class="fa-solid fa-sort"></i></th>
<th>Approval/Reject Date <i class="fa-solid fa-sort"></i></th>
<th>Status <i class="fa-solid fa-sort" id="statussort"></i></th>
<th>Approver Remark <i class="fa-solid fa-sort"></i></th>
</tr>`;

// SET DATA
const setData = (data) => {
    tabelContent.innerHTML = header;
    data.forEach((el) => {
        tabelContent.innerHTML += content(el);
    });
};
setData(dataContent);

// SORT DATA
const sortData = (data, placeholder) => {
    return data.sort((a, b) => {
        return a[placeholder] - b[placeholder];
    });
};
// SORTING FUNCTION
console.log(sortData(dataContent));

// FILTER FUNCTION
const filterData = (data) => {
    console.log(AWBNumber.value);
    let flag = true;

    return [data[2], data[3], data[1]];
    return data.filter((el) => {
        return AWBNumber.value.includes(el.AWBNumber);
    });
};
console.log(AWBNumber);
searchButton.addEventListener("click", () => {
    setData(filterData(dataContent));
});
// const faSort = document.querySelectorAll(".fa-sort");
// faSort.addEventListener("click", (e) => {
//     console.log(e);
//     setData(sortData);
// });

// sort

const AWBSort = document.getElementById("AWBsort");
AWBSort.addEventListener("click", () => {
    setData(sortData(dataContent, "AWBNumber"));
});
const statusSort = document.getElementById("statussort");
statusSort.addEventListener("click", () => {
    console.log("sort", sortData(dataContent, "status"));
    setData(sortData(dataContent, "status"));
});

// TODO: SYSTER PARAMS time esclaiton