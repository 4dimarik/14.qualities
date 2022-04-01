import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


function init(){
    Sentry.init({
        dsn: "https://2a888710a45142979e30484139e7db58@o1184400.ingest.sentry.io/6301962",
        integrations: [new BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error){
    Sentry.captureEvent(error);
}
const logger = {
    init, log
}

export default logger;