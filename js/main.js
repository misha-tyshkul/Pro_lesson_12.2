const myForm = document.getElementsByTagName("form")[0];
const main = document.getElementsByTagName("main")[0];

function displayTable(event) {
  event.preventDefault();

  const tableData = document.createElement("table");

  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = `Name: ${myForm.name.value}`;
  tr.append(td);

  const tr2 = document.createElement("tr");
  const td2 = document.createElement("td");
  td2.innerText = `Last name: ${myForm.last_name.value}`;
  tr2.append(td2);

  const tr3 = document.createElement("tr");
  const td3 = document.createElement("td");
  td3.innerText = `Birthday: ${myForm.birthday.value}`;
  tr3.append(td3);

  const tr4 = document.createElement("tr");
  const td4 = document.createElement("td");
  td4.innerText = `Sex: ${myForm.sex.value}`;
  tr4.append(td4);

  const tr5 = document.createElement("tr");
  const td5 = document.createElement("td");
  td5.innerText = `City: ${myForm.city.value}`;
  tr5.append(td5);

  const tr6 = document.createElement("tr");
  const td6 = document.createElement("td");
  td6.innerText = `Adress: ${myForm.adress.value}`;
  tr6.append(td6);

  const tr7 = document.createElement("tr");
  const td7 = document.createElement("td");
  td7.innerText = `Language eng: ${myForm.eng.checked}`;
  tr7.append(td7);

  const tr8 = document.createElement("tr");
  const td8 = document.createElement("td");
  td8.innerText = `Language uk: ${myForm.uk.checked}`;
  tr8.append(td8);

  const tr9 = document.createElement("tr");
  const td9 = document.createElement("td");
  td9.innerText = `Language fr: ${myForm.fr.checked}`;
  tr9.append(td9);

  const tr10 = document.createElement("tr");
  const td10 = document.createElement("td");
  td10.innerText = `Language es: ${myForm.es.checked}`;
  tr10.append(td10);

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
