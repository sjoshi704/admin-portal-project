import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment/moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export function MainCatogeryList() {
    const mainCatogery = useSelector(store => store.mainCatogeries)
    return <>
        <div> Main Catogeries</div>
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
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                           
                            <TableCell align="left">{moment(row.createdAt).format("DD-MM-YYYY")}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{<div> Actions</div>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>




    </>
}
