let ul1 = document.getElementById("Phone1");
let listPhoneSelected = JSON.parse(localStorage.getItem(`phone`));
let html = `<tr>
<td>${listPhoneSelected.name}</td>
<td>${listPhoneSelected.madeBy}</td>
<td>${listPhoneSelected.price}</td>
<td><img src = "${listPhoneSelected.img}" width = 100px></td>
</tr>
`
ul1.innerHTML = html;



