var Human = function(){
	// this is the human class
}

Human.prototype.eat = function (){
	console.log('instance is eating');
}

//a class method
Human.eat = function(){
	console.log('class is eating');
}

