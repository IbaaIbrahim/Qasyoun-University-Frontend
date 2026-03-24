import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactInfoArea from "@/components/contact/contact-info-area";

export const metadata: Metadata = {
    title: "Contact - Acadia",
};

export default function ContactPage() {
    return (
        <main>

            {/* contact area start */}
            <ContactArea />
            {/* contact area end */}


            {/* contact info area start */}
            <ContactInfoArea />
            {/* contact info area end */}

            {/* map area start */}
            <div className="tp-map-area">
                <div className="tp-contact-map-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3178401.37203209!2d35.68689745030553!3d38.926089619386694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696137917870!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            {/* map area end */}
        </main>
    );
}
