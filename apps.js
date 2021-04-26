//Q1
var studentNamesLit= ["Student 1","Student 2","Student 3","Student 4","Student 5","Student 6"]

//Q2
var studentNameObject = []

//Q3
var stringArray = ["String array 1","String array 2","String array 3","String array 4"]

//Q4
var numberArray = [1,2,3,4,5,6]

//Q5
//did not learn Boolean array


//Q6
var mixedArray = [1,"Farhan",5,"Karachi",45,"House"]

//Q7
var Qualification = ["1) SSC","2) HSC","3) BCS","4) BS", "5) BCOM", "6) MS", "7) M.Phil", "8) PhD"]

document.write("<h2> Qualifications: </h2>")
document.write(Qualification[0],"<br>",Qualification[1],"<br>",Qualification[2],"<br>",Qualification[3],"<br>",Qualification[4],"<br>",Qualification[5],"<br>",Qualification[6],"<br>",Qualification[7]+"<br><br><br><Br>")



//Q8
var stdNames = ["Amir","Liaquat","John"]
var stdScores= [357,400,300]

document.write("Score of "+stdNames[0]+" is "+stdScores[0]+". Percentage: "+(stdScores[0]/500)*100+"%<Br>")
document.write("Score of "+stdNames[1]+" is "+stdScores[1]+". Percentage: "+(stdScores[1]/500)*100+"%<br>")
document.write("Score of "+stdNames[2]+" is "+stdScores[2]+". Percentage: "+(stdScores[2]/500)*100+"%<br><br><br><br><br>")


//Q9 
var colorNames = ["Red","Green","Blue"]
document.write(colorNames[0]+"<br>",colorNames[1]+"<br>",colorNames[2]+"<br><br><br>")

//a
var colorInputBeg = prompt("What color do you want to add in the beginning?")
colorNames.unshift(colorInputBeg)
document.write(colorNames[0]+"<br>",colorNames[1]+"<br>",colorNames[2]+"<br>",colorNames[3]+"<br><br><br>")

//b
var colorInputEnd = prompt("What color do you want to add at the end?")
colorNames.push(colorInputEnd)
document.write(colorNames[0]+"<br>",colorNames[1]+"<br>",colorNames[2]+"<br>",colorNames[3]+"<br>",colorNames[4]+"<br><br><br>")

//c
var colorInputBeg = prompt("What color do you want to add in the beginning?")
colorNames.unshift(colorInputBeg)
var colorInputBeg = prompt("What color do you want to add in the beginning?")
colorNames.unshift(colorInputBeg)
document.write(colorNames[0]+"<br>",colorNames[1]+"<br>",colorNames[2]+"<br>",colorNames[3]+"<br>",colorNames[4]+"<br>",colorNames[5]+"<br>",colorNames[6]+"<br><br><br>")

//d
colorNames.shift()
document.write(colorNames[0]+"<br>",colorNames[1]+"<br>",colorNames[2]+"<br>",colorNames[3]+"<br>",colorNames[4]+"<br>",colorNames[5],"<br><br><br>")

//e
colorNames.pop()
document.write(colorNames[0]+"<br>",colorNames[1]+"<br>",colorNames[2]+"<br>",colorNames[3]+"<br>",colorNames[4,"<br><br><br>")

