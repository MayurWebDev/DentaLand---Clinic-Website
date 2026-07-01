import React from 'react';
import Section from '../components/Section';
import FAQAccordion from '../components/FAQAccordion';
import ReviewSlider from '../components/ReviewSlider';
import BeforeAfter from '../components/BeforeAfter';
import ClinicTour from '../components/ClinicTour';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import SEOHelmet from '../seo/SEOHelmet';
import SchemaBuilder from '../schemas/SchemaBuilder';
import { faq } from '../data/faq';

// Subcomponents
import HeroSection from './Home/components/HeroSection';
import StatsSection from './Home/components/StatsSection';
import WhyChooseSection from './Home/components/WhyChooseSection';
import FeaturedTreatmentsSection from './Home/components/FeaturedTreatmentsSection';
import DoctorsSection from './Home/components/DoctorsSection';

const Home = () => {
  const orgSchema = SchemaBuilder.getOrganizationSchema();

  return (
    <div className="overflow-x-hidden bg-slate-50 font-sans">
      <SEOHelmet schema={orgSchema} />
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TRUST SECTION & STATS */}
      <StatsSection />

      {/* 3. WHY CHOOSE DENTALAND */}
      <WhyChooseSection />

      {/* 4. FEATURED TREATMENTS */}
      <FeaturedTreatmentsSection />

      {/* 5. MEET OUR DOCTORS */}
      <DoctorsSection />

      {/* 6. CLINIC TOUR */}
      <Section
        id="clinic-tour"
        title="Tour Our Modern Facilities"
        subtitle="Clinic Virtual Tour"
        className="bg-slate-50"
      >
        <ClinicTour />
      </Section>

      {/* 7. BEFORE & AFTER TRANSFORMATIONS */}
      <Section
        id="before-after"
        title="Real Patient Smile Transformations"
        subtitle="Before & After Gallery"
        className="bg-white"
      >
        <BeforeAfter />
      </Section>

      {/* 8. TESTIMONIALS & REVIEWS */}
      <Section
        id="testimonials-preview"
        title="What Our Patients Say About Us"
        subtitle="Google Verified Reviews"
        className="bg-slate-50"
      >
        <ReviewSlider />
      </Section>

      {/* 9. CLINICAL FAQ */}
      <Section
        id="home-faq"
        title="Frequently Asked Questions"
        subtitle="FAQ Helpdesk"
        className="bg-white"
      >
        <FAQAccordion faqItems={faq.slice(0, 6)} />
      </Section>

      {/* 10. FINAL CONVERSION FUNNEL CTA */}
      <div className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <BookAppointmentCTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
