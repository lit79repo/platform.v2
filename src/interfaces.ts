interface ScheduleWeek {
  Monday: Lesson[];
  Tuesday: Lesson[];
  Wednesday: Lesson[];
  Thursday: Lesson[];
  Friday: Lesson[];
  Saturday: Lesson[];
  Sunday: Lesson[];
}

interface DayAndTime {
  day: string[];
  time: {
    hh: number,
    mm: number
  }
}

interface Lesson {
  name: string;
  cabinet: number[];
  description: string;
  at: DayAndTime[]
}

interface Teacher {
  firstName: string;
  secondName: string;
  lastName: string;
  teaches: Lesson[];
}

interface Class {
  name: string;
  lessons: object[];
  schedule: ScheduleWeek;
}

interface School {
  name: string,
  number: number,
  classes: Class[],
}

export { Lesson, Teacher, Class, School, ScheduleWeek, DayAndTime };
