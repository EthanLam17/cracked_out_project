
# Background

Wanting to improve your skills is universal, even gamers. Cracked Out provides mouse training for tactical shooter gamers in the form of a fun and interactive game. Hit all of the targets to receive a report of your accuracy, then keep playing the game to improve that number!

After starting the game, targets will continue to appear on the screen at random. A score counter updates as you successfully hit each target. After 10 successful target hits, the game ends, calculating how accurate your mouse skills are.

# Technologies, Libraries, APIs

- This project implements the following technologies: 

    + HTML, CSS, Javascript as the foundation of the web application 
    + Three.js to render the environment, first person point of view and target objects. 
        - WebGL is used in Three.js' underlying system
    + WebPack to bundle the Javascript and CSS


# Functionality & MVPs

- In Cracked Out, users will be able to:

    + Start the game
    + Hit targets
    + Confirm target hit with score increase


- In addition, this project will include:
    + Instructions about the game
    + A results page, analyzing user performance after the round is over



# Wireframe
![wireframe](./js_project_wireframe.JPG)
- Nav links include links to this project's Github repository and my LinkedIn
- Score shows the number of targets successfully hit, updated in real time
- The Crosshair will be a lot smaller than shown in the wireframe
- Toggle between easy/hard mode
- Targets appear one by one, in any of the possible target elements shown


# Implementation Timeline
- Friday Afternoon & Weekend: Setup project, including getting webpack up and running, set up three.js. Render first person view point. Start building components in the POV like hand/gun that remains static as mouse moves.

- Monday: Continue working on objects in camera frame(hand/gun). Start user functionality: interaction with targets. 

- Tuesday: Continue work on functionality. Start menu overlay and gameover/results overlay.

- Wednesday: Finalize functions/pages. Work on customization/design.

- Thursday Morning: Deploy project to GitHub Pages/Heroku