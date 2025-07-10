varying vec2 vUv;
uniform vec2 uImageSize;
uniform vec2 uResolution;

 vec2 getCoverUvVert(vec2 uv, vec2 textureSize, vec2 resolution) {
       vec2 ratio = vec2(
        min((resolution.x / resolution.y) / (textureSize.x / textureSize.y), 1.0),
        min((resolution.y / resolution.x) / (textureSize.y / textureSize.x), 1.0)
        );

      return vec2(
        uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        uv.y * ratio.y + (1.0 - ratio.y) * 0.5
      );
    }


void main() {
    vUv = getCoverUvVert(uv, uImageSize , uResolution);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
