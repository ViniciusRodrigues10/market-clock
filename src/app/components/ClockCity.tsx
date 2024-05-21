'use client'

import React, { useState, useRef } from 'react';
import { ClockCard } from './ClockCard';

 export const ClockCity = () => {

    return (
        <div className="mx-auto max-w-screen-xl p-16 mt-20">
            <ul className="grid md:grid-cols-4 gap-8">
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                <ClockCard
                cityName={'São Paulo'}
                time={'10;12:30'}
                />
                
            </ul>
        </div>
    );
};




