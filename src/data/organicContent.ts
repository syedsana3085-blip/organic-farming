import type {
  APCNFPillar,
  ActivityWeek,
  BenefitItem,
  ComparisonRow,
  CropGuideProfile,
  DashboardCardItem,
  FAQItem,
  GovernmentScheme,
  OrganicFact,
  OrganicMethod,
  PrincipleItem,
  ProjectMetadata,
  QuizQuestion,
  RegionalExample,
  SurveyEntry,
} from '../types/project';

export const DEFAULT_PROJECT_METADATA: ProjectMetadata = {
  projectTitle: 'Organic Farming – Green Future',
  tagline: 'Growing Naturally, Living Sustainably.',
  collegeName: 'Department of Computer Science & Community Engagement (Editable)',
  department: 'Community Service Project (CSP)',
  studentName: 'CSP Student Team (Click Edit to Personalize)',
  rollNumber: 'CSP-2026-01',
  mentorName: 'Faculty Project Mentor',
  academicYear: '2025–2026',
  districtOrCity: 'Andhra Pradesh, India',
};

export const DASHBOARD_SECTIONS: DashboardCardItem[] = [
  {
    id: 'introduction',
    index: '01',
    title: 'Introduction to Organic Farming',
    subtitle: 'Meaning, IFOAM principles, and conventional vs. organic comparison.',
    category: 'Core Study',
  },
  {
    id: 'benefits',
    index: '02',
    title: 'Benefits of Organic Farming',
    subtitle: 'Soil fertility, biodiversity, water conservation, and farmer resilience.',
    category: 'Core Study',
  },
  {
    id: 'methods',
    index: '03',
    title: 'Organic Farming Methods',
    subtitle: 'Composting, vermicomposting, crop rotation, green manure, and biofertilizers.',
    category: 'Core Study',
  },
  {
    id: 'andhra-pradesh',
    index: '04',
    title: 'Organic Farming in Andhra Pradesh',
    subtitle: 'APCNF by RySS, regional crops, SHGs, and PKVY / PGS-India support.',
    category: 'Regional Focus',
  },
  {
    id: 'survey',
    index: '05',
    title: 'Data Collection & Farmer Survey',
    subtitle: 'Field survey framework, editable farmer log, and live response summary.',
    category: 'Field Work',
  },
  {
    id: 'farming-guide',
    index: '06',
    title: 'Interactive Organic Farming Guide',
    subtitle: 'Select a crop and method to explore educational organic practices.',
    category: 'Interactive Tool',
  },
  {
    id: 'future-scope',
    index: '07',
    title: 'Future Scope',
    subtitle: 'AgTech, FPO markets, training, policy support, and youth opportunities.',
    category: 'Core Study',
  },
  {
    id: 'my-activity',
    index: '08',
    title: 'My Activity (6-Week Journey)',
    subtitle: 'Week-by-week CSP log with editable field descriptions and photo slots.',
    category: 'Field Work',
  },
  {
    id: 'conclusion',
    index: '09',
    title: 'Conclusion',
    subtitle: 'Synthesizing soil health, ecology, food safety, and rural livelihoods.',
    category: 'Core Study',
  },
  {
    id: 'quiz-faq',
    index: '10',
    title: 'Knowledge Quiz & FAQ',
    subtitle: 'Test organic farming concepts and review common community questions.',
    category: 'Interactive Tool',
  },
];

export const IMPORTANT_ORGANIC_FACTS: OrganicFact[] = [
  {
    title: 'Living Soil Biology',
    detail:
      'Healthy organic soils rely on beneficial bacteria, mycorrhizal fungi, and earthworms to cycle nitrogen, phosphorus, and micronutrients naturally without synthetic salt buildup.',
    source: 'ICAR – Indian Institute of Soil Science',
  },
  {
    title: 'India’s Certification Frameworks',
    detail:
      'India recognizes both Third-Party NPOP (for export and domestic retail) and PGS-India (Participatory Guarantee System), a farmer-group peer certification model backed by the Ministry of Agriculture.',
    source: 'NCOF / Jaivik Bharat (FSSAI)',
  },
  {
    title: 'Community-Managed Natural Farming',
    detail:
      'Andhra Pradesh Community-Managed Natural Farming (APCNF), facilitated by Rythu Sadhikara Samstha (RySS), trains women Self-Help Groups and champion farmers in chemical-free cultivation.',
    source: 'RySS / Govt. of Andhra Pradesh',
  },
  {
    title: 'Ecological Pest Balance',
    detail:
      'Rather than eradicating all insects with broad-spectrum sprays, organic farming preserves natural predators like ladybird beetles, spiders, and parasitic wasps using trap crops and botanicals.',
    source: 'FAO Agroecology Knowledge Hub',
  },
];

export const ORGANIC_VS_CONVENTIONAL: ComparisonRow[] = [
  {
    aspect: 'Nutrient Source',
    organic: 'Farmyard manure, compost, vermicompost, green manure, and biofertilizers.',
    conventional: 'Synthetic chemical fertilizers (urea, DAP, MOP) formulated for quick release.',
  },
  {
    aspect: 'Pest & Disease Control',
    organic: 'Neem extracts, botanical decoctions, trap crops, pheromone traps, and beneficial insects.',
    conventional: 'Synthetic chemical insecticides, fungicides, and herbicides.',
  },
  {
    aspect: 'Soil Organic Matter',
    organic: 'Builds humus, microbial diversity, and crumb structure over seasons.',
    conventional: 'Can decline if synthetic inputs are applied without organic carbon replenishment.',
  },
  {
    aspect: 'Water Retention',
    organic: 'Mulching and higher organic matter improve moisture-holding capacity.',
    conventional: 'Exposed soil surfaces can experience higher evaporation and runoff.',
  },
  {
    aspect: 'Seed & Cropping Pattern',
    organic: 'Diverse crop rotations, intercropping, and locally adapted varieties.',
    conventional: 'Often relies on monocropping and high-input hybrid cultivars.',
  },
  {
    aspect: 'Market & Certification',
    organic: 'Verified under PGS-India or NPOP standards with Jaivik Bharat labeling.',
    conventional: 'Sold in standard agricultural mandis without organic certification.',
  },
];

export const IFOAM_PRINCIPLES: PrincipleItem[] = [
  {
    name: 'Principle of Health',
    summary: 'Sustain and enhance the health of soil, plant, animal, human, and planet as one.',
    practice: 'Eliminate persistent synthetic toxins so food remains free from chemical residues.',
  },
  {
    name: 'Principle of Ecology',
    summary: 'Work with living ecological systems and natural nutrient cycles.',
    practice: 'Use crop rotation, composting, and biodiversity corridors adapted to local climate.',
  },
  {
    name: 'Principle of Fairness',
    summary: 'Build equitable relationships across farmers, farmworkers, processors, and consumers.',
    practice: 'Encourage Farmer Producer Organizations (FPOs) and transparent local pricing.',
  },
  {
    name: 'Principle of Care',
    summary: 'Manage agriculture responsibly to protect current and future generations.',
    practice: 'Prevent soil erosion, conserve groundwater, and adopt proven low-risk innovations.',
  },
];

export const ORGANIC_BENEFITS: BenefitItem[] = [
  {
    id: 'soil-fertility',
    index: '01',
    title: 'Improves Soil Fertility',
    summary: 'Restores organic carbon, microbial life, and long-term nutrient availability.',
    mechanism:
      'Compost, green manure, and vermicompost feed soil microorganisms and earthworms, forming stable humus that binds nutrients and improves soil aeration.',
    impact: 'Prevents soil compaction and supports steady root development across seasons.',
  },
  {
    id: 'protects-environment',
    index: '02',
    title: 'Protects the Environment',
    summary: 'Minimizes chemical runoff into rivers, tanks, and groundwater aquifers.',
    mechanism:
      'Replacing synthetic nitrates and persistent pesticides eliminates toxic leaching during monsoon rains and lowers greenhouse gas emissions linked to chemical manufacturing.',
    impact: 'Cleaner village water bodies and safer rural ecosystems for livestock and people.',
  },
  {
    id: 'reduces-chemicals',
    index: '03',
    title: 'Reduces Synthetic Dependency',
    summary: 'Lowers farmer reliance on expensive external fertilizers and pesticides.',
    mechanism:
      'On-farm preparation of compost, Jeevamrutham, and neem seed kernel extracts replaces recurring cash purchases of chemical bags and sprays.',
    impact: 'Reduces input expenditure and shields smallholders from market price spikes.',
  },
  {
    id: 'encourages-biodiversity',
    index: '04',
    title: 'Encourages Biodiversity',
    summary: 'Creates habitats for pollinators, birds, soil microbes, and beneficial insects.',
    mechanism:
      'Mixed cropping, border trees, and flowering trap crops like marigold attract bees and natural predators that keep pest populations below damaging thresholds.',
    impact: 'Stronger ecological balance and improved pollination for horticultural crops.',
  },
  {
    id: 'sustainable-agriculture',
    index: '05',
    title: 'Supports Sustainable Agriculture',
    summary: 'Maintains productive farmland across decades rather than exhausting it.',
    mechanism:
      'Crop rotation with nitrogen-fixing legumes prevents single-nutrient depletion and breaks the life cycles of soil-borne weeds and pathogens.',
    impact: 'Consistent, resilient harvests even under irregular rainfall patterns.',
  },
  {
    id: 'water-management',
    index: '06',
    title: 'Promotes Responsible Water Management',
    summary: 'Helps soil absorb rainwater and reduces evaporation losses.',
    mechanism:
      'Organic mulch (Acchadana) shades the soil surface, lowers soil temperature, and boosts infiltration so crops survive dry spells better.',
    impact: 'Meaningful water savings in rainfed and drought-prone agricultural tracts.',
  },
  {
    id: 'farmer-opportunities',
    index: '07',
    title: 'Creates Opportunities for Farmers',
    summary: 'Opens value-added markets, FPO networks, and rural bio-input enterprises.',
    mechanism:
      'Verified organic produce under PGS-India or NPOP connects growers to health-conscious urban markets, direct farm-to-home networks, and specialty processing.',
    impact: 'Diversified rural income including vermicompost and bio-input micro-enterprises.',
  },
];

export const ORGANIC_METHODS: OrganicMethod[] = [
  {
    id: 'composting',
    name: 'Composting',
    shortDesc: 'Controlled aerobic decomposition of farm waste into nutrient-rich humus.',
    overview:
      'Composting converts crop residues, dry leaves, kitchen waste, and livestock manure into stable dark organic manure through natural microbial heat.',
    materials: ['Dry straw and crop stalks (carbon)', 'Green weeds and cow dung (nitrogen)', 'Moisture and periodic aeration'],
    steps: [
      'Layer dry brown crop waste and fresh green biomass alternately in a shaded pit or heap.',
      'Moisten with cow dung slurry to introduce decomposing microbes and maintain 50–60% moisture.',
      'Turn the pile every 15–20 days to supply oxygen and prevent foul odor.',
      'Harvest dark, earthy-smelling compost in 60–90 days and incorporate into soil before sowing.',
    ],
    soilAndCropEffect: 'Increases soil water-holding capacity, cation exchange capacity, and slow-release macro/micronutrients.',
  },
  {
    id: 'vermicomposting',
    name: 'Vermicomposting',
    shortDesc: 'Using earthworms to transform farm organics into fine microbial castings.',
    overview:
      'Epigeic earthworms (commonly Eisenia fetida) digest partially decomposed farm residue and cattle dung, excreting nutrient-dense worm castings rich in beneficial enzymes.',
    materials: ['Shaded brick or HDPE vermi-bed', 'Pre-composted cow dung and crop residue', 'Earthworms (Eisenia fetida)'],
    steps: [
      'Prepare a shaded bed above ground level with a basal layer of coconut husk or dry grass for drainage.',
      'Add pre-decomposed organic waste and dung (cooled for 15 days so heat does not harm worms).',
      'Release earthworms gently on top and cover with gunny sacks to keep moisture steady.',
      'Collect granular dark vermicompost from the top layers after 45–60 days and sieve without harming worms.',
    ],
    soilAndCropEffect: 'Supplies plant-available nitrogen, phosphorus, humic acids, and root-promoting microbes.',
  },
  {
    id: 'crop-rotation',
    name: 'Crop Rotation',
    shortDesc: 'Planned sequence of different crop families across seasons on the same plot.',
    overview:
      'Alternating cereal crops (like paddy or millets) with deep-rooted legumes (like green gram or black gram) balances soil nutrients and disrupts pest cycles.',
    materials: ['Seasonal crop calendar', 'Nitrogen-fixing pulse seeds', 'Soil moisture plan'],
    steps: [
      'Avoid growing the same botanical family (e.g., tomato after chilli) consecutively on the same bed.',
      'Follow heavy nitrogen-feeding cereals with pulses like red gram, green gram, or chickpea.',
      'Include a short-duration cover or fodder crop during fallow windows to protect topsoil.',
      'Record harvest performance and soil observations across each seasonal cycle.',
    ],
    soilAndCropEffect: 'Breaks pest and disease host chains while naturally replenishing soil nitrogen.',
  },
  {
    id: 'green-manure',
    name: 'Green Manure',
    shortDesc: 'Growing fast legume cover crops and incorporating them into soil before flowering.',
    overview:
      'Crops such as Sunnhemp (Crotalaria juncea), Dhaincha (Sesbania aculeata), and Pillipesara are grown specifically to be ploughed back into the soil as succulent organic biomass.',
    materials: ['Dhaincha or Sunnhemp seed', 'Pre-monsoon or early Kharif moisture', 'Plough or rotavator for incorporation'],
    steps: [
      'Broadcast green manure seeds after early rains or prior to main Kharif paddy transplanting.',
      'Allow lush vegetative growth for 40–45 days until just before flowering stage.',
      'Slash and incorporate the tender green biomass into the moist topsoil.',
      'Wait 10–15 days for decomposition before transplanting or sowing the main crop.',
    ],
    soilAndCropEffect: 'Adds large volumes of organic matter, fixes atmospheric nitrogen, and suppresses early weeds.',
  },
  {
    id: 'biofertilizers',
    name: 'Biofertilizers',
    shortDesc: 'Living microbial inoculants that fix nitrogen or solubilize locked soil minerals.',
    overview:
      'Biofertilizers contain beneficial bacteria or fungi (such as Rhizobium, Azospirillum, Azotobacter, and Phosphate Solubilizing Bacteria) applied to seeds, seedlings, or compost.',
    materials: ['Crop-specific microbial culture (liquid or carrier-based)', 'Jaggery solution or rice gruel sticker', 'Shaded drying area'],
    steps: [
      'Select the appropriate biofertilizer (Rhizobium for pulses; Azospirillum/PSB for cereals and vegetables).',
      'Mix the inoculant gently with seeds using cooled jaggery water before sowing, or dip seedling roots.',
      'Dry coated seeds in shade for 30 minutes—never expose live microbes to direct harsh sunlight.',
      'Enrich farmyard manure with PSB/Azotobacter before broadcasting for sustained root colonization.',
    ],
    soilAndCropEffect: 'Unlocks bound soil phosphorus and converts atmospheric nitrogen into plant-usable forms.',
  },
  {
    id: 'natural-pest-management',
    name: 'Natural Pest Management',
    shortDesc: 'Botanical extracts, traps, and biological control without synthetic poisons.',
    overview:
      'Preventive pest management combines neem-based sprays (Neemastra / Neem Seed Kernel Extract), sticky/pheromone traps, bird perches, and beneficial predator conservation.',
    materials: ['Neem seeds or leaves', 'Cow urine and dung (for Neemastra/Agniastra)', 'Yellow/blue sticky traps & pheromone lures'],
    steps: [
      'Install 8–10 bird perches per acre and yellow sticky traps to monitor sap-sucking pests early.',
      'Grow marigold or castor as border trap crops to divert caterpillars and nematodes.',
      'Prepare 5% Neem Seed Kernel Extract (NSKE) or Neemastra and spray during cool evening hours.',
      'Encourage ladybird beetles and Trichogramma parasitoids instead of broad-spectrum chemical sprays.',
    ],
    soilAndCropEffect: 'Controls chewing and sucking pests while keeping pollinators and soil fauna safe.',
  },
  {
    id: 'mulching',
    name: 'Mulching',
    shortDesc: 'Covering bare soil with crop residue or living cover crops to conserve moisture.',
    overview:
      'Known in Andhra Pradesh natural farming as Acchadana, mulching shields topsoil from scorching sun and heavy rain impact using paddy straw, dry leaves, or live legumes.',
    materials: ['Paddy straw, sugarcane trash, or dried grass', 'Or live intercrop cover (cowpea/green gram)'],
    steps: [
      'After sowing or transplanting, spread a 5–7 cm layer of clean dry straw between crop rows.',
      'Keep a small gap immediately around delicate stems to prevent collar rot during heavy rain.',
      'Alternatively, sow short-duration creeping pulses between wide-spaced crops as live mulch.',
      'Allow the mulch to decompose gradually into topsoil humus.',
    ],
    soilAndCropEffect: 'Reduces soil temperature, cuts weed germination, retains moisture, and feeds earthworms.',
  },
  {
    id: 'mixed-cropping',
    name: 'Mixed Cropping',
    shortDesc: 'Cultivating two or more complementary crops together in the same field.',
    overview:
      'Combining tall cereals, deep-rooted pulses, and shallow vegetables (or Navadhanya multi-crop models) maximizes sunlight, soil strata, and farmer income stability.',
    materials: ['Complementary seed varieties (cereal + pulse + oilseed)', 'Planned row spacing'],
    steps: [
      'Pair crops with complementary root depths and canopy heights (e.g., pearl millet + red gram + cowpea).',
      'Include aromatic or flowering companion plants to confuse pest visual/scent navigation.',
      'Harvest early-maturing intercrops first, leaving space and nutrients for the longer-duration crop.',
      'Ensure adequate airflow between rows to prevent fungal humidity buildup.',
    ],
    soilAndCropEffect: 'Reduces risk of total crop failure and provides staggered household nutrition and income.',
  },
];

export const APCNF_PILLARS: APCNFPillar[] = [
  {
    name: 'Beejamrutham',
    teluguMeaning: 'Seed Treatment Elixir',
    purpose: 'Protects germinating seeds from seed-borne and soil-borne fungal pathogens.',
    preparation: 'Fermented mix of local cow dung, cow urine, lime, and handful of bund soil applied to seeds before sowing.',
  },
  {
    name: 'Jeevamrutham',
    teluguMeaning: 'Microbial Soil Culture',
    purpose: 'Multiplies native soil microbes and stimulates earthworm activity rather than acting as a direct chemical NPK feed.',
    preparation: 'Cow dung, cow urine, jaggery, pulse flour, and virgin soil fermented in shade for 48–72 hours.',
  },
  {
    name: 'Acchadana',
    teluguMeaning: 'Mulching Cover',
    purpose: 'Conserves soil moisture, regulates soil temperature, suppresses weeds, and builds surface humus.',
    preparation: 'Soil mulch, dry straw mulch, or live intercrop mulch covering exposed soil between plant rows.',
  },
  {
    name: 'Whapasa',
    teluguMeaning: 'Soil Moisture & Aeration',
    purpose: 'Maintains a balanced 50:50 mix of air and water vapor around plant roots instead of waterlogging.',
    preparation: 'Irrigating in alternate furrows or minimal wetting zones around root active regions.',
  },
];

export const AP_GOVERNMENT_SCHEMES: GovernmentScheme[] = [
  {
    name: 'APCNF (Andhra Pradesh Community-Managed Natural Farming)',
    agency: 'Rythu Sadhikara Samstha (RySS), Govt. of Andhra Pradesh',
    objective:
      'Transitioning smallholder farming across Andhra Pradesh toward chemical-free natural farming via women Self-Help Groups (SHGs) and peer-to-peer Farmer Field Schools.',
  },
  {
    name: 'PKVY (Paramparagat Krishi Vikas Yojana)',
    agency: 'Ministry of Agriculture & Farmers Welfare, Govt. of India',
    objective:
      'Supports cluster-based organic farming (20-hectare clusters) with financial assistance for inputs, training, and PGS-India participatory certification.',
  },
  {
    name: 'PGS-India & Jaivik Bharat',
    agency: 'National Centre for Organic and Natural Farming (NCOF) & FSSAI',
    objective:
      'Low-cost group certification system empowering local farmer clusters to verify organic compliance and sell under the unified Jaivik Bharat mark.',
  },
];

export const AP_REGIONAL_EXAMPLES: RegionalExample[] = [
  {
    region: 'Araku Valley & Alluri Sitharama Raju District',
    crops: 'Shade-grown Coffee, Black Pepper, Turmeric, Ginger',
    approach: 'Tribal smallholder cooperatives utilizing forest leaf litter compost, shade trees, and zero synthetic inputs.',
    note: 'Documented regional agricultural model recognized for specialty organic coffee and spice cultivation.',
  },
  {
    region: 'Anantapuramu & Rayalaseema Rainfed Belt',
    crops: 'Groundnut, Millets (Ragi, Foxtail Millet), Red Gram',
    approach: 'Drought-resilient Navadhanya mixed cropping, Beejamrutham seed coating, and straw mulching to preserve scarce rain.',
    note: 'Demonstrates how organic soil carbon helps rainfed crops withstand mid-season dry spells.',
  },
  {
    region: 'Krishna–Godavari Delta & Guntur Districts',
    crops: 'Paddy, Black Gram, Chilli, Banana',
    approach: 'Pre-kharif green manuring (Dhaincha/Pillipesara), Azolla biofertilizer in paddy, and neem botanical IPM in vegetables.',
    note: 'Illustrates integrated transition pathways in irrigated deltaic zones.',
  },
];

export const FUTURE_SCOPE_PILLARS = [
  {
    index: '01',
    title: 'Organic Farming Awareness',
    detail:
      'Expanding community nutrition literacy and transparent Jaivik Bharat labeling so rural and urban households recognize chemical-free produce.',
  },
  {
    index: '02',
    title: 'Sustainable Agriculture Technology',
    detail:
      'Combining traditional biological inputs with low-cost soil health testing kits, solar drip irrigation, and digital crop-advisory tools.',
  },
  {
    index: '03',
    title: 'Farmer Education & Training',
    detail:
      'Strengthening Krishi Vigyan Kendras (KVKs), demonstration plots, and Champion Farmer peer networks so growers master transition timelines.',
  },
  {
    index: '04',
    title: 'Organic Product Markets & FPOs',
    detail:
      'Building Farmer Producer Organizations (FPOs) for collective grading, cold storage, and direct farm-to-consumer digital marketplaces.',
  },
  {
    index: '05',
    title: 'Government & Policy Support',
    detail:
      'Sustained cluster subsidies under PKVY, APCNF expansion, and streamlined PGS-India certification to bridge the 2–3 year conversion phase.',
  },
  {
    index: '06',
    title: 'Opportunities for Young Farmers',
    detail:
      'Rural youth agri-entrepreneurship in commercial vermicompost units, bio-input resource centers (BRCs), and organic food branding.',
  },
];

export const CROP_GUIDE_PROFILES: CropGuideProfile[] = [
  {
    id: 'paddy',
    name: 'Paddy (Rice)',
    season: 'Kharif / Rabi',
    soilType: 'Clayey to loamy alluvial soils',
    naturalInputs: [
      'Beejamrutham seed treatment prior to nursery sowing',
      'Azospirillum + Phosphate Solubilizing Bacteria (PSB) seedling root dip',
      'Azolla biofertilizer mat in standing water to fix atmospheric nitrogen',
      'Neemastra or 5% NSKE spray at early vegetative stage for stem borer prevention',
    ],
    compostGuidance:
      'Incorporate 4–5 tonnes/acre of well-decomposed farmyard manure or enriched compost during final puddling, ideally preceded by a 45-day Dhaincha green manure crop.',
    soilImprovement:
      'Adopt alternate wetting and drying (Whapasa principle) rather than continuous deep flooding to strengthen root aeration and reduce methane emissions.',
  },
  {
    id: 'groundnut',
    name: 'Groundnut',
    season: 'Kharif (Rainfed) / Rabi',
    soilType: 'Red sandy loam and well-drained soils',
    naturalInputs: [
      'Rhizobium + PSB seed inoculation in shade before sowing',
      'Trichoderma viride enriched compost to suppress collar rot and root rot',
      'Intercrop with red gram (7:1 row ratio) and border trap rows of marigold',
      'Pheromone traps and Neem oil spray for leaf miner management',
    ],
    compostGuidance:
      'Apply 2–3 tonnes/acre of vermicompost or composted farmyard manure along with gypsum at pegging stage for healthy pod filling.',
    soilImprovement:
      'Use light straw mulching between rows to retain scarce monsoon moisture and keep topsoil friable for easy peg penetration.',
  },
  {
    id: 'chilli',
    name: 'Chilli',
    season: 'Kharif / Rabi',
    soilType: 'Well-drained black cotton or loamy soils',
    naturalInputs: [
      'Seedling root dip in Pseudomonas / Trichoderma bio-solution before transplanting',
      'Blue & yellow sticky traps (10–12/acre) for thrips and whitefly monitoring',
      'Agniastra or fermented buttermilk + neem decoction for sucking pest control',
      'Border rows of maize or sorghum as barrier crops against viral vectors',
    ],
    compostGuidance:
      'Enrich nursery beds with finely sieved vermicompost (30% by volume) and apply neem cake + compost in main field ridges.',
    soilImprovement:
      'Maintain raised beds with paddy straw mulch (Acchadana) to prevent root rot during heavy rains and regulate root-zone temperature.',
  },
  {
    id: 'millets',
    name: 'Millets (Ragi / Foxtail Millet)',
    season: 'Kharif / Dryland',
    soilType: 'Red loams and marginal rainfed soils',
    naturalInputs: [
      'Beejamrutham coating for uniform germination under limited moisture',
      'Azospirillum biofertilizer application mixed with dry compost',
      'Navadhanya or pulse intercropping (green gram / cowpea) for balanced soil cover',
      'Bird perches to encourage natural predation of earhead caterpillars',
    ],
    compostGuidance:
      'A moderate dose of 2 tonnes/acre of well-rotted compost or Ghanajeevamrutham at sowing supports hardy millet root systems.',
    soilImprovement:
      'Contour bunding and crop residue mulching capture raindrop impact and steadily raise low dryland organic carbon.',
  },
  {
    id: 'vegetables',
    name: 'Vegetables (Tomato / Brinjal)',
    season: 'Year-round / Rabi',
    soilType: 'Fertile sandy loam rich in organic matter',
    naturalInputs: [
      'Trichoderma-enriched vermicompost in planting pits to guard against wilt',
      'Marigold companion border every 10–12 rows to suppress root-knot nematodes',
      'Pheromone traps for fruit borer + 5% Neem Seed Kernel Extract (NSKE)',
      'Foliar spray of diluted Jeevamrutham (5–10%) at 15-day intervals',
    ],
    compostGuidance:
      'Use decomposed compost as basal dose plus side-dressing of vermicompost at flowering and fruit-set stages.',
    soilImprovement:
      'Rotate solanaceous crops (tomato, brinjal, chilli) strictly with legumes or cucurbits to prevent soil-borne bacterial wilt buildup.',
  },
  {
    id: 'pulses',
    name: 'Pulses (Red Gram / Black Gram)',
    season: 'Kharif / Rice-Fallow Rabi',
    soilType: 'Medium to deep loams with good drainage',
    naturalInputs: [
      'Rhizobium culture seed treatment to maximize root nodulation',
      'Phosphate Solubilizing Bacteria (PSB) for stronger pod development',
      'Neemastra or Dashaparni Kashayam spray at bud initiation for pod borer',
      'Bird perches and hand-collection of early larval clusters',
    ],
    compostGuidance:
      'Light application of enriched compost or Ghanajeevamrutham before sowing; avoid excess nitrogen so plants focus on nodulation and pods.',
    soilImprovement:
      'Pulses naturally enrich soil nitrogen for the subsequent cereal crop through deep taproots and fallen leaf litter.',
  },
];

export const INITIAL_SAMPLE_SURVEY_DATA: SurveyEntry[] = [
  {
    id: 'sample-1',
    respondentLabel: 'Sample Farmer A (Placeholder)',
    villageOrMandal: 'Sample Village – Mandal 1',
    primaryCrop: 'Paddy & Black Gram',
    currentPractice: 'Mixed / Transitioning',
    awareOfOrganic: 'Yes',
    mainChallenge: 'Initial yield dip concern during 1st–2nd year transition',
    opinionOnOrganic: 'Interested in reducing chemical input costs via Jeevamrutham and green manure.',
    isSample: true,
    submittedAt: 'Sample Placeholder',
  },
  {
    id: 'sample-2',
    respondentLabel: 'Sample Farmer B (Placeholder)',
    villageOrMandal: 'Sample Village – Mandal 2',
    primaryCrop: 'Groundnut & Millets',
    currentPractice: 'Organic / Natural',
    awareOfOrganic: 'Yes',
    mainChallenge: 'Finding dedicated local buyers offering fair organic price',
    opinionOnOrganic: 'Observed better soil moisture retention during dry spells after mulching.',
    isSample: true,
    submittedAt: 'Sample Placeholder',
  },
  {
    id: 'sample-3',
    respondentLabel: 'Sample Farmer C (Placeholder)',
    villageOrMandal: 'Sample Village – Mandal 3',
    primaryCrop: 'Chilli & Vegetables',
    currentPractice: 'Conventional',
    awareOfOrganic: 'Partially',
    mainChallenge: 'Labor effort in preparing botanical sprays and compost pits',
    opinionOnOrganic: 'Willing to try organic kitchen garden plot if guided by KVK training.',
    isSample: true,
    submittedAt: 'Sample Placeholder',
  },
];

export const INITIAL_ACTIVITY_WEEKS: ActivityWeek[] = [
  {
    week: 1,
    title: 'Topic Selection & Planning',
    focus: 'CSP Problem Identification & Team Roadmap',
    description:
      'Selected "Organic Farming – Sustainable Agriculture for a Healthy Future" after reviewing local agricultural challenges. Defined community survey questions, project milestones, and team responsibilities.',
    hours: 12,
    location: 'College Campus & Planning Desk',
  },
  {
    week: 2,
    title: 'Research & Information Collection',
    focus: 'ICAR, NCOF & APCNF Literature Study',
    description:
      'Collected authentic information from ICAR, FAO, NCOF (PGS-India), and Andhra Pradesh Community-Managed Natural Farming (RySS APCNF) resources on soil biology, biofertilizers, and state schemes.',
    hours: 14,
    location: 'Library & Digital Research',
  },
  {
    week: 3,
    title: 'Understanding Organic Farming Practices',
    focus: 'Composting, Vermicomposting & Natural Inputs Study',
    description:
      'Studied practical preparation of vermicompost pits, green manuring (Dhaincha/Sunnhemp), Beejamrutham seed coating, Jeevamrutham fermentation, and Neem Seed Kernel Extract pest sprays.',
    hours: 15,
    location: 'Local Demonstration Plot / Study Session',
  },
  {
    week: 4,
    title: 'Farmer Interaction & Field Survey',
    focus: 'Field Visit & Community Questionnaire',
    description:
      'Visited nearby agricultural fields to observe cropping patterns and discuss organic farming awareness, input costs, pest challenges, and market access with local farmers. (Update with your actual farm visit notes and photo.)',
    hours: 18,
    location: 'Nearby Agricultural Village (Editable)',
  },
  {
    week: 5,
    title: 'Website Development & Documentation',
    focus: 'Building the Interactive CSP Web Portal',
    description:
      'Designed and built the responsive Organic Farming – Green Future educational dashboard featuring interactive crop guides, editable survey analytics, AgroGuide assistant, and CSP activity documentation.',
    hours: 16,
    location: 'Computer Lab / Development Workspace',
  },
  {
    week: 6,
    title: 'Final Review & Project Presentation',
    focus: 'Verification, Report Compilation & Viva Presentation',
    description:
      'Verified all educational sections, exported survey findings for the CSP record book, tested deployment on static web hosting, and prepared final presentation slides for faculty evaluation.',
    hours: 12,
    location: 'College Seminar Hall',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which of the following is NOT one of IFOAM’s four core principles of organic agriculture?',
    options: [
      'Principle of Health',
      'Principle of Ecology',
      'Principle of Maximum Synthetic Yield',
      'Principle of Care',
    ],
    correctIndex: 2,
    explanation:
      'IFOAM defines four foundational principles: Health, Ecology, Fairness, and Care—emphasizing ecological balance and long-term stewardship over synthetic yield maximization.',
  },
  {
    id: 'q2',
    question: 'In Andhra Pradesh Community-Managed Natural Farming (APCNF), what does "Acchadana" refer to?',
    options: [
      'Seed coating with cow dung and lime',
      'Covering the soil with dry straw or live intercrop mulch',
      'Spraying synthetic nitrogen during flowering',
      'Flooding paddy fields continuously',
    ],
    correctIndex: 1,
    explanation:
      'Acchadana means mulching—covering bare soil with crop residue or live cover crops to conserve moisture, cool topsoil, suppress weeds, and nourish earthworms.',
  },
  {
    id: 'q3',
    question: 'Which biofertilizer is specifically suited for symbiotic nitrogen fixation in pulse crops like green gram and red gram?',
    options: ['Rhizobium', 'Synthetic Urea', 'Copper Oxychloride', 'Gypsum'],
    correctIndex: 0,
    explanation:
      'Rhizobium bacteria form nodules on legume/pulse roots and convert atmospheric nitrogen into plant-usable ammonia.',
  },
  {
    id: 'q4',
    question: 'Why should pre-decomposed organic waste cool down before releasing earthworms into a vermicompost bed?',
    options: [
      'To attract more weeds',
      'Because thermophilic composting heat can harm or kill earthworms',
      'To evaporate all moisture completely',
      'To turn the compost acidic',
    ],
    correctIndex: 1,
    explanation:
      'Fresh manure and waste generate high microbial heat initially; cooling for ~15 days protects earthworms like Eisenia fetida.',
  },
  {
    id: 'q5',
    question: 'What is the main purpose of "Whapasa" in natural farming?',
    options: [
      'Keeping a balanced 50:50 mix of air and water vapor in the root zone',
      'Adding chemical herbicides before sowing',
      'Burning leftover crop stubble after harvest',
      'Increasing flood irrigation depth',
    ],
    correctIndex: 0,
    explanation:
      'Whapasa focuses on soil aeration and optimal moisture vapor rather than waterlogging, helping roots breathe and absorb nutrients efficiently.',
  },
  {
    id: 'q6',
    question: 'Which Indian certification system enables smallholder farmer groups to verify organic practices through peer review?',
    options: ['PGS-India (Participatory Guarantee System)', 'ISO 9001 Factory Audit', 'BIS Hallmark', 'FPO Export Tariff'],
    correctIndex: 0,
    explanation:
      'PGS-India, supported by NCOF and recognized under Jaivik Bharat, allows local farmer groups to peer-verify organic compliance affordably for domestic markets.',
  },
  {
    id: 'q7',
    question: 'Why are green manure crops like Dhaincha or Sunnhemp ploughed into the soil just before flowering?',
    options: [
      'Their stems are succulent, rich in nitrogen, and decompose rapidly',
      'They become woody and stop decomposing',
      'They kill all beneficial earthworms',
      'They turn soil into sand',
    ],
    correctIndex: 0,
    explanation:
      'At the pre-flowering stage, green manure biomass has a favorable Carbon-to-Nitrogen ratio, decomposing smoothly to release nutrients before main crop planting.',
  },
  {
    id: 'q8',
    question: 'How does planting marigold along vegetable or pulse borders assist in natural pest management?',
    options: [
      'It acts as a trap/companion crop that suppresses nematodes and attracts beneficial predators',
      'It replaces the need for water entirely',
      'It converts clay soil into gravel',
      'It acts as a synthetic fungicide',
    ],
    correctIndex: 0,
    explanation:
      'Marigold root exudates help reduce root-knot nematodes, while its bright flowers attract hoverflies and distract pests away from the main crop.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Basics',
    question: 'What is the difference between Organic Farming and Natural Farming (APCNF)?',
    answer:
      'Both avoid synthetic chemical fertilizers and pesticides. Conventional certified organic farming often uses external organic inputs like purchased vermicompost, oil cakes, and biofertilizers, whereas APCNF (Natural Farming) emphasizes zero external purchased inputs by stimulating native soil microbes using on-farm cow-based cultures (Jeevamrutham, Beejamrutham) and permanent mulching.',
  },
  {
    id: 'faq-2',
    category: 'Transition',
    question: 'Why do farmers sometimes notice a temporary yield dip when switching from chemical to organic farming?',
    answer:
      'Years of heavy synthetic fertilizer use can reduce native microbial populations and soil humus. During the 1–3 year transition period, soil biology is rebuilding. Combining green manure, compost, biofertilizers, and crop rotation helps stabilize yields smoothly.',
  },
  {
    id: 'faq-3',
    category: 'Certification',
    question: 'How can small farmers get organic certification in India without high fees?',
    answer:
      'Smallholders can join a local cluster under PGS-India (Participatory Guarantee System) facilitated by NCOF and state agriculture departments or PKVY clusters. Group peer verification reduces individual paperwork and certification costs.',
  },
  {
    id: 'faq-4',
    category: 'CSP Project',
    question: 'Are the survey figures shown in the Survey tab real interviews?',
    answer:
      'By default, the Survey tab contains 3 clearly labelled Sample Placeholder entries so the dashboard demonstrates how responses are summarized. Students should clear or edit those entries and record actual responses collected during their real farm visits.',
  },
  {
    id: 'faq-5',
    category: 'Andhra Pradesh',
    question: 'Which organization leads Community-Managed Natural Farming in Andhra Pradesh?',
    answer:
      'Rythu Sadhikara Samstha (RySS), a non-profit organization established by the Government of Andhra Pradesh, coordinates APCNF in partnership with women Self-Help Groups (SHGs) and local Champion Farmers.',
  },
  {
    id: 'faq-6',
    category: 'Hosting',
    question: 'Can this Community Service Project website be hosted for free without any backend server?',
    answer:
      'Yes. Every interactive feature—search, Interactive Farming Guide, Editable Survey Log, 6-Week Activity Editor, Knowledge Quiz, and AgroGuide chatbot—runs 100% in the browser using React and localStorage, making it ready for free static hosting on GitHub Pages or Netlify.',
  },
];
