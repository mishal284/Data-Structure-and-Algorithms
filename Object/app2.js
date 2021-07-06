let userObjects = {
	userName: 'Philip',
	fatherName: 'Norman',
	className: 'four',
};
  userObjects.userName = "Mishal Iftikhar";
  userObjects.fatherName = "Iftikhar Hussain";
  userObjects.className= "Web development course";
  
for (let x in userObjects) {
  console.log(userObjects[x]);
  
}