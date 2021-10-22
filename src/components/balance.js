const Balance = () => {
  return (
    <div>
      <div className="container     mt-5">
        <div className="row offset-md-">
          <div className="col-md-4">
            
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">My Balance</h3>
                <p className="card-text">Text</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
              <div className="card-body">
                <h3 className="card-title">Last Transaction</h3>
                <p className="card-text">Text</p>
              </div>
            </div></div>
          <div className="col-md-4">
          <div className="card">
              <div className="card-body">
                <h3 className="card-title">Saving</h3>
                <p className="card-text">Text</p>
              </div>
            </div></div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
