import { articles } from '../../data/articles';
import { SectionContainer } from '../shared/SectionContainer';

export function ArticlesSection() {
  return (
    <SectionContainer id="articles" title="Articles & Case Studies">
      <div className="grid gap-6 lg:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/20 backdrop-blur-xl transition-all duration-250 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_16px_44px_rgba(7,15,34,0.22)]">
            <img src={article.image} alt={article.title} className="h-48 w-full object-cover transition-transform duration-250 ease-out hover:scale-[1.03]" />
            <div className="p-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-300">
                {article.platform}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{article.title}</h3>
              <p className="mt-3 text-slate-300">{article.description}</p>
              <a href={article.link} className="mt-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-250 ease-out hover:border-white/20 hover:bg-white/20 hover:-translate-y-0.5">
                Read
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
