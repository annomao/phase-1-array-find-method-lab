// code your solution here
function superbowlWin(record){
  const recordResult = record.find(recordObj=> recordObj.result == "W")
  if (recordResult === undefined){
    //return nothing which is equivalent to undefined
    //find a better solution
  }
  else{
    return recordResult.year;
  }
}
