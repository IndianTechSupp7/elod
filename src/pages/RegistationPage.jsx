import bgimg from "../assets/gym_images/2.png";
import React, { useState } from "react";
import SlideInText from "../components/slideInText";

const RegistationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-tetrary p-8 rounded-2xl shadow-md w-full max-w-md space-y-4 z-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <div>
          <SlideInText initial={{ opacity: 0, x: -50 }} animate={{opacity: 1, x: 0}} duration={0.7} delay={0.1}>
            <label className="block text-white mb-1">Name</label>
          </SlideInText>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary"
            required
          />
        </div>
        <div>
          <SlideInText initial={{ opacity: 0, x: -50 }} animate={{opacity: 1, x: 0}} duration={0.7} delay={0.25}>
            <label className="block text-white mb-1">Email</label>
          </SlideInText>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary"
            required
          />
        </div>
        <div>
          <SlideInText initial={{ opacity: 0, x: -50 }} animate={{opacity: 1, x: 0}} duration={0.7} delay={0.35}>
            <label className="block text-white mb-1">Message</label>
          </SlideInText>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary"
            required
          ></textarea>
        </div>
        <SlideInText initial={{ opacity: 0, y: 100 }} animate={{opacity: 1, y: 0}} duration={0.7}>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#894aff] text-white py-2 rounded-xl transition-all"
          >
            Submit
          </button>
        </SlideInText>
      </form>

      <img
        src={bgimg}
        alt=""
        className="absolute left-0 right-0 max-h-screen object-cover w-full object-[0%_31%]"
      />
      <div
        className="w-full h-full absolute top-0 left-0 
        bg-gradient-to-b from-background via-gradient-start to-background"
      />
    </div>
  );
};

export default RegistationPage;
