const data=[{
    ReceivedFrom : "RICHLAND LOGISTICS SVCS PTE LTD",
    AWBNumber: "816-11001015",

CUSTOMERDETAILS:" 1A1 GOODBOYS TEAM-ACT-CNE-SHP <br>BEACH GRAND AND SPA<br> HULHUMALE,MLE,MV.12011",
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
        title:"FWB CREATION SERVICE FEE",
        Quantity:"1.0",
        Duration:" ",
        Amount:"18.00"
    },
    {
        title:"DANGEROUS GOODS HANDLING FEE",
        Quantity:"1.0",
        Duration:" ",
        Amount:"100.00"
    },
    {
        title:"FORK LIFT CHARGES",
        Quantity:"1.0",
        Duration:"3",
        Amount:"360.00"
    },
    {
        title:"TOTAL",
        Quantity:" ",
        Duration:" ",
        Amount:"1378.00"
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
        title:"TOTAL",
        Quantity:" ",
        Duration:" ",
        Amount:"120.00"
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
<header><img src="Ata.jpg" alt="KMA.jpg" width="10%" "><h2 style="margin-left:5px">Cargo Official Receipt</h2> </header>
     
<div style="margin-left:10px">
<div class="title">
    <p><h4><b>Received From</b></h4></p><p>${el.ReceivedFrom}</p></div>
    <div class="title">
    <p><h4><b>AWB Number</b></h4></p><p>${el.AWBNumber}</p></div>
    <div class="title">
    <P><h4><b>FLT/DATE</b></h4></p><p>${el.FLTDATE}</P></div>
    <div class="title">
    <p><h4><b>ACT PCS/TOT PCS</b></h4> </p><p>${el.ACTPCSTOTPCS}</p></div>
    <div class="title">
    <P ><h4><b>CUSTOMER DETAILS</b></h4></p><p style="line-height:normal;">${el.CUSTOMERDETAILS}</p></div>
    <div class="title">
<p><h4><b>TIN</b></h4></p><p>${el.TIN}
</P></div>
<div class="title">
<p><h4><b>Collection Time </b></h4></p><p>${el.CollectionTime}</p></div>
<div class="title">
    <P><h4><b>SHC</b></h4></p><p>${el.SHC}</P></div>
    <div class="title">
    <P><h4><b>CHARGEABLE WT</b></h4></p><p>${el.CHARGEABLEWT}</P></div>
    <div class="title">
    <P><h4><b>RCVD WT/TOT WT</b></h4></p><p>${el.RCVDWTTOTWT}</P></div>
    <div class="title">
    <P><h4><b>NATURE OF GOODS</b></h4></p><p>${el.NATUREOFGOODS}</P></div>
    <div class="title">
    <p><h4><b>Terminal </b></h4></p><p>${el.Terminal}</p></div>
    <div class="title">
    <p><h4><b>Receipt Number </b></h4> </p><p>${el.ReceiptNumber} </p></div>
    <div class="title">
    <p><h4><b>Receipt Date</b></h4> </p><p>${el.ReceiptDate}</p></div>
    <div class="title">
    <P><h4><b>CURRENCY</b></h4></p><p>${el.CURRENCY}</P></div>
    <div class="title">
    <P><h4><b>BILLING PARTY CODE</b></h4></p><p>${el.BILLINGPARTYCODE} </P></div>
    <div class="title">
    <P><h4><b>PAYMENT METHOD</b></h4></p><p>${el.PAYMENTMETHOD}</P></div>
    <div class="title">
    <P><h4><b>ISSUED BY </b></h4> </p><p>${el.ISSUEDBY}</P></div>
   
   

    
</div>
</div>
<div >
<p><header>Charge Detail</header></p>
<table>
    <tr class="ch">
        <th class="ch">Charge Items</th>
        <th class="a">Quantity</th>
        <th class="a">Duration</th>
        <th class="a">Amount</th>
    </tr>

    ${
        el.ChargeItems.map(el => 
            `
            <tr>
        <td>${el.title}</td>
        <td>${el.Quantity}</td>
        <td>${el.Duration}</td>
        <td>${el.Amount}</td>
    </tr>
    `)
    }
</table>
</div>
<div>
<p><header>Waive Detail</header></p>
<table>
    <tr >
        <th class="ch1">Service Type</th>
        <th class="a">Quantity</th>
        <th class="a">Duration</th>
        <th class="a">Amount</th>
    </tr>
    <tr>
    ${
        el.WaiveDetail.map(el => 
            `
            <tr>
        <td>${el.title}</td>
        <td>${el.Quantity}</td>
        <td>${el.Duration}</td>
        <td>${el.Amount}</td>
    </tr>
    `)
    }
</table>
</div>
<div>
<p><header>Total</header></p>
<table>
<tr >
        <th class="TOTAL">Total</th>
        <th class="a">GST(6%)</th>
        <th class="a">GRANDTOTAL</th>
       
    </tr>
<tr>
    ${
        el.Total.map(el => 
            `
            <tr>
        <td>${el.total}</td>
        <td>${el.GST}</td>
        <td>${el.GRANDTOTAL}</td>
       
    </tr>
    `)
    }
    
</table>
</div>



`

console.log(tabelContentTemlate(data[0]));

document.getElementById("tablef").innerHTML=tabelContentTemlate(data[0]);

