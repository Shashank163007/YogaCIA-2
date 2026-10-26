import React from 'react';

const PRACTICE_PHOTOS = [
  {
    src: '/images/tree-pose.jpeg',
    alt: 'Yoga practitioner holding Tree Pose with hands raised overhead',
    name: 'Tree Pose',
    focus: 'Balance and steady attention',
  },
  {
    src: '/images/warrior-pose.jpeg',
    alt: 'Yoga practitioner holding a raised-arm lunge pose',
    name: 'Warrior Pose',
    focus: 'Strength and grounded movement',
  },
  {
    src: '/images/upward-facing-dog.jpeg',
    alt: 'Yoga practitioner demonstrating an upward-facing backbend',
    name: 'Upward-Facing Dog',
    focus: 'Posture and an open chest',
  },
];

export default function PracticeGallery() {
  return (
    <section aria-labelledby="practice-gallery-heading" className="py-20 sm:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-700 bg-sage-100 px-3.5 py-1.5 rounded-full border border-sage-200">
            A Practice for Every Body
          </span>
          <h2 id="practice-gallery-heading" className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
            Find Your Flow
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Explore traditional postures that build balance, strength, and mindful movement at your own pace.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRACTICE_PHOTOS.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-3xl bg-sand-50 border border-stone-200/90 shadow-sm">
              <div className="h-80 sm:h-96 overflow-hidden bg-stone-200">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-5 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">{photo.name}</h3>
                <p className="mt-1 text-sm text-stone-600">{photo.focus}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
