// Require in Shunter
var shunter = require('shunter');

// Create a Shunter application, passing in options
var app = shunter({

    // Configure the themes path to the current directory
    path: {
        themes: __dirname
    },

    // Configure the proxy route, this should point to
    // where your back end application runs
    routes: {
      localhost: {
        default: {
          host: 'localhost',
          port: 3000
        }
      },
      // lists: {
      //   default: {
      //     host: 'localhost',
      //     port: 3001
      //   }
      // },
      // utilities: {
      //   default: {
      //     host: 'localhost',
      //     port: 3002
      //   }
      // }
    }

});

// Start the application
app.start();

// // data/home.json comments
// layout.template is required
