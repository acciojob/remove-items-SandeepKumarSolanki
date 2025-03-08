//your JS code here. If required.

let btn = document.getElementById('removeBtn')

btn.addEventListener("click" , (e)=>{
	let section = document.getElementById('colorSelect');
	section.remove(section.selectedIndex)
})