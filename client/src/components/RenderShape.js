const renderShape =
  (key, pixel = 10) =>
  ({ height, width, fill, x, y, ...rest }) => {
    const xpercent = Math.trunc((pixel * 100) / Math.trunc(height || 1));
    return (
      <svg x={x} y={y} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={key} x1="0%" y1="0%" x2="0%" y2={`${xpercent}%`}>
            <stop offset="50%" stopColor="white" />
            <stop offset="50%" stopColor={fill} stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect fill={`url(#${key})`} width={width} height={height} />
      </svg>
    );
  };

export default renderShape;
