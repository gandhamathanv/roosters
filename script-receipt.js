const data=[{
    ReceivedFrom : "RICHLAND LOGISTICS SVCS PTE LTD",
    AWBNumber: "816-11001015",

CUSTOMERDETAILS:" 1A1 GOODBOYS TEAM-ACT-CNE-SHP BEACH GRAND AND SPA HULHUMALE,MLE,MV.12011",
TIN: "98765ABCD12",

CollectionTime : "17AUG2016",

SHC:"PER",

CHARGEABLEWT:"1000.0K",

RCVDWTTOTWT:"1000.0K/1000.OK",

NATUREOFGOODS:"PERISHABLE",

Terminal :"T6",

ReceiptNumber : "A1000020",

ReceiptDate:" 23NOV2017 1040HRS",

CURRENCY:"MVR",

BILLINGPARTYCODE:"GOD",

PAYMENTMETHOD:"CASH",

ISSUEDBY : "AMIR",

MAWB :"618-33800001",

FLTDATE:"SQ0338A/23NOV17",

ACTPCSTOTPCS:" 100/100",
ChargeItems:[
    {
        title:"RCAR SCREENING FEE",
        Quantity:"1000.0",
        Duration:" ",
        Amount:"900.00"
    },
    {
        title1:"FWB CREATION SERVICE FEE",
        Quantity1:"1.0",
        Duration1:" ",
        Amount1:"18.00"
    },
    {
        title2:"DANGEROUS GOODS HANDLING FEE",
        Quantity2:"1.0",
        Duration2:" ",
        Amount2:"100.00"
    },
    {
        title3:"FORK LIFT CHARGES",
        Quantity3:"1.0",
        Duration3:"3",
        Amount3:"360.00"
    },
    {
        title4:"TOTAL",
        Quantity4:" ",
        Duration4:" ",
        Amount4:"1378.00"
    },
    


],
WaiveDetail:[
    {
        title:"FORK LIFT CHARGES",
        Quantity:" ",
        Duration:"1",
        Amount:"120.00"
    },
    {
        title1:"TOTAL",
        Quantity1:" ",
        Duration1:" ",
        Amount1:"120.00"
    },


],
Total:[
    {
        total:"3105.00",
        GST:"186.30",
        GRANDTOTAL:"3291.00"

    }
]
}
]
const tabelContentTemlate = (el) => `
<header>Cargo Official Receipt <img src="Ata.jpg" alt="KMA.jpg" width="10%" style="margin-left: 80%;"></header>
        
<div class="left">
    <p>Received From : ${el.ReceivedFrom}</p>
    <p>AWB Number: ${el.AWBNumber}</p>
   
    <P>CUSTOMER DETAILS:${el.CUSTOMERDETAILS}</p>
<p>TIN: ${el.TIN}
</P>
<p>Collection Time :${el.CollectionTime}</p>
    <P>SHC:${el.SHC}</P>
    <P>CHARGEABLE WT:${el.CHARGEABLEWT}</P>
    <P>RCVD WT/TOT WT:${el.RCVDWTTOTWT}</P>
    <P>NATURE OF GOODS:${el.NATUREOFGOODS}</P>
    <p>Terminal :${el.Terminal}</p>
    <p></p>
</div>
<div class="right">
    <p>Receipt Number : ${el.ReceiptNumber} </p>
    <p>Receipt Date: ${el.ReceiptDate}</p>
    <P>CURRENCY:${el.CURRENCY}</P>
    <P>BILLING PARTY CODE:${el.BILLINGPARTYCODE} </P>
    <P>PAYMENT METHOD:${el.PAYMENTMETHOD}</P>
    <P>ISSUED BY : ${el.ISSUEDBY}</P>
    <P>MAWB :${el.MAWB}</P>
    <P>FLT/DATE:${el.FLTDATE}</P>
    <p>ACT PCS/TOT PCS: ${el.ACTPCSTOTPCS}</p>
    
</div>

<div >
<p>Charge Detail</p>
<table>
    <tr class="ch">
        <th class="ch">Charge Items</th>
        <th class="a">Quantity</th>
        <th class="a">Duration</th>
        <th class="a">Amount</th>
    </tr>
    <tr>
        <td>${el.ChargeItems.title}</td>
        <td>${el.ChargeItems.Quantity}</td>
        <td>${el.ChargeItems.Duration}</td>
        <td>${el.ChargeItems.Amount}</td>
    </tr>
    <tr>
    <td>${el.ChargeItems.title1}</td>
    <td>${el.ChargeItems.Quantity1}</td>
    <td>${el.ChargeItems.Duration1}</td>
    <td>${el.ChargeItems.Amount1}</td>
    </tr>
    <tr>
    <td>${el.ChargeItems.title2}</td>
    <td>${el.ChargeItems.Quantity2}</td>
    <td>${el.ChargeItems.Duration2}</td>
    <td>${el.ChargeItems.Amount2}</td>
    </tr>
    <tr>
    <td>${el.ChargeItems.title3}</td>
    <td>${el.ChargeItems.Quantity3}</td>
    <td>${el.ChargeItems.Duration3}</td>
    <td>${el.ChargeItems.Amount3}</td>
    </tr>
    <tr>
    <td>${el.ChargeItems.title4}</td>
    <td>${el.ChargeItems.Quantity4}</td>
    <td>${el.ChargeItems.Duration4}</td>
    <td>${el.ChargeItems.Amount4}</td>
    </tr>
</table>
</div>
<div>
<p>Waive Detail</p>
<table>
    <tr >
        <th class="ch1">Service Type</th>
        <th class="a">Quantity</th>
        <th class="a">Duration</th>
        <th class="a">Amount</th>
    </tr>
    <tr>
    <td>${el.WaiveDetail.title}</td>
    <td>${el.WaiveDetail.Quantity4}</td>
    <td>${el.WaiveDetail.Duration4}</td>
    <td>${el.WaiveDetail.Amount4}</td>
    </tr>
    <tr>
    <td>${el.WaiveDetail.title1}</td>
    <td>${el.WaiveDetail.Quantity1}</td>
    <td>${el.WaiveDetail.Duration1}</td>
    <td>${el.WaiveDetail.Amount1}</td>
    </tr>
</table>
</div>
<div>
<p>Waive Detail</p>
<table>
    <tr >
       <td>Total</td>
       <td>${el.Total.total}</td>
    </tr>
    <tr>
        <td>GST(6%)</td>
        <td>${el.Total.GST}</td>
       
    </tr>
    <tr>
        <td>GRAND TOTAL</td>
        <td>${el.Total.GRANDTOTAL}</td>
        
    </tr>
</table>
</div>

`