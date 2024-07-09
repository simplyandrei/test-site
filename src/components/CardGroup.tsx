interface CardGroupProp {
  title: string[];
  description: string[];
  btnName: string[];
}

function CardGroup({ title, description, btnName }: CardGroupProp) {
  return (
    <>
      <div className="row row-gap-3">
        {title.length === 0 && <p>No Cards Found.</p>}
        {title.map((item, index) => (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item}</h5>
                <p className="card-text">
                  {description[index]}
                </p>
                <a href="#" className="btn btn-primary">
                  {btnName[index]}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardGroup;
