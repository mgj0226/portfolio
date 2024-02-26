const Certificates = ( {page, setPage} ) => {
    if (page === 'Certificates') {
        var scale = 'CertificatesMax';
    } else if (page === 'About') {
        scale = 'scaleIn';
    } else {
        scale = 'scaleOut';
    }

    const handleTitleClick = () => {
        if (page !== 'Certificates') {
                setPage('Certificates');
        } else {
                setPage('About');
        };
    }

    return (
        <section className={`Certificates ${scale}`}>
        <h1 className="CertificatesTitle" onClick={handleTitleClick}>Skills and Certificates</h1>
        </section>
    )
}

export default Certificates;