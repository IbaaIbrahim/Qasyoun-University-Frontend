import Image from "next/image";

const financialAidData = [
  {
    id: 1,
    imgSrc: "/assets/img/course/details/financial-thumb-1.jpg",
    title: "Scholarships",
    description:
      "Acadia’s commitment to student success, important scholarship, and creative activity sets it apart from other colleges.",
  },
  {
    id: 2,
    imgSrc: "/assets/img/course/details/financial-thumb-2.jpg",
    title: "Grants",
    description:
      "Your FAFSA will determine what grants you qualify for—both from The Acadia University & from federal and state government.",
  },
  {
    id: 3,
    imgSrc: "/assets/img/course/details/financial-thumb-3.jpg",
    title: "Loans",
    description:
      "Many students have used federal and private loans to fund a quality education that would otherwise be out of reach.",
  },
];

export default function FinancialAidArea() {
  return (
    <section className="tp-financial-area tp-financial-bg pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-financial-heading">
              <h3 className="tp-financial-title">Types of Aid</h3>
            </div>
          </div>

          {financialAidData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="tp-financial-item mb-30">
                <div className="tp-financial-thumb">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={382}
                    height={219}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="tp-financial-content">
                  <h4 className="tp-financial-content-title">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
