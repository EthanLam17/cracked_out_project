
# Background

Wanting to improve your skills is universal, even gamers. Cracked Out provides mouse training for tactical shooter gamers in the form of a fun and interactive game. Hit all of the targets to receive a report of your accuracy, then keep playing the game to improve that number!

Before starting the game, read through the instructions, then select the number of targets you want to appear in your game. After starting the game, targets will continue to appear on the screen at random. A score counter updates as you successfully hit each target. After all of the targets are hit, the game ends, calculating how accurate your mouse skills are.

Test your skills <a href="https://ethanlam17.github.io/cracked_out_project" target="_blank">here!</a>


# Technologies

- This project implements the following technologies: 

    + HTML, CSS, Javascript as the foundation of the web application 
    + Three.js to render the environment, first person point of view and target objects. 
        - WebGL is used in Three.js' underlying system
    + WebPack to bundle the Javascript and CSS


# Game Snippets
![Start](./images/start.JPG)
![Game Play](./images/range.JPG)
![Results](./images/results.JPG)


# Technical Challenges
- Challenge: 
    + Creating the basic function of allowing a user to destroy a target proved challenging under the three.js environment. There are several ways to incorporate user interaction with objects however specifically destroying the target object while creating a new one at the same time without refreshing the screen seemed nearly impossible.
    
- Solution: 
    + I had came across the topic of ray casting before and after trying various API's and library add-ons, I gave it a serious try. It allowed me to send a "signal" from the mouse click into the render and successfully delete the object as a user. Additionally, by adding userData to the target, I was able to specifically delete the target rather than any object in the render that I clicked on. 

```js
    function hitTarget() {
        raycaster.setFromCamera(pointer, camera);
        let intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0 && intersects[0].object.userData === "target") {
            scene.remove(intersects[0].object)
            createTarget();
            stats.hit += 1;
            stats.total += 1;
            document.getElementById('score').innerHTML = "SCORE " + stats.hit;
            if (stats.hit === finish) {
                const gameover = document.getElementById('results')
                gameover.classList.add('active');
                overlay.classList.add('active')
                document.getElementById('hits').innerHTML = "You hit " + finish + " targets!";
                document.getElementById('misses').innerHTML = "You missed " + (stats.miss - 1) + " times!";
                document.getElementById('percent').innerHTML = "You have an accuracy of " + (stats.hit /(stats.total - 1) * 100).toFixed(2) + "%"; 
            }
        } else {
            stats.miss += 1;
            stats.total += 1;
        };
    };

    document.addEventListener('click', hitTarget);
```

# Future Direction
- Timer so that targets are automatically removed if user does not destroy it fast enough
- Camera movement smoothening for higher quality gameplay

