const PTag = (props) => {
  return (
    <p>
      {props.name}の{props.days}は{props.weather}
    </p>
  );
};

export default PTag;
