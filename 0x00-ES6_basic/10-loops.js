export default function appendToEachArrayValue(array, appendString) {
	const arr = [];
	for (const val in array) {
	  arr.push(appendString + val);
	}
  
	return arr;
  }
