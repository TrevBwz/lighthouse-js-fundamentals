const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  for (let i of keys) {
    if (i === trash) {
    bins[i]++;
    }
  }
  return (bins);
};


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });



// version 2

function smartGarbage(trash, bins){

  if (trash.includes("recycling")) {
  bins.recycling ++;
  }
  else if (trash.includes('waste')) {
  bins.waste ++;
  }
  
  else if (trash.includes('compost')) {
  bins.compost ++;
  }
  else {
    return;
    
    }
    return (bins);
    
    }
    console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));

    // will return the correct..
    // {waste: 4, recycling: 3, compost: 5}