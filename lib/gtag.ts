import EventNames = Gtag.EventNames;

interface GtagEvents {
  action: EventNames;
  category: string | undefined;
  label: string | undefined;
  value: number | undefined;
}

const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID as string;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GtagEvents) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
