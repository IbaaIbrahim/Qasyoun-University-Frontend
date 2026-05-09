// import { _readAllFaculties, _readAllLabs } from "../../redux/actions"

const HomeType = {
  name: "qpu.dynamicContent.home",
  value: "home",
  sections: {
    news: {
      name: "qpu.dynamicContent.news",
      value: "news",
      maxContentItems: undefined,
      keys: {
        text: {
          name: "qpu.dynamicContent.text",
          type: "text"
        }
      }
    },
    hero_slider: {
      name: "qpu.dynamicContent.heroSlider",
      value: "hero_slider",
      maxContentItems: undefined,
      keys: {
        src: {
          name: "qpu.dynamicContent.src",
          type: "image"
        }
      }
    },
    few_words_about: {
      name: "qpu.dynamicContent.fewWordsAboutTheUniversity",
      value: "few_words_about",
      maxContentItems: 1,
      keys: {
        image1: {
          name: "qpu.dynamicContent.imageBelow",
          type: "image"
        },
        image2: {
          name: "qpu.dynamicContent.imageAbove",
          type: "image"
        },
        years_of_experience: {
          name: "qpu.dynamicContent.yearsOfExperience",
          type: "text"
        },
        text: {
          name: "qpu.dynamicContent.text",
          type: "richtext"
        },
        concept1_title: {
          name: "qpu.dynamicContent.concept1Title",
          type: "text"
        },
        concept1_text: {
          name: "qpu.dynamicContent.concept1Text",
          type: "text"
        },
        concept2_title: {
          name: "qpu.dynamicContent.concept2Title",
          type: "text"
        },
        concept2_text: {
          name: "qpu.dynamicContent.concept2Text",
          type: "text"
        }
      }
    },
    home_screen_statistics: {
      name: "qpu.dynamicContent.homeScreenStatistics",
      value: "home_screen_statistics",
      maxContentItems: 1,
      keys: {
        students_count: {
          name: "qpu.dynamicContent.studentsCount",
          type: "text"
        },
        professors_count: {
          name: "qpu.dynamicContent.professorsCount",
          type: "text"
        },
        programs_count: {
          name: "qpu.dynamicContent.programsCount",
          type: "text"
        },
        researchs_count: {
          name: "qpu.dynamicContent.researchsCount",
          type: "text"
        }
      }
    },
    upcoming_events: {
      name: "qpu.dynamicContent.upcomingEvents",
      value: "upcoming_events",
      maxContentItems: undefined,
      keys: {
        date: {
          name: "qpu.dynamicContent.date",
          type: "date"
        },
        title: {
          name: "qpu.dynamicContent.title",
          type: "text"
        },
        start_time: {
          name: "qpu.dynamicContent.startTime",
          type: "time"
        },
        end_time: {
          name: "qpu.dynamicContent.endTime",
          type: "time"
        },
        location: {
          name: "qpu.dynamicContent.location",
          type: "text"
        },
        main_image: {
          name: "qpu.dynamicContent.mainImage",
          type: "image"
        },
        slug: {
          name: "qpu.dynamicContent.slug",
          type: "text"
        }
      }
    },
    reviews: {
      name: "qpu.dynamicContent.reviews",
      value: "reviews",
      maxContentItems: undefined,
      keys: {
        image: {
          name: "qpu.dynamicContent.image",
          type: "image"
        },
        author: {
          name: "qpu.dynamicContent.author",
          type: "text"
        },
        text: {
          name: "qpu.dynamicContent.text",
          type: "richtext"
        }
      }
    }
  }
}

const FacultyType = {
  name: "qpu.dynamicContent.faculty",
  value: "faculty",
  // referenceIdsAPI: _readAllFaculties,
  sections: {
    hero_slider: {
      name: "qpu.dynamicContent.heroSlider",
      value: "hero_slider",
      maxContentItems: undefined,
      keys: {
        src: {
          name: "qpu.dynamicContent.src",
          type: "image"
        }
      }
    },
    main_text: {
      name: "qpu.dynamicContent.mainText",
      value: "main_text",
      maxContentItems: 1,
      keys: {
        text: {
          name: "qpu.dynamicContent.text",
          type: "text"
        }
      }
    },
    gallery: {
      name: "qpu.dynamicContent.gallery",
      value: "gallery",
      maxContentItems: 4,
      keys: {
        image: {
          name: "qpu.dynamicContent.image",
          type: "image"
        }
      }
    },
    faculty_statistics: {
      name: "qpu.dynamicContent.facultyStatistics",
      value: "faculty_statistics",
      maxContentItems: 1,
      keys: {
        students_count: {
          name: "qpu.dynamicContent.studentsCount",
          type: "text"
        },
        professors_count: {
          name: "qpu.dynamicContent.professorsCount",
          type: "text"
        },
        programs_count: {
          name: "qpu.dynamicContent.programsCount",
          type: "text"
        },
        researchs_count: {
          name: "qpu.dynamicContent.researchsCount",
          type: "text"
        }
      }
    },
    timeline: {
      name: "qpu.dynamicContent.timeline",
      value: "timeline",
      maxContentItems: undefined,
      keys: {
        date: {
          name: "qpu.dynamicContent.date",
          type: "date"
        },
        title: {
          name: "qpu.dynamicContent.title",
          type: "text"
        },
        description: {
          name: "qpu.dynamicContent.description",
          type: "richtext"
        },
        image: {
          name: "qpu.dynamicContent.image",
          type: "image"
        }
      }
    }
  }
}

const LabType = {
  name: "qpu.dynamicContent.lab",
  value: "lab",
  // referenceIdsAPI: _readAllLabs,
  sections: {
    slider: {
      name: "qpu.dynamicContent.slider",
      value: "slider",
      maxContentItems: undefined,
      keys: {
        image: {
          name: "qpu.dynamicContent.image",
          type: "image"
        }
      }
    }
  }
}

const staticPageKeys = {
  body: {
    name: "qpu.dynamicContent.body",
    type: "richtext"
  },
  hero_image: {
    name: "qpu.dynamicContent.heroImage",
    type: "image"
  }
}

const AboutType = {
  name: "qpu.dynamicContent.about",
  value: "about",
  sections: {
    vision_mission: {
      name: "qpu.dynamicContent.aboutVisionMission",
      value: "vision_mission",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    university_goals: {
      name: "qpu.dynamicContent.aboutUniversityGoals",
      value: "university_goals",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    establishment: {
      name: "qpu.dynamicContent.aboutEstablishment",
      value: "establishment",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    board_of_trustees: {
      name: "qpu.dynamicContent.aboutBoardOfTrustees",
      value: "board_of_trustees",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    university_council: {
      name: "qpu.dynamicContent.aboutUniversityCouncil",
      value: "university_council",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    organizational_structure: {
      name: "qpu.dynamicContent.aboutOrganizationalStructure",
      value: "organizational_structure",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    location_infrastructure: {
      name: "qpu.dynamicContent.aboutLocationInfrastructure",
      value: "location_infrastructure",
      maxContentItems: 1,
      keys: staticPageKeys
    }
  }
}

const AdmissionType = {
  name: "qpu.dynamicContent.admission",
  value: "admission",
  sections: {
    admission_requirements: {
      name: "qpu.dynamicContent.admissionRequirements",
      value: "admission_requirements",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    why_qpu: {
      name: "qpu.dynamicContent.whyQpu",
      value: "why_qpu",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    study_system: {
      name: "qpu.dynamicContent.studySystem",
      value: "study_system",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    tuition_fees_2022_2023: {
      name: "qpu.dynamicContent.tuitionFees2022",
      value: "tuition_fees_2022_2023",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    discounts_scholarships: {
      name: "qpu.dynamicContent.discountsScholarships",
      value: "discounts_scholarships",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    registration_documents: {
      name: "qpu.dynamicContent.registrationDocuments",
      value: "registration_documents",
      maxContentItems: 1,
      keys: staticPageKeys
    }
  }
}

const StudentLifeType = {
  name: "qpu.dynamicContent.studentLife",
  value: "student_life",
  sections: {
    academic_guidance: {
      name: "qpu.dynamicContent.academicGuidance",
      value: "academic_guidance",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    exams: {
      name: "qpu.dynamicContent.exams",
      value: "exams",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    academic_calendar: {
      name: "qpu.dynamicContent.academicCalendar",
      value: "academic_calendar",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    student_guide: {
      name: "qpu.dynamicContent.studentGuide",
      value: "student_guide",
      maxContentItems: 1,
      keys: staticPageKeys
    }
  }
}

export const ReferenceTypes = {
  faculty: FacultyType,
  home: HomeType,
  lab: LabType,
  about: AboutType,
  admission: AdmissionType,
  student_life: StudentLifeType
}