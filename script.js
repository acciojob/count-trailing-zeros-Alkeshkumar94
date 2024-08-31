function trailingZeros(n) {
  //your JS code here. If required.
	let fac=1;
	while(n>0){
		fac*=n;
		n--;
	}
	let zero=0;
   while((fac%10)===0){
	   zero++;
	   fac=Math.floor(fac/10);
   }
	return zero;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
