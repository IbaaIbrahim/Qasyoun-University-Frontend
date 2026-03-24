
import Image from "next/image";
import mission_img from '@/assets/img/our-mission/mission/mission-mesg.png';

export default function MissionAreaTwo() {
  return (
    <section className="tp-mission-area grey-bg pb-120">
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="tp-mission-warp pr-75">
                    <div className="tp-mission-heading">
                    <h3 className="tp-mission-title">The Acadia <br/> Mission</h3>
                    </div>
                    <div className="tp-mission-improve-box">
                    <span className="tp-mission-improve-dec">Improves retention</span>
                    <h4 className="tp-mission-improve-title">96 <span>%</span></h4>
                    <p>of our students successfully graduate and begin their <br/>
                        career development.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="tp-mission-wrapper">
                    <div className="tp-mission-desc">
                    <p>Acadia University is a distinguished public university, values learning in the liberal arts and sciences as a cornerstone of individual development and a vital foundation.We will ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy.</p>
                    <p>We will also lead to generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</p>
                    </div>
                    <div className="tp-mission-conversation-box p-relative">
                    <h4 className="tp-mission-conversation-title">What do you need to bring?</h4>
                    <p>A phone with an Internet connection, and we recommend <br/>
                        that you bring a charger.</p>
                    <div className="tp-mission-conversation-thumb">
                        <Image src={mission_img} alt="mission-img" style={{height:'auto'}}/>
                    </div>
                    <div className="tp-mission-conversation-msg">
                        <span className="tp-mission-conversation-msg-1">Hello 👋</span>
                        <span className="tp-mission-conversation-msg-2">Ready for my first assignment!</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
