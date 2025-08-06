import React from "react";

const AboutPage = () => {
  return (
    <div className="p-8 bg-surface rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-textPrimary mb-6 text-center">About English School Online</h2>
      <p className="text-lg text-textPrimary mb-8 text-center max-w-2xl mx-auto">
        Our mission is to empower individuals worldwide to achieve fluency and confidence in English through personalized, engaging, and flexible online lessons.
      </p>

      {/* Our Story Section */}
      <section className="bg-background p-8 rounded-lg shadow-inner mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4">Our Story</h3>
        <p className="text-textPrimary text-lg mb-4">
          English School Online was founded with a simple yet powerful vision: to make high-quality English education accessible to everyone, everywhere. Having seen firsthand the transformative power of language, I wanted to create a learning environment that is not only effective but also supportive and enjoyable.
        </p>
        <p className="text-textPrimary text-lg">
          We believe that learning English should be an exciting journey, not a daunting task. That's why we focus on creating personalized lesson plans that cater to individual needs, learning styles, and goals.
        </p>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="bg-background p-8 rounded-lg shadow-inner flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          {/* Placeholder for your professional photo */}
          <img
            src="https://placehold.co/400x400/oklch(80.05% 0.108 86.87)/oklch(20.89% 0.000 0)?text=Your+Photo"
            alt="Your professional photo as the instructor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-3xl font-bold text-primary mb-4">Meet Your Instructor: Nathan</h3>
          <p className="text-textPrimary text-lg mb-4">
            Hello! I'm Nathan, the founder and lead instructor at Robin Hood English. With 12 years of experience teaching English to students from diverse backgrounds, I am passionate about helping you unlock your full potential. I hold the CELTA certificate and specialise in Cambridge exams, IELTS, and general English.
          </p>
          <p className="text-textPrimary text-lg">
            My teaching philosophy centres on creating a dynamic and supportive learning environment where you feel comfortable making mistakes and confident in expressing yourself. I look forward to guiding you on your English learning journey!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
