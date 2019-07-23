import * as Interfaces from './interfaces';

class DayAndTime {
    day: string[];
    time: {
        hh: number;
        mm: number;
    };
    constructor(DayAndTime: Interfaces.DayAndTime) {
        this.day = DayAndTime.day;
        this.time = DayAndTime.time;
    }
}

class Lesson {
    name: string;
    cabinet: number[];
    description: string;
    at: DayAndTime[];

    constructor(lesson: Interfaces.Lesson) {
        this.name = lesson.name;
        this.cabinet = lesson.cabinet;
        this.description = lesson.description;
        this.at = lesson.at;
    }
}

class ScheduleWeek {
    Monday: Lesson[];
    Tuesday: Lesson[];
    Wednesday: Lesson[];
    Thursday: Lesson[];
    Friday: Lesson[];
    Saturday: Lesson[];
    Sunday: Lesson[];

    constructor(week: Interfaces.ScheduleWeek) {
        this.Monday = week.Monday;
        this.Tuesday = week.Tuesday;
        this.Wednesday = week.Wednesday;
        this.Thursday = week.Thursday;
        this.Friday = week.Friday;
        this.Saturday = week.Saturday;
        this.Sunday = week.Sunday;
    }
}

class Teacher {
    firstName: string;
    secondName: string;
    lastName: string;
    teaches: Lesson[];

    constructor(teacher: Interfaces.Teacher) {
        this.firstName = teacher.firstName;
        this.secondName = teacher.secondName;
        this.lastName = teacher.lastName;
        this.teaches = teacher.teaches;
    }
}

class Class {
    name: string;
    lessons: object[];

    constructor(Class: Interfaces.Class) {
        this.name = Class.name;
        this.lessons = Class.lessons;
    }
}

export { Lesson, Teacher, Class, ScheduleWeek };
