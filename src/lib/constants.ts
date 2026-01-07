// WhatsApp Configuration
// Replace with your actual WhatsApp number (format: country code + number, no + or spaces)
export const WHATSAPP_LINK = "https://wa.me/9611234567"; // Example: Lebanon +961

// Best Sellers Data
export interface BestSeller {
  id: string;
  name: string;
  description: string;
  image: string; // Path to image in public folder
  price?: string;
}

export const bestSellers: BestSeller[] = [
  {
    id: "1",
    name: "Classic Heritage",
    description: "Timeless elegance meets modern precision",
    image: "/watches/watch-1.jpg",
    price: "$2,850",
  },
  {
    id: "2",
    name: "Luxury Chronograph",
    description: "Sophisticated design with exceptional craftsmanship",
    image: "/watches/watch-2.jpg",
    price: "$4,200",
  },
  {
    id: "3",
    name: "Elite Collection",
    description: "Exclusive timepiece for the discerning collector",
    image: "/watches/watch-3.jpg",
    price: "$5,500",
  },
  {
    id: "4",
    name: "Modern Classic",
    description: "Contemporary style with traditional excellence",
    image: "/watches/watch-4.jpg",
    price: "$3,100",
  },
  {
    id: "5",
    name: "Premium Diver",
    description: "Robust construction for the adventurous spirit",
    image: "/watches/watch-5.jpg",
    price: "$3,800",
  },
  {
    id: "6",
    name: "Executive Series",
    description: "Refined elegance for the modern professional",
    image: "/watches/watch-6.jpg",
    price: "$2,950",
  },
];

// Contact Information
export const contactInfo = {
  address: "123 Luxury Avenue, Beirut, Lebanon",
  hours: "Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: 12:00 PM - 6:00 PM",
  phone: "+961 1 234 567",
  email: "info@wristbeirut.com",
};

// Google Maps Embed URL
// Replace with your actual Google Maps embed URL or coordinates
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1234567890!2d35.501234!3d33.893789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzM3LjYiTiAzNcKwMzAnMDQuNCJF!5e0!3m2!1sen!2slb!4v1234567890123!5m2!1sen!2slb";

