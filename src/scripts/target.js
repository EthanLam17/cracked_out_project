import * as THREE from 'three';

const POSITIONS = {
    x: Math.floor(Math.random() * 13 - 6),
    y: Math.floor(Math.random() * 4),
    z: Math.floor(Math.random() * 7 - 5)
}
export default class Target {
    constructor() {
        // this.x = POSITIONS.x;
        // this.y = POSITIONS.y;
        // this.z = POSITIONS.z;

        const orb_geometry = new THREE.SphereGeometry(.5, 32, 16);
        const orb_material = new THREE.MeshBasicMaterial( {color:0x98FB98});
        const orb = new THREE.Mesh(orb_geometry, orb_material);
        orb.position.x += POSITIONS.x;
        orb.position.y += POSITIONS.y;
        orb.position.z += POSITIONS.z;

    }

    // createTarget() {
    // }

}