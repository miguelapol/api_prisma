const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const commander = await prisma.commander.upsert({
      where: { name: 'Commander' },
      update: {},
      create: {
        name: 'Commander',
				missionCommander: 'Node',
        enrollments: 'Woopa'
      },
    });
    const commander1 = await prisma.commander.upsert({
      where: { name: 'Commander1' },
      update: {},
      create: {
        name: 'Commander1',
				missionCommander: 'JavaScript',
        enrollments: 'Woopa'
      },
    });
    const commander2 = await prisma.commander.upsert({
      where: { name: 'Commander2' },
      update: {},
      create: {
        name: 'Commander2',
				missionCommander: 'Network',
        enrollments: 'Woopa'
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