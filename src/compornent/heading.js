const head = (props) => {
  return (
    <>
      <h1>{props.pageName}</h1>
      {props.weather}
    </>
  );
};

export default head;
