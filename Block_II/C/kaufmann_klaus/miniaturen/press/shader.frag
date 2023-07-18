precision mediump float;

varying vec2 vTexCoord;
uniform float hoverDelta;

// Get the normal from the vertex shader
varying vec3 vNormal;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
  vec3 colorA = vec3(1.0, 0.9, 0.15);
  vec3 viewDirectionW = vec3(0., 0., 1.);

  float fresnelTerm = dot(viewDirectionW, vNormal);
  fresnelTerm = map(fresnelTerm, 0., 1., 0.5, 1.);

  float r1 = map(fresnelTerm, 0., 1., 0.6, 1.);
  float g1 = map(fresnelTerm, 0., 1., 0.2, 0.9);
  float b1 = map(fresnelTerm, 0., 1., 0.5, 0.15);
  vec3 colorB = vec3(r1, g1, b1);

  vec3 color = mix(colorA, colorB, hoverDelta);

  gl_FragColor = vec4(color, 1);
}
