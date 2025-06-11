const MapForm = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d124713.56136854601!2d130.8740867!3d-12.3629069!3m2!1i1024!2i768!4f13.1!2m1!1sdrivesafe%20mate%20drivingschool%20darwin%20location!5e0!3m2!1sen!2sin!4v1746675591283!5m2!1sen!2sin";

    return (
        <div className="google-map">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <iframe
                            src={mapUrl}
                            loading="lazy"
                            style={{ border: 0, width: "100%", height: "450px" }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapForm;
