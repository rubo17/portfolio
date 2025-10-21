import { useState } from "react";

/**
 * @typedef {Object} CarouselImage
 * @property {string} src
 * @property {string} alt
 * @property {string} [description]
 */

/**
 * @param {Object} props
 * @param {CarouselImage[]} props.images
 */
export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 bg-secondary rounded border border-gray-700 text-center">
        <p className="text-gray-400">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative group">
        {/* Imagen Principal */}
        <div className="relative aspect-video bg-main rounded-lg overflow-hidden border border-gray-700">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Imagen ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Descripción de la imagen */}

        </div>

        {/* Botón Anterior */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Imagen anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Siguiente imagen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Contador */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Indicadores (Dots) */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-accent w-8"
                : "bg-gray-600 w-2 hover:bg-gray-500"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Miniaturas (Thumbnails) */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hidden">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden transition ${
              index === currentIndex
                ? "border-accent"
                : "border-gray-700 hover:border-gray-500"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt || `Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
