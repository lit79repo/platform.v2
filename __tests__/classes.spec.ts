import { Lesson, Teacher, Class as C } from '../src/classes';
import * as Intrerfaces from '../src/interfaces';
const lesson: Intrerfaces.Lesson = new Lesson({ name: "Math", cabinet: [100, 200, 300, 406], description: 'Math making posiible to calculate some numbers like: 2+2=5'});
let teacher: Intrerfaces.Teacher = new Teacher({firstName: "FirstName", lastName: "LastName", secondName: "SecondName", teaches: [lesson, lesson]});
let Class: Intrerfaces.Class = new C({name: "9-A", lessons: [lesson, lesson]});

describe('Lesson', () => {
  it("matches interface", () => {

    let instanceOflesson = (lesson: Intrerfaces.Lesson) => {
      if(typeof lesson.name === "string") {
        return true;
      } else {
        return false;
      }
    }

    expect(instanceOflesson(lesson)).toBe(true);

  });

  it("constructor values correct", () => {
    expect(lesson.name).toBe("Math");
    expect(lesson.cabinet).toStrictEqual([100, 200, 300, 406]);
    expect(lesson.description).toBe('Math making posiible to calculate some numbers like: 2+2=5');
  });

});

describe('Teacher', () => {
  it("matches interface", () => {

    let instanceOfTeacher = (teacher: Intrerfaces.Teacher) => {
      if(typeof teacher.firstName === "string") {
        return true;
      } else {
        return false;
      }
    }

    expect(instanceOfTeacher(teacher)).toBe(true);

  });

  it("constructor values correct", () => {
    expect(teacher.firstName).toBe("FirstName");
    expect(teacher.lastName).toBe("LastName");
    expect(teacher.secondName).toBe("SecondName");
    expect(teacher.teaches).toStrictEqual([lesson, lesson]);
  });
  
});

describe('Class', () => {

  it("matches interface", () => {

    let instanceOfClass = (Class: Intrerfaces.Class) => {
      if(typeof Class.name === "string") {
        return true;
      } else {
        return false;
      }
    }

    expect(instanceOfClass(Class)).toBe(true);

  });

  it("contructor values correct", () => {
    expect(Class.name).toBe("9-A");
    expect(Class.lessons).toStrictEqual([lesson, lesson]);
  });
  
});