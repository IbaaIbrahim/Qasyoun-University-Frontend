import { Metadata } from "next";
import ProfileBannerArea from "./_components/profile-banner-area";
import ProfileBio from "./_components/profile-bio";
import MyCourses from "./_components/my-courses";

export const metadata: Metadata = {
  title: "Profile - Acadia",
};

export default function ProfilePage() {
  return (
    <main className="tp-dashboard-body-bg">
      {/* profile banner area start */}
      <ProfileBannerArea/>
      {/* profile banner area end */}

      {/* profile bio start */}
      <ProfileBio/>
      {/* profile bio end */}

      {/* my courses start */}
      <MyCourses/>
      {/* my courses end */}
    </main>
  );
}
