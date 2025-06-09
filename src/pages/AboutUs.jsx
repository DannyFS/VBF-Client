import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
    return (
        <>
            <Header />
            <Navbar />

            <div className="p-6 max-w-5xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-[#004aad]">Veterans Benefits Foundation 2.0</h1>

                <section>
                    <h2 className="text-2xl font-bold">Mission Statement</h2>
                    <p>
                        To serve as the Carolinas' trusted one-stop resource for veterans and active duty military transitioning into homeownership and civilian life-by aligning experienced real estate professionals, veteran-aligned service providers, and military leadership under one unified nonprofit initiative.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">The Vision</h2>
                    <p>
                        Veterans Benefits Foundation 2.0 is the next-generation evolution of a nationally proven 501(c)(3) nonprofit originally founded in 2010. At its peak, the foundation's Tele advocates reached thousands of veterans a month and consistently generated over $10 million per month in VA-backed mortgage activity.
                    </p>
                    <p>
                        Now, we're redeploying this mission locally-with a Carolina-first focus and a powerful team of realtors, lenders, builders, home service providers, and military leadership. Our goal is simple: Make the relocation process easier, safer, and smarter for those who served.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">Who We Serve</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Active Duty Military Relocating to the Carolinas</li>
                        <li>Veterans Transitioning to Civilian Life</li>
                        <li>Military Families Seeking Trusted Local Professionals</li>
                        <li>First-Time Homebuyers Using VA Benefits</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">Core Services</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Veteran-Focused Real Estate Network:</strong> Hand-picked, VA-trained realtors who understand PCS timelines, VA loans, and the needs of military families.</li>
                        <li><strong>Lending Expertise:</strong> Trusted lenders who specialize in VA home loans and offer military-sensitive solutions.</li>
                        <li><strong>Builder & Contractor Alliance:</strong> Ethical, licensed, veteran-friendly service providers.</li>
                        <li><strong>Personalized Military Relocation Support:</strong> Concierge-style advisors for every step-from buying to settling down.</li>
                        <li><strong>Home Services Directory:</strong> Curated providers offering exclusive discounts for military families.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">Leadership That Inspires Trust</h2>

                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">Major General William "Wild Bill" Kirkland, U.S. Army (Ret.) - Chairman</p>
                            <p>
                                A decorated American hero with battlefield integrity and national recognition. He maintains relationships with the VA and congressional leaders, ensuring our foundation operates with purpose, influence, and trust.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">William Furgione - Founder & Executive Director</p>
                            <p>
                                Former Second Force Recon Marine with four combat tours. Now a veteran mortgage expert with a perfect closing ratio over two years. His dual experience makes him uniquely qualified to lead this mission.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">Current Status & Launch Plans</h2>
                    <p>
                        Official launch on <strong>April 25, 2025</strong> at the Meet & Greet Event featuring Chairman Major General Wild Bill Kirkland. Realtors, lenders, retirees, and stakeholders will unite to build the foundational network.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">Conclusion</h2>
                    <p>
                        Veterans Benefits Foundation 2.0 isn't just a nonprofit. It's a mission. A team. A trusted network built by and for veterans. With elite leadership, clear goals, and deep understanding, we're here to serve-with excellence.
                    </p>
                    <p className="italic">Semper Fidelis,</p>
                    <p className="font-semibold">William Furgione, USMC (Ret)</p>
                    <p>Clearview Mortgage LLC<br />
                        Corp NMLS# 2506941 | NMLS# 199823<br />
                        Branch Manager - Myrtle Beach, SC
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p><strong>Phone:</strong> <a href="tel:9105263143" className="text-blue-600 underline">910-526-3143</a></p>
                    <p><strong>Website:</strong> <a href="https://clearviewmortgage.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">clearviewmortgage.net</a></p>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default AboutUs;
