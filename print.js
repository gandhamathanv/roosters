function take_print() {
  console.log("take print");

  const doc = new jsPDF("p", "pt", "a4");
  let source = document.querySelector(".table").innerHTML;

  doc.fromHTML(source);
  doc.save("table.pdf");
}
