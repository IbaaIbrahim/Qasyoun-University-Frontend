// import { _readAllFaculties, _readAllLabs, _readAlbums } from "../../redux/actions"

const HomeType = {
  name: "qpu.dynamicContent.home",
  value: "home",
  sections: {
    news: {
      name: "qpu.dynamicContent.news",
      value: "news",
      maxContentItems: undefined,
      keys: {
        slug: {
          name: "qpu.dynamicContent.slug",
          type: "text",
          notTranslatable: true
        },
        image: {
          name: "qpu.dynamicContent.image",
          type: "image",
          notTranslatable: true
        },
        text: {
          name: "qpu.dynamicContent.text",
          type: "text"
        },
        description: {
          name: "qpu.dynamicContent.description",
          type: "richtext"
        },
        date: {
          name: "qpu.dynamicContent.date",
          type: "date"
        }
      }
    },
    exhibitions: {
      name: "qpu.dynamicContent.exhibitions",
      value: "exhibitions",
      maxContentItems: undefined,
      keys: {
        slug: {
          name: "qpu.dynamicContent.slug",
          type: "text",
          notTranslatable: true
        },
        image: {
          name: "qpu.dynamicContent.image",
          type: "image",
          notTranslatable: true
        },
        text: {
          name: "qpu.dynamicContent.text",
          type: "text"
        },
        description: {
          name: "qpu.dynamicContent.description",
          type: "richtext"
        },
        date: {
          name: "qpu.dynamicContent.date",
          type: "date"
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
    },
    tour_video: {
      name: "qpu.dynamicContent.tourVideo",
      value: "tour_video",
      maxContentItems: 1,
      keys: {
        video: {
          name: "qpu.dynamicContent.video",
          type: "text"
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
          type: "richtext"
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

/** Council decisions: text + PDF attachment (not hero images). */
const councilDecisionKeys = {
  body: {
    name: "qpu.dynamicContent.body",
    type: "richtext"
  },
  pdf_file: {
    name: "qpu.dynamicContent.pdfDocument",
    type: "file"
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
      keys: {
        body: {
          name: "qpu.dynamicContent.body",
          type: "richtext"
        },
        file: {
          name: "qpu.dynamicContent.pdfFile",
          type: "file"
        },
        table: {
          name: "qpu.dynamicContent.table",
          type: "table",
          columns: {
            name: {
              name: "qpu.dynamicContent.name",
              type: "text"
            },
            position: {
              name: "qpu.dynamicContent.position",
              type: "text"
            }
          }
        }
      }
    },
    university_council: {
      name: "qpu.dynamicContent.aboutUniversityCouncil",
      value: "university_council",
      maxContentItems: 1,
      keys: {
        body: {
          name: "qpu.dynamicContent.body",
          type: "richtext"
        },
        file: {
          name: "qpu.dynamicContent.pdfFile",
          type: "file"
        },
        table: {
          name: "qpu.dynamicContent.table",
          type: "table",
          columns: {
            name: {
              name: "qpu.dynamicContent.name",
              type: "text"
            },
            position: {
              name: "qpu.dynamicContent.position",
              type: "text"
            }
          }
        }
      }
    },
    organizational_structure: {
      name: "qpu.dynamicContent.aboutOrganizationalStructure",
      value: "organizational_structure",
      maxContentItems: 1,
      keys: {
        body: {
          name: "qpu.dynamicContent.body",
          type: "richtext"
        },
        file: {
          name: "qpu.dynamicContent.pdfFile",
          type: "file"
        }
      }
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
      keys: {
        ...staticPageKeys,
        table: {
          name: "qpu.dynamicContent.table",
          type: "table",
          columns: {
            certificate_type: {
              name: "qpu.dynamicContent.certificateType",
              type: "text"
            },
            min_marks: {
              name: "qpu.dynamicContent.minMarks",
              type: "text"
            },
            max_marks: {
              name: "qpu.dynamicContent.maxMarks",
              type: "text"
            }
          }
        },
        file: {
          name: "qpu.dynamicContent.pdfFile",
          type: "file"
        }
      }
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
    tuition_fees: {
      name: "qpu.dynamicContent.tuitionFees",
      value: "tuition_fees",
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

const SitePagesType = {
  name: "qpu.dynamicContent.sitePages",
  value: "site_pages",
  sections: {
    directorates: {
      name: "qpu.dynamicContent.universityDirectorates",
      value: "directorates",
      maxContentItems: 1,
      keys: staticPageKeys
    },
    higher_education_decisions: {
      name: "qpu.dynamicContent.higherEducationDecisions",
      value: "higher_education_decisions",
      maxContentItems: undefined,
      keys: councilDecisionKeys
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
      keys: {
        ...staticPageKeys,
        file: {
          name: "qpu.dynamicContent.pdfFile",
          type: "file"
        },
        table: {
          name: "qpu.dynamicContent.table",
          type: "table",
          columns: {
            date_from: {
              name: "qpu.dynamicContent.dateFrom",
              type: "date"
            },
            date_to: {
              name: "qpu.dynamicContent.dateTo",
              type: "date"
            },
            description: {
              name: "qpu.dynamicContent.description",
              type: "text"
            }
          }
        }
      }
    },
    student_guide: {
      name: "qpu.dynamicContent.studentGuide",
      value: "student_guide",
      maxContentItems: 1,
      keys: staticPageKeys
    }
  }
}

const SocialMediaAndCommunicationType = {
  name: "qpu.dynamicContent.socialMediaAndCommunication",
  value: "social_media_and_communication",
  sections: {
    social_media: {
      name: "qpu.dynamicContent.socialMedia",
      value: "social_media",
      maxContentItems: 1,
      keys: {
        facebook: {
          name: "qpu.dynamicContent.facebook",
          type: "text"
        },
        twitter: {
          name: "qpu.dynamicContent.twitter",
          type: "text"
        },
        instagram: {
          name: "qpu.dynamicContent.instagram",
          type: "text"
        },
        youtube: {
          name: "qpu.dynamicContent.youtube",
          type: "text"
        },
        linkedin: {
          name: "qpu.dynamicContent.linkedin",
          type: "text"
        },
        portal: {
          name: "qpu.dynamicContent.portal",
          type: "text"
        }
      }
    }
  }
}

const AlbumsType = {
  name: "qpu.dynamicContent.albums",
  value: "albums",
  sections: {
    album: {
      name: "qpu.dynamicContent.album",
      value: "album",
      maxContentItems: undefined,
      keys: {
        name: {
          name: "qpu.dynamicContent.name",
          type: "text"
        }
      }
    }
  }
}

export const PhotosGalleryType = {
  name: "qpu.dynamicContent.photosGallery",
  value: "photos_gallery",
  // referenceIdsAPI: _readAlbums,
  sections: {
    images: {
      name: "qpu.dynamicContent.images",
      value: "images",
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

const BreadcrumbPageType = {
  name: "qpu.dynamicContent.breadcrumbPage",
  value: "breadcrumb_page",
  maxContentItems: 1,
  sections: {
    breadcrumb_page: {
      name: "qpu.dynamicContent.breadcrumbPage",
      value: "breadcrumb_page",
      maxContentItems: 1,
      keys: {
        faculties_breadcrumb_image: {
          name: "qpu.dynamicContent.facultiesBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        news_breadcrumb_image: {
          name: "qpu.dynamicContent.newsBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        events_breadcrumb_image: {
          name: "qpu.dynamicContent.eventsBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        research_breadcrumb_image: {
          name: "qpu.dynamicContent.researchBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        about_breadcrumb_image: {
          name: "qpu.dynamicContent.aboutBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        admission_breadcrumb_image: {
          name: "qpu.dynamicContent.admissionBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        contact_us_breadcrumb_image: {
          name: "qpu.dynamicContent.contactUsBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        student_life_breadcrumb_image: {
          name: "qpu.dynamicContent.studentLifeBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        university_directorates_breadcrumb_image: {
          name: "qpu.dynamicContent.universityDirectoratesBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        higher_education_decisions_breadcrumb_image: {
          name: "qpu.dynamicContent.higherEducationDecisionsBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        exhibitions_and_conferences_breadcrumb_image: {
          name: "qpu.dynamicContent.exhibitionsAndConferencesBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        gallery_breadcrumb_image: {
          name: "qpu.dynamicContent.galleryBreadcrumbImage",
          type: "image",
          notTranslatable: true
        },
        vacancies_breadcrumb_image: {
          name: "qpu.dynamicContent.vacanciesBreadcrumbImage",
          type: "image",
          notTranslatable: true
        }
      }
    }
  }
}

export const ReferenceTypes = {
  faculty: FacultyType,
  breadcrumb_page: BreadcrumbPageType,
  social_media_and_communication: SocialMediaAndCommunicationType,
  home: HomeType,
  lab: LabType,
  about: AboutType,
  admission: AdmissionType,
  student_life: StudentLifeType,
  site_pages: SitePagesType,
  albums: AlbumsType,
  photos_gallery: PhotosGalleryType
}