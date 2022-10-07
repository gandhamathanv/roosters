const data = {
    AWBNumber: "618-4274283",
    CustomerName: "Aatarsh",
    SHC: "VAL EAP EAW",
    HandlingArea: "AFT1",
    ExportImport: "Import",
    ChargeAdvice: [{
            title: " WeightVerification: ",
            Quantity: 1000.0,
            Duration: null,
            Amount: 3.0,
            CollectionMechanism: ["BILL", "COLLECT"],
            paid: false,
            recieptNumber: null,
            waivedAmount: null,
        },
        {
            title: " RcarScreeningFee",
            Quantity: 1000.0,
            Duration: null,
            Amount: 90.0,
            CollectionMechanism: ["BILL", "COLLECT"],
            paid: false,
            recieptNumber: null,
            waivedAmount: null,
        },
        {
            title: " FwbCreationServiceFee",
            Quantity: 1.0,
            Duration: null,
            Amount: 18.0,
            CollectionMechanism: "Collect",
            paid: false,
            recieptNumber: null,
            waivedAmount: null,
        },
        {
            title: "DangerousGoodsHandlingFee:",
            Quantity: 10.0,
            Duration: null,
            Amount: 100.0,
            CollectionMechanism: "Collect",
            paid: true,
            recieptNumber: "100-09102917",
            waivedAmount: null,
        },
        {
            title: "ForkLiftCharges:",
            Quantity: null,
            Duration: 3,
            Amount: 360.0,
            CollectionMechanism: "Collect",
            paid: true,
            recieptNumber: "100-09102917",
            waivedAmount: null,
        },
    ],
};
const tableHeaderTitle = `
<tr>
<th><div class="tooltip">Service Type 
  <span class="tooltiptext">Service Type</span>
</div></th> 
<th><div class="tooltip"> Quantity 
  <span class="tooltiptext">Quantity</span>
</div></th>
<th><div class="tooltip"> Duration
  <span class="tooltiptext">Duration</span>
</div></th>
<th><div class="tooltip">Amount
  <span class="tooltiptext">Amount</span>
</div></th>
<th><div class="tooltip">Collection Mechanism
  <span class="tooltiptext">Collection Mechanism</span>
</div></th>
<th><div class="tooltip">Paid
  <span class="tooltiptext">Paid</span>
</div></th>
<th><div class="tooltip">Receipt Number
  <span class="tooltiptext">Receipt Number</span>
</div></th>
<th><div class="tooltip">Waived Amount
  <span class="tooltiptext">Waived Amount</span>
</div></th>
</div></th>
`;
const tableBodyTemplate = (el) => `
<tr>
<td>${el.title}</td>
 
<td><input value="${el.Quantity}" class="table-input" /></td>
<td><input value="${el.Duration}" class="table-input" /></td>
 <td><input value="${el.Amount}" class="table-input" /></td>
<td>
<select>
<option value="cashier">Bill</option>
<option value="cashier-supervisor">Collect</option>

</select>
</td>
<td><input value="${el.paid}" class="table-input" /></td>
<td><input value="${el.recieptNumber}" class="table-input" /></td>
<td><input value="${el.waivedAmount}" class="table-input" /></td>

</tr>`;
const tabelContentTemlate = (el) => `
<div style="margin-top:15px;margin-left:15px"><h2>CHARGE ADVICE</h2></div>
<section class="table-section">
  
  <table class="table table-addtional"  >
  <thead class="table-head">

  </thead>
  <tbody class="table-body">
  </tbody>
  <tfoot class="table-foot">
  </tfoot>
    
  </table>
</section><br><br>

 
<div class="navbar2" style="margin-right:75px;text-align:right;">
  <input style="margin-right:15px;padding: 10px;" type="submit" value="Waive Charge">
  <input style="margin-right:15px;padding: 10px;" type="button" value="Make Payment">
  <input style="margin-right:15px;padding: 10px;" type="button" class="add-button" value="Add Service ">
 </div>
</div>
`;
const customerInfoTemplate = (el) =>
    `<nav class="navbar1">

<div class="navbar-options">
<div>
<label for="cn" style="font-size:12px" >Customer Name</label>
<h2 name="cn" >${el.CustomerName}</h2> 
</div>
<br>
<div>
<label for="cn" style="font-size:12px" >AWB Number</label>
<h2 name="cn" >${el.AWBNumber}</h2> 
</div><br>
<div>
<label for="cn" style="font-size:12px" >SHC</label>
<h2 name="cn" >${el.SHC}</h2> 
</div><br>
<div>
<label for="cn" style="font-size:12px" >Zone/Import/Export</label>
<h2 name="cn" >${el.HandlingArea}</h2> 
</div><br>
<div>
<label for="cn" style="font-size:12px" >Export/Import</label>
<h2 name="cn" >${el.ExportImport}</h2> 
</div>
</div>

</nav>`;
const addAditional = (el) => ` <tr>
<td><input value="" class="table-input" /></td>
 
<td><input value="" class="table-input" /></td>
<td><input value="" class="table-input" /></td>
 <td><input value="" class="table-input" /></td>
<td>
<select>
<option value="cashier">Bill</option>
<option value="cashier-supervisor">Collect</option>

</select>
</td>
<td><input value="" class="table-input" /></td>
<td><input value="" class="table-input" /></td>
<td><input value="" class="table-input" /></td>

</tr>`;

const tabelContent = document.querySelector(".tabel-content");
const customerInfo = document.querySelector(".customer-info");

const SearchButton = document.querySelector(".search-button");
SearchButton.addEventListener("click", () => {
    customerInfo.innerHTML = customerInfoTemplate(data);
    tabelContent.innerHTML = tabelContentTemlate();
    document.querySelector(".table-head").innerHTML = tableHeaderTitle;
    const addButton = document.querySelector(".add-button");
    data.ChargeAdvice.forEach((el) => {
        document.querySelector(".table-body").innerHTML += tableBodyTemplate(el);
    });
    addButton.addEventListener("click", () => {
        document.querySelector(".table-addtional").innerHTML += addAditional();
    });
});