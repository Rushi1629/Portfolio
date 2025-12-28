
const Loader = () => {
    return (
        <div id="preloader">
            <div id="ventix-preloader" className="ventix-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader