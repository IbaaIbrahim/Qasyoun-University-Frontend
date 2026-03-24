import {
  ArtDesignSvg,
  BusinessSvg,
  ComputerScienceSvg,
  EconomicsSvg,
  ManagementSvg,
} from "@/components/svg";

const tuition_data = [
  {
    id: "economics",
    icon: <EconomicsSvg />,
    title: "Economics",
    active:true,
    tuition_table: [
      {
        id: 1,
        title: "Domestic Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Enrollment Fee", semester: "$1,860", annual: "$8,860" },
        ],
      },
      {
        id: 2,
        title: "International Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Related Costs", semester: "$2,400", annual: "$4,600" },
          { expense: "Insurance", semester: "$860", annual: "$1,260" },
          { expense: "Enrolment Fee", semester: "$200", annual: "$800" },
        ],
      },
    ],
  },
  {
    id: "management",
    icon: <ManagementSvg />,
    title: "Management",
    tuition_table: [
      {
        id: 1,
        title: "Domestic Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Enrollment Fee", semester: "$1,860", annual: "$8,860" },
        ],
      },
      {
        id: 2,
        title: "International Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Related Costs", semester: "$2,400", annual: "$4,600" },
          { expense: "Insurance", semester: "$860", annual: "$1,260" },
          { expense: "Enrolment Fee", semester: "$200", annual: "$800" },
        ],
      },
    ],
  },
  {
    id: "business",
    icon: <BusinessSvg />,
    title: "Business & Administration",
    tuition_table: [
      {
        id: 1,
        title: "Domestic Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Enrollment Fee", semester: "$1,860", annual: "$8,860" },
        ],
      },
      {
        id: 2,
        title: "International Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Related Costs", semester: "$2,400", annual: "$4,600" },
          { expense: "Insurance", semester: "$860", annual: "$1,260" },
          { expense: "Enrolment Fee", semester: "$200", annual: "$800" },
        ],
      },
    ],
  },
  {
    id: "computer",
    icon: <ComputerScienceSvg />,
    title: "Computer Science & A.I.",
    tuition_table: [
      {
        id: 1,
        title: "Domestic Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Enrollment Fee", semester: "$1,860", annual: "$8,860" },
        ],
      },
      {
        id: 2,
        title: "International Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Related Costs", semester: "$2,400", annual: "$4,600" },
          { expense: "Insurance", semester: "$860", annual: "$1,260" },
          { expense: "Enrolment Fee", semester: "$200", annual: "$800" },
        ],
      },
    ],
  },
  {
    id: "art-design",
    icon: <ArtDesignSvg />,
    title: "Art & Design",
    tuition_table: [
      {
        id: 1,
        title: "Domestic Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Enrollment Fee", semester: "$1,860", annual: "$8,860" },
        ],
      },
      {
        id: 2,
        title: "International Fees",
        data: [
          { expense: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
          { expense: "Related Costs", semester: "$2,400", annual: "$4,600" },
          { expense: "Insurance", semester: "$860", annual: "$1,260" },
          { expense: "Enrolment Fee", semester: "$200", annual: "$800" },
        ],
      },
    ],
  },
];

export default function TuitionArea() {
  return (
    <section className="tp-tution-area grey-bg pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-tution-wrapper">
              <div className="accordion" id="accordionExample">
                {tuition_data.map((item) => (
                  <div key={item.id} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${item.active?'':'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded={item.active ? 'true' : 'false'} 
                        aria-controls={`${item.id}`}
                      >
                        <span>{item.icon}</span>
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${item.active?'show':''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="tp-tution-body">
                          {item.tuition_table.map((table) => (
                            <div
                              key={table.id}
                              className={`tp-tution-table ${
                                table.id === 1 ? "mb-50" : ""
                              }`}
                            >
                              <h4 className="tp-tution-main-title">
                                Domestic Fees
                              </h4>
                              <ul>
                                <li className="tp-tution-table-head">
                                  <div className="tp-course-table-row">
                                    <div className="tp-tution-id">
                                      <h4 className="tp-tution-table-title">
                                        Expense
                                      </h4>
                                    </div>
                                    <div className="tp-tution-sub">
                                      <h4 className="tp-tution-table-title">
                                        Semester
                                      </h4>
                                    </div>
                                    <div className="tp-tution-type">
                                      <h4 className="tp-tution-table-title">
                                        Annual
                                      </h4>
                                    </div>
                                  </div>
                                </li>

                                {table.data.map((item, index) => (
                                  <li
                                    key={index}
                                    className={`tp-tution-table-inner ${index === table.data.length - 1 ? "none" : ""}`}
                                  >
                                    <div className="tp-course-table-row">
                                      <div className="tp-tution-id">
                                        <h4 className="tp-tution-inner">
                                          {item.expense}
                                        </h4>
                                      </div>
                                      <div className="tp-tution-sub">
                                        <h4 className="tp-tution-inner">
                                          {item.semester}
                                        </h4>
                                      </div>
                                      <div className="tp-tution-type">
                                        <h4 className="tp-tution-inner">
                                          {item.annual}
                                        </h4>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
