/****************** 
 * Food-Task Test *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'food-task';  // from the Builder filename that created this script
let expInfo = {
    'participant': '666',
    'group': ["food", "drug"],
    'extra': [0, 1],
    'practice': [1, 0],
    'dorate': [1, 0],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(start_expRoutineBegin());
flowScheduler.add(start_expRoutineEachFrame());
flowScheduler.add(start_expRoutineEnd());
flowScheduler.add(instr_1RoutineBegin());
flowScheduler.add(instr_1RoutineEachFrame());
flowScheduler.add(instr_1RoutineEnd());
const skip_foodLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(skip_foodLoopBegin(skip_foodLoopScheduler));
flowScheduler.add(skip_foodLoopScheduler);
flowScheduler.add(skip_foodLoopEnd);
const choose_food_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(choose_food_loopLoopBegin(choose_food_loopLoopScheduler));
flowScheduler.add(choose_food_loopLoopScheduler);
flowScheduler.add(choose_food_loopLoopEnd);
flowScheduler.add(hide_mouse_routineRoutineBegin());
flowScheduler.add(hide_mouse_routineRoutineEachFrame());
flowScheduler.add(hide_mouse_routineRoutineEnd());
flowScheduler.add(instr_2RoutineBegin());
flowScheduler.add(instr_2RoutineEachFrame());
flowScheduler.add(instr_2RoutineEnd());
const skip_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(skip_practiceLoopBegin(skip_practiceLoopScheduler));
flowScheduler.add(skip_practiceLoopScheduler);
flowScheduler.add(skip_practiceLoopEnd);
flowScheduler.add(self_instrRoutineBegin());
flowScheduler.add(self_instrRoutineEachFrame());
flowScheduler.add(self_instrRoutineEnd());
const self_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(self_trialsLoopBegin(self_trialsLoopScheduler));
flowScheduler.add(self_trialsLoopScheduler);
flowScheduler.add(self_trialsLoopEnd);
flowScheduler.add(colorblindnessRoutineBegin());
flowScheduler.add(colorblindnessRoutineEachFrame());
flowScheduler.add(colorblindnessRoutineEnd());
flowScheduler.add(enderRoutineBegin());
flowScheduler.add(enderRoutineEachFrame());
flowScheduler.add(enderRoutineEnd());
const bonus_dispLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(bonus_dispLoopBegin(bonus_dispLoopScheduler));
flowScheduler.add(bonus_dispLoopScheduler);
flowScheduler.add(bonus_dispLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/food/celery and carrot sticks.jpg', 'path': 'stimuli/food/celery and carrot sticks.jpg'},
    {'name': 'stimuli/food/cherry tomato.jpg', 'path': 'stimuli/food/cherry tomato.jpg'},
    {'name': 'stimuli/food/pickles.jpg', 'path': 'stimuli/food/pickles.jpg'},
    {'name': 'stimuli/food/fried eggs.jpg', 'path': 'stimuli/food/fried eggs.jpg'},
    {'name': 'stimuli/food/froot loops w milk.jpg', 'path': 'stimuli/food/froot loops w milk.jpg'},
    {'name': 'stimuli/food/AA026339.png', 'path': 'stimuli/food/AA026339.png'},
    {'name': 'stimuli/food/soup with spoon.jpg', 'path': 'stimuli/food/soup with spoon.jpg'},
    {'name': 'stimuli/food/rigatoni.jpg', 'path': 'stimuli/food/rigatoni.jpg'},
    {'name': 'stimuli/food/sour patch.jpg', 'path': 'stimuli/food/sour patch.jpg'},
    {'name': 'stimuli/food/Skim milk.jpg', 'path': 'stimuli/food/Skim milk.jpg'},
    {'name': 'stimuli/food/Pretzels.jpg', 'path': 'stimuli/food/Pretzels.jpg'},
    {'name': 'stimuli/food/yellow rice_beans.jpg', 'path': 'stimuli/food/yellow rice_beans.jpg'},
    {'name': 'stimuli/food/ritz.jpg', 'path': 'stimuli/food/ritz.jpg'},
    {'name': 'finalfooditems.xlsx', 'path': 'finalfooditems.xlsx'},
    {'name': 'stimuli/food/brownie.jpg', 'path': 'stimuli/food/brownie.jpg'},
    {'name': 'stimuli/food/banana.jpg', 'path': 'stimuli/food/banana.jpg'},
    {'name': 'stimuli/food/yogurt pretzels.jpg', 'path': 'stimuli/food/yogurt pretzels.jpg'},
    {'name': 'stimuli/food/kiwi.jpg', 'path': 'stimuli/food/kiwi.jpg'},
    {'name': 'stimuli/food/string cheese.jpg', 'path': 'stimuli/food/string cheese.jpg'},
    {'name': 'stimuli/food/sushi w_condiments.jpg', 'path': 'stimuli/food/sushi w_condiments.jpg'},
    {'name': 'stimuli/food/air popcorn.jpg', 'path': 'stimuli/food/air popcorn.jpg'},
    {'name': 'stimuli/food/green beans.jpg', 'path': 'stimuli/food/green beans.jpg'},
    {'name': 'stimuli/food/cookies.jpg', 'path': 'stimuli/food/cookies.jpg'},
    {'name': 'stimuli/food/french fries.jpg', 'path': 'stimuli/food/french fries.jpg'},
    {'name': 'practice.csv', 'path': 'practice.csv'},
    {'name': 'stimuli/food/cucumber slices.jpg', 'path': 'stimuli/food/cucumber slices.jpg'},
    {'name': 'stimuli/food/baby cheese.jpg', 'path': 'stimuli/food/baby cheese.jpg'},
    {'name': 'stimuli/food/mac & cheese.jpg', 'path': 'stimuli/food/mac & cheese.jpg'},
    {'name': 'stimuli/food/Cheese nachos.jpg', 'path': 'stimuli/food/Cheese nachos.jpg'},
    {'name': 'stimuli/food/turkey sandwich.jpg', 'path': 'stimuli/food/turkey sandwich.jpg'},
    {'name': 'stimuli/food/corn cob.jpg', 'path': 'stimuli/food/corn cob.jpg'},
    {'name': 'stimuli/food/salad w chicken.jpg', 'path': 'stimuli/food/salad w chicken.jpg'},
    {'name': 'stimuli/food/chicken nuggets2.jpg', 'path': 'stimuli/food/chicken nuggets2.jpg'},
    {'name': 'stimuli/food/cupcakes am.jpg', 'path': 'stimuli/food/cupcakes am.jpg'},
    {'name': 'stimuli/food/bagel plain.jpg', 'path': 'stimuli/food/bagel plain.jpg'},
    {'name': 'stimuli/food/mashed potato.jpg', 'path': 'stimuli/food/mashed potato.jpg'},
    {'name': 'stimuli/food/mushrooms.jpg', 'path': 'stimuli/food/mushrooms.jpg'},
    {'name': 'stimuli/food/apple slices.jpg', 'path': 'stimuli/food/apple slices.jpg'},
    {'name': 'stimuli/food/rice cakes.jpg', 'path': 'stimuli/food/rice cakes.jpg'},
    {'name': 'stimuli/food/Whole milk.jpg', 'path': 'stimuli/food/Whole milk.jpg'},
    {'name': 'stimuli/food/mozarella sticks.jpg', 'path': 'stimuli/food/mozarella sticks.jpg'},
    {'name': 'stimuli/food/cherries.jpg', 'path': 'stimuli/food/cherries.jpg'},
    {'name': 'stimuli/food/tacos.jpg', 'path': 'stimuli/food/tacos.jpg'},
    {'name': 'stimuli/food/eggs.jpg', 'path': 'stimuli/food/eggs.jpg'},
    {'name': 'stimuli/food/raisins.jpg', 'path': 'stimuli/food/raisins.jpg'},
    {'name': 'foodChoiceTrials.xlsx', 'path': 'foodChoiceTrials.xlsx'},
    {'name': 'stimuli/food/baguette oil.jpg', 'path': 'stimuli/food/baguette oil.jpg'},
    {'name': 'stimuli/food/1%milk.jpg', 'path': 'stimuli/food/1%milk.jpg'},
    {'name': 'stimuli/food/reeses.jpg', 'path': 'stimuli/food/reeses.jpg'},
    {'name': 'stimuli/food/AA026337.png', 'path': 'stimuli/food/AA026337.png'},
    {'name': 'stimuli/food/ice cream sundae 002.jpg', 'path': 'stimuli/food/ice cream sundae 002.jpg'},
    {'name': 'stimuli/food/m_and_m.jpg', 'path': 'stimuli/food/m_and_m.jpg'},
    {'name': 'stimuli/food/saltines.jpg', 'path': 'stimuli/food/saltines.jpg'},
    {'name': 'stimuli/food/granola w milk.jpg', 'path': 'stimuli/food/granola w milk.jpg'},
    {'name': 'stimuli/food/raisin bran w milk.jpg', 'path': 'stimuli/food/raisin bran w milk.jpg'},
    {'name': 'stimuli/food/trail mix.jpg', 'path': 'stimuli/food/trail mix.jpg'},
    {'name': 'stimuli/food/strawberries.jpg', 'path': 'stimuli/food/strawberries.jpg'},
    {'name': 'stimuli/food/peaches.jpg', 'path': 'stimuli/food/peaches.jpg'},
    {'name': 'stimuli/food/lollipops.jpg', 'path': 'stimuli/food/lollipops.jpg'},
    {'name': 'stimuli/food/rigatoni and sauce.jpg', 'path': 'stimuli/food/rigatoni and sauce.jpg'},
    {'name': 'stimuli/food/grilled chicken strips.jpg', 'path': 'stimuli/food/grilled chicken strips.jpg'},
    {'name': 'stimuli/food/yogurt no spoon.jpg', 'path': 'stimuli/food/yogurt no spoon.jpg'},
    {'name': 'stimuli/food/american cheese.jpg', 'path': 'stimuli/food/american cheese.jpg'},
    {'name': 'stimuli/food/Tribe humus pita.jpg', 'path': 'stimuli/food/Tribe humus pita.jpg'},
    {'name': 'stimuli/food/avacado.jpg', 'path': 'stimuli/food/avacado.jpg'},
    {'name': 'stimuli/food/grilled cheese.jpg', 'path': 'stimuli/food/grilled cheese.jpg'},
    {'name': 'stimuli/food/soy chips.jpg', 'path': 'stimuli/food/soy chips.jpg'},
    {'name': 'finalfooditems.csv', 'path': 'finalfooditems.csv'},
    {'name': 'stimuli/food/steak.jpg', 'path': 'stimuli/food/steak.jpg'},
    {'name': 'stimuli/food/burger.jpg', 'path': 'stimuli/food/burger.jpg'},
    {'name': 'trials.csv', 'path': 'trials.csv'},
    {'name': 'stimuli/food/orange slices.jpg', 'path': 'stimuli/food/orange slices.jpg'},
    {'name': 'stimuli/food/Hershey Kisses.jpg', 'path': 'stimuli/food/Hershey Kisses.jpg'},
    {'name': 'stimuli/food/seaweed.jpg', 'path': 'stimuli/food/seaweed.jpg'},
    {'name': 'stimuli/food/baked potato.jpg', 'path': 'stimuli/food/baked potato.jpg'},
    {'name': 'stimuli/food/pizza.jpg', 'path': 'stimuli/food/pizza.jpg'},
    {'name': 'stimuli/food/bagel and cc.jpg', 'path': 'stimuli/food/bagel and cc.jpg'},
    {'name': 'stimuli/food/yellow popcorn.jpg', 'path': 'stimuli/food/yellow popcorn.jpg'},
    {'name': 'stimuli/food/mini muffins.jpg', 'path': 'stimuli/food/mini muffins.jpg'},
    {'name': 'stimuli/food/broccoli cauliflower.jpg', 'path': 'stimuli/food/broccoli cauliflower.jpg'},
    {'name': 'stimuli/food/PB.jpg', 'path': 'stimuli/food/PB.jpg'},
    {'name': 'stimuli/food/AA026307.png', 'path': 'stimuli/food/AA026307.png'},
    {'name': 'stimuli/food/doughnuts.jpg', 'path': 'stimuli/food/doughnuts.jpg'},
    {'name': 'stimuli/food/Grapes.jpg', 'path': 'stimuli/food/Grapes.jpg'},
    {'name': 'stimuli/food/hotdog w must.jpg', 'path': 'stimuli/food/hotdog w must.jpg'},
    {'name': 'stimuli/food/AA026360.png', 'path': 'stimuli/food/AA026360.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/sub-${expInfo["participant"]}_task-${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var start_expClock;
var thisExp;
var win;
var event;
var shuffle;
var BONUS_BOOL;
var participant_id;
var FOOD_BOOL;
var foodDF;
var DRUG_BOOL;
var RATE_BOOL;
var foodfile;
var foodListData;
var foodTrialList;
var foodlen;
var food_ratings_df;
var num_rows;
var instr_1Clock;
var nrounds;
var instr_keyboard;
var food_image_1;
var food_image_2;
var drug_image;
var social_image;
var start_food_ratingsClock;
var start_food_rat_key;
var start_food_rat_text;
var rateFoodClock;
var food_slider;
var foodImage;
var next_button;
var check_space_key;
var fixation_500msClock;
var text;
var sort_foodClock;
var choose_foodClock;
var food_img_choice;
var hide_mouse_routineClock;
var instr_2Clock;
var days;
var rounds;
var instr_2_resp;
var prac_instrClock;
var text_3;
var key_resp_3;
var practice_choiceClock;
var left_chest;
var right_chest;
var choice_resp_2;
var self_instrClock;
var text_4;
var key_resp_2;
var choiceClock;
var bonus_amt_pts;
var left_shard_5;
var right_shard_0;
var right_shard_1;
var right_shard_2;
var right_shard_3;
var right_shard_4;
var right_shard_5;
var choice_resp;
var colorblindnessClock;
var colorblind_txt;
var full_color_vision;
var enderClock;
var text_5;
var key_resp_4;
var rewardClock;
var text_6;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "start_exp"
  start_expClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  //random = Math.random;
  shuffle = util.shuffle;
  Array.prototype.append = [].push;
  //util.addInfoFromUrl(expInfo);
  
  // Run 'Begin Experiment' code from check_bonus
  if ((expInfo["extra"] === "1")) {
      BONUS_BOOL = 1;
  } else {
      if ((expInfo["extra"] === "0")) {
          BONUS_BOOL = 0;
      }
  }
  participant_id = expInfo["participant"];
  
  // Run 'Begin Experiment' code from check_stim
  if ((expInfo["group"] === "food")) {
      FOOD_BOOL = 1;
      foodDF = [];
      console.log("Food");
  } else {
      FOOD_BOOL = 0;
  }
  if ((expInfo["group"] === "drug")) {
      DRUG_BOOL = 1;
      console.log("Drug");
  } else {
      DRUG_BOOL = 0;
  }
  
  // Run 'Begin Experiment' code from check_rate_js
  //foodDF = {"id": [], "image": [], "rating": [], "val_cat": [], "nrepeat": [], "rank": [], "whichItem": [], "diff": []};
  
  if ((expInfo["dorate"] === "1")) {
      RATE_BOOL = 1;
      console.log("Doing Ratings");
  } else {
      RATE_BOOL = 0;
      console.log("Not Doing Ratings");
  }
  
  if ( (RATE_BOOL === 0) & (FOOD_BOOL === 1) ){
      console.log("Generating Food Ratings");
      foodfile = "finalfooditems.csv";
      //foodListData = new data.TrialHandler2({"trialList": data.importConditions(foodfile), "nReps": 77, "method": "sequential", "extraInfo": expInfo});
      foodListData = new TrialHandler({
          psychoJS: psychoJS,
          nReps: 77, method: TrialHandler.Method.SEQUENTIAL,
          extraInfo: expInfo, originPath: undefined,
          trialList: foodfile,
          seed: undefined, name: 'foodListData'
      });
      
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
      
      foodTrialList = foodListData.trialList;
      foodlen = foodTrialList.length;
      console.log("There are ", foodlen," foods");
      food_ratings_df = {"id": [], "image": [], "rating": [], "val_cat": [], "nrepeat": []};
      num_rows = foodlen;
      for (var i, _pj_c = 0, _pj_a = range(foodlen), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          food_ratings_df["id"].push((i + 1));
          food_ratings_df["image"].push(foodTrialList[i]);
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
  
    // console.log(food_ratings_df);
  }
  
  
  if ((RATE_BOOL === 0)) {
   // Separate foods based on value category
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
  
      // Other necessary variables
      // Implementation of the provided Python code in JavaScript
  
      var got_em = 0;
      var jitterHV = 0;
      var jitterMV = 0;
      var jitterLV = 0;
      var iteration = 0;
  
  
      while (got_em === 0) {
          if (iteration > 100) {
              console.log("Too many tries")
              break
          }
  
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
              .sort((a, b) => b - a);
          var upperHV =  HVdf
              .filter((obj) => obj.ranking < Math.round(median(HVdf.map((obj) => obj.ranking))))
              .sort((a, b) => b - a);
          var lowerMV = MVdf
              .filter((obj) => obj.ranking > Math.round(median(MVdf.map((obj) => obj.ranking))))
              .sort((a, b) => b - a);
          var upperMV = MVdf
              .filter((obj) => obj.ranking < Math.round(median(MVdf.map((obj) => obj.ranking))))
              .sort((a, b) => b - a);
          var lowerLV = LVdf
              .filter((obj) => obj.ranking > Math.round(median(LVdf.map((obj) => obj.ranking))))
              .sort((a, b) => b - a);
          var upperLV = LVdf
              .filter((obj) => obj.ranking < Math.round(median(LVdf.map((obj) => obj.ranking))))
              .sort((a, b) => b - a);
  
          // Subtract each value from the median to create a difference score for later matching
          // Round to nearest 0.2
          lowerHV.forEach(item => {
              item.rat_diff = Math.ceil(Math.abs(item.rating - medHV) * 10) * 2 / 10;
            });
          upperHV.forEach(item => {
              item.rat_diff = Math.ceil(Math.abs(item.rating - medHV) * 10) * 2 / 10;
            });  
  
          lowerMV.forEach(item => {
              item.rat_diff = Math.ceil(Math.abs(item.rating - medMV) * 10) * 2 / 10;
            });
          upperMV.forEach(item => {
              item.rat_diff = Math.ceil(Math.abs(item.rating - medMV) * 10) * 2 / 10;
            });  
  
          lowerLV.forEach(item => {
              item.rat_diff = Math.ceil(Math.abs(item.rating - medLV) * 10) * 2 / 10;
            });
          upperLV.forEach(item => {
              item.rat_diff = Math.ceil(Math.abs(item.rating - medLV) * 10) * 2 / 10;
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
                  continue;
              } else if (jitt_r === 2) {
                  jitterMV += getRandomInt(-4, 4);
                  continue;
              } else {
                  jitterHV += getRandomInt(-4, 4);
                  continue;
              }
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
          
          // Assign values to associate with rainbow
          lowerLVFood['val'] = 1;
          medianLV['val'] = 2;
          upperLVFood['val'] = 3;
          lowerMVFood['val'] = 4;
          medianMV['val'] = 5;
          upperMVFood['val'] = 6;
          lowerHVFood['val'] = 7;
          medianHV['val'] = 8;
          upperHVFood['val'] = 9;
  
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
      
      console.log("These are the foods we'll use",foodDF);
  
  }
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from instr_dict
  nrounds = 150;
  
  instr_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from set_ex_images
  food_image_1 = new visual.ImageStim({"win": psychoJS.window, "name": "food_image", "image": "stimuli/food/AA026307.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [(- 0.3), (- 0.1)], "size": [1, 1], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  food_image_2 = new visual.ImageStim({"win": psychoJS.window, "name": "food_image", "image": "stimuli/food/AA026339.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0.3, (- 0.1)], "size": [1, 1], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  drug_image = new visual.ImageStim({"win": psychoJS.window, "name": "drug_image", "image": "stimuli/food/AA026307.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [(- 0.3), (- 0.1)], "size": [0.25, 0.25], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  social_image = new visual.ImageStim({"win": psychoJS.window, "name": "social_image", "image": "stimuli/food/AA026307.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0.3, (- 0.1)], "size": [0.25, 0.25], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": true, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 2.0)});
  
  // Initialize components for Routine "start_food_ratings"
  start_food_ratingsClock = new util.Clock();
  start_food_rat_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  start_food_rat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_food_rat_text',
    text: 'You will now view a series of food images. Using the mouse, please indicate how much you would like to consume food in each image, on a scale from 1 ("Not at al") to 10 ("Very much"). \n\nPress the RIGHT ARROW to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "rateFood"
  rateFoodClock = new util.Clock();
  food_slider = new visual.Slider({
    win: psychoJS.window, name: 'food_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.175)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  foodImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'foodImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  next_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button',
    text: 'Press Spacebar To Continue',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.5, 0.13]
  });
  next_button.clock = new util.Clock();
  
  check_space_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from filterFood
  if ((RATE_BOOL !== "0")) {
      food_ratings_df = {"id": [], "image": [], "rating": [], "val_cat": [], "nrepeat": []};
  }
  
  // Initialize components for Routine "fixation_500ms"
  fixation_500msClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "sort_food"
  sort_foodClock = new util.Clock();
  // Initialize components for Routine "choose_food"
  choose_foodClock = new util.Clock();
  // Run 'Begin Experiment' code from select_food_image
  var thisImage = [];
  
  food_img_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'food_img_choice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "hide_mouse_routine"
  hide_mouse_routineClock = new util.Clock();
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from instr_dict_2
  days = 10;
  rounds = 15;
  
  instr_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_instr"
  prac_instrClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: "You’ve completed the training phase. Before we start the experiment, let's try a few final practice rounds.\n\nSelect the better of the two treasure chests, and we will show you how many points you would be awarded for your choice.\n\nWhen you are ready, press the SPACE BAR to begin.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_choice"
  practice_choiceClock = new util.Clock();
  // Run 'Begin Experiment' code from draw_chests_2
  left_chest = new visual.ImageStim({"win": psychoJS.window, "name": "left_chest", "image": "stimuli/chest.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [(- 0.375), 0], "size": [1, 1], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  right_chest = new visual.ImageStim({"win": psychoJS.window, "name": "right_chest", "image": "stimuli/chest.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0.375, 0], "size": [1, 1], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": true, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 2.0)});
  
  choice_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "self_instr"
  self_instrClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "choice"
  choiceClock = new util.Clock();
  // Run 'Begin Experiment' code from draw_chests
  left_chest = new visual.ImageStim({"win": psychoJS.window, "name": "left_chest", "image": "stimuli/chest.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [(- 0.375), 0], "size": [0.6, 0.5], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  right_chest = new visual.ImageStim({"win": psychoJS.window, "name": "right_chest", "image": "stimuli/chest.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0.375, 0], "size": [0.6, 0.5], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": true, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 2.0)});
  
  // Run 'Begin Experiment' code from set_shards
  bonus_amt_pts = 20;
  
  left_shard_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_shard_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : left_shards_pos[5], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  right_shard_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_shard_0', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : right_shards_pos[0], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  right_shard_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_shard_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : right_shards_pos[1], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  right_shard_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_shard_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : right_shards_pos[2], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  right_shard_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_shard_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : right_shards_pos[3], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  right_shard_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_shard_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : right_shards_pos[4], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  right_shard_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_shard_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : right_shards_pos[5], size : all_shards_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  choice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "colorblindness"
  colorblindnessClock = new util.Clock();
  colorblind_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'colorblind_txt',
    text: "Do you have full color vision?\n\nPress 'Y' for yes and 'N' for no.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  full_color_vision = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ender"
  enderClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reward"
  rewardClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var PRACTICE_BOOL;
var start_expComponents;
function start_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_exp' ---
    t = 0;
    start_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from hide_mouse
    //document.body.style.cursor='none';
    // Run 'Begin Routine' code from check_practice
    if ((expInfo["practice"] === "1")) {
        PRACTICE_BOOL = 1;
    } else {
        if ((expInfo["practice"] === "0")) {
            PRACTICE_BOOL = 0;
        }
    }
    
    // keep track of which components have finished
    start_expComponents = [];
    
    for (const thisComponent of start_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_exp' ---
    // get current time
    t = start_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_exp' ---
    for (const thisComponent of start_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "start_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_back_txt;
var instr_strs;
var instr_disp_txt;
var curr_instr;
var _instr_keyboard_allKeys;
var instr_1Components;
function instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_1' ---
    t = 0;
    instr_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from instr_dict
    instr_back_txt = new visual.TextStim({"win": psychoJS.window, "name": "back_forth", "text": "", "font": "Arial", "pos": [0, (- 0.4)], "height": 0.05, "wrapWidth": null, "ori": 0, "color": "white", "colorSpace": "rgb", "opacity": 1, "languageStyle": "LTR", "depth": 0.0});
    instr_back_txt.text = "\nPress RIGHT ARROW to continue.";
    instr_back_txt.autoDraw = true;
    if ((BONUS_BOOL === 1)) {
        instr_strs = {};
        instr_strs[0] = `Today, your task will be to make a series of choices between two treasure chests. Each chest will contain a variety of crystals inside.
    
    For your participation today, you will gain a bonus based on your choices.`
    ;
        instr_strs[1] = `Here are two diffferent treasure chest examples
    
    
    
    
    
    
    
    
    
    
    
    `
    ;
        instr_strs[2] = `Over ${nrounds} rounds, you will be choosing the better of two treasure chests. The value of each treasure chest is simply the sum of the values of each crystal in the chest. The crystals are each worth a different number of points depending on their color, and each color is equally likely to appear. In this task, every point is worth ${(conversion_rate * 100)} cents. In order to know the value of a treasure chest, you will first need to learn what each color is worth.
    
    `
    ;
        instr_strs[3] = `The following screen will display the colors you will see throughout this task.`;
        instr_strs[4] = `The value of the colors increases across the spectrum, from left to right.
    
    
    
    
    
    
    
    
    
    
    
    
    `
    ;
    } else {
        instr_strs = {};
        instr_strs[0] = `Today, your task will be to mine for treasure chests. Each chest will contain a variety of crystals inside, representing different types of rewards.
    
    `
    ;
        instr_strs[1] = `Here are two diffferent treasure chest examples
    
    
    
    
    
    
    
    
    
    
    
    `
    ;
        if ((FOOD_BOOL === 1)) {
            instr_strs[2] = `Different crystals can be exchanged for different types of rewards. Some crystals can be exchanged for images of food, while others can be exchanged for images of social gatherings.
    
    
    
    
    
    
    `
    ;
        } else {
            instr_strs[2] = `Different crystals can be exchanged for different types of rewards. Some crystals can be exchanged for images of drugs, while others can be exchanged for images of social gatherings.
    
    
    
    
    
    
    `
    ;
        }
        instr_strs[3] = `Before you start learning about the crystals, you will first rate a series of images. This will ensure that the rewards are tailored to your specific preferences.`;
    }
    instr_disp_txt = new visual.TextStim({"win": psychoJS.window, "name": "instructions", "text": "", "font": "Arial", "pos": [0, 0], "height": 0.04, "wrapWidth": null, "ori": 0, "color": "white", "colorSpace": "rgb", "opacity": 1, "languageStyle": "LTR", "depth": 0.0});
    instr_disp_txt.text = instr_strs[0];
    instr_disp_txt.autoDraw = true;
    curr_instr = 0;
    
    instr_keyboard.keys = undefined;
    instr_keyboard.rt = undefined;
    _instr_keyboard_allKeys = [];
    // keep track of which components have finished
    instr_1Components = [];
    instr_1Components.push(instr_keyboard);
    
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var instr_keys;
function instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_1' ---
    // get current time
    t = instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from instr_dict
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    instr_keys = psychoJS.eventManager.getKeys();
    if ((curr_instr === 0)) {
        instr_back_txt.text = "\nPress RIGHT ARROW to continue.";
        if (_pj.in_es6("right", instr_keys)) {
            instr_keyboard.clearEvents();
            curr_instr += 1;
            instr_disp_txt.text = instr_strs[curr_instr];
            instr_back_txt.autoDraw = true;
        }
    } else {
        if ((curr_instr === 3)) {
            instr_back_txt.text = "Press LEFT ARROW to go back.\nPress RIGHT ARROW to begin.";
            if (_pj.in_es6("right", instr_keys)) {
                instr_keyboard.clearEvents();
                continueRoutine = false;
            } else {
                if (_pj.in_es6("left", instr_keys)) {
                    instr_keyboard.clearEvents();
                    curr_instr -= 1;
                    instr_disp_txt.text = instr_strs[curr_instr];
                    if ((curr_instr === 0)) {
                        instr_back_txt.autoDraw = false;
                    } else {
                        instr_back_txt.autoDraw = true;
                    }
                }
            }
        } else {
            if ((curr_instr === 2)) {
                if ((FOOD_BOOL === 1)) {
                    food_image_1.setAutoDraw(true);
                    food_image_2.setAutoDraw(true);
                } else {
                    drug_image.setAutoDraw(true);
                }
            }
            instr_back_txt.text = "Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.";
            if (_pj.in_es6("right", instr_keys)) {
                social_image.setAutoDraw(false);
                food_image_1.setAutoDraw(false);
                food_image_2.setAutoDraw(false);
                drug_image.setAutoDraw(false);
                instr_keyboard.clearEvents();
                curr_instr += 1;
                instr_disp_txt.text = instr_strs[curr_instr];
                instr_back_txt.autoDraw = true;
            } else {
                if (_pj.in_es6("left", instr_keys)) {
                    social_image.setAutoDraw(false);
                    food_image_1.setAutoDraw(false);
                    food_image_2.setAutoDraw(false);
                    drug_image.setAutoDraw(false);
                    instr_keyboard.clearEvents();
                    curr_instr -= 1;
                    instr_disp_txt.text = instr_strs[curr_instr];
                    if ((curr_instr === 0)) {
                        instr_back_txt.text = "\nPress RIGHT ARROW to continue.";
                    } else {
                        instr_back_txt.text = "Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.";
                    }
                }
            }
        }
    }
    
    
    // *instr_keyboard* updates
    if (t >= 0.0 && instr_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_keyboard.tStart = t;  // (not accounting for frame time here)
      instr_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_keyboard.clearEvents(); });
    }

    if (instr_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_keyboard.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _instr_keyboard_allKeys = _instr_keyboard_allKeys.concat(theseKeys);
      if (_instr_keyboard_allKeys.length > 0) {
        instr_keyboard.keys = _instr_keyboard_allKeys[_instr_keyboard_allKeys.length - 1].name;  // just the last key pressed
        instr_keyboard.rt = _instr_keyboard_allKeys[_instr_keyboard_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_1' ---
    for (const thisComponent of instr_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from instr_dict
    instr_back_txt.autoDraw = false;
    instr_disp_txt.autoDraw = false;
    
    instr_keyboard.stop();
    // the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var skip_food;
function skip_foodLoopBegin(skip_foodLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip_food = new TrialHandler({
      psychoJS: psychoJS,
      nReps: FOOD_BOOL * RATE_BOOL, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip_food'
    });
    psychoJS.experiment.addLoop(skip_food); // add the loop to the experiment
    currentLoop = skip_food;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSkip_food of skip_food) {
      snapshot = skip_food.getSnapshot();
      skip_foodLoopScheduler.add(importConditions(snapshot));
      skip_foodLoopScheduler.add(start_food_ratingsRoutineBegin(snapshot));
      skip_foodLoopScheduler.add(start_food_ratingsRoutineEachFrame());
      skip_foodLoopScheduler.add(start_food_ratingsRoutineEnd(snapshot));
      const food_rating_loopLoopScheduler = new Scheduler(psychoJS);
      skip_foodLoopScheduler.add(food_rating_loopLoopBegin(food_rating_loopLoopScheduler, snapshot));
      skip_foodLoopScheduler.add(food_rating_loopLoopScheduler);
      skip_foodLoopScheduler.add(food_rating_loopLoopEnd);
      skip_foodLoopScheduler.add(sort_foodRoutineBegin(snapshot));
      skip_foodLoopScheduler.add(sort_foodRoutineEachFrame());
      skip_foodLoopScheduler.add(sort_foodRoutineEnd(snapshot));
      skip_foodLoopScheduler.add(skip_foodLoopEndIteration(skip_foodLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var food_rating_loop;
function food_rating_loopLoopBegin(food_rating_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    food_rating_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'finalfooditems.xlsx',
      seed: undefined, name: 'food_rating_loop'
    });
    psychoJS.experiment.addLoop(food_rating_loop); // add the loop to the experiment
    currentLoop = food_rating_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFood_rating_loop of food_rating_loop) {
      snapshot = food_rating_loop.getSnapshot();
      food_rating_loopLoopScheduler.add(importConditions(snapshot));
      food_rating_loopLoopScheduler.add(rateFoodRoutineBegin(snapshot));
      food_rating_loopLoopScheduler.add(rateFoodRoutineEachFrame());
      food_rating_loopLoopScheduler.add(rateFoodRoutineEnd(snapshot));
      food_rating_loopLoopScheduler.add(fixation_500msRoutineBegin(snapshot));
      food_rating_loopLoopScheduler.add(fixation_500msRoutineEachFrame());
      food_rating_loopLoopScheduler.add(fixation_500msRoutineEnd(snapshot));
      food_rating_loopLoopScheduler.add(food_rating_loopLoopEndIteration(food_rating_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function food_rating_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(food_rating_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function food_rating_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function skip_foodLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(skip_food);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function skip_foodLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var choose_food_loop;
function choose_food_loopLoopBegin(choose_food_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    choose_food_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'foodChoiceTrials.xlsx',
      seed: undefined, name: 'choose_food_loop'
    });
    psychoJS.experiment.addLoop(choose_food_loop); // add the loop to the experiment
    currentLoop = choose_food_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisChoose_food_loop of choose_food_loop) {
      snapshot = choose_food_loop.getSnapshot();
      choose_food_loopLoopScheduler.add(importConditions(snapshot));
      choose_food_loopLoopScheduler.add(choose_foodRoutineBegin(snapshot));
      choose_food_loopLoopScheduler.add(choose_foodRoutineEachFrame());
      choose_food_loopLoopScheduler.add(choose_foodRoutineEnd(snapshot));
      choose_food_loopLoopScheduler.add(choose_food_loopLoopEndIteration(choose_food_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function choose_food_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(choose_food_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function choose_food_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var skip_practice;
function skip_practiceLoopBegin(skip_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: PRACTICE_BOOL, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip_practice'
    });
    psychoJS.experiment.addLoop(skip_practice); // add the loop to the experiment
    currentLoop = skip_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSkip_practice of skip_practice) {
      snapshot = skip_practice.getSnapshot();
      skip_practiceLoopScheduler.add(importConditions(snapshot));
      skip_practiceLoopScheduler.add(prac_instrRoutineBegin(snapshot));
      skip_practiceLoopScheduler.add(prac_instrRoutineEachFrame());
      skip_practiceLoopScheduler.add(prac_instrRoutineEnd(snapshot));
      const practiceLoopScheduler = new Scheduler(psychoJS);
      skip_practiceLoopScheduler.add(practiceLoopBegin(practiceLoopScheduler, snapshot));
      skip_practiceLoopScheduler.add(practiceLoopScheduler);
      skip_practiceLoopScheduler.add(practiceLoopEnd);
      skip_practiceLoopScheduler.add(skip_practiceLoopEndIteration(skip_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.csv',
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practice) {
      snapshot = practice.getSnapshot();
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(practice_choiceRoutineBegin(snapshot));
      practiceLoopScheduler.add(practice_choiceRoutineEachFrame());
      practiceLoopScheduler.add(practice_choiceRoutineEnd(snapshot));
      practiceLoopScheduler.add(fixation_500msRoutineBegin(snapshot));
      practiceLoopScheduler.add(fixation_500msRoutineEachFrame());
      practiceLoopScheduler.add(fixation_500msRoutineEnd(snapshot));
      practiceLoopScheduler.add(practiceLoopEndIteration(practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function skip_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(skip_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function skip_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var self_trials;
function self_trialsLoopBegin(self_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    self_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials.csv',
      seed: undefined, name: 'self_trials'
    });
    psychoJS.experiment.addLoop(self_trials); // add the loop to the experiment
    currentLoop = self_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSelf_trial of self_trials) {
      snapshot = self_trials.getSnapshot();
      self_trialsLoopScheduler.add(importConditions(snapshot));
      self_trialsLoopScheduler.add(choiceRoutineBegin(snapshot));
      self_trialsLoopScheduler.add(choiceRoutineEachFrame());
      self_trialsLoopScheduler.add(choiceRoutineEnd(snapshot));
      self_trialsLoopScheduler.add(fixation_500msRoutineBegin(snapshot));
      self_trialsLoopScheduler.add(fixation_500msRoutineEachFrame());
      self_trialsLoopScheduler.add(fixation_500msRoutineEnd(snapshot));
      self_trialsLoopScheduler.add(self_trialsLoopEndIteration(self_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function self_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(self_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function self_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var bonus_disp;
function bonus_dispLoopBegin(bonus_dispLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bonus_disp = new TrialHandler({
      psychoJS: psychoJS,
      nReps: BONUS_BOOL, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'bonus_disp'
    });
    psychoJS.experiment.addLoop(bonus_disp); // add the loop to the experiment
    currentLoop = bonus_disp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBonus_disp of bonus_disp) {
      snapshot = bonus_disp.getSnapshot();
      bonus_dispLoopScheduler.add(importConditions(snapshot));
      bonus_dispLoopScheduler.add(rewardRoutineBegin(snapshot));
      bonus_dispLoopScheduler.add(rewardRoutineEachFrame());
      bonus_dispLoopScheduler.add(rewardRoutineEnd(snapshot));
      bonus_dispLoopScheduler.add(bonus_dispLoopEndIteration(bonus_dispLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bonus_dispLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bonus_disp);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bonus_dispLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _start_food_rat_key_allKeys;
var start_food_ratingsComponents;
function start_food_ratingsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_food_ratings' ---
    t = 0;
    start_food_ratingsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_food_rat_key.keys = undefined;
    start_food_rat_key.rt = undefined;
    _start_food_rat_key_allKeys = [];
    // keep track of which components have finished
    start_food_ratingsComponents = [];
    start_food_ratingsComponents.push(start_food_rat_key);
    start_food_ratingsComponents.push(start_food_rat_text);
    
    for (const thisComponent of start_food_ratingsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_food_ratingsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_food_ratings' ---
    // get current time
    t = start_food_ratingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_food_rat_key* updates
    if (t >= 0.0 && start_food_rat_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_food_rat_key.tStart = t;  // (not accounting for frame time here)
      start_food_rat_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_food_rat_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_food_rat_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_food_rat_key.clearEvents(); });
    }

    if (start_food_rat_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_food_rat_key.getKeys({keyList: ['right'], waitRelease: false});
      _start_food_rat_key_allKeys = _start_food_rat_key_allKeys.concat(theseKeys);
      if (_start_food_rat_key_allKeys.length > 0) {
        start_food_rat_key.keys = _start_food_rat_key_allKeys[_start_food_rat_key_allKeys.length - 1].name;  // just the last key pressed
        start_food_rat_key.rt = _start_food_rat_key_allKeys[_start_food_rat_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *start_food_rat_text* updates
    if (t >= 0 && start_food_rat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_food_rat_text.tStart = t;  // (not accounting for frame time here)
      start_food_rat_text.frameNStart = frameN;  // exact frame index
      
      start_food_rat_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_food_ratingsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_food_ratingsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_food_ratings' ---
    for (const thisComponent of start_food_ratingsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_food_rat_key.corr, level);
    }
    psychoJS.experiment.addData('start_food_rat_key.keys', start_food_rat_key.keys);
    if (typeof start_food_rat_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_food_rat_key.rt', start_food_rat_key.rt);
        routineTimer.reset();
        }
    
    start_food_rat_key.stop();
    // Run 'End Routine' code from show_mouse
    psychoJS.window.mouseVisible = true;
    
    // the Routine "start_food_ratings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thisFood;
var _check_space_key_allKeys;
var rateFoodComponents;
function rateFoodRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rateFood' ---
    t = 0;
    rateFoodClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from cycleFood
    thisFood = image;
    
    food_slider.reset()
    foodImage.setImage(thisFood);
    check_space_key.keys = undefined;
    check_space_key.rt = undefined;
    _check_space_key_allKeys = [];
    // keep track of which components have finished
    rateFoodComponents = [];
    rateFoodComponents.push(food_slider);
    rateFoodComponents.push(foodImage);
    rateFoodComponents.push(next_button);
    rateFoodComponents.push(check_space_key);
    
    for (const thisComponent of rateFoodComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var rating_value;
function rateFoodRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rateFood' ---
    // get current time
    t = rateFoodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from cycleFood
    if ((food_slider.rating === null)) {
        rating_value = 0;
    } else {
        rating_value = Math.round((food_slider.getRating() / 10), 2);
    }
    
    
    // *food_slider* updates
    if (t >= 0.0 && food_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      food_slider.tStart = t;  // (not accounting for frame time here)
      food_slider.frameNStart = frameN;  // exact frame index
      
      food_slider.setAutoDraw(true);
    }

    
    // *foodImage* updates
    if (t >= 0.0 && foodImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      foodImage.tStart = t;  // (not accounting for frame time here)
      foodImage.frameNStart = frameN;  // exact frame index
      
      foodImage.setAutoDraw(true);
    }

    
    // *next_button* updates
    if (((food_slider.rating != null)) && next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button.tStart = t;  // (not accounting for frame time here)
      next_button.frameNStart = frameN;  // exact frame index
      
      next_button.setAutoDraw(true);
    }

    if (next_button.status === PsychoJS.Status.STARTED) {
      // check whether next_button has been pressed
      if (next_button.isClicked) {
        if (!next_button.wasClicked) {
          // store time of first click
          next_button.timesOn.push(next_button.clock.getTime());
          next_button.numClicks += 1;
          // store time clicked until
          next_button.timesOff.push(next_button.clock.getTime());
        } else {
          // update time clicked until;
          next_button.timesOff[next_button.timesOff.length - 1] = next_button.clock.getTime();
        }
        if (!next_button.wasClicked) {
          // end routine when next_button is clicked
          continueRoutine = false;
        }
        // if next_button is still clicked next frame, it is not a new click
        next_button.wasClicked = true;
      } else {
        // if next_button is clicked next frame, it is a new click
        next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button hasn't started / has finished
      next_button.clock.reset();
      // if next_button is clicked next frame, it is a new click
      next_button.wasClicked = false;
    }
    
    // *check_space_key* updates
    if (((food_slider.rating != null)) && check_space_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_space_key.tStart = t;  // (not accounting for frame time here)
      check_space_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { check_space_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { check_space_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { check_space_key.clearEvents(); });
    }

    if (check_space_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = check_space_key.getKeys({keyList: ['space'], waitRelease: false});
      _check_space_key_allKeys = _check_space_key_allKeys.concat(theseKeys);
      if (_check_space_key_allKeys.length > 0) {
        check_space_key.keys = _check_space_key_allKeys[_check_space_key_allKeys.length - 1].name;  // just the last key pressed
        check_space_key.rt = _check_space_key_allKeys[_check_space_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    food_ratings_df["id"].push(food_ratings_df["id"].length + 1);
    food_ratings_df["image"].push(thisFood);
    food_ratings_df["rating"].push(Math.round(food_slider.getRating()/10,2));
    
    if (food_slider.getRating()/10 <= 3.33) {
        food_ratings_df["val_cat"].push("LV");
    } else if (food_slider.getRating()/10 >= 6.67) {
        food_ratings_df["val_cat"].push("HV");   
    } else { 
        food_ratings_df["val_cat"].push("MV");
    }
    
    food_ratings_df["nrepeat"].push(0);
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rateFoodComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rateFoodRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rateFood' ---
    for (const thisComponent of rateFoodComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('food_slider.response', food_slider.getRating());
    psychoJS.experiment.addData('food_slider.rt', food_slider.getRT());
    psychoJS.experiment.addData('next_button.numClicks', next_button.numClicks);
    psychoJS.experiment.addData('next_button.timesOn', next_button.timesOn);
    psychoJS.experiment.addData('next_button.timesOff', next_button.timesOff);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(check_space_key.corr, level);
    }
    psychoJS.experiment.addData('check_space_key.keys', check_space_key.keys);
    if (typeof check_space_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('check_space_key.rt', check_space_key.rt);
        routineTimer.reset();
        }
    
    check_space_key.stop();
    // the Routine "rateFood" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_500msComponents;
function fixation_500msRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_500ms' ---
    t = 0;
    fixation_500msClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_500msComponents = [];
    fixation_500msComponents.push(text);
    
    for (const thisComponent of fixation_500msComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_500msRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_500ms' ---
    // get current time
    t = fixation_500msClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_500msComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_500msRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_500ms' ---
    for (const thisComponent of fixation_500msComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sort_foodComponents;
function sort_foodRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sort_food' ---
    t = 0;
    sort_foodClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from sort_food_df_js
    // Separate foods based on value category
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
    
    // Other necessary variables
    var got_em = 0;
    var jitterHV = 0;
    var jitterMV = 0;
    var jitterLV = 0;
    var iteration = 0;
    
    
    while (got_em === 0) {
        if (iteration > 100) {
            console.log("Too many tries")
            break
        }
    
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
            .sort((a, b) => b - a);
        var upperHV =  HVdf
            .filter((obj) => obj.ranking < Math.round(median(HVdf.map((obj) => obj.ranking))))
            .sort((a, b) => b - a);
        var lowerMV = MVdf
            .filter((obj) => obj.ranking > Math.round(median(MVdf.map((obj) => obj.ranking))))
            .sort((a, b) => b - a);
        var upperMV = MVdf
            .filter((obj) => obj.ranking < Math.round(median(MVdf.map((obj) => obj.ranking))))
            .sort((a, b) => b - a);
        var lowerLV = LVdf
            .filter((obj) => obj.ranking > Math.round(median(LVdf.map((obj) => obj.ranking))))
            .sort((a, b) => b - a);
        var upperLV = LVdf
            .filter((obj) => obj.ranking < Math.round(median(LVdf.map((obj) => obj.ranking))))
            .sort((a, b) => b - a);
    
        // Subtract each value from the median to create a difference score for later matching
        // Round to nearest 0.2
        lowerHV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medHV) * 10) * 2 / 10;
          });
        upperHV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medHV) * 10) * 2 / 10;
          });  
    
        lowerMV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medMV) * 10) * 2 / 10;
          });
        upperMV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medMV) * 10) * 2 / 10;
          });  
    
        lowerLV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medLV) * 10) * 2 / 10;
          });
        upperLV.forEach(item => {
            item.rat_diff = Math.ceil(Math.abs(item.rating - medLV) * 10) * 2 / 10;
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
                continue;
            } else if (jitt_r === 2) {
                jitterMV += getRandomInt(-4, 4);
                continue;
            } else {
                jitterHV += getRandomInt(-4, 4);
                continue;
            }
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
        
        // Assign values to associate with rainbow
        lowerLVFood['val'] = 1;
        medianLV['val'] = 2;
        upperLVFood['val'] = 3;
        lowerMVFood['val'] = 4;
        medianMV['val'] = 5;
        upperMVFood['val'] = 6;
        lowerHVFood['val'] = 7;
        medianHV['val'] = 8;
        upperHVFood['val'] = 9;
    
    
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
    // keep track of which components have finished
    sort_foodComponents = [];
    
    for (const thisComponent of sort_foodComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sort_foodRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sort_food' ---
    // get current time
    t = sort_foodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sort_foodComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sort_foodRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sort_food' ---
    for (const thisComponent of sort_foodComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "sort_food" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thisImage_obj;
var thisImage_obj2;
var thisImage;
var choose_foodComponents;
function choose_foodRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choose_food' ---
    t = 0;
    choose_foodClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from select_food_image
    thisImage_obj = foodDF
        .filter((obj) => obj.whichItem === whichItem)
    
    thisImage_obj2 = thisImage_obj[0].image;
    thisImage = thisImage_obj2.image;
    //console.log(thisImage);
    food_img_choice.setImage(thisImage);
    // keep track of which components have finished
    choose_foodComponents = [];
    choose_foodComponents.push(food_img_choice);
    
    for (const thisComponent of choose_foodComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choose_foodRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choose_food' ---
    // get current time
    t = choose_foodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *food_img_choice* updates
    if (t >= 0.0 && food_img_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      food_img_choice.tStart = t;  // (not accounting for frame time here)
      food_img_choice.frameNStart = frameN;  // exact frame index
      
      food_img_choice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (food_img_choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      food_img_choice.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choose_foodComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choose_foodRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choose_food' ---
    for (const thisComponent of choose_foodComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var hide_mouse_routineComponents;
function hide_mouse_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hide_mouse_routine' ---
    t = 0;
    hide_mouse_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    psychoJS.window.mouseVisible = false;
    
    // keep track of which components have finished
    hide_mouse_routineComponents = [];
    
    for (const thisComponent of hide_mouse_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hide_mouse_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hide_mouse_routine' ---
    // get current time
    t = hide_mouse_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hide_mouse_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hide_mouse_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hide_mouse_routine' ---
    for (const thisComponent of hide_mouse_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "hide_mouse_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_2_resp_allKeys;
var instr_2Components;
function instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2' ---
    t = 0;
    instr_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from instr_dict_2
    instr_back_txt = new visual.TextStim({"win": psychoJS.window, "name": "back_forth", "text": "", "font": "Arial", "pos": [0, (- 0.4)], "height": 0.05, "wrapWidth": null, "ori": 0, "color": "white", "colorSpace": "rgb", "opacity": 1, "languageStyle": "LTR", "depth": 0.0});
    instr_back_txt.text = "\nPress RIGHT ARROW to continue.";
    instr_back_txt.autoDraw = true;
    instr_strs = {};
    instr_strs[0] = `You have completed the rating phase.
    In this next phase, you will learn more about how the mining task works.`
    ;
    instr_strs[1] = `In this task, you are playing the role of a miner. It is up to you to select where you will mine for crystals and which crystals you want to keep.`;
    instr_strs[2] = `Over ${days} days, you will be choosing which cave you want to work in. Once you are in a cave, you will be presented with a series of chests containg crystals. The value of these chests depend on the type of crystals inside. Each crystal is worth a different reward, depending on its color.`;
    if ((FOOD_BOOL === 1)) {
        instr_strs[3] = `Each day, after selecting a cave, you will make ${rounds} choices between two chests. Some times those chests will contain crystals that give you food rewards, but other times they will give you social rewards.`;
    } else {
        instr_strs[3] = `Each day, after selecting a cave, you will make ${rounds} choices between two chests. Some times those chests will contain crystals that give you drug rewards, but other times they will give you social rewards.`;
    }
    instr_strs[4] = `To get the type of rewards you want, you will need to learn both which mine is more likely to have the right crystals, and which crystals give you the best reward.`;
    instr_strs[5] = `The following screen will display the colors you will see throughout this task.`;
    instr_strs[6] = `Each rainbow offers a different type of reward. The value of the colors increases across the spectrum, from left to right.
    
    
    
    
    
    
    
    
    
    
    
    
    `
    ;
    instr_disp_txt = new visual.TextStim({"win": psychoJS.window, "name": "instructions", "text": "", "font": "Arial", "pos": [0, 0], "height": 0.04, "wrapWidth": null, "ori": 0, "color": "white", "colorSpace": "rgb", "opacity": 1, "languageStyle": "LTR", "depth": 0.0});
    instr_disp_txt.text = instr_strs[0];
    instr_disp_txt.autoDraw = true;
    curr_instr = 0;
    
    instr_2_resp.keys = undefined;
    instr_2_resp.rt = undefined;
    _instr_2_resp_allKeys = [];
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(instr_2_resp);
    
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2' ---
    // get current time
    t = instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from instr_dict_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    instr_keys = psychoJS.eventManager.getKeys();
    if ((curr_instr === 0)) {
        instr_back_txt.text = "\nPress RIGHT ARROW to continue.";
        if (_pj.in_es6("right", instr_keys)) {
            instr_keyboard.clearEvents();
            curr_instr += 1;
            instr_disp_txt.text = instr_strs[curr_instr];
            instr_back_txt.autoDraw = true;
        }
    } else {
        if ((curr_instr === 6)) {
            for (var swatch_index, _pj_c = 0, _pj_a = util.range(color_scale1.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                swatch_index = _pj_a[_pj_c];
                swatches_top[swatch_index].setAutoDraw(true);
                swatches_bot[swatch_index].setAutoDraw(true);
            }
            instr_back_txt.text = "Press LEFT ARROW to go back.\nPress RIGHT ARROW to begin.";
            if (_pj.in_es6("right", instr_keys)) {
                for (var swatch_index, _pj_c = 0, _pj_a = util.range(color_scale1.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    swatch_index = _pj_a[_pj_c];
                    swatches_top[swatch_index].setAutoDraw(false);
                    swatches_bot[swatch_index].setAutoDraw(false);
                }
                instr_keyboard.clearEvents();
                continueRoutine = false;
            } else {
                if (_pj.in_es6("left", instr_keys)) {
                    for (var swatch_index, _pj_c = 0, _pj_a = util.range(color_scale_1.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        swatch_index = _pj_a[_pj_c];
                        swatches_top[swatch_index].setAutoDraw(false);
                        swatches_bot[swatch_index].setAutoDraw(false);
                    }
                    instr_keyboard.clearEvents();
                    curr_instr -= 1;
                    instr_disp_txt.text = instr_strs[curr_instr];
                    if ((curr_instr === 0)) {
                        instr_back_txt.autoDraw = false;
                    } else {
                        instr_back_txt.autoDraw = true;
                    }
                }
            }
        } else {
            if ((curr_instr === 11)) {
                left_chest.setAutoDraw(true);
                left_shard.setAutoDraw(true);
                left_shard_6.setAutoDraw(true);
                left_shard_7.setAutoDraw(true);
                left_shard_8.setAutoDraw(true);
                left_shard_9.setAutoDraw(true);
                left_shard_10.setAutoDraw(true);
                right_chest.setAutoDraw(true);
                right_shard.setAutoDraw(true);
                right_shard_6.setAutoDraw(true);
                right_shard_7.setAutoDraw(true);
                right_shard_8.setAutoDraw(true);
                right_shard_9.setAutoDraw(true);
                right_shard_10.setAutoDraw(true);
            }
            instr_back_txt.text = "Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.";
            if (_pj.in_es6("right", instr_keys)) {
                for (var swatch_index, _pj_c = 0, _pj_a = util.range(color_scale_1.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    swatch_index = _pj_a[_pj_c];
                    swatches[swatch_index].setAutoDraw(false);
                }
                left_chest.setAutoDraw(false);
                left_shard.setAutoDraw(false);
                left_shard_6.setAutoDraw(false);
                left_shard_7.setAutoDraw(false);
                left_shard_8.setAutoDraw(false);
                left_shard_9.setAutoDraw(false);
                left_shard_10.setAutoDraw(false);
                right_chest.setAutoDraw(false);
                right_shard.setAutoDraw(false);
                right_shard_6.setAutoDraw(false);
                right_shard_7.setAutoDraw(false);
                right_shard_8.setAutoDraw(false);
                right_shard_9.setAutoDraw(false);
                right_shard_10.setAutoDraw(false);
                social_image.setAutoDraw(false);
                food_image.setAutoDraw(false);
                drug_image.setAutoDraw(false);
                instr_keyboard.clearEvents();
                curr_instr += 1;
                instr_disp_txt.text = instr_strs[curr_instr];
                instr_back_txt.autoDraw = true;
            } else {
                if (_pj.in_es6("left", instr_keys)) {
                    for (var swatch_index, _pj_c = 0, _pj_a = util.range(color_scale_1.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        swatch_index = _pj_a[_pj_c];
                        swatches[swatch_index].setAutoDraw(false);
                    }
                    left_chest.setAutoDraw(false);
                    left_shard.setAutoDraw(false);
                    left_shard_6.setAutoDraw(false);
                    left_shard_7.setAutoDraw(false);
                    left_shard_8.setAutoDraw(false);
                    left_shard_9.setAutoDraw(false);
                    left_shard_10.setAutoDraw(false);
                    right_chest.setAutoDraw(false);
                    right_shard.setAutoDraw(false);
                    right_shard_6.setAutoDraw(false);
                    right_shard_7.setAutoDraw(false);
                    right_shard_8.setAutoDraw(false);
                    right_shard_9.setAutoDraw(false);
                    right_shard_10.setAutoDraw(false);
                    social_image.setAutoDraw(false);
                    food_image.setAutoDraw(false);
                    drug_image.setAutoDraw(false);
                    instr_keyboard.clearEvents();
                    curr_instr -= 1;
                    instr_disp_txt.text = instr_strs[curr_instr];
                    if ((curr_instr === 0)) {
                        instr_back_txt.text = "\nPress RIGHT ARROW to continue.";
                    } else {
                        instr_back_txt.text = "Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.";
                    }
                }
            }
        }
    }
    
    
    // *instr_2_resp* updates
    if (t >= 0.0 && instr_2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_resp.tStart = t;  // (not accounting for frame time here)
      instr_2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_2_resp.clearEvents(); });
    }

    if (instr_2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_2_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _instr_2_resp_allKeys = _instr_2_resp_allKeys.concat(theseKeys);
      if (_instr_2_resp_allKeys.length > 0) {
        instr_2_resp.keys = _instr_2_resp_allKeys[_instr_2_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_2_resp.rt = _instr_2_resp_allKeys[_instr_2_resp_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    for (const thisComponent of instr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from instr_dict_2
    instr_back_txt.autoDraw = false;
    instr_disp_txt.autoDraw = false;
    
    instr_2_resp.stop();
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var prac_instrComponents;
function prac_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_instr' ---
    t = 0;
    prac_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    prac_instrComponents = [];
    prac_instrComponents.push(text_3);
    prac_instrComponents.push(key_resp_3);
    
    for (const thisComponent of prac_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_instr' ---
    // get current time
    t = prac_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_instr' ---
    for (const thisComponent of prac_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_3.stop();
    // the Routine "prac_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var left_shard_colors;
var right_shard_colors;
var left_shard_sum;
var right_shard_sum;
var left_shards;
var right_shards;
var better_option;
var _choice_resp_2_allKeys;
var practice_choiceComponents;
function practice_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_choice' ---
    t = 0;
    practice_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from draw_chests_2
    left_chest.setAutoDraw(true);
    right_chest.setAutoDraw(true);
    
    // Run 'Begin Routine' code from set_shards_2
    function reverse_value(num) {
        if ((num === 1)) {
            return 9;
        } else {
            if ((num === 2)) {
                return 8;
            } else {
                if ((num === 3)) {
                    return 7;
                } else {
                    if ((num === 4)) {
                        return 6;
                    } else {
                        if ((num === 5)) {
                            return 5;
                        } else {
                            if ((num === 6)) {
                                return 4;
                            } else {
                                if ((num === 7)) {
                                    return 3;
                                } else {
                                    if ((num === 8)) {
                                        return 2;
                                    } else {
                                        if ((num === 9)) {
                                            return 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("counter_balance", counter_balance);
    console.log("chest_order", chest_order);
    console.log("left_shard_shapes", left_shard_shapes);
    console.log("right_shard_shapes", right_shard_shapes);
    left_shard_colors = [];
    right_shard_colors = [];
    if ((chest_order[0] === "Box1")) {
        console.log("box1");
        if ((counter_balance === "1")) {
            console.log("cb1");
            left_shard_sum = Box1_Sum.toString();
            right_shard_sum = Box2_Sum.toString();
            left_shard_colors = [Box1_val1, Box1_val2, Box1_val3, Box1_val4, Box1_val5, Box1_val6];
            right_shard_colors = [Box2_val1, Box2_val2, Box2_val3, Box2_val4, Box2_val5, Box2_val6];
        } else {
            if ((counter_balance === "2")) {
                console.log("cb2");
                left_shard_sum = Box1_Sum.toString();
                right_shard_sum = Box2_Sum.toString();
                left_shard_colors = [reverse_value(Box1_val1), reverse_value(Box1_val2), reverse_value(Box1_val3), reverse_value(Box1_val4), reverse_value(Box1_val5), reverse_value(Box1_val6)];
                right_shard_colors = [reverse_value(Box2_val1), reverse_value(Box2_val2), reverse_value(Box2_val3), reverse_value(Box2_val4), reverse_value(Box2_val5), reverse_value(Box2_val6)];
            }
        }
    } else {
        if ((chest_order[0] === "Box2")) {
            console.log("box2");
            if ((counter_balance === "1")) {
                console.log("cb1");
                left_shard_sum = Box2_Sum.toString();
                right_shard_sum = Box1_Sum.toString();
                left_shard_colors = [Box2_val1, Box2_val2, Box2_val3, Box2_val4, Box2_val5, Box2_val6];
                right_shard_colors = [Box1_val1, Box1_val2, Box1_val3, Box1_val4, Box1_val5, Box1_val6];
            } else {
                if ((counter_balance === "2")) {
                    console.log("cb2");
                    left_shard_sum = Box2_Sum.toString();
                    right_shard_sum = Box1_Sum.toString();
                    left_shard_colors = [reverse_value(Box2_val1), reverse_value(Box2_val2), reverse_value(Box2_val3), reverse_value(Box2_val4), reverse_value(Box2_val5), reverse_value(Box2_val6)];
                    right_shard_colors = [reverse_value(Box1_val1), reverse_value(Box1_val2), reverse_value(Box1_val3), reverse_value(Box1_val4), reverse_value(Box1_val5), reverse_value(Box1_val6)];
                }
            }
        }
    }
    console.log(left_shard_colors, "left_shard_colors");
    console.log(right_shard_colors, "right_shard_colors");
    left_shards = [];
    right_shards = [];
    for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((left_shard_shapes[i] >= 10)) {
            left_shards.push((((((("stimuli/" + color_1) + "/shard-") + left_shard_shapes[i].toString()) + "_color-") + left_shard_colors[i].toString()) + ".png"));
        } else {
            left_shards.push((((((("stimuli/" + color_1) + "/shard-0") + left_shard_shapes[i].toString()) + "_color-") + left_shard_colors[i].toString()) + ".png"));
        }
        if ((right_shard_shapes[i] >= 10)) {
            right_shards.push((((((("stimuli/" + color_1) + "/shard-") + right_shard_shapes[i].toString()) + "_color-") + right_shard_colors[i].toString()) + ".png"));
        } else {
            right_shards.push((((((("stimuli/" + color_1) + "/shard-0") + right_shard_shapes[i].toString()) + "_color-") + right_shard_colors[i].toString()) + ".png"));
        }
    }
    if ((Number.parseFloat(left_shard_sum) > Number.parseFloat(right_shard_sum))) {
        better_option = "left";
    } else {
        if ((Number.parseFloat(left_shard_sum) < Number.parseFloat(right_shard_sum))) {
            better_option = "right";
        }
    }
    psychoJS.experiment.addData("better_option", better_option);
    console.log("chest_order", chest_order);
    
    choice_resp_2.keys = undefined;
    choice_resp_2.rt = undefined;
    _choice_resp_2_allKeys = [];
    // keep track of which components have finished
    practice_choiceComponents = [];
    practice_choiceComponents.push(choice_resp_2);
    
    for (const thisComponent of practice_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_choice' ---
    // get current time
    t = practice_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *choice_resp_2* updates
    if (t >= 0.0 && choice_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_resp_2.tStart = t;  // (not accounting for frame time here)
      choice_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice_resp_2.clearEvents(); });
    }

    if (choice_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = choice_resp_2.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _choice_resp_2_allKeys = _choice_resp_2_allKeys.concat(theseKeys);
      if (_choice_resp_2_allKeys.length > 0) {
        choice_resp_2.keys = _choice_resp_2_allKeys[_choice_resp_2_allKeys.length - 1].name;  // just the last key pressed
        choice_resp_2.rt = _choice_resp_2_allKeys[_choice_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var made_choice;
var this_trial_choice;
var this_trial_box_choice;
var correct;
function practice_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_choice' ---
    for (const thisComponent of practice_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from outline_settings_2
    console.log(chest_order);
    if ((choice_resp_2.keys === "f")) {
        made_choice = 1;
        this_trial_choice = "left";
        this_trial_box_choice = chest_order[0];
        if ((better_option === "left")) {
            correct = 1;
        } else {
            correct = 0;
        }
    } else {
        if ((choice_resp_2.keys === "j")) {
            made_choice = 1;
            this_trial_choice = "right";
            this_trial_box_choice = chest_order[1];
            if ((better_option === "right")) {
                correct = 1;
            } else {
                correct = 0;
            }
        }
    }
    psychoJS.experiment.addData("agent_choice", this_trial_choice);
    psychoJS.experiment.addData("agent_box_choice", this_trial_box_choice);
    psychoJS.experiment.addData("correct_choice", correct);
    correct_choice_count.push(correct);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(choice_resp_2.corr, level);
    }
    psychoJS.experiment.addData('choice_resp_2.keys', choice_resp_2.keys);
    if (typeof choice_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choice_resp_2.rt', choice_resp_2.rt);
        routineTimer.reset();
        }
    
    choice_resp_2.stop();
    // the Routine "practice_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_task_txt_disp;
var _key_resp_2_allKeys;
var self_instrComponents;
function self_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'self_instr' ---
    t = 0;
    self_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from start_task_txt
    if ((BONUS_BOOL === 1)) {
        start_task_txt_disp = "You are now ready to begin the experiment. In this portion of the study, you will no longer be shown how much each treasure chest is worth. Remember, your bonus payment will depend on your choices in this phase. At the end of the experiment, one random round will be selected, and you will get points for whichever option you chose.\n\nWhen you are ready, press the SPACE BAR to continue.";
    } else {
        start_task_txt_disp = "You are now ready to begin the experiment. In this portion of the study, you will no longer be shown how much each treasure chest is worth.\n\nWhen you are ready, press the SPACE BAR to continue.";
    }
    
    text_4.setText(start_task_txt_disp);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    self_instrComponents = [];
    self_instrComponents.push(text_4);
    self_instrComponents.push(key_resp_2);
    
    for (const thisComponent of self_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function self_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'self_instr' ---
    // get current time
    t = self_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of self_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function self_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'self_instr' ---
    for (const thisComponent of self_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_2.stop();
    // the Routine "self_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var chest_order;
var _choice_resp_allKeys;
var choiceComponents;
function choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice' ---
    t = 0;
    choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from draw_chests
    left_chest.setAutoDraw(true);
    right_chest.setAutoDraw(true);
    
    // Run 'Begin Routine' code from fill_chests_2
    chest_order = ["Box1", "Box2"];
    util.shuffle(chest_order);
    
    let left_shard_shapes = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 13) + 1
    );
    let right_shard_shapes = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 13) + 1
    );
    // Run 'Begin Routine' code from set_shards
    function reverse_value(num) {
        if ((num === 1)) {
            return 12;
        } else {
            if ((num === 2)) {
                return 11;
            } else {
                if ((num === 3)) {
                    return 10;
                } else {
                    if ((num === 4)) {
                        return 9;
                    } else {
                        if ((num === 5)) {
                            return 8;
                        } else {
                            if ((num === 6)) {
                                return 7;
                            } else {
                                if ((num === 7)) {
                                    return 6;
                                } else {
                                    if ((num === 8)) {
                                        return 5;
                                    } else {
                                        if ((num === 9)) {
                                            return 4;
                                        } else {
                                            if ((num === 10)) {
                                                return 3;
                                            } else {
                                                if ((num === 11)) {
                                                    return 2;
                                                } else {
                                                    if ((num === 12)) {
                                                        return 1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if ((chest_order[0] === "Box1")) {
        if ((counter_balance === "1")) {
            left_shard_sum = Box1_Sum.toString();
            right_shard_sum = Box2_Sum.toString();
            left_shard_colors = [Box1_val1, Box1_val2, Box1_val3, Box1_val4, Box1_val5, Box1_val6];
            right_shard_colors = [Box2_val1, Box2_val2, Box2_val3, Box2_val4, Box2_val5, Box2_val6];
        } else {
            if ((counter_balance === "2")) {
                left_shard_sum = Box1_Sum.toString();
                right_shard_sum = Box2_Sum.toString();
                left_shard_colors = [reverse_value(Box1_val1), reverse_value(Box1_val2), reverse_value(Box1_val3), reverse_value(Box1_val4), reverse_value(Box1_val5), reverse_value(Box1_val6)];
                right_shard_colors = [reverse_value(Box2_val1), reverse_value(Box2_val2), reverse_value(Box2_val3), reverse_value(Box2_val4), reverse_value(Box2_val5), reverse_value(Box2_val6)];
            }
        }
    } else {
        if ((chest_order[0] === "Box2")) {
            if ((counter_balance === "1")) {
                left_shard_sum = Box2_Sum.toString();
                right_shard_sum = Box1_Sum.toString();
                left_shard_colors = [Box2_val1, Box2_val2, Box2_val3, Box2_val4, Box2_val5, Box2_val6];
                right_shard_colors = [Box1_val1, Box1_val2, Box1_val3, Box1_val4, Box1_val5, Box1_val6];
            } else {
                if ((counter_balance === "2")) {
                    left_shard_sum = Box2_Sum.toString();
                    right_shard_sum = Box1_Sum.toString();
                    left_shard_colors = [reverse_value(Box2_val1), reverse_value(Box2_val2), reverse_value(Box2_val3), reverse_value(Box2_val4), reverse_value(Box2_val5), reverse_value(Box2_val6)];
                    right_shard_colors = [reverse_value(Box1_val1), reverse_value(Box1_val2), reverse_value(Box1_val3), reverse_value(Box1_val4), reverse_value(Box1_val5), reverse_value(Box1_val6)];
                }
            }
        }
    }
    left_shards = [];
    right_shards = [];
    for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((left_shard_shapes[i] >= 10)) {
            left_shards.push((((("stimuli/shard-" + left_shard_shapes[i].toString()) + "_color-") + left_shard_colors[i].toString()) + ".png"));
        } else {
            left_shards.push((((("stimuli/shard-0" + left_shard_shapes[i].toString()) + "_color-") + left_shard_colors[i].toString()) + ".png"));
        }
        if ((right_shard_shapes[i] >= 10)) {
            right_shards.push((((("stimuli/shard-" + right_shard_shapes[i].toString()) + "_color-") + right_shard_colors[i].toString()) + ".png"));
        } else {
            right_shards.push((((("stimuli/shard-0" + right_shard_shapes[i].toString()) + "_color-") + right_shard_colors[i].toString()) + ".png"));
        }
    }
    if ((Number.parseFloat(left_shard_sum) > Number.parseFloat(right_shard_sum))) {
        better_option = "left";
    } else {
        if ((Number.parseFloat(left_shard_sum) < Number.parseFloat(right_shard_sum))) {
            better_option = "right";
        }
    }
    psychoJS.experiment.addData("better_option", better_option);
    if ((self_trials.thisTrialN === 81)) {
        if ((this_trial_choice === "left")) {
            bonus_amt_pts = Number.parseFloat(left_shard_sum);
        }
        if ((this_trial_choice === "right")) {
            bonus_amt_pts = Number.parseFloat(right_shard_sum);
        }
    }
    
    left_shard_5.setImage(left_shards[5]);
    right_shard_0.setImage(right_shards[0]);
    right_shard_1.setImage(right_shards[1]);
    right_shard_2.setImage(right_shards[2]);
    right_shard_3.setImage(right_shards[3]);
    right_shard_4.setImage(right_shards[4]);
    right_shard_5.setImage(right_shards[5]);
    choice_resp.keys = undefined;
    choice_resp.rt = undefined;
    _choice_resp_allKeys = [];
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(left_shard_5);
    choiceComponents.push(right_shard_0);
    choiceComponents.push(right_shard_1);
    choiceComponents.push(right_shard_2);
    choiceComponents.push(right_shard_3);
    choiceComponents.push(right_shard_4);
    choiceComponents.push(right_shard_5);
    choiceComponents.push(choice_resp);
    
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice' ---
    // get current time
    t = choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_shard_5* updates
    if (t >= 0.0 && left_shard_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_shard_5.tStart = t;  // (not accounting for frame time here)
      left_shard_5.frameNStart = frameN;  // exact frame index
      
      left_shard_5.setAutoDraw(true);
    }

    
    // *right_shard_0* updates
    if (t >= 0.0 && right_shard_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_shard_0.tStart = t;  // (not accounting for frame time here)
      right_shard_0.frameNStart = frameN;  // exact frame index
      
      right_shard_0.setAutoDraw(true);
    }

    
    // *right_shard_1* updates
    if (t >= 0.0 && right_shard_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_shard_1.tStart = t;  // (not accounting for frame time here)
      right_shard_1.frameNStart = frameN;  // exact frame index
      
      right_shard_1.setAutoDraw(true);
    }

    
    // *right_shard_2* updates
    if (t >= 0.0 && right_shard_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_shard_2.tStart = t;  // (not accounting for frame time here)
      right_shard_2.frameNStart = frameN;  // exact frame index
      
      right_shard_2.setAutoDraw(true);
    }

    
    // *right_shard_3* updates
    if (t >= 0.0 && right_shard_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_shard_3.tStart = t;  // (not accounting for frame time here)
      right_shard_3.frameNStart = frameN;  // exact frame index
      
      right_shard_3.setAutoDraw(true);
    }

    
    // *right_shard_4* updates
    if (t >= 0.0 && right_shard_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_shard_4.tStart = t;  // (not accounting for frame time here)
      right_shard_4.frameNStart = frameN;  // exact frame index
      
      right_shard_4.setAutoDraw(true);
    }

    
    // *right_shard_5* updates
    if (t >= 0.0 && right_shard_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_shard_5.tStart = t;  // (not accounting for frame time here)
      right_shard_5.frameNStart = frameN;  // exact frame index
      
      right_shard_5.setAutoDraw(true);
    }

    
    // *choice_resp* updates
    if (t >= 0.0 && choice_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_resp.tStart = t;  // (not accounting for frame time here)
      choice_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice_resp.clearEvents(); });
    }

    if (choice_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = choice_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _choice_resp_allKeys = _choice_resp_allKeys.concat(theseKeys);
      if (_choice_resp_allKeys.length > 0) {
        choice_resp.keys = _choice_resp_allKeys[_choice_resp_allKeys.length - 1].name;  // just the last key pressed
        choice_resp.rt = _choice_resp_allKeys[_choice_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice' ---
    for (const thisComponent of choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from outline_settings
    if ((choice_resp.keys === "f")) {
        this_trial_choice = "left";
        this_trial_box_choice = chest_order[0];
        if ((better_option === "left")) {
            correct = 1;
        } else {
            correct = 0;
        }
        outline_shape.setPos([(- 0.375), 0], {"log": true});
        outline_shape.setAutoDraw(true);
    } else {
        if ((choice_resp.keys === "j")) {
            this_trial_choice = "right";
            this_trial_box_choice = chest_order[1];
            if ((better_option === "right")) {
                correct = 1;
            } else {
                correct = 0;
            }
            outline_shape.setAutoDraw(true);
            outline_shape.setPos([0.375, 0], {"log": true});
        }
    }
    psychoJS.experiment.addData("agent_choice", this_trial_choice);
    psychoJS.experiment.addData("agent_box_choice", this_trial_box_choice);
    psychoJS.experiment.addData("correct_choice", correct);
    correct_choice_count.push(correct);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(choice_resp.corr, level);
    }
    psychoJS.experiment.addData('choice_resp.keys', choice_resp.keys);
    if (typeof choice_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choice_resp.rt', choice_resp.rt);
        routineTimer.reset();
        }
    
    choice_resp.stop();
    // the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _full_color_vision_allKeys;
var colorblindnessComponents;
function colorblindnessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'colorblindness' ---
    t = 0;
    colorblindnessClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    full_color_vision.keys = undefined;
    full_color_vision.rt = undefined;
    _full_color_vision_allKeys = [];
    // keep track of which components have finished
    colorblindnessComponents = [];
    colorblindnessComponents.push(colorblind_txt);
    colorblindnessComponents.push(full_color_vision);
    
    for (const thisComponent of colorblindnessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function colorblindnessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'colorblindness' ---
    // get current time
    t = colorblindnessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *colorblind_txt* updates
    if (t >= 0.0 && colorblind_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      colorblind_txt.tStart = t;  // (not accounting for frame time here)
      colorblind_txt.frameNStart = frameN;  // exact frame index
      
      colorblind_txt.setAutoDraw(true);
    }

    
    // *full_color_vision* updates
    if (t >= 0.0 && full_color_vision.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      full_color_vision.tStart = t;  // (not accounting for frame time here)
      full_color_vision.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { full_color_vision.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { full_color_vision.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { full_color_vision.clearEvents(); });
    }

    if (full_color_vision.status === PsychoJS.Status.STARTED) {
      let theseKeys = full_color_vision.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _full_color_vision_allKeys = _full_color_vision_allKeys.concat(theseKeys);
      if (_full_color_vision_allKeys.length > 0) {
        full_color_vision.keys = _full_color_vision_allKeys[_full_color_vision_allKeys.length - 1].name;  // just the last key pressed
        full_color_vision.rt = _full_color_vision_allKeys[_full_color_vision_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of colorblindnessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function colorblindnessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'colorblindness' ---
    for (const thisComponent of colorblindnessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(full_color_vision.corr, level);
    }
    psychoJS.experiment.addData('full_color_vision.keys', full_color_vision.keys);
    if (typeof full_color_vision.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('full_color_vision.rt', full_color_vision.rt);
        routineTimer.reset();
        }
    
    full_color_vision.stop();
    // the Routine "colorblindness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ender_txt_disp;
var _key_resp_4_allKeys;
var enderComponents;
function enderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ender' ---
    t = 0;
    enderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from set_end_txt
    if ((BONUS_BOOL === 1)) {
        ender_txt_disp = "Congratulations - you have completed the experiment!\n\nPress the SPACE BAR to see your reward.";
    } else {
        ender_txt_disp = "Congratulations - you have completed the experiment!\n\nPress the SPACE BAR to exit.";
    }
    
    text_5.setText(ender_txt_disp);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    enderComponents = [];
    enderComponents.push(text_5);
    enderComponents.push(key_resp_4);
    
    for (const thisComponent of enderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function enderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ender' ---
    // get current time
    t = enderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of enderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ender' ---
    for (const thisComponent of enderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_4.stop();
    // the Routine "ender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bonus_amt_money;
var bonus_txt_disp;
var _key_resp_5_allKeys;
var rewardComponents;
function rewardRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward' ---
    t = 0;
    rewardClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from bonus_txt
    bonus_amt_money = (0.25 * bonus_amt_pts);
    bonus_txt_disp = `On this round, the option you chose was worth ${bonus_amt_pts} points. At a conversion rate of 25 cents for every point, you will receive a total of ${util.pad(Number.parseFloat(bonus_amt_money).toFixed(2), 1)} dollars.
    
    Press the SPACE BAR to exit.`
    ;
    
    text_6.setText(bonus_txt_disp);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    rewardComponents = [];
    rewardComponents.push(text_6);
    rewardComponents.push(key_resp_5);
    
    for (const thisComponent of rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rewardRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward' ---
    // get current time
    t = rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rewardRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward' ---
    for (const thisComponent of rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_5.stop();
    // the Routine "reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


var file_str;
async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  // Run 'End Experiment' code from hide_mouse
  //document.body.style.cursor='auto';
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Run 'End Experiment' code from filterFood
  file_str = (("food_ratings_" + expInfo["participant"].toString()) + ".csv");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
