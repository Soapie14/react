import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // You can send the form data to your backend to handle email sending
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            // Handle response from the backend
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div id='contact' className="max-w-md mx-auto my-10 text-gray-200">
            <p className="text-gray-200 text-4xl text-center sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-10">Contact Me</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <button type="submit" className="block mx-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 mb-[10vw]">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
