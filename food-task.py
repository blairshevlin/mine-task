#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on March 18, 2024, at 10:22
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022.2.5')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'crystals'  # from the Builder filename that created this script
expInfo = {
    'participant': '666',
    'group': ['food','drug'],
    'extra': [0,1],
    'practice': [1,0],
    'dorate': [1,0],
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/sub-%s_task-%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\blair\\Documents\\Research\\Sinai-K-Proj\\experiments\\pilot-food-prolific\\food-task\\food-task.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 960], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "start_exp" ---
# Run 'Begin Experiment' code from check_bonus
if expInfo['extra'] == '1':
    BONUS_BOOL = 1
elif expInfo['extra'] == '0':
    BONUS_BOOL = 0
    
participant_id = expInfo["participant"]
# Run 'Begin Experiment' code from check_practice
from random import shuffle
# Run 'Begin Experiment' code from check_stim
if expInfo['group'] == 'food':
    FOOD_BOOL = 1
    foodDF = [];
    print('Food')        
else:
    FOOD_BOOL = 0
if expInfo['group'] == 'drug':
    DRUG_BOOL = 1
    print('Drug')
else:
    DRUG_BOOL = 0
# Run 'Begin Experiment' code from check_rate_js
#import pandas as pd
#import numpy as np
#import itertools
#pd.set_option('mode.chained_assignment', None)

#foodDF = pd.DataFrame(columns=['id', 'image', 'rating', 'val_cat', 'nrepeat','rank', 'whichItem', "diff"])
# Create dictionary
foodDF = {
    'id': [],
    'image': [],
    'rating': [],
    'val_cat': [],
    'nrepeat': [],
     'rank': [],
     'whichItem': [],
     "diff": []
}
    
if expInfo['dorate'] == '1':
    RATE_BOOL = 1
    print('Doing Ratings')
else:
    RATE_BOOL = 0
    print('Not Doing Ratings')



# --- Initialize components for Routine "instr_1" ---
# Run 'Begin Experiment' code from instr_dict
nrounds = 150
instr_keyboard = keyboard.Keyboard()
# Run 'Begin Experiment' code from set_ex_images
food_image_1 = visual.ImageStim(
    win=win,
    name='food_image', 
    image='stimuli/food/AA026307.png', mask=None, anchor='center',
    ori=0.0, pos=(-.300, -.1), size=(1, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-1.0)
food_image_2 = visual.ImageStim(
    win=win,
    name='food_image', 
    image='stimuli/food/AA026339.png', mask=None, anchor='center',
    ori=0.0, pos=(.300, -.1), size=(1, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-1.0)
drug_image = visual.ImageStim(
    win=win,
    name='drug_image', 
    image='stimuli/food/AA026307.png', mask=None, anchor='center',
    ori=0.0, pos=(-.300, -.1), size=(.25, .25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-1.0)
social_image = visual.ImageStim(
    win=win,
    name='social_image', 
    image='stimuli/food/AA026307.png', mask=None, anchor='center',
    ori=0.0, pos=(.300, -.1), size=(.25, .25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=False, depth=-2.0)



# --- Initialize components for Routine "start_food_ratings" ---
start_food_rat_key = keyboard.Keyboard()
start_food_rat_text = visual.TextStim(win=win, name='start_food_rat_text',
    text='You will now view a series of food images. Using the mouse, please indicate how much you would like to consume food in each image, on a scale from 1 ("Not at al") to 10 ("Very much"). \n\nPress the RIGHT ARROW to start.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "rateFood" ---
food_slider = visual.Slider(win=win, name='food_slider',
    startValue=None, size=(1.0, 0.05), pos=(0, -0.175), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), granularity=0.1,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, ori=0.0, depth=-1, readOnly=False)
foodImage = visual.ImageStim(
    win=win,
    name='foodImage', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
next_button = visual.ButtonStim(win, 
    text='Press Spacebar To Continue', font='Arvo',
    pos=(0, -0.4),
    letterHeight=0.03,
    size=[0.5, 0.13], borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='next_button'
)
next_button.buttonClock = core.Clock()
check_space_key = keyboard.Keyboard()
# Run 'Begin Experiment' code from filterFood
if RATE_BOOL != "0":
        food_ratings_df = {"id": [], "image": [], "rating": [], "val_cat": [], "nrepeat": []};


# --- Initialize components for Routine "fixation_500ms" ---
text = visual.TextStim(win=win, name='text',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.075, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "sort_food" ---

# --- Initialize components for Routine "choose_food" ---
# Run 'Begin Experiment' code from select_food_image
thisImage = []
food_img_choice = visual.ImageStim(
    win=win,
    name='food_img_choice', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# --- Initialize components for Routine "hide_mouse_routine" ---

# --- Initialize components for Routine "instr_2" ---
# Run 'Begin Experiment' code from instr_dict_2
days = 10
rounds = 15
instr_2_resp = keyboard.Keyboard()

# --- Initialize components for Routine "prac_instr" ---
text_3 = visual.TextStim(win=win, name='text_3',
    text="You’ve completed the training phase. Before we start the experiment, let's try a few final practice rounds.\n\nSelect the better of the two treasure chests, and we will show you how many points you would be awarded for your choice.\n\nWhen you are ready, press the SPACE BAR to begin.\n",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# --- Initialize components for Routine "practice_choice" ---
# Run 'Begin Experiment' code from draw_chests_2
left_chest = visual.ImageStim(
    win=win,
    name='left_chest', 
    image='stimuli/chest.png', mask=None, anchor='center',
    ori=0.0, pos=(-.375, 0), size=(1, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-1.0)
right_chest = visual.ImageStim(
    win=win,
    name='right_chest', 
    image='stimuli/chest.png', mask=None, anchor='center',
    ori=0.0, pos=(.375, 0), size=(1, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=False, depth=-2.0)
choice_resp_2 = keyboard.Keyboard()

# --- Initialize components for Routine "fixation_500ms" ---
text = visual.TextStim(win=win, name='text',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.075, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "self_instr" ---
text_4 = visual.TextStim(win=win, name='text_4',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()

# --- Initialize components for Routine "choice" ---
# Run 'Begin Experiment' code from draw_chests
left_chest = visual.ImageStim(
    win=win,
    name='left_chest', 
    image='stimuli/chest.png', mask=None, anchor='center',
    ori=0.0, pos=(-.375, 0), size=(.6, .5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-1.0)
right_chest = visual.ImageStim(
    win=win,
    name='right_chest', 
    image='stimuli/chest.png', mask=None, anchor='center',
    ori=0.0, pos=(.375, 0), size=(.6, .5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=False, depth=-2.0)
# Run 'Begin Experiment' code from set_shards
bonus_amt_pts = 20
#all_shards_size = (.1175, .1175)
#left_shards_pos = [[-.505, -.06225], [-.375, -.06225], [-.245, -.06225], 
#                   [-.505, -.17225], [-.375, -.17225], [-.245, -.17225]]
#right_shards_pos = [[.505, -.06225], [.375, -.06225], [.245, -.06225], 
#                   [.505, -.17225], [.375, -.17225], [.245, -.17225]]
left_shard_5 = visual.ImageStim(
    win=win,
    name='left_shard_5', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[left_shards_pos[5]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
right_shard_0 = visual.ImageStim(
    win=win,
    name='right_shard_0', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[right_shards_pos[0]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
right_shard_1 = visual.ImageStim(
    win=win,
    name='right_shard_1', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[right_shards_pos[1]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
right_shard_2 = visual.ImageStim(
    win=win,
    name='right_shard_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[right_shards_pos[2]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
right_shard_3 = visual.ImageStim(
    win=win,
    name='right_shard_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[right_shards_pos[3]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
right_shard_4 = visual.ImageStim(
    win=win,
    name='right_shard_4', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[right_shards_pos[4]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-9.0)
right_shard_5 = visual.ImageStim(
    win=win,
    name='right_shard_5', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[right_shards_pos[5]], size=all_shards_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-10.0)
choice_resp = keyboard.Keyboard()

# --- Initialize components for Routine "fixation_500ms" ---
text = visual.TextStim(win=win, name='text',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.075, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "colorblindness" ---
colorblind_txt = visual.TextStim(win=win, name='colorblind_txt',
    text="Do you have full color vision?\n\nPress 'Y' for yes and 'N' for no.",
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
full_color_vision = keyboard.Keyboard()

# --- Initialize components for Routine "ender" ---
text_5 = visual.TextStim(win=win, name='text_5',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_4 = keyboard.Keyboard()

# --- Initialize components for Routine "reward" ---
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_5 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "start_exp" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from hide_mouse
myMouse = event.Mouse()
myMouse.setPos(newPos=(1,1))

win.mouseVisible = False
# Run 'Begin Routine' code from check_practice
if expInfo['practice'] == '1':
    PRACTICE_BOOL = 1
elif expInfo['practice'] == '0':
    PRACTICE_BOOL = 0
# Run 'Begin Routine' code from check_rate_js
# Code to randomly generating ratings
if RATE_BOOL == '0':
    # Defunct version with pandas and numpy (RIP)
   # foodData = pd.read_excel("finalfooditems.xlsx")
    #food_ratings_df = pd.DataFrame(columns=['image', 'ratings', 'val_cat', 'nrepeat'])

    #food_ratings_df['image'] = foodData["image"]
    #food_ratings_df['ratings'] = np.random.uniform(low = 1.0, high = 10.0, size = len(foodData))
    #food_ratings_df['val_cat'] = np.where(food_ratings_df['ratings'] <= 3.33, "LV", np.where(food_ratings_df['ratings'] >= 6.67, "HV", "MV"))
   
    food_ratings_df = {
        'id': [],
        'image': [],
        'rating': [],
        'val_cat': [],
        'nrepeat': []
    }

    num_rows = len(foods)
    
    for i in range(num_rows):
        food_ratings_df['id'].append(i + 1)
        food_ratings_df['image'].append(foods[i])
        rating = round(Math.random() * 11, 2)
        food_ratings_df['rating'].append(rating)
        
        if rating <= 3.33:
            food_ratings_df['val_cat'].append("LV")
        elif rating >= 6.67:
            food_ratings_df['val_cat'].append("HV")
        else:
            food_ratings_df['val_cat'].append("MV")
            
        food_ratings_df['nrepeat'].append(0)

# keep track of which components have finished
start_expComponents = []
for thisComponent in start_expComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "start_exp" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in start_expComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "start_exp" ---
for thisComponent in start_expComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from check_rate_js
if RATE_BOOL == '0':
    # Create a set of 3 images per category such that each image has the same difference
    ## That is LV1 - LV2 == HV1 - HV2 == MV1 - MV2

   ## Separate foods based on value category
    HVdf = []
    MVdf = []
    LVdf = []

    for i in range(len(food_ratings_df['val_cat'])):
        if food_ratings_df['val_cat'][i] == 'HV':
            HVdf.append(i)
        elif food_ratings_df['val_cat'][i] == 'MV':
            MVdf.append(i)
        elif food_ratings_df['val_cat'][i] == 'LV':
            LVdf.append(i)
               
    # Generate ranks
    HVdf_ranking = []
    MVdf_ranking = []
    LVdf_ranking = []
    
    for i in range(len(HVdf)):
        HVdf_ranking.append(0)
    for i in range(len(MVdf)):
        MVdf_ranking.append(0)
    for i in range(len(LVdf)):
        LVdf_ranking.append(0)

    for i in range(len(HVdf)):
        for j in range(len(HVdf)):
            if i != j and food_ratings_df['rating'][HVdf[i]] < food_ratings_df['rating'][HVdf[j]]:
                HVdf_ranking[i] += 1
    for i in range(len(MVdf)):
        for j in range(len(MVdf)):
            if i != j and food_ratings_df['rating'][MVdf[i]] < food_ratings_df['rating'][MVdf[j]]:
                MVdf_ranking[i] += 1
    for i in range(len(LVdf)):
        for j in range(len(LVdf)):
            if i != j and food_ratings_df['rating'][LVdf[i]] < food_ratings_df['rating'][LVdf[j]]:
                LVdf_ranking[i] += 1
                
    #See if we can find pairs with the same value-difference
    got_em = 0
    jitterHV = 0 # for adjusting the median around
    jitterMV = 0
    jitterLV = 0
    

    # Use chatgbt here
# the Routine "start_exp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instr_1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from instr_dict
instr_back_txt = visual.TextStim(win=win, name='back_forth',
    text='',
    font='Arial',
    pos=(0, -.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

instr_back_txt.text = '\nPress RIGHT ARROW to continue.'
instr_back_txt.autoDraw = True
#win.flip()

# 1 - Display treasure chests
# 5 - Display rainbow

if BONUS_BOOL == 1:
    instr_strs = {}
    instr_strs[0] = f'Today, your task will be to make a series of choices between two treasure chests. Each chest will contain a variety of crystals inside.\n\nFor your participation today, you will gain a bonus based on your choices.'
    instr_strs[1] = f'Here are two diffferent treasure chest examples\n\n\n\n\n\n\n\n\n\n\n\n\n'
    instr_strs[2] = f'Over {nrounds} rounds, you will be choosing the better of two treasure chests. The value of each treasure chest is simply the sum of the values of each crystal in the chest. The crystals are each worth a different number of points depending on their color, and each color is equally likely to appear. In this task, every point is worth {conversion_rate*100} cents. In order to know the value of a treasure chest, you will first need to learn what each color is worth.\n\n\n'
    instr_strs[3] = f'The following screen will display the colors you will see throughout this task.'
    instr_strs[4] = f'The value of the colors increases across the spectrum, from left to right.\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
else:
    instr_strs = {}
    instr_strs[0] = f'Today, your task will be to mine for treasure chests. Each chest will contain a variety of crystals inside, representing different types of rewards.\n\n\n'
    instr_strs[1] = f'Here are two diffferent treasure chest examples\n\n\n\n\n\n\n\n\n\n\n\n\n'
    if FOOD_BOOL == 1:
        instr_strs[2] = f'Different crystals can be exchanged for different types of rewards. Some crystals can be exchanged for images of food, while others can be exchanged for images of social gatherings.\n\n\n\n\n\n\n\n'
    else:
        instr_strs[2] = f'Different crystals can be exchanged for different types of rewards. Some crystals can be exchanged for images of drugs, while others can be exchanged for images of social gatherings.\n\n\n\n\n\n\n\n'
    instr_strs[3] = f'Before you start learning about the crystals, you will first rate a series of images. This will ensure that the rewards are tailored to your specific preferences.'

instr_disp_txt = visual.TextStim(win=win, name='instructions',
    text='',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_disp_txt.text = instr_strs[0]
instr_disp_txt.autoDraw = True

curr_instr = 0

instr_keyboard.keys = []
instr_keyboard.rt = []
_instr_keyboard_allKeys = []
# keep track of which components have finished
instr_1Components = [instr_keyboard]
for thisComponent in instr_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instr_1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from instr_dict
    instr_keys = event.getKeys()
    
    if curr_instr == 0:
        instr_back_txt.text = '\nPress RIGHT ARROW to continue.'
    
        if 'right' in instr_keys:
            instr_keyboard.clearEvents()
            curr_instr += 1
            instr_disp_txt.text = instr_strs[curr_instr]
            instr_back_txt.autoDraw = True
    #        win.flip()
    elif curr_instr == 3: #Last slide
        instr_back_txt.text = 'Press LEFT ARROW to go back.\nPress RIGHT ARROW to begin.'
        if 'right' in instr_keys:
            instr_keyboard.clearEvents()
            continueRoutine = False
        elif 'left' in instr_keys:
            instr_keyboard.clearEvents()
            curr_instr -= 1
            instr_disp_txt.text = instr_strs[curr_instr]
            
            # if prev instr == 0, then remove left arrow as option
            if curr_instr == 0:
                instr_back_txt.autoDraw = False
            else:
                instr_back_txt.autoDraw = True
    else:
        if curr_instr == 2:
            #social_image.setAutoDraw(True)
            if FOOD_BOOL == 1:
                food_image_1.setAutoDraw(True)
                food_image_2.setAutoDraw(True)
            else:
                drug_image.setAutoDraw(True)
            
        instr_back_txt.text = 'Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.'
        if 'right' in instr_keys:
            social_image.setAutoDraw(False)
            food_image_1.setAutoDraw(False)
            food_image_2.setAutoDraw(False)
            drug_image.setAutoDraw(False)
            
            instr_keyboard.clearEvents()
            curr_instr += 1
            instr_disp_txt.text = instr_strs[curr_instr]
            instr_back_txt.autoDraw = True
    #        win.flip()
        elif 'left' in instr_keys:
            
            social_image.setAutoDraw(False)
            food_image_1.setAutoDraw(False)
            food_image_2.setAutoDraw(False)
            drug_image.setAutoDraw(False)
            
            instr_keyboard.clearEvents()
            curr_instr -= 1
            instr_disp_txt.text = instr_strs[curr_instr]
            
            # if prev instr == 0, then remove left arrow as option
            if curr_instr == 0:
                instr_back_txt.text = '\nPress RIGHT ARROW to continue.'
            else:
                instr_back_txt.text = 'Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.'
                
    #        win.flip()
    
    # *instr_keyboard* updates
    waitOnFlip = False
    if instr_keyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_keyboard.frameNStart = frameN  # exact frame index
        instr_keyboard.tStart = t  # local t and not account for scr refresh
        instr_keyboard.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_keyboard, 'tStartRefresh')  # time at next scr refresh
        instr_keyboard.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_keyboard.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_keyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_keyboard.status == STARTED and not waitOnFlip:
        theseKeys = instr_keyboard.getKeys(keyList=['left','right'], waitRelease=False)
        _instr_keyboard_allKeys.extend(theseKeys)
        if len(_instr_keyboard_allKeys):
            instr_keyboard.keys = _instr_keyboard_allKeys[-1].name  # just the last key pressed
            instr_keyboard.rt = _instr_keyboard_allKeys[-1].rt
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instr_1" ---
for thisComponent in instr_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from instr_dict
instr_back_txt.autoDraw = False
instr_disp_txt.autoDraw = False
# the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
skip_food = data.TrialHandler(nReps=FOOD_BOOL * RATE_BOOL, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='skip_food')
thisExp.addLoop(skip_food)  # add the loop to the experiment
thisSkip_food = skip_food.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSkip_food.rgb)
if thisSkip_food != None:
    for paramName in thisSkip_food:
        exec('{} = thisSkip_food[paramName]'.format(paramName))

for thisSkip_food in skip_food:
    currentLoop = skip_food
    # abbreviate parameter names if possible (e.g. rgb = thisSkip_food.rgb)
    if thisSkip_food != None:
        for paramName in thisSkip_food:
            exec('{} = thisSkip_food[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "start_food_ratings" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    start_food_rat_key.keys = []
    start_food_rat_key.rt = []
    _start_food_rat_key_allKeys = []
    # keep track of which components have finished
    start_food_ratingsComponents = [start_food_rat_key, start_food_rat_text]
    for thisComponent in start_food_ratingsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "start_food_ratings" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *start_food_rat_key* updates
        waitOnFlip = False
        if start_food_rat_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_food_rat_key.frameNStart = frameN  # exact frame index
            start_food_rat_key.tStart = t  # local t and not account for scr refresh
            start_food_rat_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_food_rat_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'start_food_rat_key.started')
            start_food_rat_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(start_food_rat_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(start_food_rat_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if start_food_rat_key.status == STARTED and not waitOnFlip:
            theseKeys = start_food_rat_key.getKeys(keyList=['right'], waitRelease=False)
            _start_food_rat_key_allKeys.extend(theseKeys)
            if len(_start_food_rat_key_allKeys):
                start_food_rat_key.keys = _start_food_rat_key_allKeys[-1].name  # just the last key pressed
                start_food_rat_key.rt = _start_food_rat_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *start_food_rat_text* updates
        if start_food_rat_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            start_food_rat_text.frameNStart = frameN  # exact frame index
            start_food_rat_text.tStart = t  # local t and not account for scr refresh
            start_food_rat_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_food_rat_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'start_food_rat_text.started')
            start_food_rat_text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_food_ratingsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "start_food_ratings" ---
    for thisComponent in start_food_ratingsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if start_food_rat_key.keys in ['', [], None]:  # No response was made
        start_food_rat_key.keys = None
    skip_food.addData('start_food_rat_key.keys',start_food_rat_key.keys)
    if start_food_rat_key.keys != None:  # we had a response
        skip_food.addData('start_food_rat_key.rt', start_food_rat_key.rt)
    # Run 'End Routine' code from show_mouse
    win.mouseVisible = True
    # the Routine "start_food_ratings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    food_rating_loop = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('finalfooditems.xlsx'),
        seed=None, name='food_rating_loop')
    thisExp.addLoop(food_rating_loop)  # add the loop to the experiment
    thisFood_rating_loop = food_rating_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisFood_rating_loop.rgb)
    if thisFood_rating_loop != None:
        for paramName in thisFood_rating_loop:
            exec('{} = thisFood_rating_loop[paramName]'.format(paramName))
    
    for thisFood_rating_loop in food_rating_loop:
        currentLoop = food_rating_loop
        # abbreviate parameter names if possible (e.g. rgb = thisFood_rating_loop.rgb)
        if thisFood_rating_loop != None:
            for paramName in thisFood_rating_loop:
                exec('{} = thisFood_rating_loop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "rateFood" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from cycleFood
        thisFood = image
        food_slider.reset()
        foodImage.setImage(thisFood)
        check_space_key.keys = []
        check_space_key.rt = []
        _check_space_key_allKeys = []
        # keep track of which components have finished
        rateFoodComponents = [food_slider, foodImage, next_button, check_space_key]
        for thisComponent in rateFoodComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "rateFood" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from cycleFood
            if food_slider.rating==None:
                rating_value = 0
            else:
                rating_value = math.round(food_slider.getRating()/10,2)
            
            # *food_slider* updates
            if food_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                food_slider.frameNStart = frameN  # exact frame index
                food_slider.tStart = t  # local t and not account for scr refresh
                food_slider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(food_slider, 'tStartRefresh')  # time at next scr refresh
                food_slider.setAutoDraw(True)
            
            # *foodImage* updates
            if foodImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                foodImage.frameNStart = frameN  # exact frame index
                foodImage.tStart = t  # local t and not account for scr refresh
                foodImage.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(foodImage, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'foodImage.started')
                foodImage.setAutoDraw(True)
            
            # *next_button* updates
            if next_button.status == NOT_STARTED and food_slider.rating!=null:
                # keep track of start time/frame for later
                next_button.frameNStart = frameN  # exact frame index
                next_button.tStart = t  # local t and not account for scr refresh
                next_button.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next_button, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next_button.started')
                next_button.setAutoDraw(True)
            if next_button.status == STARTED:
                # check whether next_button has been pressed
                if next_button.isClicked:
                    if not next_button.wasClicked:
                        next_button.timesOn.append(next_button.buttonClock.getTime()) # store time of first click
                        next_button.timesOff.append(next_button.buttonClock.getTime()) # store time clicked until
                    else:
                        next_button.timesOff[-1] = next_button.buttonClock.getTime() # update time clicked until
                    if not next_button.wasClicked:
                        continueRoutine = False  # end routine when next_button is clicked
                        None
                    next_button.wasClicked = True  # if next_button is still clicked next frame, it is not a new click
                else:
                    next_button.wasClicked = False  # if next_button is clicked next frame, it is a new click
            else:
                next_button.wasClicked = False  # if next_button is clicked next frame, it is a new click
            
            # *check_space_key* updates
            waitOnFlip = False
            if check_space_key.status == NOT_STARTED and food_slider.rating!=null:
                # keep track of start time/frame for later
                check_space_key.frameNStart = frameN  # exact frame index
                check_space_key.tStart = t  # local t and not account for scr refresh
                check_space_key.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(check_space_key, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'check_space_key.started')
                check_space_key.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(check_space_key.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(check_space_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if check_space_key.status == STARTED and not waitOnFlip:
                theseKeys = check_space_key.getKeys(keyList=['space'], waitRelease=False)
                _check_space_key_allKeys.extend(theseKeys)
                if len(_check_space_key_allKeys):
                    check_space_key.keys = _check_space_key_allKeys[-1].name  # just the last key pressed
                    check_space_key.rt = _check_space_key_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in rateFoodComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "rateFood" ---
        for thisComponent in rateFoodComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        food_rating_loop.addData('food_slider.response', food_slider.getRating())
        food_rating_loop.addData('food_slider.rt', food_slider.getRT())
        food_rating_loop.addData('next_button.numClicks', next_button.numClicks)
        if next_button.numClicks:
           food_rating_loop.addData('next_button.timesOn', next_button.timesOn)
           food_rating_loop.addData('next_button.timesOff', next_button.timesOff)
        else:
           food_rating_loop.addData('next_button.timesOn', "")
           food_rating_loop.addData('next_button.timesOff', "")
        # check responses
        if check_space_key.keys in ['', [], None]:  # No response was made
            check_space_key.keys = None
        food_rating_loop.addData('check_space_key.keys',check_space_key.keys)
        if check_space_key.keys != None:  # we had a response
            food_rating_loop.addData('check_space_key.rt', check_space_key.rt)
        # the Routine "rateFood" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "fixation_500ms" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # keep track of which components have finished
        fixation_500msComponents = [text]
        for thisComponent in fixation_500msComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fixation_500ms" ---
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                text.setAutoDraw(True)
            if text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text.tStop = t  # not accounting for scr refresh
                    text.frameNStop = frameN  # exact frame index
                    text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixation_500msComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fixation_500ms" ---
        for thisComponent in fixation_500msComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'food_rating_loop'
    
    # get names of stimulus parameters
    if food_rating_loop.trialList in ([], [None], None):
        params = []
    else:
        params = food_rating_loop.trialList[0].keys()
    # save data for this loop
    food_rating_loop.saveAsText(filename + 'food_rating_loop.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # --- Prepare to start Routine "sort_food" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from sort_food_df_js
    # Rank each
    # Create a set of 3 images per category such that each image has the same difference
    ## That is LV1 - LV2 == HV1 - HV2 == MV1 - MV2
    
    ## Separate foods based on value category
    HVdf = food_ratings_df.loc[food_ratings_df['val_cat'] == 'HV']
    MVdf = food_ratings_df.loc[food_ratings_df['val_cat'] == 'MV']
    LVdf = food_ratings_df.loc[food_ratings_df['val_cat'] == 'LV']
    
    # Generate ranks
    HVdf['ranking'] = HVdf['rating'].rank(ascending=False, method = 'first')
    MVdf['ranking'] = MVdf['rating'].rank(ascending=False, method = 'first')
    LVdf['ranking'] = LVdf['rating'].rank(ascending=False, method = 'first')
    
    #See if we can find pairs with the same value-difference
    got_em = 0
    jitterHV = 0 # for adjusting the median around
    jitterMV = 0
    jitterLV = 0
    
    while got_em == 0:
    
        # Protect Jitter from going beyond the bounds of the median value
        if abs(jitterHV) > len(HVdf['ranking'])/2:
            jitterHV = np.random.randint(low=-len(HVdf['ranking'])/4,high=len(HVdf['ranking'])/4)
        if abs(jitterMV) > len(MVdf['ranking'])/2:
            jitterMV = np.random.randint(low=-len(MVdf['ranking'])/4,high=len(MVdf['ranking'])/4)
        if abs(jitterLV) > len(LVdf['ranking'])/2:
            jitterLV = np.random.randint(low=-len(LVdf['ranking'])/4,high=len(LVdf['ranking'])/4)
    
        # Median trials
        medianHV = HVdf.loc[HVdf['ranking'] == round(np.median(HVdf['ranking']) + jitterHV)]
        if medianHV['id'].any() == False:
            jitterHV = jitterHV + np.random.randint(low=-4,high=4)
            medianHV = HVdf.loc[HVdf['ranking'] == round(np.median(HVdf['ranking']) + jitterHV)]
            
        medianMV = MVdf.loc[MVdf['ranking'] == round(np.median(MVdf['ranking']) + jitterMV)]
        if medianMV['id'].any() == False:
            jitterMV = jitterMV + np.random.randint(low=-4,high=4)
            medianMV = MVdf.loc[MVdf['ranking'] == round(np.median(MVdf['ranking']) + jitterMV)]
    
        medianLV = LVdf.loc[LVdf['ranking'] == round(np.median(LVdf['ranking']) + jitterLV)]
        if medianLV['id'].any() == False:
            jitterLV = jitterLV + np.random.randint(low=-4,high=4)
            medianLV = LVdf.loc[LVdf['ranking'] == round(np.median(LVdf['ranking']) + jitterLV)]
    
        # Values of median trial
         
        medHV = float(medianHV['rating'].values)
        medMV = float(medianMV['rating'].values)
        medLV = float(medianLV['rating'].values)
    
        # Trials below/above median
        lowerHV = HVdf.loc[HVdf['ranking'] > round(np.median(HVdf['ranking']))].sort_values(by =['ranking'], ascending=False)
        upperHV = HVdf.loc[HVdf['ranking'] < round(np.median(HVdf['ranking']))].sort_values(by =['ranking'])
        lowerMV = MVdf.loc[MVdf['ranking'] > round(np.median(MVdf['ranking']))].sort_values(by =['ranking'], ascending=False)
        upperMV = MVdf.loc[MVdf['ranking'] < round(np.median(MVdf['ranking']))].sort_values(by =['ranking'])
        lowerLV = LVdf.loc[LVdf['ranking'] > round(np.median(LVdf['ranking']))].sort_values(by =['ranking'], ascending=False)
        upperLV = LVdf.loc[LVdf['ranking'] < round(np.median(LVdf['ranking']))].sort_values(by =['ranking'])
    
        # Subtract each value from the median to create difference score for later matching
        lowerHV['diff'] = np.round(abs(lowerHV['rating'] - medHV),1)
        upperHV['diff'] = np.round(abs(upperHV['rating'] - medHV),1)
        lowerMV['diff'] = np.round(abs(lowerMV['rating'] - medMV),1)
        upperMV['diff'] = np.round(abs(upperMV['rating'] - medMV),1)
        lowerLV['diff'] = np.round(abs(lowerLV['rating'] - medLV),1)
        upperLV['diff'] = np.round(abs(upperLV['rating'] - medLV),1)
    
        # Find the intersection of VDs
        intersect_value_HV = np.intersect1d([ lowerHV['diff']], [upperHV['diff']] )
        if not intersect_value_HV.all():
            jitterHV = jitterHV + np.random.randint(low=-4,high=4) # was 1
            continue
        intersect_value_MV = np.intersect1d([ lowerMV['diff']], [upperMV['diff']] )
        if not intersect_value_MV.all():
            jitterMV = jitterMV + np.random.randint(low=-4,high=4)
            continue
        intersect_value_LV = np.intersect1d([ lowerLV['diff']], [upperLV['diff']] )
        if not intersect_value_LV.all():
            jitterLV = jitterLV + np.random.randint(low=-4,high=4)
            continue
        
        intersect_all = np.intersect1d( np.intersect1d(intersect_value_HV, intersect_value_MV), intersect_value_LV)
        if not intersect_all.any():
            jitt_r = np.random.randint(low=1,high=4)
            if jitt_r == 1:
                jitterLV = jitterLV + np.random.randint(low=-4,high=4)
            elif jitt_r == 2:
                jitterMV = jitterMV + np.random.randint(low=-4,high=4)
            else:
                jitterHV = jitterHV + np.random.randint(low=-4,high=4)
            continue
        
        # High-value
        ## Lower
        if len(lowerHV.loc[lowerHV['diff'] == float(intersect_all) ]) > 1:
            lowerHVFood = lowerHV[lowerHV['diff'] == float(intersect_all) ].iloc[[0]]
        else:
            lowerHVFood = lowerHV.loc[lowerHV['diff'] == float(intersect_all)]
        ## Upper
        if len(upperHV.loc[upperHV['diff'] == float(intersect_all) ]) > 1:
            upperHVFood = upperHV[upperHV['diff'] == float(intersect_all) ].iloc[[0]]
        else:
            upperHVFood = upperHV.loc[upperHV['diff'] == float(intersect_all)]
        
        # Middle-value
        ## Lower
        if len(lowerMV.loc[lowerMV['diff'] == float(intersect_all) ]) > 1:
            lowerMVFood = lowerMV[lowerMV['diff'] == float(intersect_all) ].iloc[[0]]
        else:
            lowerMVFood = lowerMV.loc[lowerMV['diff'] == float(intersect_all)]
        ## Upper
        if len(upperMV.loc[upperMV['diff'] == float(intersect_all) ]) > 1:
            upperMVFood = upperMV[upperMV['diff'] == float(intersect_all) ].iloc[[0]]
        else:
            upperMVFood = upperMV.loc[upperMV['diff'] == float(intersect_all)]
    
        # Lower-value
        ## Lower
        if len(lowerLV.loc[lowerLV['diff'] == float(intersect_all) ]) > 1:
            lowerLVFood = lowerLV[lowerLV['diff'] == float(intersect_all) ].iloc[[0]]
        else:
            lowerLVFood = lowerLV.loc[lowerLV['diff'] == float(intersect_all)]
        ## Upper
        if len(upperLV.loc[upperLV['diff'] == float(intersect_all) ]) > 1:
            upperLVFood = upperLV[upperLV['diff'] == float(intersect_all) ].iloc[[0]]
        else:
            upperLVFood = upperLV.loc[upperLV['diff'] == float(intersect_all)]
    
        upperHVFood['whichItem'] = 'HV1'
        upperMVFood['whichItem'] = 'MV1'
        upperLVFood['whichItem'] = 'LV1'
        medianHV['whichItem'] = 'HV2'
        medianMV['whichItem'] = 'MV2'
        medianLV['whichItem'] = 'LV2'
        lowerHVFood['whichItem'] = 'HV3'
        lowerMVFood['whichItem'] = 'MV3'
        lowerLVFood['whichItem'] = 'LV3'
            
        foodDF = pd.concat([foodDF,medianHV])
        foodDF = pd.concat([foodDF, medianMV])
        foodDF = pd.concat([foodDF, medianLV])
        foodDF = pd.concat([foodDF, lowerHVFood])
        foodDF = pd.concat([foodDF, lowerMVFood])
        foodDF = pd.concat([foodDF, lowerLVFood])
        foodDF = pd.concat([foodDF, upperHVFood])
        foodDF = pd.concat([foodDF, upperMVFood])
        foodDF = pd.concat([foodDF, upperLVFood])
        #if xx:
        #    jitter = jitter + 1
        #else:
        if foodDF.shape[0] == 9:
            got_em = 1
    
    
    
    # keep track of which components have finished
    sort_foodComponents = []
    for thisComponent in sort_foodComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "sort_food" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in sort_foodComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "sort_food" ---
    for thisComponent in sort_foodComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "sort_food" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed FOOD_BOOL * RATE_BOOL repeats of 'skip_food'

# get names of stimulus parameters
if skip_food.trialList in ([], [None], None):
    params = []
else:
    params = skip_food.trialList[0].keys()
# save data for this loop
skip_food.saveAsText(filename + 'skip_food.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# set up handler to look after randomisation of conditions etc
choose_food_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('foodChoiceTrials.xlsx'),
    seed=None, name='choose_food_loop')
thisExp.addLoop(choose_food_loop)  # add the loop to the experiment
thisChoose_food_loop = choose_food_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisChoose_food_loop.rgb)
if thisChoose_food_loop != None:
    for paramName in thisChoose_food_loop:
        exec('{} = thisChoose_food_loop[paramName]'.format(paramName))

for thisChoose_food_loop in choose_food_loop:
    currentLoop = choose_food_loop
    # abbreviate parameter names if possible (e.g. rgb = thisChoose_food_loop.rgb)
    if thisChoose_food_loop != None:
        for paramName in thisChoose_food_loop:
            exec('{} = thisChoose_food_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "choose_food" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from select_food_image
    #import csv
    #filename = "test_foodDF.csv"
    #with open(filename, 'w', newline='') as file:
    #    writer = csv.DictWriter(file, fieldnames=foodDF.keys())
    #    writer.writeheader()
    #    writer.writerows(foodDF)
        
    thisImage = str(foodDF.image[foodDF['whichItem'] == whichItem].values)
    food_img_choice.setImage(thisImage)
    # keep track of which components have finished
    choose_foodComponents = [food_img_choice]
    for thisComponent in choose_foodComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "choose_food" ---
    while continueRoutine and routineTimer.getTime() < 0.75:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *food_img_choice* updates
        if food_img_choice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            food_img_choice.frameNStart = frameN  # exact frame index
            food_img_choice.tStart = t  # local t and not account for scr refresh
            food_img_choice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(food_img_choice, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'food_img_choice.started')
            food_img_choice.setAutoDraw(True)
        if food_img_choice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > food_img_choice.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                food_img_choice.tStop = t  # not accounting for scr refresh
                food_img_choice.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'food_img_choice.stopped')
                food_img_choice.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in choose_foodComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "choose_food" ---
    for thisComponent in choose_foodComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.750000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'choose_food_loop'

# get names of stimulus parameters
if choose_food_loop.trialList in ([], [None], None):
    params = []
else:
    params = choose_food_loop.trialList[0].keys()
# save data for this loop
choose_food_loop.saveAsText(filename + 'choose_food_loop.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# --- Prepare to start Routine "hide_mouse_routine" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_2
win.mouseVisible = False
# keep track of which components have finished
hide_mouse_routineComponents = []
for thisComponent in hide_mouse_routineComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "hide_mouse_routine" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in hide_mouse_routineComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "hide_mouse_routine" ---
for thisComponent in hide_mouse_routineComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "hide_mouse_routine" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instr_2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from instr_dict_2
instr_back_txt = visual.TextStim(win=win, name='back_forth',
    text='',
    font='Arial',
    pos=(0, -.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

instr_back_txt.text = '\nPress RIGHT ARROW to continue.'
instr_back_txt.autoDraw = True
#win.flip()

# 1 - Display treasure chests
# 5 - Display rainbow


instr_strs = {}
instr_strs[0] = f'You have completed the rating phase.\nIn this next phase, you will learn more about how the mining task works.'
instr_strs[1] = f'In this task, you are playing the role of a miner. It is up to you to select where you will mine for crystals and which crystals you want to keep.'
instr_strs[2] = f'Over {days} days, you will be choosing which cave you want to work in. Once you are in a cave, you will be presented with a series of chests containg crystals. The value of these chests depend on the type of crystals inside. Each crystal is worth a different reward, depending on its color.'
if FOOD_BOOL == 1:
    instr_strs[3] = f'Each day, after selecting a cave, you will make {rounds} choices between two chests. Some times those chests will contain crystals that give you food rewards, but other times they will give you social rewards.'
else:
    instr_strs[3] = f'Each day, after selecting a cave, you will make {rounds} choices between two chests. Some times those chests will contain crystals that give you drug rewards, but other times they will give you social rewards.'
instr_strs[4] = f'To get the type of rewards you want, you will need to learn both which mine is more likely to have the right crystals, and which crystals give you the best reward.';
instr_strs[5] = f'The following screen will display the colors you will see throughout this task.'
instr_strs[6] = f'Each rainbow offers a different type of reward. The value of the colors increases across the spectrum, from left to right.\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

instr_disp_txt = visual.TextStim(win=win, name='instructions',
    text='',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_disp_txt.text = instr_strs[0]
instr_disp_txt.autoDraw = True

curr_instr = 0
instr_2_resp.keys = []
instr_2_resp.rt = []
_instr_2_resp_allKeys = []
# keep track of which components have finished
instr_2Components = [instr_2_resp]
for thisComponent in instr_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instr_2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from instr_dict_2
    instr_keys = event.getKeys()
    
    if curr_instr == 0:
        instr_back_txt.text = '\nPress RIGHT ARROW to continue.'
    
        if 'right' in instr_keys:
            instr_keyboard.clearEvents()
            curr_instr += 1
            instr_disp_txt.text = instr_strs[curr_instr]
            instr_back_txt.autoDraw = True
    #        win.flip()
    elif curr_instr == 6: #rainbow
        for swatch_index in range(len(color_scale1)):
            swatches_top[swatch_index].setAutoDraw(True)
            swatches_bot[swatch_index].setAutoDraw(True)
    
        instr_back_txt.text = 'Press LEFT ARROW to go back.\nPress RIGHT ARROW to begin.'
        if 'right' in instr_keys:
            for swatch_index in range(len(color_scale1)):
                swatches_top[swatch_index].setAutoDraw(False)
                swatches_bot[swatch_index].setAutoDraw(False)
    
            instr_keyboard.clearEvents()
            continueRoutine = False
        elif 'left' in instr_keys:
            for swatch_index in range(len(color_scale_1)):
                swatches_top[swatch_index].setAutoDraw(False)
                swatches_bot[swatch_index].setAutoDraw(False)
    
            instr_keyboard.clearEvents()
            curr_instr -= 1
            instr_disp_txt.text = instr_strs[curr_instr]
            
            # if prev instr == 0, then remove left arrow as option
            if curr_instr == 0:
                instr_back_txt.autoDraw = False
            else:
                instr_back_txt.autoDraw = True
                
    #        win.flip()
    else:
        if curr_instr == 11: #draw shards
            left_chest.setAutoDraw(True)
            left_shard.setAutoDraw(True)
            left_shard_6.setAutoDraw(True)
            left_shard_7.setAutoDraw(True)
            left_shard_8.setAutoDraw(True)
            left_shard_9.setAutoDraw(True)
            left_shard_10.setAutoDraw(True)
            
            right_chest.setAutoDraw(True)
            right_shard.setAutoDraw(True)
            right_shard_6.setAutoDraw(True)
            right_shard_7.setAutoDraw(True)
            right_shard_8.setAutoDraw(True)
            right_shard_9.setAutoDraw(True)
            right_shard_10.setAutoDraw(True)
            
        instr_back_txt.text = 'Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.'
        if 'right' in instr_keys:
            for swatch_index in range(len(color_scale_1)):
                swatches[swatch_index].setAutoDraw(False)
            left_chest.setAutoDraw(False)
            left_shard.setAutoDraw(False)
            left_shard_6.setAutoDraw(False)
            left_shard_7.setAutoDraw(False)
            left_shard_8.setAutoDraw(False)
            left_shard_9.setAutoDraw(False)
            left_shard_10.setAutoDraw(False)
            
            right_chest.setAutoDraw(False)
            right_shard.setAutoDraw(False)
            right_shard_6.setAutoDraw(False)
            right_shard_7.setAutoDraw(False)
            right_shard_8.setAutoDraw(False)
            right_shard_9.setAutoDraw(False)
            right_shard_10.setAutoDraw(False)
            
            social_image.setAutoDraw(False)
            food_image.setAutoDraw(False)
            drug_image.setAutoDraw(False)
            
            instr_keyboard.clearEvents()
            curr_instr += 1
            instr_disp_txt.text = instr_strs[curr_instr]
            instr_back_txt.autoDraw = True
    #        win.flip()
        elif 'left' in instr_keys:
            for swatch_index in range(len(color_scale_1)):
                swatches[swatch_index].setAutoDraw(False)
            left_chest.setAutoDraw(False)
            left_shard.setAutoDraw(False)
            left_shard_6.setAutoDraw(False)
            left_shard_7.setAutoDraw(False)
            left_shard_8.setAutoDraw(False)
            left_shard_9.setAutoDraw(False)
            left_shard_10.setAutoDraw(False)
            
            right_chest.setAutoDraw(False)
            right_shard.setAutoDraw(False)
            right_shard_6.setAutoDraw(False)
            right_shard_7.setAutoDraw(False)
            right_shard_8.setAutoDraw(False)
            right_shard_9.setAutoDraw(False)
            right_shard_10.setAutoDraw(False)
            
            social_image.setAutoDraw(False)
            food_image.setAutoDraw(False)
            drug_image.setAutoDraw(False)
            
            instr_keyboard.clearEvents()
            curr_instr -= 1
            instr_disp_txt.text = instr_strs[curr_instr]
            
            # if prev instr == 0, then remove left arrow as option
            if curr_instr == 0:
                instr_back_txt.text = '\nPress RIGHT ARROW to continue.'
            else:
                instr_back_txt.text = 'Press LEFT ARROW to go back.\nPress RIGHT ARROW to continue.'
                
    #        win.flip()
    
    # *instr_2_resp* updates
    waitOnFlip = False
    if instr_2_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_2_resp.frameNStart = frameN  # exact frame index
        instr_2_resp.tStart = t  # local t and not account for scr refresh
        instr_2_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_2_resp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instr_2_resp.started')
        instr_2_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_2_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_2_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_2_resp.status == STARTED and not waitOnFlip:
        theseKeys = instr_2_resp.getKeys(keyList=['left','right'], waitRelease=False)
        _instr_2_resp_allKeys.extend(theseKeys)
        if len(_instr_2_resp_allKeys):
            instr_2_resp.keys = _instr_2_resp_allKeys[-1].name  # just the last key pressed
            instr_2_resp.rt = _instr_2_resp_allKeys[-1].rt
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instr_2" ---
for thisComponent in instr_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from instr_dict_2
instr_back_txt.autoDraw = False
instr_disp_txt.autoDraw = False
# the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
skip_practice = data.TrialHandler(nReps=PRACTICE_BOOL, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='skip_practice')
thisExp.addLoop(skip_practice)  # add the loop to the experiment
thisSkip_practice = skip_practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSkip_practice.rgb)
if thisSkip_practice != None:
    for paramName in thisSkip_practice:
        exec('{} = thisSkip_practice[paramName]'.format(paramName))

for thisSkip_practice in skip_practice:
    currentLoop = skip_practice
    # abbreviate parameter names if possible (e.g. rgb = thisSkip_practice.rgb)
    if thisSkip_practice != None:
        for paramName in thisSkip_practice:
            exec('{} = thisSkip_practice[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "prac_instr" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    prac_instrComponents = [text_3, key_resp_3]
    for thisComponent in prac_instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "prac_instr" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac_instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "prac_instr" ---
    for thisComponent in prac_instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "prac_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practice = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('practice.csv'),
        seed=None, name='practice')
    thisExp.addLoop(practice)  # add the loop to the experiment
    thisPractice = practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    for thisPractice in practice:
        currentLoop = practice
        # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
        if thisPractice != None:
            for paramName in thisPractice:
                exec('{} = thisPractice[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "practice_choice" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from draw_chests_2
        left_chest.setAutoDraw(True)
        right_chest.setAutoDraw(True)
        # Run 'Begin Routine' code from set_shards_2
        def reverse_value(num):
            if num == 1:
                return 9
            elif num == 2:
                return 8
            elif num == 3:
                return 7
            elif num == 4:
                return 6
            elif num == 5:
                return 5
            elif num == 6:
                return 4
            elif num == 7:
                return 3
            elif num == 8:
                return 2
            elif num == 9:
                return 1
                
        print('counter_balance', counter_balance)
        print('chest_order', chest_order)
        print('left_shard_shapes', left_shard_shapes)
        print('right_shard_shapes', right_shard_shapes)
        
        left_shard_colors = []
        right_shard_colors = []
        if chest_order[0] == 'Box1':
            print('box1')
            if counter_balance == '1':
                print('cb1')
                left_shard_sum = str(Box1_Sum)
                right_shard_sum = str(Box2_Sum)
                
                left_shard_colors = [Box1_val1,Box1_val2,Box1_val3,
                                     Box1_val4,Box1_val5,Box1_val6]
                right_shard_colors = [Box2_val1,Box2_val2,Box2_val3,
                                      Box2_val4,Box2_val5,Box2_val6]
        
            elif counter_balance == '2':
                print('cb2')
                left_shard_sum = str(Box1_Sum)
                right_shard_sum = str(Box2_Sum)
                
                left_shard_colors = [reverse_value(Box1_val1),reverse_value(Box1_val2),reverse_value(Box1_val3),
                                     reverse_value(Box1_val4),reverse_value(Box1_val5),reverse_value(Box1_val6)]
                right_shard_colors = [reverse_value(Box2_val1),reverse_value(Box2_val2),reverse_value(Box2_val3),
                                      reverse_value(Box2_val4),reverse_value(Box2_val5),reverse_value(Box2_val6)]
            
        elif chest_order[0] == 'Box2':
            print('box2')
            if counter_balance == '1':
                print('cb1')
                left_shard_sum = str(Box2_Sum)
                right_shard_sum = str(Box1_Sum)
                left_shard_colors = [Box2_val1,Box2_val2,Box2_val3,
                                      Box2_val4,Box2_val5,Box2_val6]
                right_shard_colors = [Box1_val1,Box1_val2,Box1_val3,
                                      Box1_val4,Box1_val5,Box1_val6]
        
            elif counter_balance == '2':
                print('cb2')
                left_shard_sum = str(Box2_Sum)
                right_shard_sum = str(Box1_Sum)
                
                left_shard_colors = [reverse_value(Box2_val1),reverse_value(Box2_val2),reverse_value(Box2_val3),
                                      reverse_value(Box2_val4),reverse_value(Box2_val5),reverse_value(Box2_val6)]
                right_shard_colors = [reverse_value(Box1_val1),reverse_value(Box1_val2),reverse_value(Box1_val3),
                                     reverse_value(Box1_val4),reverse_value(Box1_val5),reverse_value(Box1_val6)]
        
        print(left_shard_colors, 'left_shard_colors')
        print(right_shard_colors, 'right_shard_colors')
        
        left_shards = []
        right_shards = []
        for i in range(6):
            ## THIS PART CONVERTS TO JS USING [].PUSH
            if left_shard_shapes[i] >= 10:
                left_shards.append('stimuli/'+color_1+'/shard-' + str(left_shard_shapes[i]) + '_color-' + str(left_shard_colors[i]) + '.png')
            else:
                left_shards.append('stimuli/'+color_1+'/shard-0' + str(left_shard_shapes[i]) + '_color-' + str(left_shard_colors[i]) + '.png')
            
            ## THIS PART CONVERTS TO JS USING [].PUSH
            if right_shard_shapes[i] >= 10:
                right_shards.append('stimuli/'+color_1+'/shard-' + str(right_shard_shapes[i]) + '_color-' + str(right_shard_colors[i]) + '.png')
            else:
                right_shards.append('stimuli/'+color_1+'/shard-0' + str(right_shard_shapes[i]) + '_color-' + str(right_shard_colors[i]) + '.png')
        
        ## determine better option
        if float(left_shard_sum) > float(right_shard_sum):
            better_option = 'left'
        elif float(left_shard_sum) < float(right_shard_sum):
            better_option = 'right'
        
        thisExp.addData('better_option', better_option)
        
        print('chest_order', chest_order)
        choice_resp_2.keys = []
        choice_resp_2.rt = []
        _choice_resp_2_allKeys = []
        # keep track of which components have finished
        practice_choiceComponents = [choice_resp_2]
        for thisComponent in practice_choiceComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "practice_choice" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *choice_resp_2* updates
            waitOnFlip = False
            if choice_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                choice_resp_2.frameNStart = frameN  # exact frame index
                choice_resp_2.tStart = t  # local t and not account for scr refresh
                choice_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(choice_resp_2, 'tStartRefresh')  # time at next scr refresh
                choice_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(choice_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(choice_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if choice_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = choice_resp_2.getKeys(keyList=['f','j'], waitRelease=False)
                _choice_resp_2_allKeys.extend(theseKeys)
                if len(_choice_resp_2_allKeys):
                    choice_resp_2.keys = _choice_resp_2_allKeys[-1].name  # just the last key pressed
                    choice_resp_2.rt = _choice_resp_2_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_choiceComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "practice_choice" ---
        for thisComponent in practice_choiceComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from outline_settings_2
        print(chest_order)
        if choice_resp_2.keys == 'f': #left
            made_choice = 1
            this_trial_choice = 'left'
            this_trial_box_choice = chest_order[0]
            if better_option == 'left':
                correct = 1
            else:
                correct = 0
        elif choice_resp_2.keys == 'j': #right
            made_choice = 1
            this_trial_choice = 'right'
            this_trial_box_choice = chest_order[1]
            if better_option == 'right':
                correct = 1
            else:
                correct = 0
        
        thisExp.addData('agent_choice', this_trial_choice)
        thisExp.addData('agent_box_choice', this_trial_box_choice)
        thisExp.addData('correct_choice', correct)
        correct_choice_count.append(correct)
        # check responses
        if choice_resp_2.keys in ['', [], None]:  # No response was made
            choice_resp_2.keys = None
        practice.addData('choice_resp_2.keys',choice_resp_2.keys)
        if choice_resp_2.keys != None:  # we had a response
            practice.addData('choice_resp_2.rt', choice_resp_2.rt)
        # the Routine "practice_choice" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "fixation_500ms" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # keep track of which components have finished
        fixation_500msComponents = [text]
        for thisComponent in fixation_500msComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fixation_500ms" ---
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                text.setAutoDraw(True)
            if text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text.tStop = t  # not accounting for scr refresh
                    text.frameNStop = frameN  # exact frame index
                    text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixation_500msComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fixation_500ms" ---
        for thisComponent in fixation_500msComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'practice'
    
    # get names of stimulus parameters
    if practice.trialList in ([], [None], None):
        params = []
    else:
        params = practice.trialList[0].keys()
    # save data for this loop
    practice.saveAsText(filename + 'practice.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
# completed PRACTICE_BOOL repeats of 'skip_practice'


# --- Prepare to start Routine "self_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from start_task_txt
if BONUS_BOOL == 1:
    start_task_txt_disp = 'You are now ready to begin the experiment. In this portion of the study, you will no longer be shown how much each treasure chest is worth. Remember, your bonus payment will depend on your choices in this phase. At the end of the experiment, one random round will be selected, and you will get points for whichever option you chose.\n\nWhen you are ready, press the SPACE BAR to continue.'
else:
    start_task_txt_disp = 'You are now ready to begin the experiment. In this portion of the study, you will no longer be shown how much each treasure chest is worth.\n\nWhen you are ready, press the SPACE BAR to continue.'
text_4.setText(start_task_txt_disp)
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
self_instrComponents = [text_4, key_resp_2]
for thisComponent in self_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "self_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in self_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "self_instr" ---
for thisComponent in self_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "self_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
self_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trials.csv'),
    seed=None, name='self_trials')
thisExp.addLoop(self_trials)  # add the loop to the experiment
thisSelf_trial = self_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSelf_trial.rgb)
if thisSelf_trial != None:
    for paramName in thisSelf_trial:
        exec('{} = thisSelf_trial[paramName]'.format(paramName))

for thisSelf_trial in self_trials:
    currentLoop = self_trials
    # abbreviate parameter names if possible (e.g. rgb = thisSelf_trial.rgb)
    if thisSelf_trial != None:
        for paramName in thisSelf_trial:
            exec('{} = thisSelf_trial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "choice" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from draw_chests
    left_chest.setAutoDraw(True)
    right_chest.setAutoDraw(True)
    # Run 'Begin Routine' code from fill_chests_2
    chest_order = np.random.permutation(['Box1','Box2'])
    #chest_order = ['Box1','Box2']
    #shuffle(chest_order)
    
    left_shard_shapes = np.random.choice([1,2,3,4,5,6,7,8,9,10,11,12,13], size=6, replace=True)
    right_shard_shapes = np.random.choice([1,2,3,4,5,6,7,8,9,10,11,12,13], size=6, replace=True)
    #left_shard_shapes = random.choices(range(1, 14), k=6)
    #right_shard_shapes = random.choices(range(1, 14), k=6)
    #left_shard_shapes = random_choices(range(1, 14))
    #right_shard_shapes = random_choices(range(1, 14))
    
    # Run 'Begin Routine' code from set_shards
    def reverse_value(num):
        if num == 1:
            return 12
        elif num == 2:
            return 11
        elif num == 3:
            return 10
        elif num == 4:
            return 9
        elif num == 5:
            return 8
        elif num == 6:
            return 7
        elif num == 7:
            return 6
        elif num == 8:
            return 5
        elif num == 9:
            return 4
        elif num == 10:
            return 3
        elif num == 11:
            return 2
        elif num == 12:
            return 1
    
    if chest_order[0] == 'Box1':
        if counter_balance == '1':
            left_shard_sum = str(Box1_Sum)
            right_shard_sum = str(Box2_Sum)
            
            left_shard_colors = [Box1_val1,Box1_val2,Box1_val3,
                                 Box1_val4,Box1_val5,Box1_val6]
            right_shard_colors = [Box2_val1,Box2_val2,Box2_val3,
                                  Box2_val4,Box2_val5,Box2_val6]
                                  
        elif counter_balance == '2':
            left_shard_sum = str(Box1_Sum)
            right_shard_sum = str(Box2_Sum)
            
            left_shard_colors = [reverse_value(Box1_val1),reverse_value(Box1_val2),reverse_value(Box1_val3),
                                 reverse_value(Box1_val4),reverse_value(Box1_val5),reverse_value(Box1_val6)]
            right_shard_colors = [reverse_value(Box2_val1),reverse_value(Box2_val2),reverse_value(Box2_val3),
                                  reverse_value(Box2_val4),reverse_value(Box2_val5),reverse_value(Box2_val6)]
    
    elif chest_order[0] == 'Box2':
        if counter_balance == '1':
            left_shard_sum = str(Box2_Sum)
            right_shard_sum = str(Box1_Sum)
            left_shard_colors = [Box2_val1,Box2_val2,Box2_val3,
                                  Box2_val4,Box2_val5,Box2_val6]
            right_shard_colors = [Box1_val1,Box1_val2,Box1_val3,
                                  Box1_val4,Box1_val5,Box1_val6]
    
        elif counter_balance == '2':
            left_shard_sum = str(Box2_Sum)
            right_shard_sum = str(Box1_Sum)
            
            left_shard_colors = [reverse_value(Box2_val1),reverse_value(Box2_val2),reverse_value(Box2_val3),
                                  reverse_value(Box2_val4),reverse_value(Box2_val5),reverse_value(Box2_val6)]
            right_shard_colors = [reverse_value(Box1_val1),reverse_value(Box1_val2),reverse_value(Box1_val3),
                                 reverse_value(Box1_val4),reverse_value(Box1_val5),reverse_value(Box1_val6)]
    
    left_shards = []
    right_shards = []
    for i in range(6):
        ## THIS PART CONVERTS TO JS USING [].PUSH
        if left_shard_shapes[i] >= 10:
            left_shards.append('stimuli/shard-' + str(left_shard_shapes[i]) + '_color-' + str(left_shard_colors[i]) + '.png')
        else:
            left_shards.append('stimuli/shard-0' + str(left_shard_shapes[i]) + '_color-' + str(left_shard_colors[i]) + '.png')
    
        ## THIS PART CONVERTS TO JS USING [].PUSH
        if right_shard_shapes[i] >= 10:
            right_shards.append('stimuli/shard-' + str(right_shard_shapes[i]) + '_color-' + str(right_shard_colors[i]) + '.png')
        else:
            right_shards.append('stimuli/shard-0' + str(right_shard_shapes[i]) + '_color-' + str(right_shard_colors[i]) + '.png')
        
    #left_shards = [f'stimuli/shard-{shape}_color-{color}.png' for shape, color in zip(left_shard_shapes, left_shard_colors)]
    #right_shards = [f'stimuli/shard-{shape}_color-{color}.png' for shape, color in zip(right_shard_shapes, right_shard_colors)]
    
    ## determine better option
    if float(left_shard_sum) > float(right_shard_sum):
        better_option = 'left'
    elif float(left_shard_sum) < float(right_shard_sum):
        better_option = 'right'
    
    thisExp.addData('better_option', better_option)
    
    if self_trials.thisTrialN == 81: # psuedorandomly selected trial
        if this_trial_choice == 'left':
            bonus_amt_pts = float(left_shard_sum)
        if this_trial_choice == 'right':
            bonus_amt_pts = float(right_shard_sum)
    
    #if chest_order[0] == 'Box1':
    #    left_box = 'Box1'
    #    thisExp.addData('left_box', left_box)
    #
    #    left_shard_colors = [Box1_val1,Box1_val2,Box1_val3,Box1_val4,Box1_val5,Box1_val6]
    #    left_shard_sum = str(Box1_Sum)
    #    right_shard_colors = [Box2_val1,Box2_val2,Box2_val3,
    #                          Box2_val4,Box2_val5,Box2_val6]
    #    right_shard_sum = str(Box2_Sum)
    #elif chest_order[0] == 'Box2':
    #    right_box = 'Box2'
    #    thisExp.addData('right_box', right_box)
    #    left_shard_colors = [Box2_val1,Box2_val2,Box2_val3,
    #                          Box2_val4,Box2_val5,Box2_val6]
    #    left_shard_sum = str(Box2_Sum)
    #    right_shard_colors = [Box1_val1,Box1_val2,Box1_val3,
    #                          Box1_val4,Box1_val5,Box1_val6]
    #    right_shard_sum = str(Box1_Sum)
    
    left_shard_5.setImage(left_shards[5])
    right_shard_0.setImage(right_shards[0])
    right_shard_1.setImage(right_shards[1])
    right_shard_2.setImage(right_shards[2])
    right_shard_3.setImage(right_shards[3])
    right_shard_4.setImage(right_shards[4])
    right_shard_5.setImage(right_shards[5])
    choice_resp.keys = []
    choice_resp.rt = []
    _choice_resp_allKeys = []
    # keep track of which components have finished
    choiceComponents = [left_shard_5, right_shard_0, right_shard_1, right_shard_2, right_shard_3, right_shard_4, right_shard_5, choice_resp]
    for thisComponent in choiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "choice" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *left_shard_5* updates
        if left_shard_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            left_shard_5.frameNStart = frameN  # exact frame index
            left_shard_5.tStart = t  # local t and not account for scr refresh
            left_shard_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left_shard_5, 'tStartRefresh')  # time at next scr refresh
            left_shard_5.setAutoDraw(True)
        
        # *right_shard_0* updates
        if right_shard_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_shard_0.frameNStart = frameN  # exact frame index
            right_shard_0.tStart = t  # local t and not account for scr refresh
            right_shard_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_shard_0, 'tStartRefresh')  # time at next scr refresh
            right_shard_0.setAutoDraw(True)
        
        # *right_shard_1* updates
        if right_shard_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_shard_1.frameNStart = frameN  # exact frame index
            right_shard_1.tStart = t  # local t and not account for scr refresh
            right_shard_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_shard_1, 'tStartRefresh')  # time at next scr refresh
            right_shard_1.setAutoDraw(True)
        
        # *right_shard_2* updates
        if right_shard_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_shard_2.frameNStart = frameN  # exact frame index
            right_shard_2.tStart = t  # local t and not account for scr refresh
            right_shard_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_shard_2, 'tStartRefresh')  # time at next scr refresh
            right_shard_2.setAutoDraw(True)
        
        # *right_shard_3* updates
        if right_shard_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_shard_3.frameNStart = frameN  # exact frame index
            right_shard_3.tStart = t  # local t and not account for scr refresh
            right_shard_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_shard_3, 'tStartRefresh')  # time at next scr refresh
            right_shard_3.setAutoDraw(True)
        
        # *right_shard_4* updates
        if right_shard_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_shard_4.frameNStart = frameN  # exact frame index
            right_shard_4.tStart = t  # local t and not account for scr refresh
            right_shard_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_shard_4, 'tStartRefresh')  # time at next scr refresh
            right_shard_4.setAutoDraw(True)
        
        # *right_shard_5* updates
        if right_shard_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_shard_5.frameNStart = frameN  # exact frame index
            right_shard_5.tStart = t  # local t and not account for scr refresh
            right_shard_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_shard_5, 'tStartRefresh')  # time at next scr refresh
            right_shard_5.setAutoDraw(True)
        
        # *choice_resp* updates
        waitOnFlip = False
        if choice_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choice_resp.frameNStart = frameN  # exact frame index
            choice_resp.tStart = t  # local t and not account for scr refresh
            choice_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_resp, 'tStartRefresh')  # time at next scr refresh
            choice_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(choice_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(choice_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if choice_resp.status == STARTED and not waitOnFlip:
            theseKeys = choice_resp.getKeys(keyList=['f','j'], waitRelease=False)
            _choice_resp_allKeys.extend(theseKeys)
            if len(_choice_resp_allKeys):
                choice_resp.keys = _choice_resp_allKeys[-1].name  # just the last key pressed
                choice_resp.rt = _choice_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in choiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "choice" ---
    for thisComponent in choiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from outline_settings
    if choice_resp.keys == 'f': #left
        this_trial_choice = 'left'
        this_trial_box_choice = chest_order[0]
        
        if better_option == 'left':
            correct = 1
        else:
            correct = 0
        
        outline_shape.setPos((-.375, 0), log=True)
        outline_shape.setAutoDraw(True)
    elif choice_resp.keys == 'j': #right
        this_trial_choice = 'right'
        this_trial_box_choice = chest_order[1]
        
        if better_option == 'right':
            correct = 1
        else:
            correct = 0
        outline_shape.setAutoDraw(True)
        outline_shape.setPos((.375, 0), log=True)
    
    thisExp.addData('agent_choice', this_trial_choice)
    thisExp.addData('agent_box_choice', this_trial_box_choice)
    thisExp.addData('correct_choice', correct)
    correct_choice_count.append(correct)
    
    # check responses
    if choice_resp.keys in ['', [], None]:  # No response was made
        choice_resp.keys = None
    self_trials.addData('choice_resp.keys',choice_resp.keys)
    if choice_resp.keys != None:  # we had a response
        self_trials.addData('choice_resp.rt', choice_resp.rt)
    # the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "fixation_500ms" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_500msComponents = [text]
    for thisComponent in fixation_500msComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "fixation_500ms" ---
    while continueRoutine and routineTimer.getTime() < 0.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_500msComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "fixation_500ms" ---
    for thisComponent in fixation_500msComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.500000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'self_trials'

# get names of stimulus parameters
if self_trials.trialList in ([], [None], None):
    params = []
else:
    params = self_trials.trialList[0].keys()
# save data for this loop
self_trials.saveAsText(filename + 'self_trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# --- Prepare to start Routine "colorblindness" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
full_color_vision.keys = []
full_color_vision.rt = []
_full_color_vision_allKeys = []
# keep track of which components have finished
colorblindnessComponents = [colorblind_txt, full_color_vision]
for thisComponent in colorblindnessComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "colorblindness" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *colorblind_txt* updates
    if colorblind_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        colorblind_txt.frameNStart = frameN  # exact frame index
        colorblind_txt.tStart = t  # local t and not account for scr refresh
        colorblind_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(colorblind_txt, 'tStartRefresh')  # time at next scr refresh
        colorblind_txt.setAutoDraw(True)
    
    # *full_color_vision* updates
    waitOnFlip = False
    if full_color_vision.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        full_color_vision.frameNStart = frameN  # exact frame index
        full_color_vision.tStart = t  # local t and not account for scr refresh
        full_color_vision.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(full_color_vision, 'tStartRefresh')  # time at next scr refresh
        full_color_vision.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(full_color_vision.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(full_color_vision.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if full_color_vision.status == STARTED and not waitOnFlip:
        theseKeys = full_color_vision.getKeys(keyList=['y','n'], waitRelease=False)
        _full_color_vision_allKeys.extend(theseKeys)
        if len(_full_color_vision_allKeys):
            full_color_vision.keys = _full_color_vision_allKeys[-1].name  # just the last key pressed
            full_color_vision.rt = _full_color_vision_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in colorblindnessComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "colorblindness" ---
for thisComponent in colorblindnessComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if full_color_vision.keys in ['', [], None]:  # No response was made
    full_color_vision.keys = None
thisExp.addData('full_color_vision.keys',full_color_vision.keys)
if full_color_vision.keys != None:  # we had a response
    thisExp.addData('full_color_vision.rt', full_color_vision.rt)
thisExp.nextEntry()
# the Routine "colorblindness" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ender" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from set_end_txt
if BONUS_BOOL == 1:
    ender_txt_disp = 'Congratulations - you have completed the experiment!\n\nPress the SPACE BAR to see your reward.'
else:
    ender_txt_disp = 'Congratulations - you have completed the experiment!\n\nPress the SPACE BAR to exit.'
text_5.setText(ender_txt_disp)
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
enderComponents = [text_5, key_resp_4]
for thisComponent in enderComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ender" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in enderComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ender" ---
for thisComponent in enderComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "ender" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
bonus_disp = data.TrialHandler(nReps=BONUS_BOOL, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='bonus_disp')
thisExp.addLoop(bonus_disp)  # add the loop to the experiment
thisBonus_disp = bonus_disp.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBonus_disp.rgb)
if thisBonus_disp != None:
    for paramName in thisBonus_disp:
        exec('{} = thisBonus_disp[paramName]'.format(paramName))

for thisBonus_disp in bonus_disp:
    currentLoop = bonus_disp
    # abbreviate parameter names if possible (e.g. rgb = thisBonus_disp.rgb)
    if thisBonus_disp != None:
        for paramName in thisBonus_disp:
            exec('{} = thisBonus_disp[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "reward" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from bonus_txt
    bonus_amt_money = .25 * bonus_amt_pts
    bonus_txt_disp = f'On this round, the option you chose was worth {bonus_amt_pts} points. At a conversion rate of 25 cents for every point, you will receive a total of {bonus_amt_money:.02f} dollars.\n\nPress the SPACE BAR to exit.'
    text_6.setText(bonus_txt_disp)
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    rewardComponents = [text_6, key_resp_5]
    for thisComponent in rewardComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "reward" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        
        # *key_resp_5* updates
        waitOnFlip = False
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in rewardComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "reward" ---
    for thisComponent in rewardComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed BONUS_BOOL repeats of 'bonus_disp'

# Run 'End Experiment' code from hide_mouse
win.mouseVisible = True
# Run 'End Experiment' code from check_rate_js
file_str = "food_ratings_" + str(expInfo['participant']) + ".csv" 

food_ratings_df.to_csv(file_str)
# Run 'End Experiment' code from filterFood
file_str = "food_ratings_" + str(expInfo['participant']) + ".csv" 

#food_ratings_df.to_csv(file_str)

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
