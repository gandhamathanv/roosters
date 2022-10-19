const data1 = [
  {
    AWBNumber: "618-4274283",
    CustomerName: "Aatarsh",
    SHC: "VAL EAP EAW",
    HandlingArea: "AFT1",
    ExportImport: "Import",
    Counter: "T5-L-01",
  },
];
const data2 = [
  {
    Charges: {
      WeightVerification: {
        Quantity: 1000.0,
        Duration: null,
        Amount: 3.0,
        waivedAmount: null,
      },
      RcarScreeningFee: {
        Quantity: 1000.0,
        Duration: null,
        Amount: 90.0,

        waivedAmount: 3.0,
      },
      FwbCreationServiceFee: {
        Quantity: 1.0,
        Duration: null,
        Amount: 18.0,

        waivedAmount: null,
      },

      ToCollect: {
        Quantity: " ",
        Duration: " ",
        Amount: 30.0,

        waivedAmount: 3.0,
      },
    },
  },
];
const data3 = [{}];

const customerInfoTemplate = (el) =>
  `
<nav class="navbar1">
    
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
        <div>
            <label for="cn">Counter</label>
            <h3 name="cn" >${el.Counter}</h3> 
          </div>
         
        </div>
       
      </nav>`;

const tabelContentTemlate = (el) => `
      <table class="table" >
      <tr>
        <th>Service Type</th>
        <th>Quantity</th>
        <th>Duration</th>
        <th>Amount</th>
       <th>Waived Amount</th>

      </tr>
      <tr>
       <td>WEIGHT VERIFICATION</td>
        
       <td><input value="${el.WeightVerification.Quantity}" class="table-input" /></td>
       <td><input value="${el.WeightVerification.Duration}" class="table-input" /></td>
        <td><input value="${el.WeightVerification.Amount}" class="table-input" /></td>
       
        <td><input value="${el.WeightVerification.WaivedAmount}" class="table-input" /></td>

      </tr>
      <tr>
        <td>RCAR SCREENING FEE</td>
         
        <td><input value="${el.RcarScreeningFee.Quantity}" class="table-input" /></td>
        <td><input value="${el.RcarScreeningFee.Duration}" class="table-input" /></td>
         <td><input value="${el.RcarScreeningFee.Amount}" class="table-input" /></td>
       
<td><input value="${el.RcarScreeningFee.WaivedAmount}" class="table-input" /></td>

       </tr>
       <tr>
        <td>FWB CREATION SERVICE FEE</td>
         
        <td><input value="${el.FwbCreationServiceFee.Quantity}" class="table-input" /></td>
        <td><input value="${el.FwbCreationServiceFee.Duration}" class="table-input" /></td>
         <td><input value="${el.FwbCreationServiceFee.Amount}" class="table-input" /></td>
        

<td><input value="${el.FwbCreationServiceFee.WaivedAmount}" class="table-input" /></td>

       </tr>
       <tr >
         <td style="text-align: right">To Collect</td>
          
         <td><input value="${el.ToCollect.Quantity}" class="table-input" /></td>
         <td><input value=" ${el.ToCollect.Duration} " class="table-input" /></td>
          <td><input value="${el.ToCollect.Amount}" class="table-input" /></td>
         <td><input value="${el.ToCollect.WaivedAmount}" class="table-input" /></td>

        </tr>
    </table>
  </section>`;

const customerInfo = document.querySelector(".customer-info");

function editInput() {
  let editinput = document.getElementById("codn");
  console.log(editinput.innerHTML);
  const editvalue = editinput.value;
  editinput.innerHTML = `<p>${editvalue}</p> `;
  console.log(editinput.value);
}

let request = new XMLHttpRequest();
request.open("POST", "FinanceERPrequest.json");
request.send();
request.onload = () => {
  console.log(request);
  if (request.status === 200) {
    // by default the response comes in the string format, we need to parse the data into JSON
    console.log(JSON.parse(request.response));
  } else {
    console.log(`error ${request.status} ${request.statusText}`);
  }
};

const last = ` <td>Total</td>
<td><input value="27.00" class="table-input" /></td>

</tr>`;
