import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type ProductInput = {
    name: string,
    img: string,
    price: number,
}

function Edit() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ProductInput>();

    const { id } = useParams();
    const nav = useNavigate();

    const getDetail = async (id: string) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            reset({
                name: data.name,
                img: data.img,
                price: data.price,
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!id) return;
        getDetail(id);
    }, [id]);

    const onEdit: SubmitHandler<ProductInput> = async (data) => {
        try {
            const res = await axios.put(`http://localhost:3000/products/${id}`, data)
            if (res.status == 200) {
                alert('Chỉnh sửa thành công')
                nav('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-19">
              <div className="card">
                <div className="header">
                  <h4 className="title">Add Product</h4>
                </div>
                <div className="content">
                  <form onSubmit={handleSubmit(onEdit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Name</label>
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
                          <label>Price</label>
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
                          <label>Image URL</label>
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
  
                    <button type="submit" className="btn btn-info btn-fill pull-right">edit Product</button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Edit;
