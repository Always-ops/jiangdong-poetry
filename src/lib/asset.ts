// 给 public/ 下的静态资源加上 basePath（GitHub Pages 部署在子路径下）
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
