const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const commader = await prisma.explorer.upsert({
      where: { name: 'Commander' },
      update: {},
      create: {
        name: 'Commander',
				missionCommander: 'Node',
        enrollment: 'Woopa'
      },
    });
    const commander1 = await prisma.explorer.upsert({
      where: { name: 'Commander1' },
      update: {},
      create: {
        name: 'Commander1',
				missionCommander: 'JavaScript',
        enrollment: 'Woopa'
      },
    });
    const Commander2 = await prisma.explorer.upsert({
      where: { name: 'Commander2' },
      update: {},
      create: {
        name: 'Commander2',
				missionCommander: 'Network',
        enrollment: 'Woopa'
      },
    });

    console.log('Create 3 commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();