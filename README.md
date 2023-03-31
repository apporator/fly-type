# Fly Type

## Game Description
Demonstrate your typing speed AND rhythm in FlyType, a [typing game](https://www.typing.com/student/typing-test/1-minute) and [Dance Dance Revolution](https://kittyisnotacat.com/rhythm-game) mix, similar to [Arrow Hero](https://acelisweaven.github.io/arrow-hero/#:~:text=Arrow%20hero%20is%20a%20minimalist,This%20game%20is%20mobile%20friendly.). Upon starting the game (post menu) we present the user with a horizontal “target” bar and scroll different letters vertically through it, one at a time. The user must enter the relevant key(s) as it crosses the target, with points awarded in proportion to how “on target” they are, losing points if they are off target or miss letters.

The game begins relatively easy, but could increase in difficulty based on the following dimensions: speed, character complexity (just arrows, full alphabet, special characters), character count complexity (i.e. needing to press two at a time vs one).

Eventually, the game becomes impossibly difficult, forcing the user to miss enough keys to be forced out. There is no “winning” in FlyType.

High scores are scored in browser cookies, though eventually a back end could be added to persist state.

Inspiration screencasts [here](https://www.icloud.com/sharedalbum/#B0i5idkMwMBZWa).

## Functionality and MVPs
In FlyType, users will be presented with a start screen to start the game. The game will have the following functionality at each phase, with only phase 0 guaranteed.

|Functionality| Phase 0         |Phase 1|Bonus| 
| ----------- | ----------- |----------- |----------- |
|Animation| single characters fly through a horizontal target bar in the middle of the screen |multiple characters at a time with hard presses (holding a character|characters flow in with complex pattern (i.e. circle around the target box or sine-like wave through the box|
|Interaction |accepts character input from the user|multi character input, character holds|
|Scoring    |checks whether the user enters the character as it crosses the target, displaying and updating the score in realtime |"streaks" as a scoring accelerator. Scores saved to a username locally with cookies.|SMS login added with ability to save scores to back end database|
|Mechanics    |Speed increases over time to increase level of difficulty |Number of characters increases over time to increase difficulty|flow patterns (see Animation above) change to increase difficulty|
|Display|non dynamic (fixed width)||adjustable width|
|Support|desktop browser||mobile web support|
|Polish|written instructions in body of html|instructions built into game with an animation showing how to play|
||random characters from limited list|sentences|
||functionally required graphics|visually stimulating graphics for each keypress based on outcome, encouragement as the user progresses|


## Wireframes
![](/assets/1-Homepage.png)![](/assets/2-GamePlay.png)![](/assets/3-Game-Over.png)

## Technologies
- Graphics: [canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
- Keymapping: [keymaster](https://github.com/madrobby/keymaster)

## Implementation Timeline
- Friday: pre-planning day focused on thinking through the entirety of the game in detail to ensure efficient use of the remaining time
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
- What's the best way to have the characters fly around the page in more complex patterns (i.e. a [circle](https://acelisweaven.github.io/arrow-hero/#:~:text=Arrow%20hero%20is%20a%20minimalist,This%20game%20is%20mobile%20friendly.))
- 
- What would be the best way to send an email for purposes of one time password login via email?