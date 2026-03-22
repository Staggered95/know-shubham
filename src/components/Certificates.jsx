import { certificates } from '../data/portfolioData';
import CertificateCard from './CertificateCard';

const Certificates = () => {
  return (
    <section id="certificates" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-main flex items-center gap-4">
        <span className="text-accent-primary font-mono text-2xl">./</span> Certifications
      </h2>
      
      {/* Responsive Grid for Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;