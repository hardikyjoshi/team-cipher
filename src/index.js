// Need to load app.js (it can be loaded by other JSs in the view, but this is a little bit more clear)
import "./app.js";

import "./stylesheets/main.scss";

// ***  Components 					***//
import "./directives/header/header.js";
import "./directives/card/card.js";
import "./directives/carousel/carousel.js";
//import "./views/components/scrolly/scrolly.js";
//import "./angular/directives/address-verification/address-verification.js";

// ***  Pages 					***//
import "./pages/home/home.js";

// ***  Services 					***//
import "./services/shared-service.js";

// ***  Factories 					***//
// import "./factory/birthday-fact.js";
