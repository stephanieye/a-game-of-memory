![game setup](/readmeimages/memorygame.jpg)

-----------------
#A Game of Memory
-----------------

This game was created as part of my pre-course work for the General Assembly London Web Development Immersive. We were walked through the process of creating the design and game logic; however, I did add several of my own modifications to complicate the game:

1. The original game involved 4 cards, with 2 matching pairs. I increased the number of cards to 10, with 4 matching pairs and one unmatched pair. In order to increase the number of cards, I had to source for my own card images, which I found at GitHub user hayeah's [playing-cards-assets](https://github.com/hayeah/playing-cards-assets) repository.

2. In the original game, the player was still able to click on cards to reveal them even after they had lost the game (the flipCard function was still working). I stopped this from happening by creating a cardsWrong array and only letting the flipCard function work when cardsWrong.length was < 2.  

3. Instead of having the results announcements pop up on the screen via alerts, I placed the announcements in divs with display:none, using JavaScript to change the displays to 'block' based on player input.

4. I concealed the instructions in a drop-down menu that toggles using JavaScript.

5. I added confetti that drops when the player successfully completes the game, using a [CodePen](https://codepen.io/danwilson/pen/vKzbgd) by Dan Wilson.

![game in play](/readmeimages/memorygame1.jpg)

----------------------
##Room for improvement
----------------------

1. Although I used the CodePen to make confetti, I still lack the CSS/JS skills to create confetti by myself.

2. The web design is not responsive and would be hard to play on a mobile phone.

3. I could add levels to the game, increasing the number of cards and hence the difficulty level.

---------
##Contact
---------
* hello@stephanieye.com
* http://stephanieye.com
