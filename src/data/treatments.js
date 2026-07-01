import { images } from './images.js';

export const treatments = [
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    shortTitle: 'Root Canal',
    iconName: 'Activity', // Will map to Lucide icon
    image: images.treatments.rootCanal,
    tagline: 'Save infected teeth and eliminate severe pain with painless, single-visit treatments.',
    overview: 'Root Canal Treatment (RCT) is a highly effective dental procedure designed to save a tooth that is severely decayed, infected, or damaged. By removing the infected dental pulp, cleaning the inner root canals, and sealing the space, we eliminate pain and prevent reinfection. At DentaLand, we utilize modern rotary endodontics to perform painless root canals, often in just a single visit.',
    symptoms: [
      'Severe, constant tooth pain that worsens when chewing or applying pressure',
      'Prolonged tooth sensitivity to hot and cold temperatures, even after the source is removed',
      'Swelling or tenderness in the gums near the painful tooth',
      'Darkening or discoloration of the tooth structure',
      'A persistent pimple (abscess) on the gums, releasing discharge',
    ],
    causes: [
      'Deep dental cavities that reach the inner pulp chamber',
      'Repeated dental procedures on the same tooth',
      'Cracked or chipped teeth allowing bacteria to invade the pulp',
      'Trauma or impact injuries to the jaw that damage the tooth nerve even without visible fractures',
    ],
    procedure: [
      'Diagnosis & Digital X-Ray: We take a high-resolution digital X-ray to inspect the shape of the root canals and determine the extent of infection.',
      'Anesthesia: Local anesthesia is administered to ensure the treatment is completely pain-free.',
      'Access Cavity: A small access hole is created in the crown of the tooth under complete isolation.',
      'Pulp Extraction: Specialized rotary instruments gently remove the infected, damaged pulp and nerve tissues.',
      'Cleaning & Shaping: The root canals are thoroughly cleaned, disinfected, and shaped to receive the filling material.',
      'Obturation: The canals are filled with a biocompatible material called Gutta-Percha and sealed with a dental adhesive.',
      'Restoration (Crown placement): A permanent filling is placed, and the tooth is prepared for a custom dental crown to restore full strength.',
    ],
    benefits: [
      'Eliminates persistent pain and facial swelling',
      'Saves the natural tooth, preventing the need for dental implants or bridges',
      'Restores normal biting force and chewing capabilities',
      'Prevents the spread of bone infection to neighboring teeth',
      'Restores a natural tooth appearance once crowned',
    ],
    risks: [
      'Minor temporary discomfort or soreness for a few days after treatment',
      'Risk of tooth fracture if a permanent crown is not placed in time',
    ],
    recovery: 'Most patients return to normal activities the next day. Avoid chewing on the treated side until the permanent crown is placed. Maintain regular brushing and flossing, and take prescribed mild pain relievers if necessary.',
    duration: '1 to 2 sessions (approx. 45 - 60 minutes per session)',
    costRange: '₹3,500 - ₹7,000 (depending on tooth type and complexity)',
    faqs: [
      {
        question: 'Is a root canal painful?',
        answer: 'No. With modern local anesthetics and advanced rotary instruments, a root canal is no more uncomfortable than getting a standard filling. Most patients experience immediate relief from severe tooth pain once the procedure starts.'
      },
      {
        question: 'Can a root canal be completed in a single visit?',
        answer: 'Yes, in many cases where the infection is localized, our specialists can complete the entire root canal in a single visit lasting about 60 minutes. Deeply infected teeth or abscesses may require a second visit to ensure complete disinfection.'
      },
      {
        question: 'Why do I need a crown after a root canal?',
        answer: 'After a root canal, the tooth loses its blood supply and becomes brittle over time. A crown acts as a protective shield, reinforcing the tooth structure and preventing fractures from heavy chewing forces.'
      }
    ]
  },
  {
    id: 'dental-implants',
    title: 'Advanced Dental Implants',
    shortTitle: 'Dental Implants',
    iconName: 'Award',
    image: images.treatments.implants,
    tagline: 'Replace missing teeth permanently with titanium implants that look, feel, and function naturally.',
    overview: 'Dental Implants are titanium posts surgically placed into the jawbone beneath the gums, functioning as artificial roots. Once in place, they fuse with the bone (osseointegration), providing a stable foundation to mount replacement teeth (crowns, bridges, or dentures). At DentaLand, we offer premium single-tooth implants, implant-supported bridges, and full-mouth All-on-4 implants using computerized digital planning.',
    symptoms: [
      'Missing one or more teeth due to decay, trauma, or gum disease',
      'Difficulty chewing food comfortably',
      'Slurred speech or changes in voice due to gap spacing',
      'Shifting of adjacent teeth into missing spaces',
      'Sunken facial appearance or jawbone loss around empty tooth sockets',
    ],
    causes: [
      'Severe dental decay rendering teeth non-restorable',
      'Accidents or facial trauma resulting in tooth loss',
      'Advanced periodontitis causing tooth mobility and loss',
    ],
    procedure: [
      'Consultation & 3D Scan: We evaluate the jawbone density using digital CBCT scans and plan the implant placement coordinates.',
      'Surgical Placement: The titanium implant post is precisely positioned in the jawbone under local anesthesia.',
      'Healing Phase (Osseointegration): Over 3 to 6 months, the implant post fuses naturally with the surrounding bone.',
      'Abutment Placement: A small connector post (abutment) is attached to the implant to support the new crown.',
      'Impression: A digital scan of your mouth is taken to fabricate a custom-fit prosthetic crown.',
      'Final Restoration: The custom-crafted porcelain crown is securely attached to the abutment, restoring your beautiful smile.',
    ],
    benefits: [
      'Provides a permanent, lifetime solution for tooth loss',
      'Halts bone resorption, preserving natural jaw structure and facial features',
      'Restores 100% biting force, allowing you to eat all your favorite foods',
      'Eliminates the slippage, clicking, and discomfort associated with loose dentures',
      'Does not require grinding or altering adjacent healthy teeth, unlike dental bridges',
    ],
    risks: [
      'Risk of implant failure if bone density is insufficient or in cases of poor oral hygiene',
      'Temporary post-surgical swelling or bruising.',
    ],
    recovery: 'Initial healing takes 3-7 days, during which you should eat soft foods and avoid hot liquids. Complete osseointegration takes 3 to 6 months. Maintain excellent oral hygiene and attend regular check-ups to ensure the implant lasts a lifetime.',
    duration: 'Spread over 3 to 6 months (2-3 main surgical/restoration appointments)',
    costRange: '₹25,000 - ₹45,000 per implant (depending on brand like Nobel Biocare, Straumann)',
    faqs: [
      {
        question: 'Are dental implants painful?',
        answer: 'The surgical placement is performed under local anesthesia, so you will not feel any pain. Post-procedure discomfort is minimal and easily managed with prescribed painkillers for 3 to 5 days.'
      },
      {
        question: 'How long do dental implants last?',
        answer: 'With proper oral hygiene, routine dental cleanings, and healthy lifestyle choices, dental implants can last a lifetime. The prosthetic crown may wear down over 10-15 years and need replacement, but the implant post remains secure.'
      },
      {
        question: 'Am I a candidate for implants if I have bone loss?',
        answer: 'Yes. If you have bone loss, we can perform bone grafting or sinus lift procedures to rebuild bone volume before placing the implant, ensuring a solid foundation.'
      }
    ]
  },
  {
    id: 'braces',
    title: 'Orthodontic Braces & Aligners',
    shortTitle: 'Braces',
    iconName: 'Smile',
    image: images.treatments.braces,
    tagline: 'Align crooked teeth and correct your bite with virtually invisible clear aligners or ceramic braces.',
    overview: 'Orthodontic treatment corrects malaligned teeth, crowding, gaps, and improper bites (overbites, underbites). Modern orthodontics has evolved beyond traditional metal braces; we now offer high-performance ceramic braces, self-ligating braces, and virtually invisible clear aligners. Our specialists customize treatments to align your teeth, improve chewing function, and design your perfect smile.',
    symptoms: [
      'Crooked, overlapping, or crowded teeth',
      'Wide gaps between teeth',
      'Difficulty chewing or biting comfortably',
      'Clicking jaw joints or frequent cheek biting',
      'Self-consciousness about smile alignment',
    ],
    causes: [
      'Genetic factors affecting jaw size and tooth spacing',
      'Childhood habits like thumb sucking, mouth breathing, or tongue thrusting',
      'Premature loss of baby teeth leading to permanent tooth misplacement',
    ],
    procedure: [
      'Clinical Assessment: We take photos, digital dental impressions, and orthodontic X-rays (Cephalometric and OPG).',
      'Treatment Planning: Our Orthodontist designs a digital timeline showing how teeth will shift.',
      'Bonding (For Braces): Small brackets are bonded to teeth and connected with archwires. (For Aligners: Custom clear trays are delivered).',
      'Adjustments: Patients visit every 4-6 weeks for wire adjustments or to receive new aligner sets.',
      'Retention Phase: After active treatment, custom retainers are provided to lock teeth into their new, correct positions.',
    ],
    benefits: [
      'Significantly improves smile aesthetics and facial symmetry',
      'Alleviates jaw joint pain (TMJ) and improves bite functions',
      'Makes teeth easier to brush and clean, reducing cavities and gum disease',
      'Enhances self-confidence and professional image',
      'Offers invisible options (Clear Aligners) for working professionals',
    ],
    risks: [
      'Mild soreness or tightness for 2-3 days after adjustments',
      'Requires strict commitment to oral hygiene to prevent cavities around brackets',
    ],
    recovery: 'Wear a retainer as directed by our Orthodontist to prevent teeth from shifting back. Avoid hard, sticky, and chewy foods if you have traditional brackets. Wear clear aligners for 20-22 hours daily.',
    duration: '12 to 24 months (depending on complexity and patient age)',
    costRange: '₹30,000 - ₹90,000 (Aligners range from ₹50,000 - ₹1,500,000)',
    faqs: [
      {
        question: 'What is the best age to get braces?',
        answer: 'While orthodontic treatment is highly effective for adults of all ages, the ideal age to start is between 10 to 14 years, as the jaw bones are still growing and teeth align more rapidly.'
      },
      {
        question: 'Are clear aligners as effective as traditional braces?',
        answer: 'For most mild to moderate alignment cases, clear aligners are just as effective as traditional braces. They offer the added benefits of being removable, invisible, and comfortable. Extremely complex bite corrections may still require traditional wire braces.'
      },
      {
        question: 'How often do I need appointments during braces treatment?',
        answer: 'You will need adjustment visits every 4 to 6 weeks for traditional braces. For clear aligners, appointments are required every 6 to 8 weeks to monitor progress and receive your next sets of trays.'
      }
    ]
  },
  {
    id: 'smile-makeover',
    title: 'Cosmetic Smile Makeover',
    shortTitle: 'Smile Makeover',
    iconName: 'Sparkles',
    image: images.treatments.smileMakeover,
    tagline: 'Correct stains, chips, and tooth gaps for a custom-tailored, flawless smile design.',
    overview: 'A Smile Makeover is a comprehensive aesthetic rehabilitation that combines multiple cosmetic treatments to achieve your ideal smile. Utilizing Digital Smile Design (DSD), we analyze your facial features, skin tone, lip line, and tooth proportions. Treatments may include veneers, laser gum contouring, whitening, and crowns to deliver a flawless, natural-looking smile.',
    symptoms: [
      'Chipped, worn, or cracked front teeth',
      'Severe tooth staining or grey/yellow discoloration',
      'Gaps or minor crowding in the smile zone',
      'Gummy smile (disproportionate gum display when smiling)',
      'Asymmetrical or uneven tooth shapes and lengths',
    ],
    causes: [
      'Natural aging causing worn enamel and yellowing',
      'Accidents or teeth grinding (bruxism) resulting in chips',
      'Genetics affecting gum shape and tooth alignment',
    ],
    procedure: [
      'Digital Mapping: We take high-resolution dental photos and video, creating a 3D digital simulation of your new smile.',
      'Trial Smile (Wax-up): A physical mock-up is placed on your teeth so you can preview and approve the look before starting.',
      'Preparation & Treat: We execute necessary treatments (contouring teeth for veneers, laser gum adjustments, whitening).',
      'Prosthetics Bonding: Precision-crafted porcelain veneers or crowns are permanently bonded to the teeth.',
      'Fine Polish: The restorations are adjusted for a perfect bite and polished to a lifelike luster.',
    ],
    benefits: [
      'Completely transforms dental appearance and facial aesthetics',
      'Corrects multiple flaws (gaps, chips, color, gum lines) simultaneously',
      'Provides immediate, long-lasting results using stain-resistant porcelain',
      'Designed to match your unique facial features for a natural look',
      'Boosts personal, social, and professional confidence',
    ],
    risks: [
      'Slight tooth sensitivity for a few days after preparation',
      'Porcelain restorations can chip if subjected to heavy impact or teeth grinding',
    ],
    recovery: 'Avoid biting into hard objects (like ice or pens) with front veneers. Wear a nightguard if you grind your teeth. Follow standard oral hygiene practices with non-abrasive fluoride toothpaste.',
    duration: '2 to 3 sessions spread over 10 - 15 days',
    costRange: '₹50,000 - ₹2,00,000 (varies based on the number of veneers/crowns required)',
    faqs: [
      {
        question: 'What is Digital Smile Design?',
        answer: 'Digital Smile Design (DSD) is a state-of-the-art software planning tool that allows us to digitally design your new smile and show you a preview on your own photo before any treatment begins. This ensures you get the exact aesthetic look you want.'
      },
      {
        question: 'How long do the results of a smile makeover last?',
        answer: 'Cosmetic crowns and porcelain veneers used in smile makeovers are highly durable and stain-resistant. With proper care, they typically last between 10 to 15 years before requiring replacement or minor maintenance.'
      }
    ]
  },
  {
    id: 'veneers',
    title: 'Premium Dental Veneers',
    shortTitle: 'Dental Veneers',
    iconName: 'Layers',
    image: images.treatments.veneers,
    tagline: 'Ultra-Thin Porcelain or Composite Shells to Instantly Correct Imperfections.',
    overview: 'Dental Veneers are wafer-thin, custom-made shells of tooth-colored materials designed to cover the front surface of teeth. They are bonded to the front of teeth to change their color, shape, size, or length. We offer premium porcelain veneers (ultra-thin, durable, stain-resistant) and composite veneers (same-day restoration, budget-friendly).',
    symptoms: [
      'Severely discolored teeth that cannot be whitened by bleaching',
      'Teeth that are worn down, chipped, or broken',
      'Misaligned, uneven, or irregularly shaped teeth',
      'Gaps between front teeth',
    ],
    causes: [
      'Enamel wear from acidic foods or brushing too hard',
      'Stains from tetracycline or other drugs, fluoride, or large resin fillings',
    ],
    procedure: [
      'Preparation: A very thin layer (approx. 0.3mm - 0.5mm) of enamel is removed from the tooth surface to make space for the veneer.',
      'Impression: A digital scan is sent to the lab to fabricate the porcelain veneers.',
      'Temporary Veneers: Placed to protect the prepared teeth while permanent ones are made.',
      'Bonding: The custom porcelain veneers are tried, adjusted, and bonded using special dental cement.',
    ],
    benefits: [
      'Provides a natural, healthy tooth appearance',
      'Gum tissue tolerates porcelain extremely well',
      'Porcelain veneers are highly stain-resistant to coffee, tea, and smoke',
      'Requires minimal tooth preparation compared to dental crowns',
    ],
    risks: [
      'Procedure is not reversible because enamel is removed',
      'Slight increase in temperature sensitivity',
    ],
    recovery: 'Veneers do not require special care. Brush and floss daily, and avoid biting hard foods directly with your front teeth.',
    duration: '2 appointments over 5 - 7 days',
    costRange: '₹8,000 - ₹18,000 per tooth (depending on composite vs porcelain)',
    faqs: [
      {
        question: 'Do veneers ruin your natural teeth?',
        answer: 'No. Veneers do not ruin teeth. We only remove a minute amount of enamel (less than 0.5mm) to ensure the veneer fits flush with your gum line. The tooth structure underneath remains healthy and protected by the veneer.'
      },
      {
        question: 'Can I eat normally with veneers?',
        answer: 'Yes, once bonded, veneers are very strong. You can eat almost all foods normally. However, you should avoid biting directly into very hard items like raw carrots, bones, or hard candy using the treated teeth.'
      }
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    shortTitle: 'Teeth Whitening',
    iconName: 'Sun',
    image: images.treatments.whitening,
    tagline: 'Brighten Your Smile by Up to 8 Shades in Just 45 Minutes.',
    overview: 'Professional Teeth Whitening is a quick, safe, and highly effective cosmetic treatment designed to remove stains and discoloration from your teeth. We offer in-office laser whitening, which utilizes medical-grade peroxide gel activated by a specialized light to lift deep stains safely. We also provide custom take-home whitening kits for maintenance.',
    symptoms: [
      'Yellow, dull, or stained teeth',
      'Stains from coffee, tea, red wine, or tobacco',
      'Enamel discoloration due to aging or medication',
    ],
    causes: [
      'Regular consumption of dark-colored beverages and staining foods',
      'Accumulation of plaque and tartar deposits',
      'Smoking or chewing tobacco',
    ],
    procedure: [
      'Shade Matching: We measure your current tooth shade to set a baseline.',
      'Isolation: Gums and lips are protected with a barrier gel to avoid irritation.',
      'Gel Application: Professional-strength whitening gel is applied to the teeth.',
      'Light Activation: A specialized blue light activates the gel for 15-minute cycles.',
      'Fluoride Treatment: A desensitizing paste is applied at the end to protect enamel.',
    ],
    benefits: [
      'Delivers immediate, dramatic results in a single short visit',
      'Safe for enamel, performed under expert dentist supervision',
      'Removes deep, stubborn stains that over-the-counter kits cannot reach',
      'Boosts appearance for special events (weddings, interviews)',
    ],
    risks: [
      'Temporary tooth sensitivity to hot and cold (usually resolves within 24-48 hours)',
      'Minor gum irritation if gel touches gum tissues.',
    ],
    recovery: 'Follow the "White Diet" (avoid coffee, tea, soy sauce, red wine, turmeric) for 48 hours after treatment. Use a soft-bristled toothbrush and desensitizing toothpaste if sensitivity occurs.',
    duration: '45 - 60 minutes in a single visit',
    costRange: '₹6,000 - ₹12,000 (In-office Zoom / Laser Whitening)',
    faqs: [
      {
        question: 'Does teeth whitening damage tooth enamel?',
        answer: 'No. Professional teeth whitening uses pH-balanced gel that safely penetrates enamel to break down stain molecules without structural damage, unlike abrasive charcoal or home remedies.'
      },
      {
        question: 'How long do whitening results last?',
        answer: 'Results typically last between 1 to 2 years, depending on your dietary habits and oral hygiene. Avoid heavy consumption of staining foods and drinks, and get regular scaling to maintain the brightness.'
      }
    ]
  },
  {
    id: 'extraction',
    title: 'Painless Tooth Extraction',
    shortTitle: 'Tooth Extraction',
    iconName: 'Trash',
    image: images.treatments.extraction,
    tagline: 'Gentle and Completely Pain-Free Removal of Damaged or Impacted Wisdom Teeth.',
    overview: 'A tooth extraction is the removal of a tooth from its socket in the bone. While we try to save every natural tooth, extractions are necessary for teeth that are broken beyond repair, severely decayed, or impacted (like wisdom teeth). At DentaLand, our oral surgeons perform gentle extractions under local anesthesia, ensuring minimal post-op discomfort.',
    symptoms: [
      'Severe tooth pain, swelling, or jaw stiffness',
      'Impacted wisdom teeth causing pressure or crowding',
      'Tooth mobility due to advanced periodontal disease',
      'Broken or fractured teeth that cannot be saved by root canal or crowns',
    ],
    causes: [
      'Severe, untreated dental decay',
      'Advanced periodontal (gum) disease destroying bone support',
      'Wisdom teeth growing at improper angles due to lack of jaw space',
    ],
    procedure: [
      'X-Ray: We take an X-ray to evaluate the root shape and bone structure.',
      'Anesthesia: Local anesthesia is injected to fully numb the tooth and surrounding area.',
      'Loosening: Using specialized instruments, the tooth is gently loosened from its socket.',
      'Removal: The tooth is carefully extracted. For impacted wisdom teeth, minor surgical access is created.',
      'Stitching & Dressing: Soluble sutures and a sterile gauze pad are placed to promote blood clotting.',
    ],
    benefits: [
      'Provides immediate relief from chronic, severe toothache',
      'Eliminates source of spreading oral bacterial infections',
      'Prevents wisdom teeth from damaging adjacent healthy molars',
      'Prepares the mouth for orthodontic alignment or dental implants',
    ],
    risks: [
      'Temporary swelling and bleeding for 24-48 hours',
      'Dry socket (loss of blood clot in socket) if post-op instructions are not followed.',
    ],
    recovery: 'Bite firmly on the gauze pad for 45 minutes. Avoid spitting, smoking, sucking through a straw, or hot liquids for 24 hours to prevent bleeding. Eat soft foods, apply cold packs to reduce swelling, and take prescribed medications.',
    duration: '20 to 45 minutes',
    costRange: '₹1,500 - ₹5,000 (surgical wisdom tooth extractions range higher)',
    faqs: [
      {
        question: 'Will I feel pain during a tooth extraction?',
        answer: 'No. The local anesthesia ensures the entire area is completely numb. You will feel pressure as the tooth is rocked loose, but absolutely no sharp pain. We also offer sedation for highly anxious patients.'
      },
      {
        question: 'What is a dry socket and how can I prevent it?',
        answer: 'A dry socket is a painful condition that occurs when the blood clot in the empty socket is dislodged, exposing bone and nerves. Prevent it by avoiding spitting, straws, smoking, and vigorous rinsing for 24-48 hours.'
      }
    ]
  },
  {
    id: 'dentures',
    title: 'Custom Dental Dentures',
    shortTitle: 'Dentures',
    iconName: 'Grid',
    image: images.treatments.dentures,
    tagline: 'Restore Your Smile and Chewing Ability with Comfortable Partial or Full Dentures.',
    overview: 'Dentures are removable replacements for missing teeth and surrounding tissues. We offer Complete Dentures (for patients who have lost all teeth in an arch) and Partial Dentures (when some natural teeth remain). Our modern dentures are lightweight, bio-compatible, and customized to replicate the natural look of teeth and gums.',
    symptoms: [
      'Loss of all or multiple teeth in the upper or lower jaw',
      'Difficulty chewing food and speaking clearly',
      'Sagging facial muscles and premature aging due to tooth loss',
    ],
    causes: [
      'Age-related tooth loss or severe gum recession',
      'Widespread dental decay or trauma',
    ],
    procedure: [
      'Oral Evaluation: We examine the health of gums and support bone.',
      'Impressions: Detailed measurements and molds of the gums are taken.',
      'Bite Registration: We determine the alignment of the upper and lower jaw.',
      'Wax Try-In: A mockup denture is placed to check aesthetics and fit.',
      'Delivery: The final acrylic or flexible denture is fitted and adjusted for comfort.',
    ],
    benefits: [
      'Restores clear speech and proper chewing function',
      'Supports facial muscles, preventing a sunken appearance',
      'Provides a budget-friendly option for full mouth rehabilitation',
      'Modern flexible dentures look highly natural and are comfortable to wear',
    ],
    risks: [
      'Requires a brief adaptation period to speak and eat comfortably',
      'May require occasional adjustments or relining over the years due to bone shrinkage.',
    ],
    recovery: 'Clean your dentures daily with a soft brush and denture cleaner. Never wear them sleep; store them in clean water overnight. Practice reading aloud to adapt to speaking faster.',
    duration: '3 to 5 appointments over 2 - 3 weeks',
    costRange: '₹12,000 - ₹35,000 (Complete set, depending on acrylic, BPS, or flexible material)',
    faqs: [
      {
        question: 'Can I sleep with my dentures in?',
        answer: 'No. It is highly recommended to remove your dentures at night. This allows your gums and supporting bone to rest and recover, preventing fungal infections and gum soreness.'
      },
      {
        question: 'How long do dentures last?',
        answer: 'Dentures typically last between 5 to 7 years. Over time, your jawbone shrinks naturally, which can make dentures loose. They will need to be relined or remade for a secure fit.'
      }
    ]
  },
  {
    id: 'scaling',
    title: 'Professional Scaling & Polishing',
    shortTitle: 'Scaling',
    iconName: 'Heart',
    image: images.treatments.scaling,
    tagline: 'Deep Cleaning to Remove Plaque, Tartar, and Prevent Gum Disease.',
    overview: 'Scaling and Polishing is a routine preventive dental treatment that removes accumulated plaque and hardened tartar (calculus) from the teeth and beneath the gum line. Standard brushing cannot remove tartar. We use ultrasonic scalers to gently lift deposits, followed by polishing paste to remove surface stains, keeping gums healthy and teeth sparkling.',
    symptoms: [
      'Bleeding gums, especially during brushing or flossing',
      'Bad breath (halitosis) that does not go away with mouthwash',
      'Yellow or brown deposits (tartar) visible near the gum line',
      'Tender, swollen, or red gums',
    ],
    causes: [
      'Inadequate daily brushing and flossing routines',
      'Accumulation of bacterial plaque biofilm hardening into calculus over time',
    ],
    procedure: [
      'Examination: We check gums for pockets, bleeding, and plaque levels.',
      'Scaling: Ultrasonic scaling tips vibrate gently to break down hard tartar deposits.',
      'Flossing: Detailed cleaning between all tight tooth contacts.',
      'Polishing: A spinning rubber cup with prophylaxis paste smooths enamel and removes stains.',
      'Fluoride Application (Optional): Recommended to reinforce enamel structure.',
    ],
    benefits: [
      'Prevents gingivitis and advanced gum disease (periodontitis)',
      'Removes stubborn external stains from coffee, tea, and smoking',
      'Eliminates chronic bad breath, leaving mouth feeling fresh',
      'Reduces the risk of tooth loss due to gum recession and bone decay',
    ],
    risks: [
      'Slight gum bleeding and mild tooth sensitivity to cold liquids for 24 hours.',
    ],
    recovery: 'Rinse with warm salt water if gums feel tender. Use a soft-bristled brush, and avoid extremely hot, cold, or spicy foods for 24 hours after cleaning.',
    duration: '30 to 45 minutes in a single visit',
    costRange: '₹1,500 - ₹3,000 (recommended every 6 months)',
    faqs: [
      {
        question: 'Does scaling make teeth loose?',
        answer: 'No, this is a common myth. Scaling does not make teeth loose. Hard tartar acts as a false support when bone is lost to gum disease. Scaling removes this harmful bacteria, allowing gums to heal and tighten around the teeth.'
      },
      {
        question: 'How often should I get professional scaling done?',
        answer: 'Dentists recommend getting a scaling and polishing treatment once every 6 months to maintain optimal gum health, prevent cavities, and catch dental issues early.'
      }
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric (Child) Dentistry',
    shortTitle: 'Pediatric Dentistry',
    iconName: 'User',
    image: images.treatments.pediatric,
    tagline: 'Gentle, Fun, and Pain-Free Dental Care Tailored for Kids.',
    overview: 'Pediatric Dentistry focuses on the oral health of children from infancy through their teenage years. Children have unique dental needs and require specialized behavioral management. At DentaLand, our kid-friendly specialists create a warm, fear-free environment. We offer decay prevention, fillings, fluoride treatments, pit and fissure sealants, and habit breakers.',
    symptoms: [
      'Cavities or dark spots visible on baby teeth',
      'Tooth pain, crying during meals, or food avoidance',
      'Thumb-sucking, mouth-breathing, or tongue-thrusting habits',
      'Misaligned erupting permanent teeth',
    ],
    causes: [
      'Excessive consumption of sugary foods, candies, and fruit juices',
      'Sleeping with a milk bottle in the mouth (Nursing Bottle Caries)',
      'Improper brushing technique by young children',
    ],
    procedure: [
      'Behavioral Conditioning: We use positive reinforcement to make the child comfortable.',
      'Dental Check: A gentle visual examination of teeth and gums.',
      'Prevention: Applying protective fluoride gels or sealant coatings to chewing surfaces.',
      'Treatment: Pain-free filling of cavities or pediatric root canals (pulpotomy) if needed.',
      'Education: Interactive demonstration of proper brushing and flossing for child and parents.',
    ],
    benefits: [
      'Keeps baby teeth healthy, ensuring permanent teeth erupt in correct positions',
      'Protects chewing surfaces from cavities using tooth-colored sealants',
      'Helps children develop positive attitudes towards dental health for life',
      'Identifies and corrects developmental alignment issues early',
    ],
    risks: [
      'Minimal risk; requires cooperation from the child, managed gently by our specialists.',
    ],
    recovery: 'Avoid eating solid foods until the numbness wears off to prevent cheek or tongue biting. Monitor the child’s brushing habits, and maintain twice-yearly checkups.',
    duration: '30 to 45 minutes',
    costRange: '₹1,000 - ₹4,000 (varies based on preventive vs restorative treatments)',
    faqs: [
      {
        question: 'Why are baby teeth important if they are going to fall out anyway?',
        answer: 'Baby teeth are crucial because they allow children to chew food comfortably, speak clearly, and hold the spaces open for permanent teeth to guide them into correct alignment. Infected baby teeth can also damage the developing permanent teeth underneath.'
      },
      {
        question: 'What are dental sealants?',
        answer: 'Dental sealants are thin, protective plastic coatings applied to the chewing surfaces of the back molars. They fill the deep grooves (pits and fissures) to block out food particles and bacteria, reducing cavity risk by up to 80%.'
      }
    ]
  },
  {
    id: 'digital-x-ray',
    title: 'Advanced Digital X-Ray & Diagnostics',
    shortTitle: 'Digital X-Ray',
    iconName: 'Camera',
    image: images.treatments.digitalXray,
    tagline: 'Ultra-low Radiation Digital Diagnostics for Accurate Treatment Planning.',
    overview: 'We utilize state-of-the-art Digital RVG X-Rays and dental imaging to diagnose issues that cannot be seen during a standard visual check. Digital X-rays reduce radiation exposure by up to 90% compared to traditional film X-rays and provide instant, high-contrast images. This allows us to plan root canals, implants, and extractions with absolute precision.',
    symptoms: [
      'Unexplained tooth pain beneath the gum line',
      'Hidden decay between teeth',
      'Suspected bone loss or jaw cysts',
    ],
    causes: [
      'Underlying pathology or internal decay not visible to the naked eye',
    ],
    procedure: [
      'Sensor Placement: A small, comfortable digital sensor is placed inside your mouth.',
      'Capture: The digital X-ray machine exposes the sensor for a fraction of a second.',
      'Evaluation: The high-resolution image instantly appears on our chairside screen for review.',
    ],
    benefits: [
      'Reduces patient radiation exposure by up to 90%',
      'Eliminates long waiting times; images are instantly visible',
      'Enables precise diagnostics, leading to safer treatments',
      'Eco-friendly; requires no chemical processing or film waste',
    ],
    risks: [
      'Extremely minimal radiation, lower than what you receive from natural environmental exposure in a single day.',
    ],
    recovery: 'No recovery time needed. Safe for all patients (we use protective lead aprons for additional safety).',
    duration: '2 to 5 minutes',
    costRange: '₹300 - ₹800 (often included in treatment planning)',
    faqs: [
      {
        question: 'Are dental digital X-rays safe during pregnancy?',
        answer: 'Yes, they are extremely safe. Digital X-rays use highly targeted beams with ultra-low radiation. We also use protective lead aprons and thyroid collars to shield the abdomen and neck, ensuring complete safety.'
      }
    ]
  },
  {
    id: 'crown-bridge',
    title: 'Dental Crowns & Bridges',
    shortTitle: 'Crown & Bridge',
    iconName: 'Shield',
    image: images.treatments.crownBridge,
    tagline: 'Premium Porcelain Crowns and Bridges to Strengthen and Restore Your Smile.',
    overview: 'Dental Crowns (caps) cover a damaged or root-canal-treated tooth to restore its strength, shape, size, and appearance. Dental Bridges replace one or more missing teeth by anchoring prosthetic teeth to adjacent healthy support teeth. We use premium metal-free Zirconia and E-max materials fabricated using CAD/CAM digital labs for flawless aesthetics.',
    symptoms: [
      'Weakened, cracked, or fractured teeth',
      'Gaps from missing teeth causing difficulty chewing',
      'Large fillings that need structural reinforcement',
    ],
    causes: [
      'Severe dental decay damaging tooth structure',
      'Trauma, grinding, or wear and tear',
    ],
    procedure: [
      'Preparation: The tooth is trimmed to make space for the crown.',
      'Digital Scan: A digital impression is taken to design the crown in a CAD/CAM lab.',
      'Temporary Crown: A temporary cap is fitted to protect the tooth.',
      'Cementation: The final premium Zirconia or ceramic crown is securely bonded to the tooth.',
    ],
    benefits: [
      'Restores biting strength and prevents tooth fractures',
      'Looks identical to natural teeth using metal-free Zirconia',
      'Fixed replacement option; no need to remove them like dentures',
      'Bridges prevent adjacent teeth from shifting out of alignment',
    ],
    risks: [
      'Mild sensitivity to cold/hot for a few days after cementation.',
    ],
    recovery: 'Avoid sticky or extremely hard foods on the temporary crown. Maintain normal brushing and flossing around the final crown/bridge, especially at the gum line.',
    duration: '2 appointments spread over 3 - 5 days',
    costRange: '₹4,500 - ₹15,000 (Zirconia, Ceramic, PFM options)',
    faqs: [
      {
        question: 'What is the difference between Zirconia and Metal-Ceramic (PFM) crowns?',
        answer: 'Zirconia crowns are metal-free, biocompatible, and virtually unbreakable. They offer superior natural translucency without showing a dark metal line at the gum line over time, making them ideal for front teeth. PFM crowns contain a metal core coated in ceramic, making them strong but slightly less aesthetic.'
      }
    ]
  },
  {
    id: 'tooth-jewellery',
    title: 'Aesthetic Tooth Jewellery',
    shortTitle: 'Tooth Jewellery',
    iconName: 'Gem',
    image: images.treatments.toothJewellery,
    tagline: 'Add a Sparkle to Your Smile Safely with Premium Swarovski Crystals.',
    overview: 'Tooth Jewellery is a pain-free, temporary cosmetic procedure where a tiny Swarovski crystal, glass gem, or gold stud is bonded to the front surface of a tooth. This is a non-invasive treatment that requires no drilling or damage to the enamel. The gem can be removed or replaced at any time by our dentists.',
    symptoms: [
      'Desire to add a unique, sparkling touch to your smile aesthetics',
    ],
    causes: [
      'Aesthetic and cosmetic trends',
    ],
    procedure: [
      'Cleaning: The target tooth is cleaned and polished.',
      'Etching & Bonding: A mild dental adhesive gel is applied to the enamel.',
      'Placement: The crystal is carefully positioned on the tooth.',
      'Curing: A specialized UV light cures the bonding agent in 60 seconds.',
    ],
    benefits: [
      '100% safe, non-invasive, and completely reversible',
      'Requires absolutely no drilling or structural damage to your tooth',
      'Uses lead-free, certified dental-grade Swarovski crystals',
      'Adds a stylish, sparkling accent to your smile',
    ],
    risks: [
      'No risks; can be brushed normally. Avoid picking at the crystal.',
    ],
    recovery: 'Eat soft foods for the first 12 hours. Do not use abrasive toothpaste directly on the crystal.',
    duration: '15 to 20 minutes',
    costRange: '₹1,500 - ₹3,000 per crystal',
    faqs: [
      {
        question: 'Does tooth jewellery damage the tooth?',
        answer: 'No. The procedure is completely safe. We use the same composite bonding material used for dental fillings to stick the gem to the enamel. There is no drilling, no pain, and it can be removed safely without leaving a mark.'
      }
    ]
  },
  {
    id: 'fluoridation',
    title: 'Preventive Fluoride Therapy',
    shortTitle: 'Fluoridation',
    iconName: 'Droplet',
    image: images.treatments.fluoridation,
    tagline: 'Strengthen Tooth Enamel and Prevent Cavities with Fluoride Treatment.',
    overview: 'Fluoride Therapy is a highly effective preventive treatment where a concentrated fluoride gel, varnish, or foam is applied directly to the teeth. Fluoride remineralizes weak spots in the enamel, making teeth highly resistant to acid attacks from plaque bacteria and reversing early, microscopic stages of tooth decay.',
    symptoms: [
      'High risk of cavities in children and adults',
      'Early signs of enamel demineralization (white spots on teeth)',
      'Tooth sensitivity due to enamel thinning',
    ],
    causes: [
      'Enamel thinning from acidic exposure or plaque buildup',
    ],
    procedure: [
      'Teeth Cleaning: We clean and dry the teeth to allow maximum fluoride absorption.',
      'Application: A flavored fluoride gel is placed in custom trays or a varnish is painted directly onto the teeth.',
      'Absorption: Left on the teeth for 1 to 2 minutes.',
      'Post-treatment instructions: The patient spits out any excess gel.',
    ],
    benefits: [
      'Rebuilds and strengthens weakened tooth enamel',
      'Reduces cavity risk by up to 60% in children',
      'Provides immediate relief from tooth sensitivity to hot and cold',
      'Reverses early-stage cavities, avoiding the need for future fillings',
    ],
    risks: [
      'No risks when applied professionally in correct doses.',
    ],
    recovery: 'Do not eat, drink, or rinse your mouth for 30 minutes after the treatment to allow the fluoride to penetrate the enamel.',
    duration: '10 to 15 minutes',
    costRange: '₹1,000 - ₹2,000 (often done during routine cleaning appointments)',
    faqs: [
      {
        question: 'Why do adults need fluoride therapy?',
        answer: 'Adults benefit from fluoride just as much as children. It helps protect exposed roots in cases of gum recession, remineralizes teeth around old fillings, and treats chronic tooth sensitivity.'
      }
    ]
  },
  {
    id: 'total-gum-care',
    title: 'Total Gum Care & Periodontics',
    shortTitle: 'Gum Care',
    iconName: 'Activity',
    image: images.treatments.totalGumCare,
    tagline: 'Advanced Treatments for Bleeding Gums, Gum Recession, and Pyorrhea.',
    overview: 'Total Gum Care involves diagnosing, treating, and preventing gum diseases (gingivitis and periodontitis). Infected gums lead to bone loss and tooth mobility. We provide scaling, root planing (deep cleaning), laser gum therapy, and surgical gum grafting to eliminate bacteria, tighten gums, and save mobile teeth.',
    symptoms: [
      'Bleeding gums while brushing, flossing, or eating hard foods',
      'Swollen, red, or painful gum tissue',
      'Persistent bad breath and metallic taste in the mouth',
      'Gums pulling away from teeth (recession), making teeth look longer',
      'Loose or shifting teeth',
    ],
    causes: [
      'Chronic plaque and tartar accumulation under the gum line',
      'Smoking, diabetes, and certain medications weakening gum defense',
      'Genetic predisposition to periodontal disease',
    ],
    procedure: [
      'Deep Cleaning (Scaling & Root Planing): We clean deep beneath the gum line to smooth root surfaces, removing embedded tartar.',
      'Laser Disinfection: Highly targeted dental lasers destroy bacteria inside deep gum pockets.',
      'Gum Surgery (For advanced cases): Minor surgical flapping allows us to clean deep bone defects and place bone graft materials.',
      'Maintenance: We design a custom oral hygiene regimen and checkups.',
    ],
    benefits: [
      'Stops gum bleeding, swelling, and chronic oral inflammation',
      'Halts bone loss, stabilizing loose teeth and preventing tooth loss',
      'Improves cosmetic appearance by correcting receded gum lines',
      'Reduces systemic health risks (gum disease is linked to heart disease and diabetes)',
    ],
    risks: [
      'Temporary gum sensitivity and mild tooth sensitivity to hot/cold for 3-5 days.',
    ],
    recovery: 'Use an antiseptic mouthwash as prescribed. Brush gently with a soft toothbrush, and avoid hard, spicy, or crunchy foods for 3 to 7 days.',
    duration: '1 to 4 sessions (depending on the stage of gum disease)',
    costRange: '₹3,000 - ₹12,000 (varies based on scaling vs root planing and surgical need)',
    faqs: [
      {
        question: 'What is pyorrhea and is it curable?',
        answer: 'Pyorrhea (advanced periodontitis) is a chronic bacterial infection that destroys the bone supporting your teeth. While the lost bone cannot be easily grown back, the infection is fully treatable. Gum therapy halts the disease, stops bleeding, and stabilizes your remaining teeth.'
      },
      {
        question: 'Why do my gums bleed when I brush?',
        answer: 'Healthy gums never bleed. Bleeding gums are the primary sign of gingivitis (early gum disease), caused by plaque buildup. A professional scaling cleaning will remove this plaque and restore healthy, non-bleeding gums.'
      }
    ]
  }
];
