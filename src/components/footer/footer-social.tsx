import SocialMedia from "@/lib/classes/social-media";

type IProps = {
  socials?: SocialMedia | null;
};

export default function FooterSocial({ socials }: IProps) {
  const facebook = socials?.facebook || (!socials ? "https://www.facebook.com" : "");
  const twitter = socials?.twitter || (!socials ? "https://www.twitter.com" : "");
  const linkedin = socials?.linkedin || (!socials ? "https://www.linkedin.com" : "");
  const youtube = socials?.youtube || (!socials ? "https://www.youtube.com" : "");
  const instagram = socials?.instagram || "";

  const socialData = [
    {
      id: 1,
      cls: "social-fb",
      href: facebook,
      iconClass: "fa-brands fa-facebook-f",
      alt: "Facebook",
    },
    {
      id: 2,
      cls: "social-twit",
      href: twitter,
      iconClass: "fa-brands fa-twitter",
      alt: "Twitter",
    },
    {
      id: 3,
      cls: "social-lnkd",
      href: linkedin,
      iconClass: "fa-brands fa-linkedin-in",
      alt: "LinkedIn",
    },
    {
      id: 4,
      cls: "social-yout",
      href: youtube,
      iconClass: "fa-brands fa-youtube",
      alt: "YouTube",
    },
    {
      id: 5,
      cls: "social-instg",
      href: instagram,
      iconClass: "fa-brands fa-instagram",
      alt: "Instagram",
    },
  ];

  return (
    <>
      {socialData
        .filter(
          (item) =>
            item.href &&
            item.href.trim() !== "" &&
            item.href.trim() !== "#" &&
            item.href.trim() !== "null" &&
            item.href.trim() !== "undefined"
        )
        .map((item) => (
          <a key={item.id} className={item.cls} href={item.href} target="_blank" rel="noopener noreferrer">
            <i className={item.iconClass}></i>
          </a>
        ))}
    </>
  );
}
