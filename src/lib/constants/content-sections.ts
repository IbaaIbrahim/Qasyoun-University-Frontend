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

export const ReferenceTypes = {
  faculty: FacultyType,
  home: HomeType,
  lab: LabType
}