import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../../Utilty Variables/APIConstants';
import { useDispatch } from 'react-redux';
import { setMainCatogery } from '../../../Store/MainCatogerySlice';

export function CreateMainCatogery({getCatogery}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);


  const validationSchema = Yup.object({
    name: Yup.string().required('Category Name is required'),
    description: Yup.string().required('Description is required').min(3, "Description should be minimum 3 chars"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // API Call
      axios.post(`${API_BASE_URL}/categories`, {
          "id": Math.floor(Math.random() * (100 - 10 + 1)) + 1, // Generate random id from 10-100
          "name": values.name,
          "description": values.description
      })
      .then(function (response) {
          // handle success
          // const data = response.data;
          alert('Category created!')
          getCatogery();
          navigate(-1)
      })
      .catch(function (error) {
          // handle error
          alert('Failed to create category');
          console.log("There is an error", error);
      })
  },
  });

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'flex-start',
          minHeight: '100vh',
          padding: 2
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: "1300px" }} className='p3'>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Category Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, mb: 2 }}>
                <Button type="submit" variant="contained" sx={{ width: { md: '16.6667%' } }}>
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    width: { md: '16.6667%' },
                    backgroundColor: '#dc3545',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#c82333',
                    }
                  }}
                  onClick={()=>{
                    navigate(-1)
                  }}
                >
                  Cancel
                </Button>
              </Box>

            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
