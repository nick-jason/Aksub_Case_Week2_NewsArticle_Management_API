import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const news = await prisma.news.createMany({
    data: [
        {
            title: "The Future of Quantum Computing",
            content: "Exploring how qubits are set to redefine the limits of modern processing power and cryptography.",
            writer: "Dr. Aris Thorne",
            thumbnail: "quantum.jpg",
            publishedStatus: false,
        },
        {
            title: "AI in Healthcare: A New Era",
            content: "Artificial intelligence is transforming diagnostics, drug discovery, and patient care worldwide.",
            writer: "Dr. Maya Patel",
            thumbnail: "ai-health.jpg",
            publishedStatus: true,
        },
        {
            title: "Climate Change and Renewable Energy",
            content: "How solar and wind power are becoming the backbone of the global energy transition.",
            writer: "James Hartwell",
            thumbnail: "renewable.jpg",
            publishedStatus: false,
        },
        {
            title: "The Rise of Electric Vehicles",
            content: "EV adoption is accelerating globally as battery technology improves and prices drop.",
            writer: "Sara Nguyen",
            thumbnail: "ev.jpg",
            publishedStatus: false,
        },
        {
            title: "Cybersecurity in the Age of AI",
            content: "As AI becomes more powerful, so do the threats it enables — and the defenses it can provide.",
            writer: "Kevin Black",
            thumbnail: "cyber.jpg",
            publishedStatus: true,
        },
        {
            title: "Space Tourism: The Next Frontier",
            content: "Private companies are making space travel a reality for civilians, not just astronauts.",
            writer: "Elena Marsh",
            thumbnail: "space.jpg",
            publishedStatus: true,
        },
        {
            title: "Blockchain Beyond Cryptocurrency",
            content: "From supply chains to voting systems, blockchain is finding new applications every day.",
            writer: "Dr. Aris Thorne",
            thumbnail: "blockchain.jpg",
            publishedStatus: false,
        },
        {
            title: "The Mental Health Crisis in Tech",
            content: "High-pressure work environments in the tech industry are fueling a surge in burnout and anxiety.",
            writer: "Lisa Monroe",
            thumbnail: "mental-health.jpg",
            publishedStatus: true,
        },
        {
            title: "5G and the Internet of Things",
            content: "Ultra-fast 5G networks are enabling a new wave of connected devices and smart infrastructure.",
            writer: "Tom Reeves",
            thumbnail: "5g.jpg",
            publishedStatus: true,
        },
        {
            title: "The Ethics of Artificial Intelligence",
            content: "As AI systems grow more capable, questions of bias, accountability, and fairness become urgent.",
            writer: "Dr. Maya Patel",
            thumbnail: "ai-ethics.jpg",
            publishedStatus: false,
        },
    ]
  })
  console.log({news});
}
main()
  .catch((error) => {
        console.error("Seed failed:", error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })