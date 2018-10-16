"use strict";
class Course {
    constructor () {
        this.type = "Курс Front-end";

    }

}
class Theme extends Course{
    constructor(themeName, type) {
        super(type);
        this.themeName = themeName;
        this.themes = ["oop", "js", "bootstrap"];
        this.oopQuestions =  [];

    }

    method() {
        let themesName = this.themes.find((theme) => {
            return (theme === this.themeName);
        });
            console.log(themesName);
    }

}
class Answer {
    constructor () {
        this.answers = ["a", "b", "c"];
    }

    }

class Question {
    constructor () {
        this.questionOop = ["вопрос первый?", "вопрос второй?", "вопрос третий?"];
    }


methodOop() {
    this.questionOop.forEach((question, index) => {
        let quest = question;
        alert(quest);
        console.log(Answer.answers);
    });
}}




let oops = new Theme("oop");
oops.method();
console.log(oops.type);

let qo = new Question();
qo.methodOop();

