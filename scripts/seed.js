require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const adminSchema = new mongoose.Schema({ email: { type: String, unique: true }, passwordHash: String }, { timestamps: true });
const serviceSchema = new mongoose.Schema({ title: String, description: String, icon: String }, { timestamps: true });
const projectSchema = new mongoose.Schema({ title: String, description: String, tech: [String], url: String }, { timestamps: true });
const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
(async () => {
  if (!process.env.MONGODB_URI || !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) throw new Error('Missing .env.local values');
  await mongoose.connect(process.env.MONGODB_URI);
  await Admin.deleteMany({}); await Service.deleteMany({}); await Project.deleteMany({});
  await Admin.create({ email: process.env.ADMIN_EMAIL, passwordHash: await bcrypt.hash(process.env.ADMIN_PASSWORD, 12) });
  await Service.insertMany(['API Architecture','MongoDB Systems','Admin Dashboards'].map(title => ({ title, description: 'Premium backend development service.' })));
  await Project.insertMany([{ title: 'Analytics API', description: 'Fictional demo project.', tech: ['Next.js','MongoDB'] }, { title: 'Agency CRM', description: 'Fictional demo project.', tech: ['Node.js','JWT'] }]);
  console.log('EWAX UI seed completed'); process.exit();
})();
