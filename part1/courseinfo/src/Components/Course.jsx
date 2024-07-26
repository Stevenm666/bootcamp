import Content from "./Body/Content";
import Header from "./Body/Header";
import Total from "./Body/Total";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </ div>
        );
      })}
    </>
  );
};

export default Course;
