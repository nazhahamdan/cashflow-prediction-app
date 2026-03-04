import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export type StabilityStatus = "stable" | "moderate" | "risk";

interface StabilityBadgeProps {
  status: StabilityStatus;
  size?: "sm" | "md" | "lg";
}

export function StabilityBadge({ status, size = "md" }: StabilityBadgeProps) {
  const configs = {
    stable: {
      icon: CheckCircle,
      label: "Stable",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      iconColor: "text-green-600",
    },
    moderate: {
      icon: AlertTriangle,
      label: "Moderate Risk",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      iconColor: "text-orange-600",
    },
    risk: {
      icon: XCircle,
      label: "High Risk",
      bgColor: "bg-red-100",
      textColor: "text-red-700",
      iconColor: "text-red-600",
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-2",
    lg: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full font-medium ${config.bgColor} ${config.textColor} ${sizeClasses[size]}`}
    >
      <Icon className={`${iconSizes[size]} ${config.iconColor}`} />
      <span>{config.label}</span>
    </div>
  );
}
