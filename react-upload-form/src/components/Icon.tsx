interface IIcon {
    children: React.ReactNode;
    width?: number;
    height?: number;
}

const Icon = ({ children, width = 128, height = 128 }: IIcon) => {
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 430 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    )
}

export default Icon;