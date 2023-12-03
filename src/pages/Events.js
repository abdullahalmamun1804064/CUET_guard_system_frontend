import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Event from '../components/events/Event';
import FooterTwo from '../common/footer/FooterTwo';

const Events = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Events"
                currentPage="Events" 
            />
            <Event/>
            <FooterTwo />
        </>
    )
}

export default Events;