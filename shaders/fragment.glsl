#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
uniform float uScroll;
uniform vec2 uResolution;
uniform sampler2D uTexture;
varying vec2 vUv;


void main() {
    vec2 uv = vUv;
    float maxIntensity = 0.017;
    float y = uv.y;
    if(uScroll < 0.0){
        y =1.0 - uv.y;
    }
    float scroll = abs(uScroll)+ 0.01;
    float intenceLocation = 0.9;
    float distanceFromLocation = smoothstep(0.0,1.0,(scroll - y));
    float validity = 1.0;
    float pointer = -2.0/30.0;
    float pointerChange = 1.0/30.0;
    float intensity = maxIntensity*scroll *distanceFromLocation;

    for( int i = 0 ; i <= 31; i++){
        
        pointer += pointerChange;
        if(pointer < scroll && y < pointer + intensity && y > pointer - intensity){
            discard;
        }
    }

    vec4 Color = texture2D(uTexture, vUv);
    
    gl_FragColor = vec4(Color);
}
