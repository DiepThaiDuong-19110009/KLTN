import React from 'react'

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh', width: '100vw'}}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader