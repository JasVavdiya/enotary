import React from 'react';
import Image from 'next/image';

const BharatLeading = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[3.5rem] font-black uppercase mb-4 tracking-tight text-[#153163]">
            BHARAT LEADING
          </h2>
          <p className="text-[#153163] max-w-2xl mx-auto">
            India&apos;s premier e-notarization platform connecting citizens, businesses, and government institutions
            with secure digital document services.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* e-Notary Center */}
          <div className="col-span-12 md:col-span-4 bg-[#e6f0f9] p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-md hover:shadow-lg transition-shadow">
            <p className="text-sm text-[#153163] font-medium">
              Serving communities across the nation
            </p>
            <h3 className="text-5xl font-bold mt-8 text-[#153163]">
              250+<br /><span className="text-2xl">e-Notary Centers</span>
            </h3>
          </div>

          {/* Public User Facilitate */}
          <div className="col-span-12 md:col-span-4 row-span-2 relative bg-gray-200 rounded-lg overflow-hidden min-h-[460px] shadow-md hover:shadow-lg transition-shadow">
            <Image 
              src="/images/img1.jpg" 
              alt="Public user facilitation" 
              width={400} 
              height={600} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#153163]/80 to-[#153163]/40 flex flex-col p-8">
              <h3 className="text-5xl font-bold text-white">
                1.2M+<br /><span className="text-2xl">Public Users Facilitated</span>
              </h3>
              <div className="mt-auto">
                <p className="text-sm text-white">
                  Serving citizens with convenient<br />digital notarization services
                </p>
                <p className="text-xs mt-2 text-white/80">
                  Secure, accessible, and legally compliant e-notary services for all citizens.
                </p>
              </div>
            </div>
          </div>

          {/* e-Notarized Documents */}
          <div className="col-span-12 md:col-span-4 bg-gray-200 rounded-lg overflow-hidden min-h-[220px] relative shadow-md hover:shadow-lg transition-shadow">
            <Image 
              src="/images/img2.jpg" 
              alt="e-Notarized Documents" 
              width={400} 
              height={300} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#153163]/40 to-[#153163]/70 flex flex-col justify-center items-center p-6">
              <h3 className="text-4xl font-bold text-white text-center">
                3.5M+<br /><span className="text-xl">e-Notarized Documents</span>
              </h3>
            </div>
          </div>

          {/* Verification Processed */}
          <div className="col-span-12 md:col-span-4 bg-[#2d8d4b]/10 rounded-lg min-h-[220px] relative shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-4xl font-bold text-[#153163] text-center">
              5M+<br /><span className="text-xl">Verifications Processed</span>
            </h3>
            <p className="text-sm mt-4 text-center text-[#153163]">
              Fast and secure verification for all your notarized documents
            </p>
          </div>

          {/* International Documents */}
          <div className="col-span-12 md:col-span-4 bg-[#153163] text-white p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-5xl font-bold">
              75K+
            </h3>
            <p className="text-2xl mt-2 font-semibold">
              International Documents
            </p>
            <p className="text-sm mt-4">
              Supporting global business and personal document needs across borders.
            </p>
          </div>

          {/* Connected Organizations */}
          <div className="col-span-12 md:col-span-6 bg-[#e86c30]/10 p-8 rounded-lg flex flex-col justify-between min-h-[220px] shadow-md hover:shadow-lg transition-shadow">
            <p className="text-sm text-[#153163] font-medium">
              Trusted by government and private institutions
            </p>
            <h3 className="text-5xl font-bold mt-4 text-[#153163]">
              350+<br /><span className="text-2xl">Connected Organizations</span>
            </h3>
          </div>

          {/* Connected Countries */}
          <div className="col-span-12 md:col-span-6 bg-gray-200 rounded-lg overflow-hidden min-h-[220px] relative shadow-md hover:shadow-lg transition-shadow">
            <Image 
              src="/images/img3.jpg" 
              alt="Connected Countries" 
              width={600} 
              height={300} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#153163]/40 to-[#153163]/70 flex flex-col justify-center items-center p-6">
              <h3 className="text-4xl font-bold text-white text-center">
                45+<br /><span className="text-xl">Connected Countries</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BharatLeading; 