const dataContent = {};
document.getElementById("saveedit").addEventListener("click", function () {
  save_row();
});

function save_row() {
  // document.getElementById("cancel").removeEventListener("click", function () {
  //   document.getElementById("edit").style.display = "none";
  // });
  // console.log("saveindex", index);
  // document.getElementById("edit-button-" + index).style.display = "inline";
  // document.getElementById("save-button-" + index).style.display = "none";

  // const service = document.getElementById("service" + index);
  // const chargeable = document.getElementById("chargeable" + index);
  // const customer = document.getElementById("customer" + index);
  // const awbnumber = document.getElementById("awbnumber" + index);
  // const uldnumber = document.getElementById("uldnumber" + index);
  // const flightdate = document.getElementById("flightdate" + index);
  // const requesteddate = document.getElementById("requesteddate" + index);
  // const remarks = document.getElementById("remarks" + index);
  // const status = document.getElementById("status" + index);
  // const reason = document.getElementById("reason" + index);
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

  dataContent[0] = {
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
  // setData(dataContent);
  console.log("data", dataContent);
  // document.getElementById("edit").style.display = "none";
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
