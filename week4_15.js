function highestScore (students) {
  if(students.length === undefined){
    return {}
  }
    result = {}

    for(i=0;i < students.length ; i++){
      if(!(students[i].class in result)){
        result[students[i].class] = {}
      }
    }

    for(i=0;i < students.length ; i++){
      var tmp = {}
      //console.log(i)
      if(i === 0){
        tmp["name"] = students[i].name
        tmp["score"] = students[i].score
        result[students[i].class] = tmp
      }else{
        //console.log(students[i].class)
        if(result[students[i].class].score !== undefined){
          //console.log("not")
          if(students[i].score > result[students[i].class].score){
            tmp["name"] = students[i].name
            tmp["score"] = students[i].score
            result[students[i].class] = tmp
          }
        }else{
          tmp["name"] = students[i].name
          tmp["score"] = students[i].score
          result[students[i].class] = tmp
        }
      }
    }
return result;
  }
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}