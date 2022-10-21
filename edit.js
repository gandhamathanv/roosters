let url_str = document.URL;
let url = new URL(url_str);
let search_params = url.searchParams;
var id = search_params.get("id");
console.log(id);

let dataContent = [];
document.getElementById("saveedit").addEventListener("click", function () {
  save_row(id);
});
if (id != null) {
  getOneService(id);
} else {
}
async function getOneService(id) {
  let url = `http://127.0.0.1:3005/api/v1/ListOfServices/${id}`;
  let res = await fetch(url);
  let response = await res.json();
  dataContent = response.data;
  console.log(dataContent);

  if (response.status == "Success") {
    const serviceValue = dataContent["Servicerequested"];
    const chargeableValue = dataContent["chargeable"];
    const customerValue = dataContent["Customer"];
    const customerNameValue = dataContent["CustomerName"];
    const awbnumberValue = dataContent["AWBNumber"];
    const uldnumberValue = dataContent["ULDNumber"];
    const flightDateValue = dataContent["FlightDate"];
    const requesteddateValue = dataContent["RequestedDate"].split(" ");
    const requestedbyValue = dataContent["RequestedBy"];
    const tractorValue = dataContent["Tracter"];
    const startdateValue = dataContent["Startdate"];
    const completeddateValue = dataContent["Completeddate"];
    const starttimeValue = dataContent["Starttime"];
    const completedtimeValue = dataContent["Completedtime"];
    const remarksValue = dataContent["Remarks"];
    const statusValue = dataContent["Status"];
    const reasonValue = dataContent["ReasonforRejection"];
    const documentnameValue = dataContent["Documentname"];
    const documentValue = dataContent["Documents"];
    const flightda = flightDateValue.split(" ");
    console.log(
      serviceValue,
      chargeableValue,
      customerValue,
      awbnumberValue,
      uldnumberValue,
      flightDateValue,
      requesteddateValue,
      completeddateValue,
      completedtimeValue,
      starttimeValue,
      remarksValue,
      statusValue,
      reasonValue
    );
    console.log(dataContent["Servicerequested"]);
    document.getElementById("service").value = serviceValue;
    document.getElementById("customername").value = customerNameValue;
    document.getElementById("customer").value = customerValue;
    document.getElementById("awbnumber").value = awbnumberValue;
    document.getElementById("uldnumber").value = uldnumberValue;
    document.getElementById("flight").value = flightda[0];
    document.getElementById("flightdate").value = flightda[1];
    document.getElementById("requesteddate").value = requesteddateValue[0];
    document.getElementById("requestedtime").value = requesteddateValue[1];
    document.getElementById("requestedby").value = requestedbyValue;
    document.getElementById("tractor").value = tractorValue;
    document.getElementById("startdate").value = startdateValue;
    document.getElementById("starttime").value = starttimeValue;
    document.getElementById("enddate").value = completeddateValue;
    document.getElementById("endtime").value = completedtimeValue;
    document.getElementById("status").value = statusValue;
    document.getElementById("remarks").value = remarksValue;
    document.getElementById("reason").value = reasonValue;
    document.getElementById("documentname").value = documentnameValue;
    // document.getElementById("document").value = documentValue;
  }
}

getOneService(id);

function save_row(id) {
  
  if (id == null) {
    const serviceValue = document.getElementById("service").value;
    const chargeableValue = "Y";
    const customerValue = document.getElementById("customer").value;
    const customerNameValue = document.getElementById("customer").value;
    var awbnumberValue = document.getElementById("awbnumber").value;
    const uldnumberValue = document.getElementById("uldnumber").value;
    const tractorValue = document.getElementById("tractor").value;
    const flightDateValue =
      document.getElementById("flight").value +
      " " +
      changeFormate(document.getElementById("flightdate").value);
    const requesteddateValue =
      changeFormate(document.getElementById("requesteddate").value) +
      " " +
      document.getElementById("requestedtime").value;
    const requestedbyValue = document.getElementById("requestedby").value;

    const startdateValue = changeFormate(
      document.getElementById("startdate").value
    );
    const completeddateValue = changeFormate(
      document.getElementById("enddate").value
    );
    const starttimeValue = document.getElementById("starttime").value;
    const completedtimeValue = document.getElementById("endtime").value;
    const remarksValue = document.getElementById("remarks").value;
    const statusValue = document.getElementById("status").value;
    const reasonValue = document.getElementById("reason").value;
    const documentnameValue = document.getElementById("documentname").value;
    const documentValue = document.getElementById("document").value;
    var numbers = /^[0-9]{3}[\-]?[0-9]{8}/;
    var uldnumbertest = /^[A-Z]{3}[0-9]{4,5}[0-9A-Z]{3}/;
    if (serviceValue == "") {
      return setError("Please provide Service Name ");
    }
    // else if(customerName="")
    // {
    //   return(setError("Please provide Customer Name "));
    // }
    if (customerValue == "") {
      return setError("Please provide Customer Code");
    }
    if (awbnumberValue == "") {
      return setError("Please provide AWB Number");
    } else {
      if (!numbers.test(awbnumberValue)) {
        return setError("Please provide AWB Number in given format");
      }
      awbnumberValue = awbnumberValue.replace(/(\d{3})(\d{8})/, "$1-$2");
    }

    if (!uldnumberValue == "") {
      if (!uldnumbertest.test(uldnumberValue)) {
        return setError("Please provide Uld Number in correct format");
      }
    }
async function leng(){
    let url = "http://127.0.0.1:3005/api/v1/ListOfServices/";
  let res = await fetch(url);
  dataContent = await res.json();
  dataContent = dataContent.data.data;
  console.log(dataContent);

  
     fetch("http://127.0.0.1:3005/api/v1/ListOfServices/", {

      // Adding method type
      method: "POST",
      body: JSON.stringify({
        id: dataContent.length+1,
        Servicerequested: serviceValue,
        chargeable: chargeableValue,
        Customer: customerValue,
        CustomerName: customerNameValue,
        AWBNumber: awbnumberValue,
        ULDNumber: uldnumberValue,
        FlightDate: flightDateValue,
        RequestedDate: requesteddateValue,
        RequestedBy: requestedbyValue,
        Startdate: startdateValue,
        Starttime: starttimeValue,
        Completeddate: completeddateValue,
        Completedtime: completedtimeValue,
        Tracter: tractorValue,
        Remarks: remarksValue,
        Status: statusValue,
        ReasonforRejection: reasonValue,
        Documentname: documentnameValue,
        Documents: documentValue,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => {
        // window.open("./index.html");
        response.json();
      })

      // Displaying results to console
      .then((json) => console.log(json));
      console.log(dataContent.length);
  }
  leng();
}
  
   else {
    const serviceValue = document.getElementById("service").value;
    const chargeableValue = "Y";
    const customerValue = document.getElementById("customer").value;
    const customerNameValue = document.getElementById("customername").value;
    var awbnumberValue = document.getElementById("awbnumber").value;
    const uldnumberValue = document.getElementById("uldnumber").value;
    const tractorValue = document.getElementById("tractor").value;
    const flightDateValue =
      document.getElementById("flight").value +
      " " +
      changeFormate(document.getElementById("flightdate").value);
    const requesteddateValue =
      changeFormate(document.getElementById("requesteddate").value) +
      " " +
      document.getElementById("requestedtime").value;
    const requestedbyValue = document.getElementById("requestedby").value;

    const startdateValue = changeFormate(
      document.getElementById("startdate").value
    );
    const completeddateValue = changeFormate(
      document.getElementById("enddate").value
    );
    const starttimeValue = document.getElementById("starttime").value;
    const completedtimeValue = document.getElementById("endtime").value;
    const remarksValue = document.getElementById("remarks").value;
    const statusValue = document.getElementById("status").value;
    const reasonValue = document.getElementById("reason").value;
    const documentnameValue = document.getElementById("documentname").value;
    const documentValue = document.getElementById("document").value;
    var numbers = /^[0-9]{3}[\-]?[0-9]{8}/;
    var uldnumbertest = /^[A-Z]{3}[0-9]{4,5}[0-9A-Z]{3}/;
    if (serviceValue == "") {
      return setError("Please provide Service Name ");
    }
    // else if(customerName="")
    // {
    //   return(setError("Please provide Customer Name "));
    // }
    if (customerValue == "") {
      return setError("Please provide Customer Code");
    }
    if (awbnumberValue == "") {
      return setError("Please provide AWB Number");
    } else {
      if (!numbers.test(awbnumberValue)) {
        return setError("Please provide AWB Number in given format");
      }
      awbnumberValue = awbnumberValue.replace(/(\d{3})(\d{8})/, "$1-$2");
    }

    if (!uldnumberValue == "") {
      if (!uldnumbertest.test(uldnumberValue)) {
        return setError("Please provide Uld Number in correct format");
      }
    }

    fetch(`http://127.0.0.1:3005/api/v1/ListOfServices/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        Servicerequested: serviceValue,
        chargeable: chargeableValue,
        Customer: customerValue,
        CustomerName: customerNameValue,
        AWBNumber: awbnumberValue,
        ULDNumber: uldnumberValue,
        FlightDate: flightDateValue,
        RequestedDate: requesteddateValue,
        RequestedBy: requestedbyValue,
        Startdate: startdateValue,
        Starttime: starttimeValue,
        Completeddate: completeddateValue,
        Completedtime: completedtimeValue,
        Tracter: tractorValue,
        Remarks: remarksValue,
        Status: statusValue,
        ReasonforRejection: reasonValue,
        Documentname: documentnameValue,
        Documents: documentValue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  // window.open("./index.html", "_self");
  // setData(dataContent);

  // document.getElementById("edit").style.display = "none";
}


document.getElementById("clearall").addEventListener("click",function(){
  clearALL();
});

function clearALL() {
  document.getElementById("service").value = "";
  // document.getElementById("chargeable").value = chargeableValue;
  document.getElementById("customer").value = "";
  document.getElementById("customername").value = "";
  document.getElementById("awbnumber").value = "";
  document.getElementById("uldnumber").value = "";
  document.getElementById("tractor").value="";
  document.getElementById("flight").value = "";
  document.getElementById("flightdate").value = "";
  document.getElementById("requesteddate").value = "";
  document.getElementById("startdate").value="";
  document.getElementById("enddate").value="";
  document.getElementById("starttime")="";
  document.getElementById("endtime")="";
  document.getElementById("status")="Pending";
  document.getElementById("remarks").value = "";
  document.getElementById("reason").value = "";
  document.getElementById("documentname").value="";
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
  return incomingDateChnge;
}

function setError(errorMessage) {
  let errorContainer = document.querySelector(".error-container");

  errorContainer.style.display = "flex";
  let errorText = document.querySelector(".error-text");
  errorText.innerText = errorMessage;

  setTimeout(function () {
    errorContainer.style.display = "none";
  
  }, 10000); //
}
