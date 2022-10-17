# Instructions

Before you start make sure you read carefully the sections below :arrow_down:.

### Shoulds

You should:

- Use **Vue.js** or **plain Javascript**
  - For Vue.js, generate the project structure using `npm init vue@latest` or [Vue CLI](https://cli.vuejs.org/guide/)
  and choose the configuration you feel more comfortable with.
- Implement the requirements mentioned in the Challenge Details.
- Keep the solution simple and concise.
- Include the tests you would expect to find in a commercial grade product.

### Should Nots

You should not:

- Copy any code from a 3rd party to complete the exercise, this will result
  in disqualification.
- Rely on code generation tools.
- Use any external libraries, exception to this rule are the tools available in
  Vue CLI, bundling tools and libraries for UI components.
- Have advanced features, we encourage you to provide documentation on anything
  extra you consider relevant for a production ready implementation.

> Focus on the "Shoulds" above as we do not give extra credit for things
  outside of that scope.

# Challenge Details

The goal of this challenge is to create a simple web page where we can play
[Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) and [Connect Four](https://en.wikipedia.org/wiki/Connect_Four).

## :art: Layout Specifications

In the [Guidelines](CHALLENGE_GUIDELINES/) folder you can find the mockups for the Desktop
and Mobile versions as well as a color palette to be used.

You can get the necessary images and fonts from the [assets](src/assets/) folder.

The solution is expected to be fully responsive as we wanna play your awesome game
on our phones during
:coffee: break.

Below you can find the requirements for each section. :arrow_down:

<!-- markdownlint-disable MD026 -->
### Section :one:

Follow the provided mockup and build your profile. It should:

- Have SWORD logo in the top header.
- Be fixed during site navigation.
- Have transparent background after 150 pixels.

<!-- markdownlint-disable MD026 -->
### Section :two:
<!-- markdownlint-enable MD026 -->

Follow the provided mockup and build your profile.

<!-- markdownlint-disable MD026 -->
### Section :three:
<!-- markdownlint-enable MD026 -->

Follow the provided mockup to build the main game area. It should feature:

- A toggle to choose between *Tic-tac-toe* and *Connect Four*:
  - :information_source: in the mockup it shows `4-in-a-row` but you can rename it.
  - The toggle should be disabled as you will only implement the *Tic-tac-toe* game.
- The game board.
- The number of matches won by each player during the current game.
- The time elapsed on the match being played.

We also expect to see the following functional requirements:

- Always highlight the player that has the turn to play.
- A game is composed by 5 matches, where:
  - The first player winning 3 matches wins the game.
  - A match can result in a draw.
  - The game can also end in a draw.
- The player that starts the first match ever is picked randomly. After that each
  player takes turns starting a match. i.e.:
  1. Player#2 is picked randomly to start Match#1
  2. Then Match#2 will be started by Player#1
  3. Match#3 will be started by Player#2
  4. And so on...
- A match starts when the player makes the first move.
- When a match finishes show a pop-up that either:
  - Congratulates the winner.
  - Declares a draw.
- Implement the algorithm that checks for victory that respects the
  [game rules](#page_with_curl-game-rules) section.
  - keep in mind that this is the first iteration of the application. In the
    future we want to introduce variations to the board size, i.e., 5x5 or 7x7.
    Keep this in mind.

<!-- markdownlint-disable MD026 -->
### Section :four:
<!-- markdownlint-enable MD026 -->

Follow the provided mockups to build the statistics sections. It should feature:

- The ratio of games won and lost per player.
  - remember that a game is composed by 5 matches.
- The history of matches played in the correct order.
  - remember that a game can end in a draw.
- The history of games played in the correct order identifying the player that
  won the game.
  - remember that a game can end in a draw.
- The aggregated play time.

:information_source: The statistics section should be updated every time a match
finishes.

<!-- markdownlint-disable MD026 -->
### Section :five:
<!-- markdownlint-enable MD026 -->

Follow the provided mockup and build the footer section. It should feature:

- all the information and buttons to subscribe to newsletter.

## :page_with_curl: Game Rules

<!-- markdownlint-disable MD026 -->
### Tic-tac-toe :x: :o:
<!-- markdownlint-enable MD026 -->

- 3x3 board size.
- The player that starts first is always the :x:.
- The player that gets a full line wins!
  - the line can be either horizontal, vertical or diagonal.
- The game can end in a draw.
