const data = [{
    AWBNumber: "618-4274283",
    CustomerName: "Aatarsh",
    SHC: "VAL EAP EAW",
    HandlingArea: "AFT1",
    ExportImport: "Import",
    ChargeAdvice: {
        WeightVerification: {
            Quantity: 1000.0,
            Duration: null,
            Amount: 3.0,
            CollectionMechanism: ["BILL", "COLLECT"],
            paid: false,
            recieptNumber: null,
            waivedAmount: null,
        },
        RcarScreeningFee: {
            Quantity: 1000.0,
            Duration: null,
            Amount: 90.0,
            CollectionMechanism: ["BILL", "COLLECT"],
            paid: false,
            recieptNumber: null,
            waivedAmount: null,
        },
        FwbCreationServiceFee: {
            Quantity: 1.0,
            Duration: null,
            Amount: 18.0,
            CollectionMechanism: "Collect",
            paid: false,
            recieptNumber: null,
            waivedAmount: null,
        },
        DangerousGoodsHandlingFee: {
            Quantity: 10.0,
            Duration: null,
            Amount: 100.0,
            CollectionMechanism: "Collect",
            paid: true,
            recieptNumber: "100-09102917",
            waivedAmount: null,
        },
        ForkLiftCharges: {
            Quantity: null,
            Duration: 3,
            Amount: 360.0,
            CollectionMechanism: "Collect",
            paid: true,
            recieptNumber: "100-09102917",
            waivedAmount: null,
        },
        ToCollect: {
            Quantity: " ",
            Duration: " ",
            Amount: 1378.0,
            CollectionMechanism: " ",
            paid: " ",
            recieptNumber: " ",
            waivedAmount: " ",
        },
        ToBill: {
            Quantity: " ",
            Duration: " ",
            Amount: 0.0,
            CollectionMechanism: " ",
            paid: " ",
            recieptNumber: " ",
            waivedAmount: " ",
        },
    },
}, ];
const tabelContentTemlate = (el) => `
<div style="margin-top:15px;"><h4>CHARGE ADVICE</h4></div>
<section class="table-section">
  
  <table class="table" >
    <tr>
      <th>Service Type<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Service Type</span>
      </div></th>
      <th>Quantity <div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Quantity</span>
      </div></th>
      <th>Duration<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Duration</span>
      </div></th>
      <th>Amount<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Amount</span>
      </div></th>
      <th>Collection Mechanism<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Collection Mechanism</span>
      </div></th>
      <th>Paid<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Paid</span>
      </div></th>
      <th>Receipt Number<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Receipt Number</span>
      </div></th>
      <th>Waived Amount<div class="tooltip"> <i class="fa-sharp fa-solid fa-question" style="margin-left :10px;"></i>
        <span class="tooltiptext">Waived Amount</span>
      </div></th>
      </div></th>
     

    </tr>
    <tr>
     <td>WEIGHT VERIFICATION</td>
      
     <td><input value="${el.WeightVerification.Quantity}" class="table-input" /></td>
     <td><input value="${el.WeightVerification.Duration}" class="table-input" /></td>
      <td><input value="${el.WeightVerification.Amount}" class="table-input" /></td>
     <td>
<select>
<option value="cashier">Bill</option>
<option value="cashier-supervisor">Collect</option>

</select>
</td>
<td><input value="${el.WeightVerification.paid}" class="table-input" /></td>
<td><input value="${el.WeightVerification.recieptNumber}" class="table-input" /></td>
<td><input value="${el.WeightVerification.waivedAmount}" class="table-input" /></td>

    </tr>
    <tr>
      <td>DANGEROUS GOODS HANDLING FEE</td>
       
      <td><input value="${el.DangerousGoodsHandlingFee.Quantity}" class="table-input" /></td>
      <td><input value="${el.DangerousGoodsHandlingFee.Duration}" class="table-input" /></td>
       <td><input value="${el.DangerousGoodsHandlingFee.Amount}" class="table-input" /></td>
       <td><input value="Collect" class="table-input" /></td>
       <td class="icon-table-column">
        <i class="fa fa-check" style="color:green" aria-hidden="true"></i>
      </td>

<td><input value="${el.DangerousGoodsHandlingFee.recieptNumber}" class="table-input" /></td>
<td><input value="${el.DangerousGoodsHandlingFee.waivedAmount}" class="table-input" /></td>

     </tr>
     <tr>
      <td>RCAR SCREENING FEE</td>
       
      <td><input value="${el.RcarScreeningFee.Quantity}" class="table-input" /></td>
      <td><input value="${el.RcarScreeningFee.Duration}" class="table-input" /></td>
       <td><input value="${el.RcarScreeningFee.Amount}" class="table-input" /></td>
      <td>
<select>
<option value="cashier">Bill</option>
<option value="cashier-supervisor">Collect</option>

</select>
</td>
<td><input value="   " class="table-input" /></td>
<td><input value="${el.RcarScreeningFee.recieptNumber}" class="table-input" /></td>
<td><input value="${el.RcarScreeningFee.waivedAmount}" class="table-input" /></td>

     </tr>
     <tr >
       <td style="text-align: right">To Collect</td>
        
       <td><input value="${el.ToCollect.Quantity}" class="table-input" /></td>
       <td><input value="${el.ToCollect.Duration}" class="table-input" /></td>
        <td><input value="${el.ToCollect.Amount}" class="table-input" /></td>
        <td><input value="  " class="table-input" /></td>
        <td><input value="  " class="table-input" /></td>
        <td><input value="${el.ToCollect.recieptNumber}" class="table-input" /></td>
        <td><input value="${el.ToCollect.waivedAmount}" class="table-input" /></td>


      </tr>
      <tr >
        <td style="text-align: right">To Bill</td>
         
        <td><input value="${el.ToBill.Quantity}" class="table-input" /></td>
        <td><input value="${el.ToBill.Duration}" class="table-input" /></td>
         <td><input value="${el.ToBill.Amount}" class="table-input" /></td>
         <td><input value="  " class="table-input" /></td>
         <td><input value="  " class="table-input" /></td>
         <td><input value="${el.ToBill.recieptNumber}" class="table-input" /></td>
         <td><input value="${el.ToBill.waivedAmount}" class="table-input" /></td>

       </tr>
  </table>
</section><br><br>

 
<div class="navbar2" style="margin-right:75px;text-align:right;">
  <input style="margin-right:15px;padding: 10px;" type="submit" value="Waive Charge">
  <input style="margin-right:15px;padding: 10px;" type="button" value="Make Payment">
  <input style="margin-right:15px;padding: 10px;" type="button" value="Add Service ">
 </div>
</div>
`;
const customerInfoTemplate = (el) =>
    `<nav class="navbar1">

<div class="navbar-options">
<div>
<label for="cn">Customer Name</label>
<h3 name="cn" >${el.CustomerName}</h3> 
</div>
<br>
<div>
<label for="cn">AWD Number</label>
<h3 name="cn" >${el.AWBNumber}</h3> 
</div><br>
<div>
<label for="cn">SHC</label>
<h3 name="cn" >${el.SHC}</h3> 
</div><br>
<div>
<label for="cn">${el.HandlingArea}</label>
<h3 name="cn" >AFT1</h3> 
</div><br>
<div>
<label for="cn">Export/Import</label>
<h3 name="cn" >${el.ExportImport}</h3> 
</div>
</div>

</nav>`;

const tabelContent = document.querySelector(".tabel-content");
const customerInfo = document.querySelector(".customer-info");

const SearchButton = document.querySelector(".search-button");
SearchButton.addEventListener("click", () => {
    customerInfo.innerHTML = customerInfoTemplate(data[0]);
    tabelContent.innerHTML = tabelContentTemlate(data[0].ChargeAdvice);
    console.log(data[0].ChargeAdvice);
});