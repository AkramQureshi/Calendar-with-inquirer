import inquirer from "inquirer";
async function main() {
    const calmonth = await inquirer.prompt([
        {
            message: "Select Date from Choice List...:",
            type: "list",
            name: "dateList",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", 31],
        },
        {
            message: "Select Month from Choice List...:",
            type: "list",
            name: "monthList",
            choices: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        {
            message: "Select Year from Choice List...:",
            type: "list",
            name: "yearList",
            choices: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        },
    ]);
    let date = calmonth.dateList;
    let month = calmonth.monthList;
    let year = calmonth.yearList;
    console.log("--------------------------------------------");
    console.log("You Selected a Date from the List: ", date);
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log("You Selected a Month from the List: ", month);
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log("You Selected a Year from the List: ", year);
    console.log("--------------------------------------------");
    console.log("----------------------------------------------");
    console.log("You Selected : ", date, "-", month, "-", year);
    console.log("----------------------------------------------");
}
function calfunc(month) {
}
main();
