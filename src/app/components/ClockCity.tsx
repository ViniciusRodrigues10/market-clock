'use client'

import React, { useState, useRef } from 'react';
import { ClockCard } from './ClockCard';

 export const ClockCity = () => {

    return (
        <div className="mx-auto max-w-screen-xl p-16 mt-20">
            <ul className="grid md:grid-cols-4 gap-8">
                <ClockCard
                cityName={'Sydney'}
                temiZone={'Australia/Sydney'}
                marketStatus={true}
                />
                <ClockCard
                cityName={'São Paulo'}
                temiZone={'America/Sao_Paulo'}
                marketStatus={true}
                />
                <ClockCard
                cityName={'New York'}
                temiZone={'America/New_York'}
                marketStatus={true}
                />
                <ClockCard
                cityName={'Tokyo'}
                temiZone={'Asia/Tokyo'}
                marketStatus={false}
                />

            </ul>
        </div>
    );
};




