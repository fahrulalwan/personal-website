type EventParams = Gtag.EventParams;
type ControlParams = Gtag.ControlParams;
type CustomParams = Gtag.CustomParams;

interface GtagEvents {
  action: string;
  params: ControlParams | EventParams | CustomParams;
}

export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID as string;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const logAnalyticPageView = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logAnalyticEvent = ({ action, params }: GtagEvents) => {
  gtag('event', action, params);
};

export const logAnalyticException = (description: string, fatal = false) => {
  gtag('event', 'exception', {
    description,
    fatal,
  });
};
