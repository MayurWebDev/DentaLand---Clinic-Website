import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import Section from '../../components/Section';
import BookAppointmentCTA from '../../components/BookAppointmentCTA';
import { blogs } from '../../data/blogs';
import { radius } from '../../design-system/radius';
import { shadows } from '../../design-system/shadows';

const BlogList = () => {
  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Dental Hub
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Dental Guides & Patient Tips
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Read expert-written articles on dental hygiene, smile design details, treatment comparisons, and oral care tips.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <Section id="blogs-directory" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <div
              key={post.id}
              className={`flex flex-col justify-between bg-white border border-slate-100 hover:border-sky-100 transition-all duration-300 overflow-hidden ${radius.card} ${shadows.ambient} hover:shadow-lg`}
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 text-left space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-tight">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed truncate-3-lines font-sans">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-50">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <User size={12} className="text-slate-400" />
                  <span>{post.author}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1"
                >
                  Read Article
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Footer Section */}
      <Section id="blogs-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default BlogList;
