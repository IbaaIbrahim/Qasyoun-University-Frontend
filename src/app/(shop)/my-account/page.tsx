import { Metadata } from "next";
import ProfileArea from "./_components/profile-area";


export const metadata: Metadata = {
    title: "My Account - Acadia",
}

export default function MyAccountPage() {
    return (
        <main>
            {/* my account area start */}
            <ProfileArea/>
            {/* my account area end */}
        </main>
    )
}
