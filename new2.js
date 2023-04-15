const table = document.getElementById("tab");
let storage = JSON.parse(localStorage.getItem("mainArr")) || [];

storage.forEach((obj) => {
  let row = document.createElement("tr");
  row.innerHTML = `<td>${obj.name}</td>
                    <td>${obj.start_date}</td>
                    <td>${obj.num_days}</td>
                    <td>${obj.type}</td>
                    <td><img id="img" src=${obj.photo} alt="Picture"></td>
                    <td><button id="accept">Edit</button><button id="reject">Reject</button></td>`;
  table.append(row);

  const pressedit = row.querySelector("#accept");

  pressedit.addEventListener("click", (event) => {
    let rowIndex = event.target.parentElement.parentElement.rowIndex;
    localStorage.setItem("rowInd", JSON.stringify(rowIndex));
    window.location.href = "index.html";
  });

  const rejectButton = row.querySelector("#reject");
  rejectButton.addEventListener("click", (event) => {
    let x = confirm("Are you sure?");
    if (!x) return;
    const rowIndex = event.target.parentElement.parentElement.rowIndex;
    event.target.parentElement.parentElement.remove();
    storage.splice(rowIndex - 1, 1);
    localStorage.setItem("mainArr", JSON.stringify(storage));
  });
});

function searching()
{
    let data=document.getElementById("search").value.toLowerCase();
    let tableRow=table.getElementsByTagName("tr");
    for(let i=0;i<tableRow.length;i++)
    {
        let cell=tableRow[i].getElementsByTagName("td")[0];
        if(cell)
        {
            let text = tableRow[i].innerHTML;
            if (text.toLowerCase().indexOf(data) > -1) tableRow[i].style.display = "";
            else tableRow[i].style.display = "none";
        }
    }
}




