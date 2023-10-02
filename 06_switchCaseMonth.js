console.log(`=====================switchCaseMonth========================`);

var monthOfYear = function (monthNum) {
  switch (monthNum) {
    case 1:
      console.log(`january`);
      break;
    case 2:
      console.log(`february`);
      break;
    case 3:
      console.log(`march`);
      break;
    case 4:
      console.log(`april`);
      break;
    case 5:
      console.log(`may`);
      break;
    case 6:
      console.log(`Jun`);
      break;
    case 7:
      console.log(`July`);
      break;
    case 8:
      console.log(`August`);
      break;
    case 9:
      console.log(`september`);
      break;
    case 10:
      console.log(`october`);
      break;
    case 11:
      console.log(`November`);
      break;
    case 12:
      console.log(`December`);
      break;

    default:
      console.log(`Invalid data : ${monthNum}`);
      break;
  }
};
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
