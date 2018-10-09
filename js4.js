"use strict";


//department - конструктор для отделов, куда приходят задания.
//здесь мы должны получить количество проектов от директора или отдела статистики,
//
class Department {
    constructor(freedevs, newProjects) {
        this.freedevs = freedevs;
        this.newProjects = newProjects;

    }

}

// mobileDepartment - класс, который наследует количество актуальных проектов , получает количество свободных
// разработчиков, определяет уровень сложности, исходя из чего
class mobileDepartment {

}


class Dev {
    constructor(projects, days) {
        this.projects = projects;
        this.days = days;
    }
}

class Mobile extends Dev {
    constructor(projects, days, nonWorked) {
        super(projects, days);
        this.nonWorked = nonWorked;
    }

    sayDays() {
        console.log(`Этот разработчик выполнил ${this.projects} проектов и затратил ${this.days} дней, не работал ${this.nonWorked} дней`);
    }
}

let webs = new Mobile(10, 20, 6);
let web = new Mobile(30, 10, 7);
webs.sayDays();
web.sayDays();
console.log(webs, web);
