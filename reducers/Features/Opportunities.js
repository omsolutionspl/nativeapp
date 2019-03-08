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
const CHANGE_FILTER = 'MBM/Opportunities/CHANGE_FILTER';
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

const initState = {
  opps: OPPORTUNITIES,
  filters: {
    tab: FILTER_OPPORTUNITIES,
    search: '',
    modalOpen: false
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