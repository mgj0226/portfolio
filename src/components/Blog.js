const Blog = ( {page, setPage} ) => {
    if (page === 'Blog') {
        var scale = 'BlogMax';
    } else if (page === 'About') {
        scale = 'scaleIn';
    } else {
        scale = 'scaleOut';
    }

    const handleTitleClick = () => {
        if (page !== 'Blog') {
                setPage('Blog');
        } else {
                setPage('About');
        };
    }

    return (
        <section className={`Blog ${scale}`} id="Blog">
        <h2 className="BlogTitle" onClick={handleTitleClick}>Blog</h2>
        <div className="BlogContent">
            <div className="BlogContentBox">
                <h3 className="BlogContentTitle">Ready to go - 1/3/2024</h3>
                <p className="BlogContentText">
                    I was in a totally different place a year ago.
                    I was working in a job that I only work to raise my children and I was feeling stuck.
                    I was looking for a change and I found it! <br />
                    I'm excited to start my career as a programmer!
                    I've learnt a lot and I'm ready to put it into practice.
                </p>
            </div>
        </div>
        </section>
    );
}

export default Blog;