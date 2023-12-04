import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiendlyDashBoard = () => {
    
    return (
        <div>
              <Helmet>
        <title>DormDine | Dashboard</title>
      </Helmet>
            <h2 className='text-2xl '>Go to Your profile</h2>
            <Link to={''}></Link>
        </div>
    );
};

export default FiendlyDashBoard;