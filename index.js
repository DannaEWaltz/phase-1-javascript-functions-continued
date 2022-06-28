function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    function innerFunction(adj = "special") {
        let result = wrapAdjective("*");
        let emphatic = result("a hard worker");
        return `You are ${flair} ${adj} ${flair}!`;
    }
}
wrapAdjective();