import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: '08b23b39-3a38-4912-b536-5de6cda6dabb',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados(as) por código!',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})