/** Keys must exist under the `Nav` messages namespace. */
export type FooterNavLink = {
  id: number;
  titleKey: string;
  link: string;
};

export const footerAboutLinks: FooterNavLink[] = [
  { id: 1, titleKey: "home", link: "/" },
];

export const footerQuickLinks: FooterNavLink[] = [
  { id: 1, titleKey: "faculties", link: "/faculties" },
  { id: 2, titleKey: "universityDirectorates", link: "/directorates" },
  { id: 3, titleKey: "higherEducationDecisions", link: "/decisions" },
  { id: 4, titleKey: "studentGuide", link: "/student-life/student-guide" },
  { id: 5, titleKey: "vacancies", link: "/vacancies" },
];

/** English labels for legacy template footers (`footer-two`, …) that expect `{ title, link }`. */
const NAV_KEY_EN: Record<string, string> = {
  home: "Home",
  faculties: "Faculties",
  universityDirectorates: "University directorates",
  higherEducationDecisions: "Higher Education Council decisions",
  studentGuide: "Student guide",
  vacancies: "Careers",
};

export const footerLinks = {
  link_one: footerAboutLinks.map((l) => ({
    id: l.id,
    link: l.link,
    title: NAV_KEY_EN[l.titleKey] ?? l.titleKey,
  })),
  link_two: footerQuickLinks.map((l) => ({
    id: l.id,
    link: l.link,
    title: NAV_KEY_EN[l.titleKey] ?? l.titleKey,
  })),
};
