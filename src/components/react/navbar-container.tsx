import { type MouseEvent, type ReactNode, useState } from "react";
import { cn } from "src/utils/class-name";

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function NavbarContainer({ children, className }: IProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={cn(className, "relative overflow-hidden")}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}>
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "rgba(64, 224, 208, 0.3)",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10,
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
}
