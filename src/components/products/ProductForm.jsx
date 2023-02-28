import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from '../../redux/actions/productAction';

const ProductForm = ({ setShowForm }) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        const newProduct = {
            ...data,
            id: uuidv4()
        }
        dispatch(addProduct(newProduct));
        reset({
            name: '',
            price: '',
            quantity: ''
        });
        setShowForm(false);
    }

  return (
    <>
    <h3>Nuevo Producto</h3>
    <form 
    className='d-flex flex-column mx-3'
    onSubmit={handleSubmit(onSubmit)}
    >
        <label className='mb-3'>
            <span className='form-label'>Nombre</span>
            <input 
            className='form-control'
            type="text" 
            placeholder='Nombre' 
            {...register('name')}
            />
        </label>
        <label className='mb-3'>
            <span className='form-label'>Precio</span>
            <input 
            className='form-control'
            type="number" 
            placeholder='Precio' 
            {...register('price')}
            />
        </label>
        <label className='mb-3'>
            <span className='form-label'>Cantidad</span>
            <input 
            className='form-control'
            type="number" 
            placeholder='Cantidad' 
            {...register('quantity')}
            />
        </label>
        <button className='btn btn-success'>Guardar</button>
    </form>
    </>
  )
}

export default ProductForm