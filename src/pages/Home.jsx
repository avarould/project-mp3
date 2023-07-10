import React from 'react'
import { Kai, LOSidebar, New, Recommand, Treading } from '../router'

export const Home = () => {
    return (
        <>
            <Kai />
            <LOSidebar>
                < Treading />
                <New />
                <Recommand />
            </LOSidebar>
        </>
    )
}
