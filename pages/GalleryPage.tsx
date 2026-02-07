
import React, { useState } from 'react';
import { ALBUMS } from '../constants';
import { Album } from '../types';

const GalleryPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentPhotoIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedAlbum) return;
    setCurrentPhotoIndex((prev) => (prev + 1) % selectedAlbum.images.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedAlbum) return;
    setCurrentPhotoIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
  };

  return (
    <div className="container mx-auto px-4 py-16 animate-in">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 italic">Galeria Américo Franco</h1>
        <p className="text-slate-600">Clique em um álbum para ver todos os momentos registrados.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALBUMS.map((album, i) => (
          <div 
            key={i} 
            className="group cursor-pointer"
            onClick={() => openAlbum(album)}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] border-4 border-white transition-all hover:shadow-2xl">
              <img 
                src={album.cover} 
                alt={album.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-white pr-6">
                <h3 className="text-xl font-bold mb-1 leading-tight">{album.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-blue-800/50 px-2 py-0.5 rounded-full">
                    {album.images.length} Fotos
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mural Section */}
      <div className="mt-20 p-8 sm:p-16 bg-blue-50 rounded-[3rem] text-center border-2 border-dashed border-blue-200 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase italic">Mural do Aluno</h2>
          <p className="text-blue-800 text-lg max-w-2xl mx-auto font-medium leading-relaxed italic">
            "Em breve, abriremos espaço para que você envie suas fotos e contribua com a nossa história."
          </p>
        </div>
        <div className="absolute top-10 left-10 text-blue-200/30 rotate-12 pointer-events-none">
           <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
        </div>
      </div>

      {/* Lightbox / Slider Modal */}
      {selectedAlbum && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/98 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-[110] bg-white/10 p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          {selectedAlbum.images.length > 1 && (
            <>
              <button 
                onClick={prevPhoto}
                className="absolute left-4 sm:left-10 text-white hover:text-yellow-400 transition-all z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextPhoto}
                className="absolute right-4 sm:right-10 text-white hover:text-yellow-400 transition-all z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          <div 
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full flex justify-center items-center">
              <img 
                key={currentPhotoIndex}
                src={selectedAlbum.images[currentPhotoIndex]} 
                alt={`${selectedAlbum.title} - ${currentPhotoIndex + 1}`} 
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10 animate-in zoom-in duration-300" 
              />
            </div>
            
            <div className="mt-8 text-center text-white px-4">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-yellow-400 mb-1">{selectedAlbum.title}</h2>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">
                Foto {currentPhotoIndex + 1} de {selectedAlbum.images.length}
              </p>
              
              {/* Thumbnail indicators */}
              <div className="flex justify-center space-x-2 mt-6 overflow-x-auto max-w-full py-2 no-scrollbar">
                {selectedAlbum.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhotoIndex(idx)}
                    className={`h-1.5 transition-all rounded-full ${idx === currentPhotoIndex ? 'w-8 bg-yellow-400' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
