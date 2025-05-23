import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function OurApp() {
    return (
        <>
            <Header />
            <Navbar />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">TBA</h1>
                {/* TODO: Insert past auction results here */}
            </div>

            <Footer />
        </>
    );
}

export default OurApp;