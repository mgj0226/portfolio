import py4e from '../certificates/20230925_PY4E.jpg';
import mfed from '../certificates/20240228_MetaFrontEndDev.png';

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
        <section className={`Certificates ${scale}`} id="Certificates">
            <h2 className="CertificatesTitle" onClick={handleTitleClick}>Skills and Certificates</h2>
            <div className="CertificatesContent">
                <div className="CertificatesBox">
                    <img src={py4e} alt="Python for Everybody" className="CertificatesImg" />
                    <p className="CertificatesText">Python for Everybody</p>
                </div>
                <div className="CertificatesBox">
                    <img src={mfed} alt="MetaFrontEndDev" className="CertificatesImg" />
                    <p className="CertificatesText">Meta Front-End Developer</p>
                </div>
            </div>
        </section>
    )
}

export default Certificates;