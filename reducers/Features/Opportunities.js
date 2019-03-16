// Dashboard.js

import { createSelector } from 'reselect'
import update from 'react-addons-update';
import { map, filter } from 'lodash'
import moment from 'moment'

// Actions
const LOAD   = 'MBM/Opportunities/LOAD';
const CREATE = 'MBM/Opportunities/CREATE';
const SET_DETAILED = 'MBM/Opportunities/SET_DETAILED';
const SHOW = 'MBM/Opportunities/SHOW';

const SAVE_FILTER = 'MBM/Opportunities/SAVE_FILTER';
const CHANGE_FILTER = 'MBM/Opportunities/CHANGE_FILTER';

const SEARCH_FOR = 'MBM/Opportunities/SEARCH_FOR';
const SEARCH_SUCCESS = 'MBM/Opportunities/SEARCH_SUCCESS';

const TOGGLE_FILTERS = 'MBM/Opportunities/TOGGLE_FILTERS';
const CHANGE_TAB = 'MBM/Opportunities/CHANGE_TAB';

export const FILTER_OPPORTUNITIES = 'MBM/Opportunities/Filter/OPPORTUNITIES'
export const FILTER_FORECASTS = 'MBM/Opportunities/Filter/FORECASTS'
export const FILTER_MATCHES = 'MBM/Opportunities/Filter/MATCHES'



const OPPORTUNITIES = [{
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4de13c",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "The service being procured includes all currently existing and, upon announcement, new or enhanced Amazon Web Services (AWS) AWS services:\u00a0\u2022 For Amazon public cloud regions, all AWS services available to commercial customers.\u2022 For Amazon GovCloud regions, all AWS service available to GovCloud customers.",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "541519",
      "agency": "FHWA - Washington DC \/ Office of Contracts and Procurement",
      "dot_estimated_value": "$10 million-$20 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "Tom Strobel",
      "sol_id": "dot_5c695bf4de13c",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-198",
      "office": "",
      "contact_info": "Tom Strobel, tom.strobel@dot.gov, (202) 366-9929",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Computer Related Services",
      "dot_sequence_number": "2019-198",
      "contact_info_phone": "(202) 366-9929",
      "naics": {
        "code": "541519",
        "name": "541519 - Other Computer Related Services",
        "value": 2063
      },
      "contact_info_mail": "tom.strobel@dot.gov"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4de339",
  "_score": null,
  "_source": {
    "competition_type": "Woman Owned Business",
    "description_field": "The Office of Aviation Analysis needs maintenance and applications support from a contractor that is knowledgeable\/familiar with typical document storage and tracking systems (such as the former Documents Management System) and is capable of performing the following functions:\u00a0 server build, server backups, server OST patches\/updates, application middleware installation\/configuration (e.g., ColdFusion, ASP.NET, Web sphere, Oracle application server), application middleware patch application, database backups, database patch application, application technical support, system accreditation, application install\/configuration, customer interviews during analysis phase, customer demo of applications, and customer training sessions.",
    "post_date": null,
    "attributes": {
      "competition_type": "Woman Owned Business",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "541611",
      "agency": "OST - Washington DC Office",
      "dot_estimated_value": "$500,000-$1 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "David Carter",
      "sol_id": "dot_5c695bf4de339",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-OST_EAS_001",
      "office": "",
      "contact_info": "David Carter, david.carter@dot.gov, (202) 366-4813",
      "title": "",
      "dot_follow_on_8a": "yes",
      "dot_procurement_category": "Business Services",
      "dot_sequence_number": "OST_EAS_001",
      "contact_info_phone": "(202) 366-4813",
      "naics": {
        "code": "541611",
        "name": "541611 - Administrative Management and General Management Consulting Services",
        "value": 2064
      },
      "contact_info_mail": "david.carter@dot.gov"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4de519",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "Project Name: FW_UPSA_101(1)Description: Rehabilitate River Road (Route 101)State: IL",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "237310",
      "agency": "FHWA - Eastern Federal Lands Highway Division",
      "dot_estimated_value": "$1 million-$2 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "MELVIN SLOAN",
      "sol_id": "dot_5c695bf4de519",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-079",
      "office": "",
      "contact_info": "MELVIN SLOAN, EFLHD.CONTRACTS@DOT.GOV, (703) 404-6205",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Construction",
      "dot_sequence_number": "2019-079",
      "contact_info_phone": "(703) 404-6205",
      "naics": {
        "code": "237310",
        "name": "237310 - Highway, Street, and Bridge Construction",
        "value": 1247
      },
      "contact_info_mail": "EFLHD.CONTRACTS@DOT.GOV"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4de601",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "Install hands free mooring equipment at Snell Lock located in Massena, NY.",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "237990",
      "agency": "SLSDC - Procurement and Supply Division ",
      "dot_estimated_value": "$500,000-$1 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "Patricia White",
      "sol_id": "dot_5c695bf4de601",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-19-04",
      "office": "",
      "contact_info": "Patricia White, patricia.white@dot.gov, (315) 764-3236",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Construction",
      "dot_sequence_number": "19-04",
      "contact_info_phone": "(315) 764-3236",
      "naics": {
        "code": "237990",
        "name": "237990 - Other Heavy and Civil Engineering Construction",
        "value": 1248
      },
      "contact_info_mail": "patricia.white@dot.gov"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4dee95",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "Project Name: GREE_11(1)Description: Main Entrance &\u00a0 Park Central Rd. Bridge Replacement and ResurfacingState: MD",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "237310",
      "agency": "FHWA - Eastern Federal Lands Highway Division ",
      "dot_estimated_value": "$5 million-$10 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "MELVIN SLOAN",
      "sol_id": "dot_5c695bf4dee95",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-082",
      "office": "",
      "contact_info": "MELVIN SLOAN, EFLHD.CONTRACTS@DOT.GOV, (703) 404-6205",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Construction",
      "dot_sequence_number": "2019-082",
      "contact_info_phone": "(703) 404-6205",
      "naics": {
        "code": "237310",
        "name": "237310 - Highway, Street, and Bridge Construction",
        "value": 1247
      },
      "contact_info_mail": "EFLHD.CONTRACTS@DOT.GOV"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4df0b4",
  "_score": null,
  "_source": {
    "competition_type": "Full and Open",
    "description_field": "AADT Big Data. Goals include: 1) evaluate the technical & statistical validity of traffic data & processing methods marketed by private businesses, 2) offer comments & suggestions to private businesses on potential improvements, & 3) establish a technical checklist for Federal, State & local highway agencies when considering the procurement of private traffic data. Specifically, the project will determine the reliability and statistical validity of traffic data derived through passively collected data (cellular\/GPS) that is collected and marketed by private businesses.",
    "post_date": null,
    "attributes": {
      "competition_type": "Full and Open",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "541330",
      "agency": "",
      "dot_estimated_value": "$1 million-$2 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "Steven Jessberger",
      "sol_id": "dot_5c695bf4df0b4",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-085",
      "office": "",
      "contact_info": "Steven Jessberger, steven.jessberger@dot.gov, (202) 366-5052",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Engineering Services",
      "dot_sequence_number": "2019-085",
      "contact_info_phone": "(202) 366-5052",
      "naics": {
        "code": "541330",
        "name": "541330 - Engineering Services",
        "value": 2050
      },
      "contact_info_mail": "steven.jessberger@dot.gov"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4df97c",
  "_score": null,
  "_source": {
    "competition_type": "",
    "description_field": "CA FLAP MAD CR26(1), et al Avenue 26 and Road 29\n\nRoadway construction\n",
    "post_date": null,
    "attributes": {
      "competition_type": "",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "237310",
      "agency": "FHWA - Central Federal Lands Highway Division ",
      "dot_estimated_value": "$10 million-$20 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "CFLHD",
      "sol_id": "dot_5c695bf4df97c",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-136",
      "office": "",
      "contact_info": "CFLHD, cflhdacquisitions@dot.gov , (720) 963-3500",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Construction",
      "dot_sequence_number": "2019-136",
      "contact_info_phone": "(720) 963-3500",
      "naics": {
        "code": "237310",
        "name": "237310 - Highway, Street, and Bridge Construction",
        "value": 1247
      },
      "contact_info_mail": "cflhdacquisitions@dot.gov "
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4e056f",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "Project Name: NP_NATR_3O19_3P 24Description: Overlay park road from MP 103.7 to MP 110.32.State: MS",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "237310",
      "agency": "FHWA - Eastern Federal Lands Highway Division",
      "dot_estimated_value": "$2 million-$5 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "MELVIN SLOAN",
      "sol_id": "dot_5c695bf4e056f",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-121",
      "office": "",
      "contact_info": "MELVIN SLOAN, EFLHD.CONTRACTS@DOT.GOV, (703) 404-6205",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Construction",
      "dot_sequence_number": "2019-121",
      "contact_info_phone": "(703) 404-6205",
      "naics": {
        "code": "237310",
        "name": "237310 - Highway, Street, and Bridge Construction",
        "value": 1247
      },
      "contact_info_mail": "EFLHD.CONTRACTS@DOT.GOV"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4e0a24",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "Support for registration, licensing and insurance functions, as well as medical program activities by providing customer service, data entry and dissemination, mass mailings, and other special tasks. Providing a customer contact center that performs all functions associated with receiving and responding to inquiries, and providing information and services through the use of various communications media, including telephones, telecommunications devices for the deaf, e-mail, postal mail, facsimile (fax), the Internet, and other media as appropriate.",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "561499",
      "agency": "",
      "dot_estimated_value": "$10 million-$20 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "C-A Washington",
      "sol_id": "dot_5c695bf4e0a24",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-064",
      "office": "",
      "contact_info": "C-A Washington, c-alexandria.washington@dot.gov, (202) 366-9616",
      "title": "",
      "dot_follow_on_8a": "yes",
      "dot_procurement_category": "Services (not listed)",
      "dot_sequence_number": "2019-064",
      "contact_info_phone": "(202) 366-9616",
      "naics": {
        "code": "561499",
        "name": "561499 - All Other Business Support Services",
        "value": 2106
      },
      "contact_info_mail": "c-alexandria.washington@dot.gov"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}, {
  "_index": "mbm.directory.d7.v2",
  "_type": "fed.opportunity.event.v3",
  "_id": "dot_5c695bf4e0c27",
  "_score": null,
  "_source": {
    "competition_type": "Small Business Set-Aside",
    "description_field": "Project Name: PRWI_201(1)_400(1)_ETCDescription: Rehabilitate Park Roads and Parking.State: VA",
    "post_date": null,
    "attributes": {
      "competition_type": "Small Business Set-Aside",
      "rfp_predict_fiscal_year": "2019",
      "naics_code": "237310",
      "agency": "FHWA - Eastern Federal Lands Highway Division",
      "dot_estimated_value": "$1 million-$2 million",
      "dot_founded_ar_ra": "no",
      "contact_info_name": "MELVIN SLOAN",
      "sol_id": "dot_5c695bf4e0c27",
      "rfp_predict_quarter": "1st QTR",
      "link": "https:\/\/www.transportation.gov\/content\/procurement-forecast-opportunity-2019-123",
      "office": "",
      "contact_info": "MELVIN SLOAN, EFLHD.CONTRACTS@DOT.GOV, (703) 404-6205",
      "title": "",
      "dot_follow_on_8a": "no",
      "dot_procurement_category": "Construction",
      "dot_sequence_number": "2019-123",
      "contact_info_phone": "(703) 404-6205",
      "naics": {
        "code": "237310",
        "name": "237310 - Highway, Street, and Bridge Construction",
        "value": 1247
      },
      "contact_info_mail": "EFLHD.CONTRACTS@DOT.GOV"
    },
    "deadline": null
  },
  "sort": [-9223372036854775808]
}];

const mapOppToResults = (opp, kk) => {
  let __source = opp._source

  return {

    id:       opp._id,
    "type":   __source.competition_type,
    "post_date": "2018-11-20",
    "deadline": "2020-11-20",

    // TODO: Array
    "category": __source.attributes.naics,
    "images": [
      {"url": "https://s3.amazonaws.com/agency-logos.federalregister.gov/32/medium.png"}
    ],

    "company": {
      "name": __source.attributes.agency,
      "address": "185 Sutter St, San Francisco, CA 94109",
      "description": "JAMPRO is an Agency of the Government of Jamaica's Ministry of Industry, Commerce, Agriculture and Fisheries (MICAF) that promotes business opportunities in export and investment to the local and international private sector.",
      "organisation": null,
      "division": null,
      "office": __source.attributes.office,
      "agency": __source.attributes.agency,
      "website": "https://www.theconsultinglead.com",
    },

    "contact": {
      "person": __source.attributes.contact_info_name,
      "mail": __source.attributes.contact_info_mail,
      "phone": __source.attributes.contact_info_phone
    },

    "attributes": [{
        "id": 1107,
        "name": "s03",
        "label": "8 (a)"
      }, {
        "id": 1117,
        "name": "s13",
        "label": "Historically Underutilized Business Zone "
      }, {
        "id": 1126,
        "name": "s22",
        "label": "Veteran Owned Small Business"
      }, {
        "id": 1129,
        "name": "s25",
        "label": "Woman-Owned Small Business (WOSB)"
      }],

    "description": {
      "description":  __source.description_field,
      "title": __source.title || 'Service Disabled Veteran Owned  Small',
      "rfp_predict_fiscal_year": __source.attributes.rfp_predict_fiscal_year,
      "estimated_value": __source.attributes.dot_estimated_value,
      "dot_founded_ar_ra": __source.attributes.dot_founded_ar_ra,
      "sol_id": __source.attributes.sol_id,
      "rfp_predict_quarter": __source.attributes.rfp_predict_quarter,
      "link":__source.attributes.link,
      "dot_follow_on_8a": __source.attributes.dot_follow_on_8a,
      "dot_procurement_category": __source.attributes.dot_procurement_category,
      // "dot_sequence_number": __source.attributes.dot_sequence_number,
    }
  }
}

const agg = {
  "event.participant_profile.multi.business_certifications.value.raw12": {
    "doc_count": 175,
        "inner": {
          "doc_count": 646,
          "event.participant_profile.multi.business_certifications.value.raw_count": {
            "value": 6
          },
        "event.participant_profile.multi.business_certifications.value.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 66,
            "buckets": [{
              "key": "b04",
              "doc_count": 127
            }, {
              "key": "b03",
              "doc_count": 124
            }, {
              "key": "b06",
              "doc_count": 123
            }, {
              "key": "b02",
              "doc_count": 107
            }, {
              "key": "b05",
              "doc_count": 99
            }]
      }
    }
  },
  "event.participant_profile.multi.small_business_category.value.raw14": {
    "doc_count": 175,
        "inner": {
      "doc_count": 0,
          "event.participant_profile.multi.small_business_category.value.raw_count": {
        "value": 0
      },
      "event.participant_profile.multi.small_business_category.value.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": []
      }
    }
  },
  "event.participant_profile.multi.federal_supply_schedule.value.raw13": {
    "doc_count": 175,
        "inner": {
      "doc_count": 0,
          "event.participant_profile.multi.federal_supply_schedule.value.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": []
      },
      "event.participant_profile.multi.federal_supply_schedule.value.raw_count": {
        "value": 0
      }
    }
  },
  "event.labels7": {
    "doc_count": 175,
        "event.labels": {
      "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": []
    },
    "event.labels_count": {
      "value": 0
    }
  },
  "event.naics.value8": {
    "doc_count": 175,
        "inner": {
      "doc_count": 1388,
          "event.naics.value_count": {
        "value": 40
      },
      "event.naics.value": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [{
          "key": "74",
          "doc_count": 128,
          "label": "541 - Professional, Scientific, and Technical Services"
        }, {
          "key": "11",
          "doc_count": 72,
          "label": "237 - Heavy and Civil Engineering Construction"
        }, {
          "key": "1234",
          "doc_count": 67,
          "label": "221310 - Water Supply and Irrigation Systems"
        }, {
          "key": "126",
          "doc_count": 67,
          "label": "2213 - Water, Sewage and Other Systems"
        }, {
          "key": "468",
          "doc_count": 67,
          "label": "22131 - Water Supply and Irrigation Systems"
        }, {
          "key": "9",
          "doc_count": 67,
          "label": "221 - Utilities"
        }, {
          "key": "12",
          "doc_count": 59,
          "label": "238 - Specialty Trade Contractors"
        }, {
          "key": "1248",
          "doc_count": 51,
          "label": "237990 - Other Heavy and Civil Engineering Construction"
        }, {
          "key": "132",
          "doc_count": 51,
          "label": "2379 - Other Heavy and Civil Engineering Construction"
        }, {
          "key": "479",
          "doc_count": 51,
          "label": "23799 - Other Heavy and Civil Engineering Construction"
        }, {
          "key": "1257",
          "doc_count": 46,
          "label": "238210 - Electrical Contractors and Other Wiring Installation Contractors"
        }, {
          "key": "134",
          "doc_count": 46,
          "label": "2382 - Building Equipment Contractors"
        }, {
          "key": "2060",
          "doc_count": 46,
          "label": "541511 - Custom Computer Programming Services"
        }, {
          "key": "333",
          "doc_count": 46,
          "label": "5415 - Computer Systems Design and Related Services"
        }, {
          "key": "488",
          "doc_count": 46,
          "label": "23821 - Electrical Contractors and Other Wiring Installation Contractors"
        }, {
          "key": "950",
          "doc_count": 46,
          "label": "54151 - Computer Systems Design and Related Services"
        }, {
          "key": "2040",
          "doc_count": 32,
          "label": "541110 - Offices of Lawyers"
        }, {
          "key": "329",
          "doc_count": 32,
          "label": "5411 - Legal Services"
        }, {
          "key": "934",
          "doc_count": 32,
          "label": "54111 - Offices of Lawyers"
        }, {
          "key": "2050",
          "doc_count": 31,
          "label": "541330 - Engineering Services"
        }, {
          "key": "331",
          "doc_count": 31,
          "label": "5413 - Architectural, Engineering, and Related Services"
        }, {
          "key": "940",
          "doc_count": 31,
          "label": "54133 - Engineering Services"
        }, {
          "key": "1245",
          "doc_count": 26,
          "label": "237130 - Power and Communication Line and Related Structures Construction"
        }, {
          "key": "129",
          "doc_count": 26,
          "label": "2371 - Utility System Construction"
        }, {
          "key": "476",
          "doc_count": 26,
          "label": "23713 - Power and Communication Line and Related Structures Construction"
        }, {
          "key": "2080",
          "doc_count": 21,
          "label": "541870 - Advertising Material Distribution Services"
        }, {
          "key": "336",
          "doc_count": 21,
          "label": "5418 - Advertising, Public Relations, and Related Services"
        }, {
          "key": "962",
          "doc_count": 21,
          "label": "54187 - Advertising Material Distribution Services"
        }, {
          "key": "1253",
          "doc_count": 17,
          "label": "238150 - Glass and Glazing Contractors"
        }, {
          "key": "133",
          "doc_count": 17,
          "label": "2381 - Foundation, Structure, and Building Exterior Contractors"
        }, {
          "key": "484",
          "doc_count": 17,
          "label": "23815 - Glass and Glazing Contractors"
        }, {
          "key": "2070",
          "doc_count": 15,
          "label": "541690 - Other Scientific and Technical Consulting Services"
        }, {
          "key": "334",
          "doc_count": 15,
          "label": "5416 - Management, Scientific, and Technical Consulting Services"
        }, {
          "key": "953",
          "doc_count": 15,
          "label": "54169 - Other Scientific and Technical Consulting Services"
        }, {
          "key": "1284",
          "doc_count": 1,
          "label": "311411 - Frozen Fruit, Juice, and Vegetable Manufacturing"
        }, {
          "key": "1286",
          "doc_count": 1,
          "label": "311421 - Fruit and Vegetable Canning"
        }, {
          "key": "13",
          "doc_count": 1,
          "label": "311 - Food Manufacturing"
        }, {
          "key": "140",
          "doc_count": 1,
          "label": "3114 - Fruit and Vegetable Preserving and Specialty Food Manufacturing"
        }, {
          "key": "507",
          "doc_count": 1,
          "label": "31141 - Frozen Food Manufacturing"
        }, {
          "key": "508",
          "doc_count": 1,
          "label": "31142 - Fruit and Vegetable Canning, Pickling, and Drying"
        }]
      }
    }
  },
  "event.community_of_interest.raw10": {
    "doc_count": 175,
        "event.community_of_interest.raw": {
      "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": []
    },
    "event.community_of_interest.raw_count": {
      "value": 0
    }
  },
  "event.participant_profile.multi.business_certification.value.raw15": {
    "doc_count": 175,
        "inner": {
      "doc_count": 0,
          "event.participant_profile.multi.business_certification.value.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": []
      },
      "event.participant_profile.multi.business_certification.value.raw_count": {
        "value": 0
      }
    }
  },
  "address.state18": {
    "doc_count": 175,
        "address.state": {
      "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
        "key": "PR",
        "doc_count": 11
      }, {
        "key": "AK",
        "doc_count": 9
      }, {
        "key": "DE",
        "doc_count": 7
      }, {
        "key": "MI",
        "doc_count": 7
      }, {
        "key": "MD",
        "doc_count": 6
      }, {
        "key": "RI",
        "doc_count": 6
      }, {
        "key": "WA",
        "doc_count": 6
      }, {
        "key": "DC",
        "doc_count": 5
      }, {
        "key": "MT",
        "doc_count": 5
      }, {
        "key": "ND",
        "doc_count": 5
      }, {
        "key": "OR",
        "doc_count": 5
      }, {
        "key": "TN",
        "doc_count": 5
      }, {
        "key": "AL",
        "doc_count": 4
      }, {
        "key": "FL",
        "doc_count": 4
      }, {
        "key": "GA",
        "doc_count": 4
      }, {
        "key": "MA",
        "doc_count": 4
      }, {
        "key": "ME",
        "doc_count": 4
      }, {
        "key": "MS",
        "doc_count": 4
      }, {
        "key": "NE",
        "doc_count": 4
      }, {
        "key": "OK",
        "doc_count": 4
      }, {
        "key": "PA",
        "doc_count": 4
      }, {
        "key": "UT",
        "doc_count": 4
      }, {
        "key": "VA",
        "doc_count": 4
      }, {
        "key": "WV",
        "doc_count": 4
      }, {
        "key": "LA",
        "doc_count": 3
      }, {
        "key": "MN",
        "doc_count": 3
      }, {
        "key": "NC",
        "doc_count": 3
      }, {
        "key": "NV",
        "doc_count": 3
      }, {
        "key": "TX",
        "doc_count": 3
      }, {
        "key": "WI",
        "doc_count": 3
      }, {
        "key": "WY",
        "doc_count": 3
      }, {
        "key": "AR",
        "doc_count": 2
      }, {
        "key": "CA",
        "doc_count": 2
      }, {
        "key": "ID",
        "doc_count": 2
      }, {
        "key": "IL",
        "doc_count": 2
      }, {
        "key": "KY",
        "doc_count": 2
      }, {
        "key": "MO",
        "doc_count": 2
      }, {
        "key": "NM",
        "doc_count": 2
      }, {
        "key": "OH",
        "doc_count": 2
      }, {
        "key": "SC",
        "doc_count": 2
      }, {
        "key": "SD",
        "doc_count": 2
      }, {
        "key": "VT",
        "doc_count": 2
      }, {
        "key": "AZ",
        "doc_count": 1
      }, {
        "key": "CO",
        "doc_count": 1
      }, {
        "key": "CT",
        "doc_count": 1
      }, {
        "key": "HI",
        "doc_count": 1
      }, {
        "key": "IA",
        "doc_count": 1
      }, {
        "key": "IN",
        "doc_count": 1
      }, {
        "key": "NY",
        "doc_count": 1
      }]
    },
    "address.state_count": {
      "value": 49
    }
  },
  "event.participant_profile.single.employees_number.raw16": {
    "doc_count": 175,
        "inner": {
      "doc_count": 5,
          "event.participant_profile.single.employees_number.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": []
      },
      "event.participant_profile.single.employees_number.raw_count": {
        "value": 0
      }
    }
  },
  "custom.sessions.value9": {
    "doc_count": 175,
        "inner": {
      "doc_count": 0
    }
  },
  "event.participant_profile.multi.socio_economy_category.value.raw11": {
    "doc_count": 175,
        "inner": {
      "doc_count": 426,
          "event.participant_profile.multi.socio_economy_category.value.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 6,
            "buckets": [{
          "key": "s21",
          "doc_count": 119
        }, {
          "key": "s03",
          "doc_count": 106
        }, {
          "key": "s13",
          "doc_count": 95
        }, {
          "key": "s22",
          "doc_count": 94
        }, {
          "key": "s20",
          "doc_count": 6
        }]
      },
      "event.participant_profile.multi.socio_economy_category.value.raw_count": {
        "value": 7
      }
    }
  },
  "event.participant_profile.single.yyyy.raw17": {
    "doc_count": 175,
        "inner": {
      "doc_count": 5,
          "event.participant_profile.single.yyyy.raw": {
        "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": []
      },
      "event.participant_profile.single.yyyy.raw_count": {
        "value": 0
      }
    }
  }
}

const initState = {
  opps: OPPORTUNITIES,
  filters: {
    tab: FILTER_OPPORTUNITIES,
    searchText: '',
    modalOpen: false,
    loading: false
  },
  selectedId: null,
  detailed: [],
}

// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {

    case SET_DETAILED:
      return update(state, {
        detailed: { $set: [action.id] } // _.xor(state.detailed, ) }
      });
      break;

    case TOGGLE_FILTERS:
      return update(state, {
        filters: { modalOpen: { $set: ! state.filters.modalOpen } }
      });
      break;

    case SEARCH_FOR:
      return update(state, {
        filters: {
          loading: { $set: true },
          searchText: { $set: action.searchText },
          query: { $set: action.query },
        }
      });
      break;

    case SEARCH_SUCCESS:
      return update(state, {
        filters: {
          loading: { $set: false }
        }
      });
      break;

    case CHANGE_TAB:
      return update(state, {
        filters: { tab: { $set: action.tab } }
      });
      break;

    case SHOW:
      return update(state, {
        selectedId: { $set: action.id }
      });
      break;

      // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function seeDetails(opp, forceModal) {
  return (dispatch, getState) => {

    // let _isDetailed = getDetailed(getState()).indexOf(opp.id) !== -1;
    //
    // if (forceModal || _isDetailed) {
    //   dispatch({
    //     type: SHOW,
    //     id: opp.id
    //   });
    // }
    // else
    // {
      dispatch({
        type: SET_DETAILED,
        id: opp.id
      });
    // }
  };
}


export function saveFilter(query) {
  return (dispatch, getState) => {

    dispatch({
      type: SAVE_FILTER,
      query
    });
  }
}


export function search(searchText, query) {
  return (dispatch, getState) => {

    // dispatch(seeDetails());
    dispatch({
      type: SEARCH_FOR,
      searchText,
      query
    });


    setTimeout(function() {
      dispatch({
        type: SEARCH_SUCCESS
      });
    }, 3000);
  }
}


export function changeTab(tab) {
  return (dispatch, getState) => {

    // dispatch(seeDetails());
    dispatch({
      type: CHANGE_TAB,
      tab
    });
  }
}

export function toggleSearchModal() {
  return {
      type: TOGGLE_FILTERS
  };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

// selectors

/**
 * In this example, when I did use
 * state => state.app.opportunities
 * seeDetails action were mutating entire .opportunities object and screen was rerendering
 *
 */
export const getOpportunities = createSelector(
    (state) => state.app.opportunities.opps,
    items => map(items, mapOppToResults)
)

export const getDetailed = createSelector(
    (state) => state.app.opportunities,
    items => items.detailed
)

export const getSelectedId = createSelector(
    (state) => state.app.opportunities,
    state => state.selectedId
)

export const getFilters = createSelector(
    (state) => state.app.opportunities,
    state => state.filters
)

export const getCurrentTab = createSelector(
    getFilters,
    filters => filters.tab
)

export const isFiltersModalOpen = createSelector(
    getFilters,
    filters => filters.modalOpen
)


// TODO:
// export const getFilteredItems = createSelector(
//     getFilter,
//     (state) => state.app.opportunities,
//     state => state.filter
// )

export const getRenderMode = createSelector(
    (state) => state.app.opportunities,
    state => state.render
)

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}