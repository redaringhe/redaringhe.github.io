const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.arte.it%2Ffoto%2F600x450%2F1e%2F132623-1_Piranesi_Imgain_re_fengsler_nr_VII_1761_.jpg&f=1&nofb=1&ipt=74c9a12f906b186ea9d2a70996d6296c06bb57015c62129922837ccd5171a170") {
    myImage.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.oZrNBr0I3zDoP4TBEp2d5gAAAA%3Fpid%3DApi&f=1&ipt=0e85ac81c2b41b3331b99d43157fe4efe2973d2c8564ca134af575523c01afc2");
  } else {
    myImage.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.arte.it%2Ffoto%2F600x450%2F1e%2F132623-1_Piranesi_Imgain_re_fengsler_nr_VII_1761_.jpg&f=1&nofb=1&ipt=74c9a12f906b186ea9d2a70996d6296c06bb57015c62129922837ccd5171a170");
  }
});

//--------------------------------------------------

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
let myParagraph = document.querySelectorAll("p");

function setUserName() {
	const myName = prompt("Come ti chiami?");
	if(!myName){
		const myName = prompt("Non ti fidi? Fai un tentativo.")
		localStorage.setItem("name", myName);
		myHeading.textContent = `Che bel nome di merda, ${myName}`;
	}else{
	localStorage.setItem("name", myName);
	myHeading.textContent = `Che bel nome, ${myName}`;
};

//if (localStorage.getItem("name")!="Manto") {
//	prompt(`Non sei la persona che cerco, ${myName}. Sai cosa dirà Giovanni Muciaccia prima di morire?`);
//	const myNameTwo = prompt("Ragazzi è il momento di un Heart Attack. Come ti chiami?");
//	localStorage.setItem("name", myNameTwo);
//	myHeading.textContent = `Art Attack, ${myNameTwo}!`
//	for (var i = 0; i < myParagraph.length; ++i) {
//			myParagraph[i].textContent = `Tum tum tum Sahur DOVE SI NASCONDE SADDAM HUSSEIN? NELLO SCANTINATO DI Giovanni Muciaccia o nel tuo, ${myName}? Non puoi fuggire. Tutturuuuuuuuuuu`
//	}
//}
};

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Bentornatx ${storedName}`
};

myButton.addEventListener("click", () => {
setUserName();
});
