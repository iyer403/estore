import Products from '../Products';
import SideNav from '../SideNav';

const MainComponent = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <SideNav />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8 ">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
