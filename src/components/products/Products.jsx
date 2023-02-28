import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productAction';
import ProductForm from './ProductForm';

const Products = () => {

    const dispatch = useDispatch();

    const [showForm, setShowForm] = useState(false);

    const products = useSelector((store) => store.productReducer);

    const handleDelete = (idProduct) => {
        dispatch(deleteProduct(idProduct))
    }

    return (
        <div className='container-fluid'>
            <h1>Productos</h1>
            <button
                className='btn btn-primary'
                onClick={() => {
                    setShowForm(true)
                }}
            >Agregar Producto
            </button>
            {showForm &&
                <ProductForm
                    setShowForm={setShowForm}
                />
            }
            <div className="table-responsive">
                <table className='table table-striped table-hover mt-4'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index} className="align-middle">
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm p-0' onClick={() => {
                                            handleDelete(product.id)
                                        }}>
                                            <span className="material-symbols-outlined m-1">
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products