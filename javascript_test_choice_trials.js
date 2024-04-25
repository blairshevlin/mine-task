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
        let rating = Math.round((Math.random() * 10) * 100) / 100;
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

let HVdf = [];
let MVdf = [];
let LVdf = [];

for (var i = 0; i <= food_ratings_df.id.length; i++) {
    if (food_ratings_df.val_cat[i] === 'HV') {
        HVdf.push( {id: food_ratings_df.id[i], image: food_ratings_df.image[i], rating: food_ratings_df.rating[i], val_cat: food_ratings_df.val_cat[i], nrepeat: 0});
    } else if (food_ratings_df.val_cat[i] === 'MV') {
        MVdf.push( {id: food_ratings_df.id[i], image: food_ratings_df.image[i], rating: food_ratings_df.rating[i], val_cat: food_ratings_df.val_cat[i], nrepeat: 0});
    } else if (food_ratings_df.val_cat[i] === 'LV') {
        LVdf.push( {id: food_ratings_df.id[i], image: food_ratings_df.image[i], rating: food_ratings_df.rating[i], val_cat: food_ratings_df.val_cat[i], nrepeat: 0});
    }
}

// Ranking for foods
HVdf.sort((a, b) => b.rating - a.rating);
MVdf.sort((a, b) => b.rating - a.rating);
LVdf.sort((a, b) => b.rating - a.rating);

for (var i = 0; i < HVdf.length; i++) {
    HVdf[i].ranking = (i+1);
}
for (var i = 0; i < MVdf.length; i++) {
    MVdf[i].ranking = (i+1);
}
for (var i = 0; i < LVdf.length; i++) {
    LVdf[i].ranking = (i+1);
}


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

// Shuffle array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to generate trials
function generateTrial(categoryList, desired_diff) {
    let maxRep = 5; // Maximum number of repeats per item
    let good = 0;
    categoryList = shuffleArray(categoryList);
    while (good == 0){
        for (let i = 0; i < categoryList.length; i++) {
            for (let j = i + 1; j < categoryList.length; j++) {
                let diff = Math.abs(categoryList[i].rating_round - categoryList[j].rating_round);
                if (diff == desired_diff) {
                    var nRepA = categoryList[i].nrepeat;
                    var nRepB = categoryList[j].nrepeat;
                    // check repeats
                    if (nRepA < maxRep && nRepB < maxRep ) {
                        tmp_trial = {
                            idA: categoryList[i].id,
                            idB: categoryList[j].id,
                            rating_diff: diff
                        };
                        // Increase number of repetions
                        categoryList[i].nrepeat++;
                        categoryList[j].nrepeat++;
                        return tmp_trial; 
                    } 
                }
            }
        }
        // If enough iterations have passed without filling list need to increase max repeat
        console.log("Max Hit")
        maxRep++;
    }

}

// Round item ratings to nearest 0.5
LVdf.forEach(item => {
    item.rating_round = Math.round(item.rating * 2) / 2;
});

MVdf.forEach(item => {
    item.rating_round = Math.round(item.rating * 2) / 2;
});

HVdf.forEach(item => {
    item.rating_round = Math.round(item.rating * 2) / 2;
});

// Settings
let nTrial = 45;
let minDiff = 0.5;
let maxDiff = 3;

// Holding trials
var LV_trial_list = [];
var MV_trial_list = [];
var HV_trial_list = [];

// Generate potential trials in MV condition to get distribution for other cats

// IDs
let MV_IDs = MVdf.map(a => a.id);
let HV_IDs = HVdf.map(a => a.id);
let LV_IDs = LVdf.map(a => a.id);

// Get all combinations
var MV_combos = MV_IDs.flatMap(
    (v, i) => MV_IDs.slice(i+1).map( w => [v, w] )
);

var HV_combos = HV_IDs.flatMap(
    (v, i) => HV_IDs.slice(i+1).map( w => [v, w] )
);

var LV_combos = LV_IDs.flatMap(
    (v, i) => LV_IDs.slice(i+1).map( w => [v, w] )
);

var MV_combos_shuffled = MV_combos
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

// Do something slightly different for LV and HV to get both IDs and VDs
let MV_combo_list = [];
let MV_count = 1;
for (var i = 0; i< MV_combos.length; i++) {

    var tmp_items = MV_combos[i];
    var tmp_itemA_idx = MVdf.findIndex(x => x.id ===tmp_items[0]);
    var tmp_itemB_idx = MVdf.findIndex(x => x.id ===tmp_items[1])
    var tmp_diff = Math.abs(MVdf[tmp_itemA_idx].rating_round - MVdf[tmp_itemB_idx].rating_round);
    // Make sure difference is within bounds
    if ( (tmp_diff < minDiff) || (tmp_diff > maxDiff) ) {
        continue;
    }
    MV_combo_list.push( {idA: tmp_items[0], idB: tmp_items[1], rating_diff: tmp_diff, match_id: MV_count});
    MV_count++;
}


let HV_combo_list = [];
let HV_count = 1;
for (var i = 0; i< HV_combos.length; i++) {

    var tmp_items = HV_combos[i];
    var tmp_itemA_idx = HVdf.findIndex(x => x.id ===tmp_items[0]);
    var tmp_itemB_idx = HVdf.findIndex(x => x.id ===tmp_items[1])
    var tmp_diff = Math.abs(HVdf[tmp_itemA_idx].rating_round - HVdf[tmp_itemB_idx].rating_round);
    // Make sure difference is within bounds
    if ( (tmp_diff < minDiff) || (tmp_diff > maxDiff) ) {
        continue;
    }
    HV_combo_list.push( {idA: tmp_items[0], idB: tmp_items[1], rating_diff: tmp_diff, match_id: HV_count});
    HV_count++;
}

let LV_combo_list = [];
let LV_count = 1;
for (var i = 0; i< LV_combos.length; i++) {

    var tmp_items = LV_combos[i];
    var tmp_itemA_idx = LVdf.findIndex(x => x.id ===tmp_items[0]);
    var tmp_itemB_idx = LVdf.findIndex(x => x.id ===tmp_items[1])
    var tmp_diff = Math.abs(LVdf[tmp_itemA_idx].rating_round - LVdf[tmp_itemB_idx].rating_round);
    // Make sure difference is within bounds
    if ( (tmp_diff < minDiff) || (tmp_diff > maxDiff) ) {
        continue;
    }
    LV_combo_list.push( {idA: tmp_items[0], idB: tmp_items[1], rating_diff: tmp_diff, match_id : LV_count});
    LV_count++;
}


// Try to get an even split of differences
let rating_diff_list = []
let max_num_of_diff = [];
let list_of_differences = [{diff: 0.5, maxN: 0, unique: 0},
    {diff: 1.0, maxN: 0, unique: 0},
    {diff: 1.5, maxN: 0, unique: 0},
    {diff: 2, maxN: 0, unique: 0},
    {diff: 2.5, maxN: 0, unique: 0}];

// To make sure there are enough in each value-difference category
for (i = 0; i < list_of_differences.length; i++) {

    var thisDiff = list_of_differences[i].diff;
    var tmp_diff_LV = LV_combo_list.filter(a => a.rating_diff == thisDiff);
    var tmp_diff_MV = MV_combo_list.filter(a => a.rating_diff == thisDiff);
    var tmp_diff_HV = HV_combo_list.filter(a => a.rating_diff == thisDiff);

    // Across all value categories, determine how many possible combinations are possible
    var tmp_max = Math.min(tmp_diff_LV.length,tmp_diff_MV.length,tmp_diff_HV.length);

    // Unique IDs
    var unique_LV = [];
    var unique_MV = [];
    var unique_HV = [];
    for (j=0;j<tmp_diff_LV.length;j++) {
        unique_LV.push(tmp_diff_LV[j].idA);
        unique_LV.push(tmp_diff_LV[j].idB);

    }
    unique_LV = [...new Set(unique_LV)];

    for (j=0;j<tmp_diff_MV.length;j++) {
        unique_MV.push(tmp_diff_MV[j].idA);
        unique_LV.push(tmp_diff_MV[j].idB);

    }
    unique_MV = [...new Set(unique_MV)];

    for (j=0;j<tmp_diff_HV.length;j++) {
        unique_HV.push(tmp_diff_HV[j].idA);
        unique_HV.push(tmp_diff_HV[j].idB);

    }
    unique_HV = [...new Set(unique_HV)];

    var tmp_unique = {LV: unique_LV,
                    MV: unique_MV,
                   HV: unique_HV};

    list_of_differences[i].maxN = tmp_max;
    list_of_differences[i].unique = tmp_unique;

}

// Number of trials to generate per value-difference
// Start out with an equal number across difficulty levels
var n_trial_per_diff = [
    nTrial/list_of_differences.length, // 0.5
    nTrial/list_of_differences.length, // 1.0
    nTrial/list_of_differences.length, // 1.5
    nTrial/list_of_differences.length, // 2.0
    nTrial/list_of_differences.length  // 2.5
];

var check = 0;
// Make sure each difference has trials in each value categoryu
while (check == 0) {
    var nCheck = 0;
    for (i=0;i<n_trial_per_diff.length;i++) {
        list_of_differences[i].maxN;
        // If the number of trials per difference is less than maxN, then we good
        if (n_trial_per_diff[i] <= list_of_differences[i].maxN) {
            nCheck++;
        } else {
            // Otherwise, remove a trial and place it elsewhere
            n_trial_per_diff[i] = n_trial_per_diff[i] - 1;
            if(i==0) {
                n_trial_per_diff[i] = n_trial_per_diff[i] - 1;
                n_trial_per_diff[i+1] =  n_trial_per_diff[i+1] + 1;
                i=-1; continue;
            } else {
                n_trial_per_diff[i] = n_trial_per_diff[i] - 1;
                n_trial_per_diff[i-1] =  n_trial_per_diff[i-1] + 1;
                i=-1; continue;
            }
        }
    }
    // If all differences meet criteria, break loop
    if (nCheck == n_trial_per_diff.length) {
        check = 1;
    }
}
//console.log(n_trial_per_diff)
//console.log(list_of_differences)

// Generate trials
for (var i=0;i<list_of_differences.length;i++){
    var potential_diff = list_of_differences[i].diff;
    for (var j=0;j<=n_trial_per_diff[i];j++) {
        var tmp_lv = generateTrial(LVdf,potential_diff);

        var tmp_mv = generateTrial(MVdf,potential_diff);

        var tmp_hv = generateTrial(HVdf,potential_diff);

        LV_trial_list.push(tmp_lv)
        MV_trial_list.push(tmp_mv)
        HV_trial_list.push(tmp_hv)
    }
}

// Check on number of each
/*
console.log(list_of_differences[0].maxN)
console.log(list_of_differences[1].maxN)
console.log(list_of_differences[2].maxN)
console.log(list_of_differences[3].maxN)
console.log(list_of_differences[4].maxN)
*/

// Now fill dataframes with actual trial info

let foodDF = [];

var nT = 45;

for (i=0;i<=nT;i++) {
    var tmp_items = LV_trial_list[i];
    var tmp_itemA_idx = LVdf.findIndex(x => x.id ===tmp_items['idA']) ;
    var tmp_itemB_idx = LVdf.findIndex(x => x.id ===tmp_items['idB']) ;
    
    var tmp_trial = {trial:(i+1), val_cat: 'LV', 
                item_a_img: LVdf[tmp_itemA_idx]['image'],
                item_b_img: LVdf[tmp_itemB_idx]['image'],
                item_a_rating: LVdf[tmp_itemA_idx]['rating'],
                item_b_rating: LVdf[tmp_itemB_idx]['rating'],
                rating_diff: tmp_items['rating_diff'] };

    foodDF.push(tmp_trial);

}

for (i=0;i<=nT;i++) {
    var tmp_items = MV_trial_list[i];
    var tmp_itemA_idx = MVdf.findIndex(x => x.id ===tmp_items['idA']) ;
    var tmp_itemB_idx = MVdf.findIndex(x => x.id ===tmp_items['idB']) ;
    
    var tmp_trial = {trial:(i+1), val_cat: 'MV', 
                item_a_img: MVdf[tmp_itemA_idx]['image'],
                item_b_img: MVdf[tmp_itemB_idx]['image'],
                item_a_rating: MVdf[tmp_itemA_idx]['rating'],
                item_b_rating: MVdf[tmp_itemB_idx]['rating'],
                rating_diff: tmp_items['rating_diff'] };

    foodDF.push(tmp_trial);

}

for (i=0;i<=nT;i++) {
    var tmp_items = HV_trial_list[i];
    var tmp_itemA_idx = HVdf.findIndex(x => x.id ===tmp_items['idA']) ;
    var tmp_itemB_idx = HVdf.findIndex(x => x.id ===tmp_items['idB']) ;
   // if (i %%)
    
    var tmp_trial = {trial:(i+1), val_cat: 'HV', 
                item_a_img: HVdf[tmp_itemA_idx]['image'],
                item_b_img: HVdf[tmp_itemB_idx]['image'],
                item_a_rating: HVdf[tmp_itemA_idx]['rating'],
                item_b_rating: HVdf[tmp_itemB_idx]['rating'],
                rating_diff: tmp_items['rating_diff'] };

    foodDF.push(tmp_trial);

}
console.log(foodDF.length)


/// Find where this problem is

