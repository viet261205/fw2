import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type AddInput = {
  name: string;
  img: string;
  price: number;
};

function Add() {
  const { register, handleSubmit, formState: { errors } } = useForm<AddInput>();
  const nav = useNavigate();

  const onSubmitForm: SubmitHandler<AddInput> = async (data) => {
    try {
      const res = await axios.post(`http://localhost:3000/products`, data);
      if (res.status === 201) {
        alert(' thành công');
        nav('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="sidebar" data-color="purple" data-image=" ">
        <div className="sidebar-wrapper" style={{ background:"#6FD3EF"}}>
          <div className="logo" style={{ paddingBottom: '20px' }}>
            
            <a href="/" className="simple-text">
            <i className="pe-7s-science" style={{width:30}} />
            <b>react  </b>
            </a>
          </div>
          <ul className="nav">
            <li>
              <a href="/">
                <i className="pe-7s-user" />
                <p>list sản phẩm</p>    
              </a>  
            </li>
            <li>
              <a href="/add">
                <i className="pe-7s-news-paper" />
                <p>thêm sản phẩm</p>
              </a>
            </li>
          
            <li>
              <a href="notifications.html">
                <i className="pe-7s-bell" />
                <p>Notifications</p>
              </a>
            </li>
            <li className="active-pro">
              <a href="upgrade.html">
                <i className="pe-7s-rocket" />
                <p>Upgrade to PRO</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-panel" style={{ background:"#f6f6f6"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid" >

            <a className="navbar-brand" href="#"><b>Admin</b> </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Nav item "Home" bên trái */}
              <div className="hder">
                <div>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
                </li>
              </ul>
                </div>
              {/* Nav item "Search" và "Account" bên phải */}
            <div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-search"></i>
                    <span className="d-none d-md-inline">Search</span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-user"></i> Account
                  </a>
                </li>

              </ul>
            </div>
            </div>
            </div>
          </div>
        </nav>
        <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-19">
            <div className="card">
              <div className="header">
                <h4 className="title"><b>Add Product</b></h4>
              </div>
              <div className="content">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label><b>Name</b></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Product Name"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label><b>Price</b></label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                          {...register("price", { required: "Price is required" })}
                        />
                        {errors.price && <p className="text-danger">{errors.price.message}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label><b>Image URL</b></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Image URL"
                          {...register("img", { required: "Image URL is required" })}
                          
                        />
                        {errors.img && <p className="text-danger">{errors.img.message}</p>}
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-info btn-fill pull-right">Add Product</button>
                  <div className="clearfix"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       
      </div>
    </div>
    
   
  );
}

export default Add;