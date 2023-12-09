const Text = ({ size, bold, color, style, children, ...props }) => {
  const combinedStyle = {
    color: color,
    fontWeight: bold === true ? 900 : 400,
    ...style,
    fontSize: size,
  };
  return (
    <span>
      <p style={combinedStyle} {...props}>
        {children}
      </p>
    </span>
  );
};

export default Text;
