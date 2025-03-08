//your JS code here. If required.

let btn = document.getElementById('removeBtn')

btn.addEventListener("click" , (e)=>{
	let select = document.getElementById('colorSelect');
	select.remove(select.selectedIndex);
	
})