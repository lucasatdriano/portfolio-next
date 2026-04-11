interface ToolTipProps {
    text: string;
    children: React.ReactNode;
}

export default function ToolTip({ text, children }: ToolTipProps) {
    return (
        <div className="tooltip">
            {children}
            <span className="tooltipText" role="tooltip">
                {text}
            </span>
        </div>
    );
}
