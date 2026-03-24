'use client';
import useCourse from "@/hooks/use-course";

type IProps = {
  tab: string;
};

export default function CourseTabBtn({ tab }: IProps) {
  const { activeTab, setActiveTab } = useCourse();
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`nav-link ${activeTab === tab ? "active" : ""}`}
    >
      {tab}
    </button>
  );
}
