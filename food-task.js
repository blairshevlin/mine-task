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
flowScheduler.add(hide_mouse_routineRoutineBegin());
flowScheduler.add(hide_mouse_routineRoutineEachFrame());
flowScheduler.add(hide_mouse_routineRoutineEnd());
const skip_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(skip_practiceLoopBegin(skip_practiceLoopScheduler));
flowScheduler.add(skip_practiceLoopScheduler);
flowScheduler.add(skip_practiceLoopEnd);
flowScheduler.add(choice_instrRoutineBegin());
flowScheduler.add(choice_instrRoutineEachFrame());
flowScheduler.add(choice_instrRoutineEnd());
const choice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(choice_trialsLoopBegin(choice_trialsLoopScheduler));
flowScheduler.add(choice_trialsLoopScheduler);
flowScheduler.add(choice_trialsLoopEnd);
flowScheduler.add(colorblindnessRoutineBegin());
flowScheduler.add(colorblindnessRoutineEachFrame());
flowScheduler.add(colorblindnessRoutineEnd());
flowScheduler.add(enderRoutineBegin());
flowScheduler.add(enderRoutineEachFrame());
flowScheduler.add(enderRoutineEnd());
flowScheduler.add(reward_infoRoutineBegin());
flowScheduler.add(reward_infoRoutineEachFrame());
flowScheduler.add(reward_infoRoutineEnd());
flowScheduler.add(view_rewardRoutineBegin());
flowScheduler.add(view_rewardRoutineEachFrame());
flowScheduler.add(view_rewardRoutineEnd());
flowScheduler.add(end_experimentRoutineBegin());
flowScheduler.add(end_experimentRoutineEachFrame());
flowScheduler.add(end_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/food/yellow rice_beans.jpg', 'path': 'stimuli/food/yellow rice_beans.jpg'},
    {'name': 'stimuli/food/Pretzels.jpg', 'path': 'stimuli/food/Pretzels.jpg'},
    {'name': 'stimuli/food/eggs.jpg', 'path': 'stimuli/food/eggs.jpg'},
    {'name': 'stimuli/food/rigatoni.jpg', 'path': 'stimuli/food/rigatoni.jpg'},
    {'name': 'stimuli/food/Cheese nachos.jpg', 'path': 'stimuli/food/Cheese nachos.jpg'},
    {'name': 'stimuli/food/avacado.jpg', 'path': 'stimuli/food/avacado.jpg'},
    {'name': 'stimuli/food/chicken nuggets2.jpg', 'path': 'stimuli/food/chicken nuggets2.jpg'},
    {'name': 'stimuli/food/string cheese.jpg', 'path': 'stimuli/food/string cheese.jpg'},
    {'name': 'stimuli/food/fried eggs.jpg', 'path': 'stimuli/food/fried eggs.jpg'},
    {'name': 'stimuli/food/grilled chicken strips.jpg', 'path': 'stimuli/food/grilled chicken strips.jpg'},
    {'name': 'stimuli/food/pickles.jpg', 'path': 'stimuli/food/pickles.jpg'},
    {'name': 'stimuli/practice/AA026337.png', 'path': 'stimuli/practice/AA026337.png'},
    {'name': 'stimuli/food/soup with spoon.jpg', 'path': 'stimuli/food/soup with spoon.jpg'},
    {'name': 'stimuli/food/mac & cheese.jpg', 'path': 'stimuli/food/mac & cheese.jpg'},
    {'name': 'stimuli/food/cucumber slices.jpg', 'path': 'stimuli/food/cucumber slices.jpg'},
    {'name': 'stimuli/food/apple slices.jpg', 'path': 'stimuli/food/apple slices.jpg'},
    {'name': 'stimuli/food/green beans.jpg', 'path': 'stimuli/food/green beans.jpg'},
    {'name': 'stimuli/food/Skim milk.jpg', 'path': 'stimuli/food/Skim milk.jpg'},
    {'name': 'stimuli/food/mushrooms.jpg', 'path': 'stimuli/food/mushrooms.jpg'},
    {'name': 'stimuli/food/celery and carrot sticks.jpg', 'path': 'stimuli/food/celery and carrot sticks.jpg'},
    {'name': 'stimuli/food/m_and_m.jpg', 'path': 'stimuli/food/m_and_m.jpg'},
    {'name': 'stimuli/food/yogurt pretzels.jpg', 'path': 'stimuli/food/yogurt pretzels.jpg'},
    {'name': 'stimuli/food/yellow popcorn.jpg', 'path': 'stimuli/food/yellow popcorn.jpg'},
    {'name': 'stimuli/food/cherry tomato.jpg', 'path': 'stimuli/food/cherry tomato.jpg'},
    {'name': 'stimuli/food/saltines.jpg', 'path': 'stimuli/food/saltines.jpg'},
    {'name': 'stimuli/food/seaweed.jpg', 'path': 'stimuli/food/seaweed.jpg'},
    {'name': 'stimuli/practice/AA026307.png', 'path': 'stimuli/practice/AA026307.png'},
    {'name': 'stimuli/food/soy chips.jpg', 'path': 'stimuli/food/soy chips.jpg'},
    {'name': 'stimuli/food/cherries.jpg', 'path': 'stimuli/food/cherries.jpg'},
    {'name': 'stimuli/food/PB.jpg', 'path': 'stimuli/food/PB.jpg'},
    {'name': 'stimuli/food/salad w chicken.jpg', 'path': 'stimuli/food/salad w chicken.jpg'},
    {'name': 'stimuli/food/mini muffins.jpg', 'path': 'stimuli/food/mini muffins.jpg'},
    {'name': 'stimuli/food/turkey sandwich.jpg', 'path': 'stimuli/food/turkey sandwich.jpg'},
    {'name': 'stimuli/food/ritz.jpg', 'path': 'stimuli/food/ritz.jpg'},
    {'name': 'stimuli/food/bagel and cc.jpg', 'path': 'stimuli/food/bagel and cc.jpg'},
    {'name': 'stimuli/food/froot loops w milk.jpg', 'path': 'stimuli/food/froot loops w milk.jpg'},
    {'name': 'stimuli/food/reeses.jpg', 'path': 'stimuli/food/reeses.jpg'},
    {'name': 'stimuli/food/sour patch.jpg', 'path': 'stimuli/food/sour patch.jpg'},
    {'name': 'stimuli/food/Whole milk.jpg', 'path': 'stimuli/food/Whole milk.jpg'},
    {'name': 'stimuli/food/grilled cheese.jpg', 'path': 'stimuli/food/grilled cheese.jpg'},
    {'name': 'stimuli/food/pizza.jpg', 'path': 'stimuli/food/pizza.jpg'},
    {'name': 'stimuli/food/kiwi.jpg', 'path': 'stimuli/food/kiwi.jpg'},
    {'name': 'stimuli/food/peaches.jpg', 'path': 'stimuli/food/peaches.jpg'},
    {'name': 'stimuli/food/mashed potato.jpg', 'path': 'stimuli/food/mashed potato.jpg'},
    {'name': 'stimuli/food/rigatoni and sauce.jpg', 'path': 'stimuli/food/rigatoni and sauce.jpg'},
    {'name': 'stimuli/food/cupcakes am.jpg', 'path': 'stimuli/food/cupcakes am.jpg'},
    {'name': 'stimuli/food/brownie.jpg', 'path': 'stimuli/food/brownie.jpg'},
    {'name': 'stimuli/food/raisins.jpg', 'path': 'stimuli/food/raisins.jpg'},
    {'name': 'stimuli/food/broccoli cauliflower.jpg', 'path': 'stimuli/food/broccoli cauliflower.jpg'},
    {'name': 'stimuli/food/burger.jpg', 'path': 'stimuli/food/burger.jpg'},
    {'name': 'stimuli/food/american cheese.jpg', 'path': 'stimuli/food/american cheese.jpg'},
    {'name': 'stimuli/food/orange slices.jpg', 'path': 'stimuli/food/orange slices.jpg'},
    {'name': 'stimuli/food/strawberries.jpg', 'path': 'stimuli/food/strawberries.jpg'},
    {'name': 'stimuli/practice/AA026360.png', 'path': 'stimuli/practice/AA026360.png'},
    {'name': 'stimuli/food/granola w milk.jpg', 'path': 'stimuli/food/granola w milk.jpg'},
    {'name': 'stimuli/food/hotdog w must.jpg', 'path': 'stimuli/food/hotdog w must.jpg'},
    {'name': 'stimuli/food/1%milk.jpg', 'path': 'stimuli/food/1%milk.jpg'},
    {'name': 'stimuli/food/corn cob.jpg', 'path': 'stimuli/food/corn cob.jpg'},
    {'name': 'foodChoiceTrials.xlsx', 'path': 'foodChoiceTrials.xlsx'},
    {'name': 'stimuli/food/cookies.jpg', 'path': 'stimuli/food/cookies.jpg'},
    {'name': 'stimuli/food/doughnuts.jpg', 'path': 'stimuli/food/doughnuts.jpg'},
    {'name': 'stimuli/food/french fries.jpg', 'path': 'stimuli/food/french fries.jpg'},
    {'name': 'stimuli/food/sushi w_condiments.jpg', 'path': 'stimuli/food/sushi w_condiments.jpg'},
    {'name': 'stimuli/food/ice cream sundae 002.jpg', 'path': 'stimuli/food/ice cream sundae 002.jpg'},
    {'name': 'stimuli/selection_box.png', 'path': 'stimuli/selection_box.png'},
    {'name': 'stimuli/food/tacos.jpg', 'path': 'stimuli/food/tacos.jpg'},
    {'name': 'trials.csv', 'path': 'trials.csv'},
    {'name': 'stimuli/food/trail mix.jpg', 'path': 'stimuli/food/trail mix.jpg'},
    {'name': 'stimuli/food/raisin bran w milk.jpg', 'path': 'stimuli/food/raisin bran w milk.jpg'},
    {'name': 'finalfooditems.xlsx', 'path': 'finalfooditems.xlsx'},
    {'name': 'stimuli/food/rice cakes.jpg', 'path': 'stimuli/food/rice cakes.jpg'},
    {'name': 'stimuli/food/Grapes.jpg', 'path': 'stimuli/food/Grapes.jpg'},
    {'name': 'stimuli/practice/AA026339.png', 'path': 'stimuli/practice/AA026339.png'},
    {'name': 'practice.csv', 'path': 'practice.csv'},
    {'name': 'stimuli/food/steak.jpg', 'path': 'stimuli/food/steak.jpg'},
    {'name': 'stimuli/food/bagel plain.jpg', 'path': 'stimuli/food/bagel plain.jpg'},
    {'name': 'stimuli/food/yogurt no spoon.jpg', 'path': 'stimuli/food/yogurt no spoon.jpg'},
    {'name': 'stimuli/food/baked potato.jpg', 'path': 'stimuli/food/baked potato.jpg'},
    {'name': 'stimuli/food/Hershey Kisses.jpg', 'path': 'stimuli/food/Hershey Kisses.jpg'},
    {'name': 'stimuli/food/mozarella sticks.jpg', 'path': 'stimuli/food/mozarella sticks.jpg'},
    {'name': 'stimuli/food/banana.jpg', 'path': 'stimuli/food/banana.jpg'},
    {'name': 'stimuli/food/baguette oil.jpg', 'path': 'stimuli/food/baguette oil.jpg'},
    {'name': 'stimuli/food/lollipops.jpg', 'path': 'stimuli/food/lollipops.jpg'},
    {'name': 'stimuli/food/Tribe humus pita.jpg', 'path': 'stimuli/food/Tribe humus pita.jpg'},
    {'name': 'stimuli/food/air popcorn.jpg', 'path': 'stimuli/food/air popcorn.jpg'},
    {'name': 'stimuli/food/baby cheese.jpg', 'path': 'stimuli/food/baby cheese.jpg'},
    {'name': 'finalfooditems.csv', 'path': 'finalfooditems.csv'}
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
var outline_shape;
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
var food_slide_showClock;
var slide_show_img;
var start_food_ratingsClock;
var start_food_rat_key;
var start_food_rat_text;
var rateFoodClock;
var food_slider;
var slideshow_foodImage;
var next_button;
var check_space_key;
var fixation_750msClock;
var text;
var sort_foodClock;
var hide_mouse_routineClock;
var prac_instrClock;
var text_3;
var key_resp_3;
var practice_choiceClock;
var choice_resp_2;
var practice_img_A;
var practice_img_B;
var practice_feedbackClock;
var practice_img_A_feedback;
var practice_img_2_feedback;
var choice_instrClock;
var text_4;
var key_resp_2;
var choiceClock;
var thisImageA;
var thisImageB;
var bonus_img_left;
var bonus_img_right;
var bonus_choice;
var thisImage_obj;
var thisImage_obj_A;
var thisImage_obj_B;
var trialN;
var bonus_img;
var choice_resp;
var image_A;
var image_B;
var choice_feedbackClock;
var ImageA;
var ImageB;
var colorblindnessClock;
var colorblind_txt;
var full_color_vision;
var enderClock;
var text_5;
var key_resp_4;
var reward_infoClock;
var nseconds;
var text_6;
var key_resp_5;
var image_left;
var image_right;
var view_rewardClock;
var bous_img;
var bonus_img_txt;
var exit_rsp;
var end_experimentClock;
var end_exp_txt;
var new_url;
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
  outline_shape = new visual.ImageStim({"win": psychoJS.window, "name": "outline_shape", "image": "stimuli/selection_box.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0, 0], "size": [0.5, 0.5], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": 0.0});
  
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
      // Settings
      let nTrial = 45;
      let minDiff = 0.5;
      let maxDiff = 3;
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
  
      for (i=0;i<=nTrial;i++) {
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
  
      for (i=0;i<=nTrial;i++) {
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
  
      for (i=0;i<=nTrial;i++) {
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
      console.log("Number of food choice trials: ", foodDF.length);
      console.log("These are the foods we'll use",foodDF);
  
  }
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from instr_dict
  nrounds = 135;
  
  instr_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from set_ex_images
  food_image_1 = new visual.ImageStim({"win": psychoJS.window, "name": "food_image", "image": "stimuli/practice/AA026337.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [(- 0.3), (- 0.1)], "size": [0.3, 0.3], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  food_image_2 = new visual.ImageStim({"win": psychoJS.window, "name": "food_image", "image": "stimuli/practice/AA026339.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0.3, (- 0.1)], "size": [0.3, 0.3], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  drug_image = new visual.ImageStim({"win": psychoJS.window, "name": "drug_image", "image": "stimuli/practice/AA026307.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [(- 0.3), (- 0.1)], "size": [0.25, 0.25], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": false, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 1.0)});
  social_image = new visual.ImageStim({"win": psychoJS.window, "name": "social_image", "image": "stimuli/practice/AA026307.png", "mask": null, "anchor": "center", "ori": 0.0, "pos": [0.3, (- 0.1)], "size": [0.25, 0.25], "color": [1, 1, 1], "colorSpace": "rgb", "opacity": null, "flipHoriz": true, "flipVert": false, "texRes": 128.0, "interpolate": false, "depth": (- 2.0)});
  
  // Initialize components for Routine "food_slide_show"
  food_slide_showClock = new util.Clock();
  slide_show_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slide_show_img', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
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
  
  slideshow_foodImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slideshow_foodImage', units : undefined, 
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
  
  // Initialize components for Routine "fixation_750ms"
  fixation_750msClock = new util.Clock();
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
  // Initialize components for Routine "hide_mouse_routine"
  hide_mouse_routineClock = new util.Clock();
  // Initialize components for Routine "prac_instr"
  prac_instrClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: "Before you start the main task, you will complete a few practice rounds.\n\nSelect the food item which you'd prefer to consume at the end of the experiment. Use the F key to select the image on the left and the J key to select the image on the right.\n\nWhen you are ready, press the SPACE BAR to begin.\n",
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
  choice_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  practice_img_A = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_img_A', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.45), 0], size : [0.25, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  practice_img_B = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_img_B', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.45, 0], size : [0.25, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  practice_img_A_feedback = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_img_A_feedback', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.45), 0], size : [0.25, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  practice_img_2_feedback = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_img_2_feedback', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.45, 0], size : [0.25, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "choice_instr"
  choice_instrClock = new util.Clock();
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
  // Run 'Begin Experiment' code from outline_settings
  thisImageA = [];
  thisImageB = [];
  bonus_img_left = [];
  bonus_img_right = [];
  bonus_choice = [];
  thisImage_obj = [];
  thisImage_obj_A = [];
  thisImage_obj_B = [];
  trialN = [];
  bonus_img = [];
  
  choice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_A = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_A', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.45), 0], size : [0.45, 0.45],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_B = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_B', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.45, 0], size : [0.45, 0.45],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "choice_feedback"
  choice_feedbackClock = new util.Clock();
  ImageA = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ImageA', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.45), 0], size : [0.45, 0.45],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ImageB = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ImageB', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.45, 0], size : [0.45, 0.45],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
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
  
  // Initialize components for Routine "reward_info"
  reward_infoClock = new util.Clock();
  // Run 'Begin Experiment' code from bonus_txt
  nseconds = 10;
  
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
  
  image_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.35), (- 0.25)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.35, (- 0.25)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "view_reward"
  view_rewardClock = new util.Clock();
  bous_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bous_img', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  bonus_img_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'bonus_img_txt',
    text: 'Press the Space Bar to Exit',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  exit_rsp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_experiment"
  end_experimentClock = new util.Clock();
  end_exp_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_exp_txt',
    text: 'Thank you for your time\nPlease DO NOT close browser\nYou will be redirected shortly',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  var new_url;
  new_url = 'https://app.prolific.com/submissions/complete?cc=C1NBBPAC';
  console.log(new_url);
  psychoJS.setRedirectUrls(new_url, '');
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
    document.body.style.cursor='none';
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
        instr_strs[0] = `Today, you will make some choices about foods. There are multiple parts to this study. Please pay attention to the instructions for each part, as they can be different.`;
        instr_strs[1] = `Here are two diffferent food examples
    
    
    
    
    
    
    
    
    
    
    
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
        instr_strs[0] = `Welcome to the study!
    Before we begin, please close any unnecessary programs or applications on your computer. This will help the study run more smoothly.
    Also, please close any browser tabs that could produce popups or alerts that would interfere with the study. Finally, once the study has started, DO NOT EXIT fullscreen mode.`
    ;
        instr_strs[1] = `Today, your task will be to make decisions involving food items, like the examples in the food images below. There are multuple parts to this study. Please pay attention to the instructions for each part, as each one is different.
    
    
    
    
    
    
    
    
    
    
    
    `
    ;
        instr_strs[2] = `When making choices involving food images, please imagine what it would be like to consume the associated food items. Based on your actual choices, you will be given the opportunity to view a food image at the end of the study.`;
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
        if ((curr_instr === 2)) {
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
            if ((curr_instr === 1)) {
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
      const slide_show_loopLoopScheduler = new Scheduler(psychoJS);
      skip_foodLoopScheduler.add(slide_show_loopLoopBegin(slide_show_loopLoopScheduler, snapshot));
      skip_foodLoopScheduler.add(slide_show_loopLoopScheduler);
      skip_foodLoopScheduler.add(slide_show_loopLoopEnd);
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


var slide_show_loop;
function slide_show_loopLoopBegin(slide_show_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    slide_show_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'finalfooditems.csv',
      seed: undefined, name: 'slide_show_loop'
    });
    psychoJS.experiment.addLoop(slide_show_loop); // add the loop to the experiment
    currentLoop = slide_show_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSlide_show_loop of slide_show_loop) {
      snapshot = slide_show_loop.getSnapshot();
      slide_show_loopLoopScheduler.add(importConditions(snapshot));
      slide_show_loopLoopScheduler.add(food_slide_showRoutineBegin(snapshot));
      slide_show_loopLoopScheduler.add(food_slide_showRoutineEachFrame());
      slide_show_loopLoopScheduler.add(food_slide_showRoutineEnd(snapshot));
      slide_show_loopLoopScheduler.add(slide_show_loopLoopEndIteration(slide_show_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function slide_show_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(slide_show_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function slide_show_loopLoopEndIteration(scheduler, snapshot) {
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
      food_rating_loopLoopScheduler.add(fixation_750msRoutineBegin(snapshot));
      food_rating_loopLoopScheduler.add(fixation_750msRoutineEachFrame());
      food_rating_loopLoopScheduler.add(fixation_750msRoutineEnd(snapshot));
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
      practiceLoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practiceLoopScheduler.add(practice_feedbackRoutineEachFrame());
      practiceLoopScheduler.add(practice_feedbackRoutineEnd(snapshot));
      practiceLoopScheduler.add(fixation_750msRoutineBegin(snapshot));
      practiceLoopScheduler.add(fixation_750msRoutineEachFrame());
      practiceLoopScheduler.add(fixation_750msRoutineEnd(snapshot));
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


var choice_trials;
function choice_trialsLoopBegin(choice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    choice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'foodChoiceTrials.xlsx',
      seed: undefined, name: 'choice_trials'
    });
    psychoJS.experiment.addLoop(choice_trials); // add the loop to the experiment
    currentLoop = choice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisChoice_trial of choice_trials) {
      snapshot = choice_trials.getSnapshot();
      choice_trialsLoopScheduler.add(importConditions(snapshot));
      choice_trialsLoopScheduler.add(choiceRoutineBegin(snapshot));
      choice_trialsLoopScheduler.add(choiceRoutineEachFrame());
      choice_trialsLoopScheduler.add(choiceRoutineEnd(snapshot));
      choice_trialsLoopScheduler.add(choice_feedbackRoutineBegin(snapshot));
      choice_trialsLoopScheduler.add(choice_feedbackRoutineEachFrame());
      choice_trialsLoopScheduler.add(choice_feedbackRoutineEnd(snapshot));
      choice_trialsLoopScheduler.add(fixation_750msRoutineBegin(snapshot));
      choice_trialsLoopScheduler.add(fixation_750msRoutineEachFrame());
      choice_trialsLoopScheduler.add(fixation_750msRoutineEnd(snapshot));
      choice_trialsLoopScheduler.add(choice_trialsLoopEndIteration(choice_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function choice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(choice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function choice_trialsLoopEndIteration(scheduler, snapshot) {
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


var slide_show_food;
var food_slide_showComponents;
function food_slide_showRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'food_slide_show' ---
    t = 0;
    food_slide_showClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.300000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from slide_show_code
    slide_show_food = image;
    
    slide_show_img.setImage(slide_show_food);
    // keep track of which components have finished
    food_slide_showComponents = [];
    food_slide_showComponents.push(slide_show_img);
    
    for (const thisComponent of food_slide_showComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function food_slide_showRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'food_slide_show' ---
    // get current time
    t = food_slide_showClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slide_show_img* updates
    if (t >= 0.0 && slide_show_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide_show_img.tStart = t;  // (not accounting for frame time here)
      slide_show_img.frameNStart = frameN;  // exact frame index
      
      slide_show_img.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slide_show_img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slide_show_img.setAutoDraw(false);
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
    for (const thisComponent of food_slide_showComponents)
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


function food_slide_showRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'food_slide_show' ---
    for (const thisComponent of food_slide_showComponents) {
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
    document.body.style.cursor='auto';
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
    slideshow_foodImage.setImage(thisFood);
    check_space_key.keys = undefined;
    check_space_key.rt = undefined;
    _check_space_key_allKeys = [];
    // keep track of which components have finished
    rateFoodComponents = [];
    rateFoodComponents.push(food_slider);
    rateFoodComponents.push(slideshow_foodImage);
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

    
    // *slideshow_foodImage* updates
    if (t >= 0.0 && slideshow_foodImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slideshow_foodImage.tStart = t;  // (not accounting for frame time here)
      slideshow_foodImage.frameNStart = frameN;  // exact frame index
      
      slideshow_foodImage.setAutoDraw(true);
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


var fixation_750msComponents;
function fixation_750msRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_750ms' ---
    t = 0;
    fixation_750msClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_750msComponents = [];
    fixation_750msComponents.push(text);
    
    for (const thisComponent of fixation_750msComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixation_750msRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_750ms' ---
    // get current time
    t = fixation_750msClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of fixation_750msComponents)
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


function fixation_750msRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_750ms' ---
    for (const thisComponent of fixation_750msComponents) {
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
    // Settings
    let nTrial = 45;
    let minDiff = 0.5;
    let maxDiff = 3;
    
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
    
    for (i=0;i<=nTrial;i++) {
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
    
    for (i=0;i<=nTrial;i++) {
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
    
    for (i=0;i<=nTrial;i++) {
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
    console.log("Number of food choice trials: ", foodDF.length);
    console.log("These are the foods we'll use",foodDF);
    
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
    // Run 'Begin Routine' code from hide_mouse_2
    psychoJS.window.mouseVisible = false;
    document.body.style.cursor='none';
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


var thisFoodA;
var thisFoodB;
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
    // Run 'Begin Routine' code from outline_settings_2
    thisFoodA = imageA;
    thisFoodB = imageB;
    
    choice_resp_2.keys = undefined;
    choice_resp_2.rt = undefined;
    _choice_resp_2_allKeys = [];
    practice_img_A.setImage(thisFoodA);
    practice_img_B.setImage(thisFoodB);
    // keep track of which components have finished
    practice_choiceComponents = [];
    practice_choiceComponents.push(choice_resp_2);
    practice_choiceComponents.push(practice_img_A);
    practice_choiceComponents.push(practice_img_B);
    
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
    
    
    // *practice_img_A* updates
    if (t >= 0.0 && practice_img_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_img_A.tStart = t;  // (not accounting for frame time here)
      practice_img_A.frameNStart = frameN;  // exact frame index
      
      practice_img_A.setAutoDraw(true);
    }

    
    // *practice_img_B* updates
    if (t >= 0.0 && practice_img_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_img_B.tStart = t;  // (not accounting for frame time here)
      practice_img_B.frameNStart = frameN;  // exact frame index
      
      practice_img_B.setAutoDraw(true);
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
function practice_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_choice' ---
    for (const thisComponent of practice_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from outline_settings_2
    if ((choice_resp_2.keys === "f")) {
        made_choice = 1;
        this_trial_choice = "left";
        outline_shape.setPos([(- 0.45), 0], {"log": true});
        outline_shape.setSize(0.3, 0.35);
        outline_shape.setAutoDraw(true);
    } else {
        if ((choice_resp_2.keys === "j")) {
            made_choice = 1;
            this_trial_choice = "right";
            outline_shape.setPos([0.45, 0], {"log": true});
            outline_shape.setSize(0.3, 0.35);
            outline_shape.setAutoDraw(true);
        }
    }
    psychoJS.experiment.addData("agent_choice", this_trial_choice);
    
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


var practice_feedbackComponents;
function practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_feedback' ---
    t = 0;
    practice_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from practice_feedback_2
    thisFoodA = imageA;
    thisFoodB = imageB;
    if ((this_trial_choice === "left")) {
        outline_shape.setPos([(- 0.45), 0], {"log": true});
        outline_shape.setSize(0.3, 0.35);
        outline_shape.setAutoDraw(true);
    } else {
        if ((this_trial_choice === "right")) {
            outline_shape.setPos([0.45, 0], {"log": true});
            outline_shape.setSize(0.3, 0.35);
            outline_shape.setAutoDraw(true);
        }
    }
    
    practice_img_A_feedback.setImage(thisFoodA);
    practice_img_2_feedback.setImage(thisFoodB);
    // keep track of which components have finished
    practice_feedbackComponents = [];
    practice_feedbackComponents.push(practice_img_A_feedback);
    practice_feedbackComponents.push(practice_img_2_feedback);
    
    for (const thisComponent of practice_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_feedback' ---
    // get current time
    t = practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_img_A_feedback* updates
    if (t >= 0.0 && practice_img_A_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_img_A_feedback.tStart = t;  // (not accounting for frame time here)
      practice_img_A_feedback.frameNStart = frameN;  // exact frame index
      
      practice_img_A_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_img_A_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_img_A_feedback.setAutoDraw(false);
    }
    
    // *practice_img_2_feedback* updates
    if (t >= 0.0 && practice_img_2_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_img_2_feedback.tStart = t;  // (not accounting for frame time here)
      practice_img_2_feedback.frameNStart = frameN;  // exact frame index
      
      practice_img_2_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_img_2_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_img_2_feedback.setAutoDraw(false);
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
    for (const thisComponent of practice_feedbackComponents)
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


function practice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_feedback' ---
    for (const thisComponent of practice_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from practice_feedback_2
    outline_shape.setAutoDraw(false);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_task_txt_disp;
var _key_resp_2_allKeys;
var choice_instrComponents;
function choice_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice_instr' ---
    t = 0;
    choice_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from start_task_txt
    if ((BONUS_BOOL === 1)) {
        start_task_txt_disp = "You are now ready to begin the experiment. In this portion of the study, you will no longer be shown how much each treasure chest is worth. Remember, your bonus payment will depend on your choices in this phase. At the end of the experiment, one random round will be selected, and you will get points for whichever option you chose.\n\nWhen you are ready, press the SPACE BAR to continue.";
    } else {
        start_task_txt_disp = "You are now ready to begin the Food Choice Task. Remember, use the F key to select the image on the left and the J key to select the image on the right.\n\nWhen you are ready, press the SPACE BAR to continue.";
    }
    
    text_4.setText(start_task_txt_disp);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    choice_instrComponents = [];
    choice_instrComponents.push(text_4);
    choice_instrComponents.push(key_resp_2);
    
    for (const thisComponent of choice_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice_instr' ---
    // get current time
    t = choice_instrClock.getTime();
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
    for (const thisComponent of choice_instrComponents)
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


function choice_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice_instr' ---
    for (const thisComponent of choice_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_2.stop();
    // the Routine "choice_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


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
    // Run 'Begin Routine' code from outline_settings
    thisImage_obj = foodDF[(TrialN - 1)];
    thisImage_obj_A = thisImage_obj.item_a_img;
    thisImage_obj_B = thisImage_obj.item_b_img;
    thisImageA = thisImage_obj_A.image;
    thisImageB = thisImage_obj_B.image;
    
    choice_resp.keys = undefined;
    choice_resp.rt = undefined;
    _choice_resp_allKeys = [];
    image_A.setImage(thisImageA);
    image_B.setImage(thisImageB);
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(choice_resp);
    choiceComponents.push(image_A);
    choiceComponents.push(image_B);
    
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
    
    
    // *image_A* updates
    if (t >= 0.0 && image_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_A.tStart = t;  // (not accounting for frame time here)
      image_A.frameNStart = frameN;  // exact frame index
      
      image_A.setAutoDraw(true);
    }

    
    // *image_B* updates
    if (t >= 0.0 && image_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_B.tStart = t;  // (not accounting for frame time here)
      image_B.frameNStart = frameN;  // exact frame index
      
      image_B.setAutoDraw(true);
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
        outline_shape.setPos([(- 0.45), 0], {"log": true});
        outline_shape.setSize(0.5, 0.5);
        outline_shape.setAutoDraw(true);
    } else {
        if ((choice_resp.keys === "j")) {
            this_trial_choice = "right";
            outline_shape.setPos([0.45, 0], {"log": true});
            outline_shape.setSize(0.5, 0.5);
            outline_shape.setAutoDraw(true);
        }
    }
    psychoJS.experiment.addData("agent_choice", this_trial_choice);
    if ((TrialN === 15)) {
        bonus_img_left = thisImageA;
        bonus_img_right = thisImageB;
        if ((this_trial_choice === "left")) {
            bonus_choice = "left";
            bonus_img = thisImageA;
        }
        if ((this_trial_choice === "right")) {
            bonus_choice = "right";
            bonus_img = thisImageB;
        }
    }
    
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


var choice_feedbackComponents;
function choice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice_feedback' ---
    t = 0;
    choice_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from choice_feedback_2
    if ((this_trial_choice === "left")) {
        outline_shape.setPos([(- 0.45), 0], {"log": true});
        outline_shape.setSize(0.5, 0.5);
        outline_shape.setAutoDraw(true);
    } else {
        if ((this_trial_choice === "right")) {
            outline_shape.setPos([0.45, 0], {"log": true});
            outline_shape.setSize(0.5, 0.5);
            outline_shape.setAutoDraw(true);
        }
    }
    
    ImageA.setImage(thisImageA);
    ImageB.setImage(thisImageB);
    // keep track of which components have finished
    choice_feedbackComponents = [];
    choice_feedbackComponents.push(ImageA);
    choice_feedbackComponents.push(ImageB);
    
    for (const thisComponent of choice_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice_feedback' ---
    // get current time
    t = choice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ImageA* updates
    if (t >= 0.0 && ImageA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ImageA.tStart = t;  // (not accounting for frame time here)
      ImageA.frameNStart = frameN;  // exact frame index
      
      ImageA.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ImageA.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ImageA.setAutoDraw(false);
    }
    
    // *ImageB* updates
    if (t >= 0.0 && ImageB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ImageB.tStart = t;  // (not accounting for frame time here)
      ImageB.frameNStart = frameN;  // exact frame index
      
      ImageB.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ImageB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ImageB.setAutoDraw(false);
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
    for (const thisComponent of choice_feedbackComponents)
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


function choice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice_feedback' ---
    for (const thisComponent of choice_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from choice_feedback_2
    outline_shape.setAutoDraw(false);
    
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
        ender_txt_disp = "Congratulations - you have completed all of the tasks!\n\nPress the SPACE BAR to exit.";
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


var bonus_txt_disp;
var _key_resp_5_allKeys;
var reward_infoComponents;
function reward_infoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_info' ---
    t = 0;
    reward_infoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from bonus_txt
    bonus_txt_disp = `On this round, you chose the highlighted item. As your reward, you will be able to view this image.
    
    Press the SPACE BAR to view this food image.
    
    
    
    
    `
    ;
    if ((bonus_choice === "left")) {
        outline_shape.setPos([(- 0.35), (- 0.25)], {"log": true});
        outline_shape.setSize([0.35, 0.35]);
        outline_shape.setAutoDraw(true);
    } else {
        if ((bonus_choice === "right")) {
            outline_shape.setPos([0.35, (- 0.25)], {"log": true});
            outline_shape.setSize([0.35, 0.35]);
            outline_shape.setAutoDraw(true);
        }
    }
    
    text_6.setText(bonus_txt_disp);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    image_left.setImage(bonus_img_left);
    image_right.setImage(bonus_img_right);
    // keep track of which components have finished
    reward_infoComponents = [];
    reward_infoComponents.push(text_6);
    reward_infoComponents.push(key_resp_5);
    reward_infoComponents.push(image_left);
    reward_infoComponents.push(image_right);
    
    for (const thisComponent of reward_infoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reward_infoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_info' ---
    // get current time
    t = reward_infoClock.getTime();
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
    
    
    // *image_left* updates
    if (t >= 0.0 && image_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left.tStart = t;  // (not accounting for frame time here)
      image_left.frameNStart = frameN;  // exact frame index
      
      image_left.setAutoDraw(true);
    }

    
    // *image_right* updates
    if (t >= 0.0 && image_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right.tStart = t;  // (not accounting for frame time here)
      image_right.frameNStart = frameN;  // exact frame index
      
      image_right.setAutoDraw(true);
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
    for (const thisComponent of reward_infoComponents)
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


function reward_infoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_info' ---
    for (const thisComponent of reward_infoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from bonus_txt
    outline_shape.setAutoDraw(false);
    
    key_resp_5.stop();
    // the Routine "reward_info" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exit_rsp_allKeys;
var view_rewardComponents;
function view_rewardRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'view_reward' ---
    t = 0;
    view_rewardClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    bous_img.setImage(bonus_img);
    exit_rsp.keys = undefined;
    exit_rsp.rt = undefined;
    _exit_rsp_allKeys = [];
    // keep track of which components have finished
    view_rewardComponents = [];
    view_rewardComponents.push(bous_img);
    view_rewardComponents.push(bonus_img_txt);
    view_rewardComponents.push(exit_rsp);
    
    for (const thisComponent of view_rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function view_rewardRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'view_reward' ---
    // get current time
    t = view_rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bous_img* updates
    if (t >= 0.0 && bous_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bous_img.tStart = t;  // (not accounting for frame time here)
      bous_img.frameNStart = frameN;  // exact frame index
      
      bous_img.setAutoDraw(true);
    }

    
    // *bonus_img_txt* updates
    if (t >= 0.5 && bonus_img_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bonus_img_txt.tStart = t;  // (not accounting for frame time here)
      bonus_img_txt.frameNStart = frameN;  // exact frame index
      
      bonus_img_txt.setAutoDraw(true);
    }

    
    // *exit_rsp* updates
    if (t >= 0.0 && exit_rsp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_rsp.tStart = t;  // (not accounting for frame time here)
      exit_rsp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exit_rsp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exit_rsp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exit_rsp.clearEvents(); });
    }

    if (exit_rsp.status === PsychoJS.Status.STARTED) {
      let theseKeys = exit_rsp.getKeys({keyList: ['space'], waitRelease: false});
      _exit_rsp_allKeys = _exit_rsp_allKeys.concat(theseKeys);
      if (_exit_rsp_allKeys.length > 0) {
        exit_rsp.keys = _exit_rsp_allKeys[_exit_rsp_allKeys.length - 1].name;  // just the last key pressed
        exit_rsp.rt = _exit_rsp_allKeys[_exit_rsp_allKeys.length - 1].rt;
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
    for (const thisComponent of view_rewardComponents)
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


function view_rewardRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'view_reward' ---
    for (const thisComponent of view_rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exit_rsp.corr, level);
    }
    psychoJS.experiment.addData('exit_rsp.keys', exit_rsp.keys);
    if (typeof exit_rsp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exit_rsp.rt', exit_rsp.rt);
        routineTimer.reset();
        }
    
    exit_rsp.stop();
    // the Routine "view_reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_experimentComponents;
function end_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_experiment' ---
    t = 0;
    end_experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    end_experimentComponents = [];
    end_experimentComponents.push(end_exp_txt);
    
    for (const thisComponent of end_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_experiment' ---
    // get current time
    t = end_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_exp_txt* updates
    if (t >= 0.0 && end_exp_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp_txt.tStart = t;  // (not accounting for frame time here)
      end_exp_txt.frameNStart = frameN;  // exact frame index
      
      end_exp_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_exp_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_exp_txt.setAutoDraw(false);
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
    for (const thisComponent of end_experimentComponents)
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


function end_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_experiment' ---
    for (const thisComponent of end_experimentComponents) {
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
