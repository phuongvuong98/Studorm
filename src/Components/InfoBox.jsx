import React from 'react';

const InfoBox = (data) => {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={data.data.image} className="card-img" alt={data.data.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.data.name}</h5>
                            <p className="card-text">{data.data.description}</p>
                            <p className="card-text"><small className="text-muted">{data.data.uptime}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoBox