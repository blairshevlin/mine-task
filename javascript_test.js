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

       // HVdf.id.push(food_ratings_df.id[i]);
        //HVdf.image.push(food_ratings_df.image[i]);
        //HVdf.rating.push(food_ratings_df.rating[i]);
        //HVdf.val_cat.push(food_ratings_df.val_cat[i]);
        //HVdf.nrepeat.push(food_ratings_df.nrepeat[i]);
    } else if (food_ratings_df.val_cat[i] === 'MV') {
        MVdf.push( {id: food_ratings_df.id[i], image: food_ratings_df.image[i], rating: food_ratings_df.rating[i], val_cat: food_ratings_df.val_cat[i], nrepeat: 0});

       // MVdf.id.push(food_ratings_df.id[i]);
        //MVdf.image.push(food_ratings_df.image[i]);
        //MVdf.rating.push(food_ratings_df.rating[i]);
        //MVdf.val_cat.push(food_ratings_df.val_cat[i]);
        //MVdf.nrepeat.push(food_ratings_df.nrepeat[i]);
    } else if (food_ratings_df.val_cat[i] === 'LV') {
        LVdf.push( {id: food_ratings_df.id[i], image: food_ratings_df.image[i], rating: food_ratings_df.rating[i], val_cat: food_ratings_df.val_cat[i], nrepeat: 0});

       // LVdf.id.push(food_ratings_df.id[i]);
        //LVdf.image.push(food_ratings_df.image[i]);
        //LVdf.rating.push(food_ratings_df.rating[i]);
        //LVdf.val_cat.push(food_ratings_df.val_cat[i]);
        //LVdf.nrepeat.push(food_ratings_df.nrepeat[i]);
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

    // Other necessary variables
    var foodDF = []; // Equivalent of the final DataFrame in Python

    // Implementation of the provided Python code in JavaScript

    var got_em = 0;
    var jitterHV = 0;
    var jitterMV = 0;
    var jitterLV = 0;
    var iteration = 0;


    while (got_em === 0) {

        // Protect jitter from going beyond the bounds of the median value
        var maxJitterHV = HVdf.length / 2;
        var maxJitterMV = MVdf.length / 2;
        var maxJitterLV = LVdf.length / 2;
    
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
        var medianHV = HVdf.find((obj) => obj.ranking === Math.round(median(HVdf.map((obj) => obj.ranking)) + jitterHV));
        if (!medianHV) {
            jitterHV += getRandomInt(-4, 4);
            continue;
        }
        var medianMV = MVdf.find((obj) => obj.ranking === Math.round(median(MVdf.map((obj) => obj.ranking)) + jitterMV))
        if (!medianMV) {
            jitterMV += getRandomInt(-4, 4);
            continue;
        }
        var medianLV = LVdf.find((obj) => obj.ranking === Math.round(median(LVdf.map((obj) => obj.ranking)) + jitterLV))
        if (!medianLV) {
            jitterLV += getRandomInt(-4, 4);
            continue;
        }
    
        // Values of median trial
        var medHV = medianHV.rating;
        var medMV = medianMV.rating;
        var medLV = medianLV.rating;
    
        // Trials below/above median
        var lowerHV =  HVdf
            .filter((obj) => obj.ranking > Math.round(median(HVdf.map((obj) => obj.ranking))))
          //  .map((obj) => obj.ranking)
            .sort((a, b) => b - a);
        var upperHV =  HVdf
            .filter((obj) => obj.ranking < Math.round(median(HVdf.map((obj) => obj.ranking))))
          //  .map((obj) => obj.ranking)
            .sort((a, b) => b - a);
        var lowerMV = MVdf
            .filter((obj) => obj.ranking > Math.round(median(MVdf.map((obj) => obj.ranking))))
         //   .map((obj) => obj.ranking)
            .sort((a, b) => b - a);
        var upperMV = MVdf
            .filter((obj) => obj.ranking < Math.round(median(MVdf.map((obj) => obj.ranking))))
          //  .map((obj) => obj.ranking)
            .sort((a, b) => b - a);
        var lowerLV = LVdf
            .filter((obj) => obj.ranking > Math.round(median(LVdf.map((obj) => obj.ranking))))
           // .map((obj) => obj.ranking)
            .sort((a, b) => b - a);
        var upperLV = LVdf
            .filter((obj) => obj.ranking < Math.round(median(LVdf.map((obj) => obj.ranking))))
//            .map((obj) => obj.ranking)
            .sort((a, b) => b - a);

        // Subtract each value from the median to create a difference score for later matching
        // Round to nearest 0.2
        lowerHV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medHV) * 10) * 2 / 10;
            //Math.round(Math.abs(item.rating - medHV) * 20) / 10 ;
          });
        upperHV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medHV) * 10) * 2 / 10;
           // item.rat_diff = Math.round(Math.abs(item.rating - medHV) * 20) / 10;
          });  

        lowerMV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medMV) * 10) * 2 / 10;
            //item.rat_diff = Math.round(Math.abs(item.rating - medMV) * 20) / 10;
          });
        upperMV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medMV) * 10) * 2 / 10;
            //item.rat_diff = Math.round(Math.abs(item.rating - medMV) * 20) / 10;
          });  

        lowerLV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medLV) * 10) * 2 / 10;
            //item.rat_diff = Math.round(Math.abs(item.rating - medLV) * 20) / 10;
          });
        upperLV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medLV) * 10) * 2 / 10;
           // item.rat_diff = Math.round(Math.abs(item.rating - medLV) * 20) / 10;
          });  
          
        // Find the intersection of VDs
        let intersect_value_HV = [];
        lowerHV.forEach(lowerItem => {
            upperHV.forEach(upperItem => {
            if (lowerItem.rat_diff === upperItem.rat_diff && lowerItem.rat_diff !== 0) {
              intersect_value_HV.push({ lowerItem, upperItem });
            }
          });
        });

        let intersect_value_MV = [];
        lowerMV.forEach(lowerItem => {
            upperMV.forEach(upperItem => {
            if (lowerItem.rat_diff === upperItem.rat_diff && lowerItem.rat_diff !== 0) {
                intersect_value_MV.push({ lowerItem, upperItem });
            }
            });
        });

        let intersect_value_LV = [];
        lowerLV.forEach(lowerItem => {
            upperLV.forEach(upperItem => {
            if (lowerItem.rat_diff === upperItem.rat_diff && lowerItem.rat_diff !== 0) {
                intersect_value_LV.push({ lowerItem, upperItem });
            }
            });
        });

        if (intersect_value_HV.length === 0) {
            jitterHV += getRandomInt(-4, 4);
           continue;
        }
        if (intersect_value_MV.length === 0) {
            jitterMV += getRandomInt(-4, 4);
           continue;
        }
        if (intersect_value_LV.length === 0) {
            jitterLV += getRandomInt(-4, 4);
           continue;
        }

        // Find items with the same rat_diff from intersect_value_HV, intersect_value_MV, and intersect_value_LV
        let intersect_all = [];
        intersect_value_HV.forEach(itemHV => {
            intersect_value_MV.forEach(itemMV => {
                intersect_value_LV.forEach(itemLV => {
                    if (
                        itemHV.lowerItem.rat_diff === itemMV.lowerItem.rat_diff &&
                        itemHV.lowerItem.rat_diff === itemLV.lowerItem.rat_diff
                    ) {
                        intersect_all.push({
                        HV: itemHV,
                        MV: itemMV,
                        LV: itemLV
                    });
                    }
                });
            });
        });
    
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

        // High-Value
        // Lower
        var lowerHVFood = intersect_all[0].HV.lowerItem
        // Upper
        var upperHVFood = intersect_all[0].HV.upperItem


        // Middle-Value
        // Lower
        var lowerMVFood = intersect_all[0].MV.lowerItem
        // Upper
        var upperMVFood = intersect_all[0].MV.upperItem

        // Low-Value
        // Lower
        var lowerLVFood = intersect_all[0].LV.lowerItem
        // Upper
        var upperLVFood = intersect_all[0].LV.upperItem

        // Assign 'whichItem' values
        upperHVFood['whichItem'] = 'HV1';
        upperMVFood['whichItem'] = 'MV1';
        upperLVFood['whichItem'] = 'LV1';
        medianHV['whichItem'] = 'HV2';
        medianMV['whichItem'] = 'MV2';
        medianLV['whichItem'] = 'LV2';
        lowerHVFood['whichItem'] = 'HV3';
        lowerMVFood['whichItem'] = 'MV3';
        lowerLVFood['whichItem'] = 'LV3';

        // Concatenate data to the foodDF array (assuming it is an array of objects)
        foodDF.push(medianHV);
        foodDF.push(medianMV);
        foodDF.push(medianLV);
        foodDF.push(lowerHVFood);
        foodDF.push(lowerMVFood);
        foodDF.push(lowerLVFood);
        foodDF.push(upperHVFood);
        foodDF.push(upperMVFood);
        foodDF.push(upperLVFood);
    
        if (foodDF.length === 9) {
        got_em = 1;
        }
    }
    
    console.log(foodDF);
    
