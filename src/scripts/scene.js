
import * as THREE from 'three';
import Target from "./target"

export default function fov() {
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


    // function hitTarget (object) {
    //     if (mouse.Vector2() === object.Vector2() )
    //     scene.remove(object);
    // }



    function onMouseMove( event ) {
        mouse.x = (event.clientX - windowHalf.x)
        mouse.y = (event.clientY - windowHalf.y)
        // mouse.x = -( event.clientX / renderer.domElement.clientWidth ) * 2 + 1;
        // mouse.y = -( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
        
        // mouse.x = ( event.clientX - windowHalf.x ) * 2 + 1;
        // mouse.y = ( event.clientY - windowHalf.y ) * 2 + 1;
    }

    document.addEventListener( 'mousemove', onMouseMove, false );
    // document.addEventListener('click', hitTarget(orb))
        // const crosshairMaterial = new THREE.LineBasicMaterial({color : 0xFFFFFF})
        // let crosshairPoints = [];
        // crosshairPoints.push(new THREE.Vector2(0, 10, 0));
        // crosshairPoints.push(new THREE.Vector2(10, 0, 0));

        // const crosshairGeometry = new THREE.BufferGeometry().setFromPoints(points);
        // const line = new THREE.Line(crosshairGeometry, crosshairMaterial);
        // scene.add(line);

        // ATTEMPT TO MAKE CROSSHAIR OBJECT ^^

    // NEEDS TO GO IN target.js
        // const orb_geometry = new THREE.SphereGeometry(.3, 32, 16);
        // const orb_material = new THREE.MeshBasicMaterial( {color:0x9addfb});
        // const orb = new THREE.Mesh(orb_geometry, orb_material);
        // scene.add(orb);

    function addTarget () {
        let target = new Target();
        scene.add(target);
    };


    // function hitTarget () {
    //     if (target.addEventListener('click', ))
    // }


        // let orb = new Target();
        // scene.add(orb)

        // orb.position.x += 6;
        // orb.position.y += 3;
        // orb.position.z += -5;

    const meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 15, 6, 6),
        new THREE.MeshBasicMaterial({color:0xC19A6B, wireframe:false})
    );

        meshFloor.rotation.x += -1.4;
        meshFloor.position.y -= 1;
        scene.add(meshFloor);




    function animate() {
        requestAnimationFrame (animate);
        
        target.x = ( 1 - mouse.x ) * 0.002;
        target.y = ( 1 - mouse.y ) * 0.002;
            
            // if (camera.rotation.x < 1 && camera.rotation.x > -1) {
                camera.rotation.x += 0.03 * ( target.y - camera.rotation.x );
            // }
            // console.log(camera.rotation.x)
            // if (camera.rotation.y < 1 && camera.rotation.y > -1) {
                camera.rotation.y += 0.03 * ( target.x - camera.rotation.y );
            // }
            // console.log(camera.rotation.y)
        renderer.render(scene, camera);
    }
    animate();
};



