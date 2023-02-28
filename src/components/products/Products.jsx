import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { deleteProduct } from '../../redux/actions/productAction';
import ProductForm from './ProductForm';

const Products = () => {

    const dispatch = useDispatch();

    const [showForm, setShowForm] = useState(false);

    const products = useSelector((store) => store.productReducer);

    const handleDelete = (idProduct) => {
        Swal.fire({
            title: 'Estás seguro de eliminar el procuto?',
            text: "Esta acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteProduct(idProduct))
              Swal.fire(
                'Eliminado con éxito!',
                'El producto se ha eliminado.',
                'success'
              )
            }
          })
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