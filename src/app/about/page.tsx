import Image from 'next/image';
import { FaAward, FaLeaf, FaLightbulb, FaBullseye } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Subheadline */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-600 mb-2 tracking-wide">About Usha Refrigeration</h1>
          <p className="text-lg text-neutral-500 font-light mb-6">Leading the way in innovative refrigeration solutions for modern homes across India.</p>
        </div>
        {/* Mission & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <FaBullseye className="text-4xl text-primary-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-primary-700">Our Mission</h2>
            <p className="text-neutral-700 mb-2">
              At Usha Refrigeration, we are committed to providing innovative and energy-efficient refrigeration solutions that enhance the quality of life for our customers.
            </p>
            <p className="text-neutral-700">
              We strive to be at the forefront of technology while maintaining our commitment to environmental sustainability and customer satisfaction.
            </p>
          </div>
          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary-700">Why Choose Us</h2>
            <div className="flex flex-row justify-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <FaAward className="text-3xl text-primary-500 mb-2" />
                <span className="text-sm font-semibold text-neutral-700">Quality</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLeaf className="text-3xl text-green-500 mb-2" />
                <span className="text-sm font-semibold text-neutral-700">Eco</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLightbulb className="text-3xl text-yellow-400 mb-2" />
                <span className="text-sm font-semibold text-neutral-700">Innovation</span>
              </div>
            </div>
            <p className="text-neutral-600 text-sm">Quality Assurance | Eco-Friendly | Innovation</p>
          </div>
        </div>
        {/* Our Journey Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary-600">Our Journey</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-row gap-8 items-center">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-primary-700">1998</span>
                <span className="text-neutral-500 text-xs">Founded</span>
              </div>
              <div className="h-1 w-8 bg-primary-200 rounded-full hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-primary-700">2005</span>
                <span className="text-neutral-500 text-xs">First Energy-Efficient Line</span>
              </div>
              <div className="h-1 w-8 bg-primary-200 rounded-full hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-primary-700">2015</span>
                <span className="text-neutral-500 text-xs">100+ Service Centers</span>
              </div>
              <div className="h-1 w-8 bg-primary-200 rounded-full hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-primary-700">2022</span>
                <span className="text-neutral-500 text-xs">Smart Tech</span>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center bg-primary-600 text-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-primary-50 transition-colors">
            View Our Products
          </button>
        </div>
      </div>
    </div>
  );
} 