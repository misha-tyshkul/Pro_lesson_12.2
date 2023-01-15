const myForm = document.getElementsByTagName("form")[0];
const main = document.getElementsByTagName("main")[0];

function displayTable(event) {
  event.preventDefault();

  const tableData = document.createElement("table");

  const tr = document.createElement("tr");
  tr.innerText = `Name: ${myForm.name.value}`;

  const tr2 = document.createElement("tr");
  tr2.innerText = `Last name: ${myForm.last_name.value}`;

  const tr3 = document.createElement("tr");
  tr3.innerText = `Birthday: ${myForm.birthday.value}`;

  const tr4 = document.createElement("tr");
  tr4.innerText = `Sex: ${myForm.sex.value}`;

  const tr5 = document.createElement("tr");
  tr5.innerText = `City: ${myForm.city.value}`;

  const tr6 = document.createElement("tr");
  tr6.innerText = `Adress: ${myForm.adress.value}`;

  const tr7 = document.createElement("tr");
  tr7.innerText = `Language eng: ${myForm.eng.checked}`;

  const tr8 = document.createElement("tr");
  tr8.innerText = `Language uk: ${myForm.uk.checked}`;

  const tr9 = document.createElement("tr");
  tr9.innerText = `Language fr: ${myForm.fr.checked}`;

  const tr10 = document.createElement("tr");
  tr10.innerText = `Language es: ${myForm.es.checked}`;

  tableData.append(tr);
  tableData.append(tr2);
  tableData.append(tr3);
  tableData.append(tr4);
  tableData.append(tr5);
  tableData.append(tr6);
  tableData.append(tr7);
  tableData.append(tr8);
  tableData.append(tr9);
  tableData.append(tr10);

  main.append(tableData);

  myForm.style.display = "none";

  console.log(tableData);
}

myForm.addEventListener("submit", displayTable);
