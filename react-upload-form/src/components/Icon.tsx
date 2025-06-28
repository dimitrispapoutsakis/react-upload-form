import { defaultIconSize } from "constants/generic";
import { HTMLAttributes, InsHTMLAttributes } from "react";

interface IIcon extends HTMLAttributes<SVGElement> {
    children: React.ReactNode;
    width?: number;
    height?: number;
}

const Icon = (props: IIcon) => {
    const { children, width = defaultIconSize, height = defaultIconSize, ...rest } = props;
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 430 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            {children}
        </svg>
    )
}

export default Icon;