'use client';

import React, {useState} from 'react';
import {content, skills, LangType} from './data';

export default function Portfolio() {
    const [lang, setLang] = useState<LangType>('en');
    const t = content[lang];

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'hu' : 'en');
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">

            <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-black text-slate-900 tracking-tighter cursor-pointer"
                         onClick={() => window.scrollTo(0, 0)}>
                        {t.nav.title}<span className="text-blue-600">{t.nav.titleHighlight}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition text-xs font-bold uppercase tracking-wider bg-white"
                        >
                            <span>{lang === 'en' ? '🇭🇺' : '🇺🇸'}</span>
                            {lang === 'en' ? 'HU' : 'EN'}
                        </button>
                        <a href={`mailto:${t.contactInfo.email}`}
                           className="hidden md:block px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition font-medium text-sm shadow-lg shadow-slate-300 hover:shadow-blue-200">
                            {t.nav.contactBtn}
                        </a>
                    </div>
                </div>
            </nav>

            <header className="relative pt-40 pb-32 px-6 overflow-hidden bg-slate-900">

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div
                        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
                    <div
                        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
                    <div
                        className="absolute bottom-0 left-[20%] w-[30%] h-[30%] bg-teal-500/10 rounded-full blur-[100px]"></div>
                </div>

                <div
                    className="container relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">

                    <div className="md:w-1/2 text-center md:text-left">
                        <div
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
                              <span className="relative flex h-2 w-2">
                                    <span
                                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                              </span>
                            {t.hero.role}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight tracking-tight">
                            {t.hero.mainTitle} <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t.hero.mainTitleHighlight}</span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                            {t.hero.tagline} {t.hero.about}
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href="#projects"
                               className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition font-bold shadow-xl shadow-blue-900/20 hover:shadow-blue-600/20 transform hover:-translate-y-1">
                                {t.hero.btnPortfolio}
                            </a>
                            <a href="/CV-EN.pdf" target="_blank"
                               className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-xl hover:bg-white/10 hover:border-white transition font-bold flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                {t.hero.btnCv}
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full relative">
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur-xl opacity-30 animate-pulse"></div>
                        <div
                            className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div
                                    className="ml-4 px-3 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono flex-1 text-center">viktor_portfolio.tsx
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                                alt="Developer Setup"
                                className="w-full h-[400px] object-cover opacity-90 hover:opacity-100 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-2">{t.sectionTitles.skills}</h2>
                            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
                        </div>
                        <span
                            className="text-slate-500 text-sm mt-4 md:mt-0 font-medium uppercase tracking-wider">{t.sectionTitles.skillsSub}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {skills.map((group, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                                    {group.category}
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {group.items.map((skill) => (
                                        <div key={skill.name}
                                             className="group flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/50 transition duration-300 transform hover:-translate-y-1 cursor-default">
                                            <div className="h-10 w-10 mb-3 relative flex items-center justify-center">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-bold text-slate-500 group-hover:text-blue-600 transition text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">{t.sectionTitles.experience}</h2>
                    <div className="space-y-8">
                        {t.experience.map((job, index) => (
                            <div key={index}
                                 className="relative pl-8 md:pl-0 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
                                <div className="md:flex items-start justify-between group">
                                    <div className="md:w-1/3 mb-2 md:mb-0 md:pr-12 md:text-right">
                                        <span
                                            className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wide mb-2">
                                          {job.period}
                                        </span>
                                        <h4 className="font-bold text-lg text-slate-800 leading-tight">{job.company}</h4>
                                    </div>

                                    <div
                                        className="hidden md:block absolute left-[33.33%] top-0 bottom-0 w-px bg-slate-100 transform -translate-x-px ml-6"></div>
                                    <div
                                        className="hidden md:block absolute left-[33.33%] top-8 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-sm transform -translate-x-1.5 z-10 ml-6"></div>

                                    <div className="md:w-2/3 md:pl-12">
                                        <h5 className="text-slate-900 font-bold mb-2 text-lg">{job.role}</h5>
                                        <p className="text-slate-600 leading-relaxed text-sm">{job.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-16 text-center">{t.sectionTitles.projects}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.projects.map((project, i) => (
                            <div key={i}
                                 className="group flex flex-col relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
                                <div
                                    className={`h-40 ${project.color} relative overflow-hidden flex items-center justify-center`}>
                                    <div
                                        className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                                    <span className="text-4xl font-black text-white/20 uppercase tracking-widest transform group-hover:scale-110 transition duration-500">
                                     Project {i + 1}
                                   </span>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag}
                                                  className="text-xs font-bold text-blue-300 bg-blue-900/30 px-2 py-1 rounded uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">{project.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>

                                    <a href={project.link} target="_blank"
                                       className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-700 hover:bg-blue-600 px-5 py-3 rounded-lg transition w-fit">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        {project.viewText}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-black text-white mb-4">{t.nav.title}<span
                                className="text-blue-600">{t.nav.titleHighlight}</span></h2>
                            <p className="text-slate-500 max-w-xs leading-relaxed mb-6">
                                {t.footer.text}
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/viktor-toman1991/" target="_blank"
                                   className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/viktortoman/portfolio" target="_blank"
                                   className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-black transition text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/viktor.toman.17" target="_blank"
                                   className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-4">{t.footer.navigate}</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-500 transition">{t.footer.home}</a></li>
                                <li><a href="#projects"
                                       className="hover:text-blue-500 transition">{t.footer.portfolio}</a></li>
                                <li><a href="/CV-EN.pdf" target="_blank"
                                       className="hover:text-blue-500 transition">{t.hero.btnCv}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-4">{t.footer.contact}</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href={`mailto:${t.contactInfo.email}`}
                                       className="hover:text-blue-500 transition">{t.contactInfo.email}</a></li>
                                <li><a href={`tel:${t.contactInfo.phone}`}
                                       className="hover:text-blue-500 transition">{t.contactInfo.phone}</a></li>
                                <li>{t.contactInfo.location}</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                        <p>© {new Date().getFullYear()} Viktor Tomán. {t.footer.rights}</p>
                        <p className="flex items-center gap-1">
                            Built with <span className="text-white">Next.js</span> & <span
                            className="text-blue-500">Tailwind</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}