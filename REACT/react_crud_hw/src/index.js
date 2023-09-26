import React from 'react';
import ReactDOM from 'react-dom/client';
import { Waiters } from './features/waiters'
import { CustomDesign } from './features/CustomDesign'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Waiters />
      <CustomDesign />
    </>
);