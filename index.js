// Your code here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}

const activity = "bathe my dog"


function mondayWork ( activity1 = "go to the office") {
  return (`This Monday, I will ${activity1}.`)
}

const activity1 = "work from home"



function wrapAdjective(typeEncourage = "*") {
    return function inner (quote = "special") {
        return (`You are ${typeEncourage}${quote}${typeEncourage}!`)
    }
}

wrapAdjective("%")("a dedicated programmer");