const SITE_CONTENT = {
  title: "Micah's Inventory",
  subtitle: "Explore stories, reading, music, learning, and sports",
  tabs: [
    { id: 'stories', label: 'Stories' },
    { id: 'reading', label: 'Reading' },
    { id: 'music', label: 'Music' },
    { id: 'learning', label: 'My Learning' },
    { id: 'sports', label: 'Sports' }
  ],
  stories: [
    { title: 'Where do flies go in the Winter?', file: 'audio/where_do_flies_go_in_the_winter.m4a' },
    { title: "What Does 'As The Crow Flies' Mean?", file: 'audio/what_does_as_the_crow_flies_mean.m4a' },
    { title: 'What is Spring Water?', file: 'audio/what_is_spring_water.m4a' },
    { title: 'Why Do We Sneeze?', file: 'audio/why_do_we_sneeze.m4a' },
    { title: 'Why Do Pieces of Wood Have Knots?', file: 'audio/why_do_pieces_of_wood_have_knots.m4a' },
    { title: 'Why Do Snakes Coil Up to Sleep?', file: 'audio/why_do_snakes_coil_up_to_sleep.m4a' }
  ],
  reading: [
    { title: 'Reading Goal', description: 'A short reading plan for the week.', file: '' },
    { title: 'Poetry Practice', description: 'A calm collection of poems to enjoy.', file: '' }
  ],
  musicCategories: {
    suzuki: [
      { title: 'Level 1 Graduation Piece - Minuet in G Major', file: 'audio/level1.webm', link: 'https://www.youtube.com/watch?v=M6O6M05hV60' },
      { title: 'Level 2 Graduation Piece - Sonatina in G Major', file: 'audio/level2.webm', link: 'https://www.youtube.com/watch?v=ozd27F2Xn_o' },
      { title: 'Level 3 Graduation Piece - Sonatina in C Major', file: 'audio/level3.webm', link: 'https://www.youtube.com/watch?v=OHuKSd5hWsM' },
      { title: 'Level 4 Graduation Piece - Minuet 1, II and Gigue from Partita in Bflat BWV825', file: 'audio/level4.webm', link: 'https://www.youtube.com/watch?v=nWtlYeWjg1M' }
    ],
    ameb: [
      { title: 'Level 3 Graduation Piece - Sonatina in C Major', file: 'audio/level3.webm', link: 'https://www.youtube.com/watch?v=OHuKSd5hWsM' },
      { title: 'Level 4 Graduation Piece - Minuet 1, II and Gigue from Partita in Bflat BWV825', file: 'audio/level4.webm', link: 'https://www.youtube.com/watch?v=nWtlYeWjg1M' }
    ],
    collection: [
      { title: 'My Favourite Practice Pieces', description: 'Add your favourite recordings here.', file: '' }
    ]
  },
  sports: {
    swimming: {
      avatar: '🏊',
      name: 'Swimming',
      bio: 'Swimming helps build endurance, focus, and confidence.\nAdd your training notes here.'
    },
    basketball: {
      avatar: '🏀',
      name: 'Basketball',
      bio: 'Basketball improves teamwork, coordination, and energy.\nAdd your practice goals here.'
    }
  }
};
