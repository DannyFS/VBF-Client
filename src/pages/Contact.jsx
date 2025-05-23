import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
            <Header />
            <Navbar />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <p>Phone: (910) 526-3143</p>

                <p>Email: willf@clearviewmortgage.net</p>
            </div>

            <Footer />
        </>
    );
}

export default Contact;