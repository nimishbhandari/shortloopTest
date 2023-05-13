const Meet = ({ hour, start, end, color }) => {
  console.log(start);
  const style = {
    backgroundColor: `${color}`,
    position: "absolute",
    top: `${start * 5}vh`,
    minHeight: `${(end - start) * 5}vh`,
  };

  return (
    <div className="meet" style={style}>
      this is meet
    </div>
  );
};

export default Meet;
