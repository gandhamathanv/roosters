const datas = [
  { role: "Cashier", waiverLimit: 100.4, approvalLimit: 20.0 },
  { role: "Cashier Supervisor", waiverLimit: 100.3, approvalLimit: 34.56 },
];

function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "inline";

  var name = document.getElementById("name_row" + no);
  var country = document.getElementById("country_row" + no);
  var age = document.getElementById("age_row" + no);

  var name_data = name.innerHTML;
  var country_data = country.innerHTML;
  var age_data = age.innerHTML;

  console.log(name_data);

  name.innerHTML = `<select type='text' id='name_text${no}' ><option value='Cashier' ${
    name_data === "Cashier" ? "selected" : ""
  }>Cashier</option><option value='Cashier-Supervisor' ${
    name_data === "Cashier-Supervisor" ? "selected" : ""
  }>Cashier Supervisor</option><option value='Finance Manager' ${
    name_data === "Finance Manager" ? "seleceted" : ""
  }>Finance Manager</option></select>`;
  country.innerHTML =
    "<input type='text' id='country_text" +
    no +
    "' value='" +
    country_data +
    "'>";
  age.innerHTML =
    "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
  var name_val = document.getElementById("name_text" + no).value;
  var country_val = document.getElementById("country_text" + no).value;
  var age_val = document.getElementById("age_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("country_row" + no).innerHTML = country_val;
  document.getElementById("age_row" + no).innerHTML = age_val;

  document.getElementById("edit_button" + no).style.display = "inline";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function isFloat(n) {
  return !isNaN(n) && !isNaN(parseFloat(n));
}

function add_row() {
  var role = document.getElementById("new_name").value;
  var waiverLimit = document.getElementById("new_country").value;
  var approvalLimit = document.getElementById("new_age").value;

  if (role && waiverLimit && approvalLimit) {
    console.log(isFloat(waiverLimit) && isFloat(approvalLimit));
    if (!(isFloat(waiverLimit) && isFloat(approvalLimit))) {
      return setError("Please Provide the Correct Value");
    }

    const waiverLimitValue = parseFloat(waiverLimit);
    const approvalLimitValue = parseFloat(approvalLimit);

    if (waiverLimitValue < approvalLimitValue) {
      setError("Waiver Limit must be Greater or Equal to Approved Limit");
    }

    var table = document.getElementById("data_table");
    var table_len = table.rows.length - 1;
    var row = (table.insertRow(table_len).outerHTML =
      "<tr id='row" +
      table_len +
      "'><td id='name_row" +
      table_len +
      "'>" +
      role +
      "</td><td id='country_row" +
      table_len +
      "'>" +
      waiverLimit +
      "</td><td id='age_row" +
      table_len +
      "'>" +
      approvalLimit +
      "</td><td><button type='button' id='edit_button" +
      table_len +
      "' value='Edit' class='edit' onclick='edit_row(" +
      table_len +
      ")'> <i class='fa-solid fa-pen'></i></button> <button type='button' id='save_button" +
      table_len +
      "' value='Save' class='save' style='display:none' onclick='save_row(" +
      table_len +
      ")'>  <i class='fa-regular fa-floppy-disk'></i></button> <button type='button' value='Delete' class='delete' onclick='delete_row(" +
      table_len +
      ")'>  <i class='fa-solid fa-trash'></i></button></td></tr>");

    document.getElementById("new_name").value = "";
    document.getElementById("new_country").value = "";
    document.getElementById("new_age").value = "";
  } else {
    setError("Please fill all the fields below");
  }
}

function setError(errorMessage) {
  let errorContainer = document.querySelector(".error-container");

  errorContainer.style.display = "flex";
  let errorText = document.querySelector(".error-text");
  errorText.innerText = errorMessage;

  setTimeout(function () {
    errorContainer.style.display = "none";
  }, 5000); //
}

function take_print() {
  var specialElementHandlers = {
    ".no-export": function (element, renderer) {
      return true;
    },
  };

  function exportPDF() {
    var doc = new jsPDF("p", "pt", "a4");

    var source = document.querySelector(".table").innerHTML;

    var margins = {
      top: 10,
      bottom: 10,
      left: 10,
      width: 595,
    };

    doc.fromHTML(
      source,
      margins.left,
      margins.top,
      {
        width: margins.width,
        elementHandlers: specialElementHandlers,
      },

      function (dispose) {
        doc.save("Test.pdf");
      },
      margins
    );
  }
  exportPDF();
}
