// so this is judging vegetables based on the second item in the function (metric).  So in the example..

const judgeVegetable = function (vegetables, metric) {
  let maxRate = 0;
  
  let submitterName = '';


  for( let i = 0 ; i < vegetables.length ; i++){ //this for loop runs through the  vegetables.

    if(vegetables[i][metric] > maxRate){
            maxRate = vegetables[i][metric]; 
            
            //so.. maxRate will equal the metric number in vegetables list.  
            // in the 'if' says that it will pick the highest metric number in the vegetable list and save that as the maxRate.
            

      submitterName = vegetables[i]["submitter"];
            //This will output only the submitters name of who was the highest.

    }
  }
  return submitterName;

}

// question starts here.. had to code for this answer.  You can change the metric and will judge off a different metric and give a different answer.

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

// this is metric that was being judged.  If change would be different answer.

const metric = 'redness'

judgeVegetable(vegetables, metric)


//Return 'Old Man Franklin;