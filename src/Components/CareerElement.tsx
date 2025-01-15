import {CareerElementModel} from '../models';
import React from 'react';

const CareerElement: React.FC<CareerElementModel> = (career) => {

    return (
        <div className='carreer_element'>
            <h4>{career.title}</h4>
            <h5>{career.start_date}-{career.end_date}</h5>
            {career.role && <h6>{career.role}</h6>}
            <p>{career.description.split("\n").map((line: string, index: number) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
                ))}
            </p>
        </div>
    )
}
export default CareerElement;