import { BlogPost } from "@/types/blogs";
import { RecipeItem } from "@/types/recipes";

const items: RecipeItem[] = [
  {
    id: '0',
    title: 'Classic Sourdough Bread',
    description: 'A rustic artisan sourdough with a perfectly crispy crust and chewy interior. Made with our century-old starter for that perfect tangy flavor.',
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
    prepTime: '25 minutes',
    bakeTime: '45 minutes',
    totalTime: '14 hours (including fermentation)',
    yield: '1 large loaf, 12 generous servings',
    pdfUrl: '/mock-pdfs/sourdough-recipe.pdf'
  },
  {
    id: '1',
    title: 'Chocolate Chip Banana Bread',
    description: 'Moist and tender banana bread studded with dark chocolate chips. The perfect way to use up those overripe bananas sitting on your counter.',
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
    prepTime: '15 minutes',
    bakeTime: '60 minutes',
    totalTime: '1 hour 15 minutes',
    yield: '1 standard loaf, 10 slices',
    pdfUrl: '/mock-pdfs/banana-bread-recipe.pdf'
  },
  {
    id: '2',
    title: 'Artisan Pizza Dough',
    description: 'A versatile pizza dough that creates the perfect crispy-chewy crust. Cold fermented for enhanced flavor development.',
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
    prepTime: '20 minutes',
    bakeTime: '12 minutes',
    totalTime: '24 hours (including fermentation)',
    yield: '4 medium pizzas, serves 8',
    pdfUrl: '/mock-pdfs/pizza-dough-recipe.pdf'
  },
  {
    id: '3',
    title: 'Whole Grain Sandwich Bread',
    description: 'A nutritious everyday bread made with a blend of whole wheat and bread flour. Perfect for sandwiches and toast.',
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
    prepTime: '30 minutes',
    bakeTime: '40 minutes',
    totalTime: '3 hours 30 minutes',
    yield: '1 large loaf, 16 slices',
    pdfUrl: '/mock-pdfs/sandwich-bread-recipe.pdf'
  },
  {
    id: '4',
    title: 'French Baguettes',
    description: 'Traditional French baguettes with a golden crust and open, airy crumb. Made with just four ingredients: flour, water, salt, and yeast.',
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
    prepTime: '40 minutes',
    bakeTime: '25 minutes',
    totalTime: '4 hours',
    yield: '3 baguettes, serves 12',
    pdfUrl: '/mock-pdfs/baguette-recipe.pdf'
  }
]

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "My First Blog Post",
    author: "John Doe",
    date: "2024-01-26",
    content: "This is the content of my very first blog post. It's a bit short, but I'm just getting started!",
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
  },
  {
    id: 2,
    title: "A Journey into TypeScript",
    author: "Jane Smith",
    date: "2024-02-15",
    content: "Let's explore the wonders of TypeScript and how it can make your JavaScript code more robust and maintainable.",
      imageUrl: 'https://picsum.photos/seed/picsum/600/400',
  },
    {
    id: 3,
    title: "React Hooks: A Practical Guide",
    author: "David Lee",
    date: "2024-03-01",
    content: "A guide to React hooks that's aimed at helping you to better understand, from basic hooks to some advanced ones.",
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
  },
    {
    id: 4,
    title: "Nodejs for beginners",
    author: "David Lee",
    date: "2024-03-01",
    content: "Nodejs can be intimidating at first glance, so here is the guide for the beginners",
    imageUrl: 'https://picsum.photos/seed/picsum/600/400',
  }
];

export const getItems = (): RecipeItem[] => {
  return items;
};

export const getItemDetail = (itemId: number): RecipeItem => {
  const recipe = items.find(item => item.id === itemId.toString())
  if (!recipe) {
    throw new Error(`Recipe with id ${itemId} not found`)
  }
  return recipe
}

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts
}

export const getBlogPostDetail = (id: number): BlogPost => {
  console.log('getBlogPostDetail', id)
  const post = blogPosts.find(post => post.id === id)
  if (!post) {
    throw new Error(`Blog post with id ${id} not found`)
  }
  return post
}
