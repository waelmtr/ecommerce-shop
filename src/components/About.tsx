import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="bg-sky-50 py-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        At <span className="text-emerald-600 font-semibold">WaelStore</span>, we’re redefining the way people shop online — with quality, transparency, and care at the heart of everything we do.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            We aim to deliver an exceptional shopping experience by offering premium products, curated collections, and top-notch customer service. Whether it's fashion, electronics, home essentials, or lifestyle goods — our goal is to make shopping effortless, enjoyable, and secure.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Carefully selected, quality-assured products</li>
                            <li>Fast and reliable shipping</li>
                            <li>Dedicated customer support</li>
                            <li>Easy returns and secure checkout</li>
                        </ul>
                    </div>

                    <div>
                        <img
                            src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740"
                            alt="Our team at work"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;