import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { PolicyPage } from '../types/policy';

interface PolicyLayoutProps {
  policy: PolicyPage;
}

export function PolicyLayout({ policy }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] to-[#141B2D]">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657 28 0h-2.83zM32.656 0L26.172 6.485 24 8.657 34.657 0h-2zm5.657 0L30.828 7.485 28.656 9.657 39.313 0h-2zM44.97 0L40.313 4.657 38.14 6.828 48.797 0h-3.827zm5.657 0L43.142 7.485 41 9.627l8.485-8.485L52.313 0h-1.686zm5.657 0l-6.485 6.485L42 9.627l8.485-8.485L60 0h-3.716zM15.272 0L6.787 8.485 8.2 9.9l7.9-7.9h-.828zm5.657 0L9.515 11.414 11.687 13.586 28 0h-7.07zm5.657 0l-8.485 8.485L16.343 9.657 26 0h-2.83zm5.657 0L24.515 8.485 22.343 10.657 33 0h-2.83zm5.657 0L30.172 8.485 28 10.657 38.657 0h-2zm5.657 0L35.828 8.485 33.656 10.657 44.313 0h-2zm5.657 0L41.485 8.485 39.313 10.657 50 0h-1.686zm5.657 0L47.142 8.485 44.97 10.657 55.657 0h-1.686zm5.657 0L52.798 8.485 50.626 10.657 60 0h-4.03zm-5.657 5.657L39.515 17.071l2.172 2.172L52.97 5.657h-2.83zm5.657 0L45.172 17.071l2.172 2.172L58.627 5.657h-2.83zM48.97 5.657L42.485 12.142l2.172 2.172L55.313 5.657h-6.342zm-5.656 5.657l-6.485 6.485 2.172 2.172 6.485-6.485-2.172-2.172zm5.656 0l-6.485 6.485 2.172 2.172 6.485-6.485-2.172-2.172zM0 0h60v60H0V0z' fill='%23f9925b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="border-b border-[#374151]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <motion.a 
                href="/"
                className="text-[#f9925b] hover:text-[#f9925b]/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="inline-block mr-2" />
                Back to Home
              </motion.a>
              <svg viewBox="0 0 412.86 124.57" className="h-8 w-auto text-[#f9925b]">
                <path className="fill-current" d="m0,5.11h56.16c24.68,0,43.4,17.87,43.4,41.69s-18.72,41.69-43.4,41.69h-23.65v34.04H0V5.11Zm32.51,30.63v22.12h22.97c6.13,0,10.72-4.77,10.72-11.06s-4.59-11.06-10.72-11.06h-22.97Z"/>
                <path className="fill-current" d="m102.28,79.13c0-25.87,17.53-45.44,41.01-45.44,8.51,0,15.83,2.72,21.78,7.49v-5.45h30.63v51.22c0,3.91,2.04,5.96,5.96,5.96h1.87v29.61h-8.34c-11.91,0-20.42-3.4-25.19-10.21-6.47,7.66-15.66,12.25-26.72,12.25-23.49,0-41.01-19.57-41.01-45.44Zm62.8,0c0-9.02-6.64-15.83-15.66-15.83s-15.66,6.81-15.66,15.83,6.64,15.83,15.66,15.83,15.66-6.81,15.66-15.83Z"/>
                <path className="fill-current" d="m210.51,79.13c0-25.87,17.53-45.44,41.01-45.44,8.51,0,15.83,2.72,21.78,7.49V0h30.63v86.96c0,3.91,2.04,5.96,5.96,5.96h1.87v29.61h-8.34c-11.91,0-20.42-3.4-25.19-10.21-6.47,7.66-15.66,12.25-26.72,12.25-23.49,0-41.01-19.57-41.01-45.44Zm62.8,0c0-9.02-6.64-15.83-15.66-15.83s-15.66,6.81-15.66,15.83,6.64,15.83,15.66,15.83,15.66-6.81,15.66-15.83Z"/>
                <path className="fill-current" d="m318.58,79.13c0-25.87,20.25-45.44,47.14-45.44s47.14,19.4,47.14,46.12c0,2.38-.17,5.79-.68,8h-60.75c2.38,7.15,7.83,11.4,15.15,11.4,5.96,0,10.89-2.55,13.1-5.11h32.16c-6.13,18.04-24,30.46-46.12,30.46-26.89,0-47.14-19.57-47.14-45.44Zm32.85-8.85h28.93c-2.21-6.98-7.49-11.23-14.63-11.23s-12.08,4.25-14.29,11.23Z"/>
              </svg>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">{policy.title}</h1>
            <p className="text-[#f9925b] mb-8">Last updated: {policy.lastUpdated}</p>

            <div className="space-y-12">
              {policy.sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1F2937] rounded-lg p-6 shadow-xl"
                >
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                  {Array.isArray(section.content) ? (
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-300">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300">{section.content}</p>
                  )}

                  {section.subsections && (
                    <div className="mt-6 space-y-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="pl-4 border-l-2 border-[#f9925b]">
                          <h3 className="text-xl font-medium text-white mb-3">{subsection.title}</h3>
                          {Array.isArray(subsection.content) ? (
                            <div className="space-y-4">
                              {subsection.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-300">{paragraph}</p>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-300">{subsection.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}