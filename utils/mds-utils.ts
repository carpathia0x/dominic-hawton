import path from 'path';
import fs from 'fs';

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const PROJECTS_PATH = path.join(process.cwd(), 'projects');

export const projectsFilePath = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
