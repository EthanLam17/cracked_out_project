import * as THREE from 'three';
import Target from "../src/scripts/target";

    function setup() {
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 7;

        // const reticle = new THREE.Mesh(
        //     new THREE.RingBufferGeometry( 0.85 * 100, 100, 32),
        //     new THREE.MeshBasicMaterial( {color: 0xffffff, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
        //   );
        // reticle.position.z = -15;
        // reticle.lookAt(camera.position)
        // scene.add(reticle);

        // var mouseGeometry = new THREE.SphereGeometry(1, 0, 0);
        // var mouseMaterial = new THREE.MeshBasicMaterial({
        //     color: 0x0000ff
        // });
        // const mouseMesh = new THREE.Mesh(mouseGeometry, mouseMaterial);
        // mouseMesh.position.z = -1;
        // scene.add(mouseMesh);
  
        
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
            // mouse.x = (event.clientX / window.innerWidth)* 2 - 1;
            // mouse.y = - (event.clientY / window.innerHeight)* 2 + 1;
        }
        document.addEventListener( 'mousemove', onMouseMove, false );
        
        let object = new Target;
        let orb = object.orb
        orb.userData = "target"
        scene.add(orb);

        let pointer = new THREE.Vector2();
        let raycaster = new THREE.Raycaster();

        function onPointerMove(event) {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
        document.addEventListener('mousemove', onPointerMove, false)
    
        
        function hitTarget() {
            raycaster.setFromCamera(pointer, camera);
            
            let intersects = raycaster.intersectObjects(scene.children);
            
            if (intersects.length > 0 && intersects[0].object.userData === "target") {
                
                scene.remove(intersects[0].object);
                
            };
        };

        document.addEventListener('click', hitTarget);

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
                
            camera.rotation.x += 0.02 + ( target.y - camera.rotation.x );
            camera.rotation.y += 0.02 + ( target.x - camera.rotation.y );
          
            renderer.render(scene, camera);
        }
        animate();
    };

    setup();
