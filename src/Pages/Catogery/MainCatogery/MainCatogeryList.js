import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment/moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { setMainCatogery } from '../../../Store/MainCatogerySlice';
import axios from 'axios';
import Loader from '../../../Components/Loader';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../Utilty Variables/APIConstants';





export function MainCatogeryList() {
    const mainCatogery = useSelector(store => store.mainCatogeries);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        // fetching data from api
        axios.get(`${API_BASE_URL}/categories`)
            .then(function (response) {
                // Handle success
                console.log("Catogery Data=>",JSON.stringify(response.data, null, 2));
                const data = response.data;
                dispatch(setMainCatogery(data));
            })
            .catch(function (error) {
                // Handle error
                console.log("There is error=>", error);
            })
            .finally(function () {
                // Hide loader
               setTimeout(() => {
                    setLoading(false);
                }, 500);
            });
    }, [dispatch]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
        <div className='d-flex justify-content-end'>
        <Button variant="contained" onClick={()=>{
            navigate("create")
        }}>Add Catogeries</Button>
        </div>
            <div>Main Catogeries</div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Catogeries</TableCell>
                            <TableCell align="left">Created At</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mainCatogery.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">
                                    {moment(row.createdAt).format("DD-MM-YYYY")}
                                </TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="left">
                                    <div>Actions</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
