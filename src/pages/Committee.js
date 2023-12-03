import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import CommitteeOne from '../components/committee/CommitteeOne';

const Committee = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="Committee"
                currentPage="Committee"
            />
            <CommitteeOne />
            <FooterTwo />
        </>
    )
}

export default Committee;