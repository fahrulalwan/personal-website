import type { ReactNode, FC } from "react";

interface TimelineProps {
	children: ReactNode;
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
	return <div className="space-y-8">{children}</div>;
};

interface TimelineItemProps {
	children: ReactNode;
}

export const TimelineItem: FC<TimelineItemProps> = ({ children }) => {
	return (
		<div className="relative pl-8 pb-8">
			<div className="absolute top-0 left-0 w-px h-full bg-primary" />
			{children}
		</div>
	);
};

export const TimelineIcon: FC = () => {
	return (
		<div className="absolute left-0 flex items-center justify-center w-8 h-8 transform -translate-x-1/2 bg-background border-2 border-primary rounded-full">
			<div className="w-3 h-3 bg-primary rounded-full" />
		</div>
	);
};

interface TimelineContentProps {
	children: ReactNode;
}

export const TimelineContent: FC<TimelineContentProps> = ({ children }) => {
	return <div className="pt-1">{children}</div>;
};
