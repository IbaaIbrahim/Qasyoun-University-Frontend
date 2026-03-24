import Image from 'next/image';
import Link from 'next/link';

const progressData = [
  {
    img: '/assets/img/dashboard/course/progress-course-thumb-1.jpg',
    rating: 4.0,
    totalRatings: 18,
    title: 'Fundamentals of Business Analysis',
    completedLessons: 4,
    totalLessons: 2,
    progressPercent: 70,
  },
  {
    img: '/assets/img/dashboard/course/progress-course-thumb-2.jpg',
    rating: 5.0,
    totalRatings: 16,
    title: 'Design System in Figma',
    completedLessons: 4,
    totalLessons: 2,
    progressPercent: 50,
  },
];

export default function InProgressCourses() {
  return (
    <section className="tp-progress-wrapper">
      <div className="row">
        <div className="col-lg-6">
          <div className="tp-dashboard-section">
            <h2 className="tp-dashboard-title">In progress Courses</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="tp-progress-wrap">
            {progressData.map((course, index) => (
              <div key={index} className="tp-progress-item d-flex align-items-center">
                <div className="tp-progress-thumb">
                  <Image src={course.img} alt="course-thumb" width={330} height={200} />
                </div>
                <div className="tp-progress-content">
                  <div className="tp-progress-rate d-flex align-items-center">
                    <div className="tp-progress-rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star ${i < course.rating ? 'filled' : ''}`}
                        ></i>
                      ))}
                    </div>
                    <span> {course.rating.toFixed(2)} </span>
                    <span> ({course.totalRatings} Ratings)</span>
                  </div>
                  <h4 className="tp-progress-title">
                    <Link href={`/course-details-2/1`}>{course.title}</Link>
                  </h4>
                  <p>
                    Completed Lessons: <span> {course.completedLessons} of {course.totalLessons} lessons</span>
                  </p>
                  <div className="tp-progress-bar d-flex align-items-center">
                    <div
                      className="progress"
                      role="progressbar"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${course.progressPercent}%` }}
                      ></div>
                    </div>
                    <span>{course.progressPercent}% Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
