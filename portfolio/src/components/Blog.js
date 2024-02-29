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
        <h1 className="BlogTitle" onClick={handleTitleClick}>Blog</h1>
        </section>
    );
}

export default Blog;