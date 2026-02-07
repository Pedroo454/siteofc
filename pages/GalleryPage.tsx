
import React from 'react';

const GalleryPage: React.FC = () => {
  const albums = [
    { title: "Formatura 3º Ano 2023", count: 120, image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=800&auto=format&fit=crop" },
    { title: "Interclasses de Primavera", count: 45, image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop" },
    { title: "Feira de Profissões", count: 32, image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop" },
    { title: "Apresentação Teatral", count: 18, image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop" },
    { title: "Projeto Sustentabilidade", count: 25, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
    { title: "Visita Técnica USP", count: 54, image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Galeria Américo Franco</h1>
        <p className="text-slate-600">Registros históricos e momentos especiais vividos por nossos alunos.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] border-4 border-white">
              <img 
                src={album.image} 
                alt={album.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-all duration-300 pr-6">
                <h3 className="text-xl font-bold mb-1 leading-tight">{album.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-blue-800/50 px-2 py-0.5 rounded-full">{album.count} Arquivos</span>
                  <span className="text-xs text-blue-200">Clique para abrir</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 sm:p-16 bg-blue-50 rounded-[3rem] text-center border-2 border-dashed border-blue-200 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-blue-900 mb-4">Mural do Aluno</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto font-medium">Você tem fotos boas de algum evento da escola? O Grêmio está selecionando os melhores cliques para o mural oficial de 2024.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-800 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl uppercase tracking-widest text-xs">
              Enviar Minhas Fotos
            </button>
            <button className="bg-white text-blue-800 border-2 border-blue-800 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all uppercase tracking-widest text-xs">
              Ver Regulamento
            </button>
          </div>
        </div>
        {/* Subtle background icons */}
        <div className="absolute top-10 left-10 text-blue-100/50 rotate-12 opacity-50">
           <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
