import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamDetailsContent from '../components/team-details/TeamDetailsContent';
import FooterTwo from '../common/footer/FooterTwo';

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="Team Details"
                currentPage="Team Details"
            />
            <TeamDetailsContent />
            <FooterTwo />
        </>
    )
}

export default TeamDetails;