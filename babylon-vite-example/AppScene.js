import * as BABYLON from 'babylonjs'
export class AppScene {
engine;
scene;

constructor(canvas) {
this.engine = new BABYLON.Engine(canvas)
window.addEventListener('resize', () => {
this.engine.resize();
});
this.scene = createScene(this.engine, this.canvas)

}

debug(debugOn = true) {
if (debugOn) {
this.scene.debugLayer.show({ overlay: true, embedMode: true });
} else {
this.scene.debugLayer.hide();
}
}

run() {
this.debug(false);
this.engine.runRenderLoop(() => {
this.scene.render();
});
}

}


var createScene = function (engine, canvas) {
// Код по умолчанию из интерактивной среды

// Создание базового объекта сцены Babylon (без сетки).
var scene = new BABYLON.Scene(engine);

// Создание и позиционирование свободной камеры (без сетки)
var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

// Нацеливание камеры на начало сцены
camera.setTarget(BABYLON.Vector3.Zero());

// Прикрепление камеры к canvas
camera.attachControl(canvas, true);

// Создание света, направленного 0,1,0 - на небо (без сетки).
var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

// По умолчанию интенсивность равна 1. Давайте немного приглушим свет.
light.intensity = 0.7;

// Наша встроенная форма "сфера".
// for(let i = 0; i < 100; i++)
// {
//     var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     sphere.position.y = i/2;
//     sphere.position.x = i/2;
//     //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
// }
// for(let i = 0; i < 100; i++)
// {
//     var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     sphere.position.y = i/2;
//     sphere.position.x = -i/2;
//     //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
// }

// for(let i = 0; i < 100; i++)
// {
//     var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     sphere.position.y = 50+(i/2);
//     sphere.position.x = 50-(i/2);

//     //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
// }
// for(let i = 0; i < 100; i++)
// {
//     var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     sphere.position.y = 50+(i/2);
//     sphere.position.x = -50+(i/2);

//     //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
// }
// var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     sphere.position.y = 100;
//     for(let i = 0; i < 100; i++)
//     {
//         var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//         sphere.position.y = i/2;
//         sphere.position.z = i/2;
//         //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     }
//     for(let i = 0; i < 100; i++)
//     {
//         var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//         sphere.position.y = i/2;
//         sphere.position.z = -i/2;
//         //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     }
    
//     for(let i = 0; i < 100; i++)
//     {
//         var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//         sphere.position.y = 50+(i/2);
//         sphere.position.z = 50-(i/2);
    
//         //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     }
//     for(let i = 0; i < 100; i++)
//     {
//         var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//         sphere.position.y = 50+(i/2);
//         sphere.position.z = -50+(i/2);
    
//         //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, scene);
//     }

const sound = new BABYLON.Sound("icyk-cyper-feat.-igor-cyba-dymok.mp3", "img/",scene);// Перемещаем сферу вверх на 1/2 ее высоты
//sphere.position.y = 1;

// Наша встроенная форма "земля".
var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

return scene;
};