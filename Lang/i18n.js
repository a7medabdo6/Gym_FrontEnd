import i18next from "i18next"
import en from "./en.json"
import ar from "./ar.json"
import fr from "./fr.json"

import {initReactI18next} from "react-i18next"
i18next.use(initReactI18next).init({
    lng:"en",
    resources:{
        en:en,
        ar:ar,
        fr:fr

    },
    react:{
        useSuspense:false
    }
    
})

export default i18next