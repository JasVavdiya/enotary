import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="container mx-auto px-1 py-8">
        <h1 className="text-3xl font-merriweather font-bold text-deep-blue mb-4">
          Welcome to eNotary
        </h1>
        <p className="text-base font-lato mb-6">
          Secure, legally compliant digital notarization services for individuals and businesses.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h2 className="text-xl font-merriweather text-deep-blue mb-3">For Individuals</h2>
            <p className="font-lato mb-3 text-sm">
              Get your documents notarized quickly and securely from the comfort of your home.
            </p>
            <a 
              href="/need-enotary" 
              className="inline-block bg-rich-red text-white px-2 py-1 rounded-md font-montserrat hover:bg-opacity-90 transition-colors text-sm"
            >
              Get Started
            </a>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h2 className="text-xl font-merriweather text-deep-blue mb-3">For Businesses</h2>
            <p className="font-lato mb-3 text-sm">
              Streamline your document workflows with our enterprise eNotary solutions.
            </p>
            <a 
              href="/business-solutions" 
              className="inline-block bg-deep-blue text-white px-2 py-1 rounded-md font-montserrat hover:bg-opacity-90 transition-colors text-sm"
            >
              Learn More
            </a>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h2 className="text-xl font-merriweather text-deep-blue mb-3">Become a Provider</h2>
            <p className="font-lato mb-3 text-sm">
              Join our network of certified eNotary providers and grow your business.
            </p>
            <a 
              href="/become-provider" 
              className="inline-block border border-deep-blue text-deep-blue px-2 py-1 rounded-md font-montserrat hover:bg-deep-blue hover:text-white transition-colors text-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
