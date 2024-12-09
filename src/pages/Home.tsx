import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] to-[#141B2D] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <svg viewBox="0 0 412.86 124.57" className="h-12 w-auto mx-auto text-[#f9925b] mb-8">
            <path className="fill-current" d="m0,5.11h56.16c24.68,0,43.4,17.87,43.4,41.69s-18.72,41.69-43.4,41.69h-23.65v34.04H0V5.11Zm32.51,30.63v22.12h22.97c6.13,0,10.72-4.77,10.72-11.06s-4.59-11.06-10.72-11.06h-22.97Z"/>
            <path className="fill-current" d="m102.28,79.13c0-25.87,17.53-45.44,41.01-45.44,8.51,0,15.83,2.72,21.78,7.49v-5.45h30.63v51.22c0,3.91,2.04,5.96,5.96,5.96h1.87v29.61h-8.34c-11.91,0-20.42-3.4-25.19-10.21-6.47,7.66-15.66,12.25-26.72,12.25-23.49,0-41.01-19.57-41.01-45.44Zm62.8,0c0-9.02-6.64-15.83-15.66-15.83s-15.66,6.81-15.66,15.83,6.64,15.83,15.66,15.83,15.66-6.81,15.66-15.83Z"/>
            <path className="fill-current" d="m210.51,79.13c0-25.87,17.53-45.44,41.01-45.44,8.51,0,15.83,2.72,21.78,7.49V0h30.63v86.96c0,3.91,2.04,5.96,5.96,5.96h1.87v29.61h-8.34c-11.91,0-20.42-3.4-25.19-10.21-6.47,7.66-15.66,12.25-26.72,12.25-23.49,0-41.01-19.57-41.01-45.44Zm62.8,0c0-9.02-6.64-15.83-15.66-15.83s-15.66,6.81-15.66,15.83,6.64,15.83,15.66,15.83,15.66-6.81,15.66-15.83Z"/>
            <path className="fill-current" d="m318.58,79.13c0-25.87,20.25-45.44,47.14-45.44s47.14,19.4,47.14,46.12c0,2.38-.17,5.79-.68,8h-60.75c2.38,7.15,7.83,11.4,15.15,11.4,5.96,0,10.89-2.55,13.1-5.11h32.16c-6.13,18.04-24,30.46-46.12,30.46-26.89,0-47.14-19.57-47.14-45.44Zm32.85-8.85h28.93c-2.21-6.98-7.49-11.23-14.63-11.23s-12.08,4.25-14.29,11.23Z"/>
          </svg>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Legal Documents
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Review our policies and terms to understand how we protect your privacy and the rules governing our services.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/privacy"
                className="flex items-center px-6 py-4 bg-[#1F2937] text-white rounded-lg hover:bg-[#374151] transition-colors"
              >
                <Shield className="w-5 h-5 mr-2 text-[#f9925b]" />
                Privacy Policy
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/terms"
                className="flex items-center px-6 py-4 bg-[#1F2937] text-white rounded-lg hover:bg-[#374151] transition-colors"
              >
                <FileText className="w-5 h-5 mr-2 text-[#f9925b]" />
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}