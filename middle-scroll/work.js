// This variable is temp
var amountOfScroll = 100;

var status = false

// index
// 0 1
// x y
var currntPosition = [0,0];

document.addEventListener("mousedown", function(e){
	// add event listener for middle click (wheel)
	// begin scroll
	if(e.button == 1){ 
		status = true
		currntPosition[0] = e.x;
		currntPosition[1] = e.y;
	} 
})

document.addEventListener("mouseup", function(e){
	// add event listener for middle click (wheel)
	// end scroll
	if(e.button == 1) status = false;
})

document.addEventListener("mousemove", function(e){
	if(currntPosition[1] < e.y && status) window.scrollBy(0,amountOfScroll);
	if(currntPosition[1] > e.y && status) window.scrollBy(0,-amountOfScroll);
})
