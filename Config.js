

export default {
  development: {
    //url to be used in link generation
    url: 'http://my.site.com',
    //mongodb connection settings
    database: {
      host:   '127.0.0.1',
      port:   '27017',
      db:     'site_dev'
    },
    //server details
    server: {
      host: '127.0.0.1',
      port: '3422'
    },

    // OpenTok config
    opentok: {

    }
  },
  production: {
    //url to be used in link generation
    url: 'http://my.site.com',
    //mongodb connection settings
    database: {
      host: '127.0.0.1',
      port: '27017',
      db:     'site'
    },
    //server details
    server: {
      host:   '127.0.0.1',
      port:   '3421'
    },

    // OpenTok config
    opentok: {

    }
  }
};