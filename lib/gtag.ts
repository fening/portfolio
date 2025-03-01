export const GA_TRACKING_ID = 'G-R38L4QSEHB'; // Your tracking ID

// Function to track page views
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to track specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
