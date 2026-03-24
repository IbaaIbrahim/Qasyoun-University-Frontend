import Image from "next/image";


// History data array
const historyData = [
  {
    id: 1,
    year: "1889",
    imgSrc: "/assets/img/history/history-thumb-1.jpg",
    title: "1889",
    description: "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
    thumbPosition: "left",
    overlayClass: "overlay-1"
  },
  {
    id: 2,
    year: "1938",
    imgSrc: "/assets/img/history/history-thumb-2.jpg",
    title: "1938",
    description: "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
    thumbPosition: "right",
    overlayClass: ""
  },
  {
    id: 3,
    year: "2012",
    imgSrc: "/assets/img/history/history-thumb-3.jpg",
    title: "2012",
    description: "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
    thumbPosition: "left",
    overlayClass: ""
  },
  {
    id: 4,
    year: "2023",
    imgSrc: "/assets/img/history/history-thumb-4.jpg",
    title: "2023",
    description: "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
    thumbPosition: "right",
    overlayClass: "overlay-2"
  }
];

export default function HistoryArea() {
  return (
    <section className="tp-history-area grey-bg pb-120">
      <div className="container">
        <div id="down" className="tp-history-box-wrapper p-relative">
          {historyData.map((item) => (
            <div key={item.id} className={`tp-history-box ${item.overlayClass} p-relative mb-180`}>
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="tp-history-year">
                    <h5 className="tp-history-year-title">{item.year}</h5>
                  </div>
                </div>
                {item.thumbPosition === "left" ? (
                  <>
                    <div className="col-lg-5">
                      <div className="tp-history-item-thumb-left">
                      <Image src={item.imgSrc} alt="history-thumbnail" width={470} height={320} style={{ height: "auto" }} />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="tp-history-item-content">
                        <h2 className="tp-history-title">{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-5">
                      <div className="tp-history-item-content-left">
                        <h2 className="tp-history-title">{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="tp-history-item-thumb-right">
                        <Image src={item.imgSrc} alt="history-thumbnail" width={470} height={320} style={{ height: "auto" }} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
