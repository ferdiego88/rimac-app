'use client'
import { forwardRef, Ref, memo } from 'react';
import MHeader from '../../molecules/m-header/MHeader';
import MBanner from '../../molecules/m-banner/MBanner';

interface Welcome {

}
const Welcome = ( {

}) => {

    return (
       <main>
        <MHeader></MHeader>
        <MBanner></MBanner>

       </main>
    );
};

export default Welcome;