attribute vec2 a_position;
attribute vec2 a_texCoord;

varying vec2 v_texCoord;
void main() {

    //gl_Position = vec4(a_position*vec2(2.0,2.0)-vec2(1.0,1.0),0.0,1.0);
    vec2 pos=a_position * vec2(2.0,2.0) - vec2(1.0,1.0);
    gl_Position=vec4(pos,0,1);
    v_texCoord=a_texCoord;
}