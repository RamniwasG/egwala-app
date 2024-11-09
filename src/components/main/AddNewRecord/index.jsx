import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {  Button } from '@mui/material';
import { Form } from 'react-router-dom';
import InputField from './../../reuseable/TextField';
import InputSelect from './../../reuseable/InputSelect';
import CustomDatePicker from '../../reuseable/CustomDatePicker';
import RestAPI from '../../../Services/apis';
import { showErrorMessage, showSuccessMessage } from '../../reuseable/Toaster';

const productTypes = [
    { text: 'Milk', value: 'milk' },
    // { text: 'Water', value: 'water' }
]

const AddNewRecord = (props) => {
    const [record, setNewRecord] = useState({
        product_type: 'milk',
        created_at: new Date().toLocaleDateString().split('/').reverse().join('-'),
        quantity: 0,
        price: 0,
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            [props.userType === 'seller' ? 'seller_id' : 'buyer_id']: props.id,
            ...record
        }
        if(props.userType === 'seller') {
            payload = {
                ...record,
                buyer_id: props.buyerId // get this id from selected customer/buyer
            }
        }
        // Make a API request now
        RestAPI.post('/milks/add-new-record', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
            props.closeModal(false);
            showSuccessMessage('record created successfully!')
        }).catch(err => {
            console.log(err)
            showErrorMessage(err.message)
        })
    }

    
    return <Box className="d-f fd-c">
        <Box component="h2" textAlign="center" mb={4}>Add New Record</Box>
        <Form className='w-100' onSubmit={handleSubmit}>
            <Box className="d-f fd-c" gap={1}>
                <InputSelect
                    label="Select product"
                    labelId='product-type-label'
                    id="product-type"
                    selectedValue={record.product_type}
                    options={productTypes}
                    onChange={(e) => setNewRecord({ ...record, product_type: e.target.value })}
                />
                <CustomDatePicker
                    value={record.created_at}
                    handleDateChange={(date) => setNewRecord({ ...record, created_at: date })}
                />
                <InputField
                    label="Quantity(Ltr)"
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={record.quantity}
                    onChange={(e) => setNewRecord({ ...record, quantity: e.target.value })}
                />
                <InputField
                    label="Price(Rs)"
                    id="price"
                    name="price"
                    type="number"
                    value={record.price}
                    onChange={(e) => setNewRecord({ ...record, price: e.target.value })}
                />
            </Box>
            <Box className='d-f fd-r' justifyContent="space-evenly" m={2}> 
                <Button type="button" variant='contained' sx={{width:'40%', backgroundColor: '#FF0000'}}>Cancel</Button>
                <Button type="submit" variant='contained' sx={{width:'40%', backgroundColor: '#006600'}}>Save</Button>
            </Box>
        </Form>
    </Box>
}

export default AddNewRecord;