import {
  studentRegistrationApi,
  CreateStudentRegistrationPayload,
  StudentRegistrationCreatedDto,
} from "@/lib/api/student-registration.api";
import { StudentRegistration } from "@/lib/classes/student-registration";

export interface StudentRegistrationLookupItem {
  id: number;
  name: string;
  name_AR: string;
}

export const HIGH_SCHOOL_CERTIFICATE_TYPES: StudentRegistrationLookupItem[] = [
  { id: 1, name: "Scientific", name_AR: "الثانوية العامة – علمي" },
  { id: 2, name: "Literary", name_AR: "الثانوية العامة – أدبي" },
  { id: 3, name: "Technical", name_AR: "الثانوية المهنية (تقني)" },
  { id: 4, name: "Vocational", name_AR: "الثانوية المهنية (فني)" },
  { id: 5, name: "Other", name_AR: "شهادة غير سورية / أخرى" },
];

export const EXAM_SESSIONS: StudentRegistrationLookupItem[] = [
  { id: 1, name: "First Session", name_AR: "الدورة الأولى" },
  { id: 2, name: "Second Session", name_AR: "الدورة الثانية" },
];

export const ADMISSION_TYPES: StudentRegistrationLookupItem[] = [
  { id: 1, name: "General", name_AR: "المفاضلة العامة" },
  { id: 2, name: "Vacancy Filling", name_AR: "مفاضلة ملء الشواغر" },
  {
    id: 3,
    name: "Equivalent Transfer (Syrian)",
    name_AR: "تحويل مماثل من جامعات سورية",
  },
  {
    id: 4,
    name: "Equivalent Transfer (Non-Syrian)",
    name_AR: "تحويل مماثل من جامعات غير سورية",
  },
  {
    id: 5,
    name: "Change of Registration (Syrian)",
    name_AR: "تغيير قيد من جامعات سوريا",
  },
  {
    id: 6,
    name: "Change of Registration (Non-Syrian)",
    name_AR: "تغيير قيد من جامعات غير سورية",
  },
  {
    id: 7,
    name: "Institutes & Universities",
    name_AR: "مفاضلة المعاهد والجامعات",
  },
];

export const REGISTRATION_OFFICES: StudentRegistrationLookupItem[] = [
  { id: 2, name: "Damascus Office", name_AR: "مكتب دمشق" },
  { id: 1, name: "Main Campus Office", name_AR: "مقر الجامعة الرئيسي" },
];

export const CERTIFICATE_SOURCES = [
  { value: "وزارة التربية السورية", label_AR: "وزارة التربية السورية", label_EN: "Syrian Ministry of Education" },
  { value: "وزارة / جهة خارج سورية", label_AR: "وزارة / جهة خارج سورية", label_EN: "Ministry / Authority Outside Syria" },
  { value: "أخرى", label_AR: "أخرى", label_EN: "Other" },
];

export async function submitStudentRegistration(
  payload: CreateStudentRegistrationPayload
): Promise<StudentRegistration> {
  const result = await studentRegistrationApi.create(payload);
  const createdDto = result.data?.[0];
  if (!createdDto) {
    throw new Error("Failed to receive created registration from server.");
  }
  return StudentRegistration.fromDto(createdDto);
}
