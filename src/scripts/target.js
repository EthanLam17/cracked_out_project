import * as THREE from 'three';

const POSITIONS = {
    x: Math.floor(Math.random() * 13 - 6),
    y: Math.ceil(Math.random() * 4),
    z: Math.floor(Math.random() * 6 - 5)
}

export default class Target  {

    constructor() {   
        this.orb_geometry = new THREE.SphereGeometry(.5, 32, 16);
        this.orb_material = new THREE.MeshBasicMaterial( {color:0x98FB98, wireframe: true});

        this.orb = new THREE.Mesh(this.orb_geometry, this.orb_material);

        this.orb.position.x += POSITIONS.x;
        this.orb.position.y += POSITIONS.y;
        this.orb.position.z += POSITIONS.z;
    }

}