console.log(`=========================ifelse grade=================================`);

var voteEligible = function (age) {
    var result = +age;
    if (age==0 || age<0 || age>=130 || age==null || isNaN(result)) {
        console.log(`invalid data : ${age}`);
    } else {
        if (age<18) {
            console.log(`you are age ${age} is note eligible for vote `);
        } else {
            console.log(`you are age ${age} is eligible for vote`);
        }
    }

}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);











