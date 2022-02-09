import * as THREE from 'three';
import Target from '../src/scripts/target';
import Stats from './scripts/stats'

    const openModalButton = document.getElementById('start-button');
    const closeModalButton = document.querySelector('[data-play-button]');
    const overlay = document.getElementById('overlay');

    openModalButton.addEventListener('click', (e) => {
        e.preventDefault();
        debugger;
        const modal = document.getElementById('start-modal');
        debugger;
        openModal(modal);
    });
  
    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('start-modal');
        closeModal(modal);
    });

    function openModal(modal) {
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal(modal) {
        modal.classList.remove('active')
        overlay.classList.remove('active')
        setup();
    }

    function setup() {    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 7;
        const renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.domElement.id = "render";
        const mouse = new THREE.Vector2();
        const target = new THREE.Vector2();
        const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );  
        const finish = 5;
        const light = new THREE.HemisphereLight( 0xbc544b, 0x080820, 20 );
        scene.add( light );
        let pointer = new THREE.Vector2();
        let raycaster = new THREE.Raycaster();
        let stats = new Stats;
        
        // renderer.setClearColor(0x455a64, 0.5)
        renderer.setClearColor(0xffffff, 0)
        renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.93);
        document.body.appendChild(renderer.domElement);
        
        
        const meshFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 15, 6, 6),
            new THREE.MeshBasicMaterial({color:0xC19A6B, wireframe:false})
            );
            meshFloor.rotation.x += -1.5;
            meshFloor.position.y -= 1;
            scene.add(meshFloor);

            function createTarget() {
                let object = new Target;
                object.orb.userData = "target"
                object.orb.position.x += Math.floor(Math.random() * 13 - 6);
                object.orb.position.y += Math.floor(Math.random() * 4);
                object.orb.position.z += Math.floor(Math.random() * 4 - 2);
                scene.add(object.orb);
            }
            createTarget();
            
            function onMouseMove( event ) {
                mouse.x = (event.clientX - (windowHalf.x))
                mouse.y = (event.clientY - (windowHalf.y))
            }
            
            function onPointerMove(event) {
                pointer.x = (event.clientX / (window.innerWidth)) * 2 - 1;
                pointer.y = -(event.clientY / (window.innerHeight)) * 2 + 1;
            }
            
            
            function hitTarget() {
                raycaster.setFromCamera(pointer, camera);
                let intersects = raycaster.intersectObjects(scene.children);
                if (intersects.length > 0 && intersects[0].object.userData === "target") {
                    scene.remove(intersects[0].object);
                    createTarget();
                    stats.hit += 1;
                    stats.total += 1;
                    document.getElementById('score').innerHTML = "Hits: " + stats.hit;
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
            
            document.addEventListener( 'mousemove', onMouseMove, false );
            document.addEventListener('mousemove', onPointerMove, false)
            document.addEventListener('click', hitTarget);

            function animate() {
                requestAnimationFrame (animate);
                
                target.x = ( 1 - mouse.x ) * 0.0015;
                target.y = ( 1 - mouse.y ) * 0.0015;
                
                camera.rotation.x += 0.02 + ( target.y - camera.rotation.x );
                camera.rotation.y += 0.02 + ( target.x - camera.rotation.y );
            
                renderer.render(scene, camera);
            }
        animate();
    };


