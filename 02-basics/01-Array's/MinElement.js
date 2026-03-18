let n = [3, 7, 2, 9];

let min=n[0];

for(let i=0; i<n.length; i++){
	if(n[i]<min){
		min=n[i];
	}
}

console.log(min);