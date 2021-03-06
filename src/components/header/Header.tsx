import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes/RouteComponent";
import {AppRootStateType} from "../../bll/store/store";
import {useSelector} from "react-redux";
import {ProductsType} from "../../bll/reducers/basketReducer";
import {calsTotalCount} from "../../utils/utils";


export default function Header() {
    let navigate = useNavigate()
    const basketItem = useSelector<AppRootStateType, ProductsType[]>(state => state.basket.productInBasket)
    const coastItem = basketItem.length
    const totalPrice = calsTotalCount(basketItem)

    const onBasketNavigateClick = () => {
        navigate(PATH.BASKET)
    }
    const onHomeNavigateClick = () => {
        navigate(PATH.HOME)
    }

    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}, cursor: 'pointer'}}
                        onClick={onHomeNavigateClick}
                    >
                        Store
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    {totalPrice ?<div> {totalPrice} $</div> : null}
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton onClick={onBasketNavigateClick} size="large" aria-label="show 4 new mails"
                                    color="inherit">
                            <Badge badgeContent={coastItem} color="error">
                                <DeleteOutlinedIcon/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}