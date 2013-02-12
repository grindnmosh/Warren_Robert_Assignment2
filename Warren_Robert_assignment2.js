//alert("JavaScript works!");


/*
Robert Warren
02/06/2013
Project 2
Teen Super Sleuth
Chapter 2 "The Plan"
*/

var me = "Robert",
	myFriend = 'Sam',
	locale = 'gym\'s locker room.',
	success = 'stay hidden and catch the thief in the act.',
	failure = 'I was unable to ' + success,
	team = 2,
	hidden = true,
	thieves = 'people working as a team',
	numOfThieves = 5;

var attemptToStayHidden = function(whoIsHiding, whoIsLookingout){
	if (whoIsHiding = "Robert", whoIsLookingOut = "Sam")
		console.log(whoIsHiding + " asks " + whoIsLookingOut + " to cover him as they plan what their second attempt consists of.");
	else if (whoIsHiding = "Sam", whoIsLookingOut = "Robert")
		console.log(whoIsHiding + " asks " + whoIsLookingOut + " to cover him as they plan what their second attempt consists of.");
}; 

var makingPlanTwo = function(tool) {
	if (tool = "spycams") 
		console.log(me + " tells " + myFriend + " that he has a box of short range " + tool + ".");
	else if (tool = "binoculars")
		console.log(me + " tells " + myFriend + " that all he has is a pair of " + tool + ".");
	useOfTool = "So how will the " + tool + " be used to best help us solve this mystery?";
		return useOfTool;
}; 

var	useOfCameras = function(cameraNum) {
var	cameraNumbers = [1, 2, 3, 4],
	wherePlaced = ["north", "east", "south", "west"],
	camera = 1,
	cameraNum = cameraNumbers[cameraNum];
	console.log('So let\'s draw a map out of how we are going to do this.');
	while (camera <= cameraNumbers.length) {
		console.log("We will place camera number " + camera + " on the " + wherePlaced + " side of the " + locale);
	camera++;
	};
	plan = "That should help cover the lockers, maybe we should consider specific lockers?";
	return plan;
};

var	whatWeKnow = function(kids) {
var kidsWithValuables = ("Marcus, Rick, Chris, Michael, Brandon, Luke"),
	kidsHit = ("Michael, Brandon and Luke"),
 	kidsHitMultipleTimes =("Michael and Luke"),
	knowledge = "We know that " + kidsWithValuables + " bring there phones, tablets and games to school.";
	console.log("We know that " + kidsHit + " have already been stolen from.");
	console.log("We also know that " + kidsHitMultipleTimes + " have had their lockers broken into multiple times.");
	return knowledge
}; 

var	kidsLockersToWatch = function(min) {
var kidsHitMultipleTimes =("Michael and Luke"),
	needToWatch = ["Marcus", "Rick", "Chris", "Michael", "Brandon", "Luke"],
	lockernumber = [216, 321, 136, 112, 245, 301],
	minutesWatched = [30, 30, 30, 60, 30, 60],
	min = minutesWatched[min];
	watchPlan = "We will need to rotate where the camera's are recording.";
	console.log("We will divide the camera time with 2 of the camera's watching  " + kidsHitMultipleTimes + "'s lockers since they have been broken into multiple times already.");
	console.log("and dive the other 2 cameras between the other 4 lockers for 30 minutes apiece.") ;
	for (var i=0; i < needToWatch.length; i++) {
		console.log("We need to watch " + lockernumber[i] + " belonging to " + needToWatch[i] + " for " + minutesWatched[i] + " minutes from behind the bleachers so that we are within range.");
	};
	return watchPlan
}; 

attemptToStayHidden(me, myFriend); // procedure

tooled = makingPlanTwo("spycams"),
console.log(tooled); // bolean function

map = useOfCameras(1),
console.log(map); // number function

var known = whatWeKnow("Marcus, Rick, Chris, Michael, Brandon, Luke");
console.log(known) // string function

watch = kidsLockersToWatch(30, 30, 30, 60, 30, 60),
console.log(watch); //array function