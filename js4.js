"use strict";

//набирает сотрудников, принимает новые проекты
class Director {

}


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
class MobileDepartment {

}


//webDepartment - отдел вебразработчиков
class WebDepartment  {

}


//QA department - выдает статистику о закрытый проектах
class QaDepartment {

}

//общий класс разработчиков, принимающий количество проектов и дней которые затрачены
class Dev {
    constructor(projects, days) {
        this.projects = projects;
        this.days = days;
    }
}


//класс для мобильных разработчиков
class MobileDevs extends Dev {
    constructor(projects, days, nonWorked) {
        super(projects, days);
        this.nonWorked = nonWorked;
    }

    sayDays() {
        console.log(`Этот разработчик выполнил ${this.projects} проектов и затратил ${this.days} дней, не работал ${this.nonWorked} дней`);
    }
}


//класс для веб разработчиков, учитывает время которое разработчик не работал
class WebDevs extends Dev {
    constructor(projects, days, nonWorked) {
        super(projects, days);
        this.nonWorked = nonWorked;
    }

    sayDays() {
        console.log(`Этот разработчик выполнил ${this.projects} проектов и затратил ${this.days} дней, не работал ${this.nonWorked} дней`);
    }
}


//класс для мобильный проектов, принимает сложность проекта?
class MobileProject {

}

//класс для вебпроектов, принимает сложность проекта?
class WebProject {

}





let webs = new Mobile(10, 20, 6);
let web = new Mobile(30, 10, 7);
webs.sayDays();
web.sayDays();
console.log(webs, web);
