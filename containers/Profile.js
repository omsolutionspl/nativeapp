import React from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../reducers/Features/Dashboard';

import ProfileBlock from '../components/ProfileBlock'

export default connect(
    (state, ownProps) => {
      return {
        // navigation: ownProps.navigation,
        profile: {
            "id": 179049,
            "account_name": "",
            "first_name": "Don",
            "last_name": "Gittens",
            "phone": "",
            "title": "Manager, Infrastructure & Cannabis",
            "state": "Kingston",
            "country": "JM",
            "city": "Kingston  ",
            "address": "18 Trafalgar Road",
            "url": "http://www.tradeandinvestjamaica.org",
            "duns": null,
            "type": "buyer",
            "bcategories": "||",
            "event_id": 900,
            "primary_function": "Investment Promotion Agency",
            "primary_function_short": "Investment Promotion Agency",
            "company": {
              "name": "JAMAICA PROMOTIONS CORPORATION (JAMPRO)",
              "description": "JAMPRO is an Agency of the Government of Jamaica's Ministry of Industry, Commerce, Agriculture and Fisheries (MICAF) that promotes business opportunities in export and investment to the local and international private sector.",
              "organisation": null,
              "division": null,
              "office": null
            },
            "avatar": "https://idbinvest2019.mbmapp.com/media/filter/s/img/Don_Gittens_phot-1548691980.jpg",
            "logo": "http://kingstoonfest.com/wp-content/uploads/2018/04/JAMPRO-LOGO-colour-28329.jpg",
            "attachments": [],
            "business_intentions": [],
            "matching_context": [],
            "availability_time": [],
            "attributes": [{
              "key": "a1_eng",
              "label": "Does the executive\/s mentioned speak English?",
              "type": "string",
              "items": [{
                "key": "a1_eng",
                "value": "yes",
                "content": "Yes "
              }]
            }, {
              "key": "a1_fname",
              "label": "First Name ",
              "type": "string",
              "items": [{
                "key": "a1_fname",
                "value": "Don",
                "content": "Don"
              }]
            }, {
              "key": "a1_lname",
              "label": "Last Name ",
              "type": "string",
              "items": [{
                "key": "a1_lname",
                "value": "Gittens",
                "content": "Gittens"
              }]
            }, {
              "key": "a1_title",
              "label": "Job Title ",
              "type": "string",
              "items": [{
                "key": "a1_title",
                "value": "Manager, Infrastructure & Cannabis",
                "content": "Manager, Infrastructure & Cannabis"
              }]
            }, {
              "key": "a1_phone",
              "label": "Phone # ",
              "type": "string",
              "items": [{
                "key": "a1_phone",
                "value": "+1 876-978-7755",
                "content": "+1 876-978-7755"
              }]
            }, {
              "key": "a1_cell_phone",
              "label": "Cell Phone",
              "type": "string",
              "items": [{
                "key": "a1_cell_phone",
                "value": "+18765645166",
                "content": "+18765645166"
              }]
            }, {
              "key": "a1_email",
              "label": "Email ",
              "type": "string",
              "items": [{
                "key": "a1_email",
                "value": "dgittens@jamprocorp.com",
                "content": "dgittens@jamprocorp.com"
              }]
            }, {
              "key": "cmpny_name",
              "label": "Company Name (English)",
              "type": "string",
              "items": [{
                "key": "cmpny_name",
                "value": "JAMAICA PROMOTIONS CORPORATION (JAMPRO)",
                "content": "JAMAICA PROMOTIONS CORPORATION (JAMPRO)"
              }]
            }, {
              "key": "address",
              "label": "Mailing Address ",
              "type": "string",
              "items": [{
                "key": "address",
                "value": "18 Trafalgar Road",
                "content": "18 Trafalgar Road"
              }]
            }, {
              "key": "city",
              "label": "City ",
              "type": "string",
              "items": [{
                "key": "city",
                "value": "Kingston  ",
                "content": "Kingston  "
              }]
            }, {
              "key": "state",
              "label": "State \/ Province",
              "type": "string",
              "items": [{
                "key": "state",
                "value": "Kingston",
                "content": "Kingston"
              }]
            }, {
              "key": "zip",
              "label": "Zip \/ Postal Code",
              "type": "string",
              "items": [{
                "key": "zip",
                "value": "10",
                "content": "10"
              }]
            }, {
              "key": "country",
              "label": "Country ",
              "type": "string",
              "items": [{
                "key": "country",
                "value": "JM",
                "content": "Jamaica"
              }]
            }, {
              "key": "phone",
              "label": "Phone # ",
              "type": "string",
              "items": [{
                "key": "phone",
                "value": "+18769787755",
                "content": "+18769787755"
              }]
            }, {
              "key": "url",
              "label": "Organization website (URL) ",
              "type": "string",
              "items": [{
                "key": "url",
                "value": "http:\/\/www.tradeandinvestjamaica.org",
                "content": "http:\/\/www.tradeandinvestjamaica.org"
              }]
            }, {
              "key": "description",
              "label": "Description (English)",
              "type": "string",
              "items": [{
                "key": "description",
                "value": "JAMPRO is an Agency of the Government of Jamaica\u2019s Ministry of Industry, Commerce, Agriculture and Fisheries (MICAF) that promotes business opportunities in export and investment to the local and international private sector.",
                "content": "JAMPRO is an Agency of the Government of Jamaica\u2019s Ministry of Industry, Commerce, Agriculture and Fisheries (MICAF) that promotes business opportunities in export and investment to the local and international private sector."
              }]
            }, {
              "key": "a2_eng",
              "label": "Does the executive\/s mentioned speak English?",
              "type": "string",
              "items": [{
                "key": "a2_eng",
                "value": null,
                "content": null
              }]
            }, {
              "key": "a2_fname",
              "label": "First Name ",
              "type": "string",
              "items": [{
                "key": "a2_fname",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_lname",
              "label": "Last Name ",
              "type": "string",
              "items": [{
                "key": "a2_lname",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_title",
              "label": "Job Title ",
              "type": "string",
              "items": [{
                "key": "a2_title",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_phone",
              "label": "Phone # ",
              "type": "string",
              "items": [{
                "key": "a2_phone",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_cell_phone",
              "label": "Cell Phone",
              "type": "string",
              "items": [{
                "key": "a2_cell_phone",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_email",
              "label": "Email ",
              "type": "string",
              "items": [{
                "key": "a2_email",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "cmpny_name_chi",
              "label": "Company Name (Chinese) ",
              "type": "string",
              "items": [{
                "key": "cmpny_name_chi",
                "value": "JAMAICA PROMOTIONS CORPORATION (JAMPRO)",
                "content": "JAMAICA PROMOTIONS CORPORATION (JAMPRO)"
              }]
            }, {
              "key": "a1_gender",
              "label": "Gender",
              "type": "string",
              "items": [{
                "key": "a1_gender",
                "value": "male",
                "content": "Male"
              }]
            }, {
              "key": "a1_fname_chi",
              "label": "First Name (Chinese) ",
              "type": "string",
              "items": [{
                "key": "a1_fname_chi",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a1_lname_chi",
              "label": "Last Name (Chinese)",
              "type": "string",
              "items": [{
                "key": "a1_lname_chi",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a1_wechat_id",
              "label": "WeChat ID",
              "type": "string",
              "items": [{
                "key": "a1_wechat_id",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "estiamte_usd_infrastructure_in_country",
              "label": "Estimated amount in USD toward infrastructure projects in my country.",
              "type": "string",
              "items": [{
                "key": "estiamte_usd_infrastructure_in_country",
                "value": "1,600,000,000",
                "content": "1,600,000,000"
              }]
            }, {
              "key": "description_chi",
              "label": "Description (Chinese)",
              "type": "string",
              "items": [{
                "key": "description_chi",
                "value": "Jampro \u662f\u7259\u4e70\u52a0\u653f\u5e9c\u5de5\u4e1a\u3001\u5546\u4e1a\u3001\u519c\u4e1a\u548c\u6e14\u4e1a\u90e8\u7684\u4e00\u4e2a\u673a\u6784, \u8d1f\u8d23\u4fc3\u8fdb\u5411\u5f53\u5730\u548c\u56fd\u9645\u79c1\u8425\u90e8\u95e8\u51fa\u53e3\u548c\u6295\u8d44\u65b9\u9762\u7684\u5546\u673a\u3002",
                "content": "Jampro \u662f\u7259\u4e70\u52a0\u653f\u5e9c\u5de5\u4e1a\u3001\u5546\u4e1a\u3001\u519c\u4e1a\u548c\u6e14\u4e1a\u90e8\u7684\u4e00\u4e2a\u673a\u6784, \u8d1f\u8d23\u4fc3\u8fdb\u5411\u5f53\u5730\u548c\u56fd\u9645\u79c1\u8425\u90e8\u95e8\u51fa\u53e3\u548c\u6295\u8d44\u65b9\u9762\u7684\u5546\u673a\u3002"
              }]
            }, {
              "key": "a1_prefered_communication_channel",
              "label": "What is the best way to be in touch with you?",
              "type": "array",
              "items": [{
                "key": "a1_prefered_communication_channel",
                "value": "email_channel",
                "content": "E-mail"
              }]
            }, {
              "key": "youtube",
              "label": "YouTube Link",
              "type": "string",
              "items": [{
                "key": "youtube",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "youku",
              "label": "YouKu Link",
              "type": "string",
              "items": [{
                "key": "youku",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_gender",
              "label": "Gender",
              "type": "string",
              "items": [{
                "key": "a2_gender",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_fname_chi",
              "label": "First Name (Chinese) ",
              "type": "string",
              "items": [{
                "key": "a2_fname_chi",
                "value": "",
                "content": ""
              }]
            }, {
              "key": "a2_lname_chi",
              "label": "Last Name (Chinese)",
              "type": "string",
              "items": [{
                "key": "a2_lname_chi",
                "value": "",
                "content": ""
              }]
            }]
          },
          "state": {
            "lets_connect": {
              "ability_to_communicate": true,
              "connected": false
            },
            "profile": {
              "ability_to_view_profile": true,
              "ability_to_view_profile_sessions": false
            },
            "meeting": {
              "ability_to_schedule_meeting": false,
              "ability_to_request_meeting": false,
              "cancel_meeting_request": false,
              "ability_reschedule_meeting": false,
              "decline_meeting_request": false,
              "manage_meeting_request": false,
              "ability_cancel_meeting": false
            },
            "session": []
          },
          "fields": {
            "a1_eng": {
              "pfs": [],
              "public": "0"
            },
            "a1_fname": {
              "pfs": [],
              "public": "0"
            },
            "a2_lname_chi": {
              "pfs": [],
              "public": "0"
            }
          }
        }

    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(ProfileBlock)