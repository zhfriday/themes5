"use strict";
// const devsWeb = [];
// const devsMobile = [];
const projectArray = [];



const renderProject = Math.floor(Math.random() * 5);
const mobileProj = Math.floor(Math.random() * renderProject);
const webProj = renderProject - mobileProj;
const difficult = Math.floor((Math.random() * 3)+1);

// const developers = 1;
//
//
// const type = "days";


// function typeGeneration () {
//   let typeCount =  Math.floor(Math.random() * 2);
//   if (typeCount === 0) {
//       return "mobile";
//   } else {
//       return "web";
//   }
// }
//
// let typers = typeGeneration();
// console.log(typers);


class Director {
    constructor() {

    }

    // method() {
    //     for (let i = developers; i < this.renderProject; i++) {
    //         devsMobile.push(new MobileDeveloper(type));
    //         devsWeb.push(new WebDeveloper(type));
    //     }
    // }
}


class Projects extends Director {
    constructor (types, ) {
        super(types, renderProject);
        this.types=types;


    }

    methodProj() {
        for (let index = 0; index < mobileProj; index++) {
            projectArray.push(new MobileProjects());

        }
        for (let index2 = 0; index2 < webProj; index2++) {
            projectArray.push(new WebProjects());

        }

        //
        console.log(`всего проектов = ${renderProject }`);
        console.log(`мобильных проектов = ${mobileProj}`);
        console.log(`веб проектов = ${webProj}`);
    }


}

class MobileProjects extends Projects {
constructor (types){
    super(types);
    this.types = "mobileproj";
    // this.difficult = difficult;

}
}


class WebProjects extends Projects {
    constructor (types){
        super(types);
        this.types = "webproj";
        // this.difficult = difficult;
    }
}


let pr = new Projects();
pr.methodProj();

console.log( projectArray);
// let it = new Projects();
// it.methodProj();
// console.log(projectArray);


// class Developer {
//     constructor(type) {
//         this.type = type;
//     }
// }
//
//
// class MobileDeveloper extends Developer {
//     constructor(type, gen) {
//         super(type);
//         this.type = type;
//         this.gen = "mobile";
//
//     }
//
// }
//
// class WebDeveloper extends Developer {
//     constructor(type) {
//         super(type);
//         this.type = type;
//         this.gen = "web";
//     }
//
// }

// let managers = new Director();
// managers.method();


// console.log(devsMobile);
// console.log(devsWeb);