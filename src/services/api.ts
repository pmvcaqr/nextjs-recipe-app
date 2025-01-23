import { BlogPost } from "@/types/blogs"
import { RecipeItem } from "@/types/recipes"
import {
  getItems,
  getItemDetail,
  getBlogPosts,
  getBlogPostDetail,
} from "./mockData"


export const fetchItems = async (): Promise<RecipeItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getItems()), 1000) // Mock delay API call
  })
}

export const fetchItemDetail = async (itemId: string): Promise<RecipeItem> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getItemDetail(+itemId)), 1000) // Mock delay API call
  })
}

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getBlogPosts()), 1000) // Mock delay API call
  })
}

export const fetchBlogDetail = async (itemId: string): Promise<BlogPost> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getBlogPostDetail(+itemId)), 1000) // Mock delay API call
  })
}
