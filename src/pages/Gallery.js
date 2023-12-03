import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import GalleryOne from '../components/gallery/GalleryOne';
import FooterTwo from '../common/footer/FooterTwo';

const Gallery = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="Gallery"
                currentPage="Gallery"
            />
            <GalleryOne />
            <FooterTwo />
        </>
    )
}

export default Gallery;