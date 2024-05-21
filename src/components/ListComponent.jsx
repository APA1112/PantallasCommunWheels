import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ListComponent = ({ items, itemType, columns, paths, newItemLabel }) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    const [page, setPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const handleEditClick = (itemId) => {
        navigate(`${paths.edit}/${itemId}`);
    };

    const handleDeleteClick = (itemId) => {
        console.log(`Eliminar ${itemType} con ID: ${itemId}`);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const currentItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="container">
            <div className="button_container">
                <Button
                    className='secondaryButton'
                    variant="contained"
                    onClick={handleBackClick}
                    style={{ marginRight: '1rem' }}
                    startIcon={<ArrowBackIosIcon />}
                >
                    Volver
                </Button>
                <Button
                    className='primaryButton'
                    variant="contained"
                    component={Link}
                    to={paths.new}
                    endIcon={<CreateIcon />}
                >
                    Nuevo {newItemLabel}
                </Button>
            </div>
            <div className="table_container">
                {currentItems.map(item => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === `panel${item.id}`}
                        onChange={handleChange(`panel${item.id}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${item.id}-content`}
                            id={`panel${item.id}-header`}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography style={{ flex: 1 }}>
                                {item.name}
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleEditClick(item.id)}
                                    style={{ marginRight: '0.5rem' }}
                                >
                                    <i className="ti ti-edit"></i>
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDeleteClick(item.id)}
                                >
                                    <i className="ti ti-trash"></i>
                                </Button>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table className='table'>
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column, index) => (
                                                <TableCell key={index}>{column.label}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            {columns.map((column, index) => (
                                                <TableCell key={index}>
                                                    {column.link ? (
                                                        <Link to={`${paths.edit}/${item.id}`}>
                                                            {item[column.field]}
                                                        </Link>
                                                    ) : (
                                                        item[column.field]
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                ))}
                <div className="pagination">
                    <Pagination count={totalPages} page={page} onChange={handlePageChange} variant='outlined' size='large'/>
                </div>
            </div>
        </div>
    );
};

export default ListComponent;
