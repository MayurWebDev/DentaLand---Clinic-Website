import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Calendar, Clock, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import Section from '../../components/Section';
import BookAppointmentCTA from '../../components/BookAppointmentCTA';
import { blogs } from '../../data/blogs';
import { radius } from '../../design-system/radius';
import { shadows } from '../../design-system/shadows';

const BlogDetail = () => {
  const { id } = useParams();

  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <Section className="text-center py-20 bg-white">
        <h3 className="text-xl font-bold text-slate-800">Article Not Found</h3>
        <p className="text-slate-500 mt-2">The article you are trying to read does not exist.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center text-sky-600 font-bold hover:underline">
          <ArrowLeft size={16} className="mr-1" /> Back to Dental Hub
        </Link>
      </Section>
    );
  }

  // Get other blogs (excluding current)
  const recommendations = blogs.filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Header back bar */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/blog" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors">
            <ArrowLeft size={14} className="mr-1" /> Back to Content Hub
          </Link>
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  url: window.location.href
                }).catch(console.error);
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Article link copied to clipboard!");
              }
            }}
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors gap-1.5 cursor-pointer"
          >
            <Share2 size={14} />
            Share
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-white py-12 md:py-16 text-left border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-100 uppercase tracking-wider">
            {post.category}
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-2">
            <div className="flex items-center gap-1">
              <User size={14} className="text-sky-600" />
              <span>By {post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main post body */}
      <Section id="blog-body" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main article (8 cols) */}
          <div className="lg:col-span-8 text-left space-y-8 max-w-none">
            
            {/* Header Image */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-sm border border-slate-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content html block */}
            <div 
              className="prose prose-sky prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 font-sans
                prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:pt-4 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2
                prose-h3:text-base prose-h3:sm:text-lg prose-h3:font-semibold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                prose-strong:text-slate-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags footer */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-3 py-1 rounded-full border border-slate-100">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Recommendations sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm font-display border-b border-slate-200/50 pb-2">
                Recommended Articles
              </h4>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/blog/${rec.id}`}
                    className="block space-y-2 group text-left"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-sky-600 block">
                      {rec.category}
                    </span>
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-sky-600 transition-colors leading-tight">
                      {rec.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* CTA Footer Section */}
      <Section id="blog-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA
          title="Looking for specific advice?"
          description="Talk to our specialists directly. Book a consultative evaluation across any of our clinics in Pune."
        />
      </Section>

    </div>
  );
};

export default BlogDetail;
