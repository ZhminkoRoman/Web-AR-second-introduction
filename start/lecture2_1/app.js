import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );

		container.appendChild( this.renderer.domElement );

		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		this.cube = new THREE.Mesh( geometry, material );

		this.scene.add( this.cube );

		camera.position.z = 5;

		this.renderer.setAnimationLoop( this.render.bind(this) )
    
        window.addEventListener('resize', this.resize.bind(this) );
	}

	animate() {
		
	}
    
    resize(){
        
    }
    
	render( ) {   
		this.renderer.render( this.scene, this.camera );
    }
}

export { App };