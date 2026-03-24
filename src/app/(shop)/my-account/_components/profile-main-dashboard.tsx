import Image from "next/image";
import user_img from '@/assets/img/teacher/teacher-1.png';
import { DownloadSvg, GiftBoxSvg, HeartSvg, OrderBoxSvg } from "@/components/svg";

export default function ProfileMainDashboard() {
  return (
    <div className="profile__main">
      <div className="profile__main-top pb-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-thumb">
                <Image src={user_img} alt="user-img" />
                <div className="profile__main-thumb-edit">
                  <input id="profile-thumb-input" className="profile-img-popup" type="file" />
                  <label htmlFor="profile-thumb-input"><i className="fa-light fa-camera"></i></label>
                </div>
              </div>
              <div className="profile__main-content">
                <h4 className="profile__main-title">Welcome Mr. Admin!</h4>
                <p>You have <span>08</span> notifications</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile__main-logout text-sm-end">
              <a href="#" className="tp-logout-btn">Logout</a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__main-info">
        <div className="row gx-3">
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-download">2</span>
                  <DownloadSvg />
                </span>
              </div>
              <h4 className="profile__main-info-title">Downlaods</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-order">5</span>
                  <OrderBoxSvg />
                </span>
              </div>
              <h4 className="profile__main-info-title">Orders</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-wishlist">10</span>
                  <HeartSvg />
                </span>
              </div>
              <h4 className="profile__main-info-title">Wishlist</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-wishlist">07</span>
                  <GiftBoxSvg />
                </span>
              </div>
              <h4 className="profile__main-info-title">Gift Box</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
