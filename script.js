//your JS code here. If required.
const delay = document.getElementById("delay");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

let promise = () => {
	return new Promise((resolve, reject)=>{
      setTimeout(()=>{
		resolve(text.value);
	},delay.value);
  })
};

async function asyncFun() {
	const data = await promise();
	output.innerHTML = `<h1>${data}</h1>`;
}

btn.addEventListener("click",()=>{
	asyncFun();
})



