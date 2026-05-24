import { ReferenceTypes } from "@/lib/constants";

export type StaticPageFolder = "about" | "admission" | "student-life";

const FOLDER_TO_REFERENCE_KEY: Record<StaticPageFolder, keyof typeof ReferenceTypes> = {
  about: "about",
  admission: "admission",
  "student-life": "student_life",
};

/** Maps URL segment (hyphens) to CMS `section` value (snakes). */
export function slugToSection(slug: string): string {
  return slug.replace(/-/g, "_");
}

export function getSectionConfig(folder: StaticPageFolder, slug: string) {
  const referenceKey = FOLDER_TO_REFERENCE_KEY[folder];
  const ref = ReferenceTypes[referenceKey];
  const sectionValue = slugToSection(slug);
  const sections = ref.sections as Record<
    string,
    { value: string }
  >;
  const found = Object.values(sections).some((s) => s.value === sectionValue);
  if (!found) return null;
  return { referenceKey, referenceTypeValue: ref.value, sectionValue };
}

/** Nav namespace keys for breadcrumbs / titles (per section value). */
export const STATIC_PAGE_NAV_KEYS: Record<
  StaticPageFolder,
  Record<string, string>
> = {
  about: {
    vision_mission: "visionMission",
    university_goals: "universityGoals",
    establishment: "foundation",
    board_of_trustees: "boardOfTrustees",
    university_council: "universityCouncil",
    organizational_structure: "organizationalStructure",
    location_infrastructure: "locationInfrastructure",
  },
  admission: {
    admission_requirements: "admissionRequirements",
    why_qpu: "whyQpu",
    study_system: "studySystem",
    tuition_fees: "tuitionFees",
    discounts_scholarships: "discountsScholarships",
    registration_documents: "registrationDocuments",
  },
  "student-life": {
    academic_guidance: "academicGuidance",
    exams: "exams",
    academic_calendar: "academicCalendar",
    student_guide: "studentGuide",
  },
};

export function getNavKeyForSection(
  folder: StaticPageFolder,
  sectionValue: string,
): string | undefined {
  return STATIC_PAGE_NAV_KEYS[folder][sectionValue];
}

export function getParentNavKey(
  folder: StaticPageFolder,
): "about" | "admissionNav" | "studentLifeNav" {
  if (folder === "about") return "about";
  if (folder === "admission") return "admissionNav";
  return "studentLifeNav";
}
