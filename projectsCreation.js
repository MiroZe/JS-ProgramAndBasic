function projectsCreation(input) {
let architectName = input[0];
let pcsprojects = Number(input[1]);
let prjct = 3
let totalHrs = Number(prjct * pcsprojects)

console.log( `The architect ${architectName} will need ${totalHrs} hours to complete ${pcsprojects} project/s.` )

}
projectsCreation(["Sanya",9])