import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Stack spacing={2}
            alignItems="center"
            marginBottom="15px"
        >
            <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} color="primary"/>
        </Stack>
    );


}

export default CustomPagination;
