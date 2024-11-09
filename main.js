// declare all variables to calculate the day of the week
let day = 0
let month = 0
let year = 0
let dOTW = 0
let sum = 0
let keyNum = 0

// declare variables for random message when invalid input
let badInput = 0
let rdm = 0

// checks for the day of the week
function checker(){
    // grab d/m/y from text boxes
    day = Number(document.getElementById("day").value)
    month = Number(document.getElementById("month").value)
    year = Number(document.getElementById("year").value)

    // checks for if any invalid inputs are put in & sends messages
    if (day > 31 || day < 1 || month > 12 || month < 1 || year < 1753){
        rdm = Math.floor(Math.random() * (4 - 1 + 1) + 1)
        badInput++

        if(badInput == 10){  
            document.getElementById("whatDay").innerHTML = "You're doing this on purpose aren't you? TEN. WHOLE. TIMES. Gotta wonder what level your reading skills are."
        }else{
            switch(rdm){
                case 1:
                    document.getElementById("whatDay").innerHTML = "So we aren't able to listen to simple instructions?"
                    break;
                case 2:
                    document.getElementById("whatDay").innerHTML = "What gives!? Enter a valid date!"
                    break;
                case 3:
                    document.getElementById("whatDay").innerHTML = "Try harder to put valid inputs... This isn't rocket science."
                    break;
                case 4:
                    document.getElementById("whatDay").innerHTML = "Why is it so difficult to do such a simple task? Valid inputs. Please."
                    break;
            }
        }
    }else{ // calculates and outputs the day
        sum = theSum()
        dOTW = dayChecker()

        document.getElementById("whatDay").innerHTML = `${day}/${month}/${year} is ${dOTW}`
    }
}

// checks key number for the month
function monthChecker(){
    // checks if leap year
    if(year % 4 == 0){
        if(month == 1){
            keyNum = 0
        }else if(month == 2){
           keyNum = 3
        }else if(month == 10){
            keyNum = 1
        }else if(month == 3 || month == 11){
            keyNum = 4
        }else if(month == 4 || month == 7){
            keyNum = 0
        }else if(month == 5){
            keyNum = 2
        }else if(month == 6){
            keyNum = 5
        }else if(month == 8){
            keyNum = 3
        }else if(month == 9 || month == 12){
            keyNum = 6
        }
    }else{
        if(month == 1 || month == 10){
            keyNum = 1
        }else if(month == 2 || month == 3 || month == 11){
            keyNum = 4
        }else if(month == 4 || month == 7){
            keyNum = 0
        }else if(month == 5){
            keyNum = 28
        }else if(month == 6){
            keyNum = 5
        }else if(month == 8){
            keyNum = 3
        }else if(month == 9 || month == 12){
            keyNum = 6
        }
    }

    return(keyNum)
}

// calculates the sum
function theSum(){
    keyNum = monthChecker()

    lastTwo = year % 100

    sum = Math.floor(lastTwo / 4) + lastTwo + day + keyNum
    sum = yearChecker()

    return(sum)
}

// checks the year to see if you have to add or subtract from the sum
function yearChecker(){
    if(year >= 2000 < 2100){
        x = sum - 1
    }else if(year < 1900){
        x = sum + 2
    }else if(year < 1800){
        x = sum + 4
    }else{
        x = sum + 0
    }

    return(x)
}

// checks for the day of the week
function dayChecker(){
    r = sum % 7

    if(r == 0){
        dOTW = "Saturday"
    }else if(r == 1){
        dOTW = "Sunday"
    }else if(r == 2){
        dOTW = "Monday"
    }else if(r == 3){
        dOTW = "Tuesday"
    }else if(r == 4){
        dOTW = "Wednesday"
    }else if(r == 5){
        dOTW = "Thursday"
    }else if(r == 6){
        dOTW = "Friday"
    }

    return(dOTW)
}

