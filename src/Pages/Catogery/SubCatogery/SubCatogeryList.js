
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
import axios from 'axios';
import Loader from '../../../Components/Loader';
import { setSubCatogery } from '../../../Store/SubCatogerySlice';
import { API_BASE_URL } from '../../../Utilty Variables/APIConstants';

export function SubCatogeryList() {
  const ImgDim = {
    width: '100px',
    height: '100px',
    border: '2px solid black'
  }
  const mainCatogery = useSelector(store => store.mainCatogeries)
  console.log(mainCatogery)

  const mapping = mainCatogery.reduce((mapp, catogery) => {
    mapp[catogery.id] = catogery.name
    return mapp;
  }, {})
  console.log(mapping)

  const subCatogeriesData = useSelector(store => store.subCatogeries)
  const subCategories = subCatogeriesData.map((subCat) => {
    return {
      ...subCat,
      mainCategory: mapping[subCat.categoryId],
    };
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetching data from api
    axios.get(`${API_BASE_URL}/subCategories`)
      .then(function (response) {
        // Handle success
        console.log("Catogery Data=>", JSON.stringify(response.data, null, 2));
        const data = response.data;
        dispatch(setSubCatogery(data));
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
  return <>
    <div> Sub Catogeries</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Catogery</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Main Catogery</TableCell>
            <TableCell align="left">Total Items</TableCell>
            <TableCell align="left">Created At</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subCatogeriesData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell component="th" scope="row">
                <img src={row.imageUrl} alt={row.name} style={ImgDim} />
              </TableCell>
              <TableCell component="th" scope="row">{row.categoryId}</TableCell>
              <TableCell component="th" scope="row">{row.totalItems}</TableCell>
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
