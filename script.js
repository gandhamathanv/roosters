const data = {
    AWBNumber: "618-42742836",
    CustomerName: "Aatarsh",
    SHC: "VAL EAP EAW",
    HandlingArea: "Import/Cold Storage 1",
    ExportImport: "Import",
    ChargeAdvice: [{
            title: " WeightVerification ",
            Quantity: 1000.0,
            Duration: " ",
            Amount: 3.0,
            CollectionMechanism: ["BILL", "COLLECT"],
            paid: false,
            recieptNumber:" ",
            waivedAmount: " ",
        },
        {
            title: " RcarScreeningFee",
            Quantity: 1000.0,
            Duration: " ",
            Amount: 90.0,
            CollectionMechanism: ["BILL", "COLLECT"],
            paid: false,
            recieptNumber: " ",
            waivedAmount: " ",
        },
        {
            title: " FwbCreationServiceFee",
            Quantity: 1.0,
            Duration: " ",
            Amount: 18.0,
            CollectionMechanism: "Collect",
            paid: false,
            recieptNumber: " ",
            waivedAmount: " ",
        },
        {
            title: "DangerousGoodsHandlingFee:",
            Quantity: 10.0,
            Duration: " ",
            Amount: " ",
            CollectionMechanism: "Collect",
            paid: true,
            recieptNumber: "100-09102917",
            waivedAmount: " ",
        },
        {
            title: "ForkLiftCharges:",
            Quantity: " ",
            Duration: 3,
            Amount: 360.0,
            CollectionMechanism: "Collect",
            paid: true,
            recieptNumber: "100-09102917",
            waivedAmount: " ",
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
 


</section>
</table>

<br>
<tfoot class="table-foot">
  </tfoot>
    
  </table>
</section>

 
<div class="navbar2" style="margin-right:75px;text-align:right;">
<input type="button" value="Waive Charge" style="
       
        
gap: 12px;

background-color: #4263eb;
color: white;
border-radius: 5px;
cursor: pointer;
width:100px;
height:40px" 
margin-right:15px;padding: 10px;>

<input type="button" value="Add Services" style="
       
        
gap: 12px;

background-color: #4263eb;
color: white;
border-radius: 5px;
cursor: pointer;
width:100px;
height:40px" 
margin-right:15px;padding: 10px; class="add-button">
<input type="button" value="Make Payment" style="
       
        
gap: 12px;

background-color: #4263eb;
color: white;
border-radius: 5px;
cursor: pointer;
width:100px;
height:40px" 
margin-right:15px;padding: 10px; >
  
 </div>
</div>
`;
const customerInfoTemplate = (el) =>
    `<nav class="navbar1">

<div class="navbar-options" >

<div class="card">

<div class="container">
<label for="cn" style="font-size:12px" >Customer Name</label>
<h4 name="cn" >${el.CustomerName}</h4> 
</div>
</div>     
<div class="card">

<div class="container">
<label for="cn" style="font-size:12px" >AWB Number</label>
<h4 name="cn" >${el.AWBNumber}</h4> 
</div>
</div>                
<div class="card">

<div class="container">
<label for="cn" style="font-size:12px" >Special Handling Code</label>
<h4 name="cn" >${el.SHC}</h4> 
</div>
</div> 
<div class="card">

<div class="container">
<label for="cn" style="font-size:12px" >Zone/Area</label>
<h4 name="cn" >${el.HandlingArea}</h4> 
</div>
</div> 
<div class="card">
<label for="cn" style="font-size:12px" >Export/Import Shipment</label>
<h4 name="cn" >${el.ExportImport}</h4> 


</div>
</div> 
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