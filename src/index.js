import * as THREE from 'three';
import Target from "../src/scripts/target";

    function setup() {
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 7;
        
        const renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setClearColor(0x455a64, 0.5)
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
        const mouse = new THREE.Vector2();
        const target = new THREE.Vector2();
        const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );  
        
        function onMouseMove( event ) {
            mouse.x = (event.clientX - windowHalf.x)
            mouse.y = (event.clientY - windowHalf.y)
        }
        document.addEventListener( 'mousemove', onMouseMove, false );
        
        let object = new Target;
        let orb = object.orb
        scene.add(orb);
    
        function deleteObject() {
            scene.remove(orb);
        }

        document.addEventListener('click', deleteObject)

            const meshFloor = new THREE.Mesh(
                new THREE.PlaneGeometry(20, 15, 6, 6),
                new THREE.MeshBasicMaterial({color:0xC19A6B, wireframe:false})
            );
                meshFloor.rotation.x += -1.5;
                meshFloor.position.y -= 1;
                scene.add(meshFloor);

        function animate() {
            requestAnimationFrame (animate);
            
            target.x = ( 1 - mouse.x ) * 0.0015;
            target.y = ( 1 - mouse.y ) * 0.0015;
                
                // if (camera.rotation.x < 1 && camera.rotation.x > -1) {
                    camera.rotation.x += 0.02 + ( target.y - camera.rotation.x );
                // }
                // console.log(camera.rotation.x)
                // if (camera.rotation.y < 1 && camera.rotation.y > -1) {
                    camera.rotation.y += 0.02 + ( target.x - camera.rotation.y );
                // }
                // console.log(camera.rotation.y)
            renderer.render(scene, camera);
        }
        animate();
    };

    setup();



// const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
// domEvents.addEventListener(orb, 'click', deleteObject)

document.addEventListener('click', deleteObject)
// object.clickEvent();


// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("game-canvas")
// })

