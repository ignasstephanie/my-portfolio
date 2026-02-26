// Tell TypeScript that Calendly exists on window
interface Window {
    Calendly?: {
        initBadgeWidget: (options: {
        url: string;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
        }) => void;
    };
}