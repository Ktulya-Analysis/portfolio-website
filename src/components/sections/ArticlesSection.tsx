import { articles } from '../../data/articles';
import { SectionContainer } from '../shared/SectionContainer';

export function ArticlesSection() {
  return (
    <SectionContainer id="articles" title="Articles & Case Studies">
      <div className="grid gap-6 lg:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-300">
                {article.platform}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{article.title}</h3>
              <p className="mt-3 text-slate-300">{article.description}</p>
              <a href={article.link} className="mt-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition-colors duration-300 hover:bg-white/20">
                Read
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
