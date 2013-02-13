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
	numOfThieves = 5,
	timePerLocker = [30, 30, 30, 60, 30, 60];


var attemptToStayHidden = function(whoIsHiding, whoIsLookingout){
	if (whoIsHiding = "Robert", whoIsLookingOut = "Sam")
		console.log(whoIsHiding + " asks " + whoIsLookingOut + " to cover him as they plan what their second attempt consists of.");
	else if (whoIsHiding = "Sam", whoIsLookingOut = "Robert")
		console.log(whoIsHiding + " asks " + whoIsLookingOut + " to cover him as they plan what their second attempt consists of.");
}; // procedure

var makingPlanTwo = function(spycams) {
	console.log(myFriend + " asks if it is true that we have spycams and " + me + " tells him that it is " + spycams + ".");
	if (spycams = true) 
		console.log(me + " tells " + myFriend + " that he has a box of short range spycams.");
	else if (spycams = false)
		console.log(me + " tells " + myFriend + " that all he has is a pair of binoculars.");
	useOfTool = "Since It is " + spycams + " that we have spycams we need to make a plan how to use what we have."
	return useOfTool; 
}; //bolean function

var	useOfCameras = function(cameraNum) {
var	cameraNumbers = [1, 2, 3, 4],
	wherePlaced = ["north", "east", "south", "west"],
	camera = 1,
	cameraTotal = 4
	console.log('So let\'s draw a map out of how we are going to do this.');
	while (camera <= cameraNumbers.length) {
		console.log("We will place camera number " + camera + " on the " + wherePlaced + " side of the " + locale);
	camera++;
	};
	console.log("That should help cover the lockers, maybe we should consider specific lockers?");
	plan = "That makes " + 4 + " cameras total in use.";
	return plan; // number function
};

var	whatWeKnow = function(kidsWithValuablesAtSchool) {
var kidsHit = ("Michael, Brandon and Luke"),
 	kidsHitMultipleTimes =("Michael and Luke"),
	knowledge = "We know that " + kidsWithValuablesAtSchool + " bring there phones, tablets and games to school.";
	console.log("We know that " + kidsHit + " have already been stolen from.");
	console.log("We also know that " + kidsHitMultipleTimes + " have had their lockers broken into multiple times.");
	return knowledge; // string function
}; 

var	kidsLockersToWatch = function([timePerLocker]) {
var kidsHitMultipleTimes =("Michael and Luke"),
	needToWatch = ["Marcus", "Rick", "Chris", "Michael", "Brandon", "Luke"],
	lockernumbers = [216, 321, 136, 112, 245, 301];
	console.log("We will need to rotate where the camera's are recording.");
	console.log("We will divide the camera time with 2 of the camera's watching  " + kidsHitMultipleTimes + "'s lockers since they have been broken into multiple times already.");
	console.log("and dive the other 2 cameras between the other 4 lockers for 30 minutes apiece.") ;
	for (var i=0; i < needToWatch.length; i++) {
	console.log("We need to watch " + lockernumbers[i] + " belonging to " + needToWatch[i] + " for " + [timePerLocker[i]] + " minutes from behind the bleachers so that we are within range.");
	};
	watchPlan = 'we are using ' + 60 + ' minutes per camera for locker numbers ' + lockernumbers + '.';
	return watchPlan; // array function
}; 

attemptToStayHidden(me, myFriend); // procedure

tooled = makingPlanTwo(true),
console.log(tooled); // bolean function

map = useOfCameras(1),
console.log(map); // number function

known = whatWeKnow("Marcus, Rick, Chris, Michael, Brandon, Luke");
console.log(known); // string function

watch = kidsLockersToWatch([timePerLocker]);
console.log(watch); //array function