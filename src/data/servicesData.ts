import { Plane, Ship, FileCheck, Network, Globe, Warehouse, LucideIcon } from "lucide-react";

export type ServiceType = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: LucideIcon;
  heroImage: string;
  keyFeaturesTitle?: string;
  keyFeatures: string[];
  timelineTitle?: string;
  timeline?: string[];
  gallery: string[];
};

export const servicesData: ServiceType[] = [
  {
    id: "international-courier",
    title: "International Courier Services",
    shortDescription: "Fast and reliable international courier services through strategic partnerships.",
    fullDescription: [
      "Rajomz Global Ventures provides reliable international courier solutions connecting businesses and individuals across major global destinations. Through our expanding logistics network and strategic courier partnerships, we ensure secure, timely, and cost-effective parcel movement between India, the UK, Europe, the Middle East, and other international markets.",
      "Whether it is commercial shipments, documents, samples, or business consignments, our services are designed to provide transparency, reliability, and peace of mind."
    ],
    icon: Plane,
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop", // Cargo aircraft
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Worldwide courier network",
      "Express & economy shipping",
      "Real-time shipment tracking",
      "Customs documentation assistance",
      "Secure packaging guidance",
      "Business parcel solutions"
    ],
    timelineTitle: "Process Timeline",
    timeline: [
      "Booking",
      "Pickup",
      "Customs Clearance",
      "Air Transit",
      "Destination Processing",
      "Final Delivery"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop", // Cargo aircraft
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop", // DHL style sorting
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c1562b?q=80&w=800&auto=format&fit=crop", // Courier delivery
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop", // Cargo terminal
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop"  // Delivery van
    ]
  },
  {
    id: "freight-logistics",
    title: "Freight & Logistics Solutions",
    shortDescription: "Comprehensive freight solutions tailored for your evolving business needs.",
    fullDescription: [
      "Rajomz Global Ventures delivers efficient freight management solutions for businesses seeking dependable domestic and international cargo movement. We coordinate shipments through trusted logistics partners while optimizing transportation costs, delivery timelines, and operational efficiency.",
      "Our growing logistics ecosystem enables businesses to move goods confidently across multiple international trade routes."
    ],
    icon: Ship,
    heroImage: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2000&auto=format&fit=crop", // Aerial container terminal
    keyFeaturesTitle: "Services",
    keyFeatures: [
      "Air Freight",
      "Ocean Freight",
      "Road Transportation",
      "Warehouse Coordination",
      "Cargo Consolidation",
      "Freight Documentation"
    ],
    timelineTitle: "Advantages",
    timeline: [
      "Reduced logistics cost",
      "Reliable freight coordination",
      "Scalable shipping capacity",
      "Dedicated customer support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c1562b?q=80&w=800&auto=format&fit=crop", // Containers
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=800&auto=format&fit=crop", // Ships
      "https://images.unsplash.com/photo-1586528116493-a02822a1ceab?q=80&w=800&auto=format&fit=crop", // Warehouse
      "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=800&auto=format&fit=crop", // Cargo cranes
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"  // Freight trucks
    ]
  },
  {
    id: "import-export",
    title: "Import & Export Support",
    shortDescription: "Expert assistance and processing for seamless global trade operations.",
    fullDescription: [
      "International trade requires careful planning and compliance. Rajomz assists businesses by simplifying import and export logistics through documentation guidance, shipment coordination, customs support, and partner collaboration.",
      "We help businesses expand into international markets with confidence."
    ],
    icon: FileCheck,
    heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop", // Logistics containers truck
    keyFeaturesTitle: "Support Includes",
    keyFeatures: [
      "Export documentation",
      "Import coordination",
      "Customs guidance",
      "Shipment scheduling",
      "Trade compliance assistance",
      "International partner coordination"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565893322197-761e25e93dc4?q=80&w=800&auto=format&fit=crop", // Customs inspection
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop", // Cargo truck
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop", // Shipping containers
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", // Trade doc
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"  // Intl ports
    ]
  },
  {
    id: "b2b-partnerships",
    title: "B2B Logistics Partnerships",
    shortDescription: "Strategic Business-to-Business logistics and supply chain collaborations.",
    fullDescription: [
      "Rajomz Global Ventures is actively building strategic partnerships with courier operators, freight forwarders, distributors, and logistics providers worldwide. Our objective is to create long-term relationships that benefit all stakeholders through efficient logistics operations and shared growth opportunities."
    ],
    icon: Network,
    heroImage: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2000&auto=format&fit=crop", // Business meeting
    keyFeaturesTitle: "Partnership Opportunities",
    keyFeatures: [
      "Courier Partnerships",
      "Freight Partnerships",
      "Distribution Networks",
      "Regional Logistics Alliances",
      "International Expansion",
      "Long-term Business Collaboration"
    ],
    timelineTitle: "Why Partner With Rajomz",
    timeline: [
      "Growing customer base",
      "Strong regional business connections",
      "Expansion-focused strategy",
      "Long-term collaboration approach"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", // Corporate meetings
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", // Handshake
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", // Logistics planning
      "https://images.unsplash.com/photo-1559136555-9ce7b5fda016?q=80&w=800&auto=format&fit=crop", // Business conference
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"  // Team collaboration
    ]
  },
  {
    id: "trade-routes",
    title: "India–UK & Europe Trade Routes",
    shortDescription: "Specialized trade routes connecting India with the UK and European markets.",
    fullDescription: [
      "Rajomz specializes in facilitating logistics between India, the United Kingdom, and Europe. Our expanding network allows businesses to access reliable transportation channels for imports, exports, courier shipments, and commercial freight.",
      "We are continuously strengthening partnerships across these markets to improve efficiency and reduce transit complexity."
    ],
    icon: Globe,
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop", // Map/route
    keyFeaturesTitle: "Coverage",
    keyFeatures: [
      "India",
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Italy",
      "Ireland",
      "Other European destinations"
    ],
    timelineTitle: "Benefits",
    timeline: [
      "Faster logistics coordination",
      "Established partner network",
      "Cost-effective freight planning",
      "Reliable international operations"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1494412552100-42e4e7a74ec6?q=80&w=800&auto=format&fit=crop", // Europe hub
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop", // Map
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", // Airport
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=800&auto=format&fit=crop", // Ocean freight
      "https://images.unsplash.com/photo-1586528116493-a02822a1ceab?q=80&w=800&auto=format&fit=crop"  // Distribution
    ]
  },
  {
    id: "supply-chain",
    title: "Supply Chain Coordination",
    shortDescription: "End-to-end management and coordination of global supply chains.",
    fullDescription: [
      "Rajomz supports businesses by coordinating supply chain activities through trusted logistics partners and efficient operational planning. Our objective is to streamline movement, reduce delays, improve visibility, and strengthen overall logistics performance."
    ],
    icon: Warehouse,
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1562b?q=80&w=2000&auto=format&fit=crop", // Modern warehouse
    keyFeaturesTitle: "Capabilities",
    keyFeatures: [
      "Inventory coordination",
      "Shipment planning",
      "Warehouse collaboration",
      "Vendor communication",
      "Delivery scheduling",
      "Logistics optimization"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565893322197-761e25e93dc4?q=80&w=800&auto=format&fit=crop", // Automation
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop", // Inventory
      "https://images.unsplash.com/photo-1622322301334-77ab36a8933e?q=80&w=800&auto=format&fit=crop", // Scanner
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Software
      "https://images.unsplash.com/photo-1586528116493-a02822a1ceab?q=80&w=800&auto=format&fit=crop"  // Distribution Center
    ]
  }
];
