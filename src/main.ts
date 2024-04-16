import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faHouseUser, faScrewdriverWrench, faFire, faBars);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
