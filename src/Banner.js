import React, {useEffect, useState} from 'react'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //
        }
        fetchData()
    }, []);
    return (
        <header> {/* <<<Background image */}
            {/* title */}
            {/* div > 2 buttons : 'Play' & ''My List' */}
            {/* description */}
        </header>
    )
}

export default Banner;