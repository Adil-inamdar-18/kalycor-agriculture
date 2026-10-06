/**
 * EDITABLE SITE CONTENT.
 * Anything marked `placeholder: true` has NOT been supplied by the client and
 * must be replaced before launch. No statistics, clients, certifications or
 * product specifications are invented here.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalycoragriculture.com";
export const SHOW_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false";

export const site = {
  name: "Kalycor Agriculture",
  group: "Kalycor",
  tagline: "From seed to harvest, growing possibilities.",
  description:
    "Kalycor Agriculture focuses on agricultural products and the complete crop lifecycle, from seed to distribution.",
  contact: {
    phone: "+00 000 000 0000",
    email: "hello@kalycoragriculture.com",
    location: "Business address to be confirmed",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Agriculture Products", href: "/products" },
      { label: "Seeds", href: "/seeds" },
      { label: "Agricultural Solutions", href: "/solutions" },
    ],
  },
  {
    label: "Lifecycle",
    href: "/crop-lifecycle",
    children: [
      { label: "Crop Lifecycle", href: "/crop-lifecycle" },
      { label: "Our Process", href: "/process" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const businesses = [
  { name: "Kalycor Agriculture", href: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalycoragriculture.com", current: true, blurb: "Seeds, products and the crop lifecycle." },
  { name: "Kalycor Real Estate", href: process.env.NEXT_PUBLIC_REAL_ESTATE_URL ?? "https://kalycorrealestate.com", blurb: "Buy, sell, invest and manage property." },
  { name: "Kalycor Import & Export", href: process.env.NEXT_PUBLIC_IMPORT_EXPORT_URL ?? "https://kalycorexport.com", blurb: "Products connected to markets." },
  { name: "Kalycor Services", href: process.env.NEXT_PUBLIC_SERVICES_URL ?? "https://kalycorservices.com", blurb: "Security and commercial services." },
];

/** The nine lifecycle stages from the brief. Descriptions are generic and editable. */
export const lifecycle = [
  { id: "seed", name: "Seed", text: "Every crop starts with a seed. This is where quality planning begins.", focus: "Seed selection and sourcing" },
  { id: "soil", name: "Soil preparation", text: "The field is prepared so the seed has the right conditions to start.", focus: "Land and soil readiness" },
  { id: "sowing", name: "Sowing", text: "Seed goes into the ground at the right time and in the right way.", focus: "Planting method and timing" },
  { id: "germination", name: "Germination", text: "The seed wakes up, roots down and pushes its first shoot into the light.", focus: "Early establishment" },
  { id: "growth", name: "Crop growth", text: "The plant builds leaf, stem and strength through the growing season.", focus: "Monitoring through the season" },
  { id: "care", name: "Crop care", text: "Ongoing attention keeps the crop healthy as it develops.", focus: "Crop health and protection" },
  { id: "harvest", name: "Harvest", text: "The crop is gathered when it is ready, with care for quality.", focus: "Harvest planning and handling" },
  { id: "processing", name: "Processing", text: "Harvested produce is cleaned, sorted and prepared.", focus: "Preparation and quality checks" },
  { id: "distribution", name: "Distribution", text: "Finished products move from the field to the people who need them.", focus: "Getting product to customers" },
];

export const productCategories = [
  { title: "Product category one", text: "Add a short description of this product group once the catalogue is confirmed." },
  { title: "Product category two", text: "Add a short description of this product group once the catalogue is confirmed." },
  { title: "Product category three", text: "Add a short description of this product group once the catalogue is confirmed." },
  { title: "Product category four", text: "Add a short description of this product group once the catalogue is confirmed." },
  { title: "Product category five", text: "Add a short description of this product group once the catalogue is confirmed." },
  { title: "Product category six", text: "Add a short description of this product group once the catalogue is confirmed." },
];

export const seedCategories = [
  { title: "Seed category one", text: "Describe this seed range. Varieties will be listed here once the client provides them." },
  { title: "Seed category two", text: "Describe this seed range. Varieties will be listed here once the client provides them." },
  { title: "Seed category three", text: "Describe this seed range. Varieties will be listed here once the client provides them." },
  { title: "Seed category four", text: "Describe this seed range. Varieties will be listed here once the client provides them." },
];

export const solutions = [
  { title: "Crop lifecycle support", text: "Help at the stages of the crop journey that matter to your operation." },
  { title: "Product supply", text: "Agricultural products supplied against your requirements." },
  { title: "Seed supply", text: "Seed sourcing and supply matched to what you plan to grow." },
  { title: "Advisory", text: "Practical guidance. Confirm the exact advisory scope with the client before publishing." },
];

export const why = [
  { title: "Quality", text: "Editable: describe the quality standards the business actually follows." },
  { title: "Reliability", text: "Editable: describe how orders and communication are handled." },
  { title: "Agricultural expertise", text: "Editable: add real experience and team background once confirmed." },
  { title: "Product focus", text: "Editable: explain the product range and what the business concentrates on." },
  { title: "Customer support", text: "Editable: explain how customers reach the team and what to expect." },
];

export const sustainability = [
  { title: "Responsible agriculture", text: "Editable: describe the responsible practices the business follows." },
  { title: "Resource efficiency", text: "Editable: describe how water, land and inputs are used with care." },
  { title: "Sustainable practices", text: "Editable: list practices only once the client confirms them." },
  { title: "Quality", text: "Editable: describe how quality is protected from field to customer." },
];

export const processSteps = [
  { title: "Understand the requirement", text: "We start with what you need to grow, supply or source." },
  { title: "Plan the crop journey", text: "We map the stages from seed to distribution that apply to you." },
  { title: "Source and prepare", text: "Seeds, products and inputs are arranged for the plan." },
  { title: "Support through the season", text: "We stay in contact while the crop develops." },
  { title: "Harvest and process", text: "Produce is gathered and prepared with quality in mind." },
  { title: "Deliver", text: "Finished product reaches the customer." },
];
