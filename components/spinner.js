import React from 'react'

const Spinner = () => (
    <div className="spinner fa-3x">
        <i className="spinner-icon fas fa-spinner fa-spin"></i>
        <style jsx>{`
        .spinner {
            width: 100%;
            height: 200px;
        }
        .spinner-icon {
            width: 50px;
            margin: auto;
            display: block;
        }
        `}</style>
    </div>
)

export default Spinner