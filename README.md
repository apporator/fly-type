# Fly Type - [Live Site](https://apporator.github.io/fly-type/)
Demonstrate your typing speed AND rhythm in FlyType, a [typing game](https://www.typing.com/student/typing-test/1-minute) and [Dance Dance Revolution](https://kittyisnotacat.com/rhythm-game) mix, similar to [Arrow Hero](https://acelisweaven.github.io/arrow-hero/#:~:text=Arrow%20hero%20is%20a%20minimalist,This%20game%20is%20mobile%20friendly.).

<div align="center">
<img src="/assets/flyType-2.png" width="500"/>
</div>

## Gameplay
Upon starting the game:

1. a sentence is generated and displayed at the bottom of the notepad
2. its individual letters begin falling from letter swirls at the top of the notepad
3. the user:
* earns points for entering the relevant character as it passes through the highlight at the bottom of the notepad
* loses lives for missing a letter or entering one incorrectly
4. the result of each press is displayed below the notepad

Scoring of an individual press is based on timing (how central it is to the bar) and the character's velocity. The game ends when lives get to zero. High scores are scored in browser cookies, though eventually a back end could be added to persist state.

Inspiration screencasts [here](https://www.icloud.com/sharedalbum/#B0i5idkMwMBZWa).

## Technologies
Javascript and the [canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) html element make up the foundation of FlyType. A combination of key and time based listeners, tied to dynamic logic generates objects, manipulates their properties, and animates them on the screen, while also processing user inputs and generating messages.

## Challenges

### Orchestration
Orchestration was a significant challenge in developing flytype, given the number of calculation based events to process at any given time. The game involves three separate timers operating at any given time, which could quickly become unmanageable if not tracked and dynanically manipulated methodically:
- Game Tracker: tracks the state of the game, starting it based on user input, or ending it based on
- Character Generator: generates falling characters
- Game Processor: dynamically moves and animates game objects

The dynamic nature of these jobs represented some of the greatest difficulty. For example:
- slowing down character generation temporarilly if the user misses a character
- pausing character generation between words (for a more playable experience)
- regenerating words at the appropriate time
- only regenerating if there is adequate space between the generation point and the next character
- increasing velocity of characters as the user advances through the game

The following addChar code demonsrates the above steps in code:
```js
addChar() {
        const charToAdd = this.targetArray[0];
        this.wordPause--;
        if (this.wordPause > 0) {
            --this.wordPause;
        } else if (this.characters.length >= 1 && this.characters[this.characters.length-1].yCoordinate <= this.height*0.05) {
            //do nothing if the most recently added character is still within the first 5% of the height of the board
        }
        else if(charToAdd === " ") {
            this.targetArray.shift();
            this.wordPause = 3;
            this.charVel = this.charVel*1.2;
        }
        else if (this.targetArray.length > 0 && this.wordPause <= 0){
            const newChar = new MovingCharacter({
                xCoordinate: selectRand(this.wordSpirals).xDrop,
                yCoordinate: this.wordSpirals[0].yDrop,
                xVelocity: 0, 
                yVelocity: this.charVel, 
                character: this.targetArray.shift(),
                canvasInterface: this.canvasInterface,
                typeable: false
            })
            this.characters.push(newChar);
        } else if (this.characters.length === 0) {
            this.resetSentence();
        }
    }
```

### Mathematics
On the flip side, typed characters and awarding them the relevant number of points was fairly involved.

```js
checkEntry(inputChar) {

        let validChar = null;

        //1. for each character that matches the user's input and is in the hit zone, give the user points, increase their lives, and add the character to a separate array to be deleted
        const matchingChars = this.characters.filter((char) => {
            if(char.character === inputChar && char.typeable) {
                // debugger;
                if (char.points === 15) {
                    setMsg("Right on target - Nice!", "red", "gold");
                } else {
                    setMsg("Close....", "black", "grey");
                }

                this.score = Math.floor(this.score + char.points*char.yVelocity);
                // this.lives = Math.min(this.lives + 1, 3);
                return true;
            } else if (char.typeable) {
                validChar = char.character;
            }
        })

        // cycle through these matching characters and delete them from the game as they have been hit
        if (matchingChars.length > 0) {
            matchingChars.forEach((hitChar) => {
                const delIdx = this.characters.indexOf(hitChar);
                this.characters.splice(delIdx,1);
            });
        } else {
            this.lives = this.lives - 1;

            let adder = "";
            
            if(validChar) {
                adder = ` instead of ${validChar}`;
            }
            
            if (!this.hasLives()) {
                adder = adder + ". Enter to replay!"
            }

            setMsg(`Argh. You entered ${inputChar}${adder}`, "yellow", "red");
            this.slowChars();
            // this.pause();
            this.animate(false);
            return false;            
        }
    }

    colorChar(char) {
        //checks if it is within the topmost and bottommost bounds of the target bar
        
        //the top of the bar
        const entry = this.targetBar.yCoordinate;
        const exit = this.targetBar.yCoordinate + this.targetBar.height + char.height;

        if (char.yCoordinate >= entry && char.yCoordinate <= exit) {

            let diff = exit - entry;
            let segment = (char.yCoordinate - entry) / diff

            if (segment >= 0.2 && segment <= 0.8) {
                char.color = "yellow";
                char.points = 15;
            } else {
                char.color = "red";
                char.points = 10;
            }
            char.typeable = true;      
        } else {
            char.typeable = false;
            char.points = 0;
            char.color = "black";
        }
    }
```

## Future Features
- scoring bonuses for streaks
- animation for disappearing letters
- moving/bouncing word spirals
- mobile web support
- signal to user they missed the character when it passes the target bar (rather than when it goes off the pad)
- pulsing spirals
- putting a pause on live decrements within a tight window of one another

# Development
See below for an early vision for FlyType. Note that it doesn't map exactly with current functionality, but having additional enhancements to make is half the fun!

## Functionality and MVPs
In FlyType, users will be presented with a start screen to start the game. The game will have the following functionality at each phase, with only phase 0 guaranteed.

|Functionality| Phase 0         |Phase 1|Bonus| 
| ----------- | ----------- |----------- |----------- |
|Animation| single characters fly through a horizontal target bar in the middle of the screen |multiple characters at a time with hard presses (holding a character)|characters flow in with complex pattern (i.e. circle, sine wave) through the target box|
|Interaction |accepts character input from the user|multi character input, character holds|
|Scoring    |checks whether the user enters the character as it crosses the target, displaying and updating the score in realtime |"streaks" as a scoring accelerator. Scores saved to a username locally with cookies.|SMS login added with ability to save scores to back end database|
|Mechanics    |Speed increases over time to increase level of difficulty |Number of characters increases over time to increase difficulty|flow patterns (see Animation above) change to increase difficulty|
|Display|non dynamic (fixed width)||adjustable width|
|Support|desktop browser||mobile web support|
|Polish|written instructions in body of html|instructions built into game with an animation showing how to play|
||random characters from limited list|sentences|
||functionally required graphics|visually stimulating graphics for each keypress based on outcome, encouragement as the user progresses|


## Wireframes
### Home Screen
![](/assets/1-Homepage.png)
### Play Screen
![](/assets/2-GamePlay.png)
### Game Over Screen
![](/assets/3-Game-Over.png)

## Implementation Timeline
- Friday: pre-planning day focused on thinking through the entirety of the game to ensure efficient use of the remaining time
    - final proposal approval
    - research game design based on prior games (Asteroids, Chess, etc)
    - UML charts completed and reviewed with instructor
- Weekend: bare bones set up of the classes with the ability to render on canvas
    - barebones classes written
    - letters rendering on page
- Monday: set up the basic mechanics of the game, ensure letters fly across the screen and line up with a click of the keyboard when the user hits enter
- Tuesday: add scoring mechanics, high score tracking, and increasing difficulty levels
- Wednesday: polish the game with graphics and encouragement
- Thursday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

## Bonus Features
- Mobile Web Friendliness: I'd like to be able to show this off on the go
- characters flow in complex patterns (circles, sine waves, etx) through the target
- Email or SMS login: would REALLY like to add the capability to login to view historical scores and have a shared leaderboard
- user can select font to use in the game
- high scoring user can add a sentence to the game

## Open Questions
- How much early thought do I need to put into the style of the characters? My sense is that will be easy to swap them out later?
- What's the best way to have the characters fly around the page in more complex patterns (i.e. a [circle](https://acelisweaven.github.io/arrow-hero/#:~:text=Arrow%20hero%20is%20a%20minimalist,This%20game%20is%20mobile%20friendly.))?
- What's the best way to send an email for purposes of one time password login via email?
