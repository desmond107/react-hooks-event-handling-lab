// Code EyesOnMe Component Here
function EyesOnMe() {

	function handlerBlur() {
		console.log('Hey! Eyes on me!');
	}

	function handlerFocus() {
		console.log('Good!');
	}

	return (
		<button onBlur={handlerBlur} onFocus={handlerFocus}>Eyes on me</button>
	);
}

export default EyesOnMe;