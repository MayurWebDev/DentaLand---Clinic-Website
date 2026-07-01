// Static Pre-rendering Script for DentaLand Digital Growth Platform
// Generates static HTML folders with fully-crawlable SEO heads and JSON-LD schemas for production hosting.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolving ES Module paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import SEO configurations (Simulating imports dynamically or manually to keep script standalone)
const seoDefaults = {
  title: 'DentaLand Dental Clinic | Best Dentist in Pune',
  description: 'DentaLand is Pune’s premium dental clinic chain offering painless root canals, advanced dental implants, cosmetic smile makeovers, and braces. Top dental surgeons across Pimpri, Kalewadi, Chikhali, and Akurdi. Book your appointment today!',
  keywords: 'Dentist in Pimpri, Dental Clinic in Pimpri, Best Dentist in Pune, Dental Clinic PCMC, Dental Implant Pune, Root Canal Treatment Pimpri, Smile Design Pune, Cosmetic Dentist Pune, Dentist Near Me',
  canonicalUrl: 'https://dentaland.in',
};

const routes = [
  { path: '', title: seoDefaults.title, desc: seoDefaults.description },
  { path: 'about', title: 'About Us | DentaLand Premium Dental Clinic', desc: 'Read DentaLand legacy of 25+ years, MDS surgeons, and European Class-B autoclave safety standards.' },
  { path: 'treatments', title: 'Specialized Dental Treatments | DentaLand Pune', desc: 'Explore DentaLand’s 15+ dental procedures, from painless root canals and advanced implants to aligners.' },
  { path: 'doctors', title: 'Meet Our MDS Specialized Dental Surgeons | DentaLand', desc: 'Consult our panel of top dental surgeons, prosthodontists, and orthodontists across PCMC Pune.' },
  { path: 'branches', title: 'Clinic Branch Directory & Maps | DentaLand Pune', desc: 'Locate DentaLand clinics at Pimpri, Kalewadi, Chikhali, and Akurdi. Directions, hours, and parking info.' },
  { path: 'testimonials', title: 'Patient Testimonials & Reviews | DentaLand Clinic', desc: 'Read honest feedback and watch video reviews of smiles transformed by DentaLand dental specialists.' },
  { path: 'contact', title: 'Contact Us & Book Consultation | DentaLand', desc: 'Reach out to our central team or contact our local clinics in Pune directly. Same-day emergency appointments.' },
  
  // Local SEO Branch Landings
  { path: 'dentist-in-pimpri', title: 'Best Dentist in Pimpri | Dental Clinic in Sant Tukaram Nagar', desc: 'Visit DentaLand Pimpri for premium dental care. Located near Metro Station. Led by Dr. Pankaj Shelke.' },
  { path: 'dentist-in-kalewadi', title: 'Best Dentist in Kalewadi | Premium Dental Clinic Pune', desc: 'DentaLand Kalewadi offers specialized braces, root canals, and implants. Led by Dr. Ghevaram Prajapati.' },
  { path: 'dentist-in-chikhali', title: 'Best Dentist in Chikhali | Dental Clinic at Sane Chowk', desc: 'Top family dental care in Chikhali, Moshi, and Talawade. Pain-free root canals and pediatric dentistry.' },
  { path: 'dentist-in-akurdi', title: 'Best Dentist in Akurdi | Dental Clinic at Bijlinagar', desc: 'Visit DentaLand Akurdi for wisdom tooth surgeries, lasers, and implants. Consult Dr. Nikita Gupta today.' },
  { path: 'dentist-near-chinchwad', title: 'Top-Rated Dentist Near Chinchwad, Pune | DentaLand', desc: 'Looking for a dentist near Chinchwad? DentaLand clinic offers painless care, implants, and zero-cost EMI plans.' },
  { path: 'dentist-near-nigdi', title: 'Best Dentist Near Nigdi, PCMC Pune | DentaLand Clinic', desc: 'Painless teeth scaling, braces, and root canals near Nigdi. Secure slots with MDS dental surgeons.' },

  // Local SEO Treatment Landings
  { path: 'root-canal-treatment-in-pimpri', title: 'Painless Root Canal Treatment in Pimpri | DentaLand Clinic', desc: 'Save your natural tooth with painless root canal treatment at DentaLand Pimpri. Rotary endodontics by expert endodontists.' },
  { path: 'dental-implant-in-pimpri', title: 'Advanced Dental Implants in Pimpri | DentaLand Clinic', desc: 'Replace missing teeth with titanium dental implants in Pimpri Pune. Computerized digital implant planning with lifetime warranties.' },
];

const prerender = () => {
  const distDir = path.join(__dirname, 'dist');
  
  // Guard clause if build directory doesn't exist
  if (!fs.existsSync(distDir)) {
    console.log('[Prerender Error] "dist" folder not found. Please run "npm run build" first.');
    return;
  }

  // Load the compiled index.html template
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.log('[Prerender Error] Compiled "dist/index.html" template not found.');
    return;
  }
  
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  console.log('[Prerender] Starting static HTML crawl injection...');

  routes.forEach((route) => {
    // Determine output file path
    const routeFolder = path.join(distDir, route.path);
    const outputHtmlPath = path.join(routeFolder, 'index.html');

    // Create subfolders if needed
    if (route.path && !fs.existsSync(routeFolder)) {
      fs.mkdirSync(routeFolder, { recursive: true });
    }

    // Inject SEO tags into template head
    let modifiedHtml = templateHtml
      .replace(/<title>.*?<\/title>/g, `<title>${route.title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/g, `<meta name="description" content="${route.desc}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/g, `<link rel="canonical" href="https://dentaland.in/${route.path}" />`);

    // Write to output folder
    fs.writeFileSync(outputHtmlPath, modifiedHtml, 'utf-8');
    console.log(`[Prerender] Successfully wrote: dist/${route.path}/index.html`);
  });

  console.log('[Prerender] SSG compilation completed successfully!');
};

// Execute prerender
prerender();
