'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function MimSection() {
  const handleScrollToSection = (sectionId: string) => {
    const event = new CustomEvent('scroll-to-section', {
      detail: { targetId: sectionId },
    });
    window.dispatchEvent(event);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#' + sectionId);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="mim"
      className="scroll-mt-20 py-12 lg:py-20 relative overflow-hidden bg-gradient-to-b from-blue-50/20 via-transparent to-transparent dark:from-slate-950/40 dark:via-slate-900/20 dark:to-transparent z-10"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#40A4D6]/10 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6EC482]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ========================================================================= */}
        {/* SECTION 1 - HERO */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden glass-card shadow-xl border border-slate-200/10">
          <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[21/7.5] lg:aspect-[21/7]">
            <Image
              src="/images/gallery_injection_molding_v2.jpg"
              alt="Metal Injection Moulding Machinery"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Text & Button Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent dark:from-slate-950/95 dark:via-slate-950/75 dark:to-transparent flex items-center py-6 sm:py-8 lg:py-10">
            <div className="max-w-xl md:max-w-2xl px-6 md:px-12 space-y-4 md:space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-blue/10 dark:bg-primary-green/10 text-primary-blue dark:text-primary-green text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                New Manufacturing Capability
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
                METAL INJECTION MOULDING (MIM)
              </h2>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-primary-blue dark:text-primary-green leading-snug">
                Where Injection Moulding Expertise Meets Metallurgical Innovation.
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-text-light dark:text-slate-300 font-light max-w-md leading-relaxed">
                Precision Components. Complex Geometries. Advanced Manufacturing.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <button
                  onClick={() => handleScrollToSection('mim-foundation')}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary-blue to-primary-green hover:from-primary-green hover:to-primary-blue text-white font-bold text-[10px] md:text-xs tracking-wider rounded-xl uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-primary-blue/20 dark:shadow-primary-green/10 cursor-pointer"
                >
                  Explore Solution
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 — OUR FOUNDATION */}
        {/* ========================================================================= */}
        <div id="mim-foundation" className="scroll-mt-24 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-primary-blue dark:text-primary-green font-semibold text-sm tracking-wider uppercase">
                <Layers className="w-5 h-5" />
                Our Foundation
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
                25+ YEARS OF MOULDING EXPERIENCE. A NEW DIRECTION IN ADVANCED MANUFACTURING.
              </h3>
              <div className="space-y-4 text-text-light dark:text-slate-300 font-light leading-relaxed text-sm">
                <p>
                  SV Closures Private Limited is expanding its manufacturing and technology development capabilities towards advanced precision component manufacturing.
                </p>
                <p>
                  By combining 25+ years of injection moulding experience with our understanding of metallurgy and metal processing, we are building a strong foundation for the development of Metal Injection Moulding technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden glass-card shadow-xl border border-slate-200/10"
            >
              <Image
                src="/images/gallery_milacron_molds.jpg"
                alt="Precision Tooling and Moulds"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Foundation highlight cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary-blue/20 dark:hover:shadow-primary-green/20 p-[1px] bg-gradient-to-b from-primary-blue/15 to-primary-green/15 hover:from-primary-blue/35 hover:to-primary-green/35 duration-300"
            >
              <div className="bg-white/90 dark:bg-slate-900/90 rounded-[23px] p-6 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h4 className="text-3xl font-extrabold text-primary-blue dark:text-primary-green">25+ YEARS</h4>
                  <p className="text-sm font-semibold tracking-wider uppercase text-text-dark dark:text-white">Injection Moulding Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary-blue/20 dark:hover:shadow-primary-green/20 p-[1px] bg-gradient-to-b from-primary-blue/15 to-primary-green/15 hover:from-primary-blue/35 hover:to-primary-green/35 duration-300"
            >
              <div className="bg-white/90 dark:bg-slate-900/90 rounded-[23px] p-6 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h4 className="text-3xl font-extrabold text-primary-blue dark:text-primary-green">ISO 9001:2015</h4>
                  <p className="text-sm font-semibold tracking-wider uppercase text-text-dark dark:text-white">Quality Management System</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary-blue/20 dark:hover:shadow-primary-green/20 p-[1px] bg-gradient-to-b from-primary-blue/15 to-primary-green/15 hover:from-primary-blue/35 hover:to-primary-green/35 duration-300"
            >
              <div className="bg-white/90 dark:bg-slate-900/90 rounded-[23px] p-6 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h4 className="text-2xl font-extrabold text-primary-blue dark:text-primary-green">PRECISION + METALLURGY</h4>
                  <p className="text-sm font-semibold tracking-wider uppercase text-text-dark dark:text-white">A Combined Manufacturing Foundation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 — WHAT IS METAL INJECTION MOULDING? */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary-blue dark:text-primary-green font-semibold text-sm tracking-wider uppercase">
              <Cpu className="w-5 h-5" />
              Technology Overview
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
              FROM METAL POWDER TO PRECISION COMPONENT.
            </h3>
            <p className="text-base text-text-light dark:text-slate-300 font-light leading-relaxed">
              Metal Injection Moulding combines the design flexibility of injection moulding with the material properties of metals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            {/* Visual illustration box representing mixing -> moulding -> sintering */}
            <div className="relative glass-card rounded-3xl p-8 border border-primary-blue/15 dark:border-primary-green/15 shadow-xl bg-gradient-to-b from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-900/40 p-[1px] bg-gradient-to-b from-primary-blue/10 to-primary-green/10">
              <div className="bg-white/90 dark:bg-slate-900/90 rounded-[23px] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.1))] -z-10 opacity-30 dark:opacity-10" />
                <div className="flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-primary-blue/10 dark:bg-primary-blue/20 flex items-center justify-center text-primary-blue font-bold">1</div>
                    <span className="text-xs font-bold tracking-wider text-text-dark dark:text-white uppercase">Metal Powder</span>
                  </div>
                  <div className="text-slate-300 font-bold text-2xl hidden sm:block">+</div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-primary-green/10 dark:bg-primary-green/20 flex items-center justify-center text-primary-green font-bold">2</div>
                    <span className="text-xs font-bold tracking-wider text-text-dark dark:text-white uppercase">Injection Moulding</span>
                  </div>
                  <div className="text-slate-300 font-bold text-2xl hidden sm:block">=</div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-blue to-primary-green flex items-center justify-center text-white font-bold">3</div>
                    <span className="text-xs font-bold tracking-wider text-text-dark dark:text-white uppercase">Precision Metal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4 — WHY MIM? */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-primary-blue dark:text-primary-green font-semibold text-sm tracking-wider uppercase">
              <Zap className="w-5 h-5" />
              MIM Advantages
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
              COMPLEXITY. PRECISION. POSSIBILITY.
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'Complex Geometries', desc: 'Designed for intricate component features.' },
              { title: 'High Precision', desc: 'Potential for excellent repeatability in validated processes.' },
              { title: 'Near-Net Shape', desc: 'Reduced requirement for secondary machining where technically suitable.' },
              { title: 'Component Consolidation', desc: 'Multiple features may be integrated into a single component.' },
              { title: 'Material Possibilities', desc: 'Suitable metal systems based on application and feasibility.' },
              { title: 'Scalable Manufacturing', desc: 'Suitable for repeat production of technically appropriate components.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative glass-card rounded-3xl overflow-hidden flex flex-col p-[1px] bg-gradient-to-b from-primary-blue/10 to-primary-green/10 hover:from-primary-blue/30 hover:to-primary-green/30 duration-300"
              >
                <div className="bg-white/95 dark:bg-slate-900/95 rounded-[23px] p-6 space-y-3 flex-grow flex flex-col justify-start">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-blue dark:text-primary-green text-lg font-bold">◉</span>
                    <h4 className="text-base font-bold text-text-dark dark:text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-text-light dark:text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5 — WHY SV CLOSURES? */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
              TWO MANUFACTURING WORLDS. ONE TECHNOLOGY.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual flow diagram representing relationship */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl glass-card border border-primary-blue/15 dark:border-primary-green/15"
            >
              <div className="w-full space-y-6 flex flex-col items-center text-center">
                <div className="px-4 py-3 rounded-2xl bg-primary-blue/10 dark:bg-primary-blue/20 border border-primary-blue/20 text-text-dark dark:text-white font-bold text-xs sm:text-sm tracking-wider uppercase w-full">
                  INJECTION MOULDING EXPERIENCE
                </div>
                
                <div className="text-slate-400 font-bold text-xl">+</div>

                <div className="px-4 py-3 rounded-2xl bg-primary-blue/10 dark:bg-primary-blue/20 border border-primary-blue/20 text-text-dark dark:text-white font-bold text-xs sm:text-sm tracking-wider uppercase w-full">
                  METALLURGICAL UNDERSTANDING
                </div>

                <div className="text-primary-green font-bold text-2xl animate-bounce">↓</div>

                <div className="px-5 py-4 rounded-2xl bg-gradient-to-r from-primary-blue to-primary-green text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase w-full shadow-lg">
                  A STRONG FOUNDATION FOR MIM DEVELOPMENT
                </div>
              </div>
            </motion.div>

            {/* List of 6 points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-4"
            >
              {[
                '25+ Years of Injection Moulding Experience',
                'Expertise in Moulding & Process Development',
                'Metallurgical Understanding & Unit 2 Operations',
                'Located in Rajkot\'s Engineering & Investment Casting Ecosystem',
                'ISO 9001:2015 Certified',
                'Development-Oriented Manufacturing Approach',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/40 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-primary-green/10 dark:bg-primary-green/20 flex items-center justify-center text-primary-green shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-text-dark dark:text-slate-300">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6 — APPLICATIONS */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-primary-blue dark:text-primary-green font-semibold text-sm tracking-wider uppercase">
              <Activity className="w-5 h-5" />
              Target Sectors
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
              ENGINEERED FOR DEMANDING APPLICATIONS.
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { emoji: '🚗', name: 'AUTOMOTIVE' },
              { emoji: '🏭', name: 'INDUSTRIAL EQUIPMENT' },
              { emoji: '⚡', name: 'ELECTRICAL & ELECTRONICS' },
              { emoji: '🔬', name: 'MEDICAL & SURGICAL*' },
              { emoji: '✈️', name: 'AEROSPACE & DEFENCE*' },
              { emoji: '⚙️', name: 'INSTRUMENTATION' },
            ].map((app, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative glass-card rounded-3xl overflow-hidden flex flex-col p-[1px] bg-gradient-to-b from-primary-blue/10 to-primary-green/10 hover:from-primary-blue/30 hover:to-primary-green/30 duration-300"
              >
                <div className="bg-white/95 dark:bg-slate-900/95 rounded-[23px] p-5 text-center flex flex-col items-center justify-center gap-3 aspect-square">
                  <span className="text-3xl sm:text-4xl" role="img" aria-label={app.name.toLowerCase()}>
                    {app.emoji}
                  </span>
                  <h4 className="text-[10px] sm:text-xs font-extrabold text-text-dark dark:text-white tracking-wider leading-tight uppercase">
                    {app.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 7 — CUSTOM TESTING SYSTEMS */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-primary-blue dark:text-primary-green font-semibold text-sm tracking-wider uppercase">
                <ShieldCheck className="w-5 h-5" />
                Quality Assurance
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-dark dark:text-white uppercase leading-tight">
                YOUR COMPONENT. YOUR REQUIREMENT. YOUR TESTING APPROACH.
              </h3>
              <div className="space-y-4 text-text-light dark:text-slate-300 font-light leading-relaxed text-sm">
                <p>
                  Not every component can be evaluated using a standard test.
                </p>
                <p>
                  Based on functional requirements, we can evaluate and develop application-specific testing and validation systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4"
            >
              <h4 className="text-xs sm:text-sm font-extrabold text-text-dark dark:text-white tracking-widest uppercase mb-2">
                Testing possibilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Dimensional Verification',
                  'Functional Testing',
                  'Load & Strength Testing',
                  'Hardness / Density Evaluation',
                  'Material & Chemical Compatibility',
                  'Endurance Testing',
                  'Custom Test Fixtures',
                ].map((possibility, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/40 dark:bg-slate-900/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/80">
                    <span className="text-primary-blue dark:text-primary-green text-sm">✔</span>
                    <span className="text-xs font-semibold text-text-dark dark:text-slate-300 leading-snug">
                      {possibility}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Lab context images reuse */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { src: '/images/testing_chemical_v2.jpg', alt: 'Material & Chemical Compatibility', label: 'Material & Chemical Compatibility', fit: 'object-cover' },
              { src: '/images/testing_vacuum_v2.jpg', alt: 'Functional & Leak Testing', label: 'Functional Testing', fit: 'object-contain bg-slate-50 dark:bg-slate-950/40' },
              { src: '/images/testing_torque_v2.jpg', alt: 'Load & Strength Testing', label: 'Load & Strength Testing', fit: 'object-contain bg-slate-50 dark:bg-slate-950/40' },
            ].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] glass-card border border-slate-200/10 shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`${img.fit} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white tracking-wide uppercase">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 8 — CONTACT US */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden glass-card p-[1px] bg-gradient-to-b from-primary-blue/20 to-primary-green/20 hover:from-primary-blue/40 hover:to-primary-green/40 duration-500 shadow-2xl"
        >
          <div className="bg-white/95 dark:bg-slate-950/95 rounded-[23px] px-8 py-12 text-center space-y-6 relative overflow-hidden">
            {/* Grid backdrop */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.1))] -z-10 opacity-30 dark:opacity-10" />
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary-green/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-dark dark:text-white uppercase">
              HAVE A COMPLEX COMPONENT IN MIND?
            </h3>
            <p className="text-sm text-text-light dark:text-slate-400 font-light max-w-xl mx-auto">
              {"LET'S EXPLORE THE RIGHT MANUFACTURING SOLUTION."}
            </p>
            <div className="flex justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScrollToSection('contact')}
                className="flex items-center gap-1.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-blue to-primary-green hover:from-primary-green hover:to-primary-blue text-white text-sm font-bold tracking-wider uppercase shadow-lg shadow-primary-blue/20 dark:shadow-primary-green/10 hover:shadow-xl transition-all duration-300 btn-shine group cursor-pointer"
              >
                CONTACT US
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
