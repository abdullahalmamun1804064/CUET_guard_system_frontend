import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        return (
            <>
                <section className="contact-page-google-map">
                    <iframe
                        title="Address"  
                        src="https://maps.app.goo.gl/2jQGtMs9eM27qJDv8"
                        className="contact-page-google-map__one" allowFullScreen></iframe>

                </section>
            </>
        )
    }
}