
let n = [3, 7, 2, 9];

let max=n[0];

for(let i=0; i<n.length; i++){
	if(n[i]>max){
		max=n[i];
	}
}

console.log(max);