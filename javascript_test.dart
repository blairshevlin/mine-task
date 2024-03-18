foods = [
'stimuli/food/1%milk.jpg',
'stimuli/food/air popcorn.jpg',
'stimuli/food/american cheese.jpg',
'stimuli/food/apple slices.jpg',
'stimuli/food/avacado.jpg',
'stimuli/food/baby cheese.jpg',
'stimuli/food/bagel and cc.jpg',
'stimuli/food/bagel plain.jpg',
'stimuli/food/baguette oil.jpg',
'stimuli/food/baked potato.jpg',
'stimuli/food/banana.jpg',
'stimuli/food/broccoli cauliflower.jpg',
'stimuli/food/brownie.jpg',
'stimuli/food/burger.jpg',
'stimuli/food/celery and carrot sticks.jpg',
'stimuli/food/Cheese nachos.jpg',
'stimuli/food/cherries.jpg',
'stimuli/food/cherry tomato.jpg',
'stimuli/food/chicken nuggets2.jpg',
'stimuli/food/cookies.jpg',
'stimuli/food/corn cob.jpg',
'stimuli/food/cucumber slices.jpg',
'stimuli/food/cupcakes am.jpg',
'stimuli/food/doughnuts.jpg',
'stimuli/food/eggs.jpg',
'stimuli/food/french fries.jpg',
'stimuli/food/fried eggs.jpg',
'stimuli/food/froot loops w milk.jpg',
'stimuli/food/granola w milk.jpg',
'stimuli/food/Grapes.jpg',
'stimuli/food/green beans.jpg',
'stimuli/food/grilled cheese.jpg',
'stimuli/food/grilled chicken strips.jpg',
'stimuli/food/Hershey Kisses.jpg',
'stimuli/food/hotdog w must.jpg',
'stimuli/food/ice cream sundae 002.jpg',
'stimuli/food/kiwi.jpg',
'stimuli/food/lollipops.jpg',
'stimuli/food/m_and_m.jpg',
'stimuli/food/mac & cheese.jpg',
'stimuli/food/mashed potato.jpg',
'stimuli/food/mini muffins.jpg',
'stimuli/food/mozarella sticks.jpg',
'stimuli/food/mushrooms.jpg',
'stimuli/food/orange slices.jpg',
'stimuli/food/PB.jpg',
'stimuli/food/peaches.jpg',
'stimuli/food/pickles.jpg',
'stimuli/food/pizza.jpg',
'stimuli/food/Pretzels.jpg',
'stimuli/food/raisin bran w milk.jpg',
'stimuli/food/raisins.jpg',
'stimuli/food/reeses.jpg',
'stimuli/food/rice cakes.jpg',
'stimuli/food/rigatoni and sauce.jpg',
'stimuli/food/rigatoni.jpg',
'stimuli/food/ritz.jpg',
'stimuli/food/salad w chicken.jpg',
'stimuli/food/saltines.jpg',
'stimuli/food/seaweed.jpg',
'stimuli/food/Skim milk.jpg',
'stimuli/food/soup with spoon.jpg',
'stimuli/food/sour patch.jpg',
'stimuli/food/soy chips.jpg',
'stimuli/food/steak.jpg',
'stimuli/food/strawberries.jpg',
'stimuli/food/string cheese.jpg',
'stimuli/food/sushi w_condiments.jpg',
'stimuli/food/tacos.jpg',
'stimuli/food/trail mix.jpg',
'stimuli/food/Tribe humus pita.jpg',
'stimuli/food/turkey sandwich.jpg',
'stimuli/food/Whole milk.jpg',
'stimuli/food/yellow popcorn.jpg',
'stimuli/food/yogurt no spoon.jpg',
'stimuli/food/yogurt pretzels.jpg'];

foodlen = foods.length;

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};


food_ratings_df = {"id": [], "image": [], "rating": [], "val_cat": [], "nrepeat": []};
num_rows = foodlen;
for (var i, _pj_c = 0, _pj_a = range(foodlen), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
    i = _pj_a[_pj_c];
    food_ratings_df["id"].push((i + 1));
    food_ratings_df["image"].push(foods[i]);
    let rating = Math.round((Math.random() * 11), 2);
    food_ratings_df["rating"].push(rating);
    if ((rating <= 3.33)) {
        food_ratings_df["val_cat"].push("LV");
    } else {
        if ((rating >= 6.67)) {
            food_ratings_df["val_cat"].push("HV");
        } else {
            food_ratings_df["val_cat"].push("MV");
        }
    }
    food_ratings_df["nrepeat"].push(0);
};



let HVdf = {
  "id": [],
  "image": [],
  "rating": [],
  "val_cat": [],
  "nrepeat": []
};

let MVdf = {
  "id": [],
  "image": [],
  "rating": [],
  "val_cat": [],
  "nrepeat": []
};

let LVdf = {
  "id": [],
  "image": [],
  "rating": [],
  "val_cat": [],
  "nrepeat": []
};

for (var i = 0; i <= food_ratings_df.id.length; i++) {
  if (food_ratings_df.val_cat[i] === 'HV') {
    HVdf.id.push(food_ratings_df.id[i]);
    HVdf.image.push(food_ratings_df.image[i]);
    HVdf.rating.push(food_ratings_df.rating[i]);
    HVdf.val_cat.push(food_ratings_df.val_cat[i]);
    HVdf.nrepeat.push(food_ratings_df.nrepeat[i]);
  } else if (food_ratings_df.val_cat[i] === 'MV') {
    MVdf.id.push(food_ratings_df.id[i]);
    MVdf.image.push(food_ratings_df.image[i]);
    MVdf.rating.push(food_ratings_df.rating[i]);
    MVdf.val_cat.push(food_ratings_df.val_cat[i]);
    MVdf.nrepeat.push(food_ratings_df.nrepeat[i]);
  } else if (food_ratings_df.val_cat[i] === 'LV') {
    LVdf.id.push(food_ratings_df.id[i]);
    LVdf.image.push(food_ratings_df.image[i]);
    LVdf.rating.push(food_ratings_df.rating[i]);
    LVdf.val_cat.push(food_ratings_df.val_cat[i]);
    LVdf.nrepeat.push(food_ratings_df.nrepeat[i]);
  }
}

// Ranking for high-value foods
HVdf.ranking = HVdf.rating.map(function(value, index, arr) {
  var rank = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > value || (arr[i] === value && i < index)) {
      rank++;
    }
  }
  return rank;
});

// Ranking for mid-value foods
MVdf.ranking = MVdf.rating.map(function(value, index, arr) {
  var rank = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > value || (arr[i] === value && i < index)) {
      rank++;
    }
  }
  return rank;
});

// Ranking for low-value goods
LVdf.ranking = LVdf.rating.map(function(value, index, arr) {
  var rank = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > value || (arr[i] === value && i < index)) {
      rank++;
    }
  }
  return rank;
});

// Function to calculate the absolute difference between two values
function absDiff(a, b) {
    return Math.abs(a - b);
  }
  
// Function to find the intersection of two arrays
function intersect(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value));
}

// Helper function to get a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Helper function for median
function median(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
}

// Other necessary variables
var foodDF = []; // Equivalent of the final DataFrame in Python

// Implementation of the provided Python code in JavaScript

var got_em = 0;
var jitterHV = 0;
var jitterMV = 0;
var jitterLV = 0;
var iteration = 0;


while (got_em === 0) {
    iteration++;
    console.log(iteration);
    // Protect jitter from going beyond the bounds of the median value
    var maxJitterHV = HVdf.ranking.length / 2;
    var maxJitterMV = MVdf.ranking.length / 2;
    var maxJitterLV = LVdf.ranking.length / 2;
  
    if (Math.abs(jitterHV) > maxJitterHV) {
      jitterHV = getRandomInt(-maxJitterHV, maxJitterHV);
    }
    if (Math.abs(jitterMV) > maxJitterMV) {
      jitterMV = getRandomInt(-maxJitterMV, maxJitterMV);
    }
    if (Math.abs(jitterLV) > maxJitterLV) {
      jitterLV = getRandomInt(-maxJitterLV, maxJitterLV);
    }
  
    // Median trials
    var medianHV = HVdf.ranking.find((rank) => rank === Math.round(median(HVdf.ranking) + jitterHV));
    if (!medianHV) {
      jitterHV += getRandomInt(-4, 4);
      continue;
    }
    var medianMV = MVdf.ranking.find((rank) => rank === Math.round(median(MVdf.ranking) + jitterMV));
    if (!medianMV) {
      jitterMV += getRandomInt(-4, 4);
      continue;
    }
    var medianLV = LVdf.ranking.find((rank) => rank === Math.round(median(LVdf.ranking) + jitterLV));
    if (!medianLV) {
      jitterLV += getRandomInt(-4, 4);
      continue;
    }
  
    // Values of median trial
    var medHV = HVdf.rating[HVdf.ranking.indexOf(medianHV)];
    var medMV = MVdf.rating[MVdf.ranking.indexOf(medianMV)];
    var medLV = LVdf.rating[LVdf.ranking.indexOf(medianLV)];
  
    // Trials below/above median
    var lowerHV = HVdf.ranking
        .filter((rank) => rank > Math.round(median(HVdf.ranking)))
        .sort((a, b) => b - a);
    var upperHV = HVdf.ranking
        .filter((rank) => rank < Math.round(median(HVdf.ranking)))
        .sort((a, b) => a - b);

    var lowerMV = MVdf.ranking
        .filter((rank) => rank > Math.round(median(MVdf.ranking)))
        .sort((a, b) => b - a);
    var upperMV = MVdf.ranking
        .filter((rank) => rank < Math.round(median(MVdf.ranking)))
        .sort((a, b) => a - b);

    var lowerLV = LVdf.ranking
        .filter((rank) => rank > Math.round(median(LVdf.ranking)))
        .sort((a, b) => b - a);
    var upperLV = LVdf.ranking
        .filter((rank) => rank < Math.round(median(LVdf.ranking)))
        .sort((a, b) => a - b);
  
    // Similar implementations for lowerMV, upperMV, lowerLV, and upperLV
  
    // Subtract each value from the median to create a difference score for later matching
    var lowerHVdiff = lowerHV.map((rank) => absDiff(HVdf.rating[HVdf.ranking.indexOf(rank)], medHV));
    var upperHVdiff = upperHV.map((rank) => absDiff(HVdf.rating[HVdf.ranking.indexOf(rank)], medHV));

    var lowerMVdiff = lowerMV.map((rank) => absDiff(MVdf.rating[MVdf.ranking.indexOf(rank)], medMV));
    var upperMVdiff = upperMV.map((rank) => absDiff(MVdf.rating[MVdf.ranking.indexOf(rank)], medMV));

    var lowerLVdiff = lowerLV.map((rank) => absDiff(LVdf.rating[LVdf.ranking.indexOf(rank)], medLV));
    var upperLVdiff = upperLV.map((rank) => absDiff(LVdf.rating[LVdf.ranking.indexOf(rank)], medLV));
  
    // Similar implementations for lowerMVdiff, upperMVdiff, lowerLVdiff, and upperLVdiff
  
    // Find the intersection of VDs
    var intersect_value_HV = intersect(lowerHVdiff, upperHVdiff);
    if (intersect_value_HV.length === 0) {
      jitterHV += getRandomInt(-4, 4);
      continue;
    }
    var intersect_value_MV = intersect(lowerMVdiff, upperMVdiff);
    if (intersect_value_MV.length === 0) {
      jitterMV += getRandomInt(-4, 4);
      continue;
    }
    var intersect_value_LV = intersect(lowerLVdiff, upperLVdiff);
    if (intersect_value_LV.length === 0) {
      jitterLV += getRandomInt(-4, 4);
      continue;
    }

  
    var intersect_all = intersect(intersect_value_HV, intersect_value_MV);
    if (intersect_all.length === 0) {
      var jitt_r = getRandomInt(1, 3);
      if (jitt_r === 1) {
        jitterLV += getRandomInt(-4, 4);
      } else if (jitt_r === 2) {
        jitterMV += getRandomInt(-4, 4);
      } else {
        jitterHV += getRandomInt(-4, 4);
      }
      continue;
    }
  
    // High-value, Middle-value, and Low-value implementations similar to Python
  
    if (foodDF.length === 9) {
      got_em = 1;
    }
  }
  
  console.log(foodDF);
  
