# Fly Type

## Game Description
Demonstrate your typing speed AND rhythm in FlyType, a [typing game](https://www.typing.com/student/typing-test/1-minute) and [Dance Dance Revolution](https://kittyisnotacat.com/rhythm-game) mix, similar to [Arrow Hero](https://acelisweaven.github.io/arrow-hero/#:~:text=Arrow%20hero%20is%20a%20minimalist,This%20game%20is%20mobile%20friendly.). Upon starting the game (post menu) a sentence is generated and displayed at the bottom of the screen; its individual letters begin falling from letter swirls at the top of the notepad. The user earns points for entering the relevant character as it passes through the highlight at the bottom of the notepad.

Scoring of an individual press is based on timing (how central it is to the bar) and the character's velocity. If the user enters a character that isn't within the bar, they lose one of their lives. The game ends when lives get to zero.

The user can track the result of each keypress in the bar at the bottom of the screen and character velocity increases as time goes on.

High scores are scored in browser cookies, though eventually a back end could be added to persist state.

Game [here](https://apporator.github.io/fly-type/).
Inspiration screencasts [here](https://www.icloud.com/sharedalbum/#B0i5idkMwMBZWa).


## Wireframes
### Home Screen
![](/assets/1-Homepage.png)
### Play Screen
![](/assets/2-GamePlay.png)
### Game Over Screen
![](/assets/3-Game-Over.png)

## Technologies
Flytype utilizes 

- Graphics: [canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
- Keymapping: [keymaster](https://github.com/madrobby/keymaster)

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