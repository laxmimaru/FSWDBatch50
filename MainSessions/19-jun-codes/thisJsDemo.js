/*
this- simply refers to an object/html element/global object
*/

const person={
    course:"Full stack web development",
    duration:"20 weeks",
    frontend:"react",
    backend:"node js",
    coursesList: function(){
        return this.frontend+ " and "+ this.backend;
    }

    }

    const courseList = person.coursesList();

    console.log("courseList = "+courseList);

    /*different contexts of this*/


