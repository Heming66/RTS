class PhongMaterial extends Material {
// 添加rotate、lightIndex参数
    constructor(color, specular, light, translate, rotate, scale, lightIndex, vertexShader, fragmentShader) {
        let lightMVP = light.CalcLightMVP(translate, rotate, scale);

        let lightIntensity = light.mat.GetIntensity();

        super({
            // Phong
            'uSampler': { type: 'texture', value: color },
            'uKs': { type: '3fv', value: specular },
            'uLightIntensity': { type: '3fv', value: lightIntensity },
            // Shadow
            'uShadowMap': { type: 'texture', value: light.fbo },
            'uSat': { type: 'texture', value: light.satBufferY },
            'uLightMVP': { type: 'matrix4fv', value: lightMVP },
        // 添加lightIndex参数
        }, [], vertexShader, fragmentShader, null, lightIndex);
        
    }
}

// 添加rotate、lightIndex参数
async function buildPhongMaterial(color, specular, light, translate, rotate, scale, lightIndex, vertexPath, fragmentPath) {


    let vertexShader = await getShaderString(vertexPath);
    let fragmentShader = await getShaderString(fragmentPath);
// 添加rotate、lightIndex参数
    return new PhongMaterial(color, specular, light, translate, rotate, scale, lightIndex, vertexShader, fragmentShader);

}